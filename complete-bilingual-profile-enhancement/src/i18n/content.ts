export type Lang = "en" | "ar";

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  linkLabel: string;
}

export interface ContentShape {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brandLine: string;
    menuOpen: string;
    menuClose: string;
    scrollToExplore: string;
    studioLine: string;
    langSwitch: string;
  };
  sectionIndex: NavItem[];
  cover: {
    badge: string;
    tagline: string;
    intro: string;
    title: string;
    subtitle: string;
    tags: string;
    scroll: string;
  };
  opening: {
    kicker: string;
    lead: string;
    headline: string;
    headlineHighlight: string;
    headlineEnd: string;
    paragraph1: string;
    paragraph2: string;
  };
  whoWeAre: {
    kicker: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    statLabel1: string;
    statValue1: string;
    statLabel2: string;
    statValue2: string;
    statLabel3: string;
    statValue3: string;
  };
  vmv: {
    kicker: string;
    heading: string;
    visionTitle: string;
    visionCopy: string;
    missionTitle: string;
    missionCopy: string;
    valuesTitle: string;
    values: { no: string; title: string; copy: string }[];
  };
  glance: {
    kicker: string;
    heading: string;
    stats: { value: string; label: string }[];
  };
  services: {
    kicker: string;
    heading: string;
    subheading: string;
    items: { no: string; title: string; copy: string; tags: string[] }[];
  };
  approach: {
    kicker: string;
    heading: string;
    paragraph: string;
    points: { title: string; copy: string }[];
  };
  process: {
    kicker: string;
    heading: string;
    steps: { no: string; title: string; copy: string }[];
  };
  expertise: {
    kicker: string;
    heading: string;
    groups: { group: string; items: string[] }[];
  };
  industries: {
    kicker: string;
    heading: string;
    items: string[];
  };
  projects: {
    kicker: string;
    heading: string;
    subheading: string;
    cta: string;
    items: Project[];
  };
  caseSpotlight: {
    kicker: string;
    heading: string;
    paragraph: string;
    challengeTitle: string;
    challengeCopy: string;
    solutionTitle: string;
    solutionCopy: string;
    resultTitle: string;
    resultCopy: string;
  };
  why: {
    kicker: string;
    heading: string;
    points: { no: string; title: string; copy: string }[];
  };
  quality: {
    kicker: string;
    heading: string;
    points: { title: string; copy: string }[];
  };
  closing: {
    kicker: string;
    heading: string;
    paragraph: string;
    cta: string;
  };
  contact: {
    kicker: string;
    heading: string;
    subheading: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phones: string[];
    websiteLabel: string;
    website: string;
    socialLabel: string;
    social: { name: string; handle: string; url: string }[];
    bankTitle: string;
    bankSubtitle: string;
    bankFields: { label: string; value: string }[];
    formNote: string;
    footerLine: string;
    rights: string;
  };
}

const projectsEn: Project[] = [
  {
    title: "Aurora Commerce",
    category: "E-commerce · Web Platform",
    description:
      "A full storefront rebuild with a custom headless architecture, raising conversion rate and checkout speed across devices.",
    tags: ["UI/UX", "Web Development", "Headless Commerce"],
    image: "/images/project-ecommerce.jpg",
    link: "https://www.behance.net/PUIUX",
    linkLabel: "View Case Study",
  },
  {
    title: "Nexa Pay",
    category: "Fintech · Mobile Application",
    description:
      "A consumer banking app focused on clarity and trust — redesigned onboarding reduced drop-off and support tickets significantly.",
    tags: ["Product Design", "iOS & Android", "Design System"],
    image: "/images/project-fintech.jpg",
    link: "https://www.behance.net/PUIUX",
    linkLabel: "View Case Study",
  },
  {
    title: "Orbit Analytics",
    category: "Enterprise SaaS · Dashboard",
    description:
      "A unified operations dashboard consolidating data, reporting and workflows into one clear, role-based interface.",
    tags: ["Data Visualization", "Web App", "Custom Software"],
    image: "/images/project-saas.jpg",
    link: "https://www.puiux.com",
    linkLabel: "Visit Live Project",
  },
  {
    title: "Vitality Care",
    category: "Healthtech · Mobile Application",
    description:
      "A patient engagement app connecting appointments, records and care teams in one accessible, reassuring experience.",
    tags: ["UX Research", "Mobile App", "Accessibility"],
    image: "/images/project-health.jpg",
    link: "https://www.behance.net/PUIUX",
    linkLabel: "View Case Study",
  },
];

const projectsAr: Project[] = [
  {
    title: "أورورا كوميرس",
    category: "تجارة إلكترونية · منصة ويب",
    description:
      "إعادة بناء كاملة لمتجر إلكتروني ببنية Headless مخصصة، رفعت معدل التحويل وسرعة إتمام الطلب عبر جميع الأجهزة.",
    tags: ["تجربة المستخدم", "تطوير ويب", "تجارة إلكترونية"],
    image: "/images/project-ecommerce.jpg",
    link: "https://www.behance.net/PUIUX",
    linkLabel: "عرض دراسة الحالة",
  },
  {
    title: "نيكسا باي",
    category: "تقنية مالية · تطبيق جوال",
    description:
      "تطبيق بنكي للمستخدمين يركز على الوضوح والثقة — إعادة تصميم رحلة التسجيل قلّلت التسرب وعدد طلبات الدعم بشكل ملحوظ.",
    tags: ["تصميم المنتج", "iOS و Android", "نظام تصميم"],
    image: "/images/project-fintech.jpg",
    link: "https://www.behance.net/PUIUX",
    linkLabel: "عرض دراسة الحالة",
  },
  {
    title: "أوربت أناليتكس",
    category: "برمجيات مؤسسية · لوحة تحكم",
    description:
      "لوحة تشغيل موحّدة تجمع البيانات والتقارير وسير العمل في واجهة واحدة واضحة حسب الصلاحيات.",
    tags: ["تصور البيانات", "تطبيق ويب", "برمجيات مخصصة"],
    image: "/images/project-saas.jpg",
    link: "https://www.puiux.com",
    linkLabel: "زيارة المشروع المباشر",
  },
  {
    title: "فيتاليتي كير",
    category: "تقنية صحية · تطبيق جوال",
    description:
      "تطبيق لتفاعل المرضى يربط المواعيد والسجلات وفرق الرعاية في تجربة واحدة سهلة ومطمئنة.",
    tags: ["بحث تجربة المستخدم", "تطبيق جوال", "إتاحة الوصول"],
    image: "/images/project-health.jpg",
    link: "https://www.behance.net/PUIUX",
    linkLabel: "عرض دراسة الحالة",
  },
];

const sectionIndexEn: NavItem[] = [
  { id: "cover", label: "Cover" },
  { id: "opening", label: "Opening Statement" },
  { id: "who-we-are", label: "Who We Are" },
  { id: "vmv", label: "Vision, Mission & Values" },
  { id: "glance", label: "Company at a Glance" },
  { id: "services", label: "Our Services" },
  { id: "approach", label: "Our Approach" },
  { id: "process", label: "How We Work" },
  { id: "expertise", label: "Our Expertise" },
  { id: "industries", label: "Industries We Serve" },
  { id: "projects", label: "Selected Projects" },
  { id: "case-spotlight", label: "Case Spotlight" },
  { id: "why", label: "Why PUIUX" },
  { id: "quality", label: "Quality & Collaboration" },
  { id: "closing", label: "Closing Statement" },
  { id: "contact", label: "Contact" },
];

const sectionIndexAr: NavItem[] = [
  { id: "cover", label: "الغلاف" },
  { id: "opening", label: "كلمة افتتاحية" },
  { id: "who-we-are", label: "من نحن" },
  { id: "vmv", label: "الرؤية والرسالة والقيم" },
  { id: "glance", label: "الشركة في لمحة" },
  { id: "services", label: "خدماتنا" },
  { id: "approach", label: "منهجيتنا" },
  { id: "process", label: "آلية العمل" },
  { id: "expertise", label: "خبراتنا التقنية" },
  { id: "industries", label: "القطاعات التي نخدمها" },
  { id: "projects", label: "مشاريع مختارة" },
  { id: "case-spotlight", label: "دراسة حالة" },
  { id: "why", label: "لماذا PUIUX" },
  { id: "quality", label: "الجودة والتعاون" },
  { id: "closing", label: "كلمة ختامية" },
  { id: "contact", label: "تواصل معنا" },
];

export const content: Record<Lang, ContentShape> = {
  en: {
    meta: {
      title: "PUIUX — Company Profile | Digital Product & Software Studio",
      description:
        "PUIUX is a software and digital product development studio delivering UI/UX design, web development, mobile applications and custom software.",
    },
    nav: {
      brandLine: "PUIUX",
      menuOpen: "Menu",
      menuClose: "Close",
      scrollToExplore: "Scroll to Explore",
      studioLine: "Digital Product & Software Studio",
      langSwitch: "العربية",
    },
    sectionIndex: sectionIndexEn,
    cover: {
      badge: "Company Profile — Edition 2026",
      tagline: "Software & Digital Product Studio",
      intro: "Introducing",
      title: "PUIUX",
      subtitle: "Considered software and digital products, designed and engineered with discipline.",
      tags: "UI/UX · Web · Mobile · Custom Software",
      scroll: "Scroll",
    },
    opening: {
      kicker: "Opening Statement",
      lead: "Technology moves fast. Good products are still built slowly — through understanding, iteration and care.",
      headline: "We design and build software that",
      headlineHighlight: "people actually want to use",
      headlineEnd: "— and businesses rely on.",
      paragraph1:
        "PUIUX exists at the intersection of design and engineering — turning ambiguous problems into clear, well-crafted digital products.",
      paragraph2:
        "Every engagement starts with the business, not the interface. The result is software that looks considered because it is considered.",
    },
    whoWeAre: {
      kicker: "Who We Are",
      heading: "A studio built for software that matters.",
      paragraph1:
        "PUIUX is a software and digital product development studio. We partner with founders, product teams and enterprises to design and build web platforms, mobile applications and custom software.",
      paragraph2:
        "Our work sits across three disciplines — product design, engineering and strategy — brought together under one roof so nothing gets lost between teams.",
      statLabel1: "Founded on",
      statValue1: "Craft",
      statLabel2: "Working as",
      statValue2: "One Team",
      statLabel3: "Focused on",
      statValue3: "Outcomes",
    },
    vmv: {
      kicker: "Vision, Mission & Values",
      heading: "What guides every decision we make.",
      visionTitle: "Vision",
      visionCopy: "To be the studio trusted to turn ambitious digital ideas into dependable, lasting products.",
      missionTitle: "Mission",
      missionCopy:
        "We design and engineer software with the discipline of a product company and the focus of a dedicated partner.",
      valuesTitle: "Our Values",
      values: [
        { no: "01", title: "Clarity", copy: "We simplify complex problems into products that are easy to understand, build, and use." },
        { no: "02", title: "Craft", copy: "Every interface, interaction and line of code is treated as a deliberate design decision." },
        { no: "03", title: "Partnership", copy: "We work alongside our clients as an embedded team, not a detached vendor." },
        { no: "04", title: "Rigor", copy: "Decisions are grounded in research, testing and technical discipline — not guesswork." },
      ],
    },
    glance: {
      kicker: "Company at a Glance",
      heading: "Measured by the work, not the slogans.",
      stats: [
        { value: "60+", label: "Products Shipped" },
        { value: "35+", label: "Partner Brands" },
        { value: "8", label: "Industries Served" },
        { value: "24/7", label: "Support Availability" },
      ],
    },
    services: {
      kicker: "Our Services",
      heading: "Full-stack capability, end to end.",
      subheading: "From early product strategy to long-term support, every service is delivered under one roof.",
      items: [
        { no: "01", title: "UI/UX & Product Design", copy: "Research-driven product design — from information architecture and wireframes to high-fidelity interfaces and design systems.", tags: ["User Research", "Wireframing", "Design Systems", "Prototyping"] },
        { no: "02", title: "Web Development", copy: "Fast, scalable, and maintainable web applications built with modern frameworks and clean architecture.", tags: ["Web Apps", "Marketing Sites", "CMS", "APIs"] },
        { no: "03", title: "Mobile Applications", copy: "Native and cross-platform mobile apps engineered for performance, stability and a refined user experience.", tags: ["iOS", "Android", "Cross-Platform", "App Store Delivery"] },
        { no: "04", title: "Custom Software", copy: "Bespoke platforms, internal tools and automation systems designed around real operational workflows.", tags: ["SaaS Platforms", "Dashboards", "Integrations", "Automation"] },
        { no: "05", title: "Product Strategy", copy: "Shaping the right product before building it — scoping, roadmapping, and validating direction with stakeholders.", tags: ["Discovery", "Roadmapping", "MVP Scoping"] },
        { no: "06", title: "Support & Evolution", copy: "Ongoing maintenance, iteration and performance monitoring once a product is live in the market.", tags: ["Maintenance", "QA", "Optimization"] },
      ],
    },
    approach: {
      kicker: "Our Approach",
      heading: "Design and engineering, as one discipline.",
      paragraph:
        "We don't hand projects between disconnected teams. Designers and engineers work side by side from day one, so decisions made on screen hold up in production.",
      points: [
        { title: "Evidence over opinion", copy: "Every major decision is backed by research, data or direct user feedback." },
        { title: "Systems, not screens", copy: "We build reusable design and code systems that scale with the product." },
        { title: "Visible progress", copy: "Clients see working software early and often, not just slide decks." },
      ],
    },
    process: {
      kicker: "How We Work",
      heading: "A disciplined path from idea to launch.",
      steps: [
        { no: "01", title: "Discovery", copy: "Understanding business goals, users and constraints before any design or engineering begins." },
        { no: "02", title: "Planning", copy: "Defining scope, architecture and success metrics into a clear, shared roadmap." },
        { no: "03", title: "UX / UI Design", copy: "Structuring flows and crafting interfaces validated through iteration, not assumption." },
        { no: "04", title: "Development", copy: "Building on clean, scalable foundations with regular checkpoints and visible progress." },
        { no: "05", title: "Testing", copy: "Rigorous functional, usability and performance testing before anything reaches real users." },
        { no: "06", title: "Launch", copy: "Coordinated release across platforms with monitoring in place from day one." },
        { no: "07", title: "Support", copy: "Continued iteration, maintenance and optimization as the product and its users evolve." },
      ],
    },
    expertise: {
      kicker: "Our Expertise",
      heading: "Tools and technologies we trust.",
      groups: [
        { group: "Design", items: ["Figma", "Design Systems", "Motion & Micro-interaction", "Accessibility (WCAG)"] },
        { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { group: "Mobile", items: ["React Native", "Swift", "Kotlin", "Flutter"] },
        { group: "Backend & Cloud", items: ["Node.js", "REST & GraphQL APIs", "Cloud Infrastructure", "CI / CD"] },
      ],
    },
    industries: {
      kicker: "Industries We Serve",
      heading: "Context-aware product thinking, sector by sector.",
      items: ["Fintech & Payments", "E-commerce & Retail", "Healthtech", "Logistics & Mobility", "Education", "Enterprise SaaS", "Real Estate & PropTech", "Hospitality"],
    },
    projects: {
      kicker: "Selected Projects",
      heading: "A closer look at the work.",
      subheading: "A sample of products designed and engineered end to end — explore each case or visit the live product.",
      cta: "See more on Behance",
      items: projectsEn,
    },
    caseSpotlight: {
      kicker: "Case Spotlight",
      heading: "From a fragmented workflow to one unified platform.",
      paragraph:
        "An operations team relying on spreadsheets and disconnected tools needed a single source of truth for their daily decisions.",
      challengeTitle: "Challenge",
      challengeCopy: "Critical data lived in five different places, slowing decisions and creating costly errors.",
      solutionTitle: "Solution",
      solutionCopy: "A unified, role-based dashboard consolidating metrics, workflows and reporting into one clear interface.",
      resultTitle: "Result",
      resultCopy: "Faster decisions, fewer errors, and a platform built to scale with the business.",
    },
    why: {
      kicker: "Why PUIUX",
      heading: "What sets the work apart.",
      points: [
        { no: "01", title: "Design-Led Engineering", copy: "Design and development are treated as one discipline, not separate stages handed off between teams." },
        { no: "02", title: "Senior Involvement", copy: "Experienced designers and engineers stay close to the work from kickoff through launch." },
        { no: "03", title: "Transparent Process", copy: "Clear scope, visible progress and honest communication at every stage of the engagement." },
        { no: "04", title: "Built to Scale", copy: "Architecture and interfaces designed to grow with the business, not just satisfy a launch date." },
      ],
    },
    quality: {
      kicker: "Quality & Collaboration",
      heading: "How we keep every engagement on track.",
      points: [
        { title: "Communication", copy: "Structured check-ins, shared documentation and a single point of contact throughout the engagement." },
        { title: "Quality Assurance", copy: "Dedicated testing cycles across devices, browsers and edge cases before every release." },
        { title: "Delivery Discipline", copy: "Milestone-based delivery with clear scope, timelines and visible progress tracking." },
        { title: "Ongoing Support", copy: "Post-launch monitoring, iteration and support plans tailored to each product's needs." },
      ],
    },
    closing: {
      kicker: "Closing Statement",
      heading: "Great products are built by people who care.",
      paragraph:
        "PUIUX brings design, engineering and strategy together to build software that performs today and holds up tomorrow. If you have an idea worth building well, let's talk.",
      cta: "Start a Conversation",
    },
    contact: {
      kicker: "Contact Us",
      heading: "Let's build what's next.",
      subheading: "Reach out to discuss a product idea, an existing platform that needs work, or a long-term engineering partnership.",
      emailLabel: "Email",
      email: "Welcome@puiux.com",
      phoneLabel: "Phone",
      phones: ["0544420258", "0966115101667"],
      websiteLabel: "Website",
      website: "Puiux.com",
      socialLabel: "Follow Us",
      social: [
        { name: "Facebook", handle: "PUIUX", url: "https://www.facebook.com/PUIUX" },
        { name: "X (Twitter)", handle: "@PUIUX_Co", url: "https://twitter.com/PUIUX_Co/" },
        { name: "Instagram", handle: "@puiux_co", url: "https://www.instagram.com/puiux_co/" },
        { name: "Behance", handle: "PUIUX", url: "https://www.behance.net/PUIUX" },
      ],
      bankTitle: "Bank Account Details",
      bankSubtitle: "For invoicing and wire transfers",
      bankFields: [
        { label: "Company Name", value: "Capital Tree Company" },
        { label: "Bank", value: "Bank AlJazira" },
        { label: "Account Number", value: "085782223613001" },
        { label: "IBAN", value: "SA2660100085782223613001" },
        { label: "SWIFT Code", value: "BJAZSAJE" },
      ],
      formNote: "Prefer email? Write to us directly and we'll respond within one business day.",
      footerLine: "Software & Digital Product Development Studio",
      rights: "All rights reserved.",
    },
  },
  ar: {
    meta: {
      title: "PUIUX — الملف التعريفي للشركة | استوديو المنتجات الرقمية والبرمجيات",
      description:
        "PUIUX استوديو متخصص في تطوير البرمجيات والمنتجات الرقمية، يقدم تصميم واجهات وتجربة المستخدم، تطوير الويب، تطبيقات الجوال والبرمجيات المخصصة.",
    },
    nav: {
      brandLine: "PUIUX",
      menuOpen: "القائمة",
      menuClose: "إغلاق",
      scrollToExplore: "مرر للاستكشاف",
      studioLine: "استوديو المنتجات الرقمية والبرمجيات",
      langSwitch: "English",
    },
    sectionIndex: sectionIndexAr,
    cover: {
      badge: "الملف التعريفي للشركة — إصدار 2026",
      tagline: "استوديو البرمجيات والمنتجات الرقمية",
      intro: "نقدم لكم",
      title: "PUIUX",
      subtitle: "منتجات وبرمجيات رقمية مدروسة، تُصمَّم وتُهندَس بانضباط واحترافية.",
      tags: "تجربة المستخدم · الويب · الجوال · برمجيات مخصصة",
      scroll: "مرر للأسفل",
    },
    opening: {
      kicker: "كلمة افتتاحية",
      lead: "التقنية تتحرك بسرعة، لكن المنتجات الجيدة ما زالت تُبنى ببطء — من خلال الفهم العميق والتكرار والعناية.",
      headline: "نصمم ونبني برمجيات",
      headlineHighlight: "يحب الناس استخدامها فعلًا",
      headlineEnd: "— وتعتمد عليها الشركات.",
      paragraph1:
        "تقف PUIUX عند تقاطع التصميم والهندسة — لتحوّل المشكلات الغامضة إلى منتجات رقمية واضحة ومُتقنة الصنع.",
      paragraph2:
        "كل مشروع يبدأ من فهم العمل نفسه، لا من الواجهة. والنتيجة برمجيات تبدو مدروسة لأنها فعلًا كذلك.",
    },
    whoWeAre: {
      kicker: "من نحن",
      heading: "استوديو بُني من أجل برمجيات لها قيمة حقيقية.",
      paragraph1:
        "PUIUX استوديو لتطوير البرمجيات والمنتجات الرقمية. نتشارك مع المؤسسين وفرق المنتج والشركات لتصميم وبناء منصات ويب وتطبيقات جوال وبرمجيات مخصصة.",
      paragraph2:
        "يجمع عملنا بين ثلاثة تخصصات — تصميم المنتج، الهندسة، والاستراتيجية — تحت سقف واحد حتى لا يضيع شيء بين الفرق.",
      statLabel1: "مبنيون على",
      statValue1: "الإتقان",
      statLabel2: "نعمل",
      statValue2: "كفريق واحد",
      statLabel3: "نركّز على",
      statValue3: "النتائج",
    },
    vmv: {
      kicker: "الرؤية والرسالة والقيم",
      heading: "ما يوجّه كل قرار نتخذه.",
      visionTitle: "رؤيتنا",
      visionCopy: "أن نكون الاستوديو الموثوق لتحويل الأفكار الرقمية الطموحة إلى منتجات موثوقة ودائمة.",
      missionTitle: "رسالتنا",
      missionCopy:
        "نصمم ونهندس البرمجيات بانضباط شركة منتجات، وبتركيز شريك مخلص لعملائه.",
      valuesTitle: "قيمنا",
      values: [
        { no: "01", title: "الوضوح", copy: "نبسّط المشكلات المعقدة إلى منتجات سهلة الفهم والبناء والاستخدام." },
        { no: "02", title: "الإتقان", copy: "كل واجهة وتفاعل وسطر برمجي يُعامل كقرار تصميمي مدروس." },
        { no: "03", title: "الشراكة", copy: "نعمل مع عملائنا كفريق مندمج، لا كمورّد منفصل عنهم." },
        { no: "04", title: "الدقة", copy: "قراراتنا مبنية على البحث والاختبار والانضباط التقني — لا على التخمين." },
      ],
    },
    glance: {
      kicker: "الشركة في لمحة",
      heading: "نُقاس بالعمل، لا بالشعارات.",
      stats: [
        { value: "+60", label: "منتج تم إطلاقه" },
        { value: "+35", label: "علامة تجارية شريكة" },
        { value: "8", label: "قطاعات نخدمها" },
        { value: "24/7", label: "دعم متواصل" },
      ],
    },
    services: {
      kicker: "خدماتنا",
      heading: "قدرة متكاملة من البداية إلى النهاية.",
      subheading: "من استراتيجية المنتج المبكرة إلى الدعم طويل الأمد، كل خدمة تُقدَّم تحت سقف واحد.",
      items: [
        { no: "01", title: "تصميم واجهات وتجربة المستخدم", copy: "تصميم منتج قائم على البحث — من بنية المعلومات والمخططات الأولية إلى الواجهات عالية الدقة وأنظمة التصميم.", tags: ["بحث المستخدم", "النماذج الأولية", "أنظمة التصميم", "البروتوتايب"] },
        { no: "02", title: "تطوير الويب", copy: "تطبيقات ويب سريعة وقابلة للتوسع وسهلة الصيانة، مبنية بأطر عمل حديثة وبنية برمجية نظيفة.", tags: ["تطبيقات ويب", "مواقع تسويقية", "أنظمة إدارة المحتوى", "واجهات برمجية"] },
        { no: "03", title: "تطبيقات الجوال", copy: "تطبيقات جوال أصلية ومتعددة المنصات، مصممة هندسيًا للأداء والثبات وتجربة استخدام متقنة.", tags: ["iOS", "Android", "متعدد المنصات", "النشر في المتاجر"] },
        { no: "04", title: "برمجيات مخصصة", copy: "منصات مخصصة وأدوات داخلية وأنظمة أتمتة مصممة حول سير العمل التشغيلي الفعلي.", tags: ["منصات SaaS", "لوحات تحكم", "تكاملات", "أتمتة"] },
        { no: "05", title: "استراتيجية المنتج", copy: "تحديد المنتج الصحيح قبل بنائه — عبر تحديد النطاق، ورسم خارطة الطريق، والتحقق من الاتجاه مع أصحاب المصلحة.", tags: ["الاكتشاف", "خارطة الطريق", "تحديد نطاق MVP"] },
        { no: "06", title: "الدعم والتطوير المستمر", copy: "صيانة مستمرة وتحسين ومراقبة أداء بعد إطلاق المنتج في السوق.", tags: ["الصيانة", "ضمان الجودة", "التحسين"] },
      ],
    },
    approach: {
      kicker: "منهجيتنا",
      heading: "التصميم والهندسة كتخصص واحد.",
      paragraph:
        "لا نُسلّم المشاريع بين فرق منفصلة. يعمل المصممون والمهندسون جنبًا إلى جنب منذ اليوم الأول، فتبقى القرارات المتخذة على الشاشة صحيحة في الإنتاج الفعلي.",
      points: [
        { title: "الدليل قبل الرأي", copy: "كل قرار مهم مدعوم بالبحث أو البيانات أو ملاحظات المستخدمين المباشرة." },
        { title: "أنظمة لا شاشات منفردة", copy: "نبني أنظمة تصميم وبرمجة قابلة لإعادة الاستخدام تنمو مع المنتج." },
        { title: "تقدّم مرئي", copy: "يرى عملاؤنا برمجيات تعمل فعليًا بشكل مبكر ومتكرر، لا مجرد عروض تقديمية." },
      ],
    },
    process: {
      kicker: "آلية العمل",
      heading: "مسار منضبط من الفكرة إلى الإطلاق.",
      steps: [
        { no: "01", title: "الاكتشاف", copy: "فهم أهداف العمل والمستخدمين والقيود قبل البدء بأي تصميم أو هندسة." },
        { no: "02", title: "التخطيط", copy: "تحديد النطاق والبنية ومقاييس النجاح ضمن خارطة طريق واضحة ومشتركة." },
        { no: "03", title: "تصميم UX / UI", copy: "هيكلة الرحلات وصياغة الواجهات، والتحقق منها عبر التكرار لا الافتراض." },
        { no: "04", title: "التطوير", copy: "البناء على أسس نظيفة وقابلة للتوسع مع نقاط تحقق منتظمة وتقدم واضح." },
        { no: "05", title: "الاختبار", copy: "اختبار دقيق للوظائف وتجربة الاستخدام والأداء قبل وصول أي شيء للمستخدمين الفعليين." },
        { no: "06", title: "الإطلاق", copy: "إطلاق منسّق عبر جميع المنصات مع مراقبة فورية منذ اليوم الأول." },
        { no: "07", title: "الدعم", copy: "تطوير وصيانة وتحسين مستمر مع تطور المنتج ومستخدميه." },
      ],
    },
    expertise: {
      kicker: "خبراتنا التقنية",
      heading: "الأدوات والتقنيات التي نثق بها.",
      groups: [
        { group: "التصميم", items: ["Figma", "أنظمة التصميم", "الحركة والتفاعلات الدقيقة", "إتاحة الوصول (WCAG)"] },
        { group: "الواجهة الأمامية", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { group: "تطبيقات الجوال", items: ["React Native", "Swift", "Kotlin", "Flutter"] },
        { group: "الخلفية والحوسبة السحابية", items: ["Node.js", "واجهات REST و GraphQL", "البنية السحابية", "CI / CD"] },
      ],
    },
    industries: {
      kicker: "القطاعات التي نخدمها",
      heading: "تفكير منتج واعٍ بالسياق، قطاعًا بقطاع.",
      items: ["التقنية المالية والمدفوعات", "التجارة الإلكترونية والتجزئة", "التقنية الصحية", "اللوجستيات والتنقل", "التعليم", "برمجيات المؤسسات SaaS", "العقارات والتقنية العقارية", "الضيافة"],
    },
    projects: {
      kicker: "مشاريع مختارة",
      heading: "نظرة أقرب على أعمالنا.",
      subheading: "نماذج من منتجات صُممت وهُندست من الألف إلى الياء — استعرض كل دراسة حالة أو زر المنتج المباشر.",
      cta: "المزيد على Behance",
      items: projectsAr,
    },
    caseSpotlight: {
      kicker: "دراسة حالة",
      heading: "من سير عمل مُجزّأ إلى منصة واحدة موحدة.",
      paragraph:
        "فريق تشغيلي كان يعتمد على جداول بيانات وأدوات منفصلة، احتاج إلى مصدر واحد موثوق لقراراته اليومية.",
      challengeTitle: "التحدي",
      challengeCopy: "كانت البيانات الحساسة موزعة على خمسة أماكن مختلفة، ما أبطأ القرارات وسبب أخطاء مكلفة.",
      solutionTitle: "الحل",
      solutionCopy: "لوحة تحكم موحدة حسب الصلاحيات، تجمع المقاييس وسير العمل والتقارير في واجهة واحدة واضحة.",
      resultTitle: "النتيجة",
      resultCopy: "قرارات أسرع، أخطاء أقل، ومنصة مبنية لتنمو مع العمل.",
    },
    why: {
      kicker: "لماذا PUIUX",
      heading: "ما يميّز عملنا.",
      points: [
        { no: "01", title: "هندسة بقيادة التصميم", copy: "التصميم والتطوير يُعاملان كتخصص واحد، لا كمراحل منفصلة تُسلَّم بين فرق مختلفة." },
        { no: "02", title: "إشراف كبار الخبراء", copy: "مصممون ومهندسون ذوو خبرة يبقون قريبين من العمل من الانطلاقة وحتى الإطلاق." },
        { no: "03", title: "عملية شفافة", copy: "نطاق واضح، تقدّم مرئي، وتواصل صادق في كل مرحلة من مراحل التعاون." },
        { no: "04", title: "مبني للنمو", copy: "بنية وواجهات مصممة لتنمو مع العمل، لا لمجرد تحقيق تاريخ الإطلاق فقط." },
      ],
    },
    quality: {
      kicker: "الجودة والتعاون",
      heading: "كيف نحافظ على مسار كل مشروع.",
      points: [
        { title: "التواصل", copy: "اجتماعات متابعة منظمة، توثيق مشترك، ونقطة اتصال واحدة طوال فترة المشروع." },
        { title: "ضمان الجودة", copy: "دورات اختبار مخصصة عبر الأجهزة والمتصفحات والحالات الاستثنائية قبل كل إصدار." },
        { title: "انضباط التسليم", copy: "تسليم قائم على مراحل واضحة النطاق والجدول الزمني مع تتبع تقدم مرئي." },
        { title: "دعم مستمر", copy: "مراقبة وتحسين ودعم بعد الإطلاق مصمم خصيصًا لاحتياجات كل منتج." },
      ],
    },
    closing: {
      kicker: "كلمة ختامية",
      heading: "المنتجات العظيمة يصنعها أشخاص يهتمون فعلًا.",
      paragraph:
        "تجمع PUIUX بين التصميم والهندسة والاستراتيجية لبناء برمجيات تعمل اليوم وتصمد غدًا. إن كانت لديك فكرة تستحق أن تُبنى بإتقان، فلنتحدث.",
      cta: "ابدأ محادثة معنا",
    },
    contact: {
      kicker: "تواصل معنا",
      heading: "فلنبنِ ما هو قادم.",
      subheading: "تواصل معنا لمناقشة فكرة منتج جديدة، أو منصة قائمة تحتاج إلى تطوير، أو شراكة هندسية طويلة الأمد.",
      emailLabel: "البريد الإلكتروني",
      email: "Welcome@puiux.com",
      phoneLabel: "الجوال",
      phones: ["0544420258", "0966115101667"],
      websiteLabel: "الموقع الإلكتروني",
      website: "Puiux.com",
      socialLabel: "تابعنا",
      social: [
        { name: "فيسبوك", handle: "PUIUX", url: "https://www.facebook.com/PUIUX" },
        { name: "إكس (تويتر)", handle: "@PUIUX_Co", url: "https://twitter.com/PUIUX_Co/" },
        { name: "إنستغرام", handle: "@puiux_co", url: "https://www.instagram.com/puiux_co/" },
        { name: "بيهانس", handle: "PUIUX", url: "https://www.behance.net/PUIUX" },
      ],
      bankTitle: "بيانات الحساب البنكي",
      bankSubtitle: "للفوترة والتحويلات البنكية",
      bankFields: [
        { label: "اسم الشركة", value: "شركة كابيتال تري" },
        { label: "البنك", value: "بنك الجزيرة" },
        { label: "رقم الحساب", value: "085782223613001" },
        { label: "رقم الآيبان (IBAN)", value: "SA2660100085782223613001" },
        { label: "رمز السويفت (SWIFT)", value: "BJAZSAJE" },
      ],
      formNote: "تفضّل التواصل عبر البريد؟ راسلنا مباشرة وسنرد خلال يوم عمل واحد.",
      footerLine: "استوديو تطوير البرمجيات والمنتجات الرقمية",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
