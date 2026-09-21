const translations = {
  ro: {
    // Meta & Title
    page_title: "Anelis-Ramona Niță-Gheorghiaș | Full-Stack Software Engineer",
    meta_description: "Portofoliu dezvoltator web full-stack. Proiecte realizate cu Java, Spring Boot, React, Azure, microservicii și baze de date.",

    // Navbar
    nav_about: "Despre",
    nav_skills: "Abilități tehnice",
    nav_projects: "Proiecte",
    nav_contact: "Contact",
    nav_cv: "CV",
    nav_cv_aria: "Deschide CV în tab nou",

    // Despre / About
    about_name: "Anelis-Ramona Niță-Gheorghiaș",
    about_role: "Full-Stack Software Engineer",
    about_highlight: "Absolventă de master în Baze de Date și Tehnologii Software, cu o licență în Cibernetică Economică.",
    about_detail_1: "Abordez dezvoltarea de aplicații end-to-end: de la analiza cerințelor, logica de business și fluxurile utilizatorului, până la arhitectura backend, proiectarea bazei de date și implementarea frontend-ului, cu securitatea (IAM, RBAC, OAuth2) integrată încă din faza de design.",
    about_detail_2: "Combinația dintre studiile în cibernetică economică și specializarea tehnică îmi oferă o perspectivă mai largă — înțeleg atât arhitectura tehnică din spatele unei aplicații, cât și valoarea de business pe care aceasta trebuie să o livreze.",

    // Abilități Tehnice / Skills
    skills_title: "🔧<span>Abilități Tehnice</span>",
    skills_subtitle: "Tehnologii cu care lucrez în dezvoltarea aplicațiilor, pe care le învăț și le aprofundez continuu:",
    skills_cat_web: "🌐<span>Tehnologii Web</span>",
    skills_cat_languages: "🖥️<span>Limbaje de Programare</span>",
    skills_cat_frameworks: "🏗️<span>Framework‑uri & Biblioteci</span>",
    skills_cat_design: "🎨<span>Design & Prototipare</span>",
    skills_cat_cloud: "☁️<span>Microservicii & Cloud</span>",
    skills_cat_databases: "🗄️<span>Baze de Date</span>",
    skills_cat_datascience: "📊<span>Data Science</span>",
    skills_cat_management: "🫱🏼‍🫲🏾<span>Management & Colaborare</span>",

    // Proiecte / Projects
    projects_title: "🧩<span>Proiecte</span>",
    projects_subtitle: "Proiecte pe care le-am construit pentru a explora diverse tehnologii și a-mi dezvolta abilitățile practice",
    tech_label: "🛠️ Tehnologii:",
    github_aria: "Deschide repository GitHub",
    features_label: "Funcționalități:",
    prev_video: "Videoclipul anterior",
    next_video: "Videoclipul următor",
    prev_image: "Imaginea anterioară",
    next_image: "Imaginea următoare",

    // Proiect 1: KinetoCare
    kineto_title: "🩺 KinetoCare — Platformă distribuită pentru managementul parcursului terapeutic",
    kineto_desc: "Platformă pentru digitalizarea clinicilor de kinetoterapie, dezvoltată pornind de la analiza unei aplicații reale din domeniu și a nevoilor identificate împreună cu un kinetoterapeut. Gestionează end-to-end fluxul clinic: de la programări și comunicare în timp real, până la evaluări clinice și monitorizarea vizuală a progresului pacienților.",
    kineto_c1_title: "1. Autentificare & Control Acces (RBAC)",
    kineto_c1_desc: "Register și login prin Keycloak (OAuth2/JWT). Fiecare rol — pacient, terapeut, administrator — primește un dashboard izolat, iar accesul la resurse este autorizat strict prin <code>ROLE_*</code> la nivelul fiecărui microserviciu.",
    kineto_c2_title: "2. Logica de Booking — Selecție Automată a Serviciului",
    kineto_c2_desc: "La crearea unei programări, platforma determină automat serviciul necesar: evaluare inițială (fără istoric), serviciul recomandat de terapeut (ședințe disponibile) sau reevaluare forțată (ședințe epuizate) — cu notificare asincronă trimisă terapeutului prin RabbitMQ.",
    kineto_c3_title: "3. Fișa Clinică & Grafice de Evoluție",
    kineto_c3_desc: "Terapeutul accesează fișa completă a pacientului: evaluări inițiale, re-evaluări și grafice generate automat din jurnalele de recuperare (nivel durere, oboseală, dificultate exerciții) — pentru suport decizional vizual.",
    kineto_c4_title: "4. Chat în Timp Real & Notificări",
    kineto_c4_desc: "Mesagerie bidirecțională pacient-terapeut prin WebSockets/STOMP, cu validarea token-ului JWT la inițierea conexiunii. Sistemul de notificări in-app acoperă programări noi, mesaje necitite și remindere de re-evaluare.",
    kineto_c5_title: "5. Dashboard Administrativ",
    kineto_c5_desc: "Gestiunea locațiilor și catalogului de servicii, dezactivarea conturilor cu anularea automată a programărilor viitoare aferente și statistici agregate per locație: programări, venituri, terapeuți activi, rată de anulări.",
    kineto_c6_title: "6. Infrastructură: Docker & Kubernetes",
    kineto_c6_desc: "Containerizare completă: multi-stage build pentru frontend (Node.js → Nginx) și imagini bazate pe JRE Alpine pentru serviciile Spring Boot. Orchestrare Kubernetes cu Deployments, PVC pentru persistență, ConfigMap/Secrets, ReadinessProbe/LivenessProbe și Ingress Controller ca punct unic de intrare.",
    kineto_tech: "🛠️ Tehnologii: Java, Spring Boot, Spring Cloud Gateway, WebFlux, OpenFeign, Keycloak, RabbitMQ, WebSockets/STOMP, React, Vite, MySQL, Docker, Kubernetes",

    // Proiect 2: Azure Telemetry
    azure_title: "🔒 Secure Cloud App & Telemetry",
    azure_desc: "Aplicație web dinamică găzduită în Azure App Service, construită progresiv — de la persistență securizată în Azure SQL până la monitorizare end-to-end prin Application Insights.",
    azure_c1_title: "1. Aplicație Web (Item Logger)",
    azure_c1_desc: "Backend Flask conectat la Azure SQL Database pentru operațiuni CRUD, cu persistența datelor demonstrabilă la refresh.",
    azure_c2_title: "2. Securitate Bază de Date",
    azure_c2_desc: "Acces restricționat prin firewall strict — sunt permise exclusiv IP-urile de ieșire ale App Service-ului, cu regula implicită Azure dezactivată.",
    azure_c3_title: "3. Logare Erori & Observabilitate",
    azure_c3_desc: "Backend-ul înregistrează erori de validare (texte prea scurte, duplicate) cu coduri HTTP specifice (400, 409), analizate prin KQL în Log Analytics.",
    azure_c4_title: "4. Telemetrie Frontend",
    azure_c4_desc: "Evenimentul <code>AddButtonClicked</code> este trimis din browser via Application Insights JS SDK, monitorizând comportamentul utilizatorului în timp real.",
    azure_c5_title: "5. Infrastructure as Code",
    azure_c5_desc: "Infrastructura este provizionată declarativ prin Azure Bicep, iar configurarea dinamică a firewall-ului se face prin scripturi PowerShell.",
    azure_tech: "🛠️ Tehnologii: Python (Flask), Azure App Service, Azure SQL, Application Insights, KQL, Azure Bicep, PowerShell, Azure CLI",

    // Proiect 3: MovieInfo
    movie_title: "🎥 MovieInfo",
    movie_desc_intro: "Aplicație web pentru gestionarea și evaluarea filmelor. Utilizatorii pot căuta filme prin API, crea liste personalizate, lăsa review-uri cu rating și primi recomandări bazate pe preferințe.",
    movie_feat_1: "Căutare filme prin API cu posibilitatea de adăugare manuală",
    movie_feat_2: "Sistem de wishlist-uri personalizabile",
    movie_feat_3: "Review-uri publice/private cu rating agregat",
    movie_feat_4: "Recomandări personalizate pe pagina principală",
    movie_tech: "🛠️ Tehnologii: React.js, Spring Boot, SQL",

    // Proiect 4: HRManager
    hr_title: "💼 HRManager",
    hr_desc_intro: "Aplicație pentru managementul angajaților în departamentele de resurse umane. Permite gestionarea datelor personale, evidența concediilor și generarea de rapoarte vizuale pentru analiză.",
    hr_feat_1: "Autentificare și management sesiuni",
    hr_feat_2: "Operațiuni CRUD pentru datele angajaților",
    hr_feat_3: "Sistem complet de gestionare concedii",
    hr_feat_4: "Dashboard cu grafice pentru analize HR",
    hr_feat_5: "Teme UI personalizabile",
    hr_tech: "🛠️ Tehnologii: Python (Flask), HTML/CSS, JavaScript, MySQL",

    // Proiect 5: LostPals
    lostpals_title: "📱 LostPals",
    lostpals_desc_intro: "Aplicație Android dezvoltată în echipă pentru recuperarea obiectelor și animalelor pierdute. Utilizatorii pot posta anunțuri cu detalii, iar cei care le găsesc pot contacta proprietarii direct prin chat-ul integrat.",
    lostpals_feat_1: "Feed cu postări filtrate pe locație",
    lostpals_feat_2: "Upload imagine și descriere detaliată pentru anunțuri",
    lostpals_feat_3: "Chat one-to-one pentru coordinarea predării",
    lostpals_tech: "🛠️ Tehnologii: Kotlin, Android Views (XML), Room Database",

    // Proiect 6: Big Data / Analiza Performanței Academice
    bigdata_title: "📊 Analiza Performanței Academice a Studenților",
    bigdata_desc: "Analiză predictivă a performanței academice pe un dataset de 1000+ studenți, folosind PySpark pentru procesare și modele ML/DL pentru predicții în timp real.",
    bigdata_c1_title: "1. Regresia Liniară",
    bigdata_c1_desc: "Predicția scorului la examen pe baza orelor de studiu, somn și a timpului petrecut online.",
    bigdata_c2_title: "2. Regresia Logistică",
    bigdata_c2_desc: "Clasificarea binară (promovat/nepromovat) în funcție de orele de studiu și prezența la cursuri.",
    bigdata_c3_title: "3. Deep Learning & Optimizare",
    bigdata_c3_desc: "Implementarea unei rețele neuronale (MLP) și optimizarea hiperparametrilor cu GridSearchCV.",
    bigdata_c4_title: "4. Echilibrarea Datelor (Undersampling)",
    bigdata_c4_desc: "Rezolvarea dezechilibrului dintre clase pentru a îmbunătăți semnificativ detecția studenților nepromovați.",
    bigdata_c5_title: "5. Proces de Streaming",
    bigdata_c5_desc: "Simularea unui pipeline de date în timp real pentru a prezice rezultatele noilor studenți.",
    bigdata_tech: "🛠️ Tehnologii: PySpark, Pandas, NumPy, Scikit-learn, TensorFlow/Keras",

    // Contact
    contact_title: "📬<span>Contact</span>",
    contact_city: "București",
    contact_download_cv: "Descarcă CV-ul",
    contact_email_aria: "Trimite email",
    contact_phone_aria: "Sună",
    contact_cv_aria: "Descarcă CV",
    contact_linkedin_aria: "Profil LinkedIn",
    contact_github_aria: "Profil GitHub"
  },

  en: {
    // Meta & Title
    page_title: "Anelis-Ramona Niță-Gheorghiaș | Full-Stack Software Engineer",
    meta_description: "Full-Stack Software Engineer portfolio. Projects built with Java, Spring Boot, React, Azure, microservices, and databases.",

    // Navbar
    nav_about: "About",
    nav_skills: "Technical Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_cv: "CV",
    nav_cv_aria: "Open CV in new tab",

    // Despre / About
    about_name: "Anelis-Ramona Niță-Gheorghiaș",
    about_role: "Full-Stack Software Engineer",
    about_highlight: "Master's graduate in Databases and Software Technologies, with a Bachelor's degree in Economic Cybernetics.",
    about_detail_1: "I approach application development end-to-end: from requirements analysis, business logic, and user flows, to backend architecture, database schema design, and frontend implementation, with security (IAM, RBAC, OAuth2) built-in from the design phase.",
    about_detail_2: "The blend of economic cybernetics and technical specialization gives me a broader perspective — understanding both the underlying technical architecture and the tangible business value an application must deliver.",

    // Abilități Tehnice / Skills
    skills_title: "🔧<span>Technical Skills</span>",
    skills_subtitle: "Technologies I work with in application development, which I continuously learn and deepen:",
    skills_cat_web: "🌐<span>Web Technologies</span>",
    skills_cat_languages: "🖥️<span>Programming Languages</span>",
    skills_cat_frameworks: "🏗️<span>Frameworks & Libraries</span>",
    skills_cat_design: "🎨<span>Design & Prototyping</span>",
    skills_cat_cloud: "☁️<span>Microservices & Cloud</span>",
    skills_cat_databases: "🗄️<span>Databases</span>",
    skills_cat_datascience: "📊<span>Data Science</span>",
    skills_cat_management: "🫱🏼‍🫲🏾<span>Management & Collaboration</span>",

    // Proiecte / Projects
    projects_title: "🧩<span>Projects</span>",
    projects_subtitle: "Projects I built to explore diverse technologies and develop hands-on practical skills",
    tech_label: "🛠️ Technologies:",
    github_aria: "Open GitHub repository",
    features_label: "Features:",
    prev_video: "Previous video",
    next_video: "Next video",
    prev_image: "Previous image",
    next_image: "Next image",

    // Proiect 1: KinetoCare
    kineto_title: "🩺 KinetoCare — Distributed Platform for Physical Therapy Management",
    kineto_desc: "A platform for digitizing physical therapy clinics, designed from the analysis of real-world clinical software and needs identified directly with a physiotherapist. It manages the entire clinical workflow end-to-end: from appointments and real-time communication to clinical evaluations and visual patient progress tracking.",
    kineto_c1_title: "1. Authentication & Access Control (RBAC)",
    kineto_c1_desc: "Registration and login via Keycloak (OAuth2/JWT). Each role — patient, therapist, admin — accesses an isolated dashboard, with resource access strictly authorized via <code>ROLE_*</code> at every microservice level.",
    kineto_c2_title: "2. Booking Logic — Automated Service Selection",
    kineto_c2_desc: "When booking an appointment, the platform automatically determines the required service: initial evaluation (no prior history), therapist-recommended service (sessions remaining), or mandatory re-evaluation (sessions exhausted) — with asynchronous notifications dispatched to therapists via RabbitMQ.",
    kineto_c3_title: "3. Clinical Records & Progress Charts",
    kineto_c3_desc: "Therapists access complete patient records: initial assessments, re-evaluations, and automatically generated charts from recovery logs (pain scale, fatigue, exercise difficulty) — enabling visual decision support.",
    kineto_c4_title: "4. Real-Time Chat & Notifications",
    kineto_c4_desc: "Two-way patient-therapist messaging powered by WebSockets/STOMP, with JWT validation on connection handshake. The in-app notification system covers new appointments, unread messages, and re-evaluation reminders.",
    kineto_c5_title: "5. Administrative Dashboard",
    kineto_c5_desc: "Management of clinic locations and service catalogs, account deactivation with automatic cancellation of upcoming appointments, and aggregated per-location metrics: appointments, revenue, active therapists, and cancellation rates.",
    kineto_c6_title: "6. Infrastructure: Docker & Kubernetes",
    kineto_c6_desc: "Full containerization: multi-stage frontend builds (Node.js → Nginx) and Alpine JRE-based images for Spring Boot services. Kubernetes orchestration featuring Deployments, PVCs for persistence, ConfigMaps/Secrets, Readiness/Liveness probes, and an Ingress Controller as single entrypoint.",
    kineto_tech: "🛠️ Technologies: Java, Spring Boot, Spring Cloud Gateway, WebFlux, OpenFeign, Keycloak, RabbitMQ, WebSockets/STOMP, React, Vite, MySQL, Docker, Kubernetes",

    // Proiect 2: Azure Telemetry
    azure_title: "🔒 Secure Cloud App & Telemetry",
    azure_desc: "Dynamic web application hosted on Azure App Service, built progressively — from secure persistence in Azure SQL to end-to-end monitoring via Application Insights.",
    azure_c1_title: "1. Web Application (Item Logger)",
    azure_c1_desc: "Flask backend connected to Azure SQL Database for CRUD operations, with verified data persistence across reloads.",
    azure_c2_title: "2. Database Security",
    azure_c2_desc: "Access restricted by strict firewall rules — allowing solely the outbound IPs of the App Service, with the default 'Allow Azure services' rule disabled.",
    azure_c3_title: "3. Error Logging & Observability",
    azure_c3_desc: "The backend logs validation errors (short inputs, duplicates) with specific HTTP status codes (400, 409), analyzed using KQL queries in Azure Log Analytics.",
    azure_c4_title: "4. Frontend Telemetry",
    azure_c4_desc: "The <code>AddButtonClicked</code> event is tracked from the browser via the Application Insights JS SDK, monitoring user actions in real time.",
    azure_c5_title: "5. Infrastructure as Code",
    azure_c5_desc: "Infrastructure is declaratively provisioned with Azure Bicep, accompanied by PowerShell scripts for dynamic firewall configuration.",
    azure_tech: "🛠️ Technologies: Python (Flask), Azure App Service, Azure SQL, Application Insights, KQL, Azure Bicep, PowerShell, Azure CLI",

    // Proiect 3: MovieInfo
    movie_title: "🎥 MovieInfo",
    movie_desc_intro: "Web application for discovering, managing, and rating movies. Users can search movies via external API, create custom watchlists, write reviews with ratings, and receive personalized recommendations.",
    movie_feat_1: "API movie search with options for manual addition",
    movie_feat_2: "Customizable watchlist & favorite lists system",
    movie_feat_3: "Public and private reviews with aggregated ratings",
    movie_feat_4: "Personalized recommendations on the homepage",
    movie_tech: "🛠️ Technologies: React.js, Spring Boot, SQL",

    // Proiect 4: HRManager
    hr_title: "💼 HRManager",
    hr_desc_intro: "Employee management application tailored for Human Resources departments. Enables personal data administration, leave tracking, and visual analytics reporting.",
    hr_feat_1: "Authentication and session management",
    hr_feat_2: "CRUD operations for employee records",
    hr_feat_3: "Comprehensive leave and vacation management system",
    hr_feat_4: "Analytics dashboard with charts for HR insights",
    hr_feat_5: "Customizable UI themes",
    hr_tech: "🛠️ Technologies: Python (Flask), HTML/CSS, JavaScript, MySQL",

    // Proiect 5: LostPals
    lostpals_title: "📱 LostPals",
    lostpals_desc_intro: "Android application developed as a team project for reuniting lost pets and items with their owners. Users can post detailed listings, and finders can reach owners directly via built-in chat.",
    lostpals_feat_1: "Post feed with location-based filtering",
    lostpals_feat_2: "Image upload and detailed descriptions for listings",
    lostpals_feat_3: "One-to-one direct chat for pickup coordination",
    lostpals_tech: "🛠️ Technologies: Kotlin, Android Views (XML), Room Database",

    // Proiect 6: Big Data / Academic Performance
    bigdata_title: "📊 Student Academic Performance Analysis",
    bigdata_desc: "Predictive analysis of student academic performance on a 1,000+ student dataset, utilizing PySpark for data processing and ML/DL models for real-time predictions.",
    bigdata_c1_title: "1. Linear Regression",
    bigdata_c1_desc: "Exam score prediction based on study hours, sleep duration, and time spent online.",
    bigdata_c2_title: "2. Logistic Regression",
    bigdata_c2_desc: "Binary classification (pass/fail) based on study hours and course attendance.",
    bigdata_c3_title: "3. Deep Learning & Optimization",
    bigdata_c3_desc: "Implementation of a multi-layer perceptron (MLP) neural network with GridSearchCV hyperparameter tuning.",
    bigdata_c4_title: "4. Data Balancing (Undersampling)",
    bigdata_c4_desc: "Mitigating class imbalance to significantly enhance detection accuracy for at-risk/failing students.",
    bigdata_c5_title: "5. Streaming Pipeline",
    bigdata_c5_desc: "Simulating a real-time streaming data pipeline to predict outcomes for incoming student data.",
    bigdata_tech: "🛠️ Technologies: PySpark, Pandas, NumPy, Scikit-learn, TensorFlow/Keras",

    // Contact
    contact_title: "📬<span>Contact</span>",
    contact_city: "Bucharest, Romania",
    contact_download_cv: "Download Resume",
    contact_email_aria: "Send email",
    contact_phone_aria: "Call",
    contact_cv_aria: "Download CV",
    contact_linkedin_aria: "LinkedIn Profile",
    contact_github_aria: "GitHub Profile"
  }
};
