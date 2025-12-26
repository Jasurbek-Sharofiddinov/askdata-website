// AskData Landing Page JavaScript

// Translations
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.pricing': 'Pricing',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.login': 'Log In',
        'nav.trial': 'Start Free Trial',

        // Hero
        'hero.badge': 'AI-Powered Analytics Platform',
        'hero.titleLine1': 'Turn Your Data Into',
        'hero.titleLine2': 'Actionable Stories',
        'hero.subtitle': 'Ask questions in plain language. Get instant insights, beautiful visualizations, and clear recommendations. No SQL, no complexity, no data team required.',
        'hero.cta': 'Get Started Free',
        'hero.demo': 'Watch Demo',
        'hero.stat1': 'Setup time',
        'hero.stat2': 'Data integrations',
        'hero.stat3': 'Faster insights',

        // Problem
        'problem.tag': 'The Challenge',
        'problem.title1': 'Your Data Is Powerful.',
        'problem.title2': "But It's Trapped.",
        'problem.subtitle': "SMEs have valuable data scattered across platforms. Unlocking insights shouldn't require a data scientist or expensive tools.",
        'problem.now': 'NOW',
        'problem.with': 'WITH ASKDATA',
        'problem.nowTitle': 'Scattered & Confusing',
        'problem.nowDesc': 'Data in 5+ tools, hours wasted, decisions delayed',
        'problem.withTitle': 'Clear & Actionable',
        'problem.withDesc': 'One platform, instant answers, confident decisions',
        'problem.pain1Title': 'Technical Barriers',
        'problem.pain1Desc': 'SQL and BI tools require expertise. Only 25% of your team can access insights.',
        'problem.pain2Title': 'Data Silos',
        'problem.pain2Desc': 'Analytics, CRM, spreadsheets, accounting - your data lives in different worlds.',
        'problem.pain3Title': 'Time Drain',
        'problem.pain3Desc': 'Hours spent creating reports instead of running your business.',
        'problem.pain4Title': 'No "So What?"',
        'problem.pain4Desc': 'Charts show numbers, but what do they mean? What should you do next?',

        // Features
        'features.tag': 'Features',
        'features.title1': 'Everything You Need to',
        'features.title2': 'Understand Your Data',
        'features.subtitle': 'Powerful features designed for business owners, not data scientists.',
        'features.coreFeature': 'Core Feature',
        'features.conversationalTitle': 'Conversational Analytics',
        'features.conversationalDesc': 'Ask questions in plain language. "What were my sales last week?" "Why did traffic drop?" Get instant, accurate answers with beautiful visualizations.',
        'features.conversationalItem1': 'Natural language queries',
        'features.conversationalItem2': 'Follow-up questions support',
        'features.conversationalItem3': 'Multi-language support',
        'features.visualTitle': 'Auto Visualizations',
        'features.visualDesc': 'AI automatically selects the best chart type for your data. Beautiful, insightful, and export-ready.',
        'features.narrativeTitle': 'Narrative Reports',
        'features.narrativeDesc': "Get story-driven reports that explain the 'why' behind your numbers. Perfect for stakeholder presentations.",
        'features.proactiveTitle': 'Proactive Insights',
        'features.proactiveDesc': "Don't wait to discover problems. Get automatic alerts when something unusual happens in your data.",
        'features.actionTitle': 'Action Recommendations',
        'features.actionDesc': "Don't just know what happened—know what to do. Get AI-powered suggestions tailored to your business.",
        'features.integrationTitle': 'One-Click Integrations',
        'features.integrationDesc': 'Connect Google Analytics, Yandex Metrica, spreadsheets, and databases in seconds. No technical setup.',

        // How It Works
        'howItWorks.tag': 'How It Works',
        'howItWorks.title1': 'From Data to Decisions',
        'howItWorks.title2': 'In Three Steps',
        'howItWorks.step1Title': 'Connect Your Data',
        'howItWorks.step1Desc': 'Link your Google Analytics, spreadsheets, or databases with one click. We support 150+ data sources including Yandex Metrica.',
        'howItWorks.step2Title': 'Ask Questions',
        'howItWorks.step2Desc': 'Type your questions in plain language. "What\'s my best traffic source?" "How did sales change this month?" No SQL or formulas needed.',
        'howItWorks.step3Title': 'Get Insights & Act',
        'howItWorks.step3Desc': 'Receive clear answers with visualizations, narrative explanations, and actionable recommendations. Export to PDF or share with your team.',
        'howItWorks.q1': '"Why did bounce rate increase?"',
        'howItWorks.q2': '"Top 5 customers by revenue"',
        'howItWorks.q3': '"Compare Q3 vs Q4 sales"',
        'howItWorks.revenueGrowth': 'Revenue Growth',
        'howItWorks.actionNeeded': 'Action Needed',

        // Integrations
        'integrations.tag': 'Integrations',
        'integrations.title1': 'Connect All Your',
        'integrations.title2': 'Data Sources',
        'integrations.subtitle': 'One platform for all your business data. No more switching between tools.',
        'integrations.more': 'More Integrations',

        // Pricing
        'pricing.tag': 'Pricing',
        'pricing.title1': 'Investment That',
        'pricing.title2': 'Pays for Itself',
        'pricing.subtitle': 'Transform how your business makes decisions. Start with a free trial.',
        'pricing.monthly': 'Monthly',
        'pricing.yearly': 'Yearly',
        'pricing.save': 'Save 20%',
        'pricing.perMonth': '/month',
        'pricing.starterName': 'Starter',
        'pricing.starterDesc': 'For small businesses getting started',
        'pricing.starterF1': '3 data sources',
        'pricing.starterF2': '500 questions/month',
        'pricing.starterF3': 'Basic visualizations',
        'pricing.starterF4': 'Email support',
        'pricing.growthName': 'Growth',
        'pricing.growthDesc': 'For growing SMEs ready to scale',
        'pricing.growthF1': '10 data sources',
        'pricing.growthF2': 'Unlimited questions',
        'pricing.growthF3': 'Automated weekly reports',
        'pricing.growthF4': 'Custom dashboards',
        'pricing.growthF5': 'Team sharing (5 users)',
        'pricing.growthF6': 'Priority support',
        'pricing.proName': 'Professional',
        'pricing.proDesc': 'For data-driven organizations',
        'pricing.proF1': '25 data sources',
        'pricing.proF2': 'Database connections',
        'pricing.proF3': 'Custom report templates',
        'pricing.proF4': 'API access',
        'pricing.proF5': 'Team sharing (15 users)',
        'pricing.proF6': 'Dedicated account manager',
        'pricing.enterpriseName': 'Enterprise',
        'pricing.enterpriseDesc': 'For large organizations',
        'pricing.enterpriseF1': 'Unlimited data sources',
        'pricing.enterpriseF2': 'White-label reports',
        'pricing.enterpriseF3': 'Custom integrations',
        'pricing.enterpriseF4': 'Unlimited team members',
        'pricing.enterpriseF5': 'On-premise deployment',
        'pricing.enterpriseF6': '24/7 dedicated support',
        'pricing.custom': 'Custom',
        'pricing.startTrial': 'Start Free Trial',
        'pricing.contactSales': 'Contact Sales',
        'pricing.popular': 'Most Popular',

        // Testimonials
        'testimonials.tag': 'Testimonials',
        'testimonials.title1': 'Loved by',
        'testimonials.title2': 'Business Owners',
        'testimonials.subtitle': 'See what our customers are saying about AskData.',
        'testimonials.quote1': '"Finally, I can understand my data without bothering my developer. AskData gives me the insights I need to make decisions, explained in plain language."',
        'testimonials.quote2': '"The weekly reports save me hours. I used to dread pulling together numbers for our team meetings. Now it\'s automated and actually tells me what matters."',
        'testimonials.quote3': '"Connecting our Yandex Metrica was seamless. We operate in multiple markets and AskData handles all our analytics sources beautifully."',
        'testimonials.role1': 'E-commerce Owner',
        'testimonials.role2': 'Marketing Director',
        'testimonials.role3': 'SaaS Founder',

        // CTA
        'cta.title': "Ready to Unlock Your Data's Potential?",
        'cta.subtitle': "Join business owners who've stopped guessing and started knowing. Get your first insights in under 5 minutes.",
        'cta.button': 'Start Free Trial',
        'cta.note': 'No credit card required',

        // Contact
        'contact.tag': 'Contact Us',
        'contact.title1': "Let's Talk About",
        'contact.title2': 'Your Data',
        'contact.subtitle': "Have questions? We'd love to hear from you. Reach out through any channel.",
        'contact.phoneTitle': 'Phone',
        'contact.emailTitle': 'Email',

        // Footer
        'footer.description': 'Turn your business data into actionable stories with AI-powered analytics.',
        'footer.product': 'Product',
        'footer.resources': 'Resources',
        'footer.company': 'Company',
        'footer.integrations': 'Integrations',
        'footer.changelog': 'Changelog',
        'footer.documentation': 'Documentation',
        'footer.blog': 'Blog',
        'footer.helpCenter': 'Help Center',
        'footer.api': 'API Reference',
        'footer.about': 'About Us',
        'footer.careers': 'Careers',
        'footer.privacy': 'Privacy Policy',
        'footer.rights': 'All rights reserved.',
        'footer.terms': 'Terms of Service',
        'footer.cookies': 'Cookie Policy',

        // Chat Demo
        'chat.question1': 'What were my top performing products last month?',
        'chat.question2': 'Why did sales drop this week?',
        'chat.answer1Title': "Here's your top 5 products for November:",
        'chat.answer1Insight': 'Pro Plan revenue increased 23% vs October',
        'chat.answer2Title': 'Sales dropped 12% this week due to:',
        'chat.answer2Reason1': 'Holiday period - 35% less traffic',
        'chat.answer2Reason2': 'Cart abandonment up 8%',
        'chat.answer2Action': 'Consider: Launch a holiday promotion campaign'
    },
    uz: {
        // Navigation
        'nav.features': 'Xususiyatlar',
        'nav.howItWorks': 'Qanday ishlaydi',
        'nav.pricing': 'Narxlar',
        'nav.testimonials': 'Fikrlar',
        'nav.contact': 'Aloqa',
        'nav.login': 'Kirish',
        'nav.trial': 'Bepul sinash',

        // Hero
        'hero.badge': 'Sun\'iy intellekt bilan tahlil platformasi',
        'hero.titleLine1': 'Ma\'lumotlaringizni',
        'hero.titleLine2': 'Amaliy hikoyalarga aylantiring',
        'hero.subtitle': 'Oddiy tilda savollar bering. Bir zumda tahlillar, chiroyli vizualizatsiyalar va aniq tavsiyalar oling. SQL kerak emas, murakkablik yo\'q, ma\'lumotlar guruhi talab qilinmaydi.',
        'hero.cta': 'Bepul boshlash',
        'hero.demo': 'Demo ko\'rish',
        'hero.stat1': 'O\'rnatish vaqti',
        'hero.stat2': 'Ma\'lumot integratsiyalari',
        'hero.stat3': 'Tezroq tahlillar',

        // Problem
        'problem.tag': 'Muammo',
        'problem.title1': 'Ma\'lumotlaringiz kuchli.',
        'problem.title2': 'Lekin qulflangan.',
        'problem.subtitle': 'KO\'Blar qimmatli ma\'lumotlarga ega, lekin ular turli platformalarda tarqalgan. Tahlillarni ochish uchun ma\'lumotlar olimi yoki qimmat vositalar kerak bo\'lmasligi kerak.',
        'problem.now': 'HOZIR',
        'problem.with': 'ASKDATA BILAN',
        'problem.nowTitle': 'Tarqoq va chalkash',
        'problem.nowDesc': '5+ vositada ma\'lumot, soatlar yo\'qoladi, qarorlar kechikadi',
        'problem.withTitle': 'Aniq va amaliy',
        'problem.withDesc': 'Bitta platforma, bir zumda javoblar, ishonchli qarorlar',
        'problem.pain1Title': 'Texnik to\'siqlar',
        'problem.pain1Desc': 'SQL va BI vositalari tajriba talab qiladi. Jamoangizning faqat 25% tahliilarga kirishi mumkin.',
        'problem.pain2Title': 'Ma\'lumot siloqlari',
        'problem.pain2Desc': 'Tahlillar, CRM, jadvallar, buxgalteriya - ma\'lumotlaringiz turli dunyolarda yashaydi.',
        'problem.pain3Title': 'Vaqt yo\'qotish',
        'problem.pain3Desc': 'Biznesingizni boshqarish o\'rniga hisobotlar yaratishga soatlar sarflanadi.',
        'problem.pain4Title': '"Nima uchun?" yo\'q',
        'problem.pain4Desc': 'Grafiklar raqamlarni ko\'rsatadi, lekin ular nimani anglatadi? Keyingi qadam nima?',

        // Features
        'features.tag': 'Xususiyatlar',
        'features.title1': 'Ma\'lumotlaringizni tushunish uchun',
        'features.title2': 'Kerak bo\'lgan hamma narsa',
        'features.subtitle': 'Biznes egalari uchun mo\'ljallangan kuchli xususiyatlar, ma\'lumotlar olimlari uchun emas.',
        'features.coreFeature': 'Asosiy xususiyat',
        'features.conversationalTitle': 'Suhbat tahlili',
        'features.conversationalDesc': 'Oddiy tilda savollar bering. "O\'tgan haftada savdolarim qanday edi?" "Trafik nima uchun tushdi?" Chiroyli vizualizatsiyalar bilan bir zumda aniq javoblar oling.',
        'features.conversationalItem1': 'Tabiiy til so\'rovlari',
        'features.conversationalItem2': 'Qo\'shimcha savollar qo\'llab-quvvatlash',
        'features.conversationalItem3': 'Ko\'p tilli qo\'llab-quvvatlash',
        'features.visualTitle': 'Avtomatik vizualizatsiyalar',
        'features.visualDesc': 'Sun\'iy intellekt ma\'lumotlaringiz uchun eng yaxshi grafik turini avtomatik tanlaydi.',
        'features.narrativeTitle': 'Hikoya hisobotlari',
        'features.narrativeDesc': 'Raqamlaringiz ortidagi "nima uchun"ni tushuntiradigan hikoyaga asoslangan hisobotlar oling.',
        'features.proactiveTitle': 'Faol tahlillar',
        'features.proactiveDesc': 'Muammolarni aniqlashni kutmang. Ma\'lumotlaringizda g\'ayrioddiy narsa sodir bo\'lganda avtomatik ogohlantirishlar oling.',
        'features.actionTitle': 'Harakat tavsiylari',
        'features.actionDesc': 'Faqat nima bo\'lganini bilish emas - nima qilish kerakligini biling. Biznesingizga moslashtirilgan sun\'iy intellekt takliflari.',
        'features.integrationTitle': 'Bir marta bosish integratsiyalari',
        'features.integrationDesc': 'Google Analytics, Yandex Metrica, jadvallar va ma\'lumotlar bazalarini bir zumda ulang.',

        // How It Works
        'howItWorks.tag': 'Qanday ishlaydi',
        'howItWorks.title1': 'Ma\'lumotdan qarorlarga',
        'howItWorks.title2': 'Uch qadamda',
        'howItWorks.step1Title': 'Ma\'lumotlaringizni ulang',
        'howItWorks.step1Desc': 'Google Analytics, jadvallar yoki ma\'lumotlar bazalarini bir marta bosish bilan ulang. Yandex Metrica ham qo\'llab-quvvatlanadi.',
        'howItWorks.step2Title': 'Savollar bering',
        'howItWorks.step2Desc': 'Oddiy tilda savollaringizni yozing. "Eng yaxshi trafik manbam nima?" SQL yoki formulalar kerak emas.',
        'howItWorks.step3Title': 'Tahlillar oling va harakat qiling',
        'howItWorks.step3Desc': 'Vizualizatsiyalar, hikoya tushuntirishlari va amaliy tavsiyalar bilan aniq javoblar oling.',
        'howItWorks.q1': '"Sakrash darajasi nima uchun oshdi?"',
        'howItWorks.q2': '"Daromad bo\'yicha top 5 mijoz"',
        'howItWorks.q3': '"3-chorak va 4-chorakni solishtiring"',
        'howItWorks.revenueGrowth': 'Daromad o\'sishi',
        'howItWorks.actionNeeded': 'Harakat kerak',

        // Integrations
        'integrations.tag': 'Integratsiyalar',
        'integrations.title1': 'Barcha ma\'lumot manbalaringizni',
        'integrations.title2': 'Ulang',
        'integrations.subtitle': 'Barcha biznes ma\'lumotlaringiz uchun bitta platforma. Vositalar o\'rtasida almashish yo\'q.',
        'integrations.more': 'Ko\'proq integratsiyalar',

        // Pricing
        'pricing.tag': 'Narxlar',
        'pricing.title1': 'O\'zini oqlaydigan',
        'pricing.title2': 'Investitsiya',
        'pricing.subtitle': 'Biznesingiz qarorlar qabul qilish usulini o\'zgartiring. Bepul sinov bilan boshlang.',
        'pricing.monthly': 'Oylik',
        'pricing.yearly': 'Yillik',
        'pricing.save': '20% tejang',
        'pricing.perMonth': '/oy',
        'pricing.starterName': 'Boshlang\'ich',
        'pricing.starterDesc': 'Boshlayotgan kichik bizneslar uchun',
        'pricing.starterF1': '3 ta ma\'lumot manbai',
        'pricing.starterF2': 'Oyiga 500 ta savol',
        'pricing.starterF3': 'Asosiy vizualizatsiyalar',
        'pricing.starterF4': 'Email qo\'llab-quvvatlash',
        'pricing.growthName': 'O\'sish',
        'pricing.growthDesc': 'O\'sishga tayyor KO\'Blar uchun',
        'pricing.growthF1': '10 ta ma\'lumot manbai',
        'pricing.growthF2': 'Cheksiz savollar',
        'pricing.growthF3': 'Avtomatik haftalik hisobotlar',
        'pricing.growthF4': 'Maxsus boshqaruv panellari',
        'pricing.growthF5': 'Jamoa ulashish (5 foydalanuvchi)',
        'pricing.growthF6': 'Ustuvor qo\'llab-quvvatlash',
        'pricing.proName': 'Professional',
        'pricing.proDesc': 'Ma\'lumotlarga asoslangan tashkilotlar uchun',
        'pricing.proF1': '25 ta ma\'lumot manbai',
        'pricing.proF2': 'Ma\'lumotlar bazasi ulanishlari',
        'pricing.proF3': 'Maxsus hisobot shablonlari',
        'pricing.proF4': 'API kirish',
        'pricing.proF5': 'Jamoa ulashish (15 foydalanuvchi)',
        'pricing.proF6': 'Shaxsiy menejer',
        'pricing.enterpriseName': 'Korporativ',
        'pricing.enterpriseDesc': 'Yirik tashkilotlar uchun',
        'pricing.enterpriseF1': 'Cheksiz ma\'lumot manbalari',
        'pricing.enterpriseF2': 'Oq yorliqli hisobotlar',
        'pricing.enterpriseF3': 'Maxsus integratsiyalar',
        'pricing.enterpriseF4': 'Cheksiz jamoa a\'zolari',
        'pricing.enterpriseF5': 'Mahalliy o\'rnatish',
        'pricing.enterpriseF6': '24/7 maxsus qo\'llab-quvvatlash',
        'pricing.custom': 'Maxsus',
        'pricing.startTrial': 'Bepul sinash',
        'pricing.contactSales': 'Sotuvga murojaat',
        'pricing.popular': 'Eng mashhur',

        // Testimonials
        'testimonials.tag': 'Fikrlar',
        'testimonials.title1': 'Biznes egalari',
        'testimonials.title2': 'Tomonidan sevilgan',
        'testimonials.subtitle': 'Mijozlarimiz AskData haqida nima deyishini ko\'ring.',
        'testimonials.quote1': '"Nihoyat, men dasturchimni bezovta qilmasdan ma\'lumotlarimni tushuna olaman. AskData menga qarorlar qabul qilish uchun kerakli tahlillarni beradi."',
        'testimonials.quote2': '"Haftalik hisobotlar menga soatlarni tejaydi. Men jamoa uchrashuvlari uchun raqamlarni yig\'ishdan qo\'rqardim. Endi u avtomatlashtirilgan."',
        'testimonials.quote3': '"Yandex Metrica-ni ulash juda oson edi. Biz ko\'p bozorlarda ishlaymiz va AskData barcha tahlil manbalarimizni chiroyli boshqaradi."',
        'testimonials.role1': 'E-tijorat egasi',
        'testimonials.role2': 'Marketing direktori',
        'testimonials.role3': 'SaaS asoschisi',

        // CTA
        'cta.title': 'Ma\'lumotlaringiz salohiyatini ochishga tayyormisiz?',
        'cta.subtitle': 'Taxmin qilishni to\'xtatgan va bilishni boshlagan biznes egalariga qo\'shiling. 5 daqiqa ichida birinchi tahlillaringizni oling.',
        'cta.button': 'Bepul sinash',
        'cta.note': 'Kredit karta talab qilinmaydi',

        // Contact
        'contact.tag': 'Biz bilan bog\'laning',
        'contact.title1': 'Ma\'lumotlaringiz haqida',
        'contact.title2': 'Gaplashaylik',
        'contact.subtitle': 'Savollaringiz bormi? Sizdan eshitishni xohlaymiz. Har qanday kanal orqali murojaat qiling.',
        'contact.phoneTitle': 'Telefon',
        'contact.emailTitle': 'Email',

        // Footer
        'footer.description': 'Biznes ma\'lumotlaringizni sun\'iy intellekt yordamida amaliy hikoyalarga aylantiring.',
        'footer.product': 'Mahsulot',
        'footer.resources': 'Manbalar',
        'footer.company': 'Kompaniya',
        'footer.integrations': 'Integratsiyalar',
        'footer.changelog': 'O\'zgarishlar jurnali',
        'footer.documentation': 'Hujjatlar',
        'footer.blog': 'Blog',
        'footer.helpCenter': 'Yordam markazi',
        'footer.api': 'API ma\'lumotnomasi',
        'footer.about': 'Biz haqimizda',
        'footer.careers': 'Karyera',
        'footer.privacy': 'Maxfiylik siyosati',
        'footer.rights': 'Barcha huquqlar himoyalangan.',
        'footer.terms': 'Xizmat shartlari',
        'footer.cookies': 'Cookie siyosati',

        // Chat Demo
        'chat.question1': "O'tgan oyda eng yaxshi mahsulotlarim qaysilar edi?",
        'chat.question2': 'Bu hafta savdolar nima uchun tushdi?',
        'chat.answer1Title': 'Noyabr oyi uchun top 5 mahsulotingiz:',
        'chat.answer1Insight': 'Pro Plan daromadi Oktyabrga nisbatan 23% oshdi',
        'chat.answer2Title': 'Bu hafta savdolar 12% tushdi, sabablari:',
        'chat.answer2Reason1': 'Bayram davri - 35% kam trafik',
        'chat.answer2Reason2': 'Savat tashlab ketish 8% oshdi',
        'chat.answer2Action': "Taklif: Bayram aksiya kampaniyasini boshlang"
    },
    ru: {
        // Navigation
        'nav.features': 'Возможности',
        'nav.howItWorks': 'Как это работает',
        'nav.pricing': 'Цены',
        'nav.testimonials': 'Отзывы',
        'nav.contact': 'Контакты',
        'nav.login': 'Войти',
        'nav.trial': 'Начать бесплатно',

        // Hero
        'hero.badge': 'Аналитическая платформа на базе ИИ',
        'hero.titleLine1': 'Превратите ваши данные в',
        'hero.titleLine2': 'Действенные истории',
        'hero.subtitle': 'Задавайте вопросы на простом языке. Получайте мгновенные инсайты, красивые визуализации и чёткие рекомендации. Без SQL, без сложностей, без команды аналитиков.',
        'hero.cta': 'Начать бесплатно',
        'hero.demo': 'Смотреть демо',
        'hero.stat1': 'Время настройки',
        'hero.stat2': 'Интеграций данных',
        'hero.stat3': 'Быстрее инсайты',

        // Problem
        'problem.tag': 'Проблема',
        'problem.title1': 'Ваши данные мощные.',
        'problem.title2': 'Но они заперты.',
        'problem.subtitle': 'У МСБ есть ценные данные, разбросанные по платформам. Получение инсайтов не должно требовать дата-аналитика или дорогих инструментов.',
        'problem.now': 'СЕЙЧАС',
        'problem.with': 'С ASKDATA',
        'problem.nowTitle': 'Разрозненно и запутанно',
        'problem.nowDesc': 'Данные в 5+ инструментах, часы потеряны, решения откладываются',
        'problem.withTitle': 'Ясно и действенно',
        'problem.withDesc': 'Одна платформа, мгновенные ответы, уверенные решения',
        'problem.pain1Title': 'Технические барьеры',
        'problem.pain1Desc': 'SQL и BI-инструменты требуют экспертизы. Только 25% вашей команды имеют доступ к инсайтам.',
        'problem.pain2Title': 'Разрозненность данных',
        'problem.pain2Desc': 'Аналитика, CRM, таблицы, бухгалтерия - ваши данные живут в разных мирах.',
        'problem.pain3Title': 'Потеря времени',
        'problem.pain3Desc': 'Часы тратятся на создание отчётов вместо управления бизнесом.',
        'problem.pain4Title': 'Нет "И что?"',
        'problem.pain4Desc': 'Графики показывают цифры, но что они значат? Что делать дальше?',

        // Features
        'features.tag': 'Возможности',
        'features.title1': 'Всё, что нужно для',
        'features.title2': 'Понимания ваших данных',
        'features.subtitle': 'Мощные функции для владельцев бизнеса, а не для аналитиков.',
        'features.coreFeature': 'Ключевая функция',
        'features.conversationalTitle': 'Разговорная аналитика',
        'features.conversationalDesc': 'Задавайте вопросы на простом языке. "Какие были продажи на прошлой неделе?" "Почему упал трафик?" Получайте мгновенные ответы с красивыми визуализациями.',
        'features.conversationalItem1': 'Запросы на естественном языке',
        'features.conversationalItem2': 'Поддержка уточняющих вопросов',
        'features.conversationalItem3': 'Многоязычная поддержка',
        'features.visualTitle': 'Авто-визуализации',
        'features.visualDesc': 'ИИ автоматически выбирает лучший тип графика для ваших данных.',
        'features.narrativeTitle': 'Нарративные отчёты',
        'features.narrativeDesc': 'Получайте отчёты-истории, объясняющие "почему" за вашими цифрами.',
        'features.proactiveTitle': 'Проактивные инсайты',
        'features.proactiveDesc': 'Не ждите обнаружения проблем. Получайте автоматические оповещения при необычных изменениях.',
        'features.actionTitle': 'Рекомендации к действию',
        'features.actionDesc': 'Знайте не только что произошло, но и что делать. ИИ-рекомендации для вашего бизнеса.',
        'features.integrationTitle': 'Интеграции в один клик',
        'features.integrationDesc': 'Подключайте Google Analytics, Яндекс Метрику, таблицы и базы данных за секунды.',

        // How It Works
        'howItWorks.tag': 'Как это работает',
        'howItWorks.title1': 'От данных к решениям',
        'howItWorks.title2': 'За три шага',
        'howItWorks.step1Title': 'Подключите данные',
        'howItWorks.step1Desc': 'Свяжите Google Analytics, таблицы или базы данных одним кликом. Поддерживается Яндекс Метрика.',
        'howItWorks.step2Title': 'Задавайте вопросы',
        'howItWorks.step2Desc': 'Пишите вопросы на простом языке. "Какой лучший источник трафика?" Без SQL или формул.',
        'howItWorks.step3Title': 'Получайте инсайты и действуйте',
        'howItWorks.step3Desc': 'Получайте чёткие ответы с визуализациями, объяснениями и рекомендациями.',
        'howItWorks.q1': '"Почему вырос показатель отказов?"',
        'howItWorks.q2': '"Топ-5 клиентов по выручке"',
        'howItWorks.q3': '"Сравнить Q3 и Q4 продажи"',
        'howItWorks.revenueGrowth': 'Рост выручки',
        'howItWorks.actionNeeded': 'Требуется действие',

        // Integrations
        'integrations.tag': 'Интеграции',
        'integrations.title1': 'Подключите все ваши',
        'integrations.title2': 'Источники данных',
        'integrations.subtitle': 'Одна платформа для всех бизнес-данных. Больше никаких переключений.',
        'integrations.more': 'Больше интеграций',

        // Pricing
        'pricing.tag': 'Цены',
        'pricing.title1': 'Инвестиция, которая',
        'pricing.title2': 'Окупается',
        'pricing.subtitle': 'Измените то, как ваш бизнес принимает решения. Начните с бесплатной пробной версии.',
        'pricing.monthly': 'Ежемесячно',
        'pricing.yearly': 'Ежегодно',
        'pricing.save': 'Экономия 20%',
        'pricing.perMonth': '/месяц',
        'pricing.starterName': 'Стартовый',
        'pricing.starterDesc': 'Для малого бизнеса на старте',
        'pricing.starterF1': '3 источника данных',
        'pricing.starterF2': '500 вопросов/месяц',
        'pricing.starterF3': 'Базовые визуализации',
        'pricing.starterF4': 'Email поддержка',
        'pricing.growthName': 'Рост',
        'pricing.growthDesc': 'Для растущего МСБ',
        'pricing.growthF1': '10 источников данных',
        'pricing.growthF2': 'Неограниченно вопросов',
        'pricing.growthF3': 'Автоматические еженедельные отчёты',
        'pricing.growthF4': 'Настраиваемые дашборды',
        'pricing.growthF5': 'Командный доступ (5 пользователей)',
        'pricing.growthF6': 'Приоритетная поддержка',
        'pricing.proName': 'Профессиональный',
        'pricing.proDesc': 'Для data-driven организаций',
        'pricing.proF1': '25 источников данных',
        'pricing.proF2': 'Подключение баз данных',
        'pricing.proF3': 'Настраиваемые шаблоны отчётов',
        'pricing.proF4': 'Доступ к API',
        'pricing.proF5': 'Командный доступ (15 пользователей)',
        'pricing.proF6': 'Персональный менеджер',
        'pricing.enterpriseName': 'Корпоративный',
        'pricing.enterpriseDesc': 'Для крупных организаций',
        'pricing.enterpriseF1': 'Неограниченно источников данных',
        'pricing.enterpriseF2': 'White-label отчёты',
        'pricing.enterpriseF3': 'Кастомные интеграции',
        'pricing.enterpriseF4': 'Неограниченно пользователей',
        'pricing.enterpriseF5': 'Локальное развёртывание',
        'pricing.enterpriseF6': '24/7 выделенная поддержка',
        'pricing.custom': 'По запросу',
        'pricing.startTrial': 'Начать бесплатно',
        'pricing.contactSales': 'Связаться с продажами',
        'pricing.popular': 'Самый популярный',

        // Testimonials
        'testimonials.tag': 'Отзывы',
        'testimonials.title1': 'Любимый',
        'testimonials.title2': 'Владельцами бизнеса',
        'testimonials.subtitle': 'Узнайте, что говорят наши клиенты об AskData.',
        'testimonials.quote1': '"Наконец-то я могу понимать свои данные, не беспокоя разработчика. AskData даёт мне инсайты для принятия решений на понятном языке."',
        'testimonials.quote2': '"Еженедельные отчёты экономят мне часы. Раньше я боялся собирать цифры для совещаний. Теперь это автоматизировано."',
        'testimonials.quote3': '"Подключение Яндекс Метрики было бесшовным. Мы работаем на нескольких рынках, и AskData прекрасно справляется со всеми источниками."',
        'testimonials.role1': 'Владелец e-commerce',
        'testimonials.role2': 'Директор по маркетингу',
        'testimonials.role3': 'Основатель SaaS',

        // CTA
        'cta.title': 'Готовы раскрыть потенциал ваших данных?',
        'cta.subtitle': 'Присоединяйтесь к владельцам бизнеса, которые перестали гадать и начали знать. Получите первые инсайты менее чем за 5 минут.',
        'cta.button': 'Начать бесплатно',
        'cta.note': 'Кредитная карта не требуется',

        // Contact
        'contact.tag': 'Свяжитесь с нами',
        'contact.title1': 'Давайте поговорим о',
        'contact.title2': 'Ваших данных',
        'contact.subtitle': 'Есть вопросы? Мы будем рады услышать вас. Свяжитесь любым удобным способом.',
        'contact.phoneTitle': 'Телефон',
        'contact.emailTitle': 'Email',

        // Footer
        'footer.description': 'Превращайте бизнес-данные в действенные истории с помощью ИИ-аналитики.',
        'footer.product': 'Продукт',
        'footer.resources': 'Ресурсы',
        'footer.company': 'Компания',
        'footer.integrations': 'Интеграции',
        'footer.changelog': 'История изменений',
        'footer.documentation': 'Документация',
        'footer.blog': 'Блог',
        'footer.helpCenter': 'Центр помощи',
        'footer.api': 'Справочник API',
        'footer.about': 'О нас',
        'footer.careers': 'Карьера',
        'footer.privacy': 'Политика конфиденциальности',
        'footer.rights': 'Все права защищены.',
        'footer.terms': 'Условия использования',
        'footer.cookies': 'Политика cookies',

        // Chat Demo
        'chat.question1': 'Какие были топ-продукты в прошлом месяце?',
        'chat.question2': 'Почему продажи упали на этой неделе?',
        'chat.answer1Title': 'Ваши топ-5 продуктов за ноябрь:',
        'chat.answer1Insight': 'Выручка Pro Plan выросла на 23% по сравнению с октябрём',
        'chat.answer2Title': 'Продажи упали на 12% на этой неделе из-за:',
        'chat.answer2Reason1': 'Праздничный период - на 35% меньше трафика',
        'chat.answer2Reason2': 'Отказ от корзины вырос на 8%',
        'chat.answer2Action': 'Рекомендация: Запустите праздничную промо-кампанию'
    }
};

let currentLang = 'en';

// Function to update the UI with translations
function updateTranslations(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('askdata-lang', lang);

    // Restart chat demo with new language
    startChatDemo();
}

document.addEventListener('DOMContentLoaded', function() {
    // Check saved language preference
    const savedLang = localStorage.getItem('askdata-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updateTranslations(savedLang);
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang);
        });
    }

    // Language Switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateTranslations(lang);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Pricing Toggle (Monthly/Yearly)
    const pricingToggle = document.getElementById('pricingToggle');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    const priceAmounts = document.querySelectorAll('.amount[data-monthly]');

    if (pricingToggle) {
        pricingToggle.addEventListener('click', function() {
            this.classList.toggle('active');

            // Toggle label active states
            toggleLabels.forEach(label => label.classList.toggle('active'));

            // Update prices
            const isYearly = this.classList.contains('active');
            priceAmounts.forEach(amount => {
                const monthly = amount.getAttribute('data-monthly');
                const yearly = amount.getAttribute('data-yearly');
                amount.textContent = isYearly ? yearly : monthly;
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.8)';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in animation to cards
    const animateElements = document.querySelectorAll(
        '.pain-point, .feature-card, .pricing-card, .testimonial-card, .integration-card, .step, .problem-state, .contact-card'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        fadeInObserver.observe(el);
    });

    // Add CSS class for visible state
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        /* Mobile Menu Styles */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: rgba(15, 15, 35, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 24px;
                gap: 16px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transform: translateY(-100%);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
            }

            .nav-menu.active {
                display: flex;
                transform: translateY(0);
                opacity: 1;
                pointer-events: auto;
            }

            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
        }
    `;
    document.head.appendChild(style);

    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }

    // Start chat demo animation
    startChatDemo();

    // Button hover effect
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Console welcome message
    console.log('%c Welcome to AskData! ', 'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: white; font-size: 20px; padding: 10px; border-radius: 8px;');
    console.log('%c Transform your data into actionable stories ', 'color: #00d4ff; font-size: 14px;');
});

// Animated Chat Demo
function startChatDemo() {
    const chatDemo = document.getElementById('chatDemo');
    if (!chatDemo) return;

    const t = translations[currentLang];

    const conversations = [
        {
            question: t['chat.question1'],
            answer: `
                <p>${t['chat.answer1Title']}</p>
                <div class="mini-chart">
                    <div class="chart-bar" style="--height: 95%"><span>Pro Plan</span></div>
                    <div class="chart-bar" style="--height: 78%"><span>Starter</span></div>
                    <div class="chart-bar" style="--height: 65%"><span>Enterprise</span></div>
                    <div class="chart-bar" style="--height: 45%"><span>Add-ons</span></div>
                    <div class="chart-bar" style="--height: 32%"><span>Support</span></div>
                </div>
                <p class="insight-text">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                        <path d="M17 6h6v6"/>
                    </svg>
                    ${t['chat.answer1Insight']}
                </p>
            `
        },
        {
            question: t['chat.question2'],
            answer: `
                <p>${t['chat.answer2Title']}</p>
                <ul style="margin: 12px 0; padding-left: 20px; color: var(--text-secondary);">
                    <li style="margin-bottom: 8px;">${t['chat.answer2Reason1']}</li>
                    <li>${t['chat.answer2Reason2']}</li>
                </ul>
                <p class="insight-text" style="color: #f59e0b;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    ${t['chat.answer2Action']}
                </p>
            `
        }
    ];

    let currentConversation = 0;

    function typeText(element, text, speed = 30) {
        return new Promise(resolve => {
            let index = 0;
            element.textContent = '';
            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    async function showConversation(conv) {
        chatDemo.innerHTML = '';

        // User message
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-message user';
        userDiv.innerHTML = `
            <span class="chat-avatar user-avatar">You</span>
            <div class="chat-bubble"></div>
        `;
        chatDemo.appendChild(userDiv);

        // Animate user typing
        await typeText(userDiv.querySelector('.chat-bubble'), conv.question, 25);

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message ai';
        typingDiv.innerHTML = `
            <span class="chat-avatar ai-avatar">AI</span>
            <div class="chat-bubble">
                <div class="typing-indicator">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        chatDemo.appendChild(typingDiv);

        // Wait for typing animation
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Replace with actual answer
        typingDiv.querySelector('.chat-bubble').innerHTML = conv.answer;

        // Animate chart bars if present
        const bars = typingDiv.querySelectorAll('.chart-bar');
        bars.forEach((bar, i) => {
            bar.style.height = '0';
            setTimeout(() => {
                bar.style.height = bar.style.getPropertyValue('--height');
            }, i * 100 + 200);
        });

        // Wait before next conversation
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async function runDemo() {
        while (true) {
            await showConversation(conversations[currentConversation]);
            currentConversation = (currentConversation + 1) % conversations.length;
        }
    }

    runDemo();
}

// Parallax effect for gradient orbs
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});
