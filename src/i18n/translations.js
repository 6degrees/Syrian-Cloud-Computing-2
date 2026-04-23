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
      line1: 'تمكين النمو الرقمي',
      line2: 'عبر السحابة وحلول البرمجيات',
      sub: 'حوسبة سحابية آمنة، واستضافة محلية، وعمليات مُدارة، وخدمات رقمية تعزز الإيرادات, لتسريع رحلتك الرقمية.',
      ctaPrimary: 'ابدأ الآن',
      ctaSecondary: 'اكتشف خدماتنا',
      scroll: 'مرر للأسفل',
    },

    // Stats
    stats: {
      items: [
        { val: 'القطاع الحكومي', label: 'تحول رقمي' },
        { val: 'قطاع الأعمال', label: 'نمو في الإيرادات' },
        { val: 'قطاع الإتصالات', label: 'خدمات الأعمال و الأفراد' },
        { val: 'القطاع المالي', label: 'اقتصاد رقمي' },
      ],
    },

    // Introduction
    intro: {
      title: 'نُسرّع بناء الاقتصاد الرقمي في سوريا',
      body: 'تأسست الشركة السورية لخدمات الحوسبة السحابية لتكون ركيزة أساسية في تطوير البنية التحتية الرقمية وتمكين الاقتصاد الرقمي في سوريا، من خلال تقديم حلول سحابية آمنة، موثوقة، ومستضافة محليًا. نوفّر منصات تقنية متقدمة وخدمات رقمية مُدارة تمكّن المؤسسات والجهات الحكومية من تسريع التحول الرقمي، وتعزيز كفاءة العمليات، وابتكار نماذج أعمال جديدة قائمة على البيانات، مع ضمان سيادة البيانات والامتثال للمتطلبات التنظيمية. ومع تسارع جهود إعادة الإعمار، نؤمن بأن البنية التحتية الرقمية المتطورة تُعد محركًا رئيسيًا للنمو الاقتصادي، وداعمًا لاقتصاد رقمي مستدام، وأكثر قدرة على التكيف والابتكار.',
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
          desc: 'خدمات سحابية متقدمة لتخطيط وبناء وترحيل وتشغيل بيئاتك الرقمية باحترافية. نحدّث بنيتك التحتية القائمة، ونعزز المرونة وقابلية التوسع، ونرافق مؤسستك في مسار تحول رقمي متكامل يناسب احتياجاتك سواء أكانت سحابة عامة أو خاصة أو هجينة.',
        },
        {
          num: '02',
          icon: 'server',
          title: 'البنية التحتية كخدمة والعمليات المُدارة',
          desc: 'موارد حوسبة آمنة وقابلة للتوسع تُوفَّر عند الطلب دون الحاجة لإدارة بنية مادية معقدة ومكلفة. مدعومة بمراقبة مستمرة للأنظمة، وصيانة استباقية، ودعم تشغيلي متخصص على مدار الساعة، لضمان استقرار أعمالك وكفاءة تشغيلها في كل وقت.',
        },
        {
          num: '03',
          icon: 'shield',
          title: 'البرمجيات كخدمة مستضافة محلياً',
          desc: 'حلول SaaS مستضافة داخل سوريا لتلبية المتطلبات التنظيمية المحلية مع الحفاظ الكامل على سيادة البيانات وإقامتها. منصاتنا البرمجية المُدارة توفر موثوقية مؤسسية وامتثالاً تاماً وحماية متقدمة، مما يمنح مؤسستك مزايا البرمجيات الحديثة دون التنازل عن السيطرة على بياناتها.',
        },
        {
          num: '04',
          icon: 'phone',
          title: 'تطوير تطبيقات الجوال واستضافتها وتسويقها',
          desc: 'تطوير تطبيقات جوال متكامل من التصميم والبرمجة إلى الاستضافة والتسويق الرقمي. نبني تطبيقات عالية الأداء لنظامَي iOS وAndroid مع استضافة سحابية موثوقة وحملات موجّهة تعمّق التفاعل مع العملاء وتفتح قنوات إيرادات رقمية جديدة وقابلة للقياس.',
        },
        {
          num: '05',
          icon: 'megaphone',
          title: 'حملات التسويق الرقمي وتسريع المبيعات',
          desc: 'حملات تسويق رقمي متكاملة مبنية على استهداف دقيق للجمهور وتحليلات أداء متقدمة واستراتيجية محتوى فعّالة. نصمم مناهج متعددة القنوات لتوسيع حضورك السوقي، واستقطاب عملاء محتملين بجودة عالية، وتقليص دورة المبيعات، وتعظيم العائد على كل استثمار رقمي.',
        },
        {
          num: '06',
          icon: 'fintech',
          title: 'حلول التقنية المالية والأمن المتكامل',
          desc: 'منصات تقنية مالية آمنة وخدمات أمن سيبراني متكاملة، مع بنية أمنية مادية تشمل أنظمة مراقبة CCTV وحلول التحكم بالدخول. نحمي المعاملات الرقمية، ونضمن الامتثال التنظيمي، وندير المخاطر التشغيلية، ونقدم تغطية أمنية شاملة لبيئاتك الرقمية والمادية على حد سواء.',
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
      address: 'سوريا',
      cities: 'دمشق - حلب',
      email: 'Support@scc.com.sy',
      phone: '+963 933879763',
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
      line1: 'Empowering Digital Growth',
      line2: 'Through Cloud and Software Solutions',
      sub: 'Secure cloud, local hosting, managed operations, and revenue-driven digital services, engineered to accelerate your digital journey.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Explore Services',
      scroll: 'Scroll',
    },

    stats: {
      items: [
        { val: 'Government Sector', label: 'Digital Transformation' },
        { val: 'Business Sector', label: 'Revenue Growth' },
        { val: 'Telecom Sector', label: 'Business and Consumer Services' },
        { val: 'Financial Sector', label: 'Digital Economy' },
      ],
    },

    // Introduction
    intro: {
      title: 'Accelerating the Digital Economy in Syria.',
      body: 'The Syrian Company for Cloud Computing Services was established to serve as a core enabler of digital infrastructure and the digital economy in Syria through secure, reliable, and locally hosted cloud solutions. We provide advanced technology platforms and managed digital services that help businesses and government entities accelerate digital transformation, improve operational efficiency, and create new data-driven business models while ensuring data sovereignty and regulatory compliance. As reconstruction efforts advance, we believe modern digital infrastructure is a key engine for economic growth and a foundation for a resilient, sustainable, and innovation-ready digital economy.',
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
          desc: 'Advanced cloud services to plan, build, migrate, and operate your digital environments with confidence. We modernize legacy infrastructure, enhance scalability and operational resilience, and guide your organization through a tailored transformation roadmap — whether public, private, or hybrid cloud.',
        },
        {
          num: '02',
          icon: 'server',
          title: 'Infrastructure as a Service & Managed Operations',
          desc: 'Secure, scalable computing resources provisioned on demand, eliminating the complexity and cost of physical infrastructure management. Backed by continuous system monitoring, proactive maintenance, and 24/7 expert operational support — ensuring your workloads run reliably and efficiently at all times.',
        },
        {
          num: '03',
          icon: 'shield',
          title: 'Software as a Service Hosted Within the Country',
          desc: 'Locally hosted SaaS solutions designed to meet Syria\u2019s regulatory requirements while preserving full data sovereignty and residency. Our managed software platforms deliver enterprise-grade reliability, compliance, and security \u2014 giving your organization the benefits of modern software without sacrificing control over its data.',
        },
        {
          num: '04',
          icon: 'phone',
          title: 'Mobile Application Development, Hosting & Marketing',
          desc: 'End-to-end mobile application development — from UX design and engineering to cloud hosting and growth marketing. We build high-performance apps for iOS and Android, deploy reliable hosting, and run targeted campaigns that deepen customer engagement and drive measurable digital revenue.',
        },
        {
          num: '05',
          icon: 'megaphone',
          title: 'Digital Marketing Campaigns & Sales Acceleration',
          desc: 'Integrated digital marketing campaigns built on precise audience targeting, performance analytics, and multi-channel content strategy. We expand your market reach, attract high-quality leads, shorten the sales cycle, and consistently maximize your return on every digital marketing investment.',
        },
        {
          num: '06',
          icon: 'fintech',
          title: 'Fintech and Integrated Security Solutions',
          desc: 'Secure fintech platforms and enterprise cybersecurity services, combined with physical security infrastructure including CCTV monitoring and access control systems. We protect digital transactions, enforce regulatory compliance, manage operational risk, and provide end-to-end security coverage across your digital and physical environments.',
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
      address: 'Syria',
      cities: 'Damascus - Aleppo',
      email: 'Support@scc.com.sy',
      phone: '+963 933879763',
      rights: 'All rights reserved.',
    },
  },
};
