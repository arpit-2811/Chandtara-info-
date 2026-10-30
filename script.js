/**
 * CHANDTARA INFRA PRIVATE LIMITED
 * Interactive JavaScript Engine & Bilingual Translation System
 * CIN: U42209BR2026PTC088206 | GSTIN: 10AAOCC2572J1AP | PAN: AAOCC2572J
 * Directors: Shivdanee Kumar Singh, Guddu Singh
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initScrollEffects();
  initAnimatedCounters();
  initTestimonialCarousel();
  initFaqAccordion();
  initProjectFilters();
  initContactForm();
  initScrollTop();
});

/* ==========================================================================
   1. BILINGUAL TRANSLATION DATA DICTIONARY
   ========================================================================== */
const translations = {
  hi: {
    // Page Title & Meta
    page_title: "चांदतारा इन्फ्रा प्राइवेट लिमिटेड | Chandtara Infra Private Limited - Gopalganj, Bihar",
    meta_desc: "चांदतारा इन्फ्रा प्राइवेट लिमिटेड - सिविल निर्माण, सौर ऊर्जा, जलापूर्ति, भारी अवसंरचना, रियल एस्टेट एवं कौशल विकास। गोपालगंज, बिहार।",
    
    // Top Bar
    topbar_reg: "भारत सरकार एवं बिहार राज्य द्वारा पंजीकृत प्राइवेट लिमिटेड कंपनी",
    
    // Brand
    brand_name: "चांदतारा इन्फ्रा",
    brand_tagline: "प्राइवेट लिमिटेड",

    // Navigation
    nav_home: "होम",
    nav_about: "परिचय",
    nav_services: "कार्यक्षेत्र",
    nav_why_us: "विशेषताएं",
    nav_process: "प्रक्रिया",
    nav_projects: "परियोजनाएं",
    nav_directors: "निदेशक",
    nav_contact: "संपर्क करें",
    nav_faq: "सामान्य प्रश्नोत्तर",

    // Hero Section
    hero_badge: "बिहार में पंजीकृत अवसंरचना कंपनी • CIN: U42209BR2026PTC088206",
    hero_title: "कल का बुनियादी ढांचा, <br><span class=\"text-gradient\">आज बनाते हैं</span>",
    hero_lead: "चांदतारा इन्फ्रा प्राइवेट लिमिटेड — गुणवत्ता, पारदर्शिता, सुरक्षा और समयबद्ध कार्य के संकल्प के साथ सिविल निर्माण, सौर ऊर्जा, जलापूर्ति, भारी अवसंरचना एवं कौशल विकास में समर्पित।",
    hero_pill_1: "निर्माण व अवसंरचना",
    hero_pill_2: "सौर ऊर्जा परियोजनाएं",
    hero_pill_3: "जल व पाइपलाइन नेटवर्क",
    hero_pill_4: "कौशल विकास",
    btn_explore_services: "प्रमुख कार्यक्षेत्र देखें",
    btn_contact_us: "परियोजना चर्चा करें",
    btn_quick_whatsapp: "व्हाट्सएप इंक्वायरी",
    stat_sectors: "प्रमुख MOA कार्यक्षेत्र",
    stat_compliance: "संवैधानिक व कानूनी अनुपालन",
    stat_support: "तकनीकी व साइट समन्वय",

    // About Section
    about_tag: "कंपनी परिचय",
    about_title: "विश्वसनीयता और आधुनिक इंजीनियरिंग का संगम",
    about_subtitle: "चांदतारा इन्फ्रा प्राइवेट लिमिटेड बिहार में निगमित एक गतिशील और बहुआयामी अवसंरचना कंपनी है, जो गुणवत्ता, सुरक्षा और कानूनी पारदर्शिता के साथ राष्ट्र निर्माण में भागीदार है।",
    about_profile_heading: "निगमन एवं संवैधानिक परिचय",
    about_profile_text: "<strong>Chandtara Infra Private Limited</strong> भारत सरकार के कॉर्पोरेट कार्य मंत्रालय (Ministry of Corporate Affairs) के अधीन बिहार में पंजीकृत एक विधिवत प्राइवेट लिमिटेड कंपनी है। कंपनी का उद्देश्य आधुनिक इंजीनियरिंग पद्धतियों, कुशल मानव संसाधन और उच्चकोटि की निर्माण सामग्रियों के जरिए हर प्रोजेक्ट को समय पर और निर्धारित बजट में सफलतापूर्वक पूरा करना है।",
    about_vision_heading: "हमारा दृष्टिकोण (Vision)",
    about_vision_text: "परियोजनाओं को सुनियोजित योजना, तकनीकी समझ, गुणवत्तापूर्ण सामग्री, प्रशिक्षित मानव संसाधन और सुरक्षित कार्य-पद्धति के साथ समय पर पूरा करना।",
    about_mission_heading: "हमारा संकल्प (Commitment)",
    about_mission_text: "हर कार्य में ग्राहक की आवश्यकता, अनुबंध की शर्तों, श्रमिक कल्याण और लागू पर्यावरण व वैधानिक कानूनों का शत-प्रतिशत पालन सुनिश्चित करना।",
    about_commitments_heading: "हमारी कार्य-प्रतिबद्धताएं",
    commit_1: "कार्य शुरू करने से पहले दायरा, समय-सीमा, संसाधन और गुणवत्ता मानकों की संपूर्ण योजना।",
    commit_2: "सुरक्षा, श्रमिक कल्याण, पीपीई किट और कार्यस्थल अनुशासन पर विशेष ध्यान।",
    commit_3: "योग्य तकनीकी विशेषज्ञों, पंजीकृत एजेंसियों और अनुमोदित आपूर्तिकर्ताओं के साथ समन्वय।",
    commit_4: "प्रगति, निरीक्षण, परीक्षण और पारदर्शी हस्तांतरण का व्यवस्थित अभिलेख (Documentation)।",

    // Official Slogans & Pillars from Poster
    motto_text: "सपनों को शक्ति दें हम — स्वच्छ ऊर्जा, सशक्त समाज, समृद्ध भारत!",
    pillar_1: "ऊर्जा",
    pillar_2: "कौशल",
    pillar_3: "विकास",
    pillar_4: "समृद्धि",

    // MOA Clause 3(b) Ancillary Box
    moa_ancillary_heading: "MOA क्लॉज 3(b) — 33 सहायक अधिकार एवं शक्तियां",
    moa_ancillary_sub: "कंपनी के मुख्य उद्देश्यों के समर्थन में विस्तृत वैधानिक शक्तियां",
    moa_ancillary_desc: "कंपनी को संयुक्त उद्यम (Joint Ventures), तकनीकी साझेदारी, आधुनिक मशीनरी एवं संयंत्र अधिग्रहण, परिसंपत्ति प्रबंधन, वैज्ञानिक अनुसंधान, और बहु-स्तरीय वित्तीय साधनों के उपयोग हेतु MOA में 33 सहायक अधिकार प्राप्त हैं।",
    moa_tag_1: "संयुक्त उद्यम व साझेदारी",
    moa_tag_2: "मशीनरी व प्लांट अधिग्रहण",
    moa_tag_3: "तकनीकी सहयोग व अनुसंधान",
    moa_tag_4: "विधिक सुरक्षा व मध्यस्थता",

    // Trust Card
    trust_card_heading: "संवैधानिक व वैधानिक विवरण",
    trust_card_sub: "भारत सरकार एवं बिहार राज्य द्वारा आधिकारिक पंजीकृत विवरण",
    stat_directors_label: "अधिकृत निदेशक (Directors)",
    stat_directors_val: "शिवदानी कुमार सिंह, गुड्डू सिंह",
    stat_office_label: "पंजीकृत कार्यालय (Registered Office)",
    stat_office_val: "C/O गुड्डू सिंह, 101 कमला राय कॉलेज रोड, अरार मोड़, गोपालगंज, बिहार – 841428",
    stat_incorp_label: "निगमन तिथि (Date of Incorporation)",
    stat_incorp_val: "17 सितंबर 2026 (17/09/2026)",
    stat_capital_label: "अधिकृत शेयर पूँजी (Clause 5)",
    stat_capital_val: "₹ 10,00,000 (1,00,000 इक्विटी शेयर @ ₹10)",
    stat_shareholding_label: "शेयरधारिता संरचना (Clause 6)",
    stat_shareholding_val: "शिवदानी कुमार सिंह: 5,100 शेयर (51%) | गुड्डू सिंह: 4,900 शेयर (49%)",
    stat_liability_label: "दायित्व संरचना (Clause 4)",
    stat_liability_val: "सीमित देयता (Company Limited by Shares)",
    trust_note: "कंपनी के सभी अनुबंध एवं कार्य भारतीय कंपनी अधिनियम 2013 एवं लागू विधियों के पूर्ण अनुपालन में संचालित होते हैं।",

    // Counters
    counter_1_title: "प्रमुख MOA कार्यक्षेत्र",
    counter_1_desc: "सिविल, सौर, जल, अवसंरचना व सामग्री",
    counter_2_title: "प्रशिक्षित मानव संसाधन",
    counter_2_desc: "कुशल इंजीनियर, सुपरवाइजर व कारीगर",
    counter_3_title: "कानूनी व वैधानिक अनुपालन",
    counter_3_desc: "CIN, GSTIN, PAN एवं मानक अनुबंध",
    counter_4_title: "गुणवत्ता व समयबद्धता",
    counter_4_desc: "स्थल निरीक्षण से पारदर्शी हैंडओवर तक",

    // Services (from MOA Catalogue)
    services_tag: "कंपनी कैटलॉग एवं MOA कार्यक्षेत्र",
    services_title: "हमारे प्रमुख व्यावसायिक कार्यक्षेत्र",
    services_subtitle: "कंपनी के Memorandum of Association (MOA) में दर्ज अधिकृत व्यावसायिक कार्य — गुणवत्ता, तकनीकी दक्षता और आधुनिक मानकों के साथ।",
    btn_view_details: "विस्तृत विवरण देखें",

    srv_1_title: "सिविल निर्माण एवं भवन अवसंरचना",
    srv_1_desc: "आवासीय मकान, फ्लैट, बंगले, कॉलोनियां, वाणिज्यिक भवन, दुकान, मॉल, होटल, गोदाम व आधुनिक वेयरहाउस निर्माण, मरम्मत व नवीनीकरण।",
    srv_1_b1: "आवासीय एवं वाणिज्यिक प्रोजेक्ट्स",
    srv_1_b2: "गोदाम, शेड व वेयरहाउस संरचना",
    srv_1_b3: "रेट्रोफिटिंग व आधुनिक नवीनीकरण",

    srv_2_title: "सार्वजनिक एवं भारी अवसंरचना",
    srv_2_desc: "सड़कें, राजमार्ग, पुल, फ्लाईओवर, एक्सप्रेसवे, बांध, नहर, जल भंडारण संरचनाएं और सार्वजनिक उपयोगिता के भारी इंजीनियरिंग कार्य।",
    srv_2_b1: "सड़कें, हाईवे, पुल व फ्लाईओवर",
    srv_2_b2: "नहर, बांध व जलाशय संरचनाएं",
    srv_2_b3: "सरकारी व निजी निविदा आधारित कार्य",

    srv_3_title: "सौर ऊर्जा परियोजनाओं का विकास",
    srv_3_desc: "सौर फोटोवोल्टिक (PV) संयंत्र, छत पर रूफटॉप सोलर, ग्राउंड-माउंटेड, फ्लोटिंग, ऑन-ग्रिड व हाइब्रिड प्रणालियों की स्थापना व रखरखाव।",
    srv_3_b1: "रूफटॉप एवं ग्राउंड माउंटेड सोलर",
    srv_3_b2: "ऑन-ग्रिड, ऑफ-ग्रिड व हाइब्रिड सिस्टम",
    srv_3_b3: "नियमित रखरखाव एवं निगरानी",

    srv_4_title: "सौर उपकरण आपूर्ति एवं व्यापार",
    srv_4_desc: "टियर-1 सोलर पैनल, मॉड्यूल, इन्वर्टर, स्टोरेज बैटरी, माउंटिंग स्ट्रक्चर, सोलर पंप एवं संपूर्ण विद्युत घटकों की थोक आपूर्ति।",
    srv_4_b1: "उच्च दक्षता सोलर मॉड्यूल व पैनल",
    srv_4_b2: "सोलर इन्वर्टर, बैटरी व कंट्रोलर",
    srv_4_b3: "प्रोजेक्ट-आधारित एकीकृत आपूर्ति",

    srv_5_title: "जलापूर्ति, पाइपलाइन व सिंचाई",
    srv_5_desc: "पेयजल पाइपलाइन नेटवर्क, ओवरहेड/भूमिगत पानी टंकी, पंपिंग स्टेशन, बोरवेल, ट्यूबवेल, ड्रेनेज व कृषि सिंचाई प्रणाली का निर्माण।",
    srv_5_b1: "भूमिगत पाइपलाइन व वितरण नेटवर्क",
    srv_5_b2: "ओवरहेड पानी टंकी (OHT) व पंप स्टेशन",
    srv_5_b3: "ट्यूबवेल बोरिंग व सिंचाई समाधान",

    srv_6_title: "रियल एस्टेट व भूमि विकास",
    srv_6_desc: "भूखंडों का उप-विभाजन, कॉलोनी विकास, टाउनशिप प्लानिंग, सड़क-नाली-बिजली के साथ सुसज्जित प्लॉटिंग और वैध दस्तावेजीकरण।",
    srv_6_b1: "सुनियोजित आवासीय प्लॉट व टाउनशिप",
    srv_6_b2: "मूलभूत सुविधाएं (सड़क, नाली, बिजली)",
    srv_6_b3: "कानूनी पारदर्शिता व स्पष्ट मालिकाना हक",

    srv_7_title: "निर्माण सामग्री व उपकरण प्रबंधन",
    srv_7_desc: "प्रीकास्ट कंक्रीट घटक, सीमेंट, ईंट, टीएमटी स्टील बार, बीम, निर्माण संयंत्र, कंक्रीट मिक्सर एवं आधुनिक मशीनरी की आपूर्ति व प्रबंधन।",
    srv_7_b1: "गुणवत्तायुक्त सीमेंट, स्टील व ईंट",
    srv_7_b2: "प्रीकास्ट व प्रीफैब्रिकेटेड घटक",
    srv_7_b3: "कंस्ट्रक्शन मशीनरी व प्लांट व्यवस्था",

    srv_8_title: "कौशल विकास एवं व्यावसायिक प्रशिक्षण",
    srv_8_desc: "युवाओं और कामगारों के लिए व्यावहारिक तकनीकी शिक्षा, निर्माण सुरक्षा, सोलर इंस्टॉलेशन, उपकरण संचालन व उद्यमिता विकास कार्यक्रम।",
    srv_8_b1: "तकनीकी व व्यावहारिक कौशल कार्यक्रम",
    srv_8_b2: "कार्यस्थल सुरक्षा व गुणवत्ता मानक",
    srv_8_b3: "स्थानीय रोजगार व स्वरोजगार प्रोत्साहन",

    srv_9_title: "मानव संसाधन एवं मैनपावर सेवाएं",
    srv_9_desc: "अवसंरचना व औद्योगिक परियोजनाओं के लिए कुशल, अर्ध-कुशल व प्रबंधकीय श्रम शक्ति की भर्ती, सत्यापन, प्रशिक्षण व तैनाती का समन्वय।",
    srv_9_b1: "कुशल तकनीशियन व साइट इंजीनियर",
    srv_9_b2: "श्रमिक कल्याण व सुरक्षा अनुपालन",
    srv_9_b3: "परियोजना-आधारित त्वरित तैनाती",

    srv_10_title: "भवन एवं अवसंरचना मेंटेनेंस (AMC)",
    srv_10_desc: "सरकारी व निजी भवनों, सोसाइटियों, सड़कों व परिसंपत्तियों की नियमित मरम्मत, नवीनीकरण, स्ट्रक्चरल ऑडिट, वाटरप्रूफिंग एवं वार्षिक रखरखाव अनुबंध (AMC)।",
    srv_10_b1: "वार्षिक रखरखाव अनुबंध (AMC) व नियमित निगरानी",
    srv_10_b2: "संरचनात्मक मरम्मत, वाटरप्रूफिंग व पुताई",
    srv_10_b3: "सरकारी, संस्थागत व व्यावसायिक परिसर संधारण",

    srv_11_title: "खाद्य प्रसंस्करण एवं राशन/खाद्यान्न आपूर्ति",
    srv_11_desc: "थोक खाद्यान्न (गेहूं, चावल, दाल, तिलहन) आपूर्ति, संस्थागत/सरकारी राशन टेंडर वितरण, फूड प्रोसेसिंग इंडस्ट्री ट्रेडिंग व आपूर्ति श्रृंखला प्रबंधन।",
    srv_11_b1: "थोक खाद्यान्न, अनाज व राशन वितरण",
    srv_11_b2: "सरकारी, संस्थागत व हॉस्टल राशन टेंडर",
    srv_11_b3: "फूड प्रोसेसिंग इकाइयों हेतु कच्चा माल व सेलिंग",

    // Why Choose Us
    why_tag: "हमारी श्रेष्ठता",
    why_title: "चांदतारा इन्फ्रा ही क्यों चुनें?",
    why_subtitle: "हर परियोजना में स्थानीय अनुभव, तकनीकी मजबूती और कठोर नैतिक मानकों के साथ हम सर्वोत्तम परिणाम प्रदान करते हैं।",
    why_1_title: "सख्त गुणवत्ता नियंत्रण",
    why_1_desc: "कच्ची निर्माण सामग्री के लैब टेस्ट से लेकर निर्माण के हर चरण में कड़े आईएसओ व इंजीनियरिंग मानकों का पालन किया जाता है।",
    why_2_title: "100% पारदर्शिता एवं ईमानदारी",
    why_2_desc: "लागत, सामग्री विनिर्देश और प्रगति रिपोर्टिंग में पूर्ण पारदर्शिता। कोई छिपा हुआ खर्च या भ्रामक वादे नहीं।",
    why_3_title: "समयबद्ध परियोजना निष्पादन",
    why_3_desc: "माइलस्टोन-आधारित प्रोजेक्ट शेड्यूलिंग, आधुनिक मशीनरी और कुशल लेबर मैनेजमेंट के जरिए समय पर प्रोजेक्ट डिलीवरी।",
    why_4_title: "पूर्ण वैधानिक व विधिक अनुपालन",
    why_4_desc: "मान्य CIN, GSTIN, PAN, RERA दिशानिर्देश, श्रमिक सुरक्षा कानून और स्थानीय विकास प्राधिकरण के नियमों का पूर्ण पालन।",
    why_5_title: "स्थानीय भूगोल एवं आवश्यकताओं की समझ",
    why_5_desc: "गोपालगंज, सीवान, छपरा और संपूर्ण बिहार की मिट्टी, जलवायु, लॉजिस्टिक्स और प्रशासनिक प्रक्रियाओं का सुदृढ़ जमीनी अनुभव।",

    // 7-Step Process (from Catalogue Page 15)
    process_tag: "कार्यप्रणाली",
    process_title: "परियोजना निष्पादन के 7 प्रमाणित चरण",
    process_subtitle: "कैटलॉग में उल्लिखित हमारी चरणबद्ध प्रक्रिया जो हर परियोजना में शून्य त्रुटि और सर्वोच्च गुणवत्ता सुनिश्चित करती है।",
    step_1_phase: "चरण 1",
    step_1_title: "आवश्यकता और कार्य-दायरे का अध्ययन",
    step_1_desc: "ग्राहक की प्राथमिक आवश्यकताओं, बजट सीमाओं, कार्यक्षेत्र और अनुबंध के मूलभूत लक्ष्यों का सूक्ष्म विश्लेषण।",
    step_2_phase: "चरण 2",
    step_2_title: "स्थल निरीक्षण व तकनीकी योजना",
    step_2_desc: "साइट का भौतिक व भौगोलिक सर्वेक्षण, मिट्टी परीक्षण, व्यवहार्यता रिपोर्ट एवं विस्तृत इंजीनियरिंग आर्किटेक्चरल डिजाइन।",
    step_3_phase: "चरण 3",
    step_3_title: "लागत, समय-सीमा व संसाधन आकलन",
    step_3_desc: "सामग्री, लेबर और मशीनरी की विस्तृत बिल ऑफ क्वांटिटी (BOQ), समयबद्ध माइलस्टोन और जोखिम प्रबंधन योजना तैयार करना।",
    step_4_phase: "चरण 4",
    step_4_title: "सामग्री गुणवत्ता व आपूर्तिकर्ता सत्यापन",
    step_4_desc: "विश्वसनीय व प्रमाणित आपूर्तिकर्ताओं से सीमेंट, स्टील, सोलर पैनल व पाइप्स का गुणवत्ता परीक्षण व साइट पर आपूर्ति।",
    step_5_phase: "चरण 5",
    step_5_title: "सुरक्षा योजना व कार्यस्थल व्यवस्था",
    step_5_desc: "श्रमिक सुरक्षा प्रशिक्षण, आपातकालीन उपाय, आवश्यक सुरक्षा उपकरण (PPE Kits) और साइट अनुशासन की सुदृढ़ स्थापना।",
    step_6_phase: "चरण 6",
    step_6_title: "निर्माण/स्थापना व गुणवत्ता निरीक्षण",
    step_6_desc: "विशेषज्ञ इंजीनियरों की देखरेख में निर्माण कार्य, दैनिक प्रगति ट्रैकिंग, गैर-विनाशकारी परीक्षण और कड़ा गुणवत्ता नियंत्रण।",
    step_7_phase: "चरण 7",
    step_7_title: "परीक्षण, पारदर्शी हस्तांतरण व रखरखाव",
    step_7_desc: "अंतिम लोड टेस्टिंग, कमीशनिंग, संपूर्ण दस्तावेजों के साथ क्लाइंट को प्रोजेक्ट हैंडओवर और आवश्यक पोस्ट-हैंडओवर सपोर्ट।",

    // Projects / Gallery
    projects_tag: "कार्य एवं दीर्घा",
    projects_title: "हमारे विविध परियोजना क्षेत्र",
    projects_subtitle: "चांदतारा इन्फ्रा के बहुआयामी कार्यक्षेत्रों की झलक — आधुनिक तकनीक और टिकाऊ गुणवत्ता के साथ निर्मित।",
    filter_all: "सभी कार्य (All)",
    filter_civil: "सिविल एवं भवन",
    filter_infra: "अवसंरचना (Infra)",
    filter_solar_water: "सौर एवं जल नेटवर्क",
    filter_estate_material: "रियल एस्टेट व सामग्री",

    prj_cat_civil: "सिविल निर्माण",
    prj_1_name: "आधुनिक बहुमंजिला आवासीय व वाणिज्यिक परिसर",
    prj_1_desc: "भूकंपरोधी आरसीसी संरचना, आधुनिक डिजाइन, अग्नि सुरक्षा व टिकाऊ फिनिशिंग के साथ निर्माण।",

    prj_cat_infra: "भारी अवसंरचना",
    prj_2_name: "सड़क, पुलिया एवं ड्रेनेज नेटवर्क निर्माण",
    prj_2_desc: "ग्रामीण व शहरी कनेक्टिविटी बढ़ाने के लिए टिकाऊ कंक्रीट/बिटुमिनस रोड व पुलिया निर्माण।",

    prj_cat_solar: "सौर ऊर्जा",
    prj_3_name: "कमर्शियल व संस्थागत रूफटॉप सोलर ग्रिड",
    prj_3_desc: "उच्च दक्षता मोनो पीईआरसी पैनल्स व इन्वर्टर से सुसज्जित ऑन-ग्रिड सोलर पावर सॉल्यूशन।",

    prj_cat_water: "जलापूर्ति एवं सिंचाई",
    prj_4_name: "पेयजल पाइपलाइन व ओवरहेड टैंक (OHT) सिस्टम",
    prj_4_desc: "ग्रामीण व उप-नगरीय जलापूर्ति के लिए पंपिंग स्टेशन, एचडीपीई पाइपलाइन व टैंक निर्माण।",

    prj_cat_estate: "रियल एस्टेट विकास",
    prj_5_name: "सुनियोजित आवासीय कॉलोनी एवं लैंड प्लॉटिंग",
    prj_5_desc: "30 फीट चौड़ी सड़कें, जल निकासी, प्रकाश व्यवस्था और विधिक क्लियरेंस के साथ प्राइम प्लॉट्स।",

    prj_cat_material: "सामग्री आपूर्ति",
    prj_6_name: "प्रीकास्ट कंक्रीट व उच्चकोटि सामग्री आपूर्ति",
    prj_6_desc: "परियोजना-आधारित सीमेंट, टीएमटी बार, प्रीफैब बाउंड्री वॉल और हेवी मशीनरी समन्वय।",

    // Directors
    directors_tag: "कंपनी नेतृत्व",
    directors_title: "हमारे दूरदर्शी निदेशक मंडल",
    directors_subtitle: "अनुभवी, समर्पित और प्रगतिशील नेतृत्व के मार्गदर्शन में चांदतारा इन्फ्रा नित नए कीर्तिमान स्थापित कर रही है।",
    dir_1_name: "शिवदानी कुमार सिंह",
    dir_1_role: "निदेशक (Director)",
    dir_1_bio: "अवसंरचना, सिविल निर्माण एवं तकनीकी नवाचार में गहरी विशेषज्ञता। उनका विजन आधुनिक तकनीक और ग्रामीण-शहरी विकास के बीच एक मजबूत सेतु का निर्माण करना है।",
    dir_chip_1: "स्ट्रैटेजिक लीडरशिप",
    dir_chip_2: "ग्रीन एनर्जी विजन",

    dir_2_name: "गुड्डू सिंह",
    dir_2_role: "निदेशक (Director)",
    dir_2_bio: "साइट संचालन, संसाधन प्रबंधन एवं स्थानीय जनसंपर्क में विस्तृत अनुभव। प्रोजेक्ट्स के निर्बाध ऑन-ग्राउंड क्रियान्वयन और ग्राहक संतुष्टि में अग्रणी।",
    dir_chip_3: "ऑन-साइट ऑपरेशन्स",
    dir_chip_4: "क्लाइंट समन्वय",

    // Testimonials
    testi_tag: "क्लाइंट प्रतिक्रिया",
    testi_title: "ग्राहकों एवं भागीदारों का विश्वास",
    testi_1_text: "\"चांदतारा इन्फ्रा के साथ हमारे कमर्शियल बिल्डिंग का निर्माण कार्य बेहद सुगम रहा। सामग्री की गुणवत्ता, समयबद्धता और दोनों निदेशकों का व्यक्तिगत समन्वय सराहनीय था।\"",
    testi_1_name: "राजेश कुमार श्रीवास्तव",
    testi_1_role: "वाणिज्यिक संपत्ति स्वामी, गोपालगंज",

    testi_2_text: "\"रूफटॉप सोलर इंस्टॉलेशन में चांदतारा इन्फ्रा की टीम ने बेहतरीन काम किया। तकनीकी समझ और पारदर्शी बिलिंग ने हमें पूरी तरह संतुष्ट किया।\"",
    testi_2_name: "अरविन्द प्रकाश सिंह",
    testi_2_role: "संस्थागत परिसर प्रबंधक, सीवान",

    testi_3_text: "\"जलापूर्ति पाइपलाइन और पंपिंग स्टेशन के प्रोजेक्ट में सुरक्षा व गुणवत्ता नियंत्रण उच्चतम स्तर का रहा। सरकारी मानकों का शत-प्रतिशत अनुपालन देखने को मिला।\"",
    testi_3_name: "सुनील चौबे",
    testi_3_role: "इन्फ्रास्ट्रक्चर कंसल्टेंट, पटना",

    // FAQ
    faq_tag: "सामान्य प्रश्नोत्तर",
    faq_title: "अक्सर पूछे जाने वाले सवाल",
    faq_1_q: "क्या चांदतारा इन्फ्रा प्राइवेट लिमिटेड एक सरकारी पंजीकृत कंपनी है?",
    faq_1_a: "हाँ, चांदतारा इन्फ्रा प्राइवेट लिमिटेड भारत सरकार के कॉर्पोरेट कार्य मंत्रालय (Ministry of Corporate Affairs) में निगमित एक विधिवत प्राइवेट लिमिटेड कंपनी है। हमारा CIN: U42209BR2026PTC088206, GSTIN: 10AAOCC2572J1AP और PAN: AAOCC2572J है।",
    faq_2_q: "कंपनी किन-किन क्षेत्रों और जिलों में अपनी सेवाएं प्रदान करती है?",
    faq_2_a: "हमारा मुख्य कार्यालय गोपालगंज (बिहार) में स्थित है। हम गोपालगंज, सीवान, छपरा (सारण), मुजफ्फरपुर, पटना तथा संपूर्ण बिहार और निकटवर्ती क्षेत्रों में सिविल, सौर ऊर्जा, पाइपलाइन व अवसंरचना कार्य निष्पादित करते हैं।",
    faq_3_q: "क्या आप निजी एवं सरकारी दोनों प्रकार की निविदाओं और अनुबंधों में कार्य करते हैं?",
    faq_3_a: "हाँ। कंपनी के MOA के अनुसार हम निजी आवास, व्यावसायिक गोदाम, रियल एस्टेट विकास के साथ-साथ सरकारी व अर्ध-सरकारी विभागों की पात्रता व निविदा (Tender) शर्तों के अनुसार संयुक्त उपक्रम या प्रत्यक्ष अनुबंध के अंतर्गत कार्य करने हेतु अधिकृत हैं।",
    faq_4_q: "रूफटॉप सोलर या जल वितरण प्रोजेक्ट के लिए संपर्क कैसे करें?",
    faq_4_a: "आप हमारी वेबसाइट के संपर्क फॉर्म, डायरेक्ट कॉल (+91 8797121854 / 9097305399) अथवा सीधे व्हाट्सएप चैट के माध्यम से अपनी आवश्यकता भेज सकते हैं। हमारी तकनीकी टीम 24 घंटे के भीतर संपर्क कर साइट सर्वे की योजना बनाएगी।",
    faq_5_q: "सामग्री की गुणवत्ता और सुरक्षा मानकों की निगरानी कैसे होती है?",
    faq_5_a: "कंपनी का स्पष्ट संकल्प है: कार्य शुरू करने से पहले विस्तृत योजना, स्वीकृत आपूर्तिकर्ताओं से प्रामाणिक सामग्री की खरीद, ऑन-साइट प्रयोगशाला परीक्षण, श्रमिकों के लिए सुरक्षा उपकरण (PPE Kits) और चरणबद्ध प्रलेखन (Documentation)।",

    // Contact & Form
    contact_tag: "संपर्क एवं सहयोग",
    contact_title: "आइए, गुणवत्तापूर्ण भविष्य का निर्माण करें",
    contact_subtitle: "अपनी नई परियोजना, निविदा सहयोग, सोलर स्थापना या सामग्री आपूर्ति के लिए हमारे निदेशकों से सीधा संपर्क करें।",
    c_office_title: "मुख्य पंजीकृत कार्यालय",
    c_office_address: "C/O Guddu Singh, 101 Kamala Rai College Road, Arar More, Gopalganj, District Gopalganj, Bihar – 841428",
    c_map_link: "गूगल मैप पर देखें",
    c_phone_title: "सीधा फोन संपर्क (Direct Helpline)",
    c_email_title: "ईमेल संपर्क",
    c_yt_title: "यूट्यूब चैनल (आधिकारिक अपडेट्स)",
    c_yt_desc: "परियोजनाओं के वीडियो, साइट निरीक्षण व तकनीकी जानकारियों के लिए हमारे चैनल से जुड़ें:",
    c_fb_title: "फेसबुक पेज (आधिकारिक अपडेट्स)",
    c_fb_desc: "परियोजनाओं की ताज़ा तस्वीरें, वीडियो व साइट अपडेट्स के लिए हमारे आधिकारिक फेसबुक पेज से जुड़ें:",
    c_fb_btn: "Facebook पर फॉलो करें",
    wa_box_title: "व्हाट्सएप पर त्वरित संदेश भेजें",
    wa_box_desc: "तत्काल प्रतिक्रिया के लिए हमारे आधिकारिक नंबर पर चैट शुरू करें।",
    wa_box_btn: "व्हाट्सएप चैट शुरू करें",

    form_heading: "परियोजना पूछताछ एवं परामर्श फॉर्म",
    form_sub: "कृपया नीचे दिया गया विवरण भरें। हम शीघ्र ही आपसे संपर्क करेंगे।",
    form_lbl_name: "आपका पूरा नाम *",
    form_lbl_phone: "मोबाइल नंबर *",
    form_lbl_email: "ईमेल आईडी",
    form_lbl_service: "रुचि का कार्यक्षेत्र / सेवा चुनें *",
    form_lbl_msg: "परियोजना का विवरण / संदेश *",
    btn_send_inquiry: "पूछताछ भेजें (Send Inquiry)",
    form_privacy: "आपकी जानकारी पूरी तरह गोपनीय रखी जाएगी। कोई स्पैम नहीं।",

    // Form Placeholders
    ph_name: "उदा. रमेश कुमार",
    ph_phone: "10 अंकों का मोबाइल नंबर",
    ph_email: "example@gmail.com",
    ph_msg: "अपनी परियोजना, स्थान या आवश्यकता का संक्षिप्त विवरण यहाँ लिखें...",

    // Form Options
    opt_select: "कार्यक्षेत्र का चयन करें...",
    opt_1: "सिविल निर्माण एवं भवन अवसंरचना",
    opt_2: "सार्वजनिक एवं भारी अवसंरचना (सड़क/पुल)",
    opt_3: "सौर ऊर्जा परियोजनाएं (रूफटॉप/ग्राउंड)",
    opt_4: "सौर उपकरण आपूर्ति एवं व्यापार",
    opt_5: "जलापूर्ति, पाइपलाइन एवं सिंचाई",
    opt_6: "रियल एस्टेट व भूमि विकास (कॉलोनी/प्लॉट)",
    opt_7: "निर्माण सामग्री व उपकरण प्रबंधन",
    opt_8: "कौशल विकास एवं प्रशिक्षण",
    opt_9: "मानव संसाधन एवं मैनपावर सेवाएं",
    opt_10: "अन्य सामान्य परामर्श / साझेदारी",
    opt_11: "भवन एवं अवसंरचना मेंटेनेंस / AMC",
    opt_12: "खाद्य प्रसंस्करण एवं राशन/खाद्यान्न आपूर्ति",

    // Success Screen
    success_title: "धन्यवाद! संदेश सफलतापूर्वक तैयार हो गया",
    success_desc: "हम आपके संदेश को सीधे व्हाट्सएप या ईमेल के माध्यम से प्रेषित कर रहे हैं:",
    btn_open_wa: "व्हाट्सएप पर भेजें",
    btn_open_mail: "ईमेल द्वारा भेजें",
    btn_new_msg: "नया संदेश लिखें",

    // Map
    map_title: "कार्यालय अवस्थिति (Office Location)",
    map_sub: "कमला राय कॉलेज रोड, अरार मोड़, गोपालगंज, बिहार – 841428",
    map_directions: "दिशा-निर्देश प्राप्त करें",

    // Footer
    footer_about: "हर परियोजना में गुणवत्ता, पारदर्शिता, सुरक्षा और समयबद्ध कार्य का अटूट संकल्प। बिहार में अवसंरचना विकास की नई पहचान।",
    footer_quick_links: "त्वरित लिंक",
    footer_verticals: "प्रमुख कार्यक्षेत्र",
    footer_contact_heading: "कार्यालय एवं संपर्क",
    footer_address: "C/O Guddu Singh, 101 Kamala Rai College Road, Arar More, Gopalganj, Bihar – 841428",
    footer_disclaimer_text: "<strong>वैधानिक स्पष्टीकरण:</strong> यह वेबसाइट कंपनी के उपलब्ध Memorandum of Association (MOA) एवं संवैधानिक दस्तावेजों के आधार पर तैयार परिचयात्मक मंच है। प्रत्येक परियोजना संबंधित निविदा, अनुबंध, तकनीकी मानक, वैधानिक अनुमति और कंपनी की वास्तविक पात्रता के अधीन होगी।",
    footer_copyright: "© 2026 चांदतारा इन्फ्रा प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित। (CIN: U42209BR2026PTC088206)",
    footer_leadership: "नेतृत्व:",
    footer_terms: "नियम एवं शर्तें",
    footer_privacy: "गोपनीयता नीति",
    footer_disclaimer_link: "वैधानिक डिस्क्लेमर",

    // Floating & Mobile
    wa_tooltip: "व्हाट्सएप पर बात करें",
    mbar_call: "कॉल करें",
    mbar_wa: "व्हाट्सएप",
    mbar_inquire: "पूछताछ",

    // Modals
    modal_btn_inquire: "इस कार्य हेतु संपर्क करें",
    modal_btn_close: "बंद करें"
  },

  en: {
    // Page Title & Meta
    page_title: "Chandtara Infra Private Limited | Infrastructure, Civil, Solar & Water Solutions - Gopalganj, Bihar",
    meta_desc: "Chandtara Infra Private Limited - Leading provider of civil construction, solar energy, water pipelines, heavy infrastructure, real estate & skill development. Gopalganj, Bihar.",

    // Top Bar
    topbar_reg: "Govt. Registered Pvt. Ltd. Company (Bihar, India)",

    // Brand
    brand_name: "Chandtara Infra",
    brand_tagline: "Private Limited",

    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_why_us: "Why Us",
    nav_process: "Process",
    nav_projects: "Projects",
    nav_directors: "Directors",
    nav_contact: "Contact Us",
    nav_faq: "FAQ",

    // Hero Section
    hero_badge: "Registered Infrastructure Company in Bihar • CIN: U42209BR2026PTC088206",
    hero_title: "Building Tomorrow's <br><span class=\"text-gradient\">Infrastructure Today</span>",
    hero_lead: "Chandtara Infra Private Limited — dedicated to civil construction, solar power, water supply pipelines, heavy infrastructure, and skill development with unwavering commitment to quality, transparency, safety, and timeliness.",
    hero_pill_1: "Construction & Infra",
    hero_pill_2: "Solar Energy Projects",
    hero_pill_3: "Water & Pipeline Networks",
    hero_pill_4: "Skill Development",
    btn_explore_services: "Explore Business Areas",
    btn_contact_us: "Discuss Project",
    btn_quick_whatsapp: "WhatsApp Inquiry",
    stat_sectors: "Core MOA Verticals",
    stat_compliance: "Statutory & Legal Compliance",
    stat_support: "Technical & Site Support",

    // About Section
    about_tag: "Company Profile",
    about_title: "Where Trust Meets Modern Engineering Excellence",
    about_subtitle: "Chandtara Infra Private Limited is a dynamic infrastructure company incorporated in Bihar, partnering in nation building through rigorous quality, safety, and statutory compliance.",
    about_profile_heading: "Corporate & Constitutional Profile",
    about_profile_text: "<strong>Chandtara Infra Private Limited</strong> is a duly incorporated Private Limited Company under the Ministry of Corporate Affairs, Government of India. Headquartered in Gopalganj, Bihar, our mission is to execute every infrastructure undertaking on schedule and within budget through modern engineering practices, trained manpower, and verified materials.",
    about_vision_heading: "Our Vision",
    about_vision_text: "To execute projects through systematic planning, deep technical insight, high-grade materials, trained human capital, and safe work protocols.",
    about_mission_heading: "Our Commitment",
    about_mission_text: "To uphold complete compliance with client requirements, contractual terms, workforce welfare, environmental norms, and statutory laws.",
    // Operational Commitments
    about_commitments_heading: "Our Operational Commitments",
    commit_1: "Comprehensive planning of scope, timeline, resources, and quality standards before commencement.",
    commit_2: "Prioritizing on-site safety, worker welfare, PPE protocol, and strict worksite discipline.",
    commit_3: "Seamless coordination with qualified technical experts, registered agencies, and approved suppliers.",
    commit_4: "Systematic documentation of progress, inspections, material testing, and transparent handover.",

    // Official Slogans & Pillars from Poster
    motto_text: "Empowering Dreams — Clean Energy, Empowered Society, Prosperous India!",
    pillar_1: "Energy",
    pillar_2: "Skill",
    pillar_3: "Development",
    pillar_4: "Prosperity",

    // MOA Clause 3(b) Ancillary Box
    moa_ancillary_heading: "MOA Clause 3(b) — 33 Ancillary Powers & Provisions",
    moa_ancillary_sub: "Statutory mandates supporting primary corporate objects",
    moa_ancillary_desc: "Under Clause 3(b), the company is legally empowered with 33 ancillary powers encompassing Joint Ventures, technical consortiums, heavy plant & machinery acquisition, and financial instrumentations.",
    moa_tag_1: "Joint Ventures & Partnerships",
    moa_tag_2: "Plant & Machinery Acquisition",
    moa_tag_3: "Technical Collaboration",
    moa_tag_4: "Arbitration & Legal Security",

    // Trust Card
    trust_card_heading: "Statutory & Legal Credentials",
    trust_card_sub: "Officially registered under Government of India & State of Bihar",
    stat_directors_label: "Authorized Directors",
    stat_directors_val: "Shivdanee Kumar Singh, Guddu Singh",
    stat_office_label: "Registered Office Address",
    stat_office_val: "C/O Guddu Singh, 101 Kamala Rai College Road, Arar More, Gopalganj, Bihar – 841428",
    stat_incorp_label: "Date of Incorporation (MCA)",
    stat_incorp_val: "17 September 2026 (17/09/2026)",
    stat_capital_label: "Authorized Share Capital (Clause 5)",
    stat_capital_val: "₹ 10,00,000 (1,00,000 Equity Shares @ ₹10)",
    stat_shareholding_label: "Shareholding Structure (Clause 6)",
    stat_shareholding_val: "Shivdanee Kumar Singh: 5,100 Shares (51%) | Guddu Singh: 4,900 Shares (49%)",
    stat_liability_label: "Liability Structure (Clause 4)",
    stat_liability_val: "Company Limited by Shares (Private Limited)",
    trust_note: "All company contracts and operations are governed in strict compliance with the Indian Companies Act, 2013 and applicable statutory frameworks.",

    // Counters
    counter_1_title: "Core MOA Verticals",
    counter_1_desc: "Civil, Solar, Water, Heavy Infra & Supply",
    counter_2_title: "Trained Human Capital",
    counter_2_desc: "Engineers, supervisors & technical workforce",
    counter_3_title: "Statutory Compliance",
    counter_3_desc: "CIN, GSTIN, PAN & standard contracts",
    counter_4_title: "Quality & Timeliness",
    counter_4_desc: "From initial survey to transparent handover",

    // Services (from MOA Catalogue)
    services_tag: "Company Catalogue & MOA Verticals",
    services_title: "Our Key Business & Operational Sectors",
    services_subtitle: "Authorized business activities registered under our Memorandum of Association (MOA) — driven by engineering precision and modern standards.",
    btn_view_details: "View Detailed Scope",

    srv_1_title: "Civil Construction & Building Infrastructure",
    srv_1_desc: "Residential bungalows, apartments, housing colonies, commercial offices, retail shops, hotels, malls, and modern warehousing facilities.",
    srv_1_b1: "Residential & Commercial complexes",
    srv_1_b2: "Warehouses & industrial shed structures",
    srv_1_b3: "Structural retrofitting & modern renovations",

    srv_2_title: "Public & Heavy Infrastructure Projects",
    srv_2_desc: "Highways, roads, bridges, flyovers, expressways, dams, canals, water storage structures, and large-scale public utility engineering works.",
    srv_2_b1: "Roads, highways, bridges & flyovers",
    srv_2_b2: "Canals, dams & reservoir utilities",
    srv_2_b3: "Government and private tender contracts",

    srv_3_title: "Solar Energy Project Development",
    srv_3_desc: "Solar photovoltaic (PV) plants, rooftop solar systems, ground-mounted arrays, floating solar, off-grid, and grid-tied hybrid solutions.",
    srv_3_b1: "Rooftop & ground-mounted solar plants",
    srv_3_b2: "On-grid, off-grid & hybrid setups",
    srv_3_b3: "Preventive maintenance & system monitoring",

    srv_4_title: "Solar Equipment Supply & Trading",
    srv_4_desc: "Tier-1 solar modules, PV panels, solar inverters, battery storage units, mounting structures, solar water pumps, and electrical components.",
    srv_4_b1: "High-efficiency solar PV modules",
    srv_4_b2: "Solar inverters, batteries & charge controllers",
    srv_4_b3: "Project-integrated wholesale procurement",

    srv_5_title: "Water Supply, Pipeline & Irrigation",
    srv_5_desc: "Potable drinking water networks, underground & overhead water tanks (OHT), pumping stations, tube-wells, borewells, and irrigation canals.",
    srv_5_b1: "Underground pipeline & distribution networks",
    srv_5_b2: "Overhead water tanks (OHT) & pump stations",
    srv_5_b3: "Borewells & agricultural irrigation systems",

    srv_6_title: "Real Estate & Land Development",
    srv_6_desc: "Plot sub-division, gated colony planning, residential township development with roads, drainage, electrification, and clear legal titles.",
    srv_6_b1: "Planned residential plots & townships",
    srv_6_b2: "Integrated amenities (roads, drainage, power)",
    srv_6_b3: "Clean legal documentation & clear titles",

    srv_7_title: "Construction Material & Machinery Supply",
    srv_7_desc: "Precast concrete components, cement, bricks, TMT steel bars, structural beams, batching plants, transit mixers, and earthmoving machinery.",
    srv_7_b1: "Certified cement, TMT steel & quality bricks",
    srv_7_b2: "Precast & prefabricated elements",
    srv_7_b3: "Construction plant & heavy equipment logistics",

    srv_8_title: "Skill Development & Vocational Training",
    srv_8_desc: "Practical technical training for youth and workers in civil construction, safety protocols, solar installation, and entrepreneurship.",
    srv_8_b1: "Hands-on vocational & technical training",
    srv_8_b2: "Worksite safety protocols & quality standards",
    srv_8_b3: "Promoting local livelihood & entrepreneurship",

    srv_9_title: "Human Resource & Manpower Solutions",
    srv_9_desc: "Sourcing, screening, training, and deployment of skilled, semi-skilled, and managerial personnel for infrastructure projects.",
    srv_9_b1: "Skilled technicians & experienced site engineers",
    srv_9_b2: "Strict labor welfare & safety compliance",
    srv_9_b3: "Rapid on-demand project deployment",

    srv_10_title: "Civil Infrastructure Maintenance & AMC",
    srv_10_desc: "Routine repair, structural retrofitting, waterproofing, renovation, and comprehensive Annual Maintenance Contracts (AMC) for public and private infrastructure.",
    srv_10_b1: "Annual Maintenance Contracts (AMC) & Scheduled Audits",
    srv_10_b2: "Structural Repair, Waterproofing & Protective Coating",
    srv_10_b3: "Government, Institutional & Commercial Facility Upkeep",

    srv_11_title: "Food Processing & Agro-Ration Supply",
    srv_11_desc: "Bulk food grain supply (wheat, rice, pulses, oilseeds), institutional and government ration tender distribution, food processing sales, and supply chain logistics.",
    srv_11_b1: "Bulk Grains, Pulses, Staples & Ration Supply",
    srv_11_b2: "Institutional, Hostel, Hospital & Tender Supplies",
    srv_11_b3: "Raw Material Sourcing & Processed Food Trading",

    // Why Choose Us
    why_tag: "Our Distinction",
    why_title: "Why Partner With Chandtara Infra?",
    why_subtitle: "Combining deep grassroots insight in Bihar with modern engineering standards and ethical corporate practices.",
    why_1_title: "Rigorous Quality Assurance",
    why_1_desc: "Standardized laboratory tests for raw materials and strict adherence to engineering benchmarks at each project milestone.",
    why_2_title: "100% Transparency & Honesty",
    why_2_desc: "Full clarity in costing, material specifications, and progress audits. Zero hidden costs or ambiguous promises.",
    why_3_title: "Timely Project Execution",
    why_3_desc: "Milestone-driven scheduling, modern mechanical assets, and disciplined manpower planning ensure on-time delivery.",
    why_4_title: "Full Statutory & Legal Compliance",
    why_4_desc: "Valid CIN, GSTIN, PAN, RERA guidelines, labor welfare laws, and local development authority regulations strictly observed.",
    why_5_title: "Deep Regional & Soil Understanding",
    why_5_desc: "Decades of on-ground experience with the soil conditions, weather patterns, logistics, and administrative frameworks across Bihar.",

    // 7-Step Process
    process_tag: "Execution Methodology",
    process_title: "7 Certified Steps of Project Execution",
    process_subtitle: "Our systematic quality-controlled lifecycle documented in our corporate catalogue for zero defect delivery.",
    step_1_phase: "Phase 1",
    step_1_title: "Needs & Scope Analysis",
    step_1_desc: "In-depth review of client requirements, budget constraints, project footprint, and fundamental contractual goals.",
    step_2_phase: "Phase 2",
    step_2_title: "Site Survey & Technical Planning",
    step_2_desc: "Physical and topographical survey, soil testing, feasibility reports, and comprehensive architectural engineering blueprints.",
    step_3_phase: "Phase 3",
    step_3_title: "Costing, Timeline & Resource Allocation",
    step_3_desc: "Detailed Bill of Quantities (BOQ), time-bound milestone roadmaps, machinery scheduling, and risk mitigation strategies.",
    step_4_phase: "Phase 4",
    step_4_title: "Material Quality & Vendor Verification",
    step_4_desc: "Procurement of certified cement, steel, solar panels, and pipes from authorized vendors with quality verification.",
    step_5_phase: "Phase 5",
    step_5_title: "Safety Planning & Worksite Setup",
    step_5_desc: "Worksite safety protocols, worker safety briefings, mandatory PPE gear, emergency systems, and disciplined logistics setup.",
    step_6_phase: "Phase 6",
    step_6_title: "Construction, Installation & QC Audits",
    step_6_desc: "Execution under supervision of experienced civil engineers, daily progress tracking, non-destructive testing, and stringent QC.",
    step_7_phase: "Phase 7",
    step_7_title: "Testing, Commissioning & Handover",
    step_7_desc: "Full load testing, performance commissioning, transparent documentation handover to the client, and post-delivery support.",

    // Projects / Gallery
    projects_tag: "Portfolio & Gallery",
    projects_title: "Featured Project Categories",
    projects_subtitle: "A showcase of Chandtara Infra's multifaceted capabilities across engineering and green infrastructure sectors.",
    filter_all: "All Works",
    filter_civil: "Civil & Buildings",
    filter_infra: "Infrastructure",
    filter_solar_water: "Solar & Water",
    filter_estate_material: "Real Estate & Supply",

    prj_cat_civil: "Civil Construction",
    prj_1_name: "Multi-Storey Residential & Commercial Complex",
    prj_1_desc: "Earthquake-resistant RCC design, modern aesthetics, fire safety compliance, and durable long-lasting finish.",

    prj_cat_infra: "Heavy Infrastructure",
    prj_2_name: "Road, Culvert & Drainage Infrastructure",
    prj_2_desc: "Durable concrete and bituminous roadways with culverts engineered to enhance rural and suburban transport links.",

    prj_cat_solar: "Solar Energy",
    prj_3_name: "Commercial & Institutional Rooftop Solar Grid",
    prj_3_desc: "High-yield Mono PERC solar modules paired with high-efficiency grid-tied inverters for industrial energy offset.",

    prj_cat_water: "Water Supply & Irrigation",
    prj_4_name: "Potable Water Pipeline & Overhead Tank (OHT)",
    prj_4_desc: "Complete pumping stations, high-density polyethylene (HDPE) lines, and massive storage tanks for community supply.",

    prj_cat_estate: "Real Estate Development",
    prj_5_name: "Planned Residential Colony & Land Development",
    prj_5_desc: "Prime plotted developments complete with 30-ft internal roads, drainage infrastructure, electricity access, and verified titles.",

    prj_cat_material: "Materials & Supply",
    prj_6_name: "Precast Concrete & High-Grade Material Logistics",
    prj_6_desc: "Project-based supply of certified cement, TMT reinforcement, precast boundary walls, and heavy plant coordination.",

    // Directors
    directors_tag: "Corporate Leadership",
    directors_title: "Our Visionary Board of Directors",
    directors_subtitle: "Guiding Chandtara Infra with technical foresight, integrity, and deep dedication to community and nation-building.",
    dir_1_name: "Shivdanee Kumar Singh",
    dir_1_role: "Director",
    dir_1_bio: "Brings extensive expertise in infrastructure planning, civil projects, and green energy innovations. Spearheading modern technological adoption across regional developments.",
    dir_chip_1: "Strategic Leadership",
    dir_chip_2: "Green Energy Vision",

    dir_2_name: "Guddu Singh",
    dir_2_role: "Director",
    dir_2_bio: "Proven leader in site operations, vendor management, heavy machinery deployment, and community relations. Dedicated to seamless on-ground project execution and client satisfaction.",
    dir_chip_3: "On-Site Operations",
    dir_chip_4: "Client Relations",

    // Testimonials
    testi_tag: "Client Testimonials",
    testi_title: "Trusted by Clients & Partners",
    testi_1_text: "\"Working with Chandtara Infra on our commercial complex was an exemplary experience. Material quality, adherence to milestones, and proactive communication from both directors made the project seamless.\"",
    testi_1_name: "Rajesh Kumar Srivastava",
    testi_1_role: "Commercial Property Owner, Gopalganj",

    testi_2_text: "\"The rooftop solar installation done by Chandtara Infra has cut our energy expenses significantly. Their technical mastery and transparent billing gave us immense confidence.\"",
    testi_2_name: "Arvind Prakash Singh",
    testi_2_role: "Institutional Campus Manager, Siwan",

    testi_3_text: "\"Their adherence to civil standards in our water distribution pipeline and pumping station works was exemplary. Strict compliance with government guidelines was evident throughout.\"",
    testi_3_name: "Sunil Chaubey",
    testi_3_role: "Infrastructure Consultant, Patna",

    // FAQ
    faq_tag: "Frequently Asked Questions",
    faq_title: "Clarifications & Inquiries",
    faq_1_q: "Is Chandtara Infra Private Limited a legally registered company?",
    faq_1_a: "Yes. Chandtara Infra Private Limited is an incorporated Private Limited Company under the Ministry of Corporate Affairs, Government of India. Our official CIN is U42209BR2026PTC088206, GSTIN is 10AAOCC2572J1AP, and PAN is AAOCC2572J.",
    faq_2_q: "Which geographical areas and districts does the company serve?",
    faq_2_a: "Our registered office is located in Gopalganj, Bihar. We actively take up civil, solar, water pipeline, and infrastructure projects across Gopalganj, Siwan, Chhapra (Saran), Muzaffarpur, Patna, and throughout Bihar and neighboring regions.",
    faq_3_q: "Do you undertake both private and government tender contracts?",
    faq_3_a: "Yes. As per the company's registered MOA, we are legally authorized to execute private residential and commercial developments, as well as participate in public/governmental tenders, joint ventures, and contracts subject to technical eligibility.",
    faq_4_q: "How can I initiate a project consultation or site inspection?",
    faq_4_a: "You can submit an inquiry via our website form, call us directly (+91 8797121854 / 9097305399), or initiate an instant WhatsApp chat. Our technical team responds within 24 hours to schedule a preliminary site visit.",
    faq_5_q: "How do you maintain strict quality control and safety standards?",
    faq_5_a: "Our core corporate commitment includes thorough pre-commencement planning, procurement of tested materials from verified vendors, on-site laboratory testing, mandatory PPE gear for all workers, and rigorous step-by-step documentation.",

    // Contact & Form
    contact_tag: "Contact & Collaboration",
    contact_title: "Let's Build a Stronger Future Together",
    contact_subtitle: "Reach out to our leadership directly to discuss your upcoming civil project, solar installation, water infrastructure, or material supply.",
    c_office_title: "Main Registered Office",
    c_office_address: "C/O Guddu Singh, 101 Kamala Rai College Road, Arar More, Gopalganj, District Gopalganj, Bihar – 841428",
    c_map_link: "Open in Google Maps",
    c_phone_title: "Direct Phone Helpline",
    c_email_title: "Official Email Address",
    c_yt_title: "YouTube Channel (Official Updates)",
    c_yt_desc: "Watch site inspections, project milestones, and engineering walkthroughs on our channel:",
    c_fb_title: "Facebook Page (Official Updates)",
    c_fb_desc: "Connect with our official Facebook page for site photos, milestone videos, and live announcements:",
    c_fb_btn: "Follow on Facebook",
    wa_box_title: "Quick Chat on WhatsApp",
    wa_box_desc: "Connect directly with our team on WhatsApp for immediate response and updates.",
    wa_box_btn: "Open WhatsApp Chat",

    form_heading: "Project Inquiry & Consultation Form",
    form_sub: "Please fill out the form below. Our team will review your inquiry and get in touch promptly.",
    form_lbl_name: "Full Name *",
    form_lbl_phone: "Mobile Number *",
    form_lbl_email: "Email Address",
    form_lbl_service: "Select Area of Interest *",
    form_lbl_msg: "Project Details / Message *",
    btn_send_inquiry: "Send Inquiry",
    form_privacy: "Your details will remain strictly confidential. Zero spam guarantee.",

    // Form Placeholders
    ph_name: "e.g. Ramesh Kumar",
    ph_phone: "10-digit mobile number",
    ph_email: "example@gmail.com",
    ph_msg: "Briefly describe your project, site location, timeline, or requirement...",

    // Form Options
    opt_select: "Choose a business vertical...",
    opt_1: "Civil Construction & Building Infrastructure",
    opt_2: "Public & Heavy Infrastructure (Roads/Bridges)",
    opt_3: "Solar Energy Projects (Rooftop/Ground)",
    opt_4: "Solar Equipment Supply & Trading",
    opt_5: "Water Supply, Pipeline & Irrigation",
    opt_6: "Real Estate & Land Development",
    opt_7: "Construction Material & Machinery Supply",
    opt_8: "Skill Development & Vocational Training",
    opt_9: "Human Resource & Manpower Solutions",
    opt_10: "General Consultation / Partnership",
    opt_11: "Building & Civil Maintenance / AMC",
    opt_12: "Food Processing & Agro/Ration Supply",

    // Success Screen
    success_title: "Thank You! Your Inquiry is Prepared",
    success_desc: "We are ready to transmit your message via WhatsApp or Email instantly:",
    btn_open_wa: "Send via WhatsApp",
    btn_open_mail: "Send via Email",
    btn_new_msg: "Write Another Message",

    // Map
    map_title: "Office Location",
    map_sub: "Kamala Rai College Road, Arar More, Gopalganj, Bihar – 841428",
    map_directions: "Get Driving Directions",

    // Footer
    footer_about: "Unwavering commitment to quality, transparency, safety, and timely delivery in every infrastructure undertaking across Bihar and Eastern India.",
    footer_quick_links: "Quick Links",
    footer_verticals: "Business Verticals",
    footer_contact_heading: "Office & Contact",
    footer_address: "C/O Guddu Singh, 101 Kamala Rai College Road, Arar More, Gopalganj, Bihar – 841428",
    footer_disclaimer_text: "<strong>Statutory Disclaimer:</strong> This website serves as an informational platform prepared on the basis of the company's Memorandum of Association (MOA) and constitutional records. Every individual project remains subject to respective tenders, contractual agreements, technical specifications, statutory permits, and verified organizational eligibility.",
    footer_copyright: "© 2026 Chandtara Infra Private Limited. All rights reserved. (CIN: U42209BR2026PTC088206)",
    footer_leadership: "Leadership:",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    footer_disclaimer_link: "Legal Disclaimer",

    // Floating & Mobile
    wa_tooltip: "Chat with us on WhatsApp",
    mbar_call: "Call Us",
    mbar_wa: "WhatsApp",
    mbar_inquire: "Inquire",

    // Modals
    modal_btn_inquire: "Inquire About This Service",
    modal_btn_close: "Close"
  }
};

/* ==========================================================================
   2. SERVICE DETAILED MODAL DATA (Derived from MOA Catalogue)
   ========================================================================== */
const serviceModalData = {
  civil: {
    icon: 'fa-building-shield',
    tag_hi: 'सिविल निर्माण एवं भवन अवसंरचना',
    tag_en: 'Civil Construction & Buildings',
    title_hi: 'सिविल निर्माण एवं भवन अवसंरचना कार्य',
    title_en: 'Civil Construction & Building Infrastructure',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>आवासीय मकान, विला, बहुमंजिला फ्लैट्स, डुप्लेक्स और हाउसिंग कॉलोनियों का निर्माण।</li>
        <li>वाणिज्यिक परिसर, कॉर्पोरेट कार्यालय, रिटेल दुकानें, शॉपिंग मॉल, होटल और रिसॉर्ट्स।</li>
        <li>औद्योगिक गोदाम, वेयरहाउस, लॉजिस्टिक्स हब, वेयरहाउसिंग शेड और स्टोरेज सुविधाएं।</li>
        <li>पुराने भवनों की रेट्रोफिटिंग, संरचनात्मक सुदृढ़ीकरण, आधुनिक आंतरिक नवीनीकरण और नियमित मरम्मत।</li>
      </ul>
      <h4>प्रमुख लाभ एवं विशेषताएं:</h4>
      <ul>
        <li>भूकंपरोधी (Earthquake-resistant) आरसीसी फ्रेम डिजाइन और संरचनात्मक इंजीनियरिंग।</li>
        <li>सामग्री और गुणवत्ता नियंत्रण का कड़ा समन्वय जिससे निर्माण टिकाऊ और दीर्घकालिक बने।</li>
        <li>अग्नि सुरक्षा (Fire Safety), जल-संरक्षण और स्थानीय भवन उप-नियमों (Building Bye-laws) का पूर्ण अनुपालन।</li>
      </ul>
      <h4>वैधानिक अनुपालन:</h4>
      <p>स्थानीय विकास प्राधिकरण की स्वीकृति, संरचनात्मक सुरक्षा प्रमाणन और श्रमिक कल्याण मानकों के तहत कार्य संपादित किया जाता है।</p>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Construction of residential villas, multi-storey apartments, bungalows, and housing colonies.</li>
        <li>Commercial shopping complexes, corporate offices, hotels, hospitals, and educational facilities.</li>
        <li>Industrial warehouses, logistics storage yards, and heavy-duty pre-engineered steel sheds.</li>
        <li>Structural retrofitting, renovation, modern interior modernization, and regular facility maintenance.</li>
      </ul>
      <h4>Key Advantages & Features:</h4>
      <ul>
        <li>Earthquake-resistant RCC structural design verified by qualified structural engineers.</li>
        <li>Stringent material testing ensuring longevity and robust lifecycle performance.</li>
        <li>Strict adherence to local municipal building bye-laws and fire safety regulations.</li>
      </ul>
      <h4>Regulatory Compliance:</h4>
      <p>All projects comply with municipal approvals, structural safety certificates, and statutory labor welfare norms.</p>
    `
  },
  heavy_infra: {
    icon: 'fa-road-bridge',
    tag_hi: 'सार्वजनिक एवं भारी अवसंरचना',
    tag_en: 'Public & Heavy Infrastructure',
    title_hi: 'सार्वजनिक एवं भारी अवसंरचना परियोजनाएं',
    title_en: 'Public & Heavy Infrastructure Projects',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>सड़कें, राज्य राजमार्ग, राष्ट्रीय राजमार्ग संपर्क मार्ग, एक्सप्रेसवे, फ्लाईओवर और अंडरपास।</li>
        <li>पुल, आरसीसी पुलिया, ड्रेनेज कल्वर्ट और रेल ओवरब्रिज (ROB) संबंधित निर्माण कार्य।</li>
        <li>बांध, जल नियंत्रण बांध, तटबंध, नहर प्रणाली, जल भंडारण और बाढ़ सुरक्षा संरचनाएं।</li>
        <li>परियोजना प्रबंधन, गुणवत्ता जांच, आधुनिक मशीनरी संचालन और अनुबंध अनुसार निष्पादन।</li>
      </ul>
      <h4>प्रमुख लाभ एवं विशेषताएं:</h4>
      <ul>
        <li>भारी अवसंरचना कार्यों में आधुनिक पेवर, रोलर, कंक्रीट बैचिंग प्लांट और अर्थमूविंग मशीनरी का उपयोग।</li>
        <li>ग्रामीण और उप-नगरीय कनेक्टिविटी को सुगम बनाने के लिए टिकाऊ इंजीनियरिंग पद्धतियां।</li>
        <li>सरकारी एवं निजी दोनों निविदाओं में मानक तकनीकी विनिर्देशों का अनुपालन।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Roads, state highways, arterial link roads, expressways, flyovers, and underpasses.</li>
        <li>Bridges, culverts, cross-drainage structures, and rail overbridge (ROB) related civil works.</li>
        <li>Dams, barrages, embankment protection, canal networks, and flood control structures.</li>
        <li>Full turnkey execution with automated concrete batching, compaction, and testing machinery.</li>
      </ul>
      <h4>Key Advantages & Features:</h4>
      <ul>
        <li>Modern heavy earthmoving, grading, paving, and compaction plant logistics.</li>
        <li>Engineering designed for high vehicle axle loads and severe monsoon resilience.</li>
        <li>Full compliance with Indian Road Congress (IRC) and MoRTH specifications.</li>
      </ul>
    `
  },
  solar_projects: {
    icon: 'fa-sun-plant-wilt',
    tag_hi: 'सौर ऊर्जा परियोजनाएं',
    tag_en: 'Solar Power Projects',
    title_hi: 'सौर ऊर्जा परियोजनाओं का विकास एवं स्थापना',
    title_en: 'Solar Energy Project Development & Installation',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>छतों पर लगाए जाने वाले वाणिज्यिक, आवासीय एवं संस्थागत रूफटॉप सोलर सिस्टम।</li>
        <li>खाली भूमि पर स्थापित ग्राउंड-माउंटेड कैप्टिव एवं यूटिलिटी-स्केल सोलर पावर प्लांट्स।</li>
        <li>फ्लोटिंग सोलर, ऑफ-ग्रिड रिमोट पावर सिस्टम और बैटरी स्टोरेज युक्त हाइब्रिड समाधान।</li>
        <li>परियोजना की व्यवहार्यता (Feasibility Study), शैडो एनालिसिस, ग्रिड सिंक्रोनाइज़ेशन व नियमित रखरखाव।</li>
      </ul>
      <h4>प्रमुख लाभ एवं विशेषताएं:</h4>
      <ul>
        <li>बिजली बिल में 70% से 90% तक की भारी बचत और 25 वर्षों तक स्वच्छ ऊर्जा उत्पादन।</li>
        <li>टियर-1 मोनो पीईआरसी और बाइफेशियल पैनल्स के साथ उच्च दक्षता आउटपुट।</li>
        <li>नेट मीटरिंग, डिस्कॉम अनुमति और सरकारी सब्सिडी प्रक्रियाओं में तकनीकी समन्वय।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Commercial, institutional, and residential rooftop solar installations.</li>
        <li>Ground-mounted solar farms and captive utility arrays.</li>
        <li>Off-grid solar solutions with advanced lithium/lead-acid battery energy storage systems (BESS).</li>
        <li>Comprehensive solar irradiation studies, shadow analysis, structural design, and DISCOM grid-tie synchronization.</li>
      </ul>
      <h4>Key Advantages & Features:</h4>
      <ul>
        <li>Drastic electricity bill reductions up to 70–90% with 25-year performance warranty.</li>
        <li>Deployment of high-efficiency Mono PERC & bifacial solar PV modules.</li>
        <li>Full liaison support for net metering approvals and renewable subsidy guidelines.</li>
      </ul>
    `
  },
  solar_supply: {
    icon: 'fa-solar-panel',
    tag_hi: 'सौर उपकरण व्यापार',
    tag_en: 'Solar Equipment Trading',
    title_hi: 'सौर उपकरण आपूर्ति एवं व्यापार',
    title_en: 'Solar Equipment Supply & Trading',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>प्रमाणित फोटोवोल्टिक (PV) सोलर पैनल व उच्च दक्षता मॉड्यूल की थोक आपूर्ति।</li>
        <li>स्ट्रिंग इन्वर्टर, सेंट्रल इन्वर्टर, हाइब्रिड इन्वर्टर एवं सोलर पंप कंट्रोलर्स।</li>
        <li>जीआई और एल्युमिनियम सोलर माउंटिंग स्ट्रक्चर, क्लैंप्स एवं फास्टनर्स।</li>
        <li>सोलर केबल, डीसी डीबी बॉक्स, एसी डीबी बॉक्स, लाइटनिंग अरेस्टर और अर्थिंग सिस्टम।</li>
      </ul>
      <h4>प्रमुख लाभ:</h4>
      <ul>
        <li>निर्माता की सीधी वारंटी और बीआईएस (BIS) प्रमाणित उच्च गुणवत्ता उपकरण।</li>
        <li>परियोजनाओं के लिए समयबद्ध और लागत-प्रभावी एकीकृत डिलीवरी।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Wholesale supply of BIS-certified Tier-1 Mono PERC and polycrystalline PV modules.</li>
        <li>Grid-tied string inverters, hybrid power conditioning units, and solar pump controllers.</li>
        <li>Pre-galvanized (HDG) and aluminum anodized mounting structures and hardware.</li>
        <li>Dedicated solar DC cables, DCDB/ACDB combiner boxes, and surge protection devices.</li>
      </ul>
      <h4>Key Advantages:</h4>
      <ul>
        <li>Direct manufacturer warranty backing and stringent quality verification.</li>
        <li>Reliable project-based bulk logistics ensuring zero site downtime.</li>
      </ul>
    `
  },
  water_supply: {
    icon: 'fa-water',
    tag_hi: 'जलापूर्ति एवं सिंचाई नेटवर्क',
    tag_en: 'Water Supply & Irrigation',
    title_hi: 'जलापूर्ति, पाइपलाइन, स्वच्छता एवं सिंचाई कार्य',
    title_en: 'Water Supply, Pipeline, Sanitation & Irrigation',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>भूमिगत एवं सतही पेयजल पाइपलाइन (HDPE, DI, PVC) बिछाना और वितरण नेटवर्क तैयार करना।</li>
        <li>ओवरहेड पानी टंकी (Overhead Tank - OHT), भूमिगत जलाशय (Sump) और पंपिंग स्टेशन का निर्माण।</li>
        <li>गहरे ट्यूबवेल बोरिंग, बोरवेल स्थापना, सबमर्सिबल पंपिंग प्रणाली और स्वचालित वाल्व व्यवस्था।</li>
        <li>कृषि सिंचाई चैनल, ड्रिप/स्प्रिंकलर नेटवर्क, जल निकासी और अपशिष्ट जल प्रबंधन संरचनाएं।</li>
      </ul>
      <h4>प्रमुख लाभ:</h4>
      <ul>
        <li>शुद्ध पेयजल वितरण और रिसाव-मुक्त (Leak-proof) हाइड्रोलिक पाइपलाइन नेटवर्क।</li>
        <li>ग्रामीण और शहरी क्षेत्रों के लिए टिकाऊ सार्वजनिक जल अवसंरचना।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Underground and surface potable water distribution pipelines (HDPE, DI, GI, and uPVC).</li>
        <li>Construction of reinforced overhead water tanks (OHT), pump houses, and clear water sumps.</li>
        <li>Deep tube-well drilling, heavy submersible pump installation, and automated pressure control valves.</li>
        <li>Agricultural irrigation channels, lift irrigation systems, storm water drainage, and sanitation networks.</li>
      </ul>
      <h4>Key Advantages:</h4>
      <ul>
        <li>Pressure-tested leak-free hydraulic pipeline grids built for high durability.</li>
        <li>Empowering communities with clean drinking water and sustainable farm irrigation.</li>
      </ul>
    `
  },
  real_estate: {
    icon: 'fa-map-location-dot',
    tag_hi: 'रियल एस्टेट व भूमि विकास',
    tag_en: 'Real Estate & Plots',
    title_hi: 'रियल एस्टेट विकास एवं भूमि-संबंधी गतिविधियां',
    title_en: 'Real Estate & Land Development',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>भूमि एवं भूखंडों का उप-विभाजन (Plot Sub-division), कॉलोनी विकास और टाउनशिप लेआउट।</li>
        <li>30-40 फीट चौड़ी आंतरिक सड़कें, स्ट्रीट लाइट्स, पक्की नाली और जल निकास व्यवस्था के साथ प्लॉटिंग।</li>
        <li>भू-स्वामियों के साथ संयुक्त विकास (Joint Venture) एवं आवासीय कॉलोनाइजेशन।</li>
        <li>जमीन के स्वामित्व की कानूनी जांच (Legal Title Verification), रजिस्ट्री और नामांतरण सहायता।</li>
      </ul>
      <h4>प्रमुख लाभ:</h4>
      <ul>
        <li>विवाद-मुक्त, स्पष्ट मालिकाना हक वाले उच्च निवेश क्षमता वाले आवासीय एवं वाणिज्यिक प्लॉट्स।</li>
        <li>मूलभूत आधुनिक नागरिक सुविधाओं के साथ व्यवस्थित और सुरक्षित वातावरण।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Land acquisition, plot demarcation, sub-division, and master-planned township layouts.</li>
        <li>Infrastructure installation including 30–40 ft wide internal roads, drainage, lighting, and boundary walls.</li>
        <li>Joint venture developments with landowners and modern community colonization.</li>
        <li>Comprehensive legal search reports, title deeds verification, and registry assistance.</li>
      </ul>
      <h4>Key Advantages:</h4>
      <ul>
        <li>100% litigation-free titles with high capital appreciation potential across Bihar.</li>
        <li>Fully-serviced residential and commercial plots ready for immediate construction.</li>
      </ul>
    `
  },
  materials: {
    icon: 'fa-trowel-bricks',
    tag_hi: 'निर्माण सामग्री व मशीनरी',
    tag_en: 'Materials & Machinery',
    title_hi: 'निर्माण सामग्री एवं उपकरण प्रबंधन',
    title_en: 'Construction Material & Machinery Logistics',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>प्रीकास्ट कंक्रीट घटक, प्रीफैब्रिकेटेड बाउंड्री वाल, कर्व स्टोन और पेवर ब्लॉक की आपूर्ति।</li>
        <li>ग्रेड-53/43 पोर्टलैंड सीमेंट, टीएमटी स्टील रिबार (Fe 550D), संरचनात्मक स्टील बीम, उच्च गुणवत्ता ईंट और रेत।</li>
        <li>निर्माण मशीनरी, कंक्रीट मिक्सर प्लांट, ट्रांजिट मिक्सर, एक्सकेवेटर, क्रेन और वाइब्रेटर उपकरण।</li>
        <li>परियोजना-आधारित सामग्री खरीद, सुरक्षित भंडारण और ऑन-साइट समयबद्ध वितरण समन्वय।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Precast concrete wall panels, boundary fencing, precast culverts, kerb stones, and paver blocks.</li>
        <li>Bulk supply of certified Grade 43/53 OPC/PPC cement, primary TMT rebar (Fe 550D), steel beams, and aggregates.</li>
        <li>Deployment and management of batching plants, transit mixers, backhoes, excavators, and compaction gear.</li>
        <li>Site-based warehouse logistics, buffer inventory control, and scheduled dispatch.</li>
      </ul>
    `
  },
  skills: {
    icon: 'fa-user-graduate',
    tag_hi: 'कौशल विकास एवं प्रशिक्षण',
    tag_en: 'Skill Development & Training',
    title_hi: 'कौशल विकास एवं व्यावसायिक प्रशिक्षण',
    title_en: 'Skill Development & Vocational Training',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>निर्माण क्षेत्र में युवाओं और श्रमिकों के लिए व्यावहारिक कौशल, सुरक्षा और तकनीक प्रशिक्षण।</li>
        <li>सोलर इंस्टॉलेशन तकनीशियन, प्लंबिंग, आरसीसी शटरिंग, बार बेंडिंग और इलेक्ट्रिकल वायरिंग कोर्स।</li>
        <li>कार्यस्थल सुरक्षा, प्राथमिक उपचार, पीपीई किट उपयोग और आपदा प्रबंधन का प्रशिक्षण।</li>
        <li>स्थानीय स्तर पर रोजगार और स्वरोजगार के अवसरों को बढ़ावा देने हेतु विशेष कार्यशालाएं।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Practical technical education and hands-on vocational courses for rural and suburban youth.</li>
        <li>Certified programs in solar PV rooftop installation, industrial plumbing, bar bending, and electrical works.</li>
        <li>Workplace occupational health & safety (OHS) training, fire prevention, and emergency response.</li>
        <li>Encouraging grassroots entrepreneurship and technical contractor incubations.</li>
      </ul>
    `
  },
  manpower: {
    icon: 'fa-users-gear',
    tag_hi: 'मानव संसाधन एवं मैनपावर',
    tag_en: 'Manpower Solutions',
    title_hi: 'मानव संसाधन एवं मैनपावर सेवाएं',
    title_en: 'Human Resource & Manpower Solutions',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>इन्फ्रास्ट्रक्चर एवं सिविल परियोजनाओं हेतु कुशल साइट इंजीनियर, सर्वेयर और सुपरवाइजर की व्यवस्था।</li>
        <li>कुशल कारीगर (मेसन, वेल्डर, कारपेंटर, इलेक्ट्रीशियन, प्लंबर) और भारी मशीनरी ऑपरेटर।</li>
        <li>श्रम कानून, न्यूनतम वेतन, ईएसआई/पीएफ अनुपालन, पहचान सत्यापन और सामाजिक सुरक्षा का पालन।</li>
        <li>परियोजना की समय-सीमा अनुसार आवश्यक जनशक्ति की त्वरित तैनाती।</li>
      </ul>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Sourcing and deploying qualified civil site engineers, quantity surveyors, and safety supervisors.</li>
        <li>Certified tradesmen including certified masons, welders, shuttering carpenters, and equipment operators.</li>
        <li>Strict adherence to labor statutory laws, identity verification, minimum wages, and workplace insurance.</li>
        <li>Rapid scalable mobilization for seasonal and urgent infrastructure schedules.</li>
      </ul>
    `
  },
  civil_maintenance: {
    icon: 'fa-screwdriver-wrench',
    tag_hi: 'भवन एवं अवसंरचना मेंटेनेंस',
    tag_en: 'Civil Infrastructure Maintenance & AMC',
    title_hi: 'भवन, अवसंरचना मेंटेनेंस व वार्षिक रखरखाव (AMC)',
    title_en: 'Building & Civil Maintenance, Renovation & AMC Services',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>सरकारी भवनों, शैक्षणिक संस्थानों, अस्पतालों व वाणिज्यिक परिसरों का नियमित एवं आवधिक मेंटेनेंस।</li>
        <li>वार्षिक रखरखाव अनुबंध (Annual Maintenance Contract - AMC) एवं चौबीसों घंटे आपातकालीन रिपेयर सेवाएं।</li>
        <li>संरचनात्मक मरम्मत (Structural Repair), दरार सुधार (Crack Filling), कंक्रीट रिहैबिलिटेशन व रेट्रोफिटिंग।</li>
        <li>छतों व दीवारों की उन्नत वाटरप्रूफिंग (Waterproofing), सीलन उपचार एवं वेदर-प्रूफिंग।</li>
        <li>आंतरिक एवं बाह्य पुताई (Painting), फॉल्स सीलिंग, फ्लोरिंग सुधार, प्लंबिंग व ड्रेनेज मेंटेनेंस।</li>
        <li>रोड पैचवर्क, फुटपाथ मरम्मत, बाउंड्री वॉल सुदृढ़ीकरण एवं परिसर रख-रखाव कार्य।</li>
      </ul>
      <h4>प्रमुख लाभ एवं विशेषताएं:</h4>
      <ul>
        <li>स्ट्रक्चर की उम्र में उल्लेखनीय वृद्धि और भविष्य के बड़े नुकसान से बचाव।</li>
        <li>अनुभवी सिविल इंजीनियरों एवं कुशल कारीगरों की त्वरित ऑन-साइट तैनाती।</li>
        <li>सरकारी/कॉर्पोरेट मानकों के अनुसार कार्य निष्पादन, ऑडिट एवं विस्तृत दस्तावेजीकरण।</li>
      </ul>
      <h4>अनुपालन एवं गुणवत्ता:</h4>
      <p>उच्च श्रेणी के निर्माण रसायनों, अनुमोदित वॉटरप्रूफिंग कंपाउंड्स और सुरक्षा प्रोटोकॉल के साथ कार्य किया जाता है।</p>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Routine, scheduled, and periodic maintenance for government complexes, institutions, hospitals, and corporate premises.</li>
        <li>Annual Maintenance Contracts (AMC) with dedicated facility upkeep teams and emergency response protocols.</li>
        <li>Structural retrofitting, micro-concreting, beam/column repair, crack injection, and rehabilitation.</li>
        <li>Advanced roof and basement waterproofing, damp-proofing treatments, and exterior weather-shield coatings.</li>
        <li>Comprehensive interior/exterior painting, flooring repairs, false ceiling refurbishing, plumbing, and drainage revamping.</li>
        <li>Road resurfacing/patchwork, perimeter boundary stabilization, and infrastructure site grounds maintenance.</li>
      </ul>
      <h4>Key Advantages & Features:</h4>
      <ul>
        <li>Substantial extension of structural lifecycle and proactive risk mitigation.</li>
        <li>Deployment of experienced maintenance engineers, plumbers, painters, and structural technicians.</li>
        <li>Full transparency, milestone-based maintenance logs, and structured audit reports for enterprise clients.</li>
      </ul>
      <h4>Standards & Compliance:</h4>
      <p>Execution using certified construction chemicals, ISO-standard waterproofing polymers, and workplace safety compliance.</p>
    `
  },
  food_processing: {
    icon: 'fa-wheat-awn',
    tag_hi: 'खाद्य प्रसंस्करण एवं राशन आपूर्ति',
    tag_en: 'Food Processing & Agro-Ration Supply',
    title_hi: 'खाद्य प्रसंस्करण, राशन एवं खाद्यान्न आपूर्ति श्रृंखला',
    title_en: 'Food Processing Industry Trading & Institutional Ration Supply',
    body_hi: `
      <h4>विस्तृत कार्य दायरा:</h4>
      <ul>
        <li>थोक खाद्यान्न (अनाज, गेहूं, चावल, दालें, तिलहन, चीनी एवं खाद्य तेल) की सुरक्षित आपूर्ति व वितरण।</li>
        <li>सरकारी राशन वितरण (PDS), छात्रावासों (Hostels), अस्पतालों, आपदा प्रबंधन व संस्थागत कैंटीनों हेतु टेंडर-आधारित राशन आपूर्ति।</li>
        <li>खाद्य प्रसंस्करण उद्योग (Food Processing Units) के लिए गुणवत्तापूर्ण कच्चा माल (Raw Agro Materials) आपूर्ति व लिंकिंग।</li>
        <li>प्रसंस्कृत खाद्य उत्पादों (Processed Food Items), पैकेज्ड राशन व कमोडिटी ट्रेडिंग एवं सेलिंग।</li>
        <li>सुरक्षित व स्वच्छ वेयरहाउसिंग, साइलो एवं आधुनिक परिवहन लॉजिस्टिक्स नेटवर्क।</li>
      </ul>
      <h4>प्रमुख लाभ एवं विशेषताएं:</h4>
      <ul>
        <li>स्थानीय मंडियों व उत्पादकों से सीधे जुड़ाव से प्रतिस्पर्धी मूल्य और न्यूनतम बिचौलिया लागत।</li>
        <li>कड़े गुणवत्ता मानक: नमी, शुद्धता और स्वच्छता परीक्षण के उपरांत ही राशन की आपूर्ति।</li>
        <li>बड़े पैमाने पर बल्क ऑर्डर और समयबद्ध डोर-टू-डोर डिलीवरी की पूर्ण क्षमता।</li>
      </ul>
      <h4>लाइसेंस एवं अनुपालन:</h4>
      <p>खाद्य सुरक्षा एवं मानक प्राधिकरण (FSSAI) दिशा-निर्देशों, मंडी नियमों और वैधानिक गुणवत्ता मानकों के पूर्ण अनुपालन के साथ कार्य।</p>
    `,
    body_en: `
      <h4>Comprehensive Scope of Work:</h4>
      <ul>
        <li>Bulk supply and distribution of essential food grains (wheat, rice, pulses, edible oils, sugar, and staples).</li>
        <li>Tender-based supply for institutional mess, government ration schemes (PDS), welfare hostels, hospitals, and relief depots.</li>
        <li>Raw agricultural material procurement and supply-chain linkage for food processing industrial units.</li>
        <li>Wholesale trading and selling of processed food products, packaged food essentials, and agro commodities.</li>
        <li>Hygienic warehousing, secure moisture-controlled storage, and reliable transport logistics across regions.</li>
      </ul>
      <h4>Key Advantages & Features:</h4>
      <ul>
        <li>Direct sourcing channels enabling highly competitive bulk rates and uncompromised freshness.</li>
        <li>Rigorous quality verification covering purity, moisture grade, packaging integrity, and hygiene.</li>
        <li>Scalable logistics fleet capable of executing large-volume institutional contracts reliably on time.</li>
      </ul>
      <h4>Licensing & Statutory Compliance:</h4>
      <p>Adherence to Food Safety and Standards Authority of India (FSSAI) norms, APMC/Mandi regulations, and commercial trade compliance.</p>
    `
  }
};

/* ==========================================================================
   2B. LEGAL MODAL DATA (Terms, Privacy & Statutory Disclaimer)
   ========================================================================== */
const legalModalData = {
  terms: {
    icon: 'fa-file-contract',
    tag_hi: 'नियम एवं शर्तें',
    tag_en: 'Terms & Conditions',
    title_hi: 'वेबसाइट उपयोग के नियम एवं सेवा शर्तें',
    title_en: 'Terms of Use & Service Conditions',
    body_hi: `
      <h4>1. परिचयात्मक एवं संवैधानिक स्वरूप:</h4>
      <p>यह वेबसाइट <strong>चांदतारा इन्फ्रा प्राइवेट लिमिटेड</strong> (CIN: U42209BR2026PTC088206, निगमन तिथि: 17/09/2026) द्वारा कंपनी के पंजीकृत Memorandum of Association (MOA) एवं Articles of Association (AOA) के तहत अधिकृत व्यावसायिक गतिविधियों के परिचयात्मक प्रसार हेतु संचालित है।</p>
      <h4>2. व्यावसायिक प्रस्ताव एवं अनुबंध (Proposals & Contracts):</h4>
      <ul>
        <li>वेबसाइट पर प्रदर्शित कार्यक्षेत्र एवं विवरण परिचयात्मक हैं। किसी भी परियोजना का मूल्य (Quotation), समय-सीमा, इंजीनियरिंग विनिर्देश एवं भुगतान शर्तें दोनों पक्षों द्वारा हस्ताक्षरित विधिवत लिखित अनुबंध (Agreement/Work Order/Tender) के अनुसार ही अंतिम रूप से लागू होंगी।</li>
        <li>AOA के अनुच्छेद 79 के अनुसार, कंपनी के किसी भी अनुबंध या दस्तावेज को कानूनी रूप से बाध्यकारी बनाने के लिए अधिकृत निदेशकों के हस्ताक्षर एवं कंपनी की आधिकारिक मुहर आवश्यक है।</li>
      </ul>
      <h4>3. बौद्धिक संपदा अधिकार (Intellectual Property):</h4>
      <p>वेबसाइट पर प्रकाशित समस्त सामग्री, कंपनी का आधिकारिक नाम, "CT" क्रेडेंशियल लोगो, कैटलॉग विवरण, लेआउट एवं डिजाइन कंपनी की बौद्धिक संपदा हैं। पूर्व लिखित अनुमति के बिना इनका व्यावसायिक उपयोग पूर्णतः प्रतिबंधित है।</p>
      <h4>4. वैधानिक क्षेत्राधिकार (Legal Jurisdiction):</h4>
      <p>वेबसाइट के उपयोग या व्यावसायिक परामर्श से संबंधित किसी भी विधिक विवाद या मध्यस्थता का क्षेत्राधिकार विशेष रूप से <strong>गोपालगंज जिला न्यायालय (बिहार, भारत)</strong> के अधीन होगा।</p>
    `,
    body_en: `
      <h4>1. Introduction & Constitutional Framework:</h4>
      <p>This website is operated by <strong>Chandtara Infra Private Limited</strong> (CIN: U42209BR2026PTC088206, Incorporated: 17/09/2026) to outline its authorized business verticals incorporated under the Companies Act, 2013 and its registered MOA and AOA.</p>
      <h4>2. Commercial Proposals & Contracts:</h4>
      <ul>
        <li>All services, scope descriptions, and project materials shown on this platform are informational. Binding rates, delivery milestones, engineering benchmarks, and payment schedules require formal written bilateral agreements or awarded tender instruments signed by authorized Directors.</li>
        <li>Pursuant to Article 79 of the Articles of Association (AOA), legal execution of any corporate instrument requires the signatures of authorized Directors along with the official company seal/stamp.</li>
      </ul>
      <h4>3. Intellectual Property Rights:</h4>
      <p>All brand insignia, the "CT" emblem, catalogue text, layouts, visual representations, and trademarks remain the exclusive intellectual property of the company. Unauthorized duplication or distribution is prohibited.</p>
      <h4>4. Governing Law & Jurisdiction:</h4>
      <p>Any disputes or arbitration arising in connection with website use or initial inquiries shall be governed under Indian Law and subject to the exclusive jurisdiction of the competent courts in <strong>Gopalganj District, Bihar, India</strong>.</p>
    `
  },
  privacy: {
    icon: 'fa-user-shield',
    tag_hi: 'गोपनीयता नीति',
    tag_en: 'Privacy Policy',
    title_hi: 'गोपनीयता नीति एवं डेटा संरक्षण',
    title_en: 'Privacy Policy & Data Protection',
    body_hi: `
      <h4>1. एकत्रित की जाने वाली जानकारी:</h4>
      <p>हम केवल वही जानकारी एकत्र करते हैं जो आप हमारे संपर्क एवं निविदा परामर्श फॉर्म के माध्यम से स्वेच्छा से प्रदान करते हैं — जैसे आपका नाम, संपर्क नंबर, ईमेल आईडी, संबंधित सेवा क्षेत्र और परियोजना संबंधी संदेश।</p>
      <h4>2. जानकारी का उपयोग:</h4>
      <ul>
        <li>परियोजनाओं, सिविल टेंडर्स, सोलर इंस्टॉलेशन या सामग्री आपूर्ति हेतु आपसे सीधा संवाद स्थापित करने के लिए।</li>
        <li>साइट सर्वेक्षण, लागत अनुमान (Cost Estimation) एवं तकनीकी परामर्श उपलब्ध कराने के लिए।</li>
        <li>अधिकृत सरकारी पत्राचार एवं अनुबंध निष्पादन में समन्वय हेतु।</li>
      </ul>
      <h4>3. डेटा सुरक्षा व गोपनीयता (Zero-Spam Policy):</h4>
      <p>हम आपके व्यक्तिगत या व्यावसायिक डेटा को किसी भी तीसरे पक्ष, मार्केटिंग एजेंसियों या अनधिकृत ब्रोकरों को साझा, विक्रय या पट्टे पर नहीं देते हैं। समस्त डेटा सुरक्षित रूप से निदेशकों की देखरेख में रहता है।</p>
      <h4>4. आपकी सहमति एवं संपर्क:</h4>
      <p>वेबसाइट फॉर्म भरकर सबमिट करने पर आप हमें आपसे संपर्क करने की अनुमति प्रदान करते हैं। आप किसी भी समय <code>chandtarainfra@gmail.com</code> पर ईमेल भेजकर अपनी जानकारी को अपडेट या हटाने का अनुरोध कर सकते हैं।</p>
    `,
    body_en: `
      <h4>1. Information We Collect:</h4>
      <p>We only collect personal information voluntarily submitted through our inquiry or consultation form — including your name, telephone number, email address, chosen vertical, and site requirements.</p>
      <h4>2. Purpose of Processing:</h4>
      <ul>
        <li>Direct communication regarding infrastructure estimates, civil contracts, solar setups, and procurement logistics.</li>
        <li>Scheduling on-site engineering surveys and drafting formal quotation proposals.</li>
        <li>Operational and administrative compliance related to client contracts.</li>
      </ul>
      <h4>3. Zero-Spam Commitment & Data Security:</h4>
      <p>We maintain a strict zero-spam protocol. Your contact information is never sold, traded, rented, or distributed to any third-party marketing brokers. Records are kept strictly confidential under director supervision.</p>
      <h4>4. User Rights & Inquiries:</h4>
      <p>Submitting the inquiry form signifies your consent to be contacted regarding your project. You may request rectification or deletion of your communication records at any time by emailing <code>chandtarainfra@gmail.com</code>.</p>
    `
  },
  disclaimer: {
    icon: 'fa-scale-balanced',
    tag_hi: 'वैधानिक डिस्क्लेमर',
    tag_en: 'Statutory Disclaimer',
    title_hi: 'संवैधानिक एवं वैधानिक डिस्क्लेमर',
    title_en: 'Constitutional & Statutory Disclaimer',
    body_hi: `
      <h4>1. संवैधानिक स्थिति:</h4>
      <p><strong>चांदतारा इन्फ्रा प्राइवेट लिमिटेड</strong> भारत सरकार के कॉर्पोरेट कार्य मंत्रालय (MCA) के तहत पंजीकृत कंपनी है (CIN: U42209BR2026PTC088206, निगमन तिथि: 17/09/2026, GSTIN: 10AAOCC2572J1AP, PAN: AAOCC2572J)।</p>
      <h4>2. कार्यक्षेत्र एवं टेंडर पात्रता:</h4>
      <p>वेबसाइट पर उल्लिखित मुख्य कार्यक्षेत्र एवं सहायक प्रावधान कंपनी के MOA के तहत अधिकृत संवैधानिक अधिकार हैं। किसी कार्य का उल्लेख टेंडर मिलने या स्वतः अनुबंध का दावा नहीं है; प्रत्येक कार्य संबंधित विभाग की निविदा शर्तों, लाइसेंसिंग, आरईआरए (RERA) व अन्य विधिक अनुमतियों के अधीन होता है।</p>
      <h4>3. संपर्क एवं सत्यता:</h4>
      <p>कंपनी के केवल आधिकारिक फोन (<code>8797121854</code>, <code>9097305399</code>) एवं ईमेल (<code>chandtarainfra@gmail.com</code>) के माध्यम से किए गए लेन-देन और संवाद ही मान्य होंगे। किसी अनधिकृत व्यक्ति द्वारा किए गए दावों के लिए कंपनी उत्तरदायी नहीं होगी।</p>
    `,
    body_en: `
      <h4>1. Constitutional Status:</h4>
      <p><strong>Chandtara Infra Private Limited</strong> is a duly incorporated entity under the Ministry of Corporate Affairs, Government of India (CIN: U42209BR2026PTC088206, Incorporation Date: 17/09/2026, GSTIN: 10AAOCC2572J1AP, PAN: AAOCC2572J).</p>
      <h4>2. Scope & Tender Eligibility:</h4>
      <p>The business verticals listed reflect constitutional objectives approved in the company's Memorandum of Association (MOA). Inclusion does not represent an automatic award of public contracts; all project executions are strictly subject to technical qualifications, department registrations, RERA mandates, and bilateral agreements.</p>
      <h4>3. Authorized Communication:</h4>
      <p>Only official corporate communication issued from designated phone numbers (<code>8797121854</code>, <code>9097305399</code>) or the verified email (<code>chandtarainfra@gmail.com</code>) carries legal standing. The company assumes no liability for informal or unauthorized representations.</p>
    `
  }
};

/* ==========================================================================
   3. LANGUAGE SYSTEM (localStorage, Toggle & DOM Updates)
   ========================================================================== */
let currentLang = 'hi';

function initLanguage() {
  // Check localStorage; default to Hindi ('hi')
  const saved = localStorage.getItem('chandtara_lang');
  if (saved && (saved === 'hi' || saved === 'en')) {
    currentLang = saved;
  } else {
    currentLang = 'hi';
  }

  // Bind All Switcher Buttons (Desktop & Mobile)
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) setLanguage(targetLang);
    });
  });

  // Initial Render
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('chandtara_lang', lang);

  // Update HTML tag lang & body class
  document.documentElement.lang = lang;
  document.body.classList.remove('lang-hi', 'lang-en');
  document.body.classList.add(`lang-${lang}`);

  // Update Active States on Buttons
  document.querySelectorAll('.lang-btn, .lang-btn-mobile').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  const dict = translations[lang] || translations.hi;

  // Update Page Title & Meta tags
  if (dict.page_title) {
    document.title = dict.page_title;
    const pageTitleEl = document.getElementById('page-title');
    if (pageTitleEl) pageTitleEl.textContent = dict.page_title;
  }
  const metaDescEl = document.getElementById('meta-description');
  if (metaDescEl && dict.meta_desc) metaDescEl.setAttribute('content', dict.meta_desc);
  const ogTitleEl = document.getElementById('og-title');
  if (ogTitleEl && dict.page_title) ogTitleEl.setAttribute('content', dict.page_title);
  const ogDescEl = document.getElementById('og-description');
  if (ogDescEl && dict.meta_desc) ogDescEl.setAttribute('content', dict.meta_desc);

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // If it contains HTML markup (like strong, span, br), set innerHTML; otherwise textContent
      if (dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update all [data-i18n-ph] elements (placeholders)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

/* ==========================================================================
   4. NAVIGATION & MOBILE HAMBURGER
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Hamburger Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   5. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollEffects() {
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
}

/* ==========================================================================
   6. ANIMATED COUNTERS (Triggered on Scroll View)
   ========================================================================== */
function initAnimatedCounters() {
  const counterCards = document.querySelectorAll('.counter-card');
  let hasAnimated = false;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          startCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const countersSection = document.getElementById('counters');
    if (countersSection) observer.observe(countersSection);
  } else {
    startCounters();
  }

  function startCounters() {
    const values = document.querySelectorAll('.counter-val');
    values.forEach(val => {
      const target = parseInt(val.getAttribute('data-target'), 10) || 0;
      let current = 0;
      const duration = 1600; // ms
      const stepTime = Math.max(Math.floor(duration / target), 20);

      const timer = setInterval(() => {
        current += Math.ceil(target / 40) || 1;
        if (current >= target) {
          val.textContent = target;
          clearInterval(timer);
        } else {
          val.textContent = current;
        }
      }, stepTime);
    });
  }
}

/* ==========================================================================
   7. SERVICES MODAL SYSTEM
   ========================================================================== */
window.openServiceModal = function(serviceKey) {
  const data = serviceModalData[serviceKey];
  if (!data) return;

  const modal = document.getElementById('service-modal');
  const iconBox = document.getElementById('modal-service-icon');
  const titleBox = document.getElementById('modal-service-title');
  const tagBox = document.getElementById('modal-service-tag');
  const bodyBox = document.getElementById('modal-service-body');

  if (iconBox) iconBox.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
  if (titleBox) titleBox.textContent = currentLang === 'en' ? data.title_en : data.title_hi;
  if (tagBox) tagBox.textContent = currentLang === 'en' ? data.tag_en : data.tag_hi;
  if (bodyBox) bodyBox.innerHTML = currentLang === 'en' ? data.body_en : data.body_hi;

  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
  }
};

window.closeServiceModal = function() {
  const modal = document.getElementById('service-modal');
  if (modal) {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  }
};

/* ==========================================================================
   7B. LEGAL POLICIES MODAL SYSTEM (Terms, Privacy, Disclaimer)
   ========================================================================== */
window.openLegalModal = function(legalKey) {
  const data = legalModalData[legalKey];
  if (!data) return;

  const modal = document.getElementById('legal-modal');
  const iconBox = document.getElementById('modal-legal-icon');
  const titleBox = document.getElementById('modal-legal-title');
  const tagBox = document.getElementById('modal-legal-tag');
  const bodyBox = document.getElementById('modal-legal-body');

  if (iconBox) iconBox.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
  if (titleBox) titleBox.textContent = currentLang === 'en' ? data.title_en : data.title_hi;
  if (tagBox) tagBox.textContent = currentLang === 'en' ? data.tag_en : data.tag_hi;
  if (bodyBox) bodyBox.innerHTML = currentLang === 'en' ? data.body_en : data.body_hi;

  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
  }
};

window.closeLegalModal = function() {
  const modal = document.getElementById('legal-modal');
  if (modal) {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  }
};

// Close modal on click outside card or on Esc key
window.addEventListener('click', (e) => {
  const modal = document.getElementById('service-modal');
  if (modal && e.target === modal) {
    closeServiceModal();
  }
  const legalModal = document.getElementById('legal-modal');
  if (legalModal && e.target === legalModal) {
    closeLegalModal();
  }
  const lb = document.getElementById('project-lightbox');
  if (lb && e.target === lb) {
    closeLightbox();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeServiceModal();
    closeLegalModal();
    closeLightbox();
  }
});

/* ==========================================================================
   8. PROJECT GALLERY FILTERS & LIGHTBOX
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterValue === 'all' || cat === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// Lightbox Data
const lightboxData = {
  prj1: {
    icon: 'fa-city',
    title_hi: 'आधुनिक बहुमंजिला आवासीय व वाणिज्यिक परिसर',
    title_en: 'Multi-Storey Residential & Commercial Complex',
    cat_hi: 'सिविल एवं संरचनात्मक निर्माण',
    cat_en: 'Civil & Structural Works',
    desc_hi: 'कठोर गुणवत्ता नियंत्रण, भूकंपरोधी आरसीसी डिजाइन, अग्नि सुरक्षा प्रणाली और मानक भवन उपनियमों के तहत निर्मित। परियोजना में पर्यावरण-अनुकूल सामग्री और ऊर्जा-कुशल आर्किटेक्चर शामिल है।',
    desc_en: 'Constructed under stringent QC, earthquake-resistant RCC structural engineering, fire safety compliance, and certified building bye-laws.'
  },
  prj2: {
    icon: 'fa-road-bridge',
    title_hi: 'सड़क, पुलिया एवं ड्रेनेज नेटवर्क निर्माण',
    title_en: 'Road, Culvert & Drainage Infrastructure',
    cat_hi: 'भारी अवसंरचना',
    cat_en: 'Heavy Infrastructure',
    desc_hi: 'उच्च गुणवत्ता बिटुमिनस व कंक्रीट रोड, आरसीसी कलवर्ट और जल निकासी प्रणाली जो मानसून में जलभराव रोकती है और दीर्घकालिक टिकाऊ संपर्क प्रदान करती है।',
    desc_en: 'Heavy-duty bituminous and concrete roadways with culverts engineered to provide durable, all-weather suburban connectivity.'
  },
  prj3: {
    icon: 'fa-solar-panel',
    title_hi: 'कमर्शियल व संस्थागत रूफटॉप सोलर ग्रिड',
    title_en: 'Commercial & Institutional Rooftop Solar Grid',
    cat_hi: 'स्वच्छ सौर ऊर्जा',
    cat_en: 'Clean Solar Energy',
    desc_hi: 'उद्योगों व शिक्षण संस्थानों के लिए ऑन-ग्रिड नेट-मीटरिंग युक्त रूफटॉप सोलर प्लांट। उच्चतम बिजली बचत और 25 वर्ष की प्रदर्शन वारंटी।',
    desc_en: 'Grid-tied net-metered rooftop solar installations for commercial and institutional establishments with 25-year performance warranties.'
  },
  prj4: {
    icon: 'fa-faucet-drip',
    title_hi: 'पेयजल पाइपलाइन व ओवरहेड टैंक (OHT) सिस्टम',
    title_en: 'Potable Water Pipeline & Overhead Tank (OHT)',
    cat_hi: 'जलापूर्ति नेटवर्क',
    cat_en: 'Water Supply Network',
    desc_hi: 'विशाल क्षमता वाली ओवरहेड पानी टंकी, स्वचालित पंप स्टेशन और एचडीपीई पाइपलाइन ग्रिड जो हर घर तक स्वच्छ पानी पहुंचाती है।',
    desc_en: 'Comprehensive drinking water transmission with reinforced concrete tanks, pump stations, and tested pressure piping grids.'
  },
  prj5: {
    icon: 'fa-map-location-dot',
    title_hi: 'सुनियोजित आवासीय कॉलोनी एवं लैंड प्लॉटिंग',
    title_en: 'Planned Residential Colony & Land Development',
    cat_hi: 'रियल एस्टेट विकास',
    cat_en: 'Real Estate Development',
    desc_hi: 'सड़क, नाली, बिजली के खंभे और स्पष्ट टाइटल डीड्स के साथ प्राइम लोकेशन पर आवासीय भूखंड। पूर्ण विधिक पारदर्शिता।',
    desc_en: 'Demarcated plots complete with wide access roads, underground drainage conduits, and verified registered title deeds.'
  },
  prj6: {
    icon: 'fa-trowel-bricks',
    title_hi: 'प्रीकास्ट कंक्रीट व उच्चकोटि सामग्री आपूर्ति',
    title_en: 'Precast Concrete & High-Grade Material Supply',
    cat_hi: 'सामग्री प्रबंधन',
    cat_en: 'Material Management',
    desc_hi: 'सीमेंट, टीएमटी बार, प्रीफैब वॉल पैनल और हेवी मशीनरी की ऑन-साइट समयबद्ध डिलीवरी। परियोजना में शून्य रुकावट सुनिश्चित।',
    desc_en: 'Reliable site-based supply of primary steel rebar, high-grade cement, precast walling, and batching equipment.'
  }
};

window.openLightbox = function(key) {
  const data = lightboxData[key];
  if (!data) return;

  const lb = document.getElementById('project-lightbox');
  const content = document.getElementById('lightbox-content');

  const title = currentLang === 'en' ? data.title_en : data.title_hi;
  const cat = currentLang === 'en' ? data.cat_en : data.cat_hi;
  const desc = currentLang === 'en' ? data.desc_en : data.desc_hi;
  const btnText = currentLang === 'en' ? 'Inquire About This Work' : 'इस कार्य हेतु संपर्क करें';

  content.innerHTML = `
    <div style="background: linear-gradient(135deg, #2D1C78, #180F4B); padding: 3rem 2rem; text-align: center; color: #FFF;">
      <i class="fa-solid ${data.icon}" style="font-size: 4rem; color: #F28C0F; margin-bottom: 1rem;"></i>
      <div style="font-size: 0.82rem; font-weight: 700; color: #F8DF8B; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">${cat}</div>
      <h3 style="font-size: 1.5rem; font-weight: 800; color: #FFF; line-height: 1.3;">${title}</h3>
    </div>
    <div style="padding: 2rem;">
      <p style="color: #4B5563; line-height: 1.7; font-size: 1rem; margin-bottom: 1.8rem;">${desc}</p>
      <div style="display: flex; gap: 1rem; justify-content: flex-end; align-items: center;">
        <a href="#contact" onclick="closeLightbox()" class="btn btn-primary" style="padding: 0.65rem 1.4rem; font-size: 0.92rem;">
          <i class="fa-solid fa-paper-plane"></i> ${btnText}
        </a>
      </div>
    </div>
  `;

  lb.style.display = 'flex';
  setTimeout(() => lb.classList.add('open'), 10);
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lb = document.getElementById('project-lightbox');
  if (lb) {
    lb.classList.remove('open');
    setTimeout(() => {
      lb.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  }
};

/* ==========================================================================
   9. TESTIMONIAL CAROUSEL (Auto-Slide, Dots & Controls)
   ========================================================================== */
function initTestimonialCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.getElementById('prevTesti');
  const nextBtn = document.getElementById('nextTesti');
  let currentIdx = 0;
  let autoTimer = null;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
    currentIdx = idx;
  }

  function nextSlide() {
    let next = (currentIdx + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      resetTimer();
    });
  });

  function startTimer() {
    autoTimer = setInterval(nextSlide, 5500);
  }

  function resetTimer() {
    clearInterval(autoTimer);
    startTimer();
  }

  const container = document.querySelector('.testimonial-carousel-wrap');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(autoTimer));
    container.addEventListener('mouseleave', () => startTimer());
  }

  startTimer();
}

/* ==========================================================================
   10. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(other => {
          other.classList.remove('active');
          const btn = other.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
}

/* ==========================================================================
   11. INTERACTIVE CONTACT FORM & DISPATCH
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const phoneInput = document.getElementById('form-phone');
    const emailInput = document.getElementById('form-email');
    const serviceInput = document.getElementById('form-service');
    const msgInput = document.getElementById('form-message');

    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.field-error').forEach(span => span.textContent = '');

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      document.getElementById('name-error').textContent = currentLang === 'en' 
        ? 'Please enter your full name.' 
        : 'कृपया अपना पूरा नाम दर्ज करें।';
      isValid = false;
    }

    // Validate Phone (10 digits)
    const cleanPhone = phoneInput.value.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      document.getElementById('phone-error').textContent = currentLang === 'en' 
        ? 'Please enter a valid 10-digit mobile number.' 
        : 'कृपया एक मान्य 10-अंकों का मोबाइल नंबर दर्ज करें।';
      isValid = false;
    }

    // Validate Email if provided
    if (emailInput.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = currentLang === 'en' 
          ? 'Please enter a valid email address.' 
          : 'कृपया एक मान्य ईमेल पता दर्ज करें।';
        isValid = false;
      }
    }

    // Validate Service
    if (!serviceInput.value) {
      document.getElementById('service-error').textContent = currentLang === 'en' 
        ? 'Please select a service or business vertical.' 
        : 'कृपया किसी कार्यक्षेत्र का चयन करें।';
      isValid = false;
    }

    // Validate Message
    if (!msgInput.value.trim() || msgInput.value.trim().length < 5) {
      document.getElementById('msg-error').textContent = currentLang === 'en' 
        ? 'Please write a brief description of your project.' 
        : 'कृपया अपनी आवश्यकता का संक्षिप्त विवरण दर्ज करें।';
      isValid = false;
    }

    if (!isValid) return;

    // Format Message Text for WhatsApp and Email
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim() || 'Not provided';
    const service = serviceInput.value;
    const msg = msgInput.value.trim();

    const formattedText = 
`*New Project Inquiry - Chandtara Infra*
----------------------------------------
*Client Name:* ${name}
*Mobile:* ${phone}
*Email:* ${email}
*Vertical:* ${service}
*Message:*
${msg}
----------------------------------------
(Sent via chandtarainfra.com)`;

    // WhatsApp Direct Link
    const waUrl = `https://wa.me/918797121854?text=${encodeURIComponent(formattedText)}`;
    
    // Mailto Direct Link
    const mailtoSubject = encodeURIComponent(`Inquiry from ${name} - ${service}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${msg}`);
    const mailtoUrl = `mailto:chandtarainfra@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Set buttons
    const sendWaLink = document.getElementById('send-wa-link');
    const sendMailLink = document.getElementById('send-mail-link');
    if (sendWaLink) sendWaLink.setAttribute('href', waUrl);
    if (sendMailLink) sendMailLink.setAttribute('href', mailtoUrl);

    // Hide form, show success action box
    form.style.display = 'none';
    const successBox = document.getElementById('form-success-box');
    if (successBox) successBox.style.display = 'block';

    showToast(currentLang === 'en' ? 'Inquiry prepared successfully!' : 'पूछताछ सफलतापूर्वक तैयार हो गई!', 'success');

    // Automatically trigger WhatsApp in a new tab for seamless user experience
    window.open(waUrl, '_blank');
  });
}

window.resetContactForm = function() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success-box');
  if (form) {
    form.reset();
    form.style.display = 'block';
  }
  if (successBox) {
    successBox.style.display = 'none';
  }
};

/* ==========================================================================
   12. COPY TO CLIPBOARD UTILITY (CIN, GSTIN, PAN)
   ========================================================================== */
window.copyToClipboard = function(text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      handleCopyFeedback(btnElement, text);
    }).catch(() => {
      fallbackCopy(text, btnElement);
    });
  } else {
    fallbackCopy(text, btnElement);
  }
};

function fallbackCopy(text, btnElement) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    handleCopyFeedback(btnElement, text);
  } catch (err) {
    showToast('Failed to copy', 'error');
  }
  document.body.removeChild(textArea);
}

function handleCopyFeedback(btn, text) {
  if (btn) {
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    }, 2000);
  }
  const msg = currentLang === 'en' ? `Copied: ${text}` : `कॉपी हो गया: ${text}`;
  showToast(msg, 'success');
}

/* ==========================================================================
   13. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ==========================================================================
   14. SCROLL TO TOP UTILITY
   ========================================================================== */
function initScrollTop() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
