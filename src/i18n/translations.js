// Translations for the site. Arabic is the primary locale (per Firas, Sep 2025).
// English content is verbatim from Firas's approved "Design Proposal & Concept
// Prototypes" email (headline, sub-headline, introduction, and the six
// approved service definitions). Arabic is faithfully translated by our team.

export const translations = {
  ar: {
    // Meta
    companyName: 'السورية لخدمات الحوسبة السحابية',
    companyShort: 'SCC',
    tagline: 'شريك التحول الرقمي',

    // Nav
    nav: {
      introduction: 'من نحن',
      services: 'خدماتنا',
      why: 'لماذا نحن',
      contact: 'تواصل معنا',
      langToggle: 'EN',
      backToTop: 'العودة للأعلى',
    },

    // Hero
    hero: {
      badge: 'شريك التحول الرقمي',
      line1: 'تمكين التحول الرقمي',
      line2: 'عبر الحوسبة السحابية والبرمجيات والحلول الذكية للأعمال',
      sub: 'حوسبة سحابية آمنة، واستضافة محلية، وعمليات مُدارة، وخدمات رقمية تعزز الإيرادات — لتسريع رحلتك الرقمية.',
      ctaPrimary: 'ابدأ الآن',
      ctaSecondary: 'اكتشف خدماتنا',
      scroll: 'مرر للأسفل',
    },

    // Stats
    stats: {
      uptime: 'جاهزية الخدمة',
      uptimeLabel: 'وقت التشغيل',
      network: 'شبكة فائقة',
      networkLabel: 'سرعة الشبكة',
      support: 'دعم مستمر',
      supportLabel: 'الدعم الفني',
      localValue: 'محلي',
      localLabel: 'استضافة البيانات',
    },

    // Introduction (verbatim approved text)
    intro: {
      eyebrow: 'من نحن',
      title: 'أصبح التحول الرقمي ركيزة أساسية في إعادة تشكيل الصناعات',
      body: 'أصبح التحول الرقمي ركيزة أساسية في إعادة تشكيل الصناعات وتمكين المؤسسات من الانتقال من العمليات التقليدية إلى الخدمات الرقمية والإلكترونية المتقدمة. مهمتنا دعم هذا التحول من خلال تقديم خدمات حوسبة سحابية موثوقة، ومنصات برمجية حديثة، وحلول رقمية متكاملة تساعد الشركات على رفع الكفاءة، وتحسين تجربة العملاء، وفتح فرص جديدة لتوليد الإيرادات.',
      visualLabel: 'نطاق عمل السورية للحوسبة السحابية',
      visualTitle: 'بنية سحابية محلية ومنصات رقمية موثوقة',
      visualMeta: 'نقدّم البنية التحتية كخدمة، والبرمجيات كخدمة مستضافة داخل سوريا، والعمليات المُدارة، والحلول الرقمية للمؤسسات التي تحتاج إلى استمرارية الخدمة، وسيادة البيانات، ونتائج أعمال قابلة للقياس.',
    },

    // Services (six approved categories, verbatim descriptions)
    services: {
      eyebrow: 'خدماتنا',
      title: 'ستة مسارات خدمية',
      titleLine2: 'لدعم رحلتك نحو التحول الرقمي',
      lead: 'من البنية التحتية السحابية والبرمجيات المستضافة محلياً إلى تطبيقات الموبايل والتسويق الرقمي والخدمات الموجّهة للأفراد — باقة متكاملة لدعم الشركات والجهات الحكومية.',
      learnMore: 'اعرف المزيد',
      items: [
        {
          num: '01',
          icon: 'cloud',
          title: 'الحوسبة السحابية والتحول الرقمي',
          desc: 'نقدّم خدمات حوسبة سحابية متقدمة مصممة لدعم المؤسسات في بناء وترحيل وتشغيل بيئاتها الرقمية بثقة. تساعد حلولنا الشركات على تحديث البنية التحتية، وتحسين قابلية التوسع، وتعزيز المرونة، وتسريع تبني الخدمات الرقمية في جميع القطاعات.',
        },
        {
          num: '02',
          icon: 'server',
          title: 'البنية التحتية كخدمة والعمليات المُدارة',
          desc: 'يتيح عرضنا للبنية التحتية كخدمة (IaaS) للشركات الوصول إلى موارد حوسبة آمنة وقابلة للتوسع وعالية الأداء دون تعقيدات امتلاك وإدارة البنية التحتية المادية. إضافةً إلى ذلك، تضمن خدماتنا المُدارة مراقبةً وإدارةً وتحسيناً ودعماً تشغيلياً مستمراً، مما يتيح للعملاء التركيز على أعمالهم الأساسية بينما نتولى إدارة البيئة التقنية.',
        },
        {
          num: '03',
          icon: 'shield',
          title: 'البرمجيات كخدمة مستضافة محلياً',
          desc: 'نقدّم حلول البرمجيات كخدمة (SaaS) المستضافة محلياً داخل البلاد لتلبية المتطلبات التنظيمية والتشغيلية ومتطلبات القطاعات المختلفة. تدعم منصاتنا البرمجية المستضافة محلياً الشركات والجهات الحكومية في تسريع الترحيل الرقمي مع الحفاظ على سيادة البيانات والامتثال والأمن وموثوقية الخدمة.',
        },
        {
          num: '04',
          icon: 'phone',
          title: 'تطوير تطبيقات الموبايل واستضافتها وتسويقها',
          desc: 'نصمّم ونطوّر تطبيقات موبايل تساعد الشركات على بناء تفاعل أقوى مع العملاء، وتحسين تقديم الخدمات، وفتح قنوات رقمية جديدة. وبالتكامل مع استضافة موثوقة ودعم تسويقي موجّه، تساعد حلولنا مؤسسات B2B على تسريع النمو، وتوسيع نطاق العلامة التجارية، وتوليد مصادر إيرادات إضافية.',
        },
        {
          num: '05',
          icon: 'megaphone',
          title: 'حملات التسويق الرقمي وتسريع المبيعات',
          desc: 'بُنيت خدماتنا للتسويق الرقمي لمساعدة المؤسسات على توسيع الوصول السوقي، واستقطاب عملاء محتملين بجودة عالية، وتحسين معدلات التحويل. من خلال الحملات الاستراتيجية والاستهداف المبني على البيانات وتحسين الأداء، ندعم الشركات في تسريع المبيعات وتعظيم العائد على استثماراتها الرقمية.',
        },
        {
          num: '06',
          icon: 'users',
          title: 'خدمات رقمية للأفراد لتسريع الإيرادات',
          desc: 'نقدّم كذلك خدمات رقمية موجّهة للأفراد (B2C) تمكّن الشركات من التواصل المباشر مع العملاء النهائيين عبر تجارب رقمية مبتكرة. من المنصات الرقمية وتطبيقات الموبايل إلى حلول التفاعل الإلكتروني، صُمّمت خدماتنا لخلق القيمة وتعزيز الوصول وتسريع توليد الإيرادات.',
        },
      ],
    },

    // Why / Who We Are
    why: {
      eyebrow: 'لماذا نحن',
      title: 'كفاءة. موثوقية.',
      titleLine2: 'احترافية.',
      body: 'حوسبة سحابية آمنة، وعمليات مُدارة، وبرمجيات محلية للمؤسسات والجهات الحكومية — بتركيز على إعادة الإعمار وتوليد الإيرادات.',
      cta: 'تواصل مع فريقنا',
      features: [
        { num: '01', title: 'الكفاءة', desc: 'خدمات مصممة لأعلى أداء مع تكاليف تشغيل متوازنة تلائم واقع السوق السوري.' },
        { num: '02', title: 'الموثوقية', desc: 'بنية تحتية مستقرة مع مراقبة مستمرة لضمان استمرارية الأعمال على مدار الساعة.' },
        { num: '03', title: 'الثقة المحلية', desc: 'استضافة داخل سوريا لضمان سيادة البيانات والتوافق مع المتطلبات التنظيمية المحلية.' },
        { num: '04', title: 'إعادة الإعمار', desc: 'نساهم بحلول رقمية ملموسة في رحلة إعادة إعمار سوريا وتمكين المؤسسات الوطنية.' },
      ],
    },

    // CTA
    cta: {
      eyebrow: 'لنبدأ',
      title: 'جاهز لتسريع رحلة',
      titleLine2: 'تحولك الرقمي؟',
      sub: 'دعنا نصمم لك المزيج المناسب من خدمات الحوسبة السحابية والبرمجيات والخدمات الرقمية لمؤسستك.',
      primary: 'ابدأ رحلتك',
      secondary: 'تحدث مع مهندس',
    },

    // Footer
    footer: {
      description: 'نبني بنية تحتية سحابية موثوقة للمؤسسات والجهات الحكومية في سوريا. حلول محلية بتقنيات عالمية.',
      navigation: 'التنقل',
      navLinks: {
        services: 'ماذا نقدّم',
        why: 'فلسفتنا',
        insights: 'رؤى',
        contact: 'تواصل',
      },
      contact: 'للتواصل',
      address: 'دمشق، سوريا',
      rights: 'جميع الحقوق محفوظة.',
    },
  },

  en: {
    companyName: 'Syrian Company for Cloud Computing Services',
    companyShort: 'SCC',
    tagline: 'Digital Transformation Partner',

    nav: {
      introduction: 'About us',
      services: 'Services',
      why: 'Why Us',
      contact: 'Contact',
      langToggle: 'ع',
      backToTop: 'Back to top',
    },

    // Hero (approved headline + sub-headline, verbatim)
    hero: {
      badge: 'Digital Transformation Partner',
      line1: 'Empowering Digital Transformation',
      line2: 'Through Cloud, Software, and Smart Business Solutions',
      sub: 'Secure cloud, local hosting, managed operations, and revenue-driven digital services — engineered to accelerate your digital journey.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Explore Services',
      scroll: 'Scroll',
    },

    stats: {
      uptime: '99.99%',
      uptimeLabel: 'Uptime',
      network: '10 Gbps',
      networkLabel: 'Network',
      support: '24/7',
      supportLabel: 'Support',
      localValue: 'Local',
      localLabel: 'Data Residency',
    },

    // Introduction (verbatim approved paragraph)
    intro: {
      eyebrow: 'About us',
      title: 'Digital transformation is reshaping industries.',
      body: 'Digital transformation has become a key pillar in reshaping industries and enabling organizations to move from traditional operations to advanced digital and e-services. Our mission is to support this transformation by delivering reliable cloud computing services, modern software platforms, and end-to-end digital solutions that help businesses improve efficiency, enhance customer experience, and unlock new revenue opportunities.',
      visualLabel: 'Syrian Cloud Computing at a glance',
      visualTitle: 'Local cloud infrastructure and trusted digital platforms',
      visualMeta: 'SCC delivers IaaS, locally hosted SaaS, managed operations, and digital services for organizations that need reliability, data residency in Syria, and measurable business outcomes—the same capabilities we design, deploy, and run for our clients.',
    },

    // Services (six approved categories, verbatim descriptions)
    services: {
      eyebrow: 'Services',
      title: 'Six service tracks',
      titleLine2: 'to power your digital transformation',
      lead: 'From cloud infrastructure and locally hosted software to mobile apps, digital marketing, and B2C services — a full suite built for businesses and government entities.',
      learnMore: 'Learn more',
      items: [
        {
          num: '01',
          icon: 'cloud',
          title: 'Cloud Computing & Digital Transformation',
          desc: 'We provide advanced cloud computing services designed to support organizations in building, migrating, and operating their digital environments with confidence. Our solutions help enterprises modernize infrastructure, improve scalability, strengthen resilience, and accelerate the adoption of digital services across all sectors.',
        },
        {
          num: '02',
          icon: 'server',
          title: 'Infrastructure as a Service & Managed Operations',
          desc: 'Our Infrastructure as a Service (IaaS) offering enables businesses to access secure, scalable, and high-performance computing resources without the complexity of owning and managing physical infrastructure. In addition, our managed services ensure continuous monitoring, administration, optimization, and operational support, allowing customers to focus on their core business while we manage the technology environment.',
        },
        {
          num: '03',
          icon: 'shield',
          title: 'Software as a Service Hosted Within the Country',
          desc: 'We deliver Software as a Service (SaaS) solutions hosted locally within the country to meet regulatory, operational, and industry-specific requirements. Our locally hosted software platforms support businesses and government entities in accelerating digital migration while maintaining data residency, compliance, security, and service reliability.',
        },
        {
          num: '04',
          icon: 'phone',
          title: 'Mobile Application Development, Hosting & Marketing',
          desc: 'We design and develop mobile applications that help businesses create stronger engagement with customers, improve service delivery, and open new digital channels. Combined with reliable hosting and targeted marketing support, our mobile solutions help B2B organizations accelerate growth, improve brand reach, and generate additional revenue streams.',
        },
        {
          num: '05',
          icon: 'megaphone',
          title: 'Digital Marketing Campaigns & Sales Acceleration',
          desc: 'Our digital marketing services are built to help organizations expand market reach, attract quality leads, and improve conversion rates. Through strategic campaigns, data-driven targeting, and performance optimization, we support businesses in accelerating sales and maximizing the return on their digital investments.',
        },
        {
          num: '06',
          icon: 'users',
          title: 'B2C Digital Services to Accelerate Revenue',
          desc: 'We also provide B2C-focused digital services that enable businesses to connect directly with end customers through innovative digital experiences. From digital platforms and mobile applications to online engagement solutions, our services are designed to create value, improve accessibility, and accelerate revenue generation.',
        },
      ],
    },

    why: {
      eyebrow: 'Why Us',
      title: 'Efficiency. Reliability.',
      titleLine2: 'Professionalism.',
      body: 'Secure cloud, managed operations, and locally hosted software for Syrian businesses and government — focused on reconstruction and revenue.',
      cta: 'Talk with our team',
      features: [
        { num: '01', title: 'Efficiency', desc: 'Services engineered for peak performance with operating costs tuned for the Syrian market.' },
        { num: '02', title: 'Reliability', desc: 'Stable infrastructure and continuous monitoring to keep business operations running 24/7.' },
        { num: '03', title: 'Local Trust', desc: 'In-country hosting for data sovereignty and full alignment with local regulatory requirements.' },
        { num: '04', title: 'Reconstruction', desc: 'Tangible digital contributions to Syria’s reconstruction journey and national institutions.' },
      ],
    },

    cta: {
      eyebrow: 'Get Started',
      title: 'Ready to accelerate your',
      titleLine2: 'digital transformation journey?',
      sub: 'Let us design the right mix of cloud, software, and digital services for your organization.',
      primary: 'Start Your Journey',
      secondary: 'Talk to an engineer',
    },

    footer: {
      description: 'Building reliable cloud infrastructure for businesses and government entities across Syria. Local solutions with global technology.',
      navigation: 'Navigation',
      navLinks: {
        services: 'What We Do',
        why: 'Our Philosophy',
        insights: 'Insights',
        contact: 'Contact',
      },
      contact: 'Contact',
      address: 'Damascus, Syria',
      rights: 'All rights reserved.',
    },
  },
};
