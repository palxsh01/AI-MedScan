// Symptom and Disease Database
const symptomDatabase = [
    {
        disease: "Influenza (Flu)",
        description: "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs. It spreads through respiratory droplets and can range from mild to severe, sometimes requiring medical attention, especially in high-risk groups.",
        symptoms: ["fever", "chills", "body aches", "fatigue", "cough", "sore throat", "runny nose", "headache", "vomiting", "diarrhea"],
    },
    {
        disease: "Tuberculosis (TB)",
        description: "A bacterial infection caused by Mycobacterium tuberculosis that primarily affects the lungs but can affect other parts of the body. It spreads through the air when infected individuals cough or sneeze and can remain dormant for years before becoming active.",
        symptoms: ["persistent cough", "coughing up blood", "chest pain", "weight loss", "fatigue", "fever", "night sweats", "loss of appetite"],
    },
    {
        disease: "Malaria",
        description: "A serious illness caused by Plasmodium parasites transmitted to humans through the bites of infected female Anopheles mosquitoes. It's preventable and curable but requires prompt medical attention. It remains a major global health concern in tropical and subtropical regions.",
        symptoms: ["fever", "chills", "sweating", "headache", "nausea", "vomiting", "muscle pain", "fatigue", "chest pain", "abdominal pain"],
    },
    {
        disease: "HIV/AIDS",
        description: "Human Immunodeficiency Virus (HIV) affects the immune system, potentially leading to Acquired Immunodeficiency Syndrome (AIDS) if untreated. It spreads through certain body fluids and gradually impacts the immune system's ability to fight infections and diseases.",
        symptoms: ["fever", "fatigue", "swollen lymph nodes", "sore throat", "rash", "night sweats", "muscle aches", "mouth ulcers", "weight loss"],
    },
    {
        disease: "Hepatitis A",
        description: "A highly contagious liver infection caused by the hepatitis A virus, spreading through contaminated food, water, or close contact with infected individuals. Unlike other forms of viral hepatitis, it doesn't cause chronic liver disease and is usually self-resolving.",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "dark urine", "jaundice", "joint pain", "fever"],
    },
    {
        disease: "Hepatitis B",
        description: "A serious viral infection affecting the liver, transmitted through blood and body fluids. It can cause both acute and chronic disease, potentially leading to long-term liver complications in chronically infected individuals.",
        symptoms: ["fatigue", "nausea", "vomiting", "abdominal pain", "loss of appetite", "dark urine", "jaundice", "joint pain", "fever"],
    },
    {
        disease: "Hepatitis C",
        description: "A blood-borne viral infection that causes liver inflammation and damage. It often becomes chronic, potentially leading to serious liver problems if left untreated. Many people with hepatitis C don't know they're infected until liver changes become apparent.",
        symptoms: ["fatigue", "jaundice", "abdominal pain", "loss of appetite", "nausea", "dark urine", "joint pain", "depression"],
    },
    {
        disease: "Dengue Fever",
        description: "A mosquito-borne viral disease that has rapidly spread globally in recent decades. It's transmitted by female Aedes mosquitoes and causes flu-like symptoms that can develop into severe dengue requiring immediate medical care.",
        symptoms: ["high fever", "severe headache", "pain behind the eyes", "joint and muscle pain", "rash", "mild bleeding", "fatigue", "nausea", "vomiting"],
    },
    {
        disease: "Chikungunya",
        description: "A viral disease transmitted to humans by infected mosquitoes, characterized by sudden onset of fever and severe joint pain. While usually resolving with appropriate care, the joint pain can persist for months or years, affecting quality of life.",
        symptoms: ["fever", "joint pain", "muscle pain", "headache", "fatigue", "rash", "nausea", "conjunctivitis"],
    },
    {
        disease: "Measles",
        description: "A highly contagious viral disease that spreads through respiratory droplets. Once common in childhood, it can cause complications including pneumonia and encephalitis. Vaccination has significantly reduced its prevalence worldwide.",
        symptoms: ["high fever", "cough", "runny nose", "red eyes", "white spots inside mouth", "rash", "fatigue", "sore throat"],
    },
    {
        disease: "Mumps",
        description: "A contagious viral infection that primarily affects the salivary glands, causing characteristic swelling. While usually mild in children, it can cause more noticeable complications in adults, including testicular inflammation and hearing changes.",
        symptoms: ["swollen salivary glands", "fever", "headache", "muscle aches", "fatigue", "loss of appetite", "pain while chewing"],
    },
    {
        disease: "Rubella",
        description: "Also known as German measles, it's a contagious viral infection identified by its distinctive red rash. It's usually mild but requires special attention if contracted by pregnant women in the first trimester due to potential effects on the developing baby.",
        symptoms: ["mild fever", "headache", "runny nose", "red eyes", "rash", "swollen lymph nodes", "joint pain"],
    },
    {
        disease: "Chickenpox (Varicella)",
        description: "A highly contagious viral infection causing an itchy rash with fluid-filled blisters. It mostly affects children but can be more pronounced in adults. The virus can reactivate later in life as shingles.",
        symptoms: ["rash", "itchy blisters", "fever", "fatigue", "headache", "loss of appetite"],
    },
    {
        disease: "Shingles (Herpes Zoster)",
        description: "A viral infection causing a painful rash, resulting from reactivation of the varicella-zoster virus that causes chickenpox. It typically appears as a band of blisters wrapping around one side of the torso but can occur anywhere on the body.",
        symptoms: ["painful rash", "blisters", "itching", "tingling", "burning sensation", "fever", "headache", "fatigue"],
    },
    {
        disease: "Pneumonia",
        description: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid. It can be caused by various pathogens including bacteria, viruses, and fungi, and ranges from mild to requiring urgent medical care.",
        symptoms: ["cough with phlegm", "fever", "chills", "shortness of breath", "chest pain", "fatigue", "nausea", "vomiting", "confusion"],
    },
    {
        disease: "Bronchitis",
        description: "Inflammation of the bronchial tubes that carry air to and from the lungs. It can be acute (short-term) or chronic (long-term) and is often caused by viral infections or irritants like cigarette smoke.",
        symptoms: ["cough with mucus", "shortness of breath", "wheezing", "chest discomfort", "fever", "fatigue"],
    },
    {
        disease: "Common Cold",
        description: "A viral infection of the upper respiratory tract affecting the nose and throat. It's generally harmless and self-limiting, though symptoms can be uncomfortable. Adults average 2-3 colds per year, while children often have more.",
        symptoms: ["runny nose", "sneezing", "congestion", "sore throat", "cough", "mild headache", "watery eyes", "mild fatigue"],
    },
    {
        disease: "Sinusitis",
        description: "Inflammation of the sinuses, typically caused by viral, bacterial, or fungal infections. It can be acute or chronic and results in obstruction of the sinus passages, leading to mucus build-up and discomfort.",
        symptoms: ["facial pain", "nasal congestion", "thick nasal discharge", "reduced sense of smell", "cough", "fatigue", "headache"],
    },
    {
        disease: "Otitis Media (Ear Infection)",
        description: "An infection of the middle ear, often caused by bacteria or viruses. It's common in children due to their shorter and more horizontal eustachian tubes, making fluid drainage more difficult.",
        symptoms: ["ear pain", "difficulty hearing", "fluid drainage from ear", "fever", "irritability", "trouble sleeping"],
    },
    {
        disease: "Strep Throat",
        description: "A bacterial infection affecting the throat and tonsils, caused by group A Streptococcus. It's highly contagious through respiratory droplets and direct contact, and requires antibiotic treatment to prevent complications.",
        symptoms: ["severe sore throat", "painful swallowing", "fever", "red and swollen tonsils", "white patches on tonsils", "swollen lymph nodes", "headache"],
    },
    {
        disease: "Scarlet Fever",
        description: "A bacterial infection that develops in some people who have strep throat, characterized by a distinctive bright red rash. It's caused by group A Streptococcus bacteria releasing toxins and requires antibiotic treatment.",
        symptoms: ["red rash", "sore throat", "fever", "red tongue", "skin peeling", "headache", "nausea", "vomiting"],
    },
    {
        disease: "Whooping Cough (Pertussis)",
        description: "A highly contagious bacterial respiratory infection characterized by severe coughing fits followed by a high-pitched intake of breath that sounds like 'whoop.' It requires prompt medical attention, especially for infants and young children.",
        symptoms: ["severe coughing fits", "whooping sound", "vomiting after coughing", "fatigue", "runny nose", "low-grade fever"],
    },
    {
        disease: "Diphtheria",
        description: "A serious bacterial infection affecting the mucous membranes of the nose and throat, creating a thick gray covering that can affect breathing. Once a major cause of illness, it's now rare in developed countries due to vaccination.",
        symptoms: ["sore throat", "swollen glands", "fever", "weakness", "thick gray covering in throat", "difficulty breathing"],
    },
    {
        disease: "Tetanus",
        description: "A serious bacterial infection affecting the nervous system, causing painful muscle contractions, particularly of the jaw and neck muscles. It enters the body through breaks in the skin and is preventable through vaccination.",
        symptoms: ["jaw cramping", "muscle spasms", "stiff muscles", "difficulty swallowing", "fever", "sweating", "high blood pressure"],
    },
    {
        disease: "Polio",
        description: "A highly infectious viral disease that affects the nervous system and can cause muscle weakness. It mainly affects children under five and has been nearly eradicated globally through vaccination efforts.",
        symptoms: ["fever", "sore throat", "headache", "vomiting", "fatigue", "meningitis", "paralysis", "muscle weakness"],
    },
    {
        disease: "Rabies",
        description: "A viral disease affecting the central nervous system, transmitted through the saliva of infected animals, typically via a bite. It requires immediate medical attention after potential exposure, as preventive treatment is essential.",
        symptoms: ["fever", "headache", "anxiety", "confusion", "agitation", "hallucinations", "paralysis", "difficulty swallowing", "hydrophobia"],
    },
    {
        disease: "Meningitis (Bacterial/Viral)",
        description: "Inflammation of the membranes (meninges) surrounding the brain and spinal cord. Bacterial meningitis requires urgent medical care, while viral meningitis is usually less severe and resolves without specific treatment.",
        symptoms: ["sudden high fever", "stiff neck", "severe headache", "confusion", "sensitivity to light", "nausea", "vomiting", "seizures", "rash"],
    },
    {
        disease: "Encephalitis",
        description: "Inflammation of the brain tissue, usually caused by viral infections. It requires prompt medical attention as it can affect brain function. The severity and outcomes depend on early diagnosis and treatment.",
        symptoms: ["headache", "fever", "confusion", "seizures", "stiff neck", "sensitivity to light", "drowsiness", "fatigue", "weakness"],
    },
    {
        disease: "Hand, Foot, and Mouth Disease",
        description: "A common viral infection affecting mostly children under 5 years old, characterized by sores in the mouth and a rash on the hands and feet. It's generally mild and self-limiting, typically resolving within 7-10 days.",
        symptoms: ["fever", "sore throat", "painful blisters on mouth", "rash on hands and feet", "loss of appetite", "irritability"],
    },
    {
        disease: "Norovirus Infection",
        description: "A highly contagious viral infection causing inflammation of the stomach and intestines, leading to gastroenteritis. It's a common cause of foodborne illness outbreaks in closed environments like cruise ships and nursing homes.",
        symptoms: ["nausea", "vomiting", "diarrhea", "stomach pain", "fever", "headache", "body aches"],
    },
    {
        disease: "Rotavirus Infection",
        description: "A highly contagious virus causing severe diarrhea primarily in infants and young children. Vaccination has significantly reduced its incidence. Prompt attention to hydration is important during infection.",
        symptoms: ["severe watery diarrhea", "vomiting", "fever", "abdominal pain", "dehydration"],
    },
    {
        disease: "Salmonellosis",
        description: "A foodborne bacterial infection affecting the intestinal tract, typically caused by consuming contaminated food or water. Most people recover without specific treatment, but it can require medical attention in certain populations.",
        symptoms: ["diarrhea", "fever", "abdominal cramps", "vomiting", "nausea", "headache", "muscle pains"],
    },
    {
        disease: "Shigellosis",
        description: "A bacterial infection affecting the intestinal tract, caused by Shigella bacteria. It's highly contagious and spread through contaminated food or water, or person-to-person contact.",
        symptoms: ["diarrhea with blood and mucus", "abdominal pain", "fever", "tenesmus", "nausea", "vomiting"],
    },
    {
        disease: "Typhoid Fever",
        description: "A bacterial infection caused by Salmonella typhi, spread through contaminated food and water or close contact with an infected person. It's characterized by sustained high fever and requires proper medical treatment.",
        symptoms: ["prolonged high fever", "headache", "abdominal pain", "constipation or diarrhea", "rose-colored spots", "lethargy", "weakness"],
    },
    {
        disease: "Cholera",
        description: "An acute diarrheal infection caused by ingestion of food or water contaminated with the bacterium Vibrio cholerae. It can cause severe dehydration requiring immediate medical attention, but is effectively treated with prompt rehydration.",
        symptoms: ["profuse watery diarrhea", "vomiting", "leg cramps", "dehydration", "shock", "low blood pressure"],
    },
    {
        disease: "Giardiasis",
        description: "A parasitic intestinal infection caused by microscopic Giardia parasites. It spreads through contaminated water, food, or person-to-person contact and can cause digestive issues lasting weeks if untreated.",
        symptoms: ["diarrhea", "abdominal pain", "bloating", "nausea", "vomiting", "fatigue", "weight loss"],
    },
    {
        disease: "Amoebiasis",
        description: "An intestinal infection caused by the parasite Entamoeba histolytica. It's transmitted through contaminated food or water and can cause digestive symptoms requiring medical attention.",
        symptoms: ["bloody diarrhea", "abdominal cramps", "fatigue", "weight loss", "fever", "intestinal ulcers"],
    },
    {
        disease: "Leptospirosis",
        description: "A bacterial disease that affects humans and animals, spread through contact with urine from infected animals or contaminated water, soil, or food. Early treatment with antibiotics is important for better outcomes.",
        symptoms: ["fever", "chills", "headache", "muscle aches", "vomiting", "jaundice", "red eyes", "abdominal pain", "rash"],
    },
    {
        disease: "Legionnaires' Disease",
        description: "A type of pneumonia caused by Legionella bacteria, typically spread through aerosolized water containing the bacteria. It requires antibiotic treatment and can be more concerning for people with weakened immune systems.",
        symptoms: ["cough", "shortness of breath", "high fever", "muscle aches", "headache", "chills", "chest pain", "confusion"],
    },
    {
        disease: "MRSA Infection",
        description: "A type of staph infection that's resistant to many antibiotics, caused by methicillin-resistant Staphylococcus aureus bacteria. It often begins as skin infections and requires proper medical management.",
        symptoms: ["skin infection", "swelling", "pain", "warmth", "pus drainage", "fever", "rash", "fatigue"],
    },
    {
        disease: "Carbapenem-Resistant Organisms (CROs)",
        description: "Bacteria that are resistant to carbapenem antibiotics, a powerful class of medications. These infections require specialized medical attention and alternative treatment approaches.",
        symptoms: ["fever", "shortness of breath", "urinary symptoms", "wound drainage", "pain", "redness", "swelling"],
    },
    {
        disease: "Avian Influenza (Bird Flu)",
        description: "A type of influenza that primarily affects birds but can occasionally infect humans through close contact with infected birds. Human cases require prompt medical evaluation and monitoring.",
        symptoms: ["fever", "cough", "sore throat", "muscle aches", "pneumonia", "respiratory distress", "eye infections", "severe respiratory symptoms"],
    },
    {
        disease: "Hantavirus",
        description: "A viral illness usually spread by rodents, particularly through their urine and droppings. Early medical attention is important as the infection can progress rapidly.",
        symptoms: ["fatigue", "fever", "muscle aches", "headache", "dizziness", "chills", "abdominal pain", "vomiting", "diarrhea", "respiratory distress"],
    },
    {
        disease: "West Nile Virus",
        description: "A mosquito-borne disease that can cause neurological complications in some cases. Most people infected experience mild or no symptoms, but older adults and those with certain medical conditions may need closer monitoring.",
        symptoms: ["fever", "headache", "body aches", "joint pain", "vomiting", "diarrhea", "rash", "fatigue", "weakness"],
    },
    {
        disease: "Zika Virus",
        description: "A mosquito-borne flavivirus primarily transmitted by Aedes mosquitoes. While often mild in adults, it requires special attention during pregnancy due to potential effects on fetal development.",
        symptoms: ["fever", "rash", "joint pain", "conjunctivitis", "muscle pain", "headache", "eye pain"],
    },
    {
        disease: "Ebola Virus Disease",
        description: "A rare but serious viral infection that requires urgent medical care. It spreads through direct contact with bodily fluids of infected people or contaminated objects. Early supportive care significantly improves outcomes.",
        symptoms: ["fever", "severe headache", "muscle pain", "fatigue", "diarrhea", "vomiting", "abdominal pain", "unexplained bleeding", "bruising"],
    },
    {
        disease: "Yellow Fever",
        description: "A viral disease transmitted by infected mosquitoes, affecting the liver and causing jaundice (yellowing of skin). Vaccination is highly effective for prevention, and medical support is crucial for those infected.",
        symptoms: ["fever", "headache", "jaundice", "muscle pain", "nausea", "vomiting", "fatigue", "bleeding"],
    },
    {
        disease: "Plague (Bubonic/Septicemic/Pneumonic)",
        description: "A bacterial infection caused by Yersinia pestis, which can take different forms affecting lymph nodes, bloodstream, or lungs. With modern antibiotics, it's treatable when addressed promptly.",
        symptoms: ["fever", "headache", "weakness", "painful lymph nodes", "pneumonia", "shortness of breath", "chest pain", "cough", "bloody sputum"],
    },
    {
        disease: "Anthrax",
        description: "A serious bacterial infection caused by Bacillus anthracis spores, which can enter the body through skin, inhalation, or ingestion. It requires prompt antibiotic treatment.",
        symptoms: ["skin ulcers with black center", "fever", "chest discomfort", "shortness of breath", "confusion", "nausea", "vomiting", "abdominal pain", "diarrhea"],
    },
    {
        disease: "Syphilis",
        description: "A bacterial infection usually spread through sexual contact. If untreated, it progresses through stages over years. Early detection and antibiotic treatment are highly effective.",
        symptoms: ["firm, round, painless sore", "skin rash", "fever", "sore throat", "swollen lymph nodes", "fatigue", "hair loss", "weight loss"],
    },
    {
        disease: "Gonorrhea",
        description: "A common sexually transmitted infection caused by the bacterium Neisseria gonorrhoeae. It often shows no symptoms in women but can lead to complications if untreated. Antibiotics are effective for treatment.",
        symptoms: ["painful urination", "abnormal discharge", "vaginal bleeding", "painful intercourse", "swollen testicles", "rectal pain", "sore throat"],
    },
    {
        disease: "Chlamydia",
        description: "One of the most common sexually transmitted infections, caused by the bacterium Chlamydia trachomatis. Many people have no symptoms but can still transmit the infection. Antibiotic treatment is straightforward when detected.",
        symptoms: ["abnormal discharge", "burning during urination", "testicular pain", "rectal pain", "vaginal bleeding", "pelvic pain"],
    },
    {
        disease: "Trichomoniasis",
        description: "A common sexually transmitted infection caused by a microscopic parasite. Many people don't experience symptoms but can still transmit the infection. It's easily treated with medication.",
        symptoms: ["abnormal discharge", "genital itching", "burning during urination", "discomfort during intercourse", "lower abdominal pain"],
    },
    {
        disease: "Herpes Simplex Virus (HSV)",
        description: "A common viral infection causing oral or genital sores. While there's no cure, medications can manage symptoms and reduce transmission risk. Many people with HSV have mild or no symptoms.",
        symptoms: ["painful blisters", "ulcers", "pain during urination", "itching", "tingling", "flu-like symptoms", "swollen lymph nodes"],
    },
    {
        disease: "Human Papillomavirus (HPV)",
        description: "The most common sexually transmitted infection, with many types that affect different body areas. Most infections resolve on their own, but some persistent types may require monitoring due to their association with certain cancers.",
        symptoms: ["genital warts", "abnormal Pap test", "warts on hands and feet", "itching", "bleeding"],
    },
    {
        disease: "Bacterial Vaginosis",
        description: "An imbalance of naturally occurring bacteria in the vagina, common in women of reproductive age. It often causes unpleasant symptoms but is treatable with antibiotics.",
        symptoms: ["abnormal discharge", "fishy odor", "itching", "burning during urination", "vaginal irritation"],
    },
    {
        disease: "Candidiasis (Yeast Infection)",
        description: "A fungal infection caused by Candida species, commonly affecting moist areas of the body. It's generally treatable with antifungal medications and rarely causes serious complications.",
        symptoms: ["itching", "burning", "redness", "swelling", "thick white discharge", "pain during intercourse", "rash"],
    },
    {
        disease: "Urinary Tract Infection (UTI)",
        description: "An infection affecting any part of the urinary system, most commonly the bladder and urethra. It's more common in women and usually responds well to antibiotic treatment.",
        symptoms: ["burning during urination", "frequent urination", "cloudy urine", "strong-smelling urine", "pelvic pain", "fever", "fatigue"],
    },
    {
        disease: "Sepsis",
        description: "A serious condition resulting from the body's extreme response to an infection. It requires urgent medical attention and can be treated effectively with early intervention, appropriate antibiotics, and supportive care.",
        symptoms: ["fever", "increased heart rate", "increased breathing rate", "confusion", "extreme pain", "shortness of breath", "clammy skin"],
    },
    {
        disease: "Cellulitis",
        description: "A common bacterial skin infection that affects the deeper layers of skin and surrounding tissues. It typically responds well to antibiotic treatment when addressed promptly.",
        symptoms: ["red area of skin", "swelling", "pain", "warmth", "fever", "red streaks", "skin dimpling", "blisters"],
    },
    {
        disease: "Abscess",
        description: "A pocket of pus caused by a bacterial infection. It can form in any part of the body and typically requires drainage alongside antibiotic treatment in many cases.",
        symptoms: ["painful swelling", "redness", "warmth", "pus formation", "fever", "chills", "fatigue"],
    },
    {
        disease: "Osteomyelitis",
        description: "An infection of the bone that can develop from various sources, including the bloodstream or nearby tissues. It requires prompt antibiotic treatment, sometimes alongside surgical intervention.",
        symptoms: ["bone pain", "swelling", "redness", "warmth", "fever", "fatigue", "irritability", "drainage from area"],
    },
    {
        disease: "Endocarditis",
        description: "An infection of the inner lining of heart chambers and valves, typically caused by bacteria entering the bloodstream. It requires prompt medical attention and extended antibiotic treatment.",
        symptoms: ["fever", "chills", "fatigue", "aching muscles", "night sweats", "shortness of breath", "chest pain", "swelling", "heart murmur"],
    },
    {
        disease: "Rheumatic Fever",
        description: "An inflammatory condition that can develop after a strep throat infection. It can affect the heart, joints, skin, and brain. Prompt treatment of strep infections helps prevent this complication.",
        symptoms: ["fever", "painful joints", "chest pain", "fatigue", "skin rash", "unusual movements", "heart murmur"],
    },
    {
        disease: "Lyme Disease",
        description: "A bacterial infection transmitted through the bite of infected blacklegged ticks. Early detection and antibiotic treatment are important for preventing progression to later stages with more complex symptoms.",
        symptoms: ["bull's-eye rash", "fever", "chills", "fatigue", "body aches", "headache", "neck stiffness", "joint pain", "swollen lymph nodes"],
    },
    {
        disease: "Rocky Mountain Spotted Fever",
        description: "A bacterial infection transmitted by tick bites. Early treatment with appropriate antibiotics greatly reduces the risk of complications.",
        symptoms: ["high fever", "headache", "rash", "muscle pain", "nausea", "vomiting", "abdominal pain", "confusion"],
    },
    {
        disease: "Leprosy (Hansen's Disease)",
        description: "A chronic bacterial infection affecting the skin, peripheral nerves, upper respiratory tract, and eyes. Modern antibiotics can effectively treat the disease and prevent disabilities when started early.",
        symptoms: ["skin lesions", "numbness", "muscle weakness", "eye problems", "enlarged nerves", "stuffy nose", "nosebleeds"],
    },
    {
        disease: "Cysticercosis",
        description: "A parasitic tissue infection caused by larval cysts of the pork tapeworm. It requires medical evaluation and may need specific treatment depending on the location and symptoms.",
        symptoms: ["headache", "seizures", "confusion", "difficulty with balance", "brain swelling", "vision problems"],
    },
    {
        disease: "Toxoplasmosis",
        description: "A parasitic infection caused by Toxoplasma gondii. Most healthy people don't develop symptoms, but those with weakened immune systems or pregnant women should seek medical advice if exposure is suspected.",
        symptoms: ["flu-like symptoms", "swollen lymph nodes", "muscle aches", "headache", "fever", "sore throat", "vision problems"],
    },
    {
        disease: "Filariasis",
        description: "A parasitic disease transmitted by mosquito bites, potentially leading to lymphatic obstruction. Early treatment can prevent progression to advanced stages with more noticeable physical changes.",
        symptoms: ["lymphedema", "elephantiasis", "swelling of limbs", "pain", "bacterial infections", "fever", "chills"],
    },
    {
        disease: "Schistosomiasis",
        description: "A parasitic disease caused by flatworms (schistosomes) that live in certain freshwater snails. Most people have no symptoms when first infected, but some develop a rash or flu-like symptoms. Treatment is effective with medication.",
        symptoms: ["rash", "itchy skin", "fever", "chills", "cough", "abdominal pain", "diarrhea", "bloody stool", "bloody urine"],
    },
    {
        disease: "Ascariasis",
        description: "An intestinal infection caused by the parasitic roundworm Ascaris lumbricoides. It's transmitted through contaminated soil and is treatable with antiparasitic medications.",
        symptoms: ["abdominal discomfort", "intestinal blockage", "cough", "shortness of breath", "weight loss", "fatigue", "worms in stool"],
    },
    {
        disease: "Hookworm Infection",
        description: "An intestinal parasitic infection typically acquired by walking barefoot on contaminated soil. It's treatable with antiparasitic medications and preventable with proper sanitation practices.",
        symptoms: ["abdominal pain", "diarrhea", "weight loss", "fatigue", "anemia", "rash", "itching"],
    },
    
        {
            "disease": "Strongyloidiasis",
            "description": "An infection by the roundworm Strongyloides stercoralis, which can persist for decades through autoinfection. Proper diagnosis and treatment are important, especially for immunocompromised individuals.",
            "symptoms": ["abdominal pain", "diarrhea", "rash", "cough", "wheezing", "weight loss", "nausea", "vomiting"]
        },
        {
            "disease": "Trichuriasis",
            "description": "An intestinal infection caused by the parasitic whipworm Trichuris trichiura. Light infections often have no symptoms, while heavier infections may cause digestive issues. It's treatable with antiparasitic medications.",
            "symptoms": ["abdominal pain", "diarrhea", "bloody stool", "rectal prolapse", "weight loss", "anemia", "growth retardation"]
        },
        {
            "disease": "Taeniasis (Tapeworm)",
            "description": "An intestinal infection caused by adult tapeworms, usually contracted by eating undercooked contaminated meat. Most infections cause mild symptoms or none at all and are treatable with antiparasitic medications.",
            "symptoms": ["abdominal pain", "weight loss", "nausea", "diarrhea", "tapeworm segments in stool", "hunger", "weakness"]
        },
        {
            "disease": "Echinococcosis",
            "description": "A parasitic disease caused by infection with the larval stage of Echinococcus tapeworms. It develops slowly and requires medical evaluation for appropriate management.",
            "symptoms": ["abdominal pain", "nausea", "vomiting", "cough", "shortness of breath", "chest pain", "weakness", "cysts"]
        },
        {
            "disease": "Hydatid Disease",
            "description": "A parasitic infection caused by the larvae of the Echinococcus granulosus tapeworm, resulting in cyst formation in organs, particularly the liver and lungs. It requires careful medical management to prevent complications.",
            "symptoms": ["abdominal pain", "nausea", "vomiting", "cough", "chest pain", "weakness", "cysts", "jaundice"]
        },
        {
            "disease": "Scabies",
            "description": "A highly contagious skin infestation caused by the microscopic mite Sarcoptes scabiei. The mites burrow into the skin causing intense itching, especially at night.",
            "symptoms": ["intense itching", "rash", "sores", "thin irregular burrow tracks", "small bumps", "worsening at night"]
        },
        {
            "disease": "Pediculosis (Lice Infestation)",
            "description": "A parasitic infestation of the head, body, or pubic area by blood-sucking lice. It's highly contagious and spreads through direct contact or sharing personal items.",
            "symptoms": ["intense itching", "visible lice", "lice eggs on hair", "red bumps", "irritability", "difficulty sleeping"]
        },
        {
            "disease": "Ringworm (Tinea)",
            "description": "A common fungal infection of the skin that causes a circular rash with a clear center. Despite its name, it's not caused by a worm but by various types of fungi.",
            "symptoms": ["red circular rash", "itching", "scaly skin", "cracking skin", "hair loss", "blisters"]
        },
        {
            "disease": "Athlete's Foot (Tinea Pedis)",
            "description": "A common fungal infection that affects the skin between the toes and on the feet. It thrives in warm, moist environments and is often contracted in public showers or pool areas.",
            "symptoms": ["itching", "stinging", "burning", "cracked skin", "blisters", "dry skin", "peeling skin", "discolored nails"]
        },
        {
            "disease": "Jock Itch (Tinea Cruris)",
            "description": "A fungal infection that affects the skin of the groin, inner thighs, and buttocks. It's more common in people who sweat heavily or have moisture in the groin area.",
            "symptoms": ["itching", "burning", "redness", "flaking", "peeling", "cracking", "rash"]
        },
        {
            "disease": "Onychomycosis (Nail Fungus)",
            "description": "A fungal infection of the nails that can cause discoloration, thickening, and crumbling of the nail edges. It's more common in toenails than fingernails and can be difficult to treat.",
            "symptoms": ["thickened nails", "discolored nails", "brittle nails", "distorted nails", "foul smell", "painful nails"]
        },
        {
            "disease": "Impetigo",
            "description": "A highly contagious bacterial skin infection that mainly affects infants and children. It causes red sores that rupture, ooze, and form a honey-colored crust.",
            "symptoms": ["red sores", "blisters", "oozing", "yellow crusting", "itching", "swollen lymph nodes"]
        },
        {
            "disease": "Erysipelas",
            "description": "A bacterial infection in the upper layers of the skin, characterized by a bright red, raised rash. It's commonly caused by Group A Streptococcus bacteria.",
            "symptoms": ["red raised rash", "swelling", "pain", "blisters", "fever", "chills", "fatigue"]
        },
        {
            "disease": "Boils (Furuncles)",
            "description": "Painful, pus-filled infections of hair follicles that can develop anywhere on the skin. They're typically caused by Staphylococcus aureus bacteria.",
            "symptoms": ["painful bump", "swelling", "redness", "pus-filled center", "fever", "fatigue", "swollen lymph nodes"]
        },
        {
            "disease": "Carbuncles",
            "description": "A cluster of boils that form a connected area of infection under the skin. They're more severe than typical boils and may cause systemic symptoms.",
            "symptoms": ["painful mass", "pus drainage", "fatigue", "fever", "chills", "feeling unwell", "swollen lymph nodes"]
        },
        {
            "disease": "Acne Vulgaris",
            "description": "A common skin condition characterized by blocked hair follicles and oil-producing glands, resulting in various types of blemishes. It typically affects teenagers but can occur at any age.",
            "symptoms": ["pimples", "blackheads", "whiteheads", "papules", "pustules", "nodules", "scarring"]
        },
        {
            "disease": "Psoriasis",
            "description": "A chronic autoimmune condition that causes the rapid buildup of skin cells, resulting in scaling on the skin's surface. It's characterized by periods of flare-ups and remissions.",
            "symptoms": ["red patches", "silvery scales", "dry skin", "itching", "burning", "soreness", "swollen joints", "thick nails"]
        },
        {
            "disease": "Eczema (Atopic Dermatitis)",
            "description": "A chronic inflammatory skin condition characterized by dry, itchy skin and rashes. It's often associated with allergies, asthma, and hay fever, and tends to flare periodically.",
            "symptoms": ["itching", "dry skin", "rash", "scaly skin", "redness", "raw skin", "swelling", "oozing"]
        },
        {
            "disease": "Contact Dermatitis",
            "description": "An inflammatory skin condition caused by direct contact with an irritating substance or allergen. It results in a localized rash and can be either allergic or irritant in nature.",
            "symptoms": ["rash", "itching", "redness", "swelling", "blisters", "burning", "tenderness"]
        },
        {
            "disease": "Urticaria (Hives)",
            "description": "A skin reaction characterized by itchy welts that vary in size and can appear anywhere on the body. It's often triggered by allergies, but can also be caused by stress, infections, or other factors.",
            "symptoms": ["raised welts", "itching", "redness", "swelling", "burning", "stinging"]
        },
        {
            "disease": "Rosacea",
            "description": "A chronic inflammatory skin condition that primarily affects the face, causing redness, visible blood vessels, and sometimes small, red bumps. It typically occurs in cycles of flare-ups and remissions.",
            "symptoms": ["facial redness", "swollen red bumps", "eye problems", "enlarged nose", "burning sensation", "visible blood vessels"]
        },
        {
            "disease": "Vitiligo",
            "description": "A condition in which the skin loses its pigment cells (melanocytes), resulting in white patches on the skin and hair. It can affect any area of the body, including the inside of the mouth and eyes.",
            "symptoms": ["patchy loss of skin color", "premature whitening of hair", "loss of color inside mouth", "eye color change"]
        },
        {
            "disease": "Alopecia Areata",
            "description": "An autoimmune disorder that causes unpredictable, patchy hair loss. It occurs when the immune system attacks hair follicles, and can affect any hair-bearing area.",
            "symptoms": ["patchy hair loss", "nail pitting", "nail ridging", "nail brittleness", "exclamation mark hairs"]
        },
        {
            "disease": "Seborrheic Dermatitis",
            "description": "A common skin condition that mainly affects the scalp, causing scaly patches, red skin, and stubborn dandruff. It can also affect other oily areas of the body like the face and chest.",
            "symptoms": ["red skin", "scaly patches", "dandruff", "itching", "greasy skin", "burning", "hair loss"]
        },
        {
            "disease": "Systemic Lupus Erythematosus (Lupus)",
            "description": "A chronic autoimmune disease that can affect multiple organ systems. It occurs when the immune system attacks its own tissues, causing inflammation and tissue damage throughout the body.",
            "symptoms": ["fatigue", "fever", "joint pain", "butterfly rash", "skin lesions", "shortness of breath", "chest pain", "headaches", "memory loss"]
        },
        {
            "disease": "Rheumatoid Arthritis",
            "description": "A chronic inflammatory disorder that affects joints and sometimes other body systems. It occurs when the immune system mistakenly attacks the body's tissues, causing painful swelling in the affected parts.",
            "symptoms": ["joint pain", "joint swelling", "joint stiffness", "fatigue", "fever", "weight loss", "weakness"]
        },
        {
            "disease": "Osteoarthritis",
            "description": "The most common form of arthritis, characterized by the breakdown of joint cartilage and underlying bone. It causes pain, stiffness, and reduced function in the affected joints.",
            "symptoms": ["joint pain", "joint stiffness", "tenderness", "loss of flexibility", "grating sensation", "bone spurs", "swelling"]
        },
        {
            "disease": "Gout",
            "description": "A form of inflammatory arthritis characterized by sudden, severe attacks of pain, swelling, and redness in joints. It typically affects one joint at a time, often the big toe joint.",
            "symptoms": ["severe joint pain", "swelling", "redness", "warmth", "limited range of motion", "inflammation", "lingering discomfort"]
        },
        {
            "disease": "Ankylosing Spondylitis",
            "description": "A type of arthritis that primarily affects the spine, causing inflammation of the spinal joints that can lead to severe, chronic pain and disability as the spine fuses in a fixed position.",
            "symptoms": ["back pain", "stiffness", "fatigue", "neck pain", "loss of appetite", "weight loss", "eye inflammation"]
        },
        {
            "disease": "Fibromyalgia",
            "description": "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues. It amplifies painful sensations by affecting how the brain processes pain signals.",
            "symptoms": ["widespread pain", "fatigue", "cognitive difficulties", "sleep problems", "headaches", "depression", "abdominal pain"]
        },
        {
            "disease": "Scleroderma",
            "description": "A group of rare diseases that involve hardening and tightening of the skin and connective tissues. It can affect blood vessels, internal organs, and the digestive tract.",
            "symptoms": ["hardening of skin", "skin thickening", "Raynaud's phenomenon", "digestive problems", "finger ulcers", "joint pain", "shortness of breath"]
        },
        {
            "disease": "Polymyalgia Rheumatica",
            "description": "An inflammatory disorder that causes muscle pain and stiffness, especially in the shoulders and hips. It predominantly affects older adults and may be associated with giant cell arteritis.",
            "symptoms": ["shoulder pain", "hip pain", "neck pain", "morning stiffness", "fatigue", "fever", "weight loss"]
        },
        {
            "disease": "Sjögren's Syndrome",
            "description": "An autoimmune disorder characterized by dry eyes and dry mouth. It often accompanies other immune system disorders, such as rheumatoid arthritis and lupus.",
            "symptoms": ["dry eyes", "dry mouth", "fatigue", "joint pain", "swollen salivary glands", "skin rashes", "vaginal dryness"]
        },
        {
            "disease": "Diabetes Mellitus (Type 1 and 2)",
            "description": "A group of metabolic disorders characterized by high blood sugar levels over a prolonged period. Type 1 is caused by insufficient insulin production, while Type 2 is caused by insulin resistance.",
            "symptoms": ["increased thirst", "frequent urination", "extreme hunger", "unexplained weight loss", "fatigue", "blurred vision", "slow-healing sores"]
        },
        {
            "disease": "Hypoglycemia",
            "description": "A condition characterized by abnormally low blood glucose levels, typically below 70 mg/dL. It can occur in people with diabetes who take medications that increase insulin levels in the body.",
            "symptoms": ["shakiness", "dizziness", "sweating", "hunger", "irritability", "anxiety", "fatigue", "headache", "confusion"]
        },
        {
            "disease": "Hyperthyroidism",
            "description": "A condition in which the thyroid gland produces too much thyroid hormone. This can accelerate the body's metabolism, causing sudden weight loss, rapid heartbeat, and other symptoms.",
            "symptoms": ["weight loss", "rapid heartbeat", "increased appetite", "nervousness", "tremors", "sweating", "fatigue", "heat sensitivity"]
        },
        {
            "disease": "Hypothyroidism",
            "description": "A condition in which the thyroid gland doesn't produce enough thyroid hormone. It can cause a number of health problems, such as obesity, joint pain, infertility and heart disease.",
            "symptoms": ["fatigue", "weight gain", "cold sensitivity", "constipation", "dry skin", "hair loss", "depression", "muscle weakness"]
        },
        {
            "disease": "Thyroiditis",
            "description": "Inflammation of the thyroid gland that can cause either hyperthyroidism or hypothyroidism. It can be caused by an infection, autoimmune condition, or certain medications.",
            "symptoms": ["neck pain", "fatigue", "fever", "sore throat", "depression", "weight changes", "heart palpitations"]
        },
        {
            "disease": "Goiter",
            "description": "An abnormal enlargement of the thyroid gland. It can be caused by iodine deficiency, thyroid inflammation, or other thyroid disorders.",
            "symptoms": ["neck swelling", "tight feeling in throat", "coughing", "hoarseness", "difficulty swallowing", "difficulty breathing"]
        },
        {
            "disease": "Addison's Disease",
            "description": "A rare disorder in which the adrenal glands don't produce enough of certain hormones. It can be life-threatening if not properly managed with hormone replacement therapy.",
            "symptoms": ["fatigue", "weight loss", "darkening of skin", "low blood pressure", "salt craving", "low blood sugar", "nausea", "diarrhea"]
        },
        {
            "disease": "Cushing's Syndrome",
            "description": "A condition that occurs when the body is exposed to high levels of the hormone cortisol for a long time. It can be caused by taking glucocorticoid medication or by the body producing too much cortisol.",
            "symptoms": ["weight gain", "fatty deposits", "purple stretch marks", "thinning skin", "bruising", "fatigue", "high blood pressure"]
        },
        {
            "disease": "Pheochromocytoma",
            "description": "A rare tumor that develops in cells in the center of an adrenal gland. It causes the gland to produce too much of the hormones that control heart rate, blood pressure, and metabolism.",
            "symptoms": ["high blood pressure", "headache", "sweating", "racing heart", "anxiety", "tremors", "pallor", "weight loss"]
        },
        {
            "disease": "Obesity",
            "description": "A complex disease involving an excessive amount of body fat. It increases the risk of diseases and health problems, such as heart disease, diabetes, and high blood pressure.",
            "symptoms": ["excess body fat", "high BMI", "increased waist circumference", "shortness of breath", "joint pain", "sleep problems", "fatigue"]
        },
        {
            "disease": "Metabolic Syndrome",
            "description": "A cluster of conditions that occur together, increasing the risk of heart disease, stroke, and type 2 diabetes. It includes increased blood pressure, high blood sugar, excess body fat around the waist, and abnormal cholesterol levels.",
            "symptoms": ["high blood pressure", "high blood sugar", "excess abdominal fat", "abnormal cholesterol", "fatigue", "blurry vision"]
        },
        {
            "disease": "Hypertension (High Blood Pressure)",
            "description": "A common condition in which the long-term force of the blood against artery walls is high enough that it may eventually cause health problems, such as heart disease.",
            "symptoms": ["headache", "shortness of breath", "nosebleeds", "flushing", "dizziness", "chest pain", "visual changes"]
        },
        {
            "disease": "Hypotension (Low Blood Pressure)",
            "description": "A condition in which blood pressure is much lower than normal. It can cause symptoms like dizziness and fainting, and can be a sign of an underlying condition.",
            "symptoms": ["dizziness", "lightheadedness", "fainting", "fatigue", "blurred vision", "nausea", "cold skin", "depression"]
        },
        {
            "disease": "Coronary Artery Disease",
            "description": "A condition in which the major blood vessels that supply the heart with blood, oxygen, and nutrients become damaged or diseased, often due to cholesterol-containing deposits (plaques).",
            "symptoms": ["chest pain", "shortness of breath", "pain in arms", "nausea", "sweating", "dizziness", "heart palpitations", "fatigue"]
        },
        {
            "disease": "Myocardial Infarction (Heart Attack)",
            "description": "A serious condition that occurs when a coronary artery becomes blocked, preventing blood flow to part of the heart muscle. Without blood, tissue loses oxygen and dies.",
            "symptoms": ["chest pain", "pressure in chest", "pain in arms/shoulder/jaw", "shortness of breath", "cold sweat", "nausea", "fatigue", "dizziness"]
        },
        {
            "disease": "Heart Failure",
            "description": "A chronic condition in which the heart doesn't pump blood as well as it should. It can be caused by coronary artery disease, high blood pressure, heart attack, or other conditions.",
            "symptoms": ["shortness of breath", "fatigue", "swelling in legs", "rapid heartbeat", "persistent cough", "reduced exercise capability", "weight gain"]
        },
        {
            "disease": "Arrhythmia",
            "description": "An irregular heartbeat that occurs when the electrical signals that coordinate heartbeats don't work properly. It can cause the heart to beat too fast, too slow, or with an irregular rhythm.",
            "symptoms": ["palpitations", "racing heartbeat", "slow heartbeat", "chest pain", "shortness of breath", "dizziness", "fainting", "anxiety"]
        },
        {
            "disease": "Atrial Fibrillation",
            "description": "An irregular and often rapid heart rate that can increase the risk of strokes, heart failure, and other heart-related complications. It occurs when the heart's upper chambers beat irregularly.",
            "symptoms": ["palpitations", "weakness", "reduced exercise capability", "fatigue", "lightheadedness", "shortness of breath", "chest pain"]
        },
        {
            "disease": "Cardiomyopathy",
            "description": "A disease of the heart muscle that makes it harder for the heart to pump blood to the rest of the body. It can lead to heart failure, and can be acquired or inherited.",
            "symptoms": ["shortness of breath", "swelling of legs", "bloating", "cough", "fatigue", "dizziness", "palpitations", "chest pain"]
        },
        {
            "disease": "Pericarditis",
            "description": "Inflammation of the pericardium, the thin sac-like membrane surrounding the heart. It can cause chest pain and other symptoms that can be mistaken for a heart attack.",
            "symptoms": ["sharp chest pain", "pain with breathing", "fever", "weakness", "cough", "swelling in legs", "fatigue", "heart palpitations"]
        },
        {
            "disease": "Endocarditis",
            "description": "An infection of the endocardium, the inner lining of the heart chambers and valves. It occurs when bacteria or other germs from another part of the body spread through the bloodstream and attach to the heart.",
            "symptoms": ["fever", "chills", "fatigue", "aching muscles", "night sweats", "shortness of breath", "chest pain", "swelling", "heart murmur"]
        },
        {
            "disease": "Stroke (Ischemic/Hemorrhagic)",
            "description": "A condition in which the brain doesn't get enough blood supply, leading to cell death. It can be caused by a blocked artery (ischemic) or leaking or bursting of a blood vessel (hemorrhagic).",
            "symptoms": ["sudden numbness", "confusion", "trouble speaking", "vision problems", "dizziness", "severe headache", "walking difficulty"]
        },
        {
            "disease": "Transient Ischemic Attack (TIA)",
            "description": "A temporary period of symptoms similar to those of a stroke, but without lasting damage. It's often called a mini-stroke and may be a warning sign of a future stroke.",
            "symptoms": ["temporary numbness", "weakness", "slurred speech", "vision changes", "dizziness", "confusion", "balance issues"]
        },
        {
            "disease": "Peripheral Artery Disease",
            "description": "A common circulatory problem in which narrowed arteries reduce blood flow to the limbs. It primarily affects the legs, causing pain when walking or climbing stairs.",
            "symptoms": ["leg pain", "cramping", "numbness", "weakness", "coldness in limbs", "shiny skin on legs", "weak pulse", "erectile dysfunction"]
        },
        {
            "disease": "Deep Vein Thrombosis (DVT)",
            "description": "A blood clot that forms in a deep vein, usually in the legs. It can cause leg pain or swelling, but also can occur with no symptoms. It can be serious if the blood clot breaks loose and travels to the lungs.",
            "symptoms": ["leg swelling", "leg pain", "warm skin", "red or discolored skin", "visible veins", "tenderness"]
        },
        {
            "disease": "Pulmonary Embolism",
            "description": "A blockage in one of the pulmonary arteries in the lungs, often caused by blood clots that travel from the legs or other parts of the body. It can damage the lungs and other organs due to reduced oxygen supply.",
            "symptoms": ["shortness of breath", "chest pain", "cough", "leg pain", "swelling", "dizziness", "increased heart rate", "excessive sweating"]
        },
        {
            "disease": "Varicose Veins",
            "description": "Enlarged, twisted veins that are visible just under the surface of the skin. They most commonly affect the legs and feet, and are caused by weakened valves and veins in the legs.",
            "symptoms": ["twisted veins", "pain", "burning", "muscle cramping", "swelling", "itching", "skin discoloration"]
        },
        {
            "disease": "Chronic Obstructive Pulmonary Disease (COPD)",
            "description": "A group of progressive lung diseases that cause breathing-related problems. It includes emphysema and chronic bronchitis, and is often caused by smoking or exposure to irritants.",
            "symptoms": ["shortness of breath", "wheezing", "chest tightness", "chronic cough", "blue lips or fingernails", "fatigue", "swelling in legs"]
        },
        {
            "disease": "Asthma",
            "description": "A condition in which the airways narrow and swell and may produce extra mucus, making breathing difficult. It can trigger coughing, wheezing, and shortness of breath.",
            "symptoms": ["shortness of breath", "chest tightness", "wheezing", "coughing", "trouble sleeping", "fatigue"]
        },
        {
            "disease": "Emphysema",
            "description": "A lung condition that causes shortness of breath. It's a type of COPD in which the air sacs in the lungs (alveoli) are damaged, making it difficult to breathe out.",
            "symptoms": ["shortness of breath", "chronic cough", "wheezing", "reduced appetite", "weight loss", "fatigue", "depression"]
        },
        {
            "disease": "Chronic Bronchitis",
            "description": "A type of COPD characterized by inflammation of the bronchial tubes, which carry air to and from the air sacs of the lungs. It causes a persistent cough with mucus production.",
            "symptoms": ["persistent cough", "mucus production", "wheezing", "chest discomfort", "shortness of breath", "fatigue", "fever"]
        },
        {
            "disease": "Pulmonary Fibrosis",
            "description": "A lung disease that occurs when lung tissue becomes damaged and scarred. The scarring makes it more difficult for the lungs to work properly and can lead to serious breathing problems.",
            "symptoms": ["shortness of breath", "dry cough", "fatigue", "weight loss", "aching muscles", "clubbing of fingertips", "chest pain"]
        },
        {
            "disease": "Sleep Apnea",
            "description": "A potentially serious sleep disorder in which breathing repeatedly stops and starts during sleep. It can lead to daytime fatigue, cardiovascular problems, and other complications.",
            "symptoms": ["loud snoring", "gasping during sleep", "morning headache", "insomnia", "excessive daytime sleepiness", "attention problems", "irritability"]
        },
        {
            "disease": "Lung Cancer",
            "description": "A type of cancer that begins in the lungs and most often occurs in people who smoke. It can spread to other parts of the body and is often not detected until it has advanced.",
            "symptoms": ["persistent cough", "coughing up blood", "chest pain", "hoarseness", "weight loss", "bone pain", "headache", "shortness of breath"]
        },
        {
            "disease": "Breast Cancer",
            "description": "A type of cancer that forms in the cells of the breasts. It can occur in both men and women, but it's far more common in women. Early detection through screening can help detect it at a more treatable stage.",
            "symptoms": ["breast lump", "breast pain", "nipple discharge", "nipple inversion", "skin changes", "swelling", "redness", "peeling"]
        }
    
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