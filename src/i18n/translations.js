/**
 * Desk Racer - Multi-Language Translation Dictionary
 * Game created and developed by DANIEL TECH, Video Game Developer.
 */

export const SUPPORTED_LANGUAGES = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
];

export const TRANSLATIONS = {
  fr: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'Développeur de jeux vidéo',
    developerCreditShort: 'CRÉÉ PAR DANIEL TECH · DÉVELOPPEUR DE JEUX VIDÉO',
    developerBadgeOfficial: 'CONCEPTEUR & DÉVELOPPEUR DU JEU',
    developerStatement: 'Ce jeu Desk Racer a été intégralement conçu, programmé et réalisé par moi, DANIEL TECH, développeur de jeux vidéo. Passionné de simulations physiques 3D en temps réel et de mécaniques de pilotage immersives, j\'ai développé cette expérience complète de course micro-kart à l\'échelle 1:87 sur bureau.',
    developerTechTitle: 'Technologies & Architecture',
    developerTechDesc: 'Three.js WebGL 3D · Moteur physique Rapier3D · Post-processing Bokeh Depth of Field · Synthétiseur audio procédural Web Audio API',

    // Welcome Dialog
    welcomeEyebrow: 'CIRCUIT DE BUREAU · 3 TOURS',
    welcomeControlsLabel: 'COMMANDES',
    welcomeViewsLabel: 'VUES DU JEU',
    accelerate: 'ACCÉLÉRER',
    steer: 'DIRIGER',
    brake: 'FREINER',
    camChase: 'VUE POURSUITE',
    camCockpit: 'COCKPIT',
    camDesk: 'VUE D\'ENSEMBLE',
    camDrone: 'VUE DRONE',
    startTimeTrial: 'COMMENCER LA COURSE',
    preparingCircuit: 'PRÉPARATION DU CIRCUIT...',
    startingTimeTrial: 'DÉMARRAGE DU CHRONO...',
    enterKey: 'ENTRÉE ↵',
    settingsBtn: 'PARAMÈTRES',

    // HUD
    lap: 'TOUR',
    kmh: 'KM/H',
    lightsOut: 'PARTEZ !',

    // Finish Dialog
    finishEyebrow: 'CIRCUIT DE BUREAU · 3 TOURS COMPLÉTÉS',
    finishTitle: 'ARRIVÉE !',
    bestLap: 'MEILLEUR TOUR',
    raceAgain: 'REJOUER',
    autopilot: 'PILOTE AUTO',
    finishSignature: 'Jeu conçu et développé par DANIEL TECH, développeur de jeux vidéo',

    // Mobile Touch Controls
    touchLeft: 'GAUCHE',
    touchRight: 'DROITE',
    touchAccel: 'ACCÉL',
    touchBrake: 'FREIN',
    touchRespawn: 'REMISE',
    touchCam: 'CAMÉRA',
    touchAuto: 'AUTO',

    // Settings Modal
    settingsTitle: 'PARAMÈTRES',
    settingsSub: 'Options de jeu, langue et crédits',
    langSectionTitle: 'CHOIX DE LA LANGUE',
    devSectionTitle: 'DÉVELOPPEUR DU JEU',
    gameplaySectionTitle: 'OPTIONS DE JEU & AUDIO',
    audioMuteLabel: 'Effets sonores et moteur',
    topSpeedLabel: 'Vitesse maximale du kart',
    dofLabel: 'Flou de profondeur de champ (Bokeh)',
    sunLabel: 'Lumière dorée du soleil (Golden Hour)',
    lampLabel: 'Éclairage de la lampe de bureau',
    closeSettings: 'FERMER',
    activeTag: 'ACTIF',
  },

  en: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'Video Game Developer',
    developerCreditShort: 'CREATED BY DANIEL TECH · VIDEO GAME DEVELOPER',
    developerBadgeOfficial: 'CREATOR & LEAD GAME DEVELOPER',
    developerStatement: 'This game Desk Racer was entirely conceived, programmed, and created by me, DANIEL TECH, video game developer. Passionate about real-time 3D physics simulations and immersive driving mechanics, I developed this complete 1:87 HO scale micro-kart desktop diorama racing experience.',
    developerTechTitle: 'Technologies & Architecture',
    developerTechDesc: 'Three.js WebGL 3D · Rapier3D Physics Engine · Bokeh Depth of Field Post-Processing · Procedural Web Audio API Sound Synth',

    // Welcome Dialog
    welcomeEyebrow: 'DESKTOP CIRCUIT · 3 LAPS',
    welcomeControlsLabel: 'CONTROLS',
    welcomeViewsLabel: 'GAME VIEWS',
    accelerate: 'ACCELERATE',
    steer: 'STEER',
    brake: 'BRAKE',
    camChase: 'CHASE VIEW',
    camCockpit: 'COCKPIT',
    camDesk: 'FULL DESK VIEW',
    camDrone: 'DRONE VIEW',
    startTimeTrial: 'START TIME TRIAL',
    preparingCircuit: 'PREPARING CIRCUIT...',
    startingTimeTrial: 'STARTING TIME TRIAL...',
    enterKey: 'ENTER ↵',
    settingsBtn: 'SETTINGS',

    // HUD
    lap: 'LAP',
    kmh: 'KM/H',
    lightsOut: 'LIGHTS OUT!',

    // Finish Dialog
    finishEyebrow: 'DESKTOP CIRCUIT · 3 LAPS COMPLETE',
    finishTitle: 'FINISH',
    bestLap: 'BEST LAP',
    raceAgain: 'RACE AGAIN',
    autopilot: 'AUTO-PILOT',
    finishSignature: 'Game designed and developed by DANIEL TECH, Video Game Developer',

    // Mobile Touch Controls
    touchLeft: 'LEFT',
    touchRight: 'RIGHT',
    touchAccel: 'ACCEL',
    touchBrake: 'BRAKE',
    touchRespawn: 'RESET',
    touchCam: 'CAMERA',
    touchAuto: 'AUTO',

    // Settings Modal
    settingsTitle: 'SETTINGS',
    settingsSub: 'Game options, language & credits',
    langSectionTitle: 'LANGUAGE SELECTION',
    devSectionTitle: 'GAME DEVELOPER',
    gameplaySectionTitle: 'GAMEPLAY & AUDIO OPTIONS',
    audioMuteLabel: 'Sound effects & engine audio',
    topSpeedLabel: 'Kart top speed multiplier',
    dofLabel: 'Cinematic depth of field (Bokeh)',
    sunLabel: 'Golden hour sun intensity',
    lampLabel: 'Desk lamp lighting intensity',
    closeSettings: 'CLOSE',
    activeTag: 'ACTIVE',
  },

  ar: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'دانيال تك · DANIEL TECH',
    developerRole: 'مطوّر ألعاب فيديو',
    developerCreditShort: 'تم التطوير بواسطة DANIEL TECH · مطوّر ألعاب فيديو',
    developerBadgeOfficial: 'المصمم والمطوّر الرسمي للعبة',
    developerStatement: 'هذه اللعبة Desk Racer تم تصميمها وبرمجتها وتطويرها بالكامل بواسطة DANIEL TECH (دانيال تك)، مطوّر ألعاب فيديو. بشغف عميق بمحاكاة الفيزياء ثلاثية الأبعاد والتجارب التفاعلية السريعة، طوّرت حلبة سباق الكارت المصغرة بمقياس 1:87 على طاولة مكتب حقيقية بتقنيات رسومية متطورة.',
    developerTechTitle: 'التقنيات والمحرك المستخدم',
    developerTechDesc: 'محرك Three.js WebGL ثلاثي الأبعاد · فيزياء Rapier3D الواقعية · مؤثرات ضبابية العدسة السينمائية Bokeh · صوتيات إجرائية تفاعلية Web Audio',

    // Welcome Dialog
    welcomeEyebrow: 'حلبة المكتب · 3 دورات',
    welcomeControlsLabel: 'أزرار التحكم',
    welcomeViewsLabel: 'زوايا الكاميرا',
    accelerate: 'تسارع',
    steer: 'توجيه',
    brake: 'فرملة',
    camChase: 'كاميرا المتابعة',
    camCockpit: 'قمرة القيادة',
    camDesk: 'عرض المكتب الكامل',
    camDrone: 'كاميرا الدرون',
    startTimeTrial: 'بدء سباق الوقت',
    preparingCircuit: 'جاري تجهيز الحلبة...',
    startingTimeTrial: 'انطلاق السباق...',
    enterKey: 'إدخال ↵',
    settingsBtn: 'الإعدادات',

    // HUD
    lap: 'الدورة',
    kmh: 'كم/س',
    lightsOut: 'انطلاق !',

    // Finish Dialog
    finishEyebrow: 'حلبة المكتب · اكتملت 3 دورات',
    finishTitle: 'خط النهاية !',
    bestLap: 'أفضل دورة',
    raceAgain: 'السباق مجدداً',
    autopilot: 'الطيار الآلي',
    finishSignature: 'تم تصميم وتطوير هذه اللعبة بواسطة DANIEL TECH مطوّر ألعاب فيديو',

    // Mobile Touch Controls
    touchLeft: 'يسار',
    touchRight: 'يمين',
    touchAccel: 'تسارع',
    touchBrake: 'فرملة',
    touchRespawn: 'إعادة',
    touchCam: 'كاميرا',
    touchAuto: 'تلقائي',

    // Settings Modal
    settingsTitle: 'إعدادات اللعبة',
    settingsSub: 'تخصيص اللغة وخيارات اللعب والمطور',
    langSectionTitle: 'اختيار لغة العرض',
    devSectionTitle: 'مطوّر اللعبة',
    gameplaySectionTitle: 'خيارات الصوت وأسلوب اللعب',
    audioMuteLabel: 'المؤثرات الصوتية وصوت المحرك',
    topSpeedLabel: 'مضاعف السرعة القصوى للكارت',
    dofLabel: 'تأثير عمق الميدان السينمائي (Bokeh)',
    sunLabel: 'شدة أشعة شمس وقت الغروب الذهبي',
    lampLabel: 'إضاءة مصباح المكتب',
    closeSettings: 'إغلاق ومتابعة',
    activeTag: 'مفعّل',
  },

  es: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'Desarrollador de videojuegos',
    developerCreditShort: 'CREADO POR DANIEL TECH · DESARROLLADOR DE VIDEOJUEGOS',
    developerBadgeOfficial: 'CREADOR Y DESARROLLADOR PRINCIPAL',
    developerStatement: 'Este juego Desk Racer fue completamente diseñado, programado y creado por mí, DANIEL TECH, desarrollador de videojuegos. Apasionado por las simulaciones de física 3D en tiempo real y la conducción inmersiva, desarrollé esta experiencia completa de carreras de micro-karts a escala 1:87 en un diorama de escritorio fotorrealista.',
    developerTechTitle: 'Tecnologías y Arquitectura',
    developerTechDesc: 'Three.js WebGL 3D · Motor de física Rapier3D · Post-procesado Bokeh Depth of Field · Sintetizador procedural Web Audio API',

    // Welcome Dialog
    welcomeEyebrow: 'CIRCUITO DE ESCRITORIO · 3 VUELTAS',
    welcomeControlsLabel: 'CONTROLES',
    welcomeViewsLabel: 'VISTAS DE JUEGO',
    accelerate: 'ACELERAR',
    steer: 'GIRAR',
    brake: 'FRENAR',
    camChase: 'VISTA TRASERA',
    camCockpit: 'CABINA',
    camDesk: 'VISTA ESCRITORIO',
    camDrone: 'VISTA DRON',
    startTimeTrial: 'INICIAR CONTRARRELOJ',
    preparingCircuit: 'PREPARANDO CIRCUITO...',
    startingTimeTrial: 'INICIANDO CARRERA...',
    enterKey: 'ENTER ↵',
    settingsBtn: 'AJUSTES',

    // HUD
    lap: 'VUELTA',
    kmh: 'KM/H',
    lightsOut: '¡YA!',

    // Finish Dialog
    finishEyebrow: 'CIRCUITO DE ESCRITORIO · 3 VUELTAS COMPLETAS',
    finishTitle: '¡META!',
    bestLap: 'MEJOR VUELTA',
    raceAgain: 'CORRER DE NUEVO',
    autopilot: 'PILOTO AUTO',
    finishSignature: 'Juego diseñado y desarrollado por DANIEL TECH, Desarrollador de videojuegos',

    // Mobile Touch Controls
    touchLeft: 'IZQ',
    touchRight: 'DER',
    touchAccel: 'ACEL',
    touchBrake: 'FRENO',
    touchRespawn: 'REINICIO',
    touchCam: 'CÁMARA',
    touchAuto: 'AUTO',

    // Settings Modal
    settingsTitle: 'AJUSTES DEL JUEGO',
    settingsSub: 'Opciones de juego, idioma y créditos',
    langSectionTitle: 'SELECCIÓN DE IDIOMA',
    devSectionTitle: 'DESARROLLADOR DEL JUEGO',
    gameplaySectionTitle: 'OPCIONES DE JUEGO Y AUDIO',
    audioMuteLabel: 'Efectos de sonido y motor',
    topSpeedLabel: 'Multiplicador de velocidad máxima',
    dofLabel: 'Profundidad de campo cinematográfica (Bokeh)',
    sunLabel: 'Intensidad de luz solar (Golden Hour)',
    lampLabel: 'Intensidad de la lámpara de escritorio',
    closeSettings: 'CERRAR',
    activeTag: 'ACTIVO',
  },

  de: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'Videospiel-Entwickler',
    developerCreditShort: 'ERSTELLT VON DANIEL TECH · VIDEOSPIEL-ENTWICKLER',
    developerBadgeOfficial: 'SCHÖPFER & HAUPTENTWICKLER',
    developerStatement: 'Dieses Spiel Desk Racer wurde vollständig von mir, DANIEL TECH, Videospiel-Entwickler, konzipiert, programmiert und realisiert. Aus Leidenschaft für 3D-Echtzeit-Physiksimulationen und immersives Fahrverhalten entstand dieses Rennspiel im Maßstab 1:87 auf einem Schreibtisch-Diorama.',
    developerTechTitle: 'Technologie & Engine',
    developerTechDesc: 'Three.js WebGL 3D · Rapier3D Physik · Bokeh Tiefenunschärfe Shader · Prozeduraler Web Audio Sound-Synthesizer',

    // Welcome Dialog
    welcomeEyebrow: 'SCHREIBTISCH-RUNDKURS · 3 RUNDEN',
    welcomeControlsLabel: 'STEUERUNG',
    welcomeViewsLabel: 'KAMERA-ANSICHTEN',
    accelerate: 'BESCHLEUNIGEN',
    steer: 'LENKEN',
    brake: 'BREMSEN',
    camChase: 'VERFOLGER-KAMERA',
    camCockpit: 'COCKPIT',
    camDesk: 'SCHREIBTISCH-ANSICHT',
    camDrone: 'DROHNEN-KAMERA',
    startTimeTrial: 'ZEITFAHREN STARTEN',
    preparingCircuit: 'RUNDKURS WIRD VORBEREITET...',
    startingTimeTrial: 'ZEITFAHREN STARTET...',
    enterKey: 'ENTER ↵',
    settingsBtn: 'EINSTELLUNGEN',

    // HUD
    lap: 'RUNDE',
    kmh: 'KM/H',
    lightsOut: 'LOS GEHT\'S!',

    // Finish Dialog
    finishEyebrow: 'SCHREIBTISCH-RUNDKURS · 3 RUNDEN BEENDET',
    finishTitle: 'ZIEL!',
    bestLap: 'BESTE RUNDE',
    raceAgain: 'NOCHMAL FAHREN',
    autopilot: 'AUTOPILOT',
    finishSignature: 'Entwickelt von DANIEL TECH, Videospiel-Entwickler',

    // Mobile Touch Controls
    touchLeft: 'LINKS',
    touchRight: 'RECHTS',
    touchAccel: 'GAS',
    touchBrake: 'BREMSE',
    touchRespawn: 'RESET',
    touchCam: 'KAMERA',
    touchAuto: 'AUTO',

    // Settings Modal
    settingsTitle: 'EINSTELLUNGEN',
    settingsSub: 'Spieloptionen, Sprache & Credits',
    langSectionTitle: 'SPRACHAUSWAHL',
    devSectionTitle: 'ENTWICKLER DES SPIELS',
    gameplaySectionTitle: 'GAMEPLAY & AUDIO OPTIONEN',
    audioMuteLabel: 'Soundeffekte & Motorgeräusche',
    topSpeedLabel: 'Höchstgeschwindigkeits-Multiplikator',
    dofLabel: 'Kinematische Tiefenunschärfe (Bokeh)',
    sunLabel: 'Sonnenlicht-Intensität (Golden Hour)',
    lampLabel: 'Schreibtischlampen-Helligkeit',
    closeSettings: 'SCHLIESSEN',
    activeTag: 'AKTIV',
  },

  it: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'Sviluppatore di videogiochi',
    developerCreditShort: 'CREATO DA DANIEL TECH · SVILUPPATORE DI VIDEOGIOCHI',
    developerBadgeOfficial: 'CREATORE E SVILUPPATORE PRINCIPALE',
    developerStatement: 'Questo gioco Desk Racer è stato interamente ideato, programmato e sviluppato da me, DANIEL TECH, sviluppatore di videogiochi. Con passione per la simulazione fisica 3D in tempo reale e il gameplay automobilistico, ho creato questa corsa di micro-kart in scala 1:87 su scrivania.',
    developerTechTitle: 'Tecnologie & Motore',
    developerTechDesc: 'Three.js WebGL 3D · Motore fisico Rapier3D · Post-elaborazione Bokeh Depth of Field · Sintetizzatore procedurale Web Audio API',

    // Welcome Dialog
    welcomeEyebrow: 'CIRCUITO DA SCRIVANIA · 3 GIRI',
    welcomeControlsLabel: 'COMANDI',
    welcomeViewsLabel: 'VISUALI DI GIOCO',
    accelerate: 'ACCELERARE',
    steer: 'STERZARE',
    brake: 'FRENARE',
    camChase: 'INSEGUIMENTO',
    camCockpit: 'COCKPIT',
    camDesk: 'VISTA SCRIVANIA',
    camDrone: 'VISTA DRONE',
    startTimeTrial: 'INIZIA PROVA A TEMPO',
    preparingCircuit: 'PREPARAZIONE CIRCUITO...',
    startingTimeTrial: 'PARTENZA IN CORSO...',
    enterKey: 'INVIO ↵',
    settingsBtn: 'IMPOSTAZIONI',

    // HUD
    lap: 'GIRO',
    kmh: 'KM/H',
    lightsOut: 'VIA!',

    // Finish Dialog
    finishEyebrow: 'CIRCUITO DA SCRIVANIA · 3 GIRI COMPLETATI',
    finishTitle: 'TRAGUARDO!',
    bestLap: 'MIGLIOR GIRO',
    raceAgain: 'CORRI ANCORA',
    autopilot: 'PILOTA AUTOMATICO',
    finishSignature: 'Gioco ideato e sviluppato da DANIEL TECH, sviluppatore di videogiochi',

    // Mobile Touch Controls
    touchLeft: 'SINISTRA',
    touchRight: 'DESTRA',
    touchAccel: 'ACCEL',
    touchBrake: 'FRENO',
    touchRespawn: 'RESET',
    touchCam: 'CAMERA',
    touchAuto: 'AUTO',

    // Settings Modal
    settingsTitle: 'IMPOSTAZIONI',
    settingsSub: 'Opzioni di gioco, lingua e crediti',
    langSectionTitle: 'SELEZIONE LINGUA',
    devSectionTitle: 'SVILUPPATORE DEL GIOCO',
    gameplaySectionTitle: 'OPZIONI DI GIOCO E AUDIO',
    audioMuteLabel: 'Effetti sonori e motore',
    topSpeedLabel: 'Moltiplicatore velocità massima',
    dofLabel: 'Profondità di campo (Bokeh)',
    sunLabel: 'Intensità luce solare (Golden Hour)',
    lampLabel: 'Luce lampada da scrivania',
    closeSettings: 'CHIUDI',
    activeTag: 'ATTIVO',
  },

  pt: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'Desenvolvedor de jogos',
    developerCreditShort: 'CRIADO POR DANIEL TECH · DESENVOLVEDOR DE JOGOS',
    developerBadgeOfficial: 'CRIADOR E DESENVOLVEDOR PRINCIPAL',
    developerStatement: 'Este jogo Desk Racer foi totalmente concebido, programado e criado por mim, DANIEL TECH, desenvolvedor de jogos. Apaixonado por simulações de física 3D em tempo real e jogos de corrida, desenvolvi esta experiência de micro-kart em escala 1:87 em diorama de mesa de trabalho.',
    developerTechTitle: 'Tecnologias e Motor',
    developerTechDesc: 'Three.js WebGL 3D · Física Rapier3D · Pós-processamento Bokeh Depth of Field · Sintetizador procedural Web Audio API',

    // Welcome Dialog
    welcomeEyebrow: 'CIRCUITO DE MESA · 3 VOLTAS',
    welcomeControlsLabel: 'CONTROLES',
    welcomeViewsLabel: 'CÂMERAS DE JOGO',
    accelerate: 'ACELERAR',
    steer: 'VIRAR',
    brake: 'FREAR',
    camChase: 'VISTA TRASEIRA',
    camCockpit: 'CABINE',
    camDesk: 'VISTA DA MESA',
    camDrone: 'VISTA DRONE',
    startTimeTrial: 'INICIAR CONTRA-RELÓGIO',
    preparingCircuit: 'PREPARANDO CIRCUITO...',
    startingTimeTrial: 'INICIANDO PROVA...',
    enterKey: 'ENTER ↵',
    settingsBtn: 'CONFIGURAÇÕES',

    // HUD
    lap: 'VOLTA',
    kmh: 'KM/H',
    lightsOut: 'LARGADA!',

    // Finish Dialog
    finishEyebrow: 'CIRCUITO DE MESA · 3 VOLTAS COMPLETAS',
    finishTitle: 'FIM DE PROVA!',
    bestLap: 'MELHOR VOLTA',
    raceAgain: 'CORRER DE NOVO',
    autopilot: 'PILOTO AUTOMÁTICO',
    finishSignature: 'Jogo criado e desenvolvido por DANIEL TECH, desenvolvedor de jogos',

    // Mobile Touch Controls
    touchLeft: 'ESQ',
    touchRight: 'DIR',
    touchAccel: 'ACEL',
    touchBrake: 'FREIO',
    touchRespawn: 'RESET',
    touchCam: 'CÂMERA',
    touchAuto: 'AUTO',

    // Settings Modal
    settingsTitle: 'CONFIGURAÇÕES',
    settingsSub: 'Opções de jogo, idioma e créditos',
    langSectionTitle: 'SELEÇÃO DE IDIOMA',
    devSectionTitle: 'DESENVOLVEDOR DO JOGO',
    gameplaySectionTitle: 'OPÇÕES DE JOGO E ÁUDIO',
    audioMuteLabel: 'Efeitos sonoros e motor',
    topSpeedLabel: 'Multiplicador de velocidade máxima',
    dofLabel: 'Profundidade de campo (Bokeh)',
    sunLabel: 'Intensidade da luz solar (Golden Hour)',
    lampLabel: 'Luminária da mesa',
    closeSettings: 'FECHAR',
    activeTag: 'ATIVO',
  },

  ja: {
    // Brand & Developer
    brandTitle: 'Desk Racer',
    developerName: 'DANIEL TECH',
    developerRole: 'ゲーム開発者',
    developerCreditShort: '開発：DANIEL TECH · ゲーム開発者',
    developerBadgeOfficial: 'クリエイター＆リードゲーム開発者',
    developerStatement: '本作『Desk Racer』は、3Dリアルタイム物理シミュレーションと臨場感溢れるドライビングに情熱を注ぐゲーム開発者 DANIEL TECH が自ら企画・プログラミング・制作を行いました。1:87 HOスケールのマイクロカートによるリアルな卓上ジオラマサーキットをお楽しみください。',
    developerTechTitle: '採用テクノロジー',
    developerTechDesc: 'Three.js WebGL 3D · Rapier3D 物理エンジン · Bokeh被写界深度ポストプロセス · Web Audio API プロシージャル音源',

    // Welcome Dialog
    welcomeEyebrow: 'デスクサーキット · 3周レース',
    welcomeControlsLabel: '操作方法',
    welcomeViewsLabel: 'カメラ視点',
    accelerate: '加速',
    steer: 'ステアリング',
    brake: 'ブレーキ',
    camChase: 'チェイスカメラ',
    camCockpit: 'コックピット視点',
    camDesk: 'デスク全景',
    camDrone: 'ドローン視点',
    startTimeTrial: 'タイムアタック開始',
    preparingCircuit: 'コース準備中...',
    startingTimeTrial: 'レース開始中...',
    enterKey: 'ENTER ↵',
    settingsBtn: '設定',

    // HUD
    lap: 'LAP',
    kmh: 'KM/H',
    lightsOut: 'スタート！',

    // Finish Dialog
    finishEyebrow: 'デスクサーキット · 3周完走',
    finishTitle: 'ゴール！',
    bestLap: '最速ラップ',
    raceAgain: 'もう一度走る',
    autopilot: 'オートパイロット',
    finishSignature: '開発・制作：DANIEL TECH（ゲーム開発者）',

    // Mobile Touch Controls
    touchLeft: '左',
    touchRight: '右',
    touchAccel: 'アクセル',
    touchBrake: 'ブレーキ',
    touchRespawn: 'リセット',
    touchCam: 'カメラ',
    touchAuto: 'オート',

    // Settings Modal
    settingsTitle: 'ゲーム設定',
    settingsSub: '言語設定、グラフィック、開発者情報',
    langSectionTitle: '表示言語の選択',
    devSectionTitle: '開発者クレジット',
    gameplaySectionTitle: 'ゲームプレイ＆サウンド設定',
    audioMuteLabel: 'サウンド＆エンジン音',
    topSpeedLabel: 'カートの最高速度倍率',
    dofLabel: '被写界深度（ボケ効果）',
    sunLabel: '夕暮れの日差し（ゴールデンアワー）',
    lampLabel: 'デスクライトの明るさ',
    closeSettings: '閉じる',
    activeTag: '選択中',
  },
};

const STORAGE_KEY = 'desk_racer_language';

export function getStoredLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
  } catch (_e) {
    // Ignore localStorage access restrictions
  }

  // Detect browser language if available
  try {
    const navLang = navigator.language || navigator.userLanguage || '';
    const code2 = navLang.slice(0, 2).toLowerCase();
    if (TRANSLATIONS[code2]) {
      return code2;
    }
  } catch (_e) {
    // Ignore
  }

  // Default to French as requested in user prompt, or fallback to fr/en
  return 'fr';
}

export function saveLanguage(code) {
  if (!TRANSLATIONS[code]) return;
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch (_e) {
    // Ignore
  }
}

export function getTranslation(langCode = null) {
  const code = langCode || getStoredLanguage();
  return TRANSLATIONS[code] || TRANSLATIONS.fr;
}
