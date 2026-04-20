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
      langToggle: 'English',
      backToTop: 'العودة للأعلى',
    },

    // Hero
    hero: {
      line1: 'تمكين التحول الرقمي',
      line2: 'عبر السحابة والبرمجيات والحلول الذكية',
      sub: 'حوسبة سحابية آمنة، واستضافة محلية، وعمليات مُدارة، وخدمات رقمية تعزز الإيرادات, لتسريع رحلتك الرقمية.',
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

    // Introduction
    intro: {
      title: 'نُسرّع مستقبل سوريا الرقمي.',
      body: 'تأسست السورية لخدمات الحوسبة السحابية لسد فجوة البنية التحتية الرقمية في سوريا. نقدّم حوسبة سحابية آمنة ومستضافة محلياً، ومنصات برمجية حديثة، وخدمات رقمية مُدارة، لنمنح المؤسسات والجهات الحكومية الأدوات اللازمة لتحديث عملياتها، والحفاظ على سيادة بياناتها، وتحقيق نمو ملموس. مع إعادة إعمار سوريا، نؤمن أن البنية التحتية الرقمية الموثوقة هي الأساس للتعافي الاقتصادي ومرونة المؤسسات.',
    },

    // Services (six approved categories)
    services: {
      title: 'ستة مسارات خدمية',
      titleLine2: 'لدعم رحلتك نحو التحول الرقمي',
      lead: 'من البنية التحتية السحابية والبرمجيات المستضافة محلياً إلى تطبيقات الجوال والتسويق الرقمي والخدمات الموجّهة للأفراد, باقة متكاملة لدعم الشركات والجهات الحكومية.',
      items: [
        {
          num: '01',
          icon: 'cloud',
          title: 'الحوسبة السحابية والتحول الرقمي',
          desc: 'خدمات حوسبة سحابية متقدمة لبناء وترحيل وتشغيل بيئاتك الرقمية بثقة, تحديث البنية التحتية وتعزيز المرونة وتسريع التبني الرقمي.',
        },
        {
          num: '02',
          icon: 'server',
          title: 'البنية التحتية كخدمة والعمليات المُدارة',
          desc: 'موارد حوسبة آمنة وقابلة للتوسع دون تعقيدات البنية المادية، مع مراقبة وإدارة ودعم تشغيلي مستمر على مدار الساعة.',
        },
        {
          num: '03',
          icon: 'shield',
          title: 'البرمجيات كخدمة مستضافة محلياً',
          desc: 'حلول SaaS مستضافة داخل سوريا لتلبية المتطلبات التنظيمية مع الحفاظ على سيادة البيانات والامتثال وموثوقية الخدمة.',
        },
        {
          num: '04',
          icon: 'phone',
          title: 'تطوير تطبيقات الجوال واستضافتها وتسويقها',
          desc: 'تصميم وتطوير تطبيقات جوال مع استضافة موثوقة ودعم تسويقي, لتعزيز التفاعل مع العملاء وفتح قنوات رقمية جديدة.',
        },
        {
          num: '05',
          icon: 'megaphone',
          title: 'حملات التسويق الرقمي وتسريع المبيعات',
          desc: 'حملات استراتيجية واستهداف مبني على البيانات لتوسيع الوصول السوقي واستقطاب عملاء بجودة عالية وتعظيم العائد الرقمي.',
        },
        {
          num: '06',
          icon: 'users',
          title: 'خدمات رقمية للأفراد لتسريع الإيرادات',
          desc: 'خدمات B2C تمكّن الشركات من التواصل المباشر مع العملاء النهائيين عبر منصات رقمية وتطبيقات جوال وحلول تفاعل مبتكرة.',
        },
      ],
    },

    // Why / Who We Are
    why: {
      title: 'كفاءة. موثوقية.',
      titleLine2: 'احترافية.',
      body: 'حوسبة سحابية آمنة، وعمليات مُدارة، وبرمجيات محلية للمؤسسات والجهات الحكومية, بتركيز على إعادة الإعمار وتوليد الإيرادات.',
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
      title: 'جاهز لتسريع رحلة',
      titleLine2: 'تحولك الرقمي؟',
      sub: 'دعنا نصمم لك المزيج المناسب من خدمات الحوسبة السحابية والبرمجيات والخدمات الرقمية لمؤسستك.',
      primary: 'ابدأ رحلتك',
    },

    // Footer
    footer: {
      description: 'نبني بنية تحتية سحابية موثوقة للمؤسسات والجهات الحكومية في سوريا. حلول محلية بتقنيات عالمية.',
      navigation: 'التنقل',
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
      langToggle: 'العربية',
      backToTop: 'Back to top',
    },

    // Hero
    hero: {
      line1: 'Empowering Digital Transformation',
      line2: 'Through Cloud, Software, and Smart Business Solutions',
      sub: 'Secure cloud, local hosting, managed operations, and revenue-driven digital services, engineered to accelerate your digital journey.',
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

    // Introduction
    intro: {
      title: 'Accelerating Syria\'s digital future.',
      body: 'The Syrian Company for Cloud Computing Services (SCC) was founded to bridge the digital infrastructure gap in Syria. We provide secure, locally hosted cloud computing, modern software platforms, and managed digital services, giving businesses and government entities the tools they need to modernize operations, maintain data sovereignty, and drive measurable growth. As Syria rebuilds, we believe reliable digital infrastructure is the foundation for economic recovery and institutional resilience.',
    },

    // Services (six approved categories)
    services: {
      title: 'Six service tracks',
      titleLine2: 'to power your digital transformation',
      lead: 'From cloud infrastructure and locally hosted software to mobile apps, digital marketing, and B2C services, a full suite built for businesses and government entities.',
      items: [
        {
          num: '01',
          icon: 'cloud',
          title: 'Cloud Computing & Digital Transformation',
          desc: 'Advanced cloud services to build, migrate, and operate your digital environment, modernizing infrastructure, improving scalability, and accelerating digital adoption.',
        },
        {
          num: '02',
          icon: 'server',
          title: 'Infrastructure as a Service & Managed Operations',
          desc: 'Secure, scalable computing resources without the complexity of physical infrastructure, backed by continuous monitoring and 24/7 operational support.',
        },
        {
          num: '03',
          icon: 'shield',
          title: 'Software as a Service Hosted Within the Country',
          desc: 'Locally hosted SaaS solutions meeting regulatory requirements while maintaining data residency, compliance, security, and service reliability.',
        },
        {
          num: '04',
          icon: 'phone',
          title: 'Mobile Application Development, Hosting & Marketing',
          desc: 'Custom mobile apps with reliable hosting and targeted marketing, strengthening customer engagement and opening new digital revenue channels.',
        },
        {
          num: '05',
          icon: 'megaphone',
          title: 'Digital Marketing Campaigns & Sales Acceleration',
          desc: 'Strategic campaigns and data-driven targeting to expand market reach, attract quality leads, and maximize return on digital investments.',
        },
        {
          num: '06',
          icon: 'users',
          title: 'B2C Digital Services to Accelerate Revenue',
          desc: 'Consumer-facing digital platforms, mobile apps, and engagement solutions that connect businesses directly with end customers to drive revenue.',
        },
      ],
    },

    why: {
      title: 'Efficiency. Reliability.',
      titleLine2: 'Professionalism.',
      body: 'Secure cloud, managed operations, and locally hosted software for Syrian businesses and government, focused on reconstruction and revenue.',
      cta: 'Talk with our team',
      features: [
        { num: '01', title: 'Efficiency', desc: 'Services engineered for peak performance with operating costs tuned for the Syrian market.' },
        { num: '02', title: 'Reliability', desc: 'Stable infrastructure and continuous monitoring to keep business operations running 24/7.' },
        { num: '03', title: 'Local Trust', desc: 'In-country hosting for data sovereignty and full alignment with local regulatory requirements.' },
        { num: '04', title: 'Reconstruction', desc: 'Tangible digital contributions to Syria\'s reconstruction journey and national institutions.' },
      ],
    },

    cta: {
      title: 'Ready to accelerate your',
      titleLine2: 'digital transformation journey?',
      sub: 'Let us design the right mix of cloud, software, and digital services for your organization.',
      primary: 'Start Your Journey',
    },

    footer: {
      description: 'Building reliable cloud infrastructure for businesses and government entities across Syria. Local solutions with global technology.',
      navigation: 'Navigation',
      contact: 'Contact',
      address: 'Damascus, Syria',
      rights: 'All rights reserved.',
    },
  },
};
