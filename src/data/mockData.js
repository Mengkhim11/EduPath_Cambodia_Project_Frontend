export const universitiesData = [
  {
    id: "rupp",
    name: "Royal University of Phnom Penh",
    shortName: "RUPP",
    location: "Phnom Penh, Cambodia",
    address: "Russian Federation Boulevard, Toul Kork, Phnom Penh",
    type: "Public",
    ranking: "Top Ranked",
    specialty: "Science, technology, humanities & languages",
    description: "Cambodia’s oldest and largest public university, offering a wide range of programs spanning natural sciences, engineering, social sciences, and the Institute of Foreign Languages (IFL).",
    website: "https://www.rupp.edu.kh",
    image: "/assets/rupp-campus.png",
    students: "22,000+",
    faculties: 6,
    established: 1960,
    featured: true,
    overviewText: "Discover a broad learning community spanning natural sciences, engineering, social sciences, humanities, and languages. RUPP stands at the heart of Cambodia's public higher education system, equipping graduates with knowledge to excel locally and globally.",
    programs: [
      {
        id: "cs-rupp",
        name: "Computer Science",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Science",
        credits: 120,
        description: "Comprehensive curriculum covering algorithms, software engineering, databases, networking, and modern web & mobile development."
      },
      {
        id: "telecom-rupp",
        name: "Telecommunication & Electronic Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 Years",
        faculty: "Faculty of Engineering",
        credits: 128,
        description: "Study digital signal processing, embedded systems, RF communications, and modern IoT networks."
      },
      {
        id: "ite-rupp",
        name: "Information Technology Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 Years",
        faculty: "Faculty of Engineering",
        credits: 130,
        description: "Focus on cloud computing, cybersecurity fundamentals, DevOps, and systems administration."
      },
      {
        id: "ib-rupp",
        name: "International Business",
        degree: "Bachelor of Arts",
        duration: "4 Years",
        faculty: "Institute of Foreign Languages (IFL)",
        credits: 120,
        description: "Global commerce, international trade law, economics, and foreign business communications in English."
      },
      {
        id: "bio-rupp",
        name: "Bio-Engineering & Biotechnology",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Science",
        credits: 124,
        description: "Molecular biology, biochemistry, fermentation technology, and environmental biotechnology."
      }
    ],
    admissionSteps: [
      {
        step: "01",
        title: "Explore programs and entry requirements",
        detail: "Review grade requirements and high school national examination (BacII) criteria for your chosen faculty."
      },
      {
        step: "02",
        title: "Prepare your academic documents",
        detail: "Gather your high school diploma, national exam certificate, identity card, and recent photographs."
      },
      {
        step: "03",
        title: "Check the current intake with the university",
        detail: "Submit your application during the official MoEYS and university admissions enrollment window."
      }
    ],
    scholarshipsAvailable: [
      "Government MoEYS Full Scholarship",
      "RUPP Merit-Based Tuition Waiver",
      "ASEAN Academic Exchange Grant"
    ]
  },
  {
    id: "itc",
    name: "Institute of Technology of Cambodia",
    shortName: "ITC",
    location: "Phnom Penh, Cambodia",
    address: "Russian Federation Boulevard, Khan Tuol Kouk, Phnom Penh",
    type: "Public",
    ranking: "Engineering",
    specialty: "Engineering, technology & applied sciences",
    description: "A prestigious engineering institution exploring civil, electrical, chemical, and information engineering with cutting-edge laboratories and international French/Japanese partnerships.",
    website: "https://www.itc.edu.kh",
    image: "/assets/itc-campus.png",
    students: "6,500+",
    faculties: 5,
    established: 1964,
    featured: true,
    overviewText: "ITC is recognized as Cambodia's premier institute for technological innovation, training top-tier engineers in civil, electrical, chemical, and digital disciplines.",
    programs: [
      {
        id: "civil-itc",
        name: "Civil Engineering & Infrastructure",
        degree: "Diplôme d'Ingénieur",
        duration: "5 Years",
        faculty: "Faculty of Civil Engineering",
        credits: 150,
        description: "Structural design, transportation, water resource management, geotechnical engineering, and environmental design."
      },
      {
        id: "gie-itc",
        name: "Information & Communication Engineering",
        degree: "Diplôme d'Ingénieur",
        duration: "5 Years",
        faculty: "Faculty of Information and Communication",
        credits: 150,
        description: "Advanced algorithms, artificial intelligence, software architecture, cyber-physical systems, and distributed networks."
      },
      {
        id: "eee-itc",
        name: "Electrical & Energy Engineering",
        degree: "Diplôme d'Ingénieur",
        duration: "5 Years",
        faculty: "Faculty of Electrical Engineering",
        credits: 150,
        description: "Power grids, renewable energy, industrial automation, robotics, and smart microgrid control."
      },
      {
        id: "food-itc",
        name: "Food Technology & Chemical Engineering",
        degree: "Diplôme d'Ingénieur",
        duration: "5 Years",
        faculty: "Faculty of Chemical and Food Engineering",
        credits: 150,
        description: "Food preservation, chemical process design, quality assurance, nutrition, and bio-industrial development."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School BacII Exam with Grade A, B, or C", detail: "Science track preferred." },
      { step: "02", title: "Pass ITC National Competitive Entrance Examination", detail: "Rigorous test in Mathematics, Physics, and Logic." },
      { step: "03", title: "Complete 2-Year Preparatory Cycle (Tronc Commun)", detail: "Foundational training before engineering specialization." }
    ],
    scholarshipsAvailable: ["French Embassy Excellence Grant", "JICA Engineering Scholarship", "ITC Foundation Waiver"]
  },
  {
    id: "cadt",
    name: "Cambodia Academy of Digital Technology",
    shortName: "CADT",
    location: "Phnom Penh, Cambodia",
    address: "National Road 6A, Prek Leap, Chroy Changvar, Phnom Penh",
    type: "Public / Digital",
    ranking: "Digital Tech",
    specialty: "Digital tech, AI & telecommunications",
    description: "Cambodia’s flagship digital university cultivating talent in Artificial Intelligence, Software Engineering, Cybersecurity, Data Science, and Digital Economy.",
    website: "https://www.cadt.edu.kh",
    image: "/assets/cadt-campus.png",
    students: "2,200+",
    faculties: 3,
    established: 2020,
    featured: true,
    overviewText: "Equipped with state-of-the-art innovation labs, incubator spaces, and top researchers in tech and digital entrepreneurship under the Ministry of Post and Telecommunications.",
    programs: [
      {
        id: "ai-cadt",
        name: "Artificial Intelligence & Data Science",
        degree: "Bachelor of Computer Science",
        duration: "4 Years",
        faculty: "Faculty of Digital Technologies",
        credits: 124,
        description: "Machine learning, natural language processing, computer vision, big data pipelines, and deep neural models."
      },
      {
        id: "cyber-cadt",
        name: "Cybersecurity & Digital Forensics",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Digital Technologies",
        credits: 124,
        description: "Network penetration testing, cryptographic protocols, incident response, digital forensics, and security operations."
      },
      {
        id: "se-cadt",
        name: "Software Engineering & Cloud Computing",
        degree: "Bachelor of Computer Science",
        duration: "4 Years",
        faculty: "Faculty of Digital Technologies",
        credits: 124,
        description: "Full-stack cloud applications, microservices architecture, DevOps pipelines, and mobile system engineering."
      },
      {
        id: "digecon-cadt",
        name: "Digital Business & E-Commerce",
        degree: "Bachelor of Digital Economy",
        duration: "4 Years",
        faculty: "Faculty of Digital Economy",
        credits: 120,
        description: "Fintech business models, digital marketing, blockchain applications, and product management."
      }
    ],
    admissionSteps: [
      { step: "01", title: "Submit High School transcript and National Exam results", detail: "High aptitude in math/sciences required." },
      { step: "02", title: "Take CADT Digital Aptitude & English Proficiency Assessment", detail: "Online test evaluating analytical thinking." },
      { step: "03", title: "Personal Interview & Code/Project Showcase", detail: "Demonstrate passion for technological innovation." }
    ],
    scholarshipsAvailable: ["Techo Digital Talent Full Scholarship", "MPTC Capacity Building Grant", "Women in Tech Scholarship"]
  },
  {
    id: "aupp",
    name: "American University of Phnom Penh",
    shortName: "AUPP",
    location: "Phnom Penh, Cambodia",
    address: "278H Koh Pich, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh",
    type: "Private",
    ranking: "International",
    specialty: "Dual US Degree & Global programs",
    description: "Offering US-accredited dual degrees with Fort Hays State University and University of Arizona, providing American curricula right in the heart of Cambodia.",
    website: "https://www.aupp.edu.kh",
    image: "/assets/aupp-campus.png",
    students: "1,800+",
    faculties: 4,
    established: 2013,
    featured: true,
    overviewText: "American curriculum with world-class international faculty, modern Koh Pich campus facilities, and direct pathway to recognized American university degrees.",
    programs: [
      {
        id: "se-aupp",
        name: "Software Development (Dual Degree)",
        degree: "B.S. Software Development (US Accredited)",
        duration: "4 Years",
        faculty: "School of Technology",
        credits: 120,
        description: "Full stack engineering, agile methodologies, product management, and cloud infrastructure with US degree accreditation."
      },
      {
        id: "ba-aupp",
        name: "Business Administration & Finance",
        degree: "B.S. Business Administration",
        duration: "4 Years",
        faculty: "School of Business",
        credits: 120,
        description: "Corporate finance, global marketing, investment banking, and strategic entrepreneurship."
      },
      {
        id: "law-aupp",
        name: "Global Legal Studies & International Law",
        degree: "Bachelor of Arts in Law",
        duration: "4 Years",
        faculty: "School of Law",
        credits: 120,
        description: "International public law, arbitration, commercial law, human rights, and diplomacy."
      },
      {
        id: "cyb-aupp",
        name: "Cybersecurity Systems",
        degree: "B.S. Cybersecurity (University of Arizona)",
        duration: "4 Years",
        faculty: "School of Technology",
        credits: 120,
        description: "Enterprise cyber defense, cloud security, vulnerability management, and threat intelligence."
      }
    ],
    admissionSteps: [
      { step: "01", title: "Application Form with High School Diploma", detail: "Minimum GPA 3.0 or equivalent standard." },
      { step: "02", title: "English Proficiency (IELTS 6.0+ or AUPP Placement Test)", detail: "Immersion classes provided if needed." },
      { step: "03", title: "Admissions Committee Interview", detail: "Review extracurriculars and leadership goals." }
    ],
    scholarshipsAvailable: ["AUPP Merit Excellence Award", "Future Leaders Full Tuition Grant", "First-Generation Scholar Fund"]
  },
  {
    id: "rule",
    name: "Royal University of Law and Economics",
    shortName: "RULE",
    location: "Phnom Penh, Cambodia",
    address: "Monivong Boulevard, Sangkat Boeung Trabaek, Khan Chamkarmon, Phnom Penh",
    type: "Public",
    ranking: "Law & Economics",
    specialty: "Law, economics, banking, international relations & commerce",
    description: "Cambodia’s premier public university for legal education, macroeconomic policy, banking, and international diplomacy.",
    website: "https://www.rule.edu.kh",
    image: "/assets/rule-campus.jpg",
    students: "18,000+",
    faculties: 4,
    established: 1949,
    featured: false,
    overviewText: "RULE is Cambodia's premier institution for training magistrates, attorneys, economists, and corporate executives, featuring dual degree programs with French university consortia.",
    programs: [
      {
        id: "law-rule",
        name: "Bachelor of Laws (LL.B)",
        degree: "Bachelor of Law",
        duration: "4 Years",
        faculty: "Faculty of Law",
        credits: 120,
        description: "Civil code, criminal jurisprudence, corporate governance, intellectual property, and judicial procedure in Cambodia."
      },
      {
        id: "econ-rule",
        name: "Economics & Development Policy",
        degree: "Bachelor of Economics",
        duration: "4 Years",
        faculty: "Faculty of Economics and Management",
        credits: 120,
        description: "Macroeconomics, econometrics, ASEAN trade integration, fiscal policy, and public financial management."
      },
      {
        id: "bank-rule",
        name: "Banking and Finance",
        degree: "Bachelor of Business Administration",
        duration: "4 Years",
        faculty: "Faculty of Economics and Management",
        credits: 120,
        description: "Commercial banking, credit risk analysis, digital banking systems, and investment portfolio management."
      },
      {
        id: "ir-rule",
        name: "International Relations & Diplomacy",
        degree: "Bachelor of Arts in International Relations",
        duration: "4 Years",
        faculty: "Faculty of Public Administration",
        credits: 120,
        description: "Geopolitics, multilateral treaties, foreign diplomacy, ASEAN security architecture, and international negotiation."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School Examination (BacII)", detail: "Pass national exam with Grade A, B, C, or D." },
      { step: "02", title: "Faculty Registration & Specialization Selection", detail: "Select Khmer track or French/English International dual degree track." },
      { step: "03", title: "Entrance Assessment for Dual Degree programs", detail: "Required for French/English cooperation programs." }
    ],
    scholarshipsAvailable: ["MoEYS Government Scholarship", "French Cooperation Legal Grant", "RULE Top Performer Waiver"]
  },
  {
    id: "uhs",
    name: "University of Health Sciences",
    shortName: "UHS",
    location: "Phnom Penh, Cambodia",
    address: "73 Monivong Boulevard, Sangkat Srah Chork, Khan Daun Penh, Phnom Penh",
    type: "Public",
    ranking: "Medical & Health",
    specialty: "Medicine, dentistry, pharmacy, nursing & public health",
    description: "The pinnacle of healthcare education in Cambodia, training the nation's medical doctors, surgeons, dental specialists, and pharmacists.",
    website: "https://www.uhs.edu.kh",
    image: "/assets/uhs-campus.jpg",
    students: "7,000+",
    faculties: 4,
    established: 1946,
    featured: false,
    overviewText: "UHS (Université des Sciences de la Santé) operates in close partnership with Phnom Penh's major national referral hospitals, preparing healthcare leaders.",
    programs: [
      {
        id: "med-uhs",
        name: "General Medicine",
        degree: "Doctor of Medicine (M.D.)",
        duration: "8 Years",
        faculty: "Faculty of Medicine",
        credits: 240,
        description: "Pre-clinical sciences, internal medicine, surgery, pediatrics, obstetrics, and intensive clinical hospital residency."
      },
      {
        id: "dent-uhs",
        name: "Dental Surgery",
        degree: "Doctor of Dental Surgery (D.D.S.)",
        duration: "7 Years",
        faculty: "Faculty of Dentistry",
        credits: 210,
        description: "Oral pathology, orthodontics, periodontology, restorative dental surgery, and clinical dental practice."
      },
      {
        id: "pharm-uhs",
        name: "Pharmacy",
        degree: "Bachelor of Pharmacy (Pharm.D track)",
        duration: "5 Years",
        faculty: "Faculty of Pharmacy",
        credits: 160,
        description: "Pharmacology, medicinal chemistry, clinical therapeutics, pharmaceutical formulation, and regulatory affairs."
      },
      {
        id: "nurs-uhs",
        name: "Nursing & Midwifery",
        degree: "Bachelor of Science in Nursing",
        duration: "4 Years",
        faculty: "Faculty of Nursing and Health Sciences",
        credits: 120,
        description: "Patient care, critical care nursing, maternal health, clinical triage, and hospital medical procedures."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School Examination (BacII) - Science Track", detail: "Grade A or B strongly recommended." },
      { step: "02", title: "Pass Highly Competitive National Medical Entrance Exam", detail: "Biology, Chemistry, Mathematics, and French/English." },
      { step: "03", title: "Foundation Year in Health Sciences", detail: "Passing GPA required to enter clinical clinical degree paths." }
    ],
    scholarshipsAvailable: ["Government Full Medical Bursary", "WHO Health Development Fellowship", "Ministry of Health Service Scholarship"]
  },
  {
    id: "rua",
    name: "Royal University of Agriculture",
    shortName: "RUA",
    location: "Phnom Penh, Cambodia",
    address: "Chamkar Daung, Sangkat Dangkao, Khan Dangkao, Phnom Penh",
    type: "Public",
    ranking: "Agriculture & Bio-Sciences",
    specialty: "Agronomy, veterinary medicine, agro-industry & forestry",
    description: "Cambodia's premier agricultural university pioneering sustainable farming, food security, veterinary medicine, and modern agro-business.",
    website: "https://www.rua.edu.kh",
    image: "/assets/rua-campus.jpg",
    students: "5,000+",
    faculties: 8,
    established: 1964,
    featured: false,
    overviewText: "Located in Chamkar Daung on an expansive green research campus, RUA drives Cambodia's sustainable agriculture transformation, rural development, and animal health sciences.",
    programs: [
      {
        id: "agro-rua",
        name: "Agronomy & Crop Science",
        degree: "Bachelor of Science in Agronomy",
        duration: "4 Years",
        faculty: "Faculty of Agronomy",
        credits: 120,
        description: "Crop genetics, smart irrigation, soil nutrition, plant pathology, precision farming, and sustainable agricultural systems."
      },
      {
        id: "vet-rua",
        name: "Veterinary Medicine",
        degree: "Doctor of Veterinary Medicine (D.V.M.)",
        duration: "5 Years",
        faculty: "Faculty of Veterinary Medicine",
        credits: 150,
        description: "Animal anatomy, pathology, livestock epidemiology, surgical intervention, and zoonotic disease prevention."
      },
      {
        id: "food-rua",
        name: "Agro-Industry & Food Technology",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Agro-Industry",
        credits: 120,
        description: "Post-harvest preservation, agricultural product processing, packaging engineering, and quality safety standards."
      },
      {
        id: "econ-rua",
        name: "Agricultural Economics & Rural Development",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Agricultural Economics and Rural Development",
        credits: 120,
        description: "Agribusiness supply chain, agricultural commodity markets, rural microfinance, and community development."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School Examination (BacII)", detail: "Open to science and social tracks." },
      { step: "02", title: "MoEYS & Ministry of Agriculture Central Enrollment", detail: "Priority given to provincial rural students." },
      { step: "03", title: "Campus Registration and Orientation", detail: "Practical field lab placements begin in Year 2." }
    ],
    scholarshipsAvailable: ["Ministry of Agriculture Full Grant", "JICA Green Agriculture Scholarship", "RUA Merit Waiver"]
  },
  {
    id: "num",
    name: "National University of Management",
    shortName: "NUM",
    location: "Phnom Penh, Cambodia",
    address: "Street 96, Sangkat Wat Phnom, Khan Daun Penh, Phnom Penh",
    type: "Public",
    ranking: "Business & Digital Economy",
    specialty: "Management, digital innovation, accounting, fintech & tourism",
    description: "A premier business institution centrally located near Wat Phnom, leading Cambodia in digital entrepreneurship, business incubation, and global commerce.",
    website: "https://www.num.edu.kh",
    image: "/assets/num-campus.jpg",
    students: "14,000+",
    faculties: 5,
    established: 1983,
    featured: false,
    overviewText: "NUM houses the Social Innovation Lab and modern incubation hubs, fostering entrepreneurial ventures, international dual degree partnerships, and digital market leadership.",
    programs: [
      {
        id: "digecon-num",
        name: "Digital Economy & Innovation",
        degree: "Bachelor of Digital Economy",
        duration: "4 Years",
        faculty: "Faculty of Digital Economy",
        credits: 120,
        description: "Digital transformation, fintech payment ecosystems, artificial intelligence in business, and platform economics."
      },
      {
        id: "mgmt-num",
        name: "Business Management & Entrepreneurship",
        degree: "Bachelor of Business Administration",
        duration: "4 Years",
        faculty: "Faculty of Management",
        credits: 120,
        description: "Strategic planning, human resource leadership, corporate innovation, and startup acceleration."
      },
      {
        id: "tour-num",
        name: "Tourism & Hospitality Management",
        degree: "Bachelor of Arts in Tourism",
        duration: "4 Years",
        faculty: "Faculty of Tourism and Hospitality",
        credits: 120,
        description: "Sustainable ecotourism, international hotel management, airline operations, and event management."
      },
      {
        id: "acct-num",
        name: "Accounting and Financial Technology",
        degree: "Bachelor of Accounting",
        duration: "4 Years",
        faculty: "Faculty of Accounting and Finance",
        credits: 120,
        description: "IFRS standards, corporate taxation, automated auditing, financial analytics, and payroll systems."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School BacII Certificate", detail: "Any track accepted." },
      { step: "02", title: "Select Morning, Afternoon, or Evening Shifts", detail: "Flexible schedules for working students." },
      { step: "03", title: "English Placement Test for International Programs", detail: "Direct entry or preparatory English support." }
    ],
    scholarshipsAvailable: ["MoEYS National Scholarship", "NUM Entrepreneurial Excellence Grant", "ASEAN Tourism Scholar Program"]
  },
  {
    id: "puc",
    name: "Paññāsāstra University of Cambodia",
    shortName: "PUC",
    location: "Phnom Penh & Siem Reap, Cambodia",
    address: "Samdech Sothearos Boulevard, Sangkat Tonle Bassac, Phnom Penh",
    type: "Private",
    ranking: "International & Liberal Arts",
    specialty: "English-immersion, international relations, law, media & environment",
    description: "Renowned for its English-medium instruction, vibrant debate culture, environmental policy, and strong international relations curriculum.",
    website: "https://www.puc.edu.kh",
    image: "/assets/puc-campus.jpg",
    students: "10,000+",
    faculties: 7,
    established: 1997,
    featured: false,
    overviewText: "PUC has graduated thousands of diplomats, NGO leaders, entrepreneurs, and media communicators through its rigorous English-language university curriculum.",
    programs: [
      {
        id: "ir-puc",
        name: "International Relations & Comparative Politics",
        degree: "Bachelor of Arts",
        duration: "4 Years",
        faculty: "Faculty of Social Sciences & International Relations",
        credits: 120,
        description: "Diplomatic protocol, international political economy, foreign policy analysis, and international human rights."
      },
      {
        id: "comm-puc",
        name: "Communication & Media Arts",
        degree: "Bachelor of Arts in Communication",
        duration: "4 Years",
        faculty: "Faculty of Communication and Media",
        credits: 120,
        description: "Journalism, public relations, digital media production, corporate communications, and broadcast journalism."
      },
      {
        id: "env-puc",
        name: "Environmental Science & Sustainable Development",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Science and Technology",
        credits: 120,
        description: "Climate change mitigation, environmental impact assessment, green urban planning, and resource conservation."
      },
      {
        id: "tefl-puc",
        name: "Teaching English to Speakers of Other Languages (TESOL)",
        degree: "Bachelor of Education in English",
        duration: "4 Years",
        faculty: "Faculty of Education",
        credits: 120,
        description: "Pedagogy, second-language acquisition, curriculum development, and English linguistic analysis."
      }
    ],
    admissionSteps: [
      { step: "01", title: "Submit High School BacII Diploma", detail: "General diploma standard accepted." },
      { step: "02", title: "PUC English Proficiency Assessment Test", detail: "Determines undergraduate eligibility or Intensive English Institute level." },
      { step: "03", title: "Enroll in Trimester Academic Schedule", detail: "Offers 3 flexible trimesters per calendar year." }
    ],
    scholarshipsAvailable: ["PUC Founder's Scholarship", "Cambodia Youth Leadership Grant", "Need-based Tuition Waiver"]
  },
  {
    id: "up",
    name: "University of Puthisastra",
    shortName: "UP",
    location: "Phnom Penh, Cambodia",
    address: "Street 180 & 184, Sangkat Boeung Raing, Khan Daun Penh, Phnom Penh",
    type: "Private",
    ranking: "Health Sciences & IT",
    specialty: "Health sciences, dentistry, pharmacy, nursing & digital health",
    description: "A leading private health science and technology university recognized for cutting-edge simulation hospitals and 100% national board exam pass rates.",
    website: "https://www.puthisastra.edu.kh",
    image: "/assets/up-campus.jpg",
    students: "3,500+",
    faculties: 4,
    established: 2007,
    featured: false,
    overviewText: "University of Puthisastra combines world-class medical simulation facilities, active international faculty, and strong English-language integration for healthcare practitioners.",
    programs: [
      {
        id: "dent-up",
        name: "Doctor of Dental Surgery (D.D.S.)",
        degree: "Doctor of Dental Surgery",
        duration: "7 Years",
        faculty: "Faculty of Dentistry",
        credits: 210,
        description: "Advanced dental simulator manikins, clinical patient treatment, cosmetic dentistry, and pediatric dental care."
      },
      {
        id: "pharm-up",
        name: "Bachelor of Pharmacy",
        degree: "Bachelor of Pharmacy",
        duration: "5 Years",
        faculty: "Faculty of Pharmacy",
        credits: 160,
        description: "Clinical pharmacy, biopharmaceutics, drug compounding, pharmaceutical research, and community pharmacy."
      },
      {
        id: "med-up",
        name: "Doctor of Medicine (M.D.)",
        degree: "Doctor of Medicine",
        duration: "8 Years",
        faculty: "Faculty of Medicine",
        credits: 240,
        description: "Evidence-based clinical medicine, hands-on clinical simulation center, and rotations in Phnom Penh hospitals."
      },
      {
        id: "cs-up",
        name: "Computer Science & Digital Health",
        degree: "Bachelor of Science in Information Technology",
        duration: "4 Years",
        faculty: "Faculty of Health Sciences and Technology",
        credits: 120,
        description: "Software engineering, hospital management information systems (HMIS), telemedicine software, and mobile apps."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School Examination (BacII)", detail: "High grades in Biology, Chemistry, and English." },
      { step: "02", title: "UP Entrance Written Exam & English Evaluation", detail: "Required for health science faculties." },
      { step: "03", title: "Panel Interview with Medical/Dental Faculty", detail: "Evaluates motivation and commitment to healthcare ethics." }
    ],
    scholarshipsAvailable: ["UP Academic Excellence Full Scholarship", "Women in Healthcare Award", "Community Health Leadership Grant"]
  },
  {
    id: "nubb",
    name: "National University of Battambang",
    shortName: "NUBB",
    location: "Battambang, Cambodia",
    address: "National Road 5, Sangkat Prek Preah Sdach, Battambang City",
    type: "Public",
    ranking: "Regional Leader (Northwest)",
    specialty: "Agriculture, agro-processing, software engineering & tourism",
    description: "The primary higher education hub of northwestern Cambodia, spearheading modern agro-business, provincial tech incubation, and rural economic growth.",
    website: "https://www.nubb.edu.kh",
    image: "/assets/nubb-campus.jpg",
    students: "7,500+",
    faculties: 5,
    established: 2007,
    featured: false,
    overviewText: "NUBB is an educational center of excellence in Battambang province, providing youth in Battambang, Banteay Meanchey, and Pursat with high-quality public university education.",
    programs: [
      {
        id: "agro-nubb",
        name: "Agro-Processing & Food Technology",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Agriculture and Food Processing",
        credits: 120,
        description: "Rice milling technology, organic food certification, fruit processing, and supply chain logistics."
      },
      {
        id: "cs-nubb",
        name: "Computer Science & Smart Farming Systems",
        degree: "Bachelor of Science in Information Technology",
        duration: "4 Years",
        faculty: "Faculty of Science and Technology",
        credits: 120,
        description: "IoT agricultural sensors, software development, data analytics, and mobile app design."
      },
      {
        id: "ba-nubb",
        name: "Business Administration & Trade",
        degree: "Bachelor of Business Administration",
        duration: "4 Years",
        faculty: "Faculty of Business Administration",
        credits: 120,
        description: "Border trade economics, retail management, financial accounting, and cooperative business."
      },
      {
        id: "tefl-nubb",
        name: "English Teaching and Translation",
        degree: "Bachelor of Education in English",
        duration: "4 Years",
        faculty: "Institute of Foreign Languages",
        credits: 120,
        description: "Pedagogy, cross-cultural translation, and professional communications."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School Examination (BacII)", detail: "Pass status in any academic track." },
      { step: "02", title: "Direct Enrollment at Battambang Campus or MoEYS Portal", detail: "Special housing support for provincial students." },
      { step: "03", title: "Semester Orientation & Lab Allocation", detail: "Practical farm labs located on NUBB research grounds." }
    ],
    scholarshipsAvailable: ["Government Northwest Regional Scholarship", "Erasmus+ European Exchange Grant", "NUBB Rector's Scholarship"]
  },
  {
    id: "usea",
    name: "University of South-East Asia",
    shortName: "USEA",
    location: "Siem Reap, Cambodia",
    address: "Phum Wat Bo, Sangkat Sala Kamreuk, Siem Reap City",
    type: "Private",
    ranking: "Tourism & Heritage",
    specialty: "International tourism, hospitality, languages, IT & economics",
    description: "Located near the UNESCO World Heritage Angkor complex in Siem Reap, excelling in international tourism management, heritage studies, and digital business.",
    website: "https://www.usea.edu.kh",
    image: "/assets/usea-campus.png",
    students: "5,000+",
    faculties: 4,
    established: 2006,
    featured: false,
    overviewText: "USEA is Siem Reap's leading academic institution, partnering with world-class international resort chains, airlines, and foreign cultural institutes.",
    programs: [
      {
        id: "tour-usea",
        name: "International Tourism & Hospitality Management",
        degree: "Bachelor of Tourism Management",
        duration: "4 Years",
        faculty: "Faculty of Tourism and Hospitality",
        credits: 120,
        description: "Luxury resort operations, heritage tourism, culinary tourism, event planning, and eco-travel management."
      },
      {
        id: "it-usea",
        name: "Information Technology & Web Systems",
        degree: "Bachelor of Science in IT",
        duration: "4 Years",
        faculty: "Faculty of Science and Technology",
        credits: 120,
        description: "Web application development, database management, network administration, and hospitality booking software."
      },
      {
        id: "lang-usea",
        name: "English for International Business & Tourism",
        degree: "Bachelor of Arts in English",
        duration: "4 Years",
        faculty: "Faculty of Arts, Humanities and Languages",
        credits: 120,
        description: "Cross-cultural negotiation, hospitality communications, international marketing, and translation."
      },
      {
        id: "fin-usea",
        name: "Finance and Banking Management",
        degree: "Bachelor of Business Administration",
        duration: "4 Years",
        faculty: "Faculty of Economics and Business",
        credits: 120,
        description: "Commercial banking, microfinance institutions (MFIs), corporate accounting, and financial planning."
      }
    ],
    admissionSteps: [
      { step: "01", title: "National High School Examination (BacII) Certificate", detail: "General diploma accepted." },
      { step: "02", title: "Campus Registration in Siem Reap City", detail: "Flexible morning, afternoon, and weekend classes." },
      { step: "03", title: "Industry Internship Guaranteed in Year 3 & 4", detail: "Direct placement with Angkor luxury hotel groups." }
    ],
    scholarshipsAvailable: ["Angkor Tourism Development Scholarship", "Siem Reap Youth Merit Waiver", "USEA Foundation Bursary"]
  },
  {
    id: "paragon",
    name: "Paragon International University",
    shortName: "ParagonU",
    location: "Phnom Penh, Cambodia",
    address: "No. 8, St. 315, Boeng Kak 1, Khan Tuol Kork, Phnom Penh",
    type: "Private",
    ranking: "STEM & Architecture",
    specialty: "Architecture, civil engineering, computer science & MIS",
    description: "An English-medium international university known for cutting-edge engineering laboratories, CAD architecture studios, and robotics teams.",
    website: "https://www.paragoniu.edu.kh",
    image: "/assets/paragon-campus.jpg",
    students: "2,000+",
    faculties: 3,
    established: 2010,
    featured: false,
    overviewText: "With state-of-the-art Tuol Kork campus facilities, ParagonU delivers 100% English-medium curricula across engineering, architecture, computer science, and international relations.",
    programs: [
      {
        id: "arch-paragon",
        name: "Architecture & Urban Design",
        degree: "Bachelor of Architecture",
        duration: "5 Years",
        faculty: "Faculty of Engineering",
        credits: 150,
        description: "Architectural drawing studios, building information modeling (BIM), sustainable urban design, and structural acoustics."
      },
      {
        id: "cs-paragon",
        name: "Computer Science & Cloud Systems",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Information and Computer Technologies",
        credits: 120,
        description: "Software engineering, cloud architecture, artificial intelligence, database systems, and mobile applications."
      },
      {
        id: "civil-paragon",
        name: "Civil Engineering",
        degree: "Bachelor of Science in Civil Engineering",
        duration: "4 Years",
        faculty: "Faculty of Engineering",
        credits: 128,
        description: "Structural design, concrete technology, construction project management, and hydraulic engineering."
      },
      {
        id: "mis-paragon",
        name: "Management Information Systems (MIS)",
        degree: "Bachelor of Science in MIS",
        duration: "4 Years",
        faculty: "Faculty of Information and Computer Technologies",
        credits: 120,
        description: "Enterprise resource planning (ERP), business intelligence, database administration, and IT project governance."
      }
    ],
    admissionSteps: [
      { step: "01", title: "High School Graduation Diploma", detail: "Minimum GPA requirement applies." },
      { step: "02", title: "ParagonU Entrance Exam & English Proficiency Test", detail: "Exemption available for IELTS 5.5+." },
      { step: "03", title: "Scholarship Examination Session", detail: "Annual nationwide scholarship contest for high school seniors." }
    ],
    scholarshipsAvailable: ["Paragon Annual National Scholarship Exam (Up to 100%)", "Young Scientist Grant", "Tuition Merit Discount"]
  },
  {
    id: "camed",
    name: "CamEd Business School",
    shortName: "CamEd",
    location: "Phnom Penh, Cambodia",
    address: "No. 64, St. 108, Sangkat Wat Phnom, Khan Daun Penh, Phnom Penh",
    type: "Private",
    ranking: "Premier Accounting & ACCA",
    specialty: "Accounting, finance, audit, taxation & ACCA accreditation",
    description: "The gold standard for accounting and financial training in Cambodia, accredited as an ACCA Platinum learning provider.",
    website: "https://www.cam-ed.com",
    image: "/assets/camed-campus.jpg",
    students: "3,000+",
    faculties: 2,
    established: 2000,
    featured: false,
    overviewText: "CamEd is renowned throughout Southeast Asia for producing Cambodia's leading certified accountants, CFOs, Big-4 auditors, and financial analysts.",
    programs: [
      {
        id: "acct-camed",
        name: "Accounting and Finance (BA + ACCA Track)",
        degree: "Bachelor of Accounting and Finance",
        duration: "4 Years",
        faculty: "Faculty of Professional Accounting",
        credits: 124,
        description: "International financial reporting standards (IFRS), corporate auditing, forensic accounting, managerial cost analysis, and embedded UK ACCA exams."
      },
      {
        id: "audit-camed",
        name: "Auditing & Taxation",
        degree: "Bachelor of Science",
        duration: "4 Years",
        faculty: "Faculty of Professional Accounting",
        credits: 120,
        description: "Cambodian tax code, international tax planning, statutory audit regulations, internal controls, and enterprise risk management."
      },
      {
        id: "fin-camed",
        name: "Corporate Finance & Capital Markets",
        degree: "Bachelor of Science in Finance",
        duration: "4 Years",
        faculty: "Faculty of Finance",
        credits: 120,
        description: "Securities analysis, mergers & acquisitions, venture capital funding, valuation modeling, and banking compliance."
      }
    ],
    admissionSteps: [
      { step: "01", title: "High School National Examination (BacII)", detail: "High aptitude in Mathematics." },
      { step: "02", title: "CamEd Math, Logic, and English Entrance Examination", detail: "Evaluates analytical rigor." },
      { step: "03", title: "Admissions Consultation & Orientation", detail: "Direct recruitment pathway with Big 4 auditing firms (PwC, KPMG, EY, Deloitte)." }
    ],
    scholarshipsAvailable: ["CamEd Merit Full Scholarship", "Future CFO Fellowship", "National High School Olympiad Waiver"]
  }
];

export const majorsData = [
  {
    id: "cs",
    name: "Computer Science",
    category: "IT & Computer Science",
    degree: "Bachelor of Science",
    duration: "4 Years",
    universitiesOffering: ["RUPP", "CADT", "ITC", "AUPP", "ParagonU", "NUBB", "UP"],
    description: "Study algorithmic problem solving, software engineering, systems design, and modern web and cloud architecture.",
    overview: "Computer Science is the backbone of the digital era. In Cambodia, demand for software developers, engineers, and digital innovators is growing at an unprecedented pace across banking, e-commerce, telecommunications, and government.",
    careers: ["Software Engineer", "Full-Stack Developer", "Systems Architect", "Mobile App Developer", "Product Engineer"],
    skills: ["JavaScript/TypeScript", "Python & Algorithms", "SQL & Database Design", "Cloud Infrastructure", "System Architecture"],
    salaryRange: "$600 – $2,500+ / month (Mid to Senior in Cambodia)",
    prerequisites: "Good foundation in mathematics, logical reasoning, and English language skills."
  },
  {
    id: "cyber",
    name: "Cybersecurity & Information Defense",
    category: "IT & Computer Science",
    degree: "Bachelor of Science",
    duration: "4 Years",
    universitiesOffering: ["CADT", "AUPP", "RUPP"],
    description: "Defend computer networks, cloud infrastructure, and sensitive data against digital threats and malicious vulnerabilities.",
    overview: "With Cambodia's rapid digitisation and National Cyber Security initiatives, specialists in security operations and ethical hacking are vital.",
    careers: ["Security Analyst", "Penetration Tester", "SOC Analyst", "Information Security Consultant"],
    skills: ["Network Security", "Cryptography", "Threat Intelligence", "Ethical Hacking", "Forensics"],
    salaryRange: "$700 – $3,000+ / month",
    prerequisites: "Strong background in computing, networking, and logical analysis."
  },
  {
    id: "ai-ds",
    name: "Artificial Intelligence & Data Science",
    category: "IT & Computer Science",
    degree: "Bachelor of Science",
    duration: "4 Years",
    universitiesOffering: ["CADT", "AUPP", "RUPP", "ITC"],
    description: "Harness data pipelines, machine learning, and neural algorithms to solve complex challenges and automate intelligence.",
    overview: "From credit scoring in Fintech to automated translation for Khmer language models, AI & Data Science represent the highest growth technical field.",
    careers: ["Data Scientist", "Machine Learning Engineer", "BI Analyst", "AI Researcher"],
    skills: ["Python, PyTorch & TensorFlow", "Linear Algebra & Statistics", "Data Warehousing", "NLP"],
    salaryRange: "$800 – $3,200+ / month",
    prerequisites: "High marks in Mathematics, Statistics, and foundational programming."
  },
  {
    id: "medicine",
    name: "General Medicine (Doctor of Medicine)",
    category: "Medicine & Health",
    degree: "Doctor of Medicine (M.D.)",
    duration: "8 Years",
    universitiesOffering: ["UHS", "UP"],
    description: "Comprehensive medical doctor training covering human anatomy, pathology, internal medicine, surgery, and hospital residency.",
    overview: "General Medicine prepares compassionate, clinically exceptional medical practitioners to diagnose illness, administer life-saving medical care, and lead public healthcare institutions across Cambodia.",
    careers: ["Medical Doctor", "Clinical Resident", "Surgeon", "Hospital Medical Officer", "Public Health Specialist"],
    skills: ["Clinical Diagnosis", "Patient Care", "Emergency Triage", "Pharmacotherapy", "Surgical Fundamentals"],
    salaryRange: "$700 – $3,500+ / month (Clinical practice & hospitals)",
    prerequisites: "National BacII Science track with top grades in Biology and Chemistry."
  },
  {
    id: "dentistry",
    name: "Dental Surgery (Doctor of Dental Surgery)",
    category: "Medicine & Health",
    degree: "Doctor of Dental Surgery (D.D.S.)",
    duration: "7 Years",
    universitiesOffering: ["UHS", "UP"],
    description: "Specialized healthcare discipline dedicated to the study, diagnosis, prevention, and surgical treatment of oral diseases and dentofacial structures.",
    overview: "Dentistry combines manual precision with medical diagnostics. The demand for qualified dental practitioners and cosmetic dentistry in Phnom Penh and regional provinces is expanding rapidly.",
    careers: ["Dentist", "Orthodontist", "Dental Surgeon", "Periodontist", "Dental Clinic Director"],
    skills: ["Dental Diagnostics", "Restorative Surgery", "Orthodontic Treatment", "Dental Prosthetics", "Patient Psychology"],
    salaryRange: "$800 – $4,000+ / month (Private clinic practice)",
    prerequisites: "BacII Science track with high marks in Biology and manual dexterity."
  },
  {
    id: "pharmacy",
    name: "Pharmacy & Pharmaceutical Sciences",
    category: "Medicine & Health",
    degree: "Bachelor of Pharmacy (Pharm.D track)",
    duration: "5 Years",
    universitiesOffering: ["UHS", "UP"],
    description: "Study drug compounding, pharmacology, clinical therapeutics, pharmaceutical formulation, and community healthcare counseling.",
    overview: "Pharmacists ensure safe and effective medication use, lead industrial pharmaceutical manufacturing, conduct clinical trials, and run community pharmacy operations across Cambodia.",
    careers: ["Clinical Pharmacist", "Pharmaceutical Formulator", "Regulatory Affairs Officer", "Pharmacy Owner", "Quality Control Specialist"],
    skills: ["Pharmacology", "Drug Formulation", "Biopharmaceutics", "GMP Compliance", "Patient Consultation"],
    salaryRange: "$600 – $2,500+ / month",
    prerequisites: "BacII Science track with high marks in Chemistry and Biology."
  },
  {
    id: "law",
    name: "Law & Jurisprudence (Bachelor of Laws)",
    category: "Law & Policy",
    degree: "Bachelor of Laws (LL.B)",
    duration: "4 Years",
    universitiesOffering: ["RULE", "PUC", "AUPP"],
    description: "Deep study of the Cambodian civil code, criminal law, international commercial law, judicial procedures, and constitutional human rights.",
    overview: "Legal education equips graduates to become magistrates, licensed attorneys, corporate counsel, and policy advisors, supporting Cambodia's commercial modernization and rule of law.",
    careers: ["Corporate Legal Counsel", "Attorney at Law", "Magistrate / Judge", "Legal Compliance Officer", "Diplomatic Advisor"],
    skills: ["Legal Drafting", "Courtroom Advocacy", "Contract Negotiation", "Statutory Interpretation", "Arbitration"],
    salaryRange: "$600 – $3,000+ / month",
    prerequisites: "Strong verbal and written reasoning, critical analysis, and reading comprehension."
  },
  {
    id: "civil-eng",
    name: "Civil & Structural Engineering",
    category: "Engineering & Tech",
    degree: "Bachelor / Diplôme d'Ingénieur",
    duration: "4-5 Years",
    universitiesOffering: ["ITC", "RUPP", "ParagonU"],
    description: "Plan, design, calculate, and supervise the construction of bridges, skyscrapers, roads, airports, and water treatment systems.",
    overview: "Cambodia's massive infrastructure, expressway, and urban high-rise developments demand skilled structural and geotechnical engineers.",
    careers: ["Structural Engineer", "Site Construction Manager", "Geotechnical Engineer", "Infrastructure Project Director", "Quantity Surveyor"],
    skills: ["AutoCAD & Revit BIM", "Structural Calculation", "Soil Mechanics", "Project Management", "Construction Safety"],
    salaryRange: "$550 – $2,500+ / month",
    prerequisites: "Strong background in Physics, Advanced Mathematics, and spatial analysis."
  },
  {
    id: "architecture",
    name: "Architecture & Urban Design",
    category: "Architecture & Design",
    degree: "Bachelor of Architecture (B.Arch)",
    duration: "5 Years",
    universitiesOffering: ["ParagonU", "RUPP"],
    description: "Integrate visual art, environmental sustainability, structural physics, and cultural heritage to design modern livable buildings and public spaces.",
    overview: "From green residential towers in Phnom Penh to eco-resorts in Siem Reap, architects shape the visual and functional identity of Cambodian communities.",
    careers: ["Architect", "Urban Planner", "Interior Architect", "Landscape Designer", "BIM Specialist"],
    skills: ["Architectural Sketching", "3D CAD / Rhino / SketchUp", "Building Code Knowledge", "Sustainable Architecture", "Spatial Planning"],
    salaryRange: "$600 – $3,000+ / month",
    prerequisites: "Creative design portfolio, drawing aptitude, and basic mathematics."
  },
  {
    id: "agronomy",
    name: "Agronomy & Smart Farming Systems",
    category: "Agriculture & Sciences",
    degree: "Bachelor of Science in Agronomy",
    duration: "4 Years",
    universitiesOffering: ["RUA", "NUBB"],
    description: "Modern agricultural techniques, precision crop cultivation, soil health, drip irrigation, greenhouse management, and organic certification.",
    overview: "Agriculture forms the bedrock of Cambodia's economy. Modern agronomy combines drone mapping, automated irrigation, and soil science to increase food yield and export value.",
    careers: ["Agronomist", "Farm Operations Manager", "Crop Science Consultant", "Agri-Tech Specialist", "Post-Harvest Quality Manager"],
    skills: ["Soil Chemistry", "Crop Pathology", "Smart Irrigation", "Greenhouse Control", "Agricultural Logistics"],
    salaryRange: "$500 – $2,200+ / month",
    prerequisites: "Interest in biology, environmental sciences, and rural development."
  },
  {
    id: "accounting-finance",
    name: "Professional Accounting & Auditing (ACCA Track)",
    category: "Business & Finance",
    degree: "Bachelor of Accounting and Finance",
    duration: "4 Years",
    universitiesOffering: ["CamEd", "NUM", "RULE", "AUPP", "USEA"],
    description: "Master International Financial Reporting Standards (IFRS), statutory corporate auditing, forensic accounting, tax compliance, and financial analysis.",
    overview: "Recognized as one of the most lucrative and secure career trajectories in Cambodia's thriving corporate, banking, and multinational enterprise sector.",
    careers: ["External Auditor (Big 4)", "Financial Controller", "Chief Financial Officer (CFO)", "Tax Consultant", "Investment Analyst"],
    skills: ["IFRS Accounting Standards", "Financial Auditing", "Cambodian Tax Law", "Financial Modeling", "Corporate Risk Analysis"],
    salaryRange: "$650 – $3,500+ / month",
    prerequisites: "Strong quantitative analytical skills and attention to detail."
  },
  {
    id: "business-admin",
    name: "Business Administration & Management",
    category: "Business & Finance",
    degree: "Bachelor of Business Administration",
    duration: "4 Years",
    universitiesOffering: ["AUPP", "NUM", "RUPP", "RULE", "NUBB"],
    description: "Executive decision making, supply chain operations, strategic brand marketing, business law, and entrepreneurial venture leadership.",
    overview: "Prepares adaptable leaders to build ventures, scale startups, optimize corporate performance, and navigate regional ASEAN trade markets.",
    careers: ["Business Operations Manager", "Marketing Strategist", "Management Consultant", "Startup Founder", "Corporate Planner"],
    skills: ["Financial Analysis", "Strategic Leadership", "Market Research", "Negotiation", "Project Management"],
    salaryRange: "$500 – $2,500+ / month",
    prerequisites: "General high school certificate with interest in commerce and leadership."
  },
  {
    id: "tourism-hospitality",
    name: "International Tourism & Hospitality Management",
    category: "Tourism & Hospitality",
    degree: "Bachelor of Tourism Management",
    duration: "4 Years",
    universitiesOffering: ["USEA", "NUM", "RUPP"],
    description: "Hotel and luxury resort administration, cultural heritage tourism, ecotourism development, international culinary operations, and event management.",
    overview: "Tourism is one of the four key economic pillars of Cambodia. Professional hospitality managers lead 5-star international hotels, tourism boards, and global airlines.",
    careers: ["Hotel General Manager", "Ecotourism Director", "Events & Conference Manager", "Airline Operations Lead", "Travel Brand Strategist"],
    skills: ["Hospitality Operations", "Customer Relationship Management", "Revenue Management", "Event Planning", "Cross-Cultural Communication"],
    salaryRange: "$500 – $2,800+ / month",
    prerequisites: "Strong interpersonal communication and foreign language skills."
  },
  {
    id: "international-relations",
    name: "International Relations & Diplomacy",
    category: "Law & Policy",
    degree: "Bachelor of Arts in International Relations",
    duration: "4 Years",
    universitiesOffering: ["RUPP", "RULE", "PUC", "ParagonU"],
    description: "Multilateral diplomacy, international political economy, foreign policy, conflict resolution, global governance, and treaty negotiations.",
    overview: "Equips graduates for positions within the Ministry of Foreign Affairs, foreign embassies, United Nations agencies (UN, UNESCO, UNICEF), and multinational NGOs.",
    careers: ["Diplomat / Foreign Service Officer", "Policy Analyst", "International NGO Director", "Geopolitical Risk Analyst", "Public Affairs Officer"],
    skills: ["Diplomatic Negotiation", "Foreign Policy Analysis", "Bilingual Debate", "Treaty Formulation", "Cross-Border Strategy"],
    salaryRange: "$600 – $3,000+ / month",
    prerequisites: "Fluency in English or French, keen interest in world history, and political economy."
  }
];

export const scholarshipsData = [
  {
    id: "stem-access",
    title: "STEM Access Scholarship",
    badge: "Tuition support",
    description: "For students ready to shape Cambodia’s future in science and technology with full tuition coverage and monthly allowance.",
    meta: "Undergraduate · Cambodia",
    date: "Closes 15 Dec 2026",
    coverage: "100% Tuition Fee + Laptop + Stipend",
    organization: "Ministry of Post and Telecommunications (MPTC) & EduPath",
    eligibility: "High school graduate with BacII Grade A, B, or C; science or IT focus.",
    image: "/assets/scholarship-stem.png",
    intake: "Academic Year 2026-2027",
    applicationProcess: [
      "Submit online application form with high school transcript and BacII exam certificate.",
      "Pass the STEM Aptitude Assessment covering Math and Logical Problem Solving.",
      "Attend panel interview with university and scholarship committee representatives."
    ]
  },
  {
    id: "eiffel-excellence",
    title: "Eiffel Excellence Scholarship",
    badge: "Tuition support",
    description: "Explore prestigious opportunities to continue your master's or doctoral studies in world-renowned French universities.",
    meta: "France · Graduate study",
    date: "Sample 2027 intake",
    coverage: "Monthly allowance of €1,181 + International flights + Health insurance",
    organization: "Campus France & French Ministry for Europe and Foreign Affairs",
    eligibility: "Cambodian nationals under 25 (Master's) or under 30 (PhD) with proven academic excellence.",
    image: "/assets/scholarship-eiffel.png",
    intake: "Fall 2027",
    applicationProcess: [
      "Select your program at an eligible French higher education institution.",
      "Obtain institutional nomination from the French university.",
      "Final selection announced by Campus France in April."
    ]
  },
  {
    id: "mext-japan",
    title: "MEXT Scholarship",
    badge: "Tuition support",
    description: "Discover study opportunities, innovative research labs, and rich cultural perspectives at top universities in Japan.",
    meta: "Japan · Undergraduate & graduate",
    date: "Sample 2027 intake",
    coverage: "Full tuition waiver + Monthly allowance (117,000 to 145,000 JPY) + Roundtrip flight",
    organization: "Embassy of Japan in Cambodia / Monbukagakusho",
    eligibility: "Cambodian citizens with strong academic track record and willingness to learn Japanese language.",
    image: "/assets/scholarship-mext.png",
    intake: "Spring / Autumn 2027",
    applicationProcess: [
      "Embassy recommendation track: apply via Embassy of Japan in Phnom Penh in May.",
      "Written examinations (English, Math, Japanese/Sciences) and interview.",
      "Arrival in Japan with 1-year preparatory Japanese intensive training."
    ]
  },
  {
    id: "asean-study",
    title: "ASEAN Study Opportunity",
    badge: "Tuition support",
    description: "Explore international learning opportunities and regional exchange networks across top ASEAN universities.",
    meta: "ASEAN · Undergraduate",
    date: "Sample 2027 intake",
    coverage: "Tuition grant + Housing subsidy + Travel allowance",
    organization: "ASEAN University Network (AUN)",
    eligibility: "Full-time enrolled undergraduate students with minimum GPA 3.2.",
    image: "/assets/scholarship-asean.png",
    intake: "Semester 1 2027",
    applicationProcess: [
      "Apply through your home university's International Relations Office.",
      "Submit statement of purpose and letter of recommendation.",
      "Host university formal admission and visa approval."
    ]
  },
  {
    id: "aupp-merit",
    title: "AUPP Merit Scholarship",
    badge: "Tuition support",
    description: "Support for outstanding Cambodian students pursuing dual American degrees with high scholastic ambition.",
    meta: "Cambodia · Undergraduate",
    date: "Sample 2027 intake",
    coverage: "Up to 100% Tuition Waiver for 4 years",
    organization: "American University of Phnom Penh",
    eligibility: "BacII Grade A or B, IELTS 6.5+, verified leadership achievements.",
    image: "/assets/rupp-campus.png",
    intake: "Fall 2026 / Spring 2027",
    applicationProcess: [
      "Complete AUPP Admissions Application.",
      "Submit Merit Scholarship essay and recommendation letters.",
      "Complete scholarship interview with university leadership."
    ]
  }
];

export const eventsData = [
  {
    id: "engineering-event",
    title: "Explore Engineering",
    day: "21",
    month: "NOV",
    time: "9:00 AM – 12:00 PM",
    venue: "Phnom Penh · In person",
    type: "In person · Free entry",
    description: "Meet students, visit robotics and structural laboratories, and ask professors your next big questions.",
    organizer: "Engineering Consortium Cambodia",
    seatsRemaining: 45,
    image: "/assets/event-engineering.png",
    agenda: [
      "09:00 AM: Keynote: Modern Engineering in Cambodia's Future",
      "10:00 AM: Interactive Lab Demos (Robotics, Structural Simulators, Drone mapping)",
      "11:15 AM: Q&A Panel with Industry Engineers and Alumni",
      "11:45 AM: Campus tour and admissions consultation"
    ]
  },
  {
    id: "australia-seminar",
    title: "Study in Australia Seminar",
    day: "15",
    month: "NOV",
    time: "2:00 PM – 5:00 PM",
    venue: "Phnom Penh · Seminar Hall",
    type: "Study abroad · Seminar",
    description: "Explore your study options, visa guidelines, post-study work rights, and practical living advice with university delegates.",
    organizer: "Australian Education Center Phnom Penh",
    seatsRemaining: 28,
    image: "/assets/event-australia.png",
    agenda: [
      "02:00 PM: Overview of Australian Higher Education & Group of Eight",
      "03:00 PM: Student Visa Subclass 500 requirements & financial proof",
      "04:00 PM: 1-on-1 consultations with university admission officers"
    ]
  },
  {
    id: "itc-open-house",
    title: "ITC Open House 2026",
    day: "22",
    month: "NOV",
    time: "9:00 AM – 4:00 PM",
    venue: "ITC Campus · Russian Blvd",
    type: "Open house · Campus tour",
    description: "Discover innovative academic programs, student club exhibits, maker spaces, and meet the faculty community.",
    organizer: "Institute of Technology of Cambodia",
    seatsRemaining: 120,
    image: "/assets/event-itc-openhouse.png",
    agenda: [
      "09:00 AM: Welcome and presentation of 5 Engineering Faculties",
      "10:30 AM: Student Innovation and Capstone Project Showcase",
      "01:30 PM: Robotics Club demonstrations & Code challenges",
      "03:00 PM: Entrance examination preparation workshop"
    ]
  },
  {
    id: "scholarship-workshop",
    title: "Scholarship Application Workshop",
    day: "05",
    month: "DEC",
    time: "1:00 PM – 4:00 PM",
    venue: "Phnom Penh · Innovation Hub",
    type: "Workshop · Scholarships",
    description: "Get ready to craft compelling personal statements, ace academic interviews, and take the next step toward your dream grant.",
    organizer: "EduPath Cambodia Mentorship Team",
    seatsRemaining: 30,
    image: "/assets/event-workshop.png",
    agenda: [
      "01:00 PM: Deconstructing scholarship prompts and selection criteria",
      "02:00 PM: Hands-on personal statement writing clinic with alumni mentors",
      "03:15 PM: Mock interview practice and constructive feedback"
    ]
  },
  {
    id: "aupp-info-session",
    title: "AUPP Information Session",
    day: "12",
    month: "DEC",
    time: "10:00 AM – 12:00 PM",
    venue: "AUPP Campus · Koh Pich",
    type: "Info session · University",
    description: "Get to know US dual degree pathways, American curriculum, campus facilities, and credit transfer opportunities.",
    organizer: "American University of Phnom Penh",
    seatsRemaining: 50,
    image: "/assets/rupp-campus.png",
    agenda: [
      "10:00 AM: American University Dual Degree structure explained",
      "10:45 AM: Campus tour: Bloomberg terminals, Makerspace, Library",
      "11:30 AM: Admissions and scholarship application guidance"
    ]
  }
];

export const aiGuidanceQuestions = [
  {
    step: 1,
    title: "Tell us about yourself",
    subtitle: "What is your current academic stage?",
    options: [
      { id: "grade12", label: "Grade 12 High School Student", desc: "Preparing for national exam and university entry" },
      { id: "highschool_grad", label: "High School Graduate", desc: "Taking a gap semester or evaluating options" },
      { id: "undergraduate", label: "Current University Student", desc: "Exploring transfer or postgraduate pathways" },
      { id: "parent_mentor", label: "Parent or Educational Mentor", desc: "Guiding a student's educational trajectory" }
    ]
  },
  {
    step: 2,
    title: "What subjects excite you most?",
    subtitle: "Select the areas you enjoy studying or working with.",
    options: [
      { id: "tech_math", label: "Coding, Logic & Mathematics", desc: "Problem solving, building software, analyzing systems" },
      { id: "health_medicine", label: "Medicine, Health & Biology", desc: "Patient care, dentistry, pharmacy, life sciences" },
      { id: "business_finance", label: "Business, Finance & Accounting", desc: "Economics, management, investments, startups" },
      { id: "law_diplomacy", label: "Law, Governance & Diplomacy", desc: "Justice system, international policy, public administration" }
    ]
  },
  {
    step: 3,
    title: "What environment do you thrive in?",
    subtitle: "Choose your preferred learning style and campus culture.",
    options: [
      { id: "hands_on", label: "Practical & Hands-on Laboratories", desc: "Building physical/software projects, testing in labs" },
      { id: "clinical_patient", label: "Hospital & Clinical Rotations", desc: "Direct healthcare experience, treating patients" },
      { id: "collaborative_team", label: "Corporate Case Studies & Consulting", desc: "Financial modeling, boardroom presentations" },
      { id: "global_international", label: "International & Dual Degree Track", desc: "English-immersion, foreign study exchange" }
    ]
  },
  {
    step: 4,
    title: "What are your career priorities?",
    subtitle: "What matters most for your future after graduation?",
    options: [
      { id: "high_demand_tech", label: "Fast-growing Technology Careers", desc: "High earning potential, remote/international flexibility" },
      { id: "healthcare_saving_lives", label: "Healthcare & Saving Lives", desc: "Respected clinical profession, long-term impact" },
      { id: "executive_business", label: "Corporate Leadership & Auditing", desc: "Big 4 accounting, commercial banking, enterprise" },
      { id: "public_diplomacy", label: "National Governance & Foreign Policy", desc: "Magistrates, diplomats, UN organizations" }
    ]
  },
  {
    step: 5,
    title: "What is your funding approach?",
    subtitle: "How do you plan to support your university education?",
    options: [
      { id: "full_scholarship", label: "Seeking Full or Partial Scholarships", desc: "Need-based or merit-based government/private grants" },
      { id: "public_affordable", label: "Affordable Public University Tuition", desc: "Balancing budget with reputable public degree" },
      { id: "dual_degree_investment", label: "Investing in International Dual Degree", desc: "US or Australian curriculum with premium facilities" },
      { id: "work_study", label: "Work-Study & Internship Balanced", desc: "Flexible hours allowing part-time professional work" }
    ]
  }
];

export const adminSubmissions = [
  {
    id: "sub-101",
    title: "RUPP New Cyber Security Minor Program",
    category: "Program / Major",
    institution: "Royal University of Phnom Penh",
    submittedBy: "Dr. Chan Vanna (Dean)",
    submittedDate: "2026-11-24",
    status: "Pending Review",
    priority: "High",
    details: "Proposal to launch a 30-credit minor in Cyber Defense in collaboration with Ministry of Post and Telecommunications."
  },
  {
    id: "sub-102",
    title: "Digital Youth Merit Scholarship 2027",
    category: "Scholarship",
    institution: "Cambodia Academy of Digital Technology",
    submittedBy: "Keo Sopheak (Scholarship Officer)",
    submittedDate: "2026-11-23",
    status: "Pending Review",
    priority: "Normal",
    details: "Offering 50 full-tuition grants for female students entering AI and Software Engineering."
  },
  {
    id: "sub-103",
    title: "ITC Annual Engineering Expo 2026",
    category: "Event",
    institution: "Institute of Technology of Cambodia",
    submittedBy: "Sovan Dara (Events Lead)",
    submittedDate: "2026-11-22",
    status: "Published",
    priority: "Normal",
    details: "Registration open for high school visits and campus lab demonstrations on Nov 22."
  },
  {
    id: "sub-104",
    title: "AUPP Global Entrepreneurship Incubator Intake",
    category: "Program / Major",
    institution: "American University of Phnom Penh",
    submittedBy: "Rachel Tan (Admissions)",
    submittedDate: "2026-11-21",
    status: "Published",
    priority: "Low",
    details: "12-week accelerator open to all undergraduate students with seed funding."
  }
];
