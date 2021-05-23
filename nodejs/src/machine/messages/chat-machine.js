let messages = {
  selectLanguage: {
    prompt: {
      preamble: {
        en_IN: 'Hi there! Welcome to the Swasth Alliance COVID-19 Chat! I am  going to be your Swasth Sakhi. Swasth is a not for profit powered by India’s leading healthcare and technology companies as a public interest initiative. (For more information on Swasth click here https://www.swasth.app/home) The good folks at Swasth set me up to assist you with your COVID-19 questions and concerns. Please select your preferred language.',
        hi_IN: 'नमस्ते, Swasth Alliance (स्वस्थ संस्था) के COVID-19 चैट सुविधा में आपका स्वागत है। मैं हूँ आपकी स्वस्थ सखी । स्वस्थ संस्था को जन हित के लिए भारत की श्रेष्ठ स्वास्थ्य सेवा और टेक्नोलॉजी कंपनियों के लोगों ने मिलकर स्थापित किया है। (स्वस्थ संस्था के बारे में अधिक जानकारी के लिए https://www.swasth.app/home) COVID-19 से जुड़ी समस्याओं को सुलझाने में यह चैट सुविधा आपकी मदद कर सकती है। कृपया अपनी भाषा चुनें',
        ta_IN: 'வணக்கம்! ஸ்வத்ஸ் அலியன்ஸ் கோவிட் 19 சாட் பாக்சிற்கு வரவேற்கிறோம்! ஸ்வஸ்த் என்பது ஒரு லாப நோக்கமற்ற பொது நல முயற்சியாக இந்தியாவின் முன்னணி சுகாதார மற்றும் தொழில்நுட்ப நிறுவனங்களால் இயக்கப்படும்., (ஸ்வஸ்த் குறித்து மேலும் தெரிந்து கொள்ள இந்த லிங்கை கிளிக் செய்யவும் https://www.swasth.app/home)கொரோனா தொடர்பான உங்களின் சந்தேகங்கள், கேள்விகளுக்கு பதில் அளிக்க ஸ்வத்ஸ் மூலம் நான் உருவாக்கப்பட்டு உள்ளேன். உங்களுக்கு விரும்பமான மொழியை தேர்வு செய்யவும்',
        ma_IN: 'स्वास्थ अलायन्स कॉव्हिड-19  चॅटवर आपले स्वागत आहे! स्वास्थ ही जनहित योजना म्हणून भारताच्या आघाडीच्या आरोग्य सेवा आणि तंत्रज्ञान कंपन्यांनी चालवलेल्या नफ्यासाठी नाही. (स्वास्थवरील अधिक माहितीसाठी येथे क्लिक करा. Https://www.swasth.app/home)स्वास्थ येथील चांगल्या लोकांनी मला आपल्या COVID-19 प्रश्न आणि समस्यांसाठी मदत करण्यासाठी सेट अप केले. कृपया आपली पसंतीची भाषा निवडा',
        kn_IN: 'ನಮಸ್ತೆ, ಸ್ವಸ್ಥ್ ಅಲಾಯನ್ಸ್ ಕೋವಿಡ್ 19 ಚಾಟ್‌ಗೆ ಸ್ವಾಗತ, ನಿಮ್ಮ ಕೋವಿಡ್ 19 ಸಂಬಂಧಿತ ಪ್ರಶ್ನೆಗಳು ಹಾಗೂ ಆತಂಕವನ್ನು ದೂಡ ಮಾಡಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವಿಲ್ಲಿದ್ದೇವೆ, ನಿಮಗೆ ಸಹಾಯ ಬೇಕೇ? ಸ್ವಸ್ಥ್ ಲಾಭಕ್ಕಾಗಿ ಭಾರತದಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಕಂಪನಿಯಲ್ಲ, ಜನರಿಗಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಸಂಸ್ಥೆ.\n ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
        te_IN: 'నమస్కారం.. స్వస్త్ అలయన్స్ కోవిడ్-19 చాట్‌కు స్వాగతం. ప్రజాప్రయోజనాల కోసమే స్వస్త్ అలయన్స్ ఏర్పాటు చేయడం జరిగింది తప్పా.. ఎలాంటి లాభం కోసం ఏర్పాటు చేయలేదు. (మరింత సమాచారం కోసం ఇక్కడ క్లిక్ చేయండి https://www.swasth.app/home)కోవిడ్ -19కు సంబంధించి మీకు సహాయం చేసేందుకు నన్ను ఇక్కడ ఉంచింది స్వస్త్ సిబ్బంది. ముందుగా మీ భాషను ఎంపిక చేసుకోండి'
      },
      options: {
        list: ['hi_IN', 'en_IN', 'ta_IN', 'ma_IN', 'kn_IN', 'te_IN'],
        messageBundle: {
          en_IN: {
            en_IN: 'English',
          },
          hi_IN: {
            en_IN: 'हिंदी',
          },
          ta_IN: {
            en_IN: 'தமிழ்',
          },
          ma_IN: {
            en_IN: 'मराठी',
          },
          kn_IN: {
            en_IN: 'ಕನ್ನಡ',
          },
          te_IN: {
            en_IN: 'తెలుగు',
          }
        },
      },
    },
  },
  menu: {
    prompt: {
      preamble: {
        en_IN: 'What do you need help with right now?',
        hi_IN: 'बताइये, आज हम आपकी क्या सहायता कर सकते हैं?',
        ta_IN: 'உங்களுக்கு இப்போது என்ன உதவி தேவை?',
        ma_IN: 'आत्ता आपल्याला कोणत्या मदतीची आवश्यकता आहे?',
        kn_IN: 'ಇದೀಗ ನಿಮಗೆ ಏನು ನೆರವು ಬೇಕಿದೆ?',
        te_IN: 'ఎలాంటి పహాయం కోసం  మీరు ఎదురు చూస్తున్నారు',
      },
      postscript: {
        en_IN: '\n\nYou can always get back to the main menu by sending "Reset".\n\nBy continuing to use our chat facility, you agree to our Terms & Conditions of use https://www.swasth.app/swasth_terms_wb.pdf',
        hi_IN: '\n\n "Reset " टाइप करके भेजने पर आप मेन मेनू पर वापस आ सकते हैं \n\nहमारे चैट सुविधा का उपयोग करके आप हमारे नियमों और उपयोग के शर्तों का पालन करने के लिए सहमति दे रहे हैं https://www.swasth.app/swasth_terms_wb.pdf',
        ta_IN: '\n\n"Reset" செய்து எந்த நேரத்திலும் நீங்கள் மெயின் மெனுவுக்குப் போகலாம் \n\nஎங்கள் சாட் பாக்ஸ் வசதியைத் தொடர்ந்து பயன்படுத்துவதன் மூலம், எங்கள் பயன்பாட்டு விதிமுறைகள் மற்றும் நிபந்தனைகளை நீங்கள் ஒப்புக்கொள்கிறீர்கள் https://www.swasth.app/swasth_terms_wb.pdf',
        ma_IN: '\n\nतुम्ही  \'रीसेट/Reset\' वापरून  मुख्य मेन्युला जाऊ शकता.\n\n आमची च्याटिंग सुविधा वापरल्यास तुमची सहमती गृहित आहे https://www.swasth.app/swasth_terms_wb.pdf',
        kn_IN: '\n\n"Reset" ಎಂದು ಕಳಿಸುವ ಮೂಲಕ ಯಾವಾಗ ಬೇಕಾದರೂ ನೀವು ಮುಖ್ಯ ಮೆನುಗೆ ಹಿಂತಿರುಗಬಹುದು. \n\nನಮ್ಮ ಚಾಟ್ ಸೌಲಭ್ಯವನ್ನು ಮುಂದುವರೆಸುವುದಾದರೆ, ನಮ್ಮ ಷರತ್ತು ಹಾಗೂ ನಿಯಮಗಳನ್ನು ಒಪ್ಪಬೇಕು https://www.swasth.app/swasth_terms_wb.pdf',
        te_IN: '\n\nప్రధాన మెనూకు చేరేందుకు రీసెట్(Reset) అని పంపండి \n\nమా చాట్ ఫెసిలిటీ ద్వారా కొనసాగేందుకు అన్ని నియమనిబంధనలకు మీరు అంగీకారం తెలుపుతున్నారా https://www.swasth.app/swasth_terms_wb.pdf',
      },
      options: {
        newUser: ['worried', 'info'],
        subscribedUser: ['worried', 'selfCare', 'info'],
        messageBundle: {
          worried: {
            en_IN: 'I am feeling worried and have COVID related concerns',
            hi_IN: 'मैं COVID-19 को लेकर बहुत चिंतित हूँ',
            ta_IN: 'நான் கவலைப்படுகிறேன், கொரோனா தொடர்பான சந்தேகங்கள்உள்ளன',
            ma_IN: 'मी चिंताग्रस्त आहे आणि मला कोविडशी संबंधित चिंता आहे',
            kn_IN: 'ನನಗೆ ಚಿಂತೆ ಕಾಡುತ್ತಿದೆ, ಹಾಗೆಯೇ ಕೋವಿಡ್ 19 ಕುರಿತು ಆತಂಕಕ್ಕೆ ಒಳಗಾಗಿದ್ದೇನೆ',
            te_IN: 'కోవిడ్-19 సంబంధిత సమాచారంతో నాలో ఆందోళన నెలకొంది',
          },
          selfCare: {
            en_IN: 'I want to manage my self-monitoring program',
            hi_IN: 'मैं अपने आप ही COVID-19 संक्रमण पर ध्यान रखना चाहता/चाहती हूं',
            ta_IN: 'எனது சுய கண்காணிப்பை நிர்வகிக்க விரும்புகிறேன்',
            ma_IN: 'मला माझा स्व-देखरेख कार्यक्रम व्यवस्थापित करायचा आहे',
            kn_IN: 'ನಾನು ಸ್ವಯಂ ನಿರ್ವಹಣೆ ಮಾಡಿಕೊಳ್ಳಲು ಬಯಸುತ್ತೇನೆ',
            te_IN: 'స్వీయ పర్యవేక్షణలో నన్ను నేను ఉంచుకోవాలని భావిస్తున్నాను',
          },
          info: {
            en_IN: 'I want information about COVID facilities',
            hi_IN: 'मुझे COVID-19 सुविधाओं के बारे में जानकारी चाहिए',
            ta_IN: 'கொரோனா பாதுகாப்பு மையங்கள் பற்றிய தகவல்களை நான் விரும்புகிறேன்',
            ma_IN: 'मला कोविड सुविधांविषयी माहिती हवी आहे',
            kn_IN: 'ನನಗೆ ಕೋವಿಡ್ 19 ಆರೈಕೆ ಸೌಲಭ್ಯದ ಕುರಿತು ಮಾಹಿತಿ ಬೇಕು',
            te_IN: 'కోవిడ్-19 కేర్ ఫెసిలిటీస్ గురించి సమాచారం కావాలి మా చాట్ ఫెసిలిటీ ద్వారా కొనసాగేందుకు అన్ని నియమనిబంధనలకు మీరు అంగీకారం తెలుపుతున్నారా',
          },
        },
      },
    },
  },
  triageMenu: {
    prompt: {
      preamble: {
        en_IN: 'Let me try and address them! Tell me more about your concerns...',
        hi_IN: 'आप हमें अपनी समस्याओं के बारे में बताएं, हम आपकी चिंता दूर करने की कोशिश करेंगे',
        ta_IN: 'நான் முயற்சி செய்து அவை குறித்து சொல்கிறேன்! உங்கள் கவலைகளைப் பற்றி மேலும் சொல்லுங்கள்...',
        ma_IN: 'मी प्रयत्न करू आणि त्यांना संबोधित करू! मला तुमच्या चिंतांबद्दल अधिक सांगा ...',
        kn_IN: 'ನಿಮಗಿರುವ ಆತಂಕದ ಬಗ್ಗೆ ಹೇಳಿ, ಪರಿಹಾರಕ್ಕೆ ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ',
        te_IN: 'మీ సందేహాలకు సమాధానం ఇస్తాను. ఇంకా ఏమైనా సమస్యలతో  ఆందోళన చెందుతున్నారా..?'
      },
      options: {
        list: ['symptoms', 'contactCovid', 'doctorAdvise'],
        messageBundle: {
          symptoms: {
            en_IN: 'I may have COVID-19 symptoms',
            hi_IN: 'मुझमें शायद COVID-19 के लक्षण हैं',
            ta_IN: 'எனக்கு COVID-19 அறிகுறிகள் இருக்கலாம்',
            ma_IN: 'मला कोविड-19 ची लक्षणे असू शकतात',
            kn_IN: 'ನಾನು ಕೋವಿಡ್ 19 ಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿರಬಹುದು',
            te_IN: 'నాకు కరోనా లక్షణాలు ఉండే అవకాశం ఉందా',
          },
          contactCovid: {
            en_IN: 'I have come in contact with a COVID-19 patient',
            hi_IN: 'मैं COVID-19 से संक्रमित व्यक्ति के संपर्क में आई/आया था',
            ta_IN: 'நான் ஒரு கோவிட் -19 நோயாளியுடன் தொடர்பு கொண்டுள்ளேன்',
            ma_IN: 'मी कोविड-19 रूग्णाच्या संपर्कात आला आहे',
            kn_IN: 'ನಾನು ಕೋವಿಡ್ 19 ರೋಗಿಯೊಂದಿಗೆ ನಿಕಟ ಸಂಪರ್ಕದಲ್ಲಿದ್ದೇನೆ( ಅಂದರೆ ಕೊರೊನಾ ಸೋಂಕಿಗೆ ತುತ್ತಾದ ರೋಗಿಯೊಂದಿಗೆ 10 ನಿಮಿಷಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯ ಕಳೆದಿದ್ದೇನೆ, ಮಾಸ್ಕ್ ಇಲ್ಲದೆ 6 ಅಡಿಗಳಿಗಿಂತ ಹೆಚ್ಚು ಹತ್ತಿರದ್ದಲ್ಲಿದ್ದೆ.)',
            te_IN: 'కోవిడ్ -19 పేషెంట్‌తో కాంటాక్ట్‌లోకి వచ్చాను( దాదాపు 10 నిమిషాల పాటు కోవిడ్ పేషెంట్‌తో మాట్లాడాను. ఆ సమయంలో ఆరు అడుగుల దూరంను పాటించలేదు)',
          },
          doctorAdvise: {
            en_IN: 'My doctor has advised homecare for COVID management',
            hi_IN: 'डॉक्टर ने मुझे घर पर ही COVID-19 के देखभाल की सलाह दी है',
            ta_IN: 'வீட்டில் இருந்தே கோவிட் பராமரிப்பு மேற்கொள்ளும் ஆலோசனைகளை எனது மருத்துவர் வழங்கியுள்ளார்',
            ma_IN: 'माझ्या डॉक्टरांनी कोविड व्यवस्थापनासाठी होमकेअरचा सल्ला दिला आहे',
            kn_IN: 'ನನಗೆ ಕೊರೊನಾ ಸೋಂಕು ತಗುಲಿದ್ದು, ವೈದ್ಯರು ಮನೆಯಲ್ಲೇ ಆರೈಕೆ ಮಾಡಿಕೊಳ್ಳುವಂತೆ ಸಲಹೆ ನೀಡಿದ್ದಾರೆ.',
            te_IN: 'పరీక్ష చేయించుకోగా కోవిడ్ పాజిటివ్‌గా నిర్థారణ అయ్యింది. డాక్టర్ ఇంట్లోనే ఉండి జాగ్రత్తచర్యలు తీసుకోమని సలహా ఇచ్చారు.',
          },
        },
      },
    },
  },
  selfCareMenu: {
    prompt: {
      preamble: {
        en_IN: 'How would you like to proceed?',
        hi_IN: 'आप किस प्रकार शुरू करना चाहेंगे?',
        ta_IN: 'நீங்கள் எவ்வாறு தொடர விரும்புகிறீர்கள்?',
        ma_IN: 'आपण पुढे कसे जाऊ इच्छिता?',
        ka_IN: 'ನೀವು ಹೇಗೆ ಮುಂದುವರೆಯಲು ಬಯಸುತ್ತೀರಿ?',
        te_IN: 'మీరెలా ముందుకెళ్లాలనుకుంటున్నారు',
      },
      options: {
        hasLivePatients: {
          list: ['addPatient', 'recordVitals', 'downloadReport', 'exitProgram'],
          messageBundle: {
            addPatient: {
              en_IN: 'Enroll a new patient into the program',
              hi_IN: 'कार्यक्रम में एक नए रोगी को भर्ती करें',
              ta_IN: 'ஒரு புதிய நோயாளியை நிரலில் சேர்க்கவும்',
              ma_IN: 'प्रोग्राममध्ये नवीन रुग्णाची नावनोंदणी करा',
              kn_IN: 'ಹೊಸ ರೋಗಿಯನ್ನು ದಾಖಲಿಸಿ',
              te_IN: 'కొత్త పేషెంటును ఎన్‌రోల్ చేయండి',
            },
            recordVitals: {
              en_IN: 'Enter vitals',
              hi_IN: 'वाइटल्स दर्ज करें',
              ta_IN: 'உயிரணுக்களை உள்ளிடவும்',
              ma_IN: 'आपल्या तब्यतीची ची माहिती फीड करा',
              kn_IN: 'ಮಹತ್ವದ ಮಾಹಿತಿ ದಾಖಲಿಸಿ',
              te_IN: 'వైటల్స్‌ను ఎంటర్ చేయండి',
            },
            downloadReport: {
              en_IN: 'Download vitals report',
              hi_IN: 'वाइटल्स रिपोर्ट डाउनलोड करें',
              ta_IN: 'உயிரணுக்களின் அறிக்கையைப் பதிவிறக்குங்கள்',
              ma_IN: 'आपल्या तब्यतीची चा  अहवाल डाउनलोड करा',
              kn_IN: 'ಮಾಹಿತಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
              te_IN: 'వైటల్స్‌ రిపోర్టును డౌన్‌లోడ్  చేసుకోండి',
            },
            exitProgram: {
              en_IN: 'Exit self care program',
              hi_IN: 'आत्म देखभाल प्रोग्राम से बाहर निकलें',
              ta_IN: 'சுய பாதுகாப்பு திட்டத்திலிருந்து வெளியேறு',
              ma_IN: 'सेल्फ केअर प्रोग्राममधून बाहेर पडा',
              kn_IN: 'ಸ್ವಯಂ ಆರೈಕೆ ಕಾರ್ಯಕ್ರಮದಿಂದ ನಿರ್ಗಮಿಸಿ',
              te_IN: 'ఎగ్జిట్ సెల్ఫ్ కేర్ ప్రోగ్రామ్',
            },
          },
        },
        noLivePatients: {
          list: ['addPatient', 'downloadReport'],
          messageBundle: {
            addPatient: {
              en_IN: 'Enroll a new patient into the program',
              hi_IN: 'कार्यक्रम में एक नए रोगी को भर्ती करें',
              ta_IN: 'ஒரு புதிய நோயாளியை நிரலில் சேர்க்கவும்',
              ma_IN: 'प्रोग्राममध्ये नवीन रुग्णाची नावनोंदणी करा',
              kn_IN: 'ಹೊಸ ರೋಗಿಯನ್ನು ದಾಖಲಿಸಿ',
              te_IN: 'కొత్త పేషెంటును ఎన్‌రోల్ చేయండి',
            },
            downloadReport: {
              en_IN: 'Download vitals report',
              hi_IN: 'वाइटल्स रिपोर्ट डाउनलोड करें',
              ta_IN: 'உயிரணுக்களின் அறிக்கையைப் பதிவிறக்குங்கள்',
              ma_IN: 'आपल्या तब्यतीची चा  अहवाल डाउनलोड करा',
              kn_IN: 'ಮಾಹಿತಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
              te_IN: 'వైటల్స్‌ రిపోర్టును డౌన్‌లోడ్  చేసుకోండి',
            },
          },
        },
      },
    },
  },
  informationFlow: {
    en_IN: 'You can find more information regarding COVID-19 and nearby care facilities here www.liferesources.in. Please follow these simple tips to stay healthy and safe!\n\n- Wear a N95 mask covering both mouth and nose\n- Sleep 7-8 hours a day\n- Drink a lot of fluids to stay hydrated\n- Avoid alcohol intake and smoking\n- Exercise, practise yoga and meditate\n',
    hi_IN: 'COVID-19 और नजदीकी देखभाल केंद्रों से संबंधित जानकारी यहाँ प्राप्त कर सकते हैं www.liferesources.in. कृपया स्वस्थ और सुरक्षित रहने के लिए निम्न का पालन करें - अपने मुँह और नाक के ऊपर N95 मास्क पहनें \n- 7-8 घंटों की नींद अवश्य लें \n- अधिक से अधिक तरल पदार्थों का सेवन करें \n- धूम्रपान और नशीले पदार्थों का सेवन न करें \n- व्यायाम, योग और ध्यान करें',
    ta_IN: 'கொரோனா குறித்த மேலும் விவரங்களை அறிய அருகில் உள்ள கொரோனா சிகிச்சை மையங்களின் பட்டியல் இங்கே கொடுக்கப்பட்டுள்ளன. www.liferesources.in. உங்கள் உடல் ஆரோக்கியமாக இருக்கவும் பாதுகாப்பாக இருக்கவும் கீழ்க்கண்ட அறிவுரைகளை பின்பற்றுங்கள்!\n-  உங்கள் மூக்கு மற்றும் வாயை நன்றாக மூடும்படியாக என் 95 மாஸ்க்கை அணியவும்.\n- தினமும் 7 முதல் 8 மணி நேரம வரை தூங்கவும்\n- நீர்ச்சத்தை அதிகரிக்க நீராகாரங்களை நிறைய குடிக்கவும்\n- குறைந்த கார்ப்போஹைட்ரேட், அதிக புரத உணவுகளை உண்ணுங்கள்\n- மதுகுடிப்பதையும் புகைப்பிடிப்பதையும் தவிருங்கள்\n- தியானம், யோகா, உடற்பயிற்சி செய்யுங்கள்.',
    ma_IN: 'आपण कोविड-१९ आणि सुविधांविषयी अधिक माहिती येथे शोधू शकता www.liferesources.in. कृपया निरोगी आणि सुरक्षित राहण्यासाठी या सोप्या सूचनांचे अनुसरण करा!\nतोंड आणि नाक दोन्ही झाकून एन ९५  चा मुखवटा घाला\n७  दिवस ७ - ८  तास झोप घ्या \nहायड्रेटेड राहण्यासाठी बरेच द्रव प्या\nनिरोगी लो कार्बोहायड्रेट, उच्च प्रोटीन आहार घ्या\nमद्यपान आणि धूम्रपान टाळा\nयोगाचा सराव करा आणि ध्यान करा',
    kn_IN: 'ಕೋವಿಡ್ 19 ಮತ್ತು ಹತ್ತಿರದ ಆರೈಕೆ ಸೌಲಭ್ಯಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಇಲ್ಲಿ ಲಭ್ಯವಿದೆ https://life.coronasafe.network. ಸುರಕ್ಷಿತ ಹಾಗೂ ಆರೋಗ್ಯವಾಗಿರಲು ಈ ಕೆಲವು ಟಿಪ್ಸ್‌ಗಳನ್ನು ಅನುಸರಿಸಿ\n- ಮೂಗು ಹಾಗೂ ಬಾಯಿ ಮುಚ್ಚುವಂತೆ ಎನ್‌95 ಮಾಸ್ಕ್ ಧರಿಸಿ\n- ದಿನದಲ್ಲಿ 7-8 ಗಂಟೆಗಳ ಕಾಲ ನಿದ್ದೆ ಮಾಡಿ\n- ದ್ರವ ಪದಾರ್ಥಗಳನ್ನು ಹೆಚ್ಚಾಗಿ ಸೇವಿಸಿ\n- ಕಡಿಮೆ ಕಾರ್ಬೊಹೈಡ್ರೇಟ್ಸ್ ಇರುವ, ಹೆಚ್ಚು ಪ್ರೋಟಿನ್ ಇರುವ ಆರೋಗ್ಯಕರ ಆಹಾರ ಸೇವಿಸಿ\n- ಮದ್ಯಪಾನ, ಧೂಮಪಾನ ಬೇಡ\n- ವ್ಯಾಯಾಮ, ಯೋಗ, ಧ್ಯಾನವನ್ನು ಮಾಡಿ',
    te_IN: 'కోవిడ్ 19కు సంబంధించి పూర్తి సమాచారంతో పాటు కోవిడ్ ఫెసిలిటీ కేంద్రం వివరాలు కూడా ఇక్కడ పొందొచ్చు  <https://life.coronasafe.network/>. ఆరోగ్యంగా సురక్షితంగా ఉండేందుకు ఈ చిట్కాలు పాటించండి\n- నోరు  ముక్కు కప్పి ఉంచేలా N95 మాస్కు ధరించండి\n- రోజుకు 7-8 గంటల పాటు నిద్రకు ఉపక్రమించాలి\n- ద్రవ పదార్థాలు ఎక్కువగా తీసుకోండి\n- కార్బోహైడ్రేట్లు తక్కువగా ఉన్న ఆహారం తీసుకోవడంతో పాటు మంచి డైట్ తీసుకోవాలి\n- మద్యం స్మోకింగ్ చేయరాదు\n- యోగా ధ్యానం చేయాలి',
  },
  endstate: {
    en_IN: 'Goodbye. Say hi to start another conversation',
    hi_IN: 'अलविदा!  बातचीत फिर शुरू करने के लिए "hi" टाइप करके भेजें',
    ta_IN: 'குட்பை.. மற்றொரு உரையாடலை தொடங்க ஹாய் சொல்லவும்',
    ma_IN: 'धन्यवाद . नविन संभाषणाला सुरूवात  करताना \'नमस्कार\' म्हणून सुरूवात  करा.',
    kn_IN: 'ಶುಭ ವಿದಾಯ, ಸಂಭಾಷಣೆಯನ್ನು ಆರಂಭಿಸಲು ಮತ್ತೊಮ್ಮೆ ಹಾಯ್ ಎಂದು ಹೇಳಿ',
    te_IN: 'గుడ్ బై. మళ్లీ చాట్ ద్వారా మాట్లాడాలంటే హాయ్ అని టైప్ చేయండి',
  },
};

module.exports.messages = messages;