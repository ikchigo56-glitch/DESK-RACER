import struct
import zlib
import math
import os

def create_png(width, height, rgba_bytes):
    raw = bytearray()
    for y in range(height):
        raw.append(0) # filter type 0 (None)
        start = y * width * 4
        raw.extend(rgba_bytes[start:start + width * 4])
    compressed = zlib.compress(bytes(raw), 9)

    def chunk(tag, data):
        crc = zlib.crc32(tag + data) & 0xffffffff
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", crc)

    ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    return b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr) + chunk(b"IDAT", compressed) + chunk(b"IEND", b"")

def render_desk_racer_icon(size):
    buf = bytearray(size * size * 4)
    cx, cy = size / 2.0, size / 2.0
    r_corner = size * 0.22 # iOS squircle radius

    for y in range(size):
        for x in range(size):
            idx = (y * size + x) * 4

            # Rounded squircle distance
            dx = max(0.0, abs(x - cx) - (cx - r_corner))
            dy = max(0.0, abs(y - cy) - (cy - r_corner))
            corner_dist = math.sqrt(dx * dx + dy * dy)

            if corner_dist > r_corner:
                # Outside rounded rect
                buf[idx] = 0
                buf[idx+1] = 0
                buf[idx+2] = 0
                buf[idx+3] = 0
                continue

            # Anti-aliased outer border
            alpha_edge = 1.0
            if corner_dist > r_corner - 1.5:
                alpha_edge = max(0.0, (r_corner - corner_dist) / 1.5)

            # Normalized coords from center [-1, 1]
            nx = (x - cx) / (size * 0.5)
            ny = (y - cy) / (size * 0.5)
            dist_center = math.sqrt(nx * nx + ny * ny)

            # Deep luxury cockpit radial background
            # Gradient: #14223d -> #0c1222 -> #050811
            t_bg = min(1.0, dist_center * 0.85)
            r = int(18 * (1 - t_bg) + 6 * t_bg)
            g = int(32 * (1 - t_bg) + 9 * t_bg)
            b = int(58 * (1 - t_bg) + 16 * t_bg)

            # Glowing cyan speed curves in lower background
            # Arc around y = 0.65
            dy_curve1 = abs(ny - 0.45 - 0.15 * (nx * nx))
            if dy_curve1 < 0.08:
                glow = max(0.0, 1.0 - dy_curve1 / 0.08)
                r = int(r * (1 - glow * 0.6) + 0 * (glow * 0.6))
                g = int(g * (1 - glow * 0.6) + 240 * (glow * 0.6))
                b = int(b * (1 - glow * 0.6) + 255 * (glow * 0.6))

            # Outer glowing metallic bezel (Cyan top-left to Gold bottom-right)
            border_dist = min(
                abs(x - 4), abs(x - (size - 4)),
                abs(y - 4), abs(y - (size - 4))
            )
            if corner_dist > r_corner - 6 or border_dist < 6:
                t_rim = (nx + ny + 2) / 4.0 # 0 at top-left, 1 at bottom-right
                t_rim = max(0.0, min(1.0, t_rim))
                # Cyan (0, 240, 255) to Gold (255, 170, 68)
                rim_r = int(0 * (1 - t_rim) + 255 * t_rim)
                rim_g = int(240 * (1 - t_rim) + 170 * t_rim)
                rim_b = int(255 * (1 - t_rim) + 68 * t_rim)
                blend = min(1.0, max(0.0, 1.0 - abs(corner_dist - (r_corner - 3)) / 3.0))
                r = int(r * (1 - blend) + rim_r * blend)
                g = int(g * (1 - blend) + rim_g * blend)
                b = int(b * (1 - blend) + rim_b * blend)

            # Central 3D Micro-Kart Silhouette & Cockpit
            # 1. Rear wing / spoiler: y around ny = -0.25 to -0.18, width = [-0.55, 0.55]
            if -0.26 <= ny <= -0.19 and abs(nx) <= 0.52:
                # Gold spoiler
                r, g, b = 255, 185, 75

            # 2. Spoiler endplates
            if -0.29 <= ny <= -0.15 and (0.47 <= abs(nx) <= 0.56):
                r, g, b = 255, 215, 110

            # 3. Rear tires: wide dark racing slicks
            if 0.0 <= ny <= 0.38 and (0.40 <= abs(nx) <= 0.62):
                # Tire texture
                r, g, b = 24, 30, 42
                if 0.44 <= abs(nx) <= 0.58 and 0.08 <= ny <= 0.30:
                    r, g, b = 2, 132, 199 # Blue wheel rim

            # 4. Front tires
            if 0.28 <= ny <= 0.55 and (0.32 <= abs(nx) <= 0.48):
                r, g, b = 24, 30, 42

            # 5. Side pods
            if 0.05 <= ny <= 0.34 and (0.16 <= abs(nx) <= 0.38):
                # Aerodynamic sidepod
                r, g, b = 3, 105, 161
                if 0.22 <= abs(nx) <= 0.32 and 0.10 <= ny <= 0.28:
                    r, g, b = 255, 170, 68 # Gold sidepod intake

            # 6. Central sleek aerodynamic monocoque / nosecone
            # Triangle from top (nx=0, ny=-0.12) to nose (nx=0, ny=0.55)
            nose_width = 0.16 + 0.24 * (ny + 0.12) if ny >= -0.12 else 0.0
            if -0.12 <= ny <= 0.52 and abs(nx) <= nose_width:
                # White-to-cyan sleek body
                t_body = (ny + 0.12) / 0.64
                r = int(245 * (1 - t_body) + 2 * t_body)
                g = int(250 * (1 - t_body) + 132 * t_body)
                b = int(255 * (1 - t_body) + 199 * t_body)

            # 7. Front aero splitter
            if 0.45 <= ny <= 0.58 and abs(nx) <= 0.50:
                r, g, b = 255, 180, 60

            # 8. Driver Helmet & Electric Cyan Visor
            dist_helmet = math.sqrt(nx * nx + (ny - (-0.02)) * (ny - (-0.02)))
            if dist_helmet <= 0.14:
                # White helmet shell with gold rim
                r, g, b = 245, 248, 255
                if 0.11 <= dist_helmet <= 0.14:
                    r, g, b = 255, 190, 80

            # Glowing Cyan Visor
            if -0.04 <= ny <= 0.05 and abs(nx) <= 0.09:
                r, g, b = 0, 240, 255 # Neon visor cyan
                if -0.03 <= ny <= -0.01 and abs(nx) <= 0.07:
                    r, g, b = 220, 255, 255 # Gloss reflection

            # 9. Daniel Tech Hex Monogram "DT" on nosecone
            if 0.28 <= ny <= 0.42 and abs(nx) <= 0.09:
                # Hex badge
                r, g, b = 10, 15, 28
                # Draw letter D and T in high resolution
                # D on left (nx: -0.07 to -0.01), T on right (nx: 0.01 to 0.07)
                is_d = (-0.06 <= nx <= -0.01) and (0.31 <= ny <= 0.39) and not (-0.04 <= nx <= -0.02 and 0.33 <= ny <= 0.37)
                is_t = (0.01 <= nx <= 0.07 and 0.31 <= ny <= 0.33) or (0.035 <= nx <= 0.05 and 0.33 <= ny <= 0.39)
                if is_d or is_t:
                    r, g, b = 0, 235, 255

            buf[idx] = min(255, max(0, r))
            buf[idx+1] = min(255, max(0, g))
            buf[idx+2] = min(255, max(0, b))
            buf[idx+3] = int(255 * alpha_edge)

    return create_png(size, size, buf)

os.makedirs('public', exist_ok=True)

# 1. 180x180 Apple Touch Icon (iOS Home Screen requirement)
with open('public/apple-touch-icon.png', 'wb') as f:
    f.write(render_desk_racer_icon(180))
print("Created public/apple-touch-icon.png (180x180)")

# 2. 32x32 Favicon PNG
with open('public/favicon-32x32.png', 'wb') as f:
    f.write(render_desk_racer_icon(32))
print("Created public/favicon-32x32.png (32x32)")

# 3. 16x16 Favicon PNG
with open('public/favicon-16x16.png', 'wb') as f:
    f.write(render_desk_racer_icon(16))
print("Created public/favicon-16x16.png (16x16)")

# 4. 192x192 Android / PWA Icon
with open('public/icon-192.png', 'wb') as f:
    f.write(render_desk_racer_icon(192))
print("Created public/icon-192.png (192x192)")

# 5. 512x512 High-Res Icon
with open('public/icon-512.png', 'wb') as f:
    f.write(render_desk_racer_icon(512))
print("Created public/icon-512.png (512x512)")
