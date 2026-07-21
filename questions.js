const QUESTIONS = [
  // ==========================================
  // CATEGORY 1: National Affairs & Government Schemes (1-15)
  // ==========================================
  {
    id: 1,
    category: "National Affairs & Government Schemes",
    question: "Where was India's first immersive language museum, 'Shabdalok' (Museum of Word), inaugurated in 2026?",
    options: [
      "New Delhi",
      "Kolkata",
      "Bengaluru",
      "Varanasi"
    ],
    correctIndex: 1,
    explanation: "India's first immersive language museum, 'Shabdalok' (Museum of Word), was inaugurated at the iconic National Library campus in Kolkata to preserve and showcase the linguistic diversity and historical evolution of Indian languages."
  },
  {
    id: 2,
    category: "National Affairs & Government Schemes",
    question: "Which central government scheme was approved to provide education loans up to ₹10 Lakh with interest subvention to meritorious students for higher education in top higher educational institutions?",
    options: [
      "PM-Vidyalaxmi",
      "PM-Usha",
      "PM-Shri",
      "PM-GatiShakti"
    ],
    correctIndex: 0,
    explanation: "PM-Vidyalaxmi is a Central Sector Scheme aimed at providing financial support through collateral-free and guarantor-free loans to meritorious students for higher studies in top 860 quality HEIs in India."
  },
  {
    id: 3,
    category: "National Affairs & Government Schemes",
    question: "Under the 'PM Surya Ghar: Muft Bijli Yojana', how many free units of electricity per month are targeted for 1 crore households installing rooftop solar plants?",
    options: [
      "100 Units",
      "200 Units",
      "300 Units",
      "500 Units"
    ],
    correctIndex: 2,
    explanation: "PM Surya Ghar: Muft Bijli Yojana provides up to 300 units of free electricity per month for 1 crore households by installing rooftop solar panels with central subsidies."
  },
  {
    id: 4,
    category: "National Affairs & Government Schemes",
    question: "What is the official acronym for the 'One Nation, One Student ID' system launched by the Ministry of Education under NEP 2020?",
    options: [
      "APAAR",
      "AADHAR-EDU",
      "DIGILOCKER-ID",
      "SHIKSHA"
    ],
    correctIndex: 0,
    explanation: "APAAR stands for Automated Permanent Academic Account Registry. It serves as a lifelong unique 12-digit student ID tracking academic progress, degrees, and credit transfers via Academic Bank of Credits (ABC)."
  },
  {
    id: 5,
    category: "National Affairs & Government Schemes",
    question: "Which scheme was launched by the Ministry of Agriculture to promote balanced use of chemical fertilizers combined with organic fertilizers?",
    options: [
      "PM-PRANAM",
      "PM-KUSUM",
      "PM-KISAN",
      "PM-FASAL"
    ],
    correctIndex: 0,
    explanation: "PM-PRANAM (Programme for Restoration, Awareness, Nourishment and Amelioration of Mother Earth) incentivizes states to reduce chemical fertilizer usage and adopt bio-fertilizers."
  },
  {
    id: 6,
    category: "National Affairs & Government Schemes",
    question: "What is the primary objective of the 'Namo Drone Didi' scheme announced by the Government of India?",
    options: [
      "To supply drones for border surveillance",
      "To empower Women Self Help Groups (SHGs) with drones for agricultural services",
      "To deliver medicines in mountainous regions",
      "To map rural housing land under SWAMITVA"
    ],
    correctIndex: 1,
    explanation: "Namo Drone Didi aims to empower 15,000 Women Self Help Groups (SHGs) by providing drones for liquid fertilizer spraying and crop monitoring, generating rural livelihood opportunities."
  },
  {
    id: 7,
    category: "National Affairs & Government Schemes",
    question: "Which Indian Ministry launched the 'Tele-MANAS' 24x7 free tele-mental health helpline initiative?",
    options: [
      "Ministry of Education",
      "Ministry of Women and Child Development",
      "Ministry of Health and Family Welfare",
      "Ministry of Social Justice and Empowerment"
    ],
    correctIndex: 2,
    explanation: "Tele-MANAS (Tele Mental Health Assistance and Networking Across States) was launched by the Ministry of Health & Family Welfare to provide accessible 24x7 mental health counseling across India."
  },
  {
    id: 8,
    category: "National Affairs & Government Schemes",
    question: "Under the 'Amrit Bharat Station Scheme', approximately how many railway stations across India are being modernized with world-class facilities?",
    options: [
      "500",
      "1,300+",
      "2,500",
      "4,000"
    ],
    correctIndex: 1,
    explanation: "The Amrit Bharat Station Scheme envisages the long-term master planning and redevelopment of over 1,300 railway stations across the Indian Railways network."
  },
  {
    id: 9,
    category: "National Affairs & Government Schemes",
    question: "Which traditional craft sectors are targeted for end-to-end support under the central government's 'PM Vishwakarma' scheme?",
    options: [
      "IT Software developers",
      "Artisans and Craftspeople in 18 traditional trades",
      "Handloom weavers only",
      "Renewable energy startups"
    ],
    correctIndex: 1,
    explanation: "PM Vishwakarma provides collateral-free loans, skill training, toolkit incentives, and marketing support to traditional artisans and craftspeople working in 18 trades (carpenter, blacksmith, potter, tailor, etc.)."
  },
  {
    id: 10,
    category: "National Affairs & Government Schemes",
    question: "What is the outlay targeted for Phase-3 of the 'BharatNet' project to connect all Gram Panchayats with high-speed broadband?",
    options: [
      "₹1.39 Lakh Crore",
      "₹50,000 Crore",
      "₹2.50 Lakh Crore",
      "₹85,000 Crore"
    ],
    correctIndex: 0,
    explanation: "BharatNet Phase-3 was approved with a budget allocation of ₹1.39 Lakh Crore to extend optical fiber network connectivity to all 2.6 lakh Gram Panchayats and rural villages."
  },
  {
    id: 11,
    category: "National Affairs & Government Schemes",
    question: "The 'PM MITRA' scheme of the Government of India is aimed at setting up mega integrated parks in which key sector?",
    options: [
      "Automobile",
      "Textiles & Garments",
      "Pharmaceuticals",
      "Electronics Manufacturing"
    ],
    correctIndex: 1,
    explanation: "PM MITRA (Mega Integrated Textile Region and Apparel) scheme is setting up 7 mega textile parks across India to create world-class plug-and-play manufacturing infrastructure."
  },
  {
    id: 12,
    category: "National Affairs & Government Schemes",
    question: "Which Indian city launched India's first underwater metro train service running beneath the Hooghly River?",
    options: [
      "Mumbai",
      "Kolkata",
      "Kochi",
      "Chennai"
    ],
    correctIndex: 1,
    explanation: "Kolkata Metro achieved a historic milestone by commencing India's first underwater metro commercial service connecting Howrah Maidan to Esplanade under the Hooghly River bed."
  },
  {
    id: 13,
    category: "National Affairs & Government Schemes",
    question: "What target year has been set under the 'Bharat 6G Vision' document released by PM Narendra Modi for rollout of 6G telecom services in India?",
    options: [
      "2026",
      "2028",
      "2030",
      "2035"
    ],
    correctIndex: 2,
    explanation: "The 'Bharat 6G Vision' document sets the official target year as 2030 for India to design, develop, and deploy 6G wireless network technologies globally."
  },
  {
    id: 14,
    category: "National Affairs & Government Schemes",
    question: "Which portal was launched by the Central Board of Direct Taxes (CBDT) for seamless online processing and monitoring of tax refunds?",
    options: [
      "TaxPay 2.0",
      "e-FILING 2.0 / AIS App",
      "E-VERIFY",
      "SAMARTH TAX"
    ],
    correctIndex: 1,
    explanation: "CBDT enhanced income tax taxpayers' experience through the upgraded e-Filing portal and AIS (Annual Information Statement) mobile app for instant pre-filled returns and rapid refund processing."
  },
  {
    id: 15,
    category: "National Affairs & Government Schemes",
    question: "Under the 'Jal Jeevan Mission', which state achieved 100% Har Ghar Jal (tap water supply) coverage first among large states in India?",
    options: [
      "Goa",
      "Gujarat",
      "Haryana",
      "Punjab"
    ],
    correctIndex: 0,
    explanation: "Goa became the first state in India to achieve 100% tap water connections in rural households under Jal Jeevan Mission, followed by Har Ghar Jal certifications for Gujarat, Haryana, and UTs."
  },

  // ==========================================
  // CATEGORY 2: International Affairs & Global Summits (16-27)
  // ==========================================
  {
    id: 16,
    category: "International Affairs & Global Summits",
    question: "Which nation holds the G20 Presidency for the year 2026 following South Africa's presidency in 2025?",
    options: [
      "United States of America",
      "United Kingdom",
      "Germany",
      "Japan"
    ],
    correctIndex: 0,
    explanation: "Following Brazil (2024) and South Africa (2025), the United States of America takes over the G20 Presidency for 2026, commencing a new cycle of host nations."
  },
  {
    id: 17,
    category: "International Affairs & Global Summits",
    question: "Where was the 30th United Nations Climate Change Conference (COP30) hosted?",
    options: [
      "Dubai, UAE",
      "Baku, Azerbaijan",
      "Belém, Brazil",
      "Madrid, Spain"
    ],
    correctIndex: 2,
    explanation: "COP30 UN Climate Change Conference was held in Belém, Amazon rainforest region of Brazil, highlighting global Amazon rainforest preservation and global carbon emission reduction targets."
  },
  {
    id: 18,
    category: "International Affairs & Global Summits",
    question: "Which multilateral alliance initiated by India alongside USA and Brazil aims to accelerate worldwide adoption of sustainable biofuels?",
    options: [
      "Global Biofuels Alliance (GBA)",
      "International Solar Alliance (ISA)",
      "Coalition for Disaster Resilient Infrastructure (CDRI)",
      "Global Green Energy Forum"
    ],
    correctIndex: 0,
    explanation: "The Global Biofuels Alliance (GBA) was launched during India's G20 Presidency to promote sustainable biofuels trade, technology transfer, and standards."
  },
  {
    id: 19,
    category: "International Affairs & Global Summits",
    question: "Which country officially joined the BRICS bloc as a new member in the recent BRICS expansion wave?",
    options: [
      "Egypt, Ethiopia, Iran, UAE",
      "Spain, Portugal, Italy",
      "Canada, Australia, New Zealand",
      "Indonesia, Thailand, Malaysia"
    ],
    correctIndex: 0,
    explanation: "BRICS expanded its membership by welcoming Egypt, Ethiopia, Iran, Saudi Arabia, and the United Arab Emirates (UAE) into the grouping."
  },
  {
    id: 20,
    category: "International Affairs & Global Summits",
    question: "Where was the 75th Anniversary NATO Summit hosted in 2024/2025?",
    options: [
      "Brussels, Belgium",
      "Washington D.C., USA",
      "Vilnius, Lithuania",
      "London, UK"
    ],
    correctIndex: 1,
    explanation: "The landmark 75th anniversary NATO Summit was held in Washington D.C., USA, focusing on transatlantic collective defense, security, and defense production goals."
  },
  {
    id: 21,
    category: "International Affairs & Global Summits",
    question: "The United Nations General Assembly declared which year as the 'International Year of Quantum Science and Technology' (IYQ)?",
    options: [
      "2024",
      "2025",
      "2026",
      "2030"
    ],
    correctIndex: 1,
    explanation: "The UN officially designated 2025 as the International Year of Quantum Science and Technology to commemorate 100 years since the initial development of quantum mechanics."
  },
  {
    id: 22,
    category: "International Affairs & Global Summits",
    question: "What was the rescue operation launched by India to evacuate its citizens from crisis-hit Haiti called?",
    options: [
      "Operation Indravati",
      "Operation Ganga",
      "Operation Kaveri",
      "Operation Ajay"
    ],
    correctIndex: 0,
    explanation: "Operation Indravati was launched by India to safely evacuate Indian nationals stranded in Haiti to the neighboring Dominican Republic due to widespread violence."
  },
  {
    id: 23,
    category: "International Affairs & Global Summits",
    question: "Which European countries officially joined the Schengen travel zone for air and sea borders in 2024?",
    options: [
      "Bulgaria and Romania",
      "Croatia and Serbia",
      "Cyprus and Greece",
      "Albania and Montenegro"
    ],
    correctIndex: 0,
    explanation: "Bulgaria and Romania officially became Schengen zone members for air and sea transport, eliminating border checks for maritime and air travelers."
  },
  {
    id: 24,
    category: "International Affairs & Global Summits",
    question: "Which nation hosted the Quad Leaders' Summit in 2024 featuring leaders from India, US, Japan, and Australia?",
    options: [
      "United States (Wilmington, Delaware)",
      "India (New Delhi)",
      "Japan (Tokyo)",
      "Australia (Sydney)"
    ],
    correctIndex: 0,
    explanation: "The 2024 Quad Leaders' Summit was hosted by US President Joe Biden in Wilmington, Delaware, attended by PM Narendra Modi, PM Anthony Albanese, and PM Fumio Kishida."
  },
  {
    id: 25,
    category: "International Affairs & Global Summits",
    question: "According to the Henley Passport Index 2025/2026, which country consistently held the rank 1 spot for world's most powerful passport?",
    options: [
      "Singapore",
      "Japan",
      "France",
      "Germany"
    ],
    correctIndex: 0,
    explanation: "Singapore maintained top position on the Henley Passport Index, granting visa-free or visa-on-arrival entry to 195 destinations worldwide."
  },
  {
    id: 26,
    category: "International Affairs & Global Summits",
    question: "Which nation became the 100th full member of the International Solar Alliance (ISA)?",
    options: [
      "Paraguay",
      "Panama",
      "Malta",
      "Chile"
    ],
    correctIndex: 0,
    explanation: "Paraguay officially handed over its instrument of ratification, becoming the 100th full member country of the International Solar Alliance (ISA)."
  },
  {
    id: 27,
    category: "International Affairs & Global Summits",
    question: "Where is the headquarters of the International Solar Alliance (ISA) located?",
    options: [
      "Gurugram, India",
      "Geneva, Switzerland",
      "Paris, France",
      "Vienna, Austria"
    ],
    correctIndex: 0,
    explanation: "The International Solar Alliance (ISA) is an international treaty-based organization headquartered at National Institute of Solar Energy (NISE) campus in Gurugram, Haryana, India."
  },

  // ==========================================
  // CATEGORY 3: Economy, Banking & Union Budget (28-40)
  // ==========================================
  {
    id: 28,
    category: "Economy, Banking & Union Budget",
    question: "Which body launched the 'Annual Survey of Incorporated Services Sector Enterprises (ASISSE)' in India?",
    options: [
      "National Statistics Office (NSO)",
      "Reserve Bank of India (RBI)",
      "NITI Aayog",
      "SEBI"
    ],
    correctIndex: 0,
    explanation: "The National Statistics Office (NSO) under the Ministry of Statistics and Programme Implementation launched ASISSE to compile comprehensive statistical data on the incorporated service sector economy."
  },
  {
    id: 29,
    category: "Economy, Banking & Union Budget",
    question: "Which Urban Co-operative Bank became the first in India to cross the ₹1 Lakh Crore total business milestone?",
    options: [
      "Saraswat Co-operative Bank",
      "Cosmos Co-operative Bank",
      "TJSB Sahakari Bank",
      "SVC Co-operative Bank"
    ],
    correctIndex: 0,
    explanation: "Saraswat Co-operative Bank created history by becoming India's first Urban Co-operative Bank (UCB) to surpass ₹1,00,000 Crore in total business turnover."
  },
  {
    id: 30,
    category: "Economy, Banking & Union Budget",
    question: "What are the 4 priority focus pillars ('Gyan') highlighted in the Union Budget for 'Viksit Bharat@2047'?",
    options: [
      "Garib (Poor), Yuva (Youth), Annadata (Farmers), Nari (Women)",
      "Government, Youth, Agriculture, Infrastructure",
      "Growth, Yield, Automation, Networking",
      "Green energy, Digital infrastructure, Agriculture, Transport"
    ],
    correctIndex: 0,
    explanation: "The Union Budget prioritizes four major focus groups: Garib (Poor), Yuva (Youth), Annadata (Farmers), and Nari (Women) as key drivers for Viksit Bharat by 2047."
  },
  {
    id: 31,
    category: "Economy, Banking & Union Budget",
    question: "Which foreign European country became the first to accept payments via India's Unified Payments Interface (UPI) system at the Eiffel Tower?",
    options: [
      "France",
      "Germany",
      "United Kingdom",
      "Switzerland"
    ],
    correctIndex: 0,
    explanation: "NPCI International Payments Limited (NIPL) launched UPI acceptance in France starting with Eiffel Tower merchant tickets, followed by UAE, Sri Lanka, Mauritius, and Nepal."
  },
  {
    id: 32,
    category: "Economy, Banking & Union Budget",
    question: "What is the name of RBI's Central Bank Digital Currency (CBDC) issued in retail and wholesale segments?",
    options: [
      "Digital Rupee (e₹)",
      "Bharat Token",
      "RBI Cash Digital",
      "e-Paisa"
    ],
    correctIndex: 0,
    explanation: "RBI introduced Digital Rupee (e₹), a sovereign digital currency operating on DLT distributed ledger technology for retail (e₹-R) and wholesale (e₹-W) digital transactions."
  },
  {
    id: 33,
    category: "Economy, Banking & Union Budget",
    question: "What is India's global ranking among the world's largest economies by nominal GDP?",
    options: [
      "5th Largest",
      "3rd Largest",
      "7th Largest",
      "4th Largest"
    ],
    correctIndex: 0,
    explanation: "India is currently the world's 5th largest economy by nominal GDP (~$3.9 Trillion), behind US, China, Germany, and Japan, projected to become 3rd largest by 2027-28."
  },
  {
    id: 34,
    category: "Economy, Banking & Union Budget",
    question: "Which landmark free trade agreement was signed between India and the 4-nation European Free Trade Association (EFTA) committing $100 Billion investment into India?",
    options: [
      "Trade and Economic Partnership Agreement (TEPA)",
      "Comprehensive Economic Partnership Agreement (CEPA)",
      "Indo-Pacific Trade Pact",
      "Bilateral Investment Treaty (BIT)"
    ],
    correctIndex: 0,
    explanation: "India signed the landmark Trade and Economic Partnership Agreement (TEPA) with EFTA nations (Switzerland, Norway, Iceland, Liechtenstein), securing $100 Billion FDI investment commitment over 15 years."
  },
  {
    id: 35,
    category: "Economy, Banking & Union Budget",
    question: "In 2024/2025, India's foreign exchange reserves (Forex) crossed which historic high watermark for the first time?",
    options: [
      "$700 Billion",
      "$500 Billion",
      "$1 Trillion",
      "$600 Billion"
    ],
    correctIndex: 0,
    explanation: "India's foreign exchange reserves hit a monumental historic record by touching $700 Billion landmark, strengthening macroeconomic buffer."
  },
  {
    id: 36,
    category: "Economy, Banking & Union Budget",
    question: "Which country emerged as the top source of Foreign Direct Investment (FDI) equity inflows into India?",
    options: [
      "Singapore",
      "Mauritius",
      "USA",
      "Netherlands"
    ],
    correctIndex: 0,
    explanation: "Singapore retained its position as the largest source of FDI equity inflows into India, followed by Mauritius, USA, Netherlands, and Japan."
  },
  {
    id: 37,
    category: "Economy, Banking & Union Budget",
    question: "Which financial regulatory body in India launched the 'Saa₹thi 2.0' mobile app for investor education and awareness?",
    options: [
      "SEBI",
      "RBI",
      "IRDAI",
      "PFRDA"
    ],
    correctIndex: 0,
    explanation: "SEBI (Securities and Exchange Board of India) launched the 'Saa₹thi 2.0' mobile app to empower retail investors with unbiased financial planning tools and market concepts."
  },
  {
    id: 38,
    category: "Economy, Banking & Union Budget",
    question: "What is the revised annual income tax exemption limit under the New Tax Regime introduced in recent Union Budget updates?",
    options: [
      "₹3.0 Lakh (Rebate up to ₹7 Lakh)",
      "₹2.5 Lakh",
      "₹5.0 Lakh",
      "₹10.0 Lakh"
    ],
    correctIndex: 0,
    explanation: "Under the New Tax Regime, basic tax exemption starts above ₹3 Lakh, while tax rebate under Sec 87A ensures zero tax liability for individuals with income up to ₹7 Lakh."
  },
  {
    id: 39,
    category: "Economy, Banking & Union Budget",
    question: "Which public sector enterprise became the 14th Maharatna CPSE in India?",
    options: [
      "Hindustan Aeronautics Limited (HAL)",
      "Oil India Limited (OIL)",
      "REC Limited",
      "IREDA"
    ],
    correctIndex: 0,
    explanation: "Hindustan Aeronautics Limited (HAL) was elevated to 14th Maharatna Central Public Sector Enterprise (CPSE) status, granting greater operational autonomy."
  },
  {
    id: 40,
    category: "Economy, Banking & Union Budget",
    question: "Which body acts as the nodal agency for calculating and releasing Consumer Price Index (CPI) retail inflation data in India?",
    options: [
      "National Sample Survey Office (NSSO) / NSO",
      "RBI Monetary Policy Committee",
      "Department of Economic Affairs",
      "NITI Aayog"
    ],
    correctIndex: 0,
    explanation: "The National Statistics Office (NSO) under Ministry of Statistics and Programme Implementation releases monthly CPI (Combined, Rural, Urban) retail inflation figures in India."
  },

  // ==========================================
  // CATEGORY 4: Defense & Military Exercises (41-52)
  // ==========================================
  {
    id: 41,
    category: "Defense & Military Exercises",
    question: "Exercise 'DUSTLIK' is a joint army exercise conducted between India and which Central Asian country?",
    options: [
      "Uzbekistan",
      "Kazakhstan",
      "Kyrgyzstan",
      "Tajikistan"
    ],
    correctIndex: 0,
    explanation: "'DUSTLIK' is a annual joint military training exercise conducted between the Indian Army and Uzbekistan Army to enhance counter-terrorism capabilities."
  },
  {
    id: 42,
    category: "Defense & Military Exercises",
    question: "Which stealth guided-missile destroyer built under Project 15B was commissioned into the Indian Navy at Visakhapatnam?",
    options: [
      "INS Imphal",
      "INS Surat",
      "INS Visakhapatnam",
      "INS Mormugao"
    ],
    correctIndex: 0,
    explanation: "INS Imphal (D68) is the third stealth guided-missile destroyer of Project 15B commissioned into the Indian Navy, featuring BrahMos supersonic cruise missiles."
  },
  {
    id: 43,
    category: "Defense & Military Exercises",
    question: "Exercise 'MALABAR' is a major multilateral naval exercise involving navies of which grouping?",
    options: [
      "Quad nations (India, US, Japan, Australia)",
      "BRICS nations",
      "ASEAN plus India",
      "IORA member countries"
    ],
    correctIndex: 0,
    explanation: "Exercise MALABAR brings together naval forces of all 4 Quad nations (India, United States, Japan, and Australia) for high-end maritime warfighting maneuvers."
  },
  {
    id: 44,
    category: "Defense & Military Exercises",
    question: "What is the name of the joint military exercise held between the armies of India and the United States?",
    options: [
      "Yudh Abhyas",
      "Vajra Prahar",
      "Nomadic Elephant",
      "Mitra Shakti"
    ],
    correctIndex: 0,
    explanation: "YUDH ABHYAS is the annual bilateral tactical military exercise conducted between Indian Army and US Army troops. (Vajra Prahar is between Special Forces)."
  },
  {
    id: 45,
    category: "Defense & Military Exercises",
    question: "What milestone total defense exports figure did India achieve in financial year 2023-24 / 2024-25?",
    options: [
      "₹21,083 Crore ($2.5 Billion)",
      "₹10,000 Crore",
      "₹50,000 Crore",
      "₹5,000 Crore"
    ],
    correctIndex: 0,
    explanation: "India's defense exports hit an all-time historic record of ₹21,083 Crore (32.5% growth), exporting military hardware to over 85 countries worldwide."
  },
  {
    id: 46,
    category: "Defense & Military Exercises",
    question: "Where is India's largest naval base infrastructure project, 'Project Seabird', being constructed?",
    options: [
      "Karwar, Karnataka",
      "Kochi, Kerala",
      "Visakhapatnam, Andhra Pradesh",
      "Port Blair, Andaman"
    ],
    correctIndex: 0,
    explanation: "Project Seabird at INS Kadamba in Karwar, Karnataka is India's largest naval infrastructure program designed to accommodate aircraft carriers and nuclear submarines."
  },
  {
    id: 47,
    category: "Defense & Military Exercises",
    question: "Exercise 'KHANJAR' is a joint special forces exercise conducted between India and which nation?",
    options: [
      "Kyrgyzstan",
      "Mongolia",
      "Oman",
      "Maldives"
    ],
    correctIndex: 0,
    explanation: "Exercise KHANJAR is the annual joint Special Forces exercise between Indian Army Special Forces and Kyrgyz Republic National Guard."
  },
  {
    id: 48,
    category: "Defense & Military Exercises",
    question: "What is the name of India's first indigenously designed and built Light Combat Helicopter (LCH)?",
    options: [
      "Prachand",
      "Rudra",
      "Dhruv",
      "Chetak"
    ],
    correctIndex: 0,
    explanation: "LCH Prachand, manufactured by Hindustan Aeronautics Limited (HAL), is the world's only attack helicopter capable of landing and taking off at altitudes of 5,000 meters in Siachen."
  },
  {
    id: 49,
    category: "Defense & Military Exercises",
    question: "Exercise 'DHARMA GUARDIAN' is a joint land military exercise between India and which East Asian country?",
    options: [
      "Japan",
      "South Korea",
      "Vietnam",
      "Singapore"
    ],
    correctIndex: 0,
    explanation: "Dharma Guardian is an annual joint military training exercise conducted between the Indian Army and the Japan Ground Self-Defense Force (JGSDF)."
  },
  {
    id: 50,
    category: "Defense & Military Exercises",
    question: "What is 'Akashteer', recently developed by Bharat Electronics Limited (BEL) for the Indian Army?",
    options: [
      "Automated Air Defence Control & Reporting System",
      "Long-range artillery rocket",
      "Unmanned submarine drone",
      "Anti-tank missile launcher"
    ],
    correctIndex: 0,
    explanation: "Akashteer is an indigenously developed Project for Automated Air Defence Control & Reporting System that integrates sensors, radars, and air defense weapons digitally."
  },
  {
    id: 51,
    category: "Defense & Military Exercises",
    question: "Exercise 'SAMPRITI' is conducted between the military forces of India and which neighbor?",
    options: [
      "Bangladesh",
      "Nepal",
      "Sri Lanka",
      "Myanmar"
    ],
    correctIndex: 0,
    explanation: "Exercise SAMPRITI is a flagship bilateral defense army exercise conducted alternately between India and Bangladesh to deepen military cooperation."
  },
  {
    id: 52,
    category: "Defense & Military Exercises",
    question: "What is the name of India's first indigenous aircraft carrier commissioned into the Indian Navy?",
    options: [
      "INS Vikrant",
      "INS Vikramaditya",
      "INS Viraat",
      "INS Vishal"
    ],
    correctIndex: 0,
    explanation: "INS Vikrant (IAC-1), built by Cochin Shipyard Limited, is India's first indigenously designed and constructed aircraft carrier."
  },

  // ==========================================
  // CATEGORY 5: Science, Space & Technology (53-65)
  // ==========================================
  {
    id: 53,
    category: "Science, Space & Technology",
    question: "What is the female humanoid robot developed by ISRO for the uncrewed Gaganyaan spaceflight test mission named?",
    options: [
      "Vyommitra",
      "GaganNari",
      "MitraBot",
      "Shakti"
    ],
    correctIndex: 0,
    explanation: "Vyommitra is ISRO's half-humanoid robot designed to simulate human crew functions and monitor life-support parameters inside the Gaganyaan capsule during unmanned orbital flights."
  },
  {
    id: 54,
    category: "Science, Space & Technology",
    question: "Into which orbital location was ISRO's Aditya-L1 solar observatory satellite successfully inserted in January 2024?",
    options: [
      "Halo Orbit around Lagrange Point 1 (L1)",
      "Low Earth Orbit (LEO)",
      "Lunar Polar Orbit",
      "Lagrange Point 2 (L2)"
    ],
    correctIndex: 0,
    explanation: "Aditya-L1 was successfully placed into a Halo Orbit around Sun-Earth Lagrange Point 1 (L1), located ~1.5 million km from Earth, to continuously observe the Sun's atmosphere and coronal mass ejections."
  },
  {
    id: 55,
    category: "Science, Space & Technology",
    question: "Which joint Earth-observing satellite mission is developed collaboration between NASA and ISRO featuring dual-frequency radar?",
    options: [
      "NISAR",
      "ASTROSAT",
      "GARUDA-1",
      "SARAL-L1"
    ],
    correctIndex: 0,
    explanation: "NISAR (NASA-ISRO Synthetic Aperture Radar) is a joint mission deploying L-band and S-band dual radar to map global land mass, ice sheets, and natural hazard deformations."
  },
  {
    id: 56,
    category: "Science, Space & Technology",
    question: "What is the name of the manned deep-sea submersible vehicle developed under India's 'Deep Ocean Mission' to carry 3 aquanauts to a depth of 6,000 meters?",
    options: [
      "Matsya 6000",
      "Samudrayaan-1",
      "Varuna 600",
      "Oceanus"
    ],
    correctIndex: 0,
    explanation: "Matsya 6000, developed by National Institute of Ocean Technology (NIOT) under Samudrayaan project, is a human-submersible designed to explore deep ocean mineral resources."
  },
  {
    id: 57,
    category: "Science, Space & Technology",
    question: "Where is India's first commercial Semiconductor Fab plant being constructed by Tata Electronics in partnership with Taiwan's PSMC?",
    options: [
      "Dholera, Gujarat",
      "Bengaluru, Karnataka",
      "Hyderabad, Telangana",
      "Noida, Uttar Pradesh"
    ],
    correctIndex: 0,
    explanation: "India's first commercial semiconductor fabrication facility (Fab) is being set up in Dholera Special Investment Region, Gujarat, by Tata Electronics and Taiwan's Powerchip Semiconductor Manufacturing Corp (PSMC)."
  },
  {
    id: 58,
    category: "Science, Space & Technology",
    question: "What is the primary objective of ISRO's upcoming 'Chandrayaan-4' lunar mission?",
    options: [
      "To bring back lunar soil and rock samples from Moon to Earth",
      "To place an astronaut on the lunar surface",
      "To land on the Moon's north pole",
      "To deploy a deep space telescope on Moon"
    ],
    correctIndex: 0,
    explanation: "Chandrayaan-4 (Lunar Sample Return Mission) is designed as a multi-module spacecraft mission to land on the Moon, collect lunar regolith samples, and return them back to Earth."
  },
  {
    id: 59,
    category: "Science, Space & Technology",
    question: "What is total financial outlay approved by the Union Cabinet for the National Quantum Mission (NQM)?",
    options: [
      "₹6,003 Crore",
      "₹1,000 Crore",
      "₹12,000 Crore",
      "₹3,500 Crore"
    ],
    correctIndex: 0,
    explanation: "The National Quantum Mission (NQM) was approved with an outlay of ₹6,003.65 Crore (2023–2031) to develop 50-1000 physical qubits quantum computers, quantum communications, and sensing technologies."
  },
  {
    id: 60,
    category: "Science, Space & Technology",
    question: "Which satellite dedicated to studying cosmic X-ray polarimetry sources was launched by ISRO on PSLV-C58 on New Year's Day 2024?",
    options: [
      "XPoSat",
      "AstroSat-2",
      "EOS-07",
      "INSAT-3DS"
    ],
    correctIndex: 0,
    explanation: "XPoSat (X-ray Polarimeter Satellite) is India's first dedicated polarimetry mission to study black holes, neutron stars, and active galactic nuclei in X-ray emission frequencies."
  },
  {
    id: 61,
    category: "Science, Space & Technology",
    question: "Which Indian private space tech startup successfully launched its semi-cryogenic 3D-printed rocket engine 'Agnibaan SOrTeD'?",
    options: [
      "Agnikul Cosmos",
      "Skyroot Aerospace",
      "Pixaxel",
      "Bellatrix Aerospace"
    ],
    correctIndex: 0,
    explanation: "Chennai-based Agnikul Cosmos achieved a historic milestone by launching Agnibaan SOrTeD, powered by Agnilet—the world's first single-piece 3D-printed semi-cryogenic engine."
  },
  {
    id: 62,
    category: "Science, Space & Technology",
    question: "What is the official AI language translation platform launched by the Ministry of Electronics and IT to bridge language barriers across 22 scheduled Indian languages?",
    options: [
      "Bhashini (BHASHINI)",
      "BhashaSetu",
      "AI-Bharat",
      "IndicTranslate"
    ],
    correctIndex: 0,
    explanation: "Bhashini (Digital India Bhashini) is an AI-led language translation platform providing real-time speech-to-speech and text translation across Indian languages."
  },
  {
    id: 63,
    category: "Science, Space & Technology",
    question: "Which supercomputer deployed at C-DAC Pune under National Supercomputing Mission ranked high in the global Top500 supercomputers list?",
    options: [
      "AIRAWAT / PARAM Siddhi",
      "PARAM Ananta",
      "PARAM Rudra",
      "PARAM Shivay"
    ],
    correctIndex: 0,
    explanation: "AIRAWAT AI supercomputer located at C-DAC Pune was ranked among the top global AI supercomputing systems under the National AI strategy."
  },
  {
    id: 64,
    category: "Science, Space & Technology",
    question: "Which meteorology satellite was launched by ISRO aboard GSLV-F14 to enhance weather forecasting and cyclone warnings?",
    options: [
      "INSAT-3DS",
      "Oceansat-3",
      "Cartosat-3",
      "RISAT-1B"
    ],
    correctIndex: 0,
    explanation: "INSAT-3DS is a next-generation meteorological satellite deployed into Geostationary Transfer Orbit by GSLV-F14 for advanced weather monitoring."
  },
  {
    id: 65,
    category: "Science, Space & Technology",
    question: "What is the name of India's indigenous GPS navigation satellite constellation operated by ISRO?",
    options: [
      "NavIC (IRNSS)",
      "GAGAN",
      "Bhuvan",
      "IndNav"
    ],
    correctIndex: 0,
    explanation: "NavIC (Navigation with Indian Constellation), formerly IRNSS, is India's independent regional satellite navigation system providing positioning services."
  },

  // ==========================================
  // CATEGORY 6: Sports & Championships (66-78)
  // ==========================================
  {
    id: 66,
    category: "Sports & Championships",
    question: "Which team won the ICC Men's T20 World Cup 2024 by defeating South Africa in the final held in Barbados?",
    options: [
      "India",
      "Australia",
      "England",
      "South Africa"
    ],
    correctIndex: 0,
    explanation: "India won the ICC Men's T20 World Cup 2024 title, defeating South Africa by 7 runs in a thrilling final in Kensington Oval, Barbados, under captain Rohit Sharma."
  },
  {
    id: 67,
    category: "Sports & Championships",
    question: "Who won the Men's Singles title at the 2026 Australian Open tennis tournament?",
    options: [
      "Novak Djokovic",
      "Jannik Sinner",
      "Carlos Alcaraz",
      "Daniil Medvedev"
    ],
    correctIndex: 0,
    explanation: "Novak Djokovic claimed the 2026 Australian Open Men's Singles trophy, extending his legendary Grand Slam title tally."
  },
  {
    id: 68,
    category: "Sports & Championships",
    question: "Indian shooter Manu Bhaker created history at the Paris 2024 Olympics by becoming:",
    options: [
      "First Indian athlete to win two medals at a single Olympic Games post-independence",
      "First Indian woman to win an Olympic gold medal in shooting",
      "Youngest ever Olympic flag bearer",
      "First Indian archer to win an Olympic medal"
    ],
    correctIndex: 0,
    explanation: "Manu Bhaker became the first athlete of independent India to win 2 medals at a single Olympic Games (Bronze in Women's 10m Air Pistol & Bronze in Mixed Team 10m Air Pistol with Sarabjot Singh)."
  },
  {
    id: 69,
    category: "Sports & Championships",
    question: "Who became the youngest challenger in history to compete for the World Chess Championship title after winning the FIDE Candidates Tournament 2024?",
    options: [
      "Dommaraju Gukesh (D Gukesh)",
      "Rameshbabu Praggnanandhaa",
      "Arjun Erigaisi",
      "Nihal Sarin"
    ],
    correctIndex: 0,
    explanation: "At 17 years of age, Grandmaster D Gukesh won the FIDE Candidates Tournament in Toronto, becoming the youngest player ever to challenge for the World Chess Championship title."
  },
  {
    id: 70,
    category: "Sports & Championships",
    question: "Which Indian tennis player became the oldest world No. 1 in men's doubles history at age 43 after winning the 2024 Australian Open Men's Doubles title?",
    options: [
      "Rohan Bopanna",
      "Leander Paes",
      "Mahesh Bhupathi",
      "Yuki Bhambri"
    ],
    correctIndex: 0,
    explanation: "Rohan Bopanna won his maiden Australian Open men's doubles title (with Matthew Ebden) and became the oldest world No. 1 in ATP Doubles rankings history."
  },
  {
    id: 71,
    category: "Sports & Championships",
    question: "Which state topped the overall medal tally at the 6th Khelo India Youth Games held in Tamil Nadu?",
    options: [
      "Maharashtra",
      "Tamil Nadu",
      "Haryana",
      "Rajasthan"
    ],
    correctIndex: 0,
    explanation: "Maharashtra defended its title and topped the Khelo India Youth Games medal tally with 158 total medals (57 Gold, 48 Silver, 53 Bronze)."
  },
  {
    id: 72,
    category: "Sports & Championships",
    question: "Which team won the Ranji Trophy 2023-24 title, claiming their 42nd Ranji championship victory?",
    options: [
      "Mumbai",
      "Vidarbha",
      "Saurashtra",
      "Madhya Pradesh"
    ],
    correctIndex: 0,
    explanation: "Mumbai defeated Vidarbha in the final at Wankhede Stadium to lift their record-extending 42nd Ranji Trophy title."
  },
  {
    id: 73,
    category: "Sports & Championships",
    question: "Indian Women's Badminton Team created history by winning their first-ever Gold medal at which major Asian event in Shah Alam, Malaysia?",
    options: [
      "Badminton Asia Team Championships 2024",
      "Asian Games Badminton",
      "Uber Cup",
      "Sudirman Cup"
    ],
    correctIndex: 0,
    explanation: "Led by PV Sindhu and teenage sensation Anmol Kharb, the Indian Women's Badminton team defeated Thailand 3-2 in the final to capture historic Gold at Badminton Asia Team Championships."
  },
  {
    id: 74,
    category: "Sports & Championships",
    question: "Who won the Silver medal in Men's Javelin Throw at the Paris 2024 Olympic Games?",
    options: [
      "Neeraj Chopra",
      "Arshad Nadeem",
      "Kishore Jena",
      "Anderson Peters"
    ],
    correctIndex: 0,
    explanation: "Neeraj Chopra won the Silver medal in Men's Javelin Throw at Paris 2024 Olympics with a throw of 89.45m (Gold won by Pakistan's Arshad Nadeem)."
  },
  {
    id: 75,
    category: "Sports & Championships",
    question: "Which IPL team won the Indian Premier League (IPL) 2024 trophy by defeating Sunrisers Hyderabad in the final?",
    options: [
      "Kolkata Knight Riders (KKR)",
      "Chennai Super Kings (CSK)",
      "Royal Challengers Bengaluru (RCB)",
      "Mumbai Indians (MI)"
    ],
    correctIndex: 0,
    explanation: "Kolkata Knight Riders (KKR) captained by Shreyas Iyer won their 3rd IPL title by defeating Sunrisers Hyderabad in Chennai."
  },
  {
    id: 76,
    category: "Sports & Championships",
    question: "Where were the 33rd Summer Olympic Games hosted in 2024?",
    options: [
      "Paris, France",
      "Tokyo, Japan",
      "Los Angeles, USA",
      "Brisbane, Australia"
    ],
    correctIndex: 0,
    explanation: "The 2024 Summer Olympics (Games of the XXXIII Olympiad) were held in Paris, France from July 26 to August 11, 2024."
  },
  {
    id: 77,
    category: "Sports & Championships",
    question: "Which Indian Men's Hockey player was named FIH Player of the Year / captained India to back-to-back Olympic Bronze medals at Paris 2024?",
    options: [
      "Harmanpreet Singh",
      "PR Sreejesh",
      "Manpreet Singh",
      "Hardik Singh"
    ],
    correctIndex: 0,
    explanation: "Harmanpreet Singh captained the Indian Men's Hockey team to back-to-back Olympic bronze medals (Tokyo 2020 & Paris 2024) and top-scored in the tournament."
  },
  {
    id: 78,
    category: "Sports & Championships",
    question: "Which countries are co-hosting the FIFA World Cup 2026?",
    options: [
      "USA, Canada, and Mexico",
      "Spain, Portugal, and Morocco",
      "Saudi Arabia",
      "Argentina, Uruguay, and Paraguay"
    ],
    correctIndex: 0,
    explanation: "The FIFA World Cup 2026 will be jointly hosted across 16 cities in 3 North American nations: United States, Canada, and Mexico."
  },

  // ==========================================
  // CATEGORY 7: Awards, Honours & Recognitions (79-90)
  // ==========================================
  {
    id: 79,
    category: "Awards, Honours & Recognitions",
    question: "Who among the following was awarded India's highest civilian honor, Bharat Ratna, posthumously in 2024?",
    options: [
      "Karpoori Thakur & PV Narasimha Rao",
      "L.K. Advani only",
      "Ratan Tata",
      "Milkha Singh"
    ],
    correctIndex: 0,
    explanation: "Bharat Ratna was conferred upon former Bihar CM Karpoori Thakur, former PM PV Narasimha Rao, former PM Chaudhary Charan Singh, legendary scientist MS Swaminathan (posthumously), and veteran leader L.K. Advani."
  },
  {
    id: 80,
    category: "Awards, Honours & Recognitions",
    question: "Who were named joint recipients of the prestigious 59th Jnanpith Award for literary excellence?",
    options: [
      "Jagadguru Rambhadracharya (Sanskrit) and Gulzar (Urdu)",
      "Damodar Mauzo and Nilmani Phookan",
      "Amitav Ghosh and Krishna Sobti",
      "Kedarnath Singh and Shankha Ghosh"
    ],
    correctIndex: 0,
    explanation: "The 59th Jnanpith Award was awarded jointly to renowned Sanskrit scholar/spiritual leader Jagadguru Rambhadracharya and celebrated Urdu poet/lyricist Gulzar."
  },
  {
    id: 81,
    category: "Awards, Honours & Recognitions",
    question: "Which Indian cultural heritage site in Assam was added as India's 43rd UNESCO World Heritage Site under the cultural category?",
    options: [
      "Moidams – the Mound-Burial System of the Ahom Dynasty",
      "Sacred Ensembles of the Hoysalas",
      "Santiniketan",
      "Kakatiya Rudreshwara (Ramappa) Temple"
    ],
    correctIndex: 0,
    explanation: "'Moidams' – the royal mound-burial system of the Ahom Dynasty in Charaideo, Assam, was inscribed on the UNESCO World Heritage list, becoming the first cultural site from North East India."
  },
  {
    id: 82,
    category: "Awards, Honours & Recognitions",
    question: "Who was awarded the Nobel Peace Prize 2024 by the Norwegian Nobel Committee?",
    options: [
      "Nihon Hidankyo (Japanese organization of atomic bomb survivors)",
      "Narges Mohammadi",
      "World Food Programme",
      "Memorial and Center for Civil Liberties"
    ],
    correctIndex: 0,
    explanation: "Japanese organization Nihon Hidankyo was awarded the Nobel Peace Prize 2024 for its grassroots efforts to achieve a world free of nuclear weapons."
  },
  {
    id: 83,
    category: "Awards, Honours & Recognitions",
    question: "Which movie won the Best Feature Film award at the 70th National Film Awards in India?",
    options: [
      "Aattam (Malayalam)",
      "RRR",
      "Kantara",
      "Rocketry: The Nambi Effect"
    ],
    correctIndex: 0,
    explanation: "The Malayalam film 'Aattam', directed by Anand Ekarshi, won the coveted Best Feature Film award at the 70th National Film Awards."
  },
  {
    id: 84,
    category: "Awards, Honours & Recognitions",
    question: "Who was honored with the 53rd Dadasaheb Phalke Lifetime Achievement Award, India's highest cinema honor?",
    options: [
      "Mithun Chakraborty / Waheeda Rehman",
      "Asha Parekh",
      "Rajinikanth",
      "Amitabh Bachchan"
    ],
    correctIndex: 0,
    explanation: "Veteran actor Mithun Chakraborty was conferred the Dadasaheb Phalke Award for his iconic contributions to Indian cinema (following Waheeda Rehman)."
  },
  {
    id: 85,
    category: "Awards, Honours & Recognitions",
    question: "Which prestigious international award often referred to as the 'Nobel Prize of Mathematics' was awarded to Michel Talagrand in 2024?",
    options: [
      "Abel Prize",
      "Fields Medal",
      "Turing Award",
      "Pricker Architecture Prize"
    ],
    correctIndex: 0,
    explanation: "The Norwegian Academy of Science and Letters awarded the Abel Prize 2024 to French mathematician Michel Talagrand for work in probability theory and stochastic processes."
  },
  {
    id: 86,
    category: "Awards, Honours & Recognitions",
    question: "Which author won the Booker Prize 2024 for the novel 'Orbital'?",
    options: [
      "Samantha Harvey",
      "Paul Lynch",
      "Shehan Karunatilaka",
      "Damon Galgut"
    ],
    correctIndex: 0,
    explanation: "Samantha Harvey won the Booker Prize 2024 for her space station-set novel 'Orbital', depicting 24 hours in the lives of six astronauts."
  },
  {
    id: 87,
    category: "Awards, Honours & Recognitions",
    question: "Which literary award was presented to Hindi writer Sanjeev for his novel 'Mujhe Pahanchano'?",
    options: [
      "Sahitya Akademi Award",
      "Vyas Samman",
      "Saraswati Samman",
      "Bihari Puraskar"
    ],
    correctIndex: 0,
    explanation: "Renowned writer Sanjeev was awarded the Sahitya Akademi Award in Hindi for his acclaimed novel 'Mujhe Pahanchano'."
  },
  {
    id: 88,
    category: "Awards, Honours & Recognitions",
    question: "Who received the 33rd Saraswati Samman for outstanding prose work 'Yadein, Yadein aur Yadein'?",
    options: [
      "Pushpa Bharati",
      "Prabha Varma",
      "Shiva Sankari",
      "Ramdarash Mishra"
    ],
    correctIndex: 0,
    explanation: "Noted Hindi author Pushpa Bharati was selected for the Saraswati Samman for her memoir 'Yadein, Yadein aur Yadein'."
  },
  {
    id: 89,
    category: "Awards, Honours & Recognitions",
    question: "Which country conferred its highest civilian honor, 'Grand Commander of the Order of the Niger' (GCON), on Prime Minister Narendra Modi in 2024?",
    options: [
      "Nigeria",
      "Russia",
      "Egypt",
      "France"
    ],
    correctIndex: 0,
    explanation: "Nigeria conferred its highest honor GCON on PM Narendra Modi, making him only the second foreign leader after Queen Elizabeth II to receive the distinction."
  },
  {
    id: 90,
    category: "Awards, Honours & Recognitions",
    question: "The 'Order of Saint Andrew the Apostle', Russia's highest civilian state honor, was presented to PM Narendra Modi in Moscow by President:",
    options: [
      "Vladimir Putin",
      "Emmanuel Macron",
      "Joe Biden",
      "Xi Jinping"
    ],
    correctIndex: 0,
    explanation: "Russian President Vladimir Putin officially presented Russia's highest state decoration, the Order of St. Andrew the Apostle, to PM Narendra Modi at the Kremlin."
  },

  // ==========================================
  // CATEGORY 8: Appointments, Indexes & Important Days (91-100)
  // ==========================================
  {
    id: 91,
    category: "Appointments, Indexes & Important Days",
    question: "Who is the current Chief Justice of India (CJI) presiding over the Supreme Court of India?",
    options: [
      "Justice Sanjiv Khanna",
      "Justice D.Y. Chandrachud",
      "Justice U.U. Lalit",
      "Justice N.V. Ramana"
    ],
    correctIndex: 0,
    explanation: "Justice Sanjiv Khanna succeeded Justice D.Y. Chandrachud as the 51st Chief Justice of India (CJI)."
  },
  {
    id: 92,
    category: "Appointments, Indexes & Important Days",
    question: "What is India's rank in the Global Innovation Index (GII) released by the World Intellectual Property Organization (WIPO)?",
    options: [
      "40th",
      "81st",
      "15th",
      "52nd"
    ],
    correctIndex: 0,
    explanation: "India held the 40th rank among 132 economies in the Global Innovation Index (GII), up from 81st position in 2015."
  },
  {
    id: 93,
    category: "Appointments, Indexes & Important Days",
    question: "Who serves as the current Vice-Chairman of NITI Aayog?",
    options: [
      "Suman Bery",
      "B.V.R. Subrahmanyam",
      "Arvind Panagariya",
      "Rajiv Kumar"
    ],
    correctIndex: 0,
    explanation: "Suman Bery is the Vice-Chairman of NITI Aayog (Prime Minister Narendra Modi is ex-officio Chairman, and B.V.R. Subrahmanyam is CEO)."
  },
  {
    id: 94,
    category: "Appointments, Indexes & Important Days",
    question: "Who is the current Chief Election Commissioner (CEC) leading the Election Commission of India?",
    options: [
      "Rajiv Kumar",
      "Gyanesh Kumar",
      "Sukhbir Singh Sandhu",
      "Sushil Chandra"
    ],
    correctIndex: 0,
    explanation: "Rajiv Kumar serves as the 25th Chief Election Commissioner of India alongside Election Commissioners Gyanesh Kumar and Sukhbir Singh Sandhu."
  },
  {
    id: 95,
    category: "Appointments, Indexes & Important Days",
    question: "On which date is 'National Youth Day' celebrated across India every year to honor the birth anniversary of Swami Vivekananda?",
    options: [
      "12th January",
      "23rd January",
      "15th August",
      "31st October"
    ],
    correctIndex: 0,
    explanation: "National Youth Day (Yuva Diwas) is celebrated on 12th January to commemorate the birth anniversary and inspiring thoughts of Swami Vivekananda."
  },
  {
    id: 96,
    category: "Appointments, Indexes & Important Days",
    question: "What is the official observance date for 'National Science Day' in India, commemorating the discovery of the Raman Effect?",
    options: [
      "28th February",
      "11th May",
      "15th September",
      "7th November"
    ],
    correctIndex: 0,
    explanation: "National Science Day is celebrated annually on February 28 to mark Sir C.V. Raman's discovery of the 'Raman Effect' in 1928, for which he received the 1930 Nobel Prize in Physics."
  },
  {
    id: 97,
    category: "Appointments, Indexes & Important Days",
    question: "Which day is designated as 'Good Governance Day' (Sushasan Diwas) in India to honor former PM Atal Bihari Vajpayee?",
    options: [
      "25th December",
      "26th November",
      "31st October",
      "2nd October"
    ],
    correctIndex: 0,
    explanation: "Good Governance Day is observed on December 25 every year to mark the birth anniversary of former Prime Minister Atal Bihari Vajpayee."
  },
  {
    id: 98,
    category: "Appointments, Indexes & Important Days",
    question: "Which day is observed as 'National Space Day' in India to celebrate the successful soft landing of Chandrayaan-3 on the Moon?",
    options: [
      "23rd August",
      "14th July",
      "2nd September",
      "15th October"
    ],
    correctIndex: 0,
    explanation: "The Government of India declared 23rd August as 'National Space Day' to commemorate the historic landing of Chandrayaan-3's Vikram lander near the lunar south pole."
  },
  {
    id: 99,
    category: "Appointments, Indexes & Important Days",
    question: "Which date is annually celebrated worldwide as the 'International Day of Yoga' since its inception by UN resolution in 2015?",
    options: [
      "21st June",
      "5th June",
      "22nd April",
      "1st December"
    ],
    correctIndex: 0,
    explanation: "June 21 (the summer solstice in the Northern Hemisphere) is observed globally as the International Day of Yoga."
  },
  {
    id: 100,
    category: "Appointments, Indexes & Important Days",
    question: "On which date is 'National Unity Day' (Rashtriya Ekta Diwas) celebrated in India to commemorate Sardar Vallabhbhai Patel's birth anniversary?",
    options: [
      "31st October",
      "26th November",
      "15th August",
      "26th January"
    ],
    correctIndex: 0,
    explanation: "National Unity Day (Rashtriya Ekta Diwas) is celebrated on 31st October every year to pay tribute to the Iron Man of India, Sardar Vallabhbhai Patel."
  }
];
