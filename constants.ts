import { SchoolConfig } from "./types";

export const ACCENT_COLORS = [
  { name: "Blue", hex: "#3b82f6" },     // Default
  { name: "Indigo", hex: "#6366f1" },
  { name: "Violet", hex: "#8b5cf6" },
  { name: "Emerald", hex: "#10b981" },
  { name: "Amber", hex: "#f59e0b" },
  { name: "Orange", hex: "#f97316" },
  { name: "Red", hex: "#ef4444" },
  { name: "Pink", hex: "#ec4899" },
  { name: "Cyan", hex: "#06b6d4" },
];

export const TEXTS = {
  de: {
    appTitle: "Notentracker",
    uploadConfig: "Konfiguration laden",
    downloadConfig: "Daten speichern",
    semester: "Semester",
    overview: "Noten",
    statistics: "Statistik",
    average: "Durchschnitt",
    grades: "Noten",
    addGrade: "Note hinzufügen",
    upcoming: "Kommende Prüfungen",
    addUpcoming: "Kommende Prüfung hinzufügen",
    finalExam: "Abschlussprüfung",
    passed: "Bestanden",
    failed: "Nicht bestanden",
    insufficient: "Ungenügende Noten",
    settings: "Einstellungen",
    darkMode: "Dunkelmodus",
    language: "Sprache",
    noData: "Willkommen beim Notentracker. Wählen Sie eine Vorlage oder laden Sie Ihre Datei.",
    weight: "Gewichtung",
    date: "Datum",
    description: "Beschreibung",
    value: "Wert",
    cancel: "Abbrechen",
    save: "Speichern",
    gradePlaceholder: "Note (z.B. 5.5)",
    namePlaceholder: "Titel (z.B. Mathe Test 1)",
    delete: "Löschen",
    subCategories: "Teilbereiche",
    overallAverage: "Gesamtschnitt",
    criteria: "Promotionsbedingungen",
    criteriaInfo: "Max. ungenügend: {maxBad} | Min. Schnitt: {minAvg}",
    totalStats: "Gesamtstatistik",
    failureReasons: {
      minAverage: "Notenschnitt zu tief (< {val})",
      maxInsufficient: "Zu viele ungenügende Noten (> {val})",
      maxBelowFour: "Zu viele Noten unter 4.0 (> {val})"
    },
    daysLeft: "Tage übrig",
    today: "Heute",
    noUpcoming: "Keine anstehenden Prüfungen",
    selectTemplate: "Vorlage wählen",
    or: "oder",
    exit: "Schliessen",
    confirmExit: "Möchtest du die Konfiguration wirklich schliessen? Nicht gespeicherte Änderungen gehen verloren.",
    templates: {
      bms: "Technische BMS",
      gym: "Gymnasium (Maturität)",
      uni: "Studium (Bachelor)"
    },
    stats: {
      trend: "Notenentwicklung",
      distribution: "Notenverteilung",
      bestSubject: "Bestes Fach",
      worstSubject: "Schwächstes Fach",
      totalGrades: "Anzahl Noten",
      subjectComparison: "Fächervergleich (Aktuelles Semester)",
      noData: "Nicht genügend Daten für Statistiken."
    },
    auth: {
      login: "Anmelden",
      signup: "Registrieren",
      email: "E-Mail",
      password: "Passwort",
      logout: "Abmelden",
      syncing: "Synchronisiere...",
      synced: "Gespeichert",
      cloud: "Cloud Sync",
      loginTitle: "Login / Registrierung",
      loginDesc: "Melde dich an, um deine Noten in der Cloud zu speichern und zwischen Geräten zu synchronisieren.",
      switchSignUp: "Noch kein Konto? Registrieren",
      switchLogin: "Bereits ein Konto? Anmelden"
    },
    calendar: {
      title: "Kalender abonnieren",
      desc: "Füge diesen Link zu deinem Kalender (Google, Outlook, Apple) hinzu, um Prüfungen automatisch zu sehen.",
      copy: "Link kopieren",
      copied: "Kopiert!",
      enable: "Kalender aktivieren",
      info: "Cloud-Sync muss aktiv sein."
    },
    settingsView: {
      appearance: "Erscheinungsbild",
      general: "Allgemein",
      account: "Konto & Synchronisation",
      data: "Daten & Export",
      defaultSemester: "Standard Semester",
      defaultSemesterDesc: "Dieses Semester wird beim Start der App automatisch geöffnet.",
      themeDesc: "Wähle zwischen hellem und dunklem Design.",
      langDesc: "Wähle die Sprache der Applikation.",
      accentColor: "Akzentfarbe",
      accentColorDesc: "Wähle deine bevorzugte Farbe für die App.",
      exportDesc: "Lade deine aktuellen Daten als JSON-Datei herunter, um sie lokal zu sichern.",
      exportBtn: "Daten herunterladen"
    }
  },
  en: {
    appTitle: "Grade Tracker",
    uploadConfig: "Load Configuration",
    downloadConfig: "Save Data",
    semester: "Semester",
    overview: "Grades",
    statistics: "Statistics",
    average: "Average",
    grades: "Grades",
    addGrade: "Add Grade",
    upcoming: "Upcoming Exams",
    addUpcoming: "Add Upcoming Exam",
    finalExam: "Final Exam",
    passed: "Passed",
    failed: "Failed",
    insufficient: "Insufficient Grades",
    settings: "Settings",
    darkMode: "Dark Mode",
    language: "Language",
    noData: "Welcome to Grade Tracker. Select a template or upload your file.",
    weight: "Weight",
    date: "Date",
    description: "Description",
    value: "Value",
    cancel: "Cancel",
    save: "Save",
    gradePlaceholder: "Grade (e.g. 5.5)",
    namePlaceholder: "Title (e.g. Math Test 1)",
    delete: "Delete",
    subCategories: "Subcategories",
    overallAverage: "Overall Average",
    criteria: "Passing Criteria",
    criteriaInfo: "Max insufficient: {maxBad} | Min Avg: {minAvg}",
    totalStats: "Total Statistics",
    failureReasons: {
      minAverage: "Average too low (< {val})",
      maxInsufficient: "Too many insufficient grades (> {val})",
      maxBelowFour: "Too many grades below 4.0 (> {val})"
    },
    daysLeft: "Days left",
    today: "Today",
    noUpcoming: "No upcoming exams",
    selectTemplate: "Select Template",
    or: "or",
    exit: "Exit",
    confirmExit: "Are you sure you want to close the configuration? Unsaved changes will be lost.",
    templates: {
      bms: "Technical College",
      gym: "High School",
      uni: "University (Bachelor)"
    },
    stats: {
      trend: "Grade Trend",
      distribution: "Grade Distribution",
      bestSubject: "Best Subject",
      worstSubject: "Weakest Subject",
      totalGrades: "Total Grades",
      subjectComparison: "Subject Comparison (Current Semester)",
      noData: "Not enough data for statistics."
    },
    auth: {
      login: "Login",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      logout: "Logout",
      syncing: "Syncing...",
      synced: "Saved",
      cloud: "Cloud Sync",
      loginTitle: "Login / Sign Up",
      loginDesc: "Sign in to save your grades in the cloud and sync across devices.",
      switchSignUp: "No account? Sign up",
      switchLogin: "Already have an account? Login"
    },
    calendar: {
      title: "Subscribe to Calendar",
      desc: "Add this link to your calendar app (Google, Outlook, Apple) to automatically see upcoming exams.",
      copy: "Copy Link",
      copied: "Copied!",
      enable: "Enable Calendar",
      info: "Cloud sync must be active."
    },
    settingsView: {
      appearance: "Appearance",
      general: "General",
      account: "Account & Sync",
      data: "Data & Export",
      defaultSemester: "Default Semester",
      defaultSemesterDesc: "This semester will be opened automatically when the app starts.",
      themeDesc: "Choose between light and dark theme.",
      langDesc: "Choose the application language.",
      accentColor: "Accent Color",
      accentColorDesc: "Choose your preferred color for the app.",
      exportDesc: "Download your current data as a JSON file for local backup.",
      exportBtn: "Download Data"
    }
  },
  fr: {
    appTitle: "Suivi des Notes",
    uploadConfig: "Charger la configuration",
    downloadConfig: "Sauvegarder les données",
    semester: "Semestre",
    overview: "Notes",
    statistics: "Statistiques",
    average: "Moyenne",
    grades: "Notes",
    addGrade: "Ajouter une note",
    upcoming: "Examens à venir",
    addUpcoming: "Ajouter un examen",
    finalExam: "Examen final",
    passed: "Réussi",
    failed: "Échoué",
    insufficient: "Notes insuffisantes",
    settings: "Paramètres",
    darkMode: "Mode sombre",
    language: "Langue",
    noData: "Bienvenue sur le Suivi des Notes. Sélectionnez un modèle ou chargez votre fichier.",
    weight: "Pondération",
    date: "Date",
    description: "Description",
    value: "Valeur",
    cancel: "Annuler",
    save: "Enregistrer",
    gradePlaceholder: "Note (ex. 5.5)",
    namePlaceholder: "Titre (ex. Test de Maths 1)",
    delete: "Supprimer",
    subCategories: "Sous-catégories",
    overallAverage: "Moyenne générale",
    criteria: "Conditions de promotion",
    criteriaInfo: "Max insuffisant : {maxBad} | Moyenne min : {minAvg}",
    totalStats: "Statistiques globales",
    failureReasons: {
      minAverage: "Moyenne trop basse (< {val})",
      maxInsufficient: "Trop de notes insuffisantes (> {val})",
      maxBelowFour: "Trop de notes en dessous de 4.0 (> {val})"
    },
    daysLeft: "Jours restants",
    today: "Aujourd'hui",
    noUpcoming: "Pas d'examens à venir",
    selectTemplate: "Choisir un modèle",
    or: "ou",
    exit: "Quitter",
    confirmExit: "Êtes-vous sûr de vouloir fermer la configuration ? Les modifications non enregistrées seront perdues.",
    templates: {
      bms: "BMS Technique",
      gym: "Gymnase (Maturité)",
      uni: "Université (Bachelor)"
    },
    stats: {
      trend: "Évolution des notes",
      distribution: "Distribution des notes",
      bestSubject: "Meilleure matière",
      worstSubject: "Matière la plus faible",
      totalGrades: "Nombre de notes",
      subjectComparison: "Comparaison des matières (Semestre actuel)",
      noData: "Pas assez de données pour les statistiques."
    },
    auth: {
      login: "Connexion",
      signup: "S'inscrire",
      email: "E-mail",
      password: "Mot de passe",
      logout: "Déconnexion",
      syncing: "Synchronisation...",
      synced: "Enregistré",
      cloud: "Sync Cloud",
      loginTitle: "Connexion / Inscription",
      loginDesc: "Connectez-vous pour sauvegarder vos notes dans le cloud et synchroniser entre vos appareils.",
      switchSignUp: "Pas de compte ? S'inscrire",
      switchLogin: "Déjà un compte ? Connexion"
    },
    calendar: {
      title: "S'abonner au calendrier",
      desc: "Ajoutez ce lien à votre application de calendrier (Google, Outlook, Apple) pour voir automatiquement les examens.",
      copy: "Copier le lien",
      copied: "Copié !",
      enable: "Activer le calendrier",
      info: "La synchronisation cloud doit être active."
    },
    settingsView: {
      appearance: "Apparence",
      general: "Général",
      account: "Compte & Synchronisation",
      data: "Données & Exportation",
      defaultSemester: "Semestre par défaut",
      defaultSemesterDesc: "Ce semestre s'ouvrira automatiquement au démarrage.",
      themeDesc: "Choisissez entre le thème clair et sombre.",
      langDesc: "Choisissez la langue de l'application.",
      accentColor: "Couleur d'accent",
      accentColorDesc: "Choisissez votre couleur préférée pour l'application.",
      exportDesc: "Téléchargez vos données actuelles sous forme de fichier JSON pour une sauvegarde locale.",
      exportBtn: "Télécharger les données"
    }
  }
};

export const TEMPLATES: SchoolConfig[] = [
  {
    id: "bms-tech",
    name: "BMS Technisch",
    semesters: [
      { id: 1, name: "1. Semester" },
      { id: 2, name: "2. Semester" },
      { id: 3, name: "3. Semester" },
      { id: 4, name: "4. Semester" }
    ],
    subjects: [
      {
        id: "math1",
        name: "Mathematik Grundlagen",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: true,
        finalExamWeight: 50,
        semesters: [1, 2],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "german",
        name: "Deutsch",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: true,
        finalExamWeight: 50,
        semesters: [1, 2, 3, 4],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "english",
        name: "Englisch",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: true,
        finalExamWeight: 50,
        semesters: [1, 2, 3, 4],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "nature",
        name: "Naturwissenschaften",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: true,
        finalExamWeight: 50,
        semesters: [1, 2, 3, 4],
        grades: [],
        commingGrades: [],
        subCategories: [
          {
            name: "Physik",
            weight: 66,
            rounding: "0.5",
            semesters: [1, 2, 3, 4],
            grades: [],
            commingGrades: []
          },
          {
            name: "Chemie",
            weight: 33,
            rounding: "0.5",
            semesters: [1, 2],
            grades: [],
            commingGrades: []
          }
        ]
      }
    ],
    passingCriteria: {
      maxInsufficientGrades: 2,
      maxBelowFour: 2,
      minAverageGrade: 4
    },
    settings: {
      language: 'de',
      theme: 'light'
    }
  },
  {
    id: "gym-matura",
    name: "Gymnasiale Maturität",
    semesters: [
      { id: 1, name: "1. Semester" },
      { id: 2, name: "2. Semester" }
    ],
    subjects: [
      {
        id: "math",
        name: "Mathematik",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: false,
        semesters: [1, 2],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "german",
        name: "Deutsch",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: false,
        semesters: [1, 2],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "french",
        name: "Französisch",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: false,
        semesters: [1, 2],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "bio",
        name: "Biologie",
        weight: 1,
        rounding: "0.5",
        hasFinalExam: false,
        semesters: [1, 2],
        grades: [],
        commingGrades: [],
        subCategories: []
      }
    ],
    passingCriteria: {
      maxInsufficientGrades: 3,
      maxBelowFour: 3,
      minAverageGrade: 4
    },
    settings: {
      language: 'de',
      theme: 'light'
    }
  },
  {
    id: "uni-bachelor",
    name: "Bachelor Studium",
    semesters: [
      { id: 1, name: "Semester 1" },
      { id: 2, name: "Semester 2" },
      { id: 3, name: "Semester 3" },
      { id: 4, name: "Semester 4" },
      { id: 5, name: "Semester 5" },
      { id: 6, name: "Semester 6" }
    ],
    subjects: [
      {
        id: "modul1",
        name: "Grundlagen Informatik",
        weight: 1,
        rounding: "0.1",
        hasFinalExam: true,
        finalExamWeight: 100, // Often modules are 100% exam based or project based
        semesters: [1],
        grades: [],
        commingGrades: [],
        subCategories: []
      },
      {
        id: "modul2",
        name: "Mathematik 1",
        weight: 1,
        rounding: "0.1",
        hasFinalExam: true,
        finalExamWeight: 60,
        semesters: [1],
        grades: [],
        commingGrades: [],
        subCategories: [
           { name: "Vornoten / Übungen", weight: 40, rounding: "0.1", semesters: [1], grades: [], commingGrades: [] }
        ]
      }
    ],
    passingCriteria: {
      maxInsufficientGrades: 0, // Often strict in Uni
      maxBelowFour: 0,
      minAverageGrade: 3.8 // Example
    },
    settings: {
      language: 'de',
      theme: 'light'
    }
  }
];