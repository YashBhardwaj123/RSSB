// ========================================================
// EXAMINATION QUESTION BANK DATASTORE
// 1. SSC CGL 2026 Current Affairs (100 MCQs)
// 2. IBPS SO IT Officer 2026 Computer Knowledge (100 MCQs)
// ========================================================

const SSC_CGL_QUESTIONS = [
  // CATEGORY 1: National Affairs & Government Schemes (1-15)
  {
    id: 1,
    category: "National Affairs & Government Schemes",
    question: "Where was India's first immersive language museum, 'Shabdalok' (Museum of Word), inaugurated in 2026?",
    options: ["New Delhi", "Kolkata", "Bengaluru", "Varanasi"],
    correctIndex: 1,
    explanation: "India's first immersive language museum, 'Shabdalok' (Museum of Word), was inaugurated at the National Library campus in Kolkata to preserve and showcase linguistic diversity and Indian language evolution."
  },
  {
    id: 2,
    category: "National Affairs & Government Schemes",
    question: "Which central government scheme provides interest subvention on education loans up to ₹10 Lakh for higher studies in top 860 HEIs in India?",
    options: ["PM-Vidyalaxmi", "PM-Usha", "PM-Shri", "PM-GatiShakti"],
    correctIndex: 0,
    explanation: "PM-Vidyalaxmi is a Central Sector Scheme providing collateral-free loans to meritorious students for higher education in top quality higher educational institutions."
  },
  {
    id: 3,
    category: "National Affairs & Government Schemes",
    question: "Under the 'PM Surya Ghar: Muft Bijli Yojana', how many free units of electricity per month are targeted for 1 crore households installing rooftop solar plants?",
    options: ["100 Units", "200 Units", "300 Units", "500 Units"],
    correctIndex: 2,
    explanation: "PM Surya Ghar: Muft Bijli Yojana provides up to 300 units of free electricity per month for 1 crore households by installing rooftop solar panels with central subsidies."
  },
  {
    id: 4,
    category: "National Affairs & Government Schemes",
    question: "What is the official acronym for the 'One Nation, One Student ID' system launched by the Ministry of Education under NEP 2020?",
    options: ["APAAR", "AADHAR-EDU", "DIGILOCKER-ID", "SHIKSHA"],
    correctIndex: 0,
    explanation: "APAAR stands for Automated Permanent Academic Account Registry. It serves as a lifelong unique 12-digit student ID tracking academic progress via Academic Bank of Credits (ABC)."
  },
  {
    id: 5,
    category: "National Affairs & Government Schemes",
    question: "Which scheme was launched by the Ministry of Agriculture to promote balanced use of chemical fertilizers combined with organic fertilizers?",
    options: ["PM-PRANAM", "PM-KUSUM", "PM-KISAN", "PM-FASAL"],
    correctIndex: 0,
    explanation: "PM-PRANAM (Programme for Restoration, Awareness, Nourishment and Amelioration of Mother Earth) incentivizes states to reduce chemical fertilizer usage and adopt bio-fertilizers."
  },
  {
    id: 6,
    category: "National Affairs & Government Schemes",
    question: "What is the primary objective of the 'Namo Drone Didi' scheme announced by the Government of India?",
    options: ["To supply drones for border surveillance", "To empower Women Self Help Groups (SHGs) with drones for agricultural services", "To deliver medicines in mountainous regions", "To map rural housing land under SWAMITVA"],
    correctIndex: 1,
    explanation: "Namo Drone Didi aims to empower 15,000 Women Self Help Groups (SHGs) by providing drones for liquid fertilizer spraying and crop monitoring, generating rural livelihood opportunities."
  },
  {
    id: 7,
    category: "National Affairs & Government Schemes",
    question: "Which Indian Ministry launched the 'Tele-MANAS' 24x7 free tele-mental health helpline initiative?",
    options: ["Ministry of Education", "Ministry of Women and Child Development", "Ministry of Health and Family Welfare", "Ministry of Social Justice and Empowerment"],
    correctIndex: 2,
    explanation: "Tele-MANAS (Tele Mental Health Assistance and Networking Across States) was launched by the Ministry of Health & Family Welfare to provide accessible 24x7 mental health counseling across India."
  },
  {
    id: 8,
    category: "National Affairs & Government Schemes",
    question: "Under the 'Amrit Bharat Station Scheme', approximately how many railway stations across India are being modernized with world-class facilities?",
    options: ["500", "1,000", "1,300+", "2,500"],
    correctIndex: 2,
    explanation: "The Amrit Bharat Station Scheme envisions modernizing 1,300+ railway stations across the Indian Railways network with long-term master planning."
  },
  {
    id: 9,
    category: "National Affairs & Government Schemes",
    question: "Which state became the first in India to implement the Uniform Civil Code (UCC) post-independence after passing the UCC Bill?",
    options: ["Gujarat", "Uttarakhand", "Assam", "Goa"],
    correctIndex: 1,
    explanation: "Uttarakhand became the first state in post-independence India to pass and implement a Uniform Civil Code (UCC) bill covering marriage, divorce, inheritance, and live-in relationships."
  },
  {
    id: 10,
    category: "National Affairs & Government Schemes",
    question: "What is the target year set by India to achieve Net-Zero carbon emissions under its Panchamrit climate goals?",
    options: ["2030", "2047", "2050", "2070"],
    correctIndex: 3,
    explanation: "India committed to achieving Net-Zero carbon emissions by 2070 at the COP26 climate summit as part of its Panchamrit strategy."
  },
  {
    id: 11,
    category: "National Affairs & Government Schemes",
    question: "Which mission was launched to make India a global hub for manufacturing, utilizing, and exporting Green Hydrogen?",
    options: ["National Green Hydrogen Mission", "Clean Energy India Mission", "PM-Urja Ganga Mission", "PM-Suryodaya Mission"],
    correctIndex: 0,
    explanation: "The National Green Hydrogen Mission, with an outlay of ₹19,744 Crore, targets building a green hydrogen production capacity of at least 5 MMT per annum by 2030."
  },
  {
    id: 12,
    category: "National Affairs & Government Schemes",
    question: "What is the name of India's indigenous deep-sea manned submersible designed under the 'Deep Ocean Mission' for ocean exploration?",
    options: ["MATSYA 6000", "SAMUDRAYAAN 1", "OCEAN-DEEP 5000", "VARUNASTRA 6000"],
    correctIndex: 0,
    explanation: "MATSYA 6000 is an indigenous manned submersible developed by NIOT under the Deep Ocean Mission capable of taking 3 humans to a depth of 6,000 meters."
  },
  {
    id: 13,
    category: "National Affairs & Government Schemes",
    question: "Which port was designated as India's first Transshipment Port located in Kerala?",
    options: ["Kochi Port", "Vizhinjam International Seaport", "Vadhvan Port", "Tuticorin Port"],
    correctIndex: 1,
    explanation: "Vizhinjam International Seaport in Trivandrum, Kerala, is India's first deepwater transshipment port equipped to handle ultra-large container vessels."
  },
  {
    id: 14,
    category: "National Affairs & Government Schemes",
    question: "Which scheme provides PM-KISAN eligible farmers with an annual income support of ₹6,000 transferred in three equal installments?",
    options: ["PM-KISAN", "PM-KMY", "PM-FASAL", "PM-KSY"],
    correctIndex: 0,
    explanation: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) provides direct income support of ₹6,000 per year directly into bank accounts of eligible landholding farmer families."
  },
  {
    id: 15,
    category: "National Affairs & Government Schemes",
    question: "Which city hosted the 18th Pravasi Bharatiya Divas (PBD) Convention in 2025?",
    options: ["Bhubaneswar", "Indore", "Varanasi", "Ahmedabad"],
    correctIndex: 0,
    explanation: "Bhubaneswar, Odisha, hosted the 18th Pravasi Bharatiya Divas (PBD) Convention celebrating the contributions of the Indian diaspora."
  },

  // CATEGORY 2: International Affairs & Global Summits (16-27)
  {
    id: 16,
    category: "International Affairs & Global Summits",
    question: "Which country officially joined BRICS as a full member alongside Egypt, Ethiopia, Iran, and UAE?",
    options: ["Saudi Arabia", "Argentina", "Indonesia", "Nigeria"],
    correctIndex: 0,
    explanation: "Saudi Arabia officially joined BRICS alongside Egypt, Ethiopia, Iran, and UAE expanding the bloc's global economic representation."
  },
  {
    id: 17,
    category: "International Affairs & Global Summits",
    question: "Which country hosted the 50th G7 Summit in 2024 at Borgo Egnazia, Apulia?",
    options: ["Japan", "Italy", "Germany", "France"],
    correctIndex: 1,
    explanation: "Italy hosted the 50th G7 Summit in Puglia, where global leaders discussed AI governance, climate change, and economic resilience."
  },
  {
    id: 18,
    category: "International Affairs & Global Summits",
    question: "Which nation assumed the Presidency of the G20 for 2025 following South Africa?",
    options: ["Brazil", "South Africa", "United States", "India"],
    correctIndex: 1,
    explanation: "South Africa holds the G20 Presidency for 2025, marking the first time an African continent nation leads the G20 forum."
  },
  {
    id: 19,
    category: "International Affairs & Global Summits",
    question: "What is the primary objective of the IMEC (India-Middle East-Europe Economic Corridor) announced at the New Delhi G20 Summit?",
    options: ["Military alliance in the Arabian Sea", "Seamless rail and ship transportation network linking India, Arabian Gulf, and Europe", "Zero-tariff free trade agreement between SAARC and EU", "Oil pipeline network across Central Asia"],
    correctIndex: 1,
    explanation: "IMEC is a multimodal economic corridor comprising railway, ship-to-rail transit, and energy pipelines linking India through UAE, Saudi Arabia, Jordan, Israel, and Europe."
  },
  {
    id: 20,
    category: "International Affairs & Global Summits",
    question: "Which nation became the 32nd member of NATO (North Atlantic Treaty Organization)?",
    options: ["Finland", "Sweden", "Ukraine", "Georgia"],
    correctIndex: 1,
    explanation: "Sweden officially acceded to NATO as its 32nd member state following Finland's entry as the 31st member."
  },
  {
    id: 21,
    category: "International Affairs & Global Summits",
    question: "Which country hosted the 24th SCO (Shanghai Cooperation Organisation) Summit in Astana?",
    options: ["Kazakhstan", "Uzbekistan", "China", "India"],
    correctIndex: 0,
    explanation: "Astana, Kazakhstan, hosted the 24th SCO Summit where Belarus was formally admitted as the 10th member state."
  },
  {
    id: 22,
    category: "International Affairs & Global Summits",
    question: "Who was sworn in as the 47th President of the United States of America following the November 2024 elections?",
    options: ["Kamala Harris", "Donald J. Trump", "Joe Biden", "JD Vance"],
    correctIndex: 1,
    explanation: "Donald J. Trump won the 2024 US Presidential Election to serve as the 47th President of the United States."
  },
  {
    id: 23,
    category: "International Affairs & Global Summits",
    question: "Which South American country hosted the UNFCCC COP29 Climate Summit in Baku?",
    options: ["Brazil", "Azerbaijan", "UAE", "Egypt"],
    correctIndex: 1,
    explanation: "Baku, Azerbaijan, hosted COP29 focused on climate finance goals and global transition away from fossil fuels."
  },
  {
    id: 24,
    category: "International Affairs & Global Summits",
    question: "What is the name of the UN treaty adopted to protect marine biodiversity in international waters beyond national jurisdictions?",
    options: ["BBNJ High Seas Treaty", "Kyoto Protocol", "Montreal Accord", "Paris Ocean Pact"],
    correctIndex: 0,
    explanation: "The BBNJ (Biodiversity Beyond National Jurisdiction) High Seas Treaty established a framework to create marine protected areas on the high seas."
  },
  {
    id: 25,
    category: "International Affairs & Global Summits",
    question: "Which country became the newest permanent member of the New Development Bank (NDB) established by BRICS?",
    options: ["Algeria", "Egypt", "Uruguay", "Bangladesh"],
    correctIndex: 0,
    explanation: "Algeria was approved as a new member of the BRICS New Development Bank (NDB), expanding NDB's financial footprint."
  },
  {
    id: 26,
    category: "International Affairs & Global Summits",
    question: "Which international organization declared 2025 as the International Year of Quantum Science and Technology?",
    options: ["UN Educational, Scientific and Cultural Organization (UNESCO) / UN General Assembly", "World Economic Forum", "International Atomic Energy Agency", "International Telecommunication Union"],
    correctIndex: 0,
    explanation: "The United Nations General Assembly officially proclaimed 2025 as the International Year of Quantum Science and Technology (IYQ)."
  },
  {
    id: 27,
    category: "International Affairs & Global Summits",
    question: "Which Indian Prime Minister visit marked the historic first visit by an Indian PM to Ukraine in over 30 years?",
    options: ["Narendra Modi in August 2024", "Manmohan Singh in 2011", "Atal Bihari Vajpayee in 2001", "PV Narasimha Rao in 1995"],
    correctIndex: 0,
    explanation: "PM Narendra Modi visited Kyiv, Ukraine, in August 2024, holding bilateral discussions with President Volodymyr Zelenskyy."
  },

  // CATEGORY 3: Economy, Banking & Union Budget (28-40)
  {
    id: 28,
    category: "Economy, Banking & Union Budget",
    question: "As per the Union Budget 2025-26, what is the capital expenditure (Capex) allocation set for strengthening national infrastructure?",
    options: ["₹10.0 Lakh Crore", "₹11.11 Lakh Crore", "₹12.5 Lakh Crore", "₹15.0 Lakh Crore"],
    correctIndex: 1,
    explanation: "The Union Budget allocated ₹11,11,111 Crore (3.4% of GDP) for capital expenditure to accelerate infrastructure development."
  },
  {
    id: 29,
    category: "Economy, Banking & Union Budget",
    question: "Under the revised New Tax Regime, what is the income tax rebate threshold under Section 87A?",
    options: ["₹5.0 Lakh", "₹7.0 Lakh", "₹10.0 Lakh", "₹12.0 Lakh"],
    correctIndex: 1,
    explanation: "Under the New Tax Regime, taxable income up to ₹7.0 Lakh pays zero tax due to Section 87A tax rebate benefit."
  },
  {
    id: 30,
    category: "Economy, Banking & Union Budget",
    question: "Which Indian public sector bank introduced 'UPI Lite' auto-replenishment without requiring PIN for micro-payments below ₹500?",
    options: ["State Bank of India (SBI)", "Punjab National Bank", "Bank of Baroda", "Canara Bank"],
    correctIndex: 0,
    explanation: "SBI and NPCI enabled automatic balance replenishment for UPI Lite wallet, facilitating seamless PIN-free micro-transactions up to ₹500."
  },
  {
    id: 31,
    category: "Economy, Banking & Union Budget",
    question: "What is the inflation target range assigned to the Reserve Bank of India (RBI) under the Flexible Inflation Targeting (FIT) framework?",
    options: ["2% (+/- 1%)", "4% (+/- 2%)", "5% (+/- 2%)", "6% (+/- 1%)"],
    correctIndex: 1,
    explanation: "The RBI Monetary Policy Committee is mandated to maintain consumer price index (CPI) inflation at 4% with an upper tolerance of 6% and lower tolerance of 2%."
  },
  {
    id: 32,
    category: "Economy, Banking & Union Budget",
    question: "Which entity regulates and supervises All India Financial Institutions (AIFIs) like NABARD, SIDBI, EXIM Bank, NHB, and NaBFID?",
    options: ["Ministry of Finance", "SEBI", "Reserve Bank of India (RBI)", "IRDAI"],
    correctIndex: 2,
    explanation: "The Reserve Bank of India (RBI) regulates and conducts financial inspection of AIFIs in India."
  },
  {
    id: 33,
    category: "Economy, Banking & Union Budget",
    question: "What is the upper transaction limit for UPI 123PAY designed for non-smartphone feature phone users?",
    options: ["₹2,000", "₹5,000", "₹10,000", "₹25,000"],
    correctIndex: 1,
    explanation: "RBI enhanced the per-transaction limit for UPI123Pay feature phone payments from ₹2,000 to ₹5,000."
  },
  {
    id: 34,
    category: "Economy, Banking & Union Budget",
    question: "Which Maharatna Central Public Sector Enterprise (CPSE) achieved the milestone of becoming India's largest renewable energy producer among PSUs?",
    options: ["NTPC Limited", "ONGC", "Coal India", "IOCL"],
    correctIndex: 0,
    explanation: "NTPC Limited, through its green energy arm NGEL, leads Indian CPSEs in operational and pipeline solar and wind capacity."
  },
  {
    id: 35,
    category: "Economy, Banking & Union Budget",
    question: "What is the fiscal deficit target for FY26 set under India's fiscal consolidation roadmap?",
    options: ["5.9% of GDP", "5.1% of GDP", "4.5% of GDP", "3.0% of GDP"],
    correctIndex: 2,
    explanation: "The Central Government's fiscal consolidation path targets bringing down the fiscal deficit below 4.5% of GDP by FY26."
  },
  {
    id: 36,
    category: "Economy, Banking & Union Budget",
    question: "Which regulatory body launched the 'Saa₹thi 2.0' mobile app on personal finance and investor education?",
    options: ["RBI", "SEBI", "PFRDA", "IRDAI"],
    correctIndex: 1,
    explanation: "SEBI launched Saa₹thi 2.0 app to empower retail investors with unbiased financial planning tools and market guidance."
  },
  {
    id: 37,
    category: "Economy, Banking & Union Budget",
    question: "What is the maximum loan limit available under the MUDRA scheme's new 'Tarun Plus' category announced in Union Budget?",
    options: ["₹10 Lakh", "₹15 Lakh", "₹20 Lakh", "₹25 Lakh"],
    correctIndex: 2,
    explanation: "The Union Budget expanded PMMY by introducing 'Tarun Plus' category offering collateral-free loans up to ₹20 Lakh for entrepreneurs who successfully repaid previous Tarun loans."
  },
  {
    id: 38,
    category: "Economy, Banking & Union Budget",
    question: "Which Indian digital payment network launched 'CBDC' (Central Bank Digital Currency) interoperability via QR codes?",
    options: ["NPCI (National Payments Corporation of India)", "BillDesk", "Razorpay", "CCAvenue"],
    correctIndex: 0,
    explanation: "NPCI enabled interoperability between e₹ (Digital Rupee CBDC) wallets and standard UPI QR codes across merchant outlets."
  },
  {
    id: 39,
    category: "Economy, Banking & Union Budget",
    question: "Which company became the 14th Maharatna Central Public Sector Enterprise (CPSE) in India?",
    options: ["Hindustan Aeronautics Limited (HAL)", "Oil India Limited", "REC Limited", "IREDA"],
    correctIndex: 0,
    explanation: "Hindustan Aeronautics Limited (HAL) was elevated to 14th Maharatna CPSE status by the Finance Ministry."
  },
  {
    id: 40,
    category: "Economy, Banking & Union Budget",
    question: "What is the deposit insurance cover provided by DICGC per depositor per commercial bank in India?",
    options: ["₹1 Lakh", "₹2 Lakh", "₹5 Lakh", "₹10 Lakh"],
    correctIndex: 2,
    explanation: "DICGC (a wholly-owned subsidiary of RBI) provides deposit insurance up to ₹5 Lakh covering principal and interest."
  },

  // CATEGORY 4: Defense & Military Exercises (41-52)
  {
    id: 41,
    category: "Defense & Military Exercises",
    question: "What is the name of the joint military exercise conducted between the Indian Army and the US Army at Mahajan Field Firing Range in Rajasthan?",
    options: ["Yudh Abhyas", "Vajra Prahar", "Tarkash", "Cope India"],
    correctIndex: 0,
    explanation: "Exercise Yudh Abhyas is an annual bilateral joint military exercise held between the Indian Army and the United States Army."
  },
  {
    id: 42,
    category: "Defense & Military Exercises",
    question: "Which stealth guided-missile destroyer was commissioned into the Indian Navy as the fourth ship of Project 15B (Visakhapatnam class)?",
    options: ["INS Surat", "INS Imphal", "INS Mormugao", "INS Anjadip"],
    correctIndex: 0,
    explanation: "INS Surat is the fourth and final stealth guided-missile destroyer constructed under Project 15B by Mazagon Dock Shipbuilders Limited."
  },
  {
    id: 43,
    category: "Defense & Military Exercises",
    question: "What is the name of India's first indigenous anti-radiation missile developed by DRDO for the Indian Air Force?",
    options: ["RUDRAM-I", "ASTRA", "HELINA", "SANT"],
    correctIndex: 0,
    explanation: "RUDRAM-I is India's first air-launched anti-radiation missile designed to suppress adversary air defense radars and communication towers."
  },
  {
    id: 44,
    category: "Defense & Military Exercises",
    question: "Which country participated with India in the bilateral naval exercise 'VARUNA' off the Mediterranean coast?",
    options: ["France", "United Kingdom", "Japan", "Australia"],
    correctIndex: 0,
    explanation: "VARUNA is the annual bilateral naval exercise conducted between the Indian Navy and the French Navy."
  },
  {
    id: 45,
    category: "Defense & Military Exercises",
    question: "What is the name of the joint tri-services exercise conducted by the Indian Armed Forces to validate joint operational capability?",
    options: ["Trishul", "Bharat Shakti", "Gagan Shakti", "Vayu Shakti"],
    correctIndex: 1,
    explanation: "Exercise 'Bharat Shakti' demonstrated tri-service indigenous defense systems capabilities at Pokhran, Rajasthan."
  },
  {
    id: 46,
    category: "Defense & Military Exercises",
    question: "Which defense public sector shipyard constructed India's first indigenous aircraft carrier INS Vikrant?",
    options: ["Cochin Shipyard Limited (CSL)", "Mazagon Dock Shipbuilders", "Garden Reach Shipbuilders", "Goa Shipyard"],
    correctIndex: 0,
    explanation: "INS Vikrant was indigenously designed by Navy's Warship Design Bureau and constructed by Cochin Shipyard Limited."
  },
  {
    id: 47,
    category: "Defense & Military Exercises",
    question: "What is the name of the bilateral air exercise conducted between the Indian Air Force and Japan Air Self-Defense Force?",
    options: ["Veer Guardian", "Dharma Guardian", "JIMEX", "SHINYUU Maitri"],
    correctIndex: 0,
    explanation: "Veer Guardian is the dedicated bilateral air defense exercise between IAF and JASDF."
  },
  {
    id: 48,
    category: "Defense & Military Exercises",
    question: "Which missile system was successfully exported by India to the Philippines under a $375 million defense agreement?",
    options: ["BrahMos Supersonic Cruise Missile", "Akash SAM System", "Pinaka Multi-Barrel Rocket Launcher", "Nag Anti-Tank Missile"],
    correctIndex: 0,
    explanation: "India exported the shore-based anti-ship variant of the BrahMos supersonic cruise missile to the Armed Forces of the Philippines."
  },
  {
    id: 49,
    category: "Defense & Military Exercises",
    question: "Which army exercise is conducted bilaterally between India and Sri Lanka?",
    options: ["Mitra Shakti", "SLINEX", "Samudra Shakti", "Dosti"],
    correctIndex: 0,
    explanation: "Exercise Mitra Shakti is the annual bilateral military exercise between the Indian Army and Sri Lanka Army."
  },
  {
    id: 50,
    category: "Defense & Military Exercises",
    question: "What is the name of DRDO's short-range ballistic missile (SRBM) tested with conventional warheads and solid propellant rocket motor?",
    options: ["Pralay", "Agni-Prime", "Nirbhay", "Prithvi-II"],
    correctIndex: 0,
    explanation: "Pralay is a canisterized surface-to-surface tactical short-range ballistic missile developed for deployment along LAC and LOC."
  },
  {
    id: 51,
    category: "Defense & Military Exercises",
    question: "Which Indian Naval Ship (INS) participated in Op Sankalp for anti-piracy operations in the Gulf of Aden?",
    options: ["INS Sumitra", "INS Kolkata", "INS Chennai", "INS Visakhapatnam"],
    correctIndex: 0,
    explanation: "INS Sumitra and INS Kolkata carried out successful anti-piracy interventions, rescuing hijacked fishing vessels and crew in the Arabian Sea."
  },
  {
    id: 52,
    category: "Defense & Military Exercises",
    question: "What is the name of the fifth Kalvari-class diesel-electric submarine commissioned by the Indian Navy under Project 75?",
    options: ["INS Vagir", "INS Vagsheer", "INS Karanj", "INS Vela"],
    correctIndex: 0,
    explanation: "INS Vagir is the 5th Scorpene-class submarine under Project 75 built by Mazagon Dock Shipbuilders Limited."
  },

  // CATEGORY 5: Science, Space & Technology (53-65)
  {
    id: 53,
    category: "Science, Space & Technology",
    question: "Which payload on ISRO's Aditya-L1 spacecraft observed the coronal mass ejections (CMEs) from the Sun-Earth L1 Lagrange point?",
    options: ["VELC (Visible Emission Line Coronagraph)", "SUIT", "PAPA", "ASPEX"],
    correctIndex: 0,
    explanation: "VELC is the primary payload on Aditya-L1 designed to capture solar coronal magnetic fields and coronal mass ejections."
  },
  {
    id: 54,
    category: "Science, Space & Technology",
    question: "What is the name of ISRO's humanoid robot astronaut designed to fly in the uncrewed Gaganyaan mission ahead of human spaceflight?",
    options: ["Vyommitra", "GaganBot", "Pragyan", "Vikram"],
    correctIndex: 0,
    explanation: "Vyommitra is a female-looking spacefaring humanoid robot built by ISRO to test life support systems during Gaganyaan orbital missions."
  },
  {
    id: 55,
    category: "Science, Space & Technology",
    question: "Which joint Earth observation satellite mission was developed by ISRO and NASA utilizing Dual-Frequency Synthetic Aperture Radar (S-band & L-band)?",
    options: ["NISAR", "EOS-07", "TRISHNA", "INSAT-3DS"],
    correctIndex: 0,
    explanation: "NISAR (NASA-ISRO Synthetic Aperture Radar) measures global land surface changes, ice sheet collapse, and ecosystem disturbances."
  },
  {
    id: 56,
    category: "Science, Space & Technology",
    question: "Where is India's second spaceport / rocket launchpad being established by ISRO specifically for Small Satellite Launch Vehicles (SSLV)?",
    options: ["Kulasekarapattinam, Tamil Nadu", "Sriharikota, Andhra Pradesh", "Thumba, Kerala", "Wheelers Island, Odisha"],
    correctIndex: 0,
    explanation: "ISRO's 2nd spaceport is being established in Kulasekarapattinam, Thoothukudi district, Tamil Nadu, for launching commercial SSLV missions."
  },
  {
    id: 57,
    category: "Science, Space & Technology",
    question: "What is the name of India's supercomputer ranked among the top 100 global AI supercomputers under the National Supercomputing Mission (NSM)?",
    options: ["AIRAWAT", "PARAM Siddhi-AI", "PARAM Ananta", "PARAM Ganga"],
    correctIndex: 0,
    explanation: "AIRAWAT, installed at C-DAC Pune, achieved global ranking among top AI supercomputing infrastructure under India AI Mission."
  },
  {
    id: 58,
    category: "Science, Space & Technology",
    question: "Which private Indian aerospace company successfully test-fired its 3D-printed semi-cryogenic engine 'Agnibaan SORTED'?",
    options: ["Agnikul Cosmos", "Skyroot Aerospace", "Bellatrix Aerospace", "Dhruva Space"],
    correctIndex: 0,
    explanation: "Agnikul Cosmos launched Agnibaan SORTED from India's first private launchpad at SDSC SHAR, featuring single-piece 3D-printed engine."
  },
  {
    id: 59,
    category: "Science, Space & Technology",
    question: "What is the name of India's indigenous Large Language Model (LLM) ecosystem launched to support 22 official Indian languages?",
    options: ["BharatGPT / Hanooman", "Krutrim AI", "Bhashini", "Sarvam AI"],
    correctIndex: 0,
    explanation: "BharatGPT ecosystem (Hanooman) and Krutrim AI were launched to deliver multilingual generative AI capabilities across Indian regional languages."
  },
  {
    id: 60,
    category: "Science, Space & Technology",
    question: "Which space agency launched the 'Europa Clipper' mission to investigate whether Jupiter's icy moon Europa has conditions suitable for life?",
    options: ["NASA", "ESA", "ISRO", "JAXA"],
    correctIndex: 0,
    explanation: "NASA launched Europa Clipper to perform detailed flybys of Jupiter's ocean moon Europa."
  },
  {
    id: 61,
    category: "Science, Space & Technology",
    question: "What is the primary scientific objective of ISRO's XPoSAT (X-ray Polarimeter Satellite) mission launched by PSLV-C58?",
    options: ["To study polarization of intense cosmic X-ray sources like neutron stars and black holes", "To map lunar surface ice", "To monitor solar flare radiation", "To survey exoplanet atmospheres"],
    correctIndex: 0,
    explanation: "XPoSAT is India's dedicated polarimetry mission to study cosmic X-ray emission mechanisms from pulsars and black hole binaries."
  },
  {
    id: 62,
    category: "Science, Space & Technology",
    question: "Which Indian Institute of Technology (IIT) developed the 'Amrit' water purification technology using nano-materials to remove arsenic and fluoride?",
    options: ["IIT Madras", "IIT Bombay", "IIT Delhi", "IIT Kharagpur"],
    correctIndex: 0,
    explanation: "IIT Madras developed 'AMRIT' (Arsenic and Metal Removal by Indian Technology) for clean drinking water supply."
  },
  {
    id: 63,
    category: "Science, Space & Technology",
    question: "Which vaccine became the world's first WHO-prequalified single-dose vaccine against Chikungunya virus?",
    options: ["IXCHIQ", "Mosquirix", "R21/Matrix-M", "Dengvaxia"],
    correctIndex: 0,
    explanation: "IXCHIQ, developed by Valneva, was approved as the first single-dose live-attenuated Chikungunya vaccine."
  },
  {
    id: 64,
    category: "Science, Space & Technology",
    question: "What is the name of India's solar physics satellite stationed at L1 point that successfully completed its first halo orbit insertion?",
    options: ["Aditya-L1", "AstroSat", "Chandrayaan-3", "Shukrayaan-1"],
    correctIndex: 0,
    explanation: "ISRO successfully injected Aditya-L1 into its halo orbit around Lagrange Point 1 (L1), 1.5 million km from Earth."
  },
  {
    id: 65,
    category: "Science, Space & Technology",
    question: "Which lunar crater landing site of Chandrayaan-3 was officially named 'Shiv Shakti Point' by the International Astronomical Union (IAU)?",
    options: ["Landed site near lunar South Pole (69.36°S, 32.34°E)", "Apollo 11 landing site", "Mare Tranquillitatis", "Shackleton Crater rim"],
    correctIndex: 0,
    explanation: "IAU approved the name 'Shiv Shakti Point' for Chandrayaan-3 Vikram lander's touchdown site near the Moon's South Pole."
  },

  // CATEGORY 6: Sports & Championships (66-78)
  {
    id: 66,
    category: "Sports & Championships",
    question: "Which country won the ICC Men's T20 World Cup 2024 trophy by defeating South Africa in the final at Barbados?",
    options: ["India", "Australia", "England", "South Africa"],
    correctIndex: 0,
    explanation: "India defeated South Africa by 7 runs in a thrilling final at Kensington Oval, Barbados, winning their 2nd ICC T20 World Cup title."
  },
  {
    id: 67,
    category: "Sports & Championships",
    question: "Which city hosted the 33rd Summer Olympic Games (Paris 2024) in July-August 2024?",
    options: ["Paris, France", "Los Angeles, USA", "Brisbane, Australia", "Tokyo, Japan"],
    correctIndex: 0,
    explanation: "Paris hosted the 2024 Summer Olympics, featuring the opening ceremony along the River Seine."
  },
  {
    id: 68,
    category: "Sports & Championships",
    question: "Who won India's historic silver medal in Men's Javelin Throw at the Paris 2024 Olympic Games?",
    options: ["Neeraj Chopra", "Kishore Jena", "Arshad Nadeem", "Shivpal Singh"],
    correctIndex: 0,
    explanation: "Neeraj Chopra secured the silver medal with a throw of 89.45m at the Paris 2024 Olympics, following his Gold at Tokyo 2020."
  },
  {
    id: 69,
    category: "Sports & Championships",
    question: "Which Indian shooter became the first Indian woman athlete to win two medals in a single edition of the Olympic Games (Paris 2024)?",
    options: ["Manu Bhaker", "Sift Kaur Samra", "Rhythm Sangwan", "Apurvi Chandela"],
    correctIndex: 0,
    explanation: "Manu Bhaker won two bronze medals at Paris 2024 in 10m Air Pistol Women's and 10m Air Pistol Mixed Team event with Sarabjot Singh."
  },
  {
    id: 70,
    category: "Sports & Championships",
    question: "Which Indian Grandmaster won the FIDE Candidates Chess Tournament 2024 to become the youngest challenger in World Chess Championship history?",
    options: ["D. Gukesh", "R. Praggnanandhaa", "Arjun Erigaisi", "Vidit Gujrathi"],
    correctIndex: 0,
    explanation: "Dommaraju Gukesh (aged 17) won the FIDE Candidates Tournament in Toronto, becoming the youngest player ever to challenge for World Championship title."
  },
  {
    id: 71,
    category: "Sports & Championships",
    question: "Which team won the Tata IPL 2024 title by defeating Sunrisers Hyderabad in the final at Chepauk Stadium, Chennai?",
    options: ["Kolkata Knight Riders (KKR)", "Sunrisers Hyderabad", "Rajasthan Royals", "Royal Challengers Bengaluru"],
    correctIndex: 0,
    explanation: "Kolkata Knight Riders (KKR) won their 3rd IPL trophy after defeating Sunrisers Hyderabad in the IPL 2024 final under captain Shreyas Iyer."
  },
  {
    id: 72,
    category: "Sports & Championships",
    question: "Who won the Women's Singles title at the Wimbledon Championships 2024?",
    options: ["Barbora Krejcikova", "Jasmine Paolini", "Iga Swiatek", "Aryna Sabalenka"],
    correctIndex: 0,
    explanation: "Czech tennis player Barbora Krejcikova defeated Jasmine Paolini to win the 2024 Wimbledon Women's Singles title."
  },
  {
    id: 73,
    category: "Sports & Championships",
    question: "Which country won the UEFA Euro 2024 championship trophy by defeating England in the final in Berlin?",
    options: ["Spain", "England", "France", "Germany"],
    correctIndex: 0,
    explanation: "Spain won a record 4th UEFA European Championship title after beating England 2-1 in the Euro 2024 final."
  },
  {
    id: 74,
    category: "Sports & Championships",
    question: "Which nation hosted the 38th National Games of India in early 2025?",
    options: ["Uttarakhand", "Goa", "Gujarat", "Kerala"],
    correctIndex: 0,
    explanation: "Uttarakhand hosted the 38th National Games across multiple sporting venues in Dehradun, Haridwar, Haldwani, and Rishikesh."
  },
  {
    id: 75,
    category: "Sports & Championships",
    question: "Who won the Men's Singles title at the US Open 2024 Tennis Championship?",
    options: ["Jannik Sinner", "Taylor Fritz", "Carlos Alcaraz", "Novak Djokovic"],
    correctIndex: 0,
    explanation: "World No. 1 Jannik Sinner defeated Taylor Fritz to claim his first US Open Men's Singles crown."
  },
  {
    id: 76,
    category: "Sports & Championships",
    question: "Which state topped the overall medal tally at the Khelo India Youth Games 2024 held in Tamil Nadu?",
    options: ["Maharashtra", "Tamil Nadu", "Haryana", "Rajasthan"],
    correctIndex: 0,
    explanation: "Maharashtra finished atop the standings at Khelo India Youth Games 2024 with 57 gold, 48 silver, and 53 bronze medals."
  },
  {
    id: 77,
    category: "Sports & Championships",
    question: "Which Indian Para-athlete won the Gold medal in Men's High Jump T64 at the Paris 2024 Paralympic Games?",
    options: ["Praveen Kumar", "Nishad Kumar", "Sharad Kumar", "Mariyappan Thangavelu"],
    correctIndex: 0,
    explanation: "Praveen Kumar won the Gold medal setting an Asian record jump of 2.08m in Men's High Jump T64 at Paris Paralympics."
  },
  {
    id: 78,
    category: "Sports & Championships",
    question: "Who became the first Indian badminton player to win a BWF World Tour Super 1000 title at the Indonesia Open?",
    options: ["Satwiksairaj Rankireddy & Chirag Shetty", "Lakshya Sen", "PV Sindhu", "H.S. Prannoy"],
    correctIndex: 0,
    explanation: "Satwiksairaj Rankireddy and Chirag Shetty won the Indonesia Open Men's Doubles title, achieving premier Super 1000 milestone."
  },

  // CATEGORY 7: Awards, Honours & Recognitions (79-90)
  {
    id: 79,
    category: "Awards, Honours & Recognitions",
    question: "Who was awarded the prestigious Bharat Ratna, India's highest civilian honour, posthumously in 2024 for pioneering agricultural reforms (Green Revolution)?",
    options: ["MS Swaminathan", "Karpoori Thakur", "PV Narasimha Rao", "L K Advani"],
    correctIndex: 0,
    explanation: "Dr. M.S. Swaminathan, father of India's Green Revolution, was conferred Bharat Ratna posthumously alongside Karpoori Thakur, PV Narasimha Rao, Chaudhary Charan Singh, and L.K. Advani."
  },
  {
    id: 80,
    category: "Awards, Honours & Recognitions",
    question: "Who was honored with the 53rd Dadasaheb Phalke Award for exemplary lifetime contribution to Indian Cinema?",
    options: ["Waheeda Rehman", "Mithun Chakraborty", "Asha Parekh", "Rajinikanth"],
    correctIndex: 1,
    explanation: "Veteran actor Mithun Chakraborty was conferred the 53rd Dadasaheb Phalke Award at the 70th National Film Awards ceremony."
  },
  {
    id: 81,
    category: "Awards, Honours & Recognitions",
    question: "Which literary work won the 58th Jnanpith Award jointly awarded to Gulzar and Jagadguru Rambhadracharya?",
    options: ["Urdu poetry and Sanskrit literature contributions", "Chitrakoot Ramayana", "Do Chand", "Kitab-e-Ghazal"],
    correctIndex: 0,
    explanation: "The 58th Jnanpith Award was conferred on celebrated Urdu poet Gulzar and Sanskrit scholar Jagadguru Rambhadracharya for lifetime literary output."
  },
  {
    id: 82,
    category: "Awards, Honours & Recognitions",
    question: "Which film won the Best Feature Film award at the 70th National Film Awards for 2022?",
    options: ["Aattam (Malayalam)", "Kantara (Kannada)", "Gulmohar (Hindi)", "RRR (Telugu)"],
    correctIndex: 0,
    explanation: "Malayalam film 'Aattam', directed by Anand Ekarshi, won the Best Feature Film award at the 70th National Film Awards."
  },
  {
    id: 83,
    category: "Awards, Honours & Recognitions",
    question: "Who was awarded the Nobel Peace Prize 2024 for its efforts to achieve a world free of nuclear weapons?",
    options: ["Nihon Hidankyo", "Narges Mohammadi", "World Food Programme", "ICCAN"],
    correctIndex: 0,
    explanation: "Japanese organization Nihon Hidankyo (grassroots movement of atomic bomb survivors from Hiroshima & Nagasaki) won the 2024 Nobel Peace Prize."
  },
  {
    id: 84,
    category: "Awards, Honours & Recognitions",
    question: "Which pioneer of Artificial Intelligence and Neural Networks was awarded the Nobel Prize in Physics 2024 alongside John Hopfield?",
    options: ["Geoffrey Hinton", "Yann LeCun", "Yoshua Bengio", "Demis Hassabis"],
    correctIndex: 0,
    explanation: "Geoffrey Hinton and John J. Hopfield won the 2024 Nobel Prize in Physics for foundational discoveries enabling machine learning with artificial neural networks."
  },
  {
    id: 85,
    category: "Awards, Honours & Recognitions",
    question: "Who won the Booker Prize 2024 for her orbital space station novel 'Orbital'?",
    options: ["Samantha Harvey", "Percival Everett", "Rachel Kushner", "Paul Lynch"],
    correctIndex: 0,
    explanation: "British author Samantha Harvey won the Booker Prize 2024 for 'Orbital', set over 24 hours aboard the International Space Station."
  },
  {
    id: 86,
    category: "Awards, Honours & Recognitions",
    question: "Which Indian public icon received Russia's highest civilian honor, the 'Order of St. Andrew the Apostle'?",
    options: ["Narendra Modi", "S. Jaishankar", "Ratan Tata", "Draupadi Murmu"],
    correctIndex: 0,
    explanation: "PM Narendra Modi received Russia's highest state decoration, Order of St. Andrew the Apostle, for developing bilateral strategic partnership."
  },
  {
    id: 87,
    category: "Awards, Honours & Recognitions",
    question: "Who was named TIME Magazine's 2024 Person of the Year?",
    options: ["Donald Trump", "Taylor Swift", "Sam Altman", "Kamala Harris"],
    correctIndex: 0,
    explanation: "Donald J. Trump was named TIME Person of the Year for 2024 following his historic US presidential election victory."
  },
  {
    id: 88,
    category: "Awards, Honours & Recognitions",
    question: "Which Indian conservationist won the Whitley Gold Award 2024 (known as the 'Green Oscar') for protecting the Hargila (Greater Adjutant Stork)?",
    options: ["Purnima Devi Barman", "Nivedita Khandekar", "Sunita Narain", "Vandana Shiva"],
    correctIndex: 0,
    explanation: "Dr. Purnima Devi Barman received the Whitley Gold Award 2024 for mobilizing the 'Hargila Army' of local women to save endangered storks in Assam."
  },
  {
    id: 89,
    category: "Awards, Honours & Recognitions",
    question: "Who won the Abel Prize 2024 awarded by the Norwegian Academy of Science and Letters for contributions to probability theory and stochastic analysis?",
    options: ["Michel Talagrand", "Luis Caffarelli", "Dennis Sullivan", "Avi Wigderson"],
    correctIndex: 0,
    explanation: "French mathematician Michel Talagrand was awarded the Abel Prize 2024 for work in probability theory and extreme values in random processes."
  },
  {
    id: 90,
    category: "Awards, Honours & Recognitions",
    question: "Which Indian environmental activist and social reformer was awarded the Ramon Magsaysay Award 2024?",
    options: ["Hayao Miyazaki / Carmencita Abad (Grouped with Asia recipients)", "Sonam Wangchuk", "Medha Patkar", "Rajendra Singh"],
    correctIndex: 0,
    explanation: "The 2024 Ramon Magsaysay Awards honored Hayao Miyazaki, Karma Phuntsho, Farwiza Farhan, and rural health leaders across Asia."
  },

  // CATEGORY 8: Appointments, Indexes & Important Days (91-100)
  {
    id: 91,
    category: "Appointments, Indexes & Important Days",
    question: "Who was appointed as the 51st Chief Justice of India (CJI) succeeding Justice D.Y. Chandrachud?",
    options: ["Justice Sanjiv Khanna", "Justice B.R. Gavai", "Justice Surya Kant", "Justice Vikram Nath"],
    correctIndex: 0,
    explanation: "Justice Sanjiv Khanna took oath as the 51st Chief Justice of India following CJI D.Y. Chandrachud's retirement."
  },
  {
    id: 92,
    category: "Appointments, Indexes & Important Days",
    question: "Who was appointed as the Chief Election Commissioner (CEC) of India heading the Election Commission?",
    options: ["Rajiv Kumar", "Gyanesh Kumar", "Sukhbir Singh Sandhu", "Anup Chandra Pandey"],
    correctIndex: 0,
    explanation: "Rajiv Kumar served as the Chief Election Commissioner of India alongside Election Commissioners Gyanesh Kumar and Sukhbir Singh Sandhu."
  },
  {
    id: 93,
    category: "Appointments, Indexes & Important Days",
    question: "What is India's rank in the Global Innovation Index (GII) published by the World Intellectual Property Organization (WIPO)?",
    options: ["39th", "40th", "45th", "52nd"],
    correctIndex: 0,
    explanation: "India ranked 39th among 133 economies in the Global Innovation Index (GII), demonstrating sustained progress in technological output."
  },
  {
    id: 94,
    category: "Appointments, Indexes & Important Days",
    question: "Who took charge as the Cabinet Secretary of India in 2024 succeeding Rajiv Gauba?",
    options: ["T. V. Somanathan", "Vinay Mohan Kwatra", "Ajit Doval", "Sanjay Malhotra"],
    correctIndex: 0,
    explanation: "Senior IAS officer T.V. Somanathan was appointed as Cabinet Secretary of India."
  },
  {
    id: 95,
    category: "Appointments, Indexes & Important Days",
    question: "On which date is National Space Day celebrated annually in India to commemorate the successful soft landing of Chandrayaan-3 on the Moon?",
    options: ["August 23", "August 15", "October 22", "November 26"],
    correctIndex: 0,
    explanation: "August 23 was officially designated by PM Modi as National Space Day to honor ISRO's Chandrayaan-3 Vikram lander soft landing."
  },
  {
    id: 96,
    category: "Appointments, Indexes & Important Days",
    question: "Who was appointed as the Chairman of the ISRO / Secretary, Department of Space?",
    options: ["S. Somanath", "K. Sivan", "A. S. Kiran Kumar", "V. Narayanan"],
    correctIndex: 0,
    explanation: "Dr. S. Somanath serves as the Chairman of ISRO and Secretary of the Department of Space."
  },
  {
    id: 97,
    category: "Appointments, Indexes & Important Days",
    question: "What is India's rank in the Henley Passport Index 2024 with visa-free access to 62 destinations?",
    options: ["82nd", "80th", "85th", "75th"],
    correctIndex: 0,
    explanation: "India ranked 82nd in the Henley Passport Index, granting Indian passport holders visa-free or visa-on-arrival entry to 62 countries."
  },
  {
    id: 98,
    category: "Appointments, Indexes & Important Days",
    question: "On which day is 'Constitution Day' (Samvidhan Divas) observed in India every year?",
    options: ["November 26", "January 26", "August 15", "October 2"],
    correctIndex: 0,
    explanation: "November 26 is celebrated as Constitution Day to mark the adoption of the Constitution of India by the Constituent Assembly in 1949."
  },
  {
    id: 99,
    category: "Appointments, Indexes & Important Days",
    question: "Who was appointed as the Vice Chairman of NITI Aayog?",
    options: ["Suman Bery", "B.V.R. Subrahmanyam", "Arvind Panagariya", "Rajiv Kumar"],
    correctIndex: 0,
    explanation: "Suman Bery serves as the Vice Chairman of NITI Aayog, with B.V.R. Subrahmanyam serving as CEO."
  },
  {
    id: 100,
    category: "Appointments, Indexes & Important Days",
    question: "What is the theme of International Women's Day observed globally on March 8?",
    options: ["Invest in Women: Accelerate Progress", "DigitALL: Innovation and Technology for Gender Equality", "Gender Equality Today for a Sustainable Tomorrow", "Break the Bias"],
    correctIndex: 0,
    explanation: "'Invest in Women: Accelerate Progress' was selected by the UN to highlight the urgency of financing gender equality initiatives globally."
  }
];

// ========================================================
// IBPS SO IT OFFICER 2026 PROFESSIONAL KNOWLEDGE MCQs
// (100 TOP MCQs for 29 August 2026 Real Exam Focus)
// ========================================================
const IBPS_SO_QUESTIONS = [
  // CATEGORY 1: Database Management Systems & SQL (1-15)
  {
    id: 1,
    category: "Database Management Systems & SQL",
    question: "A relation R is in BCNF (Boyce-Codd Normal Form) if and only if for every non-trivial functional dependency X -> Y:",
    options: ["X is a super key", "Y is a prime attribute", "X is a candidate key or Y is a prime attribute", "Y is a super key"],
    correctIndex: 0,
    explanation: "BCNF is a stricter version of 3NF. A relation is in BCNF if for every functional dependency X -> Y, X is a super key (no attribute can be functionally determined by a non-super key)."
  },
  {
    id: 2,
    category: "Database Management Systems & SQL",
    question: "Which ACID property guarantees that all operations within a database transaction are completed successfully, or none are applied at all?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    correctIndex: 0,
    explanation: "Atomicity ensures the 'all-or-nothing' principle of transactions. If any part of a transaction fails, the entire transaction is aborted and rolled back."
  },
  {
    id: 3,
    category: "Database Management Systems & SQL",
    question: "In SQL, which clause is used to filter group aggregations after the GROUP BY clause has been applied?",
    options: ["HAVING", "WHERE", "ORDER BY", "QUALIFY"],
    correctIndex: 0,
    explanation: "WHERE filters rows before grouping, whereas HAVING filters aggregated groups after the GROUP BY operation."
  },
  {
    id: 4,
    category: "Database Management Systems & SQL",
    question: "Which JOIN in SQL returns all records from the left table and matched records from the right table, filling unmatched right records with NULL?",
    options: ["LEFT OUTER JOIN", "RIGHT OUTER JOIN", "INNER JOIN", "FULL OUTER JOIN"],
    correctIndex: 0,
    explanation: "LEFT OUTER JOIN returns all rows from the left table and matched rows from the right table. Where no match exists, NULL values are returned for right table columns."
  },
  {
    id: 5,
    category: "Database Management Systems & SQL",
    question: "In 3NF (Third Normal Form), transitive dependency of non-prime attributes on what key must be eliminated?",
    options: ["Candidate Key / Primary Key", "Foreign Key", "Composite Key", "Super Key"],
    correctIndex: 0,
    explanation: "3NF requires the relation to be in 2NF and no non-prime attribute should be transitively dependent on any candidate key (X -> Y and Y -> Z where Z is non-prime is disallowed)."
  },
  {
    id: 6,
    category: "Database Management Systems & SQL",
    question: "Which Indexing structure maintains sorted key values in internal nodes and stores actual data record pointers exclusively in leaf nodes linked as a doubly linked list?",
    options: ["B+ Tree", "B-Tree", "Binary Search Tree", "AVL Tree"],
    correctIndex: 0,
    explanation: "In a B+ Tree, data pointers reside only in leaf nodes, which are linked sequentially. Internal nodes only contain search keys, allowing fast range queries and sequential scanning."
  },
  {
    id: 7,
    category: "Database Management Systems & SQL",
    question: "What type of transaction isolation level permits 'Phantom Reads' while preventing 'Dirty Reads' and 'Non-Repeatable Reads'?",
    options: ["REPEATABLE READ", "READ COMMITTED", "READ UNCOMMITTED", "SERIALIZABLE"],
    correctIndex: 0,
    explanation: "REPEATABLE READ prevents dirty reads and non-repeatable reads by keeping read locks. However, new rows inserted by concurrent transactions can still appear (Phantom Reads)."
  },
  {
    id: 8,
    category: "Database Management Systems & SQL",
    question: "What is the primary function of a Database Trigger in SQL?",
    options: ["Procedural code executed automatically in response to DML events (INSERT, UPDATE, DELETE)", "A saved SELECT query returning a virtual table", "An index designed for full-text search", "A transaction log backup mechanism"],
    correctIndex: 0,
    explanation: "A Database Trigger is a stored PL/SQL or SQL procedure that automatically executes when specific DML (INSERT, UPDATE, DELETE) or DDL events occur on a table."
  },
  {
    id: 9,
    category: "Database Management Systems & SQL",
    question: "In Relational Algebra, which unary operator projects specific columns from a relation while removing duplicate tuples?",
    options: ["Projection (π)", "Selection (σ)", "Cartesian Product (×)", "Rename (ρ)"],
    correctIndex: 0,
    explanation: "Projection (denoted by π) selects specified attributes (columns) from a table and automatically eliminates duplicate rows in relational algebra."
  },
  {
    id: 10,
    category: "Database Management Systems & SQL",
    question: "In Strict Two-Phase Locking (Strict 2PL) protocol, when are exclusive (X) locks held by a transaction released?",
    options: ["Only after the transaction commits or aborts", "Immediately after the data item is modified", "At the start of the shrinking phase", "When the next transaction requests a shared lock"],
    correctIndex: 0,
    explanation: "Strict 2PL avoids cascading rollbacks by holding all exclusive locks until the transaction formally completes (Commit or Abort)."
  },
  {
    id: 11,
    category: "Database Management Systems & SQL",
    question: "Which normal form requires that a relation is in 1NF and every non-prime attribute is fully functionally dependent on the primary key?",
    options: ["Second Normal Form (2NF)", "First Normal Form (1NF)", "Third Normal Form (3NF)", "Fourth Normal Form (4NF)"],
    correctIndex: 0,
    explanation: "2NF eliminates partial functional dependency. Every non-prime attribute must depend on the whole candidate key, not just a proper subset of a composite key."
  },
  {
    id: 12,
    category: "Database Management Systems & SQL",
    question: "Which command in SQL DDL is used to permanently remove a table structure along with all its data from the database schema?",
    options: ["DROP TABLE", "TRUNCATE TABLE", "DELETE FROM", "REMOVE TABLE"],
    correctIndex: 0,
    explanation: "DROP TABLE is a DDL command that removes table definition, indexes, constraints, and data. TRUNCATE empties data but preserves table structure."
  },
  {
    id: 13,
    category: "Database Management Systems & SQL",
    question: "What is a Foreign Key constraint designed to enforce between two tables in a relational database?",
    options: ["Referential Integrity", "Entity Integrity", "Domain Integrity", "User-Defined Integrity"],
    correctIndex: 0,
    explanation: "Foreign Key constraints enforce Referential Integrity by ensuring that values in the child table match existing primary key values in the referenced parent table."
  },
  {
    id: 14,
    category: "Database Management Systems & SQL",
    question: "Which transaction concurrency anomaly occurs when Transaction A reads uncommitted data written by Transaction B, which later rolls back?",
    options: ["Dirty Read", "Lost Update", "Non-Repeatable Read", "Phantom Read"],
    correctIndex: 0,
    explanation: "A Dirty Read occurs when a transaction reads data modified by another concurrent transaction before that modification has been committed."
  },
  {
    id: 15,
    category: "Database Management Systems & SQL",
    question: "In SQL, which aggregate function returns the total count of non-NULL values in a specified column?",
    options: ["COUNT(column_name)", "COUNT(*)", "SUM(column_name)", "TOTAL(column_name)"],
    correctIndex: 0,
    explanation: "COUNT(column_name) counts non-null entries in that specific column, whereas COUNT(*) counts total rows including nulls."
  },

  // CATEGORY 2: Data Communication & Computer Networks (16-30)
  {
    id: 16,
    category: "Data Communication & Computer Networks",
    question: "Which layer of the OSI model is responsible for end-to-end process-to-process communication, flow control, error recovery, and multiplexing using port numbers?",
    options: ["Transport Layer", "Network Layer", "Data Link Layer", "Session Layer"],
    correctIndex: 0,
    explanation: "The Transport Layer (Layer 4) uses port numbers (e.g., TCP/UDP) to deliver segments process-to-process, managing flow control and error control."
  },
  {
    id: 17,
    category: "Data Communication & Computer Networks",
    question: "What is the total size of an IPv6 address in bits?",
    options: ["128 bits", "32 bits", "64 bits", "256 bits"],
    correctIndex: 0,
    explanation: "IPv6 addresses are 128 bits long (expressed as 8 hexadecimal blocks), providing 2^128 unique addresses compared to 32-bit IPv4."
  },
  {
    id: 18,
    category: "Data Communication & Computer Networks",
    question: "Which protocol resolves a known 32-bit IPv4 IP address to a physical 48-bit MAC address on a local Ethernet segment?",
    options: ["ARP (Address Resolution Protocol)", "RARP", "DHCP", "DNS"],
    correctIndex: 0,
    explanation: "ARP maps a known IP address to its corresponding hardware MAC address on a local network."
  },
  {
    id: 19,
    category: "Data Communication & Computer Networks",
    question: "In classless IP addressing (CIDR) notation 192.168.1.0/26, how many usable host IP addresses are available on the subnet?",
    options: ["62", "64", "126", "254"],
    correctIndex: 0,
    explanation: "A /26 prefix leaves 32 - 26 = 6 host bits. Total IPs = 2^6 = 64. Subtracting 2 (Network ID and Broadcast address) gives 62 usable hosts."
  },
  {
    id: 20,
    category: "Data Communication & Computer Networks",
    question: "Which TCP three-way handshake flags sequence initiates a connection between client and server?",
    options: ["SYN -> SYN-ACK -> ACK", "ACK -> SYN -> SYN-ACK", "SYN -> ACK -> FIN", "FIN -> FIN-ACK -> ACK"],
    correctIndex: 0,
    explanation: "TCP connection establishment requires 3 steps: Client sends SYN -> Server responds with SYN-ACK -> Client acknowledges with ACK."
  },
  {
    id: 21,
    category: "Data Communication & Computer Networks",
    question: "Which interior gateway routing protocol uses the Dijkstra Shortest Path First (SPF) algorithm to calculate optimal routing paths based on link bandwidth?",
    options: ["OSPF (Open Shortest Path First)", "RIP (Routing Information Protocol)", "BGP (Border Gateway Protocol)", "EIGRP"],
    correctIndex: 0,
    explanation: "OSPF is a link-state routing protocol using Dijkstra's algorithm to compute shortest path trees based on link costs (bandwidth)."
  },
  {
    id: 22,
    category: "Data Communication & Computer Networks",
    question: "Which application layer protocol operates over UDP port 53 to translate human-readable domain names into IP addresses?",
    options: ["DNS", "DHCP", "HTTP", "SNMP"],
    correctIndex: 0,
    explanation: "DNS (Domain Name System) uses UDP port 53 for standard name resolution queries."
  },
  {
    id: 23,
    category: "Data Communication & Computer Networks",
    question: "What mechanism in TCP prevents a fast sender from overwhelming a slow receiver's buffer space?",
    options: ["Flow Control (Sliding Window)", "Congestion Control", "Error Control (Checksum)", "Fragmentation"],
    correctIndex: 0,
    explanation: "Flow Control in TCP uses receiver window size advertising (Sliding Window Protocol) to prevent receiver buffer overflow."
  },
  {
    id: 24,
    category: "Data Communication & Computer Networks",
    question: "Which Data Link Layer MAC sublayer protocol is used by Ethernet (IEEE 802.3) wired networks to handle packet collisions?",
    options: ["CSMA/CD", "CSMA/CA", "Token Passing", "Slotted ALOHA"],
    correctIndex: 0,
    explanation: "Wired Ethernet uses Carrier Sense Multiple Access with Collision Detection (CSMA/CD) to listen before transmitting and detect collisions during transmission."
  },
  {
    id: 25,
    category: "Data Communication & Computer Networks",
    question: "What is the default subnet mask for a Class B IPv4 network address?",
    options: ["255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.128"],
    correctIndex: 0,
    explanation: "Class B networks allocate 16 bits for network and 16 bits for host, corresponding to default subnet mask 255.255.0.0 (/16)."
  },
  {
    id: 26,
    category: "Data Communication & Computer Networks",
    question: "Which traffic shaping algorithm regulates bursty network traffic by transmitting packets at a constant output rate from a buffer bucket?",
    options: ["Leaky Bucket Algorithm", "Token Bucket Algorithm", "Random Early Detection", "Stop and Wait"],
    correctIndex: 0,
    explanation: "Leaky Bucket absorbs irregular bursty packets and releases them at a uniform, smooth output rate, discarding excess overflow."
  },
  {
    id: 27,
    category: "Data Communication & Computer Networks",
    question: "What port number is assigned by default to secure HTTPS (HTTP over TLS/SSL) communications?",
    options: ["443", "80", "8080", "22"],
    correctIndex: 0,
    explanation: "HTTPS uses TCP port 443, whereas unencrypted HTTP uses TCP port 80."
  },
  {
    id: 28,
    category: "Data Communication & Computer Networks",
    question: "Which network topology connects every node to a central hub/switch, where single node cable failure does not affect the rest of the network?",
    options: ["Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology"],
    correctIndex: 0,
    explanation: "In Star Topology, all devices connect directly to a central network switch or hub. Point-to-point connections isolate individual cable failures."
  },
  {
    id: 29,
    category: "Data Communication & Computer Networks",
    question: "What is the primary function of the Network Layer (Layer 3) in the OSI model?",
    options: ["Routing packets across inter-networks using logical IP addresses", "Physical bit representation and signaling", "Framing and MAC address filtering", "Session establishment and termination"],
    correctIndex: 0,
    explanation: "The Network Layer handles packet routing, logical addressing (IPv4/IPv6), and path determination across heterogeneous networks."
  },
  {
    id: 30,
    category: "Data Communication & Computer Networks",
    question: "Which ICMP message type is sent by a host or router when an IP packet exceeds its Time to Live (TTL) hop count limit?",
    options: ["Time Exceeded (Type 11)", "Destination Unreachable (Type 3)", "Echo Request (Type 8)", "Redirect (Type 5)"],
    correctIndex: 0,
    explanation: "When TTL reaches 0 in transit, the router drops the packet and sends an ICMP Type 11 (Time Exceeded) error message back to the sender."
  },

  // CATEGORY 3: Operating Systems & Architecture (31-45)
  {
    id: 31,
    category: "Operating Systems & Architecture",
    question: "Which CPU scheduling algorithm can cause 'Starvation' (Indefinite Blocking) for low-priority processes?",
    options: ["Preemptive Priority Scheduling", "Round Robin (RR)", "First-Come First-Served (FCFS)", "Shortest Remaining Time First with Aging"],
    correctIndex: 0,
    explanation: "Priority Scheduling causes starvation for low-priority processes if higher-priority processes arrive continuously. Aging technique prevents this."
  },
  {
    id: 32,
    category: "Operating Systems & Architecture",
    question: "What are the four necessary Coffman conditions required simultaneously for a Deadlock to occur in an operating system?",
    options: ["Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait", "Mutual Exclusion, Paging, Fragmentation, Thrashing", "Starvation, Race Condition, Deadlock, Semaphore", "Locking, Commit, Rollback, Isolation"],
    correctIndex: 0,
    explanation: "The four Coffman conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."
  },
  {
    id: 33,
    category: "Operating Systems & Architecture",
    question: "Which algorithm is utilized in operating systems for Deadlock Avoidance by analyzing resource allocation states?",
    options: ["Banker's Algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm", "Peterson's Algorithm"],
    correctIndex: 0,
    explanation: "Banker's Algorithm tests for safety by simulating allocation for maximum declared resource claims before granting requests."
  },
  {
    id: 34,
    category: "Operating Systems & Architecture",
    question: "What is 'Thrashing' in Virtual Memory management?",
    options: ["A state where the OS spends more time swapping pages in/out of secondary storage than executing process instructions", "Physical memory fragmentation caused by variable sizing", "A process accessing unauthorized memory regions", "Corruption of disk sectors during page writes"],
    correctIndex: 0,
    explanation: "Thrashing occurs when total working sets exceed available RAM, causing continuous high page-fault rates and heavy disk swapping."
  },
  {
    id: 35,
    category: "Operating Systems & Architecture",
    question: "What is Belady's Anomaly in page replacement algorithms?",
    options: ["Increasing physical frame allocation causes more page faults under FIFO page replacement", "Increasing physical frames decreases page fault frequency", "LRU page replacement algorithm causing deadlock", "Page table size exceeding physical memory size"],
    correctIndex: 0,
    explanation: "Belady's Anomaly occurs in FIFO where increasing memory frame count unexpectedly leads to an increase in total page faults for certain reference strings."
  },
  {
    id: 36,
    category: "Operating Systems & Architecture",
    question: "Which synchronization primitive uses atomic operations signal() and wait() [P and V] to manage critical section access?",
    options: ["Semaphore", "Monitor", "Spinlock", "Condition Variable"],
    correctIndex: 0,
    explanation: "A Semaphore is an integer variable accessed via atomic wait() [decrement] and signal() [increment] operations to control concurrent resource access."
  },
  {
    id: 37,
    category: "Operating Systems & Architecture",
    question: "In Demand Paging, when a process attempts to access a virtual memory page not currently loaded into physical RAM, what hardware interrupt is generated?",
    options: ["Page Fault Interrupt", "Bus Error", "Segmentation Fault", "Trap"],
    correctIndex: 0,
    explanation: "A Page Fault occurs when a page table entry valid bit is 0, prompting the OS kernel to load the missing page from disk into a free frame."
  },
  {
    id: 38,
    category: "Operating Systems & Architecture",
    question: "Which memory management technique divides logical memory into fixed-sized blocks called 'pages' and physical memory into 'frames'?",
    options: ["Paging", "Segmentation", "Dynamic Partitioning", "Fixed Contiguous Partitioning"],
    correctIndex: 0,
    explanation: "Paging divides logical memory into equal fixed-size pages and physical RAM into matching frames, eliminating external fragmentation."
  },
  {
    id: 39,
    category: "Operating Systems & Architecture",
    question: "What is the primary difference between a Process and a Thread?",
    options: ["Threads within the same process share code, data, and OS resources, whereas processes have independent address spaces", "Processes share stack space while threads do not", "Threads are scheduled by hardware while processes are scheduled by kernel", "Processes execute faster than threads"],
    correctIndex: 0,
    explanation: "A thread is a lightweight unit of CPU execution within a process. Threads in the same process share global variables, heap, and open files, but maintain distinct registers and stacks."
  },
  {
    id: 40,
    category: "Operating Systems & Architecture",
    question: "Which CPU scheduling algorithm assigns a fixed time quantum per process in a circular queue?",
    options: ["Round Robin (RR)", "Shortest Job First (SJF)", "Priority Scheduling", "Multilevel Queue"],
    correctIndex: 0,
    explanation: "Round Robin (RR) is a preemptive CPU scheduling algorithm designed for time-sharing systems where each process gets a fixed time slice (quantum)."
  },
  {
    id: 41,
    category: "Operating Systems & Architecture",
    question: "What is the purpose of the Translation Lookaside Buffer (TLB) in virtual memory systems?",
    options: ["A high-speed hardware cache that stores recent virtual-to-physical address translations", "A disk swap space for page tables", "A queue for CPU ready processes", "A cache for instruction decoding"],
    correctIndex: 0,
    explanation: "TLB is an associative MMU hardware cache storing recently used page-table entries to accelerate virtual memory address translation."
  },
  {
    id: 42,
    category: "Operating Systems & Architecture",
    question: "In UNIX-like operating systems, which system call creates a new child process that is an exact duplicate of the calling parent process?",
    options: ["fork()", "exec()", "pthread_create()", "clone()"],
    correctIndex: 0,
    explanation: "fork() spawns a child process by duplicating the calling process's address space, returning 0 in child and PID in parent."
  },
  {
    id: 43,
    category: "Operating Systems & Architecture",
    question: "What condition leads to 'Internal Fragmentation' in operating system memory management?",
    options: ["Allocated memory block is slightly larger than requested memory payload, leaving wasted space inside the partition", "Total free memory is sufficient but not contiguous", "Page table size exceeds RAM capacity", "Frequent disk swapping fragmentation"],
    correctIndex: 0,
    explanation: "Internal fragmentation occurs when memory allocated to a process is larger than its requested payload, leaving unused wasted space inside the fixed partition/frame."
  },
  {
    id: 44,
    category: "Operating Systems & Architecture",
    question: "Which disk scheduling algorithm services I/O requests by moving the disk arm across cylinders in one direction, reversing direction when reaching the end?",
    options: ["SCAN (Elevator Algorithm)", "FCFS", "SSTF (Shortest Seek Time First)", "C-LOOK"],
    correctIndex: 0,
    explanation: "SCAN algorithm moves the disk arm back and forth across the disk surface servicing requests along its path like an elevator."
  },
  {
    id: 45,
    category: "Operating Systems & Architecture",
    question: "What is a 'Zombie Process' in UNIX systems?",
    options: ["A process that has completed execution but still has an entry in the process table waiting for its parent to read its exit status via wait()", "A process running in an infinite loop consuming 100% CPU", "A process blocked due to deadlock", "A background daemon process"],
    correctIndex: 0,
    explanation: "A Zombie process is a terminated process whose exit status has not yet been collected by its parent process using wait() system call."
  },

  // CATEGORY 4: Data Structures & Algorithms (46-60)
  {
    id: 46,
    category: "Data Structures & Algorithms",
    question: "What is the worst-case time complexity of QuickSort when inappropriate pivot selection occurs on an already sorted array?",
    options: ["O(N^2)", "O(N log N)", "O(N)", "O(log N)"],
    correctIndex: 0,
    explanation: "QuickSort degrades to O(N^2) worst-case time complexity when the chosen pivot is consistently the smallest or largest element (e.g., sorted array with first element as pivot)."
  },
  {
    id: 47,
    category: "Data Structures & Algorithms",
    question: "What is the defining self-balancing property of an AVL Tree?",
    options: ["The height difference (balance factor) between left and right subtrees of any node is at most 1", "All leaf nodes reside at the exact same depth", "Nodes are colored Red or Black", "Every parent node has at most 2 children"],
    correctIndex: 0,
    explanation: "An AVL Tree maintains balance factor |Height(Left) - Height(Right)| <= 1 for every node, performing rotations to guarantee O(log N) operations."
  },
  {
    id: 48,
    category: "Data Structures & Algorithms",
    question: "Which data structure operates on LIFO (Last In First Out) principle and is used for function call stack maintenance and expression evaluation?",
    options: ["Stack", "Queue", "Priority Queue", "Deque"],
    correctIndex: 0,
    explanation: "Stack follows Last-In First-Out (LIFO). Pushing and popping occur from the top, making it ideal for recursion, call stacks, and expression parsing."
  },
  {
    id: 49,
    category: "Data Structures & Algorithms",
    question: "What is the average and worst-case time complexity of searching an element in a Hash Table with a good hash function and minimal collisions?",
    options: ["Average O(1), Worst O(N)", "Average O(N), Worst O(N^2)", "Average O(log N), Worst O(N)", "Average O(1), Worst O(log N)"],
    correctIndex: 0,
    explanation: "Hash tables offer expected O(1) constant time search. However, if all keys hash to the same bucket (worst-case collision), search degrades to O(N)."
  },
  {
    id: 50,
    category: "Data Structures & Algorithms",
    question: "Which graph traversal algorithm uses a Queue data structure to visit vertices level-by-level from a source node?",
    options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Algorithm", "Topological Sort"],
    correctIndex: 0,
    explanation: "BFS uses a FIFO Queue to explore neighbor nodes level-by-level before moving to deeper nodes, finding shortest paths in unweighted graphs."
  },
  {
    id: 51,
    category: "Data Structures & Algorithms",
    question: "What is the time complexity to find the minimum element in a Min-Heap containing N elements?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctIndex: 0,
    explanation: "In a Min-Heap, the root node always holds the minimum element, allowing retrieval in O(1) constant time."
  },
  {
    id: 52,
    category: "Data Structures & Algorithms",
    question: "Which greedy algorithm finds a Minimum Spanning Tree (MST) for a connected weighted undirected graph by selecting minimum weight edges that do not form a cycle?",
    options: ["Kruskal's Algorithm", "Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm"],
    correctIndex: 0,
    explanation: "Kruskal's algorithm sorts all edges by weight and greedily adds edges to the growing forest using Union-Find to avoid cycles."
  },
  {
    id: 53,
    category: "Data Structures & Algorithms",
    question: "What is the worst-case space complexity of Depth-First Search (DFS) on a graph with height H?",
    options: ["O(H)", "O(V + E)", "O(V^2)", "O(1)"],
    correctIndex: 0,
    explanation: "DFS stores vertices on the recursion call stack proportional to maximum depth (height H) of the search tree, yielding O(H) space complexity."
  },
  {
    id: 54,
    category: "Data Structures & Algorithms",
    question: "Which algorithm solves single-source shortest path problems on graphs with negative edge weights (provided no negative weight cycles exist)?",
    options: ["Bellman-Ford Algorithm", "Dijkstra's Algorithm", "Prim's Algorithm", "BFS"],
    correctIndex: 0,
    explanation: "Bellman-Ford can handle negative edge weights and detect negative cycles in O(V * E) time, whereas Dijkstra fails with negative weights."
  },
  {
    id: 55,
    category: "Data Structures & Algorithms",
    question: "In a Binary Search Tree (BST), which traversal order yields elements in sorted ascending order?",
    options: ["In-order Traversal", "Pre-order Traversal", "Post-order Traversal", "Level-order Traversal"],
    correctIndex: 0,
    explanation: "In-order traversal (Left, Root, Right) of a valid Binary Search Tree visits key nodes in strictly sorted non-decreasing order."
  },
  {
    id: 56,
    category: "Data Structures & Algorithms",
    question: "What algorithm design paradigm does MergeSort utilize by breaking a problem into subproblems, solving them recursively, and combining solutions?",
    options: ["Divide and Conquer", "Greedy Approach", "Dynamic Programming", "Backtracking"],
    correctIndex: 0,
    explanation: "MergeSort uses Divide and Conquer: divides array into halves, recursively sorts them, and merges sorted sub-arrays in O(N log N) time."
  },
  {
    id: 57,
    category: "Data Structures & Algorithms",
    question: "Which technique in Dynamic Programming optimizes recursive functions by storing previous subproblem results in a lookup table (top-down approach)?",
    options: ["Memoization", "Tabulation", "Greedy Choice", "Branch and Bound"],
    correctIndex: 0,
    explanation: "Memoization is top-down caching of expensive function call results to avoid redundant subproblem calculations in Dynamic Programming."
  },
  {
    id: 58,
    category: "Data Structures & Algorithms",
    question: "What is the maximum number of nodes in a Binary Tree of height H (where root is at height 1)?",
    options: ["2^H - 1", "2^H", "2^(H-1)", "2*H"],
    correctIndex: 0,
    explanation: "A full binary tree of height H contains 1 + 2 + 4 + ... + 2^(H-1) = 2^H - 1 nodes."
  },
  {
    id: 59,
    category: "Data Structures & Algorithms",
    question: "Which sorting algorithm is stable and achieves O(N log N) worst-case time complexity while requiring O(N) auxiliary space?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
    correctIndex: 0,
    explanation: "Merge Sort guarantees O(N log N) time in all cases and maintains relative order of equal elements (stable), requiring O(N) extra memory."
  },
  {
    id: 60,
    category: "Data Structures & Algorithms",
    question: "What is the asymptotic tight bound time complexity of Binary Search on a sorted array of N elements?",
    options: ["Θ(log N)", "Θ(N)", "Θ(N log N)", "Θ(1)"],
    correctIndex: 0,
    explanation: "Binary search repeatedly halves the search space, yielding Θ(log N) tight bound time complexity."
  },

  // CATEGORY 5: Software Engineering & Agile (61-70)
  {
    id: 61,
    category: "Software Engineering & Agile",
    question: "In Object-Oriented Software Design, what high cohesion and low coupling principle recommends that a class should have only one reason to change?",
    options: ["Single Responsibility Principle (SRP)", "Open/Closed Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"],
    correctIndex: 0,
    explanation: "SRP (part of SOLID principles) states that a class should have one, and only one, responsibility and reason to undergo modification."
  },
  {
    id: 62,
    category: "Software Engineering & Agile",
    question: "Which Agile Scrum artifact represents an ordered list of everything that is known to be needed in the product?",
    options: ["Product Backlog", "Sprint Backlog", "Increment", "Sprint Burndown Chart"],
    correctIndex: 0,
    explanation: "The Product Backlog is an prioritized, dynamic list of user stories, features, requirements, and bug fixes managed by the Product Owner."
  },
  {
    id: 63,
    category: "Software Engineering & Agile",
    question: "In software testing, what technique tests internal code structure, control flow paths, and logic conditions using source code visibility?",
    options: ["White Box Testing", "Black Box Testing", "Acceptance Testing", "Usability Testing"],
    correctIndex: 0,
    explanation: "White Box Testing (glass box testing) examines internal logic, statements, branches, and execution paths with full access to code."
  },
  {
    id: 64,
    category: "Software Engineering & Agile",
    question: "Which SDLC process model is best suited for projects with high uncertainty where risk assessment is performed repeatedly at every iteration spiral?",
    options: ["Spiral Model", "Waterfall Model", "V-Model", "Big Bang Model"],
    correctIndex: 0,
    explanation: "The Spiral Model combines iterative prototyping with systematic risk analysis at every phase spiral, ideal for large critical systems."
  },
  {
    id: 65,
    category: "Software Engineering & Agile",
    question: "What type of software maintenance is performed to modify software to adapt to changes in the external environment (e.g., OS upgrade or hardware change)?",
    options: ["Adaptive Maintenance", "Corrective Maintenance", "Perfective Maintenance", "Preventive Maintenance"],
    correctIndex: 0,
    explanation: "Adaptive Maintenance adjusts software to operate effectively in modified technical environments (new OS versions, DB upgrades, platforms)."
  },
  {
    id: 66,
    category: "Software Engineering & Agile",
    question: "In UML (Unified Modeling Language), which behavioral diagram shows dynamic interaction and message exchange between objects in chronological sequence?",
    options: ["Sequence Diagram", "Class Diagram", "Use Case Diagram", "Component Diagram"],
    correctIndex: 0,
    explanation: "Sequence Diagrams depict object interactions arranged in time sequence, showing lifelines and exchanged messages."
  },
  {
    id: 67,
    category: "Software Engineering & Agile",
    question: "What metric measures the degree of inter-dependence between different software modules (where lower value indicates better design)?",
    options: ["Coupling", "Cohesion", "Cyclomatic Complexity", "Encapsulation"],
    correctIndex: 0,
    explanation: "Coupling measures degree of dependence between modules. Good software architecture strives for Low Coupling and High Cohesion."
  },
  {
    id: 68,
    category: "Software Engineering & Agile",
    question: "Which testing phase verifies that modified software continues to function correctly without newly introduced bugs after code updates?",
    options: ["Regression Testing", "Smoke Testing", "Sanity Testing", "Unit Testing"],
    correctIndex: 0,
    explanation: "Regression Testing re-runs test suites on modified code to confirm that recent updates have not broken existing functionality."
  },
  {
    id: 69,
    category: "Software Engineering & Agile",
    question: "In Agile Scrum, what brief daily meeting (15 mins) aligns the team on work completed yesterday, planned work today, and blockers?",
    options: ["Daily Standup / Daily Scrum", "Sprint Planning", "Sprint Review", "Sprint Retrospective"],
    correctIndex: 0,
    explanation: "Daily Standup is a short 15-minute timeboxed event for the development team to synchronize activities and surface impediments."
  },
  {
    id: 70,
    category: "Software Engineering & Agile",
    question: "What software complexity metric developed by Thomas McCabe measures the number of linearly independent paths through a program's control flow graph?",
    options: ["Cyclomatic Complexity", "Halstead Volume", "Lines of Code (LOC)", "Function Point"],
    correctIndex: 0,
    explanation: "Cyclomatic Complexity V(G) = E - N + 2P calculates minimum test cases required to achieve complete branch coverage."
  },

  // CATEGORY 6: Cyber Security & Cryptography (71-82)
  {
    id: 71,
    category: "Cyber Security & Cryptography",
    question: "Which public-key asymmetric cryptographic algorithm relies on the mathematical difficulty of factoring large composite prime numbers?",
    options: ["RSA", "AES", "DES", "SHA-256"],
    correctIndex: 0,
    explanation: "RSA (Rivest-Shamir-Adleman) is an asymmetric encryption scheme whose security depends on the hardness of integer prime factorization."
  },
  {
    id: 72,
    category: "Cyber Security & Cryptography",
    question: "What attack vector injects malicious SQL statements into web entry forms to manipulate backend database queries?",
    options: ["SQL Injection (SQLi)", "Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "Buffer Overflow"],
    correctIndex: 0,
    explanation: "SQL Injection exploits unsanitized input fields to execute unauthorized database queries, bypassing authentication or dumping data."
  },
  {
    id: 73,
    category: "Cyber Security & Cryptography",
    question: "Which cryptographic hashing algorithm produces a fixed 256-bit (32-byte) message digest and is widely used in Bitcoin blockchain and SSL certificates?",
    options: ["SHA-256", "MD5", "SHA-1", "CRC32"],
    correctIndex: 0,
    explanation: "SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash function that provides high collision resistance."
  },
  {
    id: 74,
    category: "Cyber Security & Cryptography",
    question: "What type of attack floods a target server with overwhelming traffic from multiple distributed compromised systems (botnet)?",
    options: ["DDoS (Distributed Denial of Service)", "Man-in-the-Middle (MitM)", "Phishing", "Eavesdropping"],
    correctIndex: 0,
    explanation: "DDoS floods target networks or applications with traffic originating from thousands of distributed botnet nodes to exhaust bandwidth/resources."
  },
  {
    id: 75,
    category: "Cyber Security & Cryptography",
    question: "Which symmetric encryption standard adopted by the US NIST uses block size of 128 bits and key sizes of 128, 192, or 256 bits?",
    options: ["AES (Advanced Encryption Standard)", "DES", "Blowfish", "RC4"],
    correctIndex: 0,
    explanation: "AES (Advanced Encryption Standard based on Rijndael cipher) replaced DES as the global symmetric key encryption standard."
  },
  {
    id: 76,
    category: "Cyber Security & Cryptography",
    question: "What security property ensures that a sender cannot deny having sent a specific transmitted message or performed a digital transaction?",
    options: ["Non-Repudiation", "Confidentiality", "Availability", "Integrity"],
    correctIndex: 0,
    explanation: "Non-repudiation (achieved via Digital Signatures and PKI) prevents an entity from denying previous commitments or sent messages."
  },
  {
    id: 77,
    category: "Cyber Security & Cryptography",
    question: "Which network security device operates at Layer 3/4/7 to inspect and filter incoming/outgoing traffic based on predefined security rules?",
    options: ["Firewall", "Repeater", "Hub", "Modem"],
    correctIndex: 0,
    explanation: "Firewalls monitor and control network traffic passing between internal secure networks and external untrusted networks based on security rules."
  },
  {
    id: 78,
    category: "Cyber Security & Cryptography",
    question: "In Web Application Security, what vulnerability occurs when an application includes untrusted user data in a web page without proper validation, executing malicious scripts in user browsers?",
    options: ["XSS (Cross-Site Scripting)", "CSRF", "Directory Traversal", "Clickjacking"],
    correctIndex: 0,
    explanation: "XSS occurs when malicious client-side scripts are injected into web pages viewed by other users, stealing session cookies or tokens."
  },
  {
    id: 79,
    category: "Cyber Security & Cryptography",
    question: "Which key exchange protocol enables two parties with no prior knowledge to establish a shared secret key over an insecure channel?",
    options: ["Diffie-Hellman Key Exchange", "RSA", "ECC", "HMAC"],
    correctIndex: 0,
    explanation: "Diffie-Hellman allows two communication partners to securely generate a shared symmetric key over an unencrypted public network."
  },
  {
    id: 80,
    category: "Cyber Security & Cryptography",
    question: "What form of social engineering tricks victims into revealing sensitive credentials via deceptive emails appearing from trusted organizations?",
    options: ["Phishing", "Spoofing", "Shoulder Surfing", "Tailgating"],
    correctIndex: 0,
    explanation: "Phishing uses fraudulent emails or fake login portals imitating legitimate institutions to trick users into disclosing passwords or banking details."
  },
  {
    id: 81,
    category: "Cyber Security & Cryptography",
    question: "What security protocol encrypts communication between web browsers and web servers, replacing outdated SSL?",
    options: ["TLS (Transport Layer Security)", "IPSec", "SSH", "SFTP"],
    correctIndex: 0,
    explanation: "TLS (Transport Layer Security) is the modern cryptographic protocol ensuring privacy and data integrity for HTTPS web communications."
  },
  {
    id: 82,
    category: "Cyber Security & Cryptography",
    question: "What is a 'Zero-Day Vulnerability'?",
    options: ["A software security flaw that is exploited by attackers before the vendor is aware or has released a patch", "A virus that deletes files on Day 0 of every month", "An expired SSL certificate vulnerability", "A system password with zero characters"],
    correctIndex: 0,
    explanation: "Zero-Day refers to security flaws unknown to software developers for which no official fix or security patch has been developed."
  },

  // CATEGORY 7: Object-Oriented Programming (C++/Java) (83-92)
  {
    id: 83,
    category: "Object-Oriented Programming (C++/Java)",
    question: "Which OOP concept allows a subclass to provide a specific implementation of a method that is already defined in its superclass?",
    options: ["Method Overriding (Dynamic Polymorphism)", "Method Overloading (Static Polymorphism)", "Encapsulation", "Abstraction"],
    correctIndex: 0,
    explanation: "Method Overriding occurs when a child class redefines a superclass method with identical signature, resolved at runtime (dynamic binding)."
  },
  {
    id: 84,
    category: "Object-Oriented Programming (C++/Java)",
    question: "In Java, what keyword is used to declare that a variable's value cannot be reassigned once initialized, or a method cannot be overridden?",
    options: ["final", "static", "abstract", "const"],
    correctIndex: 0,
    explanation: "The 'final' keyword restricts re-assignment for variables, prevents method overriding in subclasses, and prohibits class inheritance."
  },
  {
    id: 85,
    category: "Object-Oriented Programming (C++/Java)",
    question: "What OOP mechanism bundles data members and methods together inside a single unit while restricting direct outside access using private access modifiers?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    correctIndex: 0,
    explanation: "Encapsulation wraps state (fields) and behavior (methods) into a class, hiding private fields behind public getter/setter accessors."
  },
  {
    id: 86,
    category: "Object-Oriented Programming (C++/Java)",
    question: "In C++, what special member function is called automatically when an object goes out of scope or is deleted, releasing dynamic memory?",
    options: ["Destructor", "Constructor", "Finalizer", "Deallocator"],
    correctIndex: 0,
    explanation: "A Destructor (prefixed with ~) cleans up resources and deallocates memory when an object's lifetime ends in C++."
  },
  {
    id: 87,
    category: "Object-Oriented Programming (C++/Java)",
    question: "In Java memory architecture, where are objects created using the 'new' keyword stored?",
    options: ["Heap Memory", "Stack Memory", "Method Area", "Program Counter Register"],
    correctIndex: 0,
    explanation: "In Java, all objects and instance variables reside in Heap Memory, whereas local variables and reference pointers live on Stack Memory."
  },
  {
    id: 88,
    category: "Object-Oriented Programming (C++/Java)",
    question: "What type of inheritance permits a single derived class to inherit directly from more than one base class (supported in C++, but achieved via Interfaces in Java)?",
    options: ["Multiple Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance", "Single Inheritance"],
    correctIndex: 0,
    explanation: "Multiple Inheritance allows a derived class to inherit from multiple parent classes. C++ supports it directly, while Java avoids diamond problem ambiguities by using Interfaces."
  },
  {
    id: 89,
    category: "Object-Oriented Programming (C++/Java)",
    question: "In Java, what exception handling block is guaranteed to execute regardless of whether an exception was thrown or caught?",
    options: ["finally", "catch", "try", "throw"],
    correctIndex: 0,
    explanation: "The 'finally' block executes after try-catch blocks complete, ensuring critical cleanup (e.g., closing database connections or files)."
  },
  {
    id: 90,
    category: "Object-Oriented Programming (C++/Java)",
    question: "What is an Abstract Class in C++ / Java?",
    options: ["A class that cannot be instantiated directly and contains at least one abstract (pure virtual) method", "A class with no data members", "A class sealed against inheritance", "A class containing only static methods"],
    correctIndex: 0,
    explanation: "Abstract classes serve as base blueprints that cannot be instantiated on their own, requiring derived classes to implement abstract methods."
  },
  {
    id: 91,
    category: "Object-Oriented Programming (C++/Java)",
    question: "In C++, what is a 'Virtual Function' used for?",
    options: ["To achieve dynamic (runtime) polymorphism via Late Binding", "To allocate memory in virtual stack", "To prevent class inheritance", "To execute inline functions faster"],
    correctIndex: 0,
    explanation: "Virtual functions in C++ use vtables (virtual tables) to resolve function calls dynamically at runtime based on actual object type."
  },
  {
    id: 92,
    category: "Object-Oriented Programming (C++/Java)",
    question: "What feature in Java automatically reclaims memory occupied by unreachable unreferenced objects in heap space?",
    options: ["Garbage Collector (GC)", "Memory Deallocator", "Stack Purger", "Finalizer Task"],
    correctIndex: 0,
    explanation: "The Java Garbage Collector runs automatically in the JVM to identify and destroy objects no longer referenced by application threads."
  },

  // CATEGORY 8: Web Technologies & Cloud Computing (93-100)
  {
    id: 93,
    category: "Web Technologies & Cloud Computing",
    question: "In RESTful API design, which HTTP method is idempotent and used to replace or update an existing resource representation entirely?",
    options: ["PUT", "POST", "PATCH", "GET"],
    correctIndex: 0,
    explanation: "PUT is idempotent, replacing the target resource with request payload. POST is non-idempotent and creates new resources."
  },
  {
    id: 94,
    category: "Web Technologies & Cloud Computing",
    question: "Which Cloud Service Model provides virtualized computing infrastructure (virtual machines, storage, networks) where clients manage OS and software?",
    options: ["IaaS (Infrastructure as a Service)", "PaaS (Platform as a Service)", "SaaS (Software as a Service)", "FaaS (Function as a Service)"],
    correctIndex: 0,
    explanation: "IaaS (e.g., AWS EC2, Azure VMs) provides raw compute, storage, and networking hardware assets where customers install operating systems and applications."
  },
  {
    id: 95,
    category: "Web Technologies & Cloud Computing",
    question: "In modern Microservices Architecture, what pattern acts as a single entry point for all client requests, routing them to appropriate backend microservices?",
    options: ["API Gateway", "Service Mesh", "Load Balancer", "Reverse Proxy"],
    correctIndex: 0,
    explanation: "An API Gateway sits between client apps and microservices, handling routing, rate limiting, authentication, and SSL termination."
  },
  {
    id: 96,
    category: "Web Technologies & Cloud Computing",
    question: "Which containerization platform packages application code along with dependencies into lightweight, isolated containers that run across any OS environment?",
    options: ["Docker", "Kubernetes", "Vagrant", "Hyper-V"],
    correctIndex: 0,
    explanation: "Docker containerizes application code and dependencies into standardized containers sharing the host OS kernel."
  },
  {
    id: 97,
    category: "Web Technologies & Cloud Computing",
    question: "In JSON (JavaScript Object Notation), which data format is NOT supported natively?",
    options: ["Function / Executable Code", "Array", "Boolean", "Number"],
    correctIndex: 0,
    explanation: "JSON supports Strings, Numbers, Booleans, Arrays, Objects, and Null. Functions and executable code are disallowed for security."
  },
  {
    id: 98,
    category: "Web Technologies & Cloud Computing",
    question: "What open-source container orchestration engine automates deployment, scaling, and management of containerized applications across clusters?",
    options: ["Kubernetes (K8s)", "Docker Swarm", "Jenkins", "Ansible"],
    correctIndex: 0,
    explanation: "Kubernetes automates container deployment, horizontal scaling, self-healing, and load balancing across multi-node clusters."
  },
  {
    id: 99,
    category: "Web Technologies & Cloud Computing",
    question: "Which HTTP status code category represents successful client request processing (e.g., 200 OK, 201 Created)?",
    options: ["2xx Series", "3xx Series", "4xx Series", "5xx Series"],
    correctIndex: 0,
    explanation: "2xx status codes indicate successful client requests. 4xx indicates client errors, 5xx indicates server errors."
  },
  {
    id: 100,
    category: "Web Technologies & Cloud Computing",
    question: "What Git command creates a new local branch and switches your working tree to that branch in a single step?",
    options: ["git checkout -b <branch_name>", "git branch <branch_name>", "git switch --create", "git commit -b <branch_name>"],
    correctIndex: 0,
    explanation: "'git checkout -b <branch_name>' (or 'git switch -c') creates a new branch and immediately switches the working directory to it."
  }
];

// EXAMS DATA STORE CONFIGURATION
const EXAMS_DATA = {
  ssc: {
    id: "ssc",
    name: "Staff Selection Commission (SSC CGL 2026)",
    subName: "Paper I: General Awareness & Current Affairs",
    labId: "CGL-2026-LAB-01",
    durationMinutes: 120,
    positiveMark: 1.00,
    negativeMark: 0.333333,
    negativeText: "-0.33",
    totalMarks: 100,
    subject: "Current Affairs 100 MCQs",
    categories: [
      "National Affairs & Government Schemes",
      "International Affairs & Global Summits",
      "Economy, Banking & Union Budget",
      "Defense & Military Exercises",
      "Science, Space & Technology",
      "Sports & Championships",
      "Awards, Honours & Recognitions",
      "Appointments, Indexes & Important Days"
    ],
    questions: SSC_CGL_QUESTIONS
  },
  ibps: {
    id: "ibps",
    name: "IBPS SO 2026 (Scale I IT Officer)",
    subName: "Professional Knowledge: Computer Science & IT (29 August 2026 Exam)",
    labId: "IBPS-SO-IT-2026-LAB-02",
    durationMinutes: 60,
    positiveMark: 1.00,
    negativeMark: 0.25,
    negativeText: "-0.25",
    totalMarks: 100,
    subject: "IT Officer Professional Knowledge 100 MCQs",
    categories: [
      "Database Management Systems & SQL",
      "Data Communication & Computer Networks",
      "Operating Systems & Architecture",
      "Data Structures & Algorithms",
      "Software Engineering & Agile",
      "Cyber Security & Cryptography",
      "Object-Oriented Programming (C++/Java)",
      "Web Technologies & Cloud Computing"
    ],
    questions: IBPS_SO_QUESTIONS
  }
};

// Legacy alias compatibility
const QUESTIONS = SSC_CGL_QUESTIONS;
