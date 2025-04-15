// Symptom and Disease Database
const symptomDatabase = [
    {
        disease: "Influenza (Flu)",
        symptoms: ["fever", "chills", "body aches", "fatigue", "cough", "sore throat", "runny nose", "headache", "vomiting", "diarrhea"],
    },
    {
        disease: "Tuberculosis (TB)",
        symptoms: ["persistent cough", "coughing up blood", "chest pain", "weight loss", "fatigue", "fever", "night sweats", "loss of appetite"],
    },
    {
        disease: "Malaria",
        symptoms: ["fever", "chills", "sweating", "headache", "nausea", "vomiting", "muscle pain", "fatigue", "chest pain", "abdominal pain"],
    },
    {
        disease: "HIV/AIDS",
        symptoms: ["fever", "fatigue", "swollen lymph nodes", "sore throat", "rash", "night sweats", "muscle aches", "mouth ulcers", "weight loss"],
    },
    {
        disease: "Hepatitis A",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "dark urine", "jaundice", "joint pain", "fever"],
    },
    {
        disease: "Hepatitis B",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "dark urine", "jaundice", "joint pain", "fever"],
    },
    {
        disease: "Hepatitis C",
        symptoms: ["fatigue", "jaundice", "abdominal pain", "loss of appetite", "nausea", "dark urine", "joint pain", "depression"],
    },
    {
        disease: "Dengue Fever",
        symptoms: ["high fever", "severe headache", "pain behind the eyes", "joint and muscle pain", "rash", "mild bleeding", "fatigue", "nausea", "vomiting"],
    },
    {
        disease: "Chikungunya",
        symptoms: ["fever", "joint pain", "muscle pain", "headache", "fatigue", "rash", "nausea", "conjunctivitis"],
    },
    {
        disease: "Measles",
        symptoms: ["high fever", "cough", "runny nose", "red eyes", "white spots inside mouth", "rash", "fatigue", "sore throat"],
    },
    {
        disease: "Mumps",
        symptoms: ["swollen salivary glands", "fever", "headache", "muscle aches", "fatigue", "loss of appetite", "pain while chewing"],
    },
    {
        disease: "Rubella",
        symptoms: ["mild fever", "headache", "runny nose", "red eyes", "rash", "swollen lymph nodes", "joint pain"],
    },
    {
        disease: "Chickenpox (Varicella)",
        symptoms: ["rash", "itchy blisters", "fever", "fatigue", "headache", "loss of appetite"],
    },
    {
        disease: "Shingles (Herpes Zoster)",
        symptoms: ["painful rash", "blisters", "itching", "tingling", "burning sensation", "fever", "headache", "fatigue"],
    },
    {
        disease: "Pneumonia",
        symptoms: ["cough with phlegm", "fever", "chills", "shortness of breath", "chest pain", "fatigue", "nausea", "vomiting", "confusion"],
    },
    {
        disease: "Bronchitis",
        symptoms: ["cough with mucus", "shortness of breath", "wheezing", "chest discomfort", "fever", "fatigue"],
    },
    {
        disease: "Common Cold",
        symptoms: ["runny nose", "sneezing", "congestion", "sore throat", "cough", "mild headache", "watery eyes", "mild fatigue"],
    },
    {
        disease: "Sinusitis",
        symptoms: ["facial pain", "nasal congestion", "thick nasal discharge", "reduced sense of smell", "cough", "fatigue", "headache"],
    },
    {
        disease: "Otitis Media (Ear Infection)",
        symptoms: ["ear pain", "difficulty hearing", "fluid drainage from ear", "fever", "irritability", "trouble sleeping"],
    },
    {
        disease: "Strep Throat",
        symptoms: ["severe sore throat", "painful swallowing", "fever", "red and swollen tonsils", "white patches on tonsils", "swollen lymph nodes", "headache"],
    },
    {
        disease: "Scarlet Fever",
        symptoms: ["red rash", "sore throat", "fever", "red tongue", "skin peeling", "headache", "nausea", "vomiting"],
    },
    {
        disease: "Whooping Cough (Pertussis)",
        symptoms: ["severe coughing fits", "whooping sound", "vomiting after coughing", "fatigue", "runny nose", "low-grade fever"],
    },
    {
        disease: "Diphtheria",
        symptoms: ["sore throat", "swollen glands", "fever", "weakness", "thick gray covering in throat", "difficulty breathing"],
    },
    {
        disease: "Tetanus",
        symptoms: ["jaw cramping", "muscle spasms", "stiff muscles", "difficulty swallowing", "fever", "sweating", "high blood pressure"],
    },
    {
        disease: "Polio",
        symptoms: ["fever", "sore throat", "headache", "vomiting", "fatigue", "meningitis", "paralysis", "muscle weakness"],
    },
    {
        disease: "Rabies",
        symptoms: ["fever", "headache", "anxiety", "confusion", "agitation", "hallucinations", "paralysis", "difficulty swallowing", "hydrophobia"],
    },
    {
        disease: "Meningitis (Bacterial/Viral)",
        symptoms: ["sudden high fever", "stiff neck", "severe headache", "confusion", "sensitivity to light", "nausea", "vomiting", "seizures", "rash"],
    },
    {
        disease: "Encephalitis",
        symptoms: ["headache", "fever", "confusion", "seizures", "stiff neck", "sensitivity to light", "drowsiness", "fatigue", "weakness"],
    },
    {
        disease: "Hand, Foot, and Mouth Disease",
        symptoms: ["fever", "sore throat", "painful blisters on mouth", "rash on hands and feet", "loss of appetite", "irritability"],
    },
    {
        disease: "Norovirus Infection",
        symptoms: ["nausea", "vomiting", "diarrhea", "stomach pain", "fever", "headache", "body aches"],
    },
    {
        disease: "Rotavirus Infection",
        symptoms: ["severe watery diarrhea", "vomiting", "fever", "abdominal pain", "dehydration"],
    },
    {
        disease: "Salmonellosis",
        symptoms: ["diarrhea", "fever", "abdominal cramps", "vomiting", "nausea", "headache", "muscle pains"],
    },
    {
        disease: "Shigellosis",
        symptoms: ["diarrhea with blood and mucus", "abdominal pain", "fever", "tenesmus", "nausea", "vomiting"],
    },
    {
        disease: "Typhoid Fever",
        symptoms: ["prolonged high fever", "headache", "abdominal pain", "constipation or diarrhea", "rose-colored spots", "lethargy", "weakness"],
    },
    {
        disease: "Cholera",
        symptoms: ["profuse watery diarrhea", "vomiting", "leg cramps", "dehydration", "shock", "low blood pressure"],
    },
    {
        disease: "Giardiasis",
        symptoms: ["diarrhea", "abdominal pain", "bloating", "nausea", "vomiting", "fatigue", "weight loss"],
    },
    {
        disease: "Amoebiasis",
        symptoms: ["bloody diarrhea", "abdominal cramps", "fatigue", "weight loss", "fever", "intestinal ulcers"],
    },
    {
        disease: "Leptospirosis",
        symptoms: ["fever", "chills", "headache", "muscle aches", "vomiting", "jaundice", "red eyes", "abdominal pain", "rash"],
    },
    {
        disease: "Legionnaires' Disease",
        symptoms: ["cough", "shortness of breath", "high fever", "muscle aches", "headache", "chills", "chest pain", "confusion"],
    },
    {
        disease: "MRSA Infection",
        symptoms: ["skin infection", "swelling", "pain", "warmth", "pus drainage", "fever", "rash", "fatigue"],
    },
    {
        disease: "Carbapenem-Resistant Organisms (CROs)",
        symptoms: ["fever", "shortness of breath", "urinary symptoms", "wound drainage", "pain", "redness", "swelling"],
    },
    {
        disease: "Avian Influenza (Bird Flu)",
        symptoms: ["fever", "cough", "sore throat", "muscle aches", "pneumonia", "respiratory distress", "eye infections", "severe respiratory failure"],
    },
    {
        disease: "Hantavirus",
        symptoms: ["fatigue", "fever", "muscle aches", "headache", "dizziness", "chills", "abdominal pain", "vomiting", "diarrhea", "respiratory distress"],
    },
    {
        disease: "West Nile Virus",
        symptoms: ["fever", "headache", "body aches", "joint pain", "vomiting", "diarrhea", "rash", "fatigue", "weakness"],
    },
    {
        disease: "Zika Virus",
        symptoms: ["fever", "rash", "joint pain", "conjunctivitis", "muscle pain", "headache", "eye pain"],
    },
    {
        disease: "Ebola Virus Disease",
        symptoms: ["fever", "severe headache", "muscle pain", "fatigue", "diarrhea", "vomiting", "abdominal pain", "unexplained bleeding", "bruising"],
    },
    {
        disease: "Yellow Fever",
        symptoms: ["fever", "headache", "jaundice", "muscle pain", "nausea", "vomiting", "fatigue", "bleeding"],
    },
    {
        disease: "Plague (Bubonic/Septicemic/Pneumonic)",
        symptoms: ["fever", "headache", "weakness", "painful lymph nodes", "pneumonia", "shortness of breath", "chest pain", "cough", "bloody sputum"],
    },
    {
        disease: "Anthrax",
        symptoms: ["skin ulcers with black center", "fever", "chest discomfort", "shortness of breath", "confusion", "nausea", "vomiting", "abdominal pain", "diarrhea"],
    },
    {
        disease: "Syphilis",
        symptoms: ["firm, round, painless sore", "skin rash", "fever", "sore throat", "swollen lymph nodes", "fatigue", "hair loss", "weight loss"],
    },
    {
        disease: "Gonorrhea",
        symptoms: ["painful urination", "abnormal discharge", "vaginal bleeding", "painful intercourse", "swollen testicles", "rectal pain", "sore throat"],
    },
    {
        disease: "Chlamydia",
        symptoms: ["abnormal discharge", "burning during urination", "testicular pain", "rectal pain", "vaginal bleeding", "pelvic pain"],
    },
    {
        disease: "Trichomoniasis",
        symptoms: ["abnormal discharge", "genital itching", "burning during urination", "discomfort during intercourse", "lower abdominal pain"],
    },
    {
        disease: "Herpes Simplex Virus (HSV)",
        symptoms: ["painful blisters", "ulcers", "pain during urination", "itching", "tingling", "flu-like symptoms", "swollen lymph nodes"],
    },
    {
        disease: "Human Papillomavirus (HPV)",
        symptoms: ["genital warts", "abnormal Pap test", "warts on hands and feet", "itching", "bleeding"],
    },
    {
        disease: "Bacterial Vaginosis",
        symptoms: ["abnormal discharge", "fishy odor", "itching", "burning during urination", "vaginal irritation"],
    },
    {
        disease: "Candidiasis (Yeast Infection)",
        symptoms: ["itching", "burning", "redness", "swelling", "thick white discharge", "pain during intercourse", "rash"],
    },
    {
        disease: "Urinary Tract Infection (UTI)",
        symptoms: ["burning during urination", "frequent urination", "cloudy urine", "strong-smelling urine", "pelvic pain", "fever", "fatigue"],
    },
    {
        disease: "Sepsis",
        symptoms: ["fever", "increased heart rate", "increased breathing rate", "confusion", "extreme pain", "shortness of breath", "clammy skin"],
    },
    {
        disease: "Cellulitis",
        symptoms: ["red area of skin", "swelling", "pain", "warmth", "fever", "red streaks", "skin dimpling", "blisters"],
    },
    {
        disease: "Abscess",
        symptoms: ["painful swelling", "redness", "warmth", "pus formation", "fever", "chills", "fatigue"],
    },
    {
        disease: "Osteomyelitis",
        symptoms: ["bone pain", "swelling", "redness", "warmth", "fever", "fatigue", "irritability", "drainage from area"],
    },
    {
        disease: "Endocarditis",
        symptoms: ["fever", "chills", "fatigue", "aching muscles", "night sweats", "shortness of breath", "chest pain", "swelling", "heart murmur"],
    },
    {
        disease: "Rheumatic Fever",
        symptoms: ["fever", "painful joints", "chest pain", "fatigue", "skin rash", "unusual movements", "heart murmur"],
    },
    {
        disease: "Lyme Disease",
        symptoms: ["bull's-eye rash", "fever", "chills", "fatigue", "body aches", "headache", "neck stiffness", "joint pain", "swollen lymph nodes"],
    },
    {
        disease: "Rocky Mountain Spotted Fever",
        symptoms: ["high fever", "headache", "rash", "muscle pain", "nausea", "vomiting", "abdominal pain", "confusion"],
    },
    {
        disease: "Leprosy (Hansen's Disease)",
        symptoms: ["skin lesions", "numbness", "muscle weakness", "eye problems", "enlarged nerves", "stuffy nose", "nosebleeds"],
    },
    {
        disease: "Cysticercosis",
        symptoms: ["headache", "seizures", "confusion", "difficulty with balance", "brain swelling", "vision problems"],
    },
    {
        disease: "Toxoplasmosis",
        symptoms: ["flu-like symptoms", "swollen lymph nodes", "muscle aches", "headache", "fever", "sore throat", "vision problems"],
    },
    {
        disease: "Filariasis",
        symptoms: ["lymphedema", "elephantiasis", "swelling of limbs", "pain", "bacterial infections", "fever", "chills"],
    },
    {
        disease: "Schistosomiasis",
        symptoms: ["rash", "itchy skin", "fever", "chills", "cough", "abdominal pain", "diarrhea", "bloody stool", "bloody urine"],
    },
    {
        disease: "Ascariasis",
        symptoms: ["abdominal discomfort", "intestinal blockage", "cough", "shortness of breath", "weight loss", "fatigue", "worms in stool"],
    },
    {
        disease: "Hookworm Infection",
        symptoms: ["abdominal pain", "diarrhea", "weight loss", "fatigue", "anemia", "rash", "itching"],
    },
    {
        disease: "Strongyloidiasis",
        symptoms: ["abdominal pain", "diarrhea", "rash", "cough", "wheezing", "weight loss", "nausea", "vomiting"],
    },
    {
        disease: "Trichuriasis",
        symptoms: ["abdominal pain", "diarrhea", "bloody stool", "rectal prolapse", "weight loss", "anemia", "growth retardation"],
    },
    {
        disease: "Taeniasis (Tapeworm)",
        symptoms: ["abdominal pain", "weight loss", "nausea", "diarrhea", "tapeworm segments in stool", "hunger", "weakness"],
    },
    {
        disease: "Echinococcosis",
        symptoms: ["abdominal pain", "nausea", "vomiting", "cough", "shortness of breath", "chest pain", "weakness", "cysts"],
    },
    {
        disease: "Hydatid Disease",
        symptoms: ["abdominal pain", "nausea", "vomiting", "cough", "chest pain", "weakness", "cysts", "jaundice"],
    },
    {
        disease: "Scabies",
        symptoms: ["intense itching", "rash", "sores", "thin irregular burrow tracks", "small bumps", "worsening at night"],
    },
    {
        disease: "Pediculosis (Lice Infestation)",
        symptoms: ["intense itching", "visible lice", "lice eggs on hair", "red bumps", "irritability", "difficulty sleeping"],
    },
    {
        disease: "Ringworm (Tinea)",
        symptoms: ["red circular rash", "itching", "scaly skin", "cracking skin", "hair loss", "blisters"],
    },
    {
        disease: "Athlete's Foot (Tinea Pedis)",
        symptoms: ["itching", "stinging", "burning", "cracked skin", "blisters", "dry skin", "peeling skin", "discolored nails"],
    },
    {
        disease: "Jock Itch (Tinea Cruris)",
        symptoms: ["itching", "burning", "redness", "flaking", "peeling", "cracking", "rash"],
    },
    {
        disease: "Onychomycosis (Nail Fungus)",
        symptoms: ["thickened nails", "discolored nails", "brittle nails", "distorted nails", "foul smell", "painful nails"],
    },
    {
        disease: "Impetigo",
        symptoms: ["red sores", "blisters", "oozing", "yellow crusting", "itching", "swollen lymph nodes"],
    },
    {
        disease: "Erysipelas",
        symptoms: ["red raised rash", "swelling", "pain", "blisters", "fever", "chills", "fatigue"],
    },
    {
        disease: "Boils (Furuncles)",
        symptoms: ["painful bump", "swelling", "redness", "pus-filled center", "fever", "fatigue", "swollen lymph nodes"],
    },
    {
        disease: "Carbuncles",
        symptoms: ["painful mass", "pus drainage", "fatigue", "fever", "chills", "feeling unwell", "swollen lymph nodes"],
    },
    {
        disease: "Acne Vulgaris",
        symptoms: ["pimples", "blackheads", "whiteheads", "papules", "pustules", "nodules", "scarring"],
    },
    {
        disease: "Psoriasis",
        symptoms: ["red patches", "silvery scales", "dry skin", "itching", "burning", "soreness", "swollen joints", "thick nails"],
    },
    {
        disease: "Eczema (Atopic Dermatitis)",
        symptoms: ["itching", "dry skin", "rash", "scaly skin", "redness", "raw skin", "swelling", "oozing"],
    },
    {
        disease: "Contact Dermatitis",
        symptoms: ["rash", "itching", "redness", "swelling", "blisters", "burning", "tenderness"],
    },
    {
        disease: "Urticaria (Hives)",
        symptoms: ["raised welts", "itching", "redness", "swelling", "burning", "stinging"],
    },
    {
        disease: "Rosacea",
        symptoms: ["facial redness", "swollen red bumps", "eye problems", "enlarged nose", "burning sensation", "visible blood vessels"],
    },
    {
        disease: "Vitiligo",
        symptoms: ["patchy loss of skin color", "premature whitening of hair", "loss of color inside mouth", "eye color change"],
    },
    {
        disease: "Alopecia Areata",
        symptoms: ["patchy hair loss", "nail pitting", "nail ridging", "nail brittleness", "exclamation mark hairs"],
    },
    {
        disease: "Seborrheic Dermatitis",
        symptoms: ["red skin", "scaly patches", "dandruff", "itching", "greasy skin", "burning", "hair loss"],
    },
    {
        disease: "Systemic Lupus Erythematosus (Lupus)",
        symptoms: ["fatigue", "fever", "joint pain", "butterfly rash", "skin lesions", "shortness of breath", "chest pain", "headaches", "memory loss"],
    },
    {
        disease: "Rheumatoid Arthritis",
        symptoms: ["joint pain", "joint swelling", "joint stiffness", "fatigue", "fever", "weight loss", "weakness"],
    },
    {
        disease: "Osteoarthritis",
        symptoms: ["joint pain", "joint stiffness", "tenderness", "loss of flexibility", "grating sensation", "bone spurs", "swelling"],
    },
    {
        disease: "Gout",
        symptoms: ["severe joint pain", "swelling", "redness", "warmth", "limited range of motion", "inflammation", "lingering discomfort"],
    },
    {
        disease: "Ankylosing Spondylitis",
        symptoms: ["back pain", "stiffness", "fatigue", "neck pain", "loss of appetite", "weight loss", "eye inflammation"],
    },
    {
        disease: "Fibromyalgia",
        symptoms: ["widespread pain", "fatigue", "cognitive difficulties", "sleep problems", "headaches", "depression", "abdominal pain"],
    },
    {
        disease: "Scleroderma",
        symptoms: ["hardening of skin", "skin thickening", "Raynaud's phenomenon", "digestive problems", "finger ulcers", "joint pain", "shortness of breath"],
    },
    {
        disease: "Polymyalgia Rheumatica",
        symptoms: ["shoulder pain", "hip pain", "neck pain", "morning stiffness", "fatigue", "fever", "weight loss"],
    },
    {
        disease: "Sjögren's Syndrome",
        symptoms: ["dry eyes", "dry mouth", "fatigue", "joint pain", "swollen salivary glands", "skin rashes", "vaginal dryness"],
    },
    {
        disease: "Diabetes Mellitus (Type 1 and 2)",
        symptoms: ["increased thirst", "frequent urination", "extreme hunger", "unexplained weight loss", "fatigue", "blurred vision", "slow-healing sores"],
    },
    {
        disease: "Hypoglycemia",
        symptoms: ["shakiness", "dizziness", "sweating", "hunger", "irritability", "anxiety", "fatigue", "headache", "confusion"],
    },
    {
        disease: "Hyperthyroidism",
        symptoms: ["weight loss", "rapid heartbeat", "increased appetite", "nervousness", "tremors", "sweating", "fatigue", "heat sensitivity"],
    },
    {
        disease: "Hypothyroidism",
        symptoms: ["fatigue", "weight gain", "cold sensitivity", "constipation", "dry skin", "hair loss", "depression", "muscle weakness"],
    },
    {
        disease: "Thyroiditis",
        symptoms: ["neck pain", "fatigue", "fever", "sore throat", "depression", "weight changes", "heart palpitations"],
    },
    {
        disease: "Goiter",
        symptoms: ["neck swelling", "tight feeling in throat", "coughing", "hoarseness", "difficulty swallowing", "difficulty breathing"],
    },
    {
        disease: "Addison's Disease",
        symptoms: ["fatigue", "weight loss", "darkening of skin", "low blood pressure", "salt craving", "low blood sugar", "nausea", "diarrhea"],
    },
    {
        disease: "Cushing's Syndrome",
        symptoms: ["weight gain", "fatty deposits", "purple stretch marks", "thinning skin", "bruising", "fatigue", "high blood pressure"],
    },
    {
        disease: "Pheochromocytoma",
        symptoms: ["high blood pressure", "headache", "sweating", "racing heart", "anxiety", "tremors", "pallor", "weight loss"],
    },
    {
        disease: "Obesity",
        symptoms: ["excess body fat", "high BMI", "increased waist circumference", "shortness of breath", "joint pain", "sleep problems", "fatigue"],
    },
    {
        disease: "Metabolic Syndrome",
        symptoms: ["high blood pressure", "high blood sugar", "excess abdominal fat", "abnormal cholesterol", "fatigue", "blurry vision"],
    },
    {
        disease: "Hypertension (High Blood Pressure)",
        symptoms: ["headache", "shortness of breath", "nosebleeds", "flushing", "dizziness", "chest pain", "visual changes"],
    },
    {
        disease: "Hypotension (Low Blood Pressure)",
        symptoms: ["dizziness", "lightheadedness", "fainting", "fatigue", "blurred vision", "nausea", "cold skin", "depression"],
    },
    {
        disease: "Coronary Artery Disease",
        symptoms: ["chest pain", "shortness of breath", "pain in arms", "nausea", "sweating", "dizziness", "heart palpitations", "fatigue"],
    },
    {
        disease: "Myocardial Infarction (Heart Attack)",
        symptoms: ["chest pain", "pressure in chest", "pain in arms/shoulder/jaw", "shortness of breath", "cold sweat", "nausea", "fatigue", "dizziness"],
    },
    {
        disease: "Heart Failure",
        symptoms: ["shortness of breath", "fatigue", "swelling in legs", "rapid heartbeat", "persistent cough", "reduced exercise capability", "weight gain"],
    },
    {
        disease: "Arrhythmia",
        symptoms: ["palpitations", "racing heartbeat", "slow heartbeat", "chest pain", "shortness of breath", "dizziness", "fainting", "anxiety"],
    },
    {
        disease: "Atrial Fibrillation",
        symptoms: ["palpitations", "weakness", "reduced exercise capability", "fatigue", "lightheadedness", "shortness of breath", "chest pain"],
    },
    {
        disease: "Cardiomyopathy",
        symptoms: ["shortness of breath", "swelling of legs", "bloating", "cough", "fatigue", "dizziness", "palpitations", "chest pain"],
    },
    {
        disease: "Pericarditis",
        symptoms: ["sharp chest pain", "pain with breathing", "fever", "weakness", "cough", "swelling in legs", "fatigue", "heart palpitations"],
    },
    {
        disease: "Endocarditis",
        symptoms: ["fever", "chills", "fatigue", "aching muscles", "night sweats", "shortness of breath", "chest pain", "swelling", "heart murmur"],
    },
    {
        disease: "Stroke (Ischemic/Hemorrhagic)",
        symptoms: ["sudden numbness", "confusion", "trouble speaking", "vision problems", "dizziness", "severe headache", "walking difficulty"],
    },
    {
        disease: "Transient Ischemic Attack (TIA)",
        symptoms: ["temporary numbness", "weakness", "slurred speech", "vision changes", "dizziness", "confusion", "balance issues"],
    },
    {
        disease: "Peripheral Artery Disease",
        symptoms: ["leg pain", "cramping", "numbness", "weakness", "coldness in limbs", "shiny skin on legs", "weak pulse", "erectile dysfunction"],
    },
    {
        disease: "Deep Vein Thrombosis (DVT)",
        symptoms: ["leg swelling", "leg pain", "warm skin", "red or discolored skin", "visible veins", "tenderness"],
    },
    {
        disease: "Pulmonary Embolism",
        symptoms: ["shortness of breath", "chest pain", "cough", "leg pain", "swelling", "dizziness", "increased heart rate", "excessive sweating"],
    },
    {
        disease: "Varicose Veins",
        symptoms: ["twisted veins", "pain", "burning", "muscle cramping", "swelling", "itching", "skin discoloration"],
    },
    {
        disease: "Chronic Obstructive Pulmonary Disease (COPD)",
        symptoms: ["shortness of breath", "wheezing", "chest tightness", "chronic cough", "blue lips or fingernails", "fatigue", "swelling in legs"],
    },
    {
        disease: "Asthma",
        symptoms: ["shortness of breath", "chest tightness", "wheezing", "coughing", "trouble sleeping", "fatigue"],
    },
    {
        disease: "Emphysema",
        symptoms: ["shortness of breath", "chronic cough", "wheezing", "reduced appetite", "weight loss", "fatigue", "depression"],
    },
    {
        disease: "Chronic Bronchitis",
        symptoms: ["persistent cough", "mucus production", "wheezing", "chest discomfort", "shortness of breath", "fatigue", "fever"],
    },
    {
        disease: "Pulmonary Fibrosis",
        symptoms: ["shortness of breath", "dry cough", "fatigue", "weight loss", "aching muscles", "clubbing of fingertips", "chest pain"],
    },
    {
        disease: "Sleep Apnea",
        symptoms: ["loud snoring", "gasping during sleep", "morning headache", "insomnia", "excessive daytime sleepiness", "attention problems", "irritability"],
    },
    {
        disease: "Lung Cancer",
        symptoms: ["persistent cough", "coughing up blood", "chest pain", "hoarseness", "weight loss", "bone pain", "headache", "shortness of breath"],
    },
    {
        disease: "Breast Cancer",
        symptoms: ["breast lump", "breast pain", "nipple discharge", "nipple inversion", "skin changes", "swelling", "redness", "peeling"],
    },
];

// Medication Database
const medicationDatabase = [
    {
        name: "Ibuprofen",
        description: "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation.",
        sideEffects: "May cause stomach pain, heartburn, dizziness, or mild headache.",
        dosage: "Usually 200-400mg every 4-6 hours as needed.",
        warnings: "Consult doctor before use if you have heart disease, high blood pressure, or stomach problems."
    },
    {
        name: "Paracetamol",
        description: "Pain reliever and fever reducer. Commonly used for headaches, muscle aches, arthritis, and fevers.",
        sideEffects: "Generally well-tolerated when taken as directed.",
        dosage: "500-1000mg every 4-6 hours as needed, not exceeding 4000mg per day.",
        warnings: "Avoid alcohol use. Can cause liver damage if taken in excess."
    },
    {
        name: "Amoxicillin",
        description: "An antibiotic used to treat various bacterial infections.",
        sideEffects: "May cause diarrhea, nausea, and rash.",
        dosage: "Dosage varies by condition. Take exactly as prescribed.",
        warnings: "Complete full course as prescribed. May reduce effectiveness of birth control pills."
    },
    {
        name: "Loratadine",
        description: "Antihistamine that reduces the effects of natural chemical histamine in the body. Used for allergies.",
        sideEffects: "May cause headache, drowsiness, and dry mouth.",
        dosage: "Usually 10mg once daily.",
        warnings: "Non-drowsy but may still affect alertness in some people."
    },
    {
        name: "Omeprazole",
        description: "Reduces stomach acid production. Used for heartburn and acid reflux.",
        sideEffects: "May cause headache, stomach pain, and nausea.",
        dosage: "Usually 20mg once daily before a meal.",
        warnings: "Long-term use may increase risk of certain health conditions."
    },
    {
        name: "Atorvastatin",
        description: "A statin medication used to lower blood cholesterol and reduce risk of cardiovascular disease.",
        sideEffects: "May cause muscle pain, digestive issues, and elevated liver enzymes.",
        dosage: "Usually 10-80mg once daily, preferably in the evening.",
        warnings: "Tell your doctor about all medications you take; many interactions possible. Avoid grapefruit products."
    },
    {
        name: "Levothyroxine",
        description: "Synthetic thyroid hormone used to treat hypothyroidism and thyroid hormone deficiency.",
        sideEffects: "When properly dosed, side effects are minimal. Overdose may cause heart palpitations and anxiety.",
        dosage: "Individualized dosing based on blood tests, typically taken once daily on an empty stomach.",
        warnings: "Take at the same time each day. Don't take with calcium, iron supplements, or certain antacids."
    },
    {
        name: "Lisinopril",
        description: "ACE inhibitor used to treat high blood pressure and heart failure.",
        sideEffects: "May cause dry cough, dizziness, headache, and fatigue.",
        dosage: "Usually 5-40mg once daily.",
        warnings: "May cause harm to unborn babies. Monitor for swelling of face, lips, or tongue requiring emergency care."
    },
    {
        name: "Metformin",
        description: "First-line medication for type 2 diabetes that improves insulin sensitivity.",
        sideEffects: "May cause digestive issues, metallic taste, and vitamin B12 deficiency with long-term use.",
        dosage: "Usually 500-1000mg twice daily with meals.",
        warnings: "Avoid alcohol. Rare but serious side effect is lactic acidosis, especially with kidney problems."
    },
    {
        name: "Amlodipine",
        description: "Calcium channel blocker used to treat high blood pressure and coronary artery disease.",
        sideEffects: "May cause swelling in ankles and feet, headache, and flushing.",
        dosage: "Usually 2.5-10mg once daily.",
        warnings: "Do not abruptly stop taking this medication. May interact with grapefruit products."
    },
    {
        name: "Metoprolol",
        description: "Beta-blocker used to treat high blood pressure, angina, and heart failure.",
        sideEffects: "May cause fatigue, dizziness, and decreased exercise capacity.",
        dosage: "25-100mg twice daily for immediate-release; 50-400mg once daily for extended-release.",
        warnings: "Don't stop taking suddenly. May mask symptoms of low blood sugar in diabetics."
    },
    {
        name: "Simvastatin",
        description: "Statin medication used to lower cholesterol and prevent cardiovascular disease.",
        sideEffects: "May cause muscle pain, liver problems, and digestive issues.",
        dosage: "Usually 5-40mg once daily in the evening.",
        warnings: "Avoid grapefruit products. Increased risk of muscle problems when taken with certain medications."
    },
    {
        name: "Losartan",
        description: "Angiotensin II receptor blocker used to treat high blood pressure and protect kidneys in diabetes.",
        sideEffects: "May cause dizziness, back pain, and upper respiratory infections.",
        dosage: "Usually 25-100mg once daily.",
        warnings: "May cause harm to unborn babies. May cause elevated potassium levels."
    },
    {
        name: "Albuterol",
        description: "Bronchodilator that relaxes muscles in the airways to improve breathing.",
        sideEffects: "May cause nervousness, shaking, headache, and rapid heartbeat.",
        dosage: "For inhalers: 1-2 puffs every 4-6 hours as needed.",
        warnings: "Overuse can lead to decreased effectiveness and increased side effects."
    },
    {
        name: "Gabapentin",
        description: "Anticonvulsant and nerve pain medication used for seizures and neuropathic pain.",
        sideEffects: "May cause dizziness, drowsiness, and coordination problems.",
        dosage: "Usually 300-600mg three times daily, but varies by condition.",
        warnings: "Don't stop suddenly. May impair thinking and reactions."
    },
    {
        name: "Hydrochlorothiazide",
        description: "Diuretic (water pill) used to treat high blood pressure and fluid retention.",
        sideEffects: "May cause increased urination, electrolyte imbalances, and photosensitivity.",
        dosage: "Usually 12.5-50mg once daily.",
        warnings: "May affect blood sugar levels. Can increase sun sensitivity."
    },
    {
        name: "Sertraline",
        description: "Selective serotonin reuptake inhibitor (SSRI) antidepressant used for depression and anxiety disorders.",
        sideEffects: "May cause nausea, diarrhea, insomnia, and sexual dysfunction.",
        dosage: "Usually 50-200mg once daily, often taken with food.",
        warnings: "May increase risk of suicidal thoughts in young adults. Don't combine with MAOIs."
    },
    {
        name: "Acetaminophen",
        description: "Pain reliever and fever reducer with less gastrointestinal effects than NSAIDs.",
        sideEffects: "Minimal when taken as directed. Excessive use can cause liver damage.",
        dosage: "325-1000mg every 4-6 hours as needed, not exceeding 4000mg per day.",
        warnings: "Present in many combination products. Track total daily intake to avoid overdose."
    },
    {
        name: "Aspirin",
        description: "NSAID with anti-inflammatory, analgesic, and antiplatelet effects.",
        sideEffects: "May cause stomach irritation, heartburn, and increased bleeding risk.",
        dosage: "325-650mg every 4-6 hours for pain/fever; 81-325mg daily for heart protection.",
        warnings: "Not recommended for children due to risk of Reye's syndrome. Increased bleeding risk."
    },
    {
        name: "Azithromycin",
        description: "Macrolide antibiotic used to treat various bacterial infections.",
        sideEffects: "May cause diarrhea, nausea, abdominal pain, and headache.",
        dosage: "Typically 500mg on day 1, then 250mg daily for 4 days.",
        warnings: "May cause QT interval prolongation in people with heart rhythm disorders."
    },
    {
        name: "Fluoxetine",
        description: "SSRI antidepressant used for depression, OCD, bulimia, and panic disorder.",
        sideEffects: "May cause nausea, insomnia, headache, and sexual dysfunction.",
        dosage: "Usually 20mg once daily in the morning, may be adjusted based on response.",
        warnings: "May increase risk of suicidal thoughts in young adults. Long half-life affects drug interactions."
    },
    {
        name: "Pantoprazole",
        description: "Proton pump inhibitor used to reduce stomach acid in GERD and ulcers.",
        sideEffects: "May cause headache, diarrhea, nausea, and stomach pain.",
        dosage: "Usually 40mg once daily.",
        warnings: "Long-term use may increase risk of bone fractures and certain infections."
    },
    {
        name: "Furosemide",
        description: "Loop diuretic used to treat fluid retention and edema in heart failure, liver disease, and kidney disease.",
        sideEffects: "May cause increased urination, electrolyte imbalances, and dehydration.",
        dosage: "20-80mg once or twice daily, often taken in the morning.",
        warnings: "Can cause excessive fluid and electrolyte loss. Regular monitoring advised."
    },
    {
        name: "Escitalopram",
        description: "SSRI antidepressant used for major depressive disorder and generalized anxiety disorder.",
        sideEffects: "May cause nausea, insomnia, sexual dysfunction, and dizziness.",
        dosage: "Usually 10-20mg once daily.",
        warnings: "May increase risk of suicidal thoughts in young adults. Don't combine with MAOIs."
    },
    {
        name: "Montelukast",
        description: "Leukotriene receptor antagonist used to prevent asthma attacks and treat allergies.",
        sideEffects: "May cause headache, digestive issues, and rarely, neuropsychiatric events.",
        dosage: "10mg once daily in the evening for adults.",
        warnings: "May cause mood changes or behavioral issues. Report any mental health changes to doctor."
    },
    {
        name: "Rosuvastatin",
        description: "Potent statin medication used to lower cholesterol and prevent cardiovascular disease.",
        sideEffects: "May cause muscle pain, constipation, and rarely liver problems.",
        dosage: "Usually 5-40mg once daily.",
        warnings: "Asian patients may need lower doses. May interact with certain medications."
    },
    {
        name: "Bupropion",
        description: "Atypical antidepressant also used for smoking cessation and seasonal affective disorder.",
        sideEffects: "May cause dry mouth, insomnia, headache, and agitation.",
        dosage: "Usually 150-300mg daily, often divided into multiple doses.",
        warnings: "May lower seizure threshold. Avoid in patients with seizure disorders or eating disorders."
    },
    {
        name: "Tramadol",
        description: "Synthetic opioid-like pain reliever for moderate to moderately severe pain.",
        sideEffects: "May cause dizziness, constipation, nausea, and headache.",
        dosage: "Usually 50-100mg every 4-6 hours, not exceeding 400mg daily.",
        warnings: "Can cause physical dependence. Risk of serotonin syndrome when combined with certain medications."
    },
    {
        name: "Citalopram",
        description: "SSRI antidepressant used for depression and sometimes off-label for anxiety disorders.",
        sideEffects: "May cause nausea, dry mouth, drowsiness, and sexual dysfunction.",
        dosage: "Usually 20-40mg once daily.",
        warnings: "Higher doses increase risk of QT interval prolongation. Maximum dose is 40mg daily."
    },
    {
        name: "Prednisone",
        description: "Corticosteroid used to reduce inflammation and suppress the immune system.",
        sideEffects: "May cause weight gain, mood changes, increased blood sugar, and insomnia.",
        dosage: "Highly variable based on condition; follow prescribed dosing schedule closely.",
        warnings: "Don't stop suddenly after long-term use. Take with food to reduce stomach irritation."
    },
    {
        name: "Carvedilol",
        description: "Alpha/beta-blocker used for heart failure, high blood pressure, and after heart attacks.",
        sideEffects: "May cause dizziness, fatigue, low blood pressure, and weight gain.",
        dosage: "Usually starting at 3.125-6.25mg twice daily, gradually increased as tolerated.",
        warnings: "Don't stop suddenly. May mask symptoms of low blood sugar in diabetics."
    }
];

// Export the databases for use in the main application
window.symptomDatabase = symptomDatabase;
window.medicationDatabase = medicationDatabase; 