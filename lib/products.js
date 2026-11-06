// Single source for product data — used by the homepage cards and the
// /products/[slug] detail pages.
export const products = [
  {
    slug: "pc-granules-manufacturer",
    code: "PC",
    name: "Polycarbonate",
    seo: {
      title: "PC Granules Manufacturer in Delhi | Shri Ganesh Polymer",
      description:
        "Shri Ganesh Polymer is a Delhi-based PC granules and PC dana manufacturer with 15+ years’ experience. Polycarbonate granules in FR, general & extrusion grades.",
      keywords: ["PC Granules Manufacturer", "Polycarbonate Granules", "PC Dana Manufacturer"],
    },
    // long-form page copy — rendered by components/ProductContent.jsx; `faqs` also feeds the FAQPage schema
    content: {
      h1: "Polycarbonate (PC) Granules Manufacturer in Delhi",
      intro:
        "Shri Ganesh Polymer is an ISO 9001 & 14001 certified Polycarbonate (PC) Granules manufacturer based in Delhi, with over 15 years of experience in engineering polymers. We also supply PC dana, the name most Indian buyers use for polycarbonate granules, to the electrical, lighting and automotive industries. Our focus is simple: consistent material, so your moulding line runs smoothly every time.",
      what: {
        title: "What Are Polycarbonate Granules?",
        text: "Polycarbonate is a tough, transparent and amorphous engineering thermoplastic. It keeps its strength and colour stability over time, even in demanding conditions. In granule form, it is injection moulded or extruded into finished parts. Manufacturers prefer PC because it combines impact strength, heat stability and excellent electrical properties with design flexibility and a premium finish.",
      },
      range: {
        title: "Our PC Granules Range",
        items: [
          { name: "PC Granules (General Purpose)", text: "For everyday moulding of lighting, electrical and consumer products where strength and clarity matter." },
          { name: "PC FR Grade", text: "Flame-resistant polycarbonate for parts that must meet safety requirements, such as switches, sockets, chargers and meter boxes." },
          { name: "PC Extrusion Grade", text: "Suited to sheets and profiles where smooth melt flow and stable processing are needed." },
        ],
        note: "We also supply natural and coloured compounds. Share your colour and grade requirement, and we will recommend the right compound.",
      },
      properties: {
        title: "Key Properties",
        text: "Polycarbonate balances toughness, clarity and electrical safety in one material, which is why lighting and electrical manufacturers rely on it.",
        items: [
          "High impact strength",
          "Heat stability",
          "Flame resistance (FR grade)",
          "Dimensional accuracy",
          "Excellent transparency",
          "Reliable electrical characteristics",
        ],
      },
      uses: {
        title: "Where Our Polycarbonate Granules Are Used",
        text: "As a PC dana manufacturer, we supply granules for LED panels and downlights, LED batten housings, modular switches and sockets, mobile chargers, CCTV housings, electricity meter boxes and luggage shells. If your part is not listed, tell us what you mould and we will suggest a suitable grade.",
      },
      choose: {
        title: "How to Choose the Right PC Grade",
        lead: "The right polycarbonate grade depends on how your product will be used.",
        items: [
          { name: "PC FR grade", text: "Choose when the part must resist flame, such as switches, sockets, chargers and meter boxes." },
          { name: "General purpose PC", text: "Choose for lighting housings, diffusers and consumer products where impact strength and clarity matter." },
          { name: "Extrusion grade", text: "Choose for sheets and profiles." },
        ],
        note: "If you are unsure, tell us the application, colour and expected quantity, and our team will recommend a compound that suits your moulding process.",
      },
      why: {
        title: "Why Choose Shri Ganesh Polymer as Your PC Granules Manufacturer?",
        items: [
          { name: "15+ years of experience", text: "Over 15 years of manufacturing and supplying engineering polymer granules." },
          { name: "Certified quality", text: "ISO 9001:2015 and ISO 14001:2015 certified, MSME registered and RoHS compliant." },
          { name: "In-house compounding and testing", text: "Better control over grade, colour and consistency." },
          { name: "Application-focused guidance", text: "We match the grade to your product, not the other way round." },
          { name: "Delhi-based supply", text: "Located in Mangolpuri Industrial Area, Delhi, serving customers across India." },
          { name: "Complete engineering polymer range", text: "PC, ABS and PBT under one roof." },
        ],
      },
      quote: {
        title: "Get a Quote",
        text: "Looking for a dependable PC granules manufacturer in Delhi? Share your grade, colour and quantity, and our team will respond with the right compound and a quotation.",
        note: "If you are unsure about the grade, describe your product and the team will suggest one.",
      },
      faqs: [
        {
          q: "Who is the best PC granules manufacturer in Delhi?",
          a: "The best PC granules manufacturer is one with certified quality, consistent grades and reliable supply. Shri Ganesh Polymer, based in Mangolpuri Industrial Area, Delhi, is ISO 9001 and ISO 14001 certified and has over 15 years of experience. It supplies polycarbonate granules in general purpose, flame-retardant (FR) and extrusion grades, with in-house compounding and quality testing.",
        },
        {
          q: "What are polycarbonate granules?",
          a: "Polycarbonate granules are small pellets of a tough, transparent, amorphous engineering thermoplastic. Manufacturers melt them and shape them by injection moulding or extrusion into parts such as LED housings, switches, chargers and meter boxes. They are valued for impact strength, heat stability and electrical performance.",
        },
        {
          q: "What is PC dana?",
          a: "PC dana is the common Indian trade term for polycarbonate (PC) granules. “Dana” means granule in Hindi, so PC dana and PC granules refer to the same material. Shri Ganesh Polymer is a PC dana manufacturer in Delhi, supplying it for electrical, lighting and automotive applications.",
        },
        {
          q: "Which grades of PC granules does Shri Ganesh Polymer offer?",
          a: "As a PC granules manufacturer, Shri Ganesh Polymer offers three main grades: PC granules for general moulding, PC FR grade for flame-resistant parts, and PC extrusion grade for sheets and profiles. Natural and coloured compounds can be discussed based on your requirement.",
        },
        {
          q: "What are PC granules used for?",
          a: "PC granules are used to make LED panels and downlights, LED batten housings, modular switches and sockets, chargers, CCTV housings, electricity meter boxes and luggage shells. Their strength, transparency and electrical properties make them common in lighting, electrical and consumer products.",
        },
        {
          q: "When should I choose PC FR grade instead of standard PC?",
          a: "Choose PC FR grade when the finished part must resist flame, which is common in electrical products like switches, sockets, chargers and meter boxes. Standard PC suits applications where flame resistance is not required. Check the safety standard that applies to your product before selecting a grade.",
        },
        {
          q: "What is the difference between PC and ABS granules?",
          a: "PC has higher impact strength, better heat resistance and transparency, while ABS is easier to process and generally more economical for high-volume moulding. Choose PC when strength, clarity or heat resistance matters, and ABS when cost and ease of processing matter more. Shri Ganesh Polymer supplies both PC and ABS, so you can compare options for your part.",
        },
        {
          q: "Do polycarbonate granules need drying before moulding?",
          a: "Yes. PC absorbs moisture, and moulding damp granules can cause defects such as bubbles, silver streaks and reduced strength. Dry the granules before processing, following the temperature and time given in the grade’s technical data sheet.",
        },
        {
          q: "What certifications does Shri Ganesh Polymer hold?",
          a: "Shri Ganesh Polymer is ISO 9001:2015 and ISO 14001:2015 certified, MSME registered and RoHS compliant. It manufactures PC, ABS and PBT engineering polymer granules, with in-house compounding and quality testing.",
        },
        {
          q: "How can I get a quote for PC granules from Shri Ganesh Polymer?",
          a: "Send your required grade, colour and quantity to Shri Ganesh Polymer by calling +91 98180 58610, emailing info@shriganeshpolymer.in, using the Get a Quote form, or messaging on WhatsApp. If you are unsure about the grade, describe your product and the team will suggest one.",
        },
      ],
    },
    image: "/pc-granules.webp",
    tag: "Electrical & Automotive",
    accent: "#1e5eff",
    desc: "Tough, transparent and amorphous granules that hold their strength and colour stability over time.",
    long: [
      "High-performance thermoplastic granules offering cost reduction, design flexibility and enhanced aesthetics. Tough, transparent and amorphous, they hold their strength and colour stability over time — even under unfavourable conditions.",
      "Their high impact strength, heat stability and excellent electrical characteristics make them a preferred choice for lighting, electrical and consumer products.",
    ],
    features: ["High impact strength", "Heat stability", "Flame resistance", "Dimensional accuracy", "Excellent transparency"],
    grades: ["PC Granules", "PC FR Grade", "PC Extrusion Grade"],
    apps: "LED panels, switches & sockets, chargers, CCTV housings, meter boxes",
    applications: [
      { img: "/applications/pc/led.png", label: "LED panel & downlights" },
      { img: "/applications/pc/led-light.png", label: "LED batten housings" },
      { img: "/applications/pc/switch.png", label: "Modular switches & sockets" },
      { img: "/applications/pc/cctv.png", label: "Chargers & CCTV housings" },
      { img: "/applications/pc/meter.png", label: "Meter boxes" },
      { img: "/applications/pc/trolly.png", label: "Luggage shells" },
    ],
  },
  {
    slug: "abs",
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
    image: "/abs-granules.webp",
    tag: "Automotive & Electrical",
    accent: "#e11d48",
    desc: "A strong, easy-to-process engineering plastic made for high-volume injection moulding.",
    long: [
      "High-quality thermoplastic engineering plastic widely used for injection moulding. Excellent strength, impact and chemical resistance, temperature stability, electrical insulation and easy paintability.",
      "Balanced toughness and processability make ABS cost-effective for high-volume moulding of electrical and consumer parts.",
    ],
    features: ["Impact & chemical resistance", "Electrical insulation", "Temperature stability", "Easy paintability"],
    grades: ["ABS Granules"],
    apps: "Electrical plugs, gang boxes, keyboards, set-top boxes, junction boxes",
    applications: [
      { img: "/applications/abs/plugs.png", label: "2-pin electrical plug" },
      { img: "/applications/abs/gangbox.png", label: "Modular electrical gang boxes" },
      { img: "/applications/abs/key-board.png", label: "Keyboard" },
      { img: "/applications/abs/setup-box.png", label: "Set-top box" },
      { img: "/applications/abs/junctionbox.png", label: "ABS junction box" },
    ],
  },
  {
    slug: "pbt",
    code: "PBT",
    name: "Polybutylene Terephthalate",
    image: "/pbt-granules.webp",
    tag: "Electrical & Industrial",
    accent: "#4caf27",
    desc: "Semi-crystalline polyester compounded with glass fibre and additives for strength and stiffness.",
    long: [
      "Semi-crystalline engineered thermoplastic from the polyester family, with high molecular weight. PBT granules are strong, stiff and engineerable — suitable for demanding industrial applications, in shades ranging from white to light colours.",
      "Compounded with PBT resins, fibreglass fillings and additives that enhance strength and functionality, they are widely used in automotive, electrical and electronic components.",
    ],
    features: ["High stiffness", "Glass-filled grades", "Electrical performance", "Long-term durability"],
    grades: ["PBT Glass Filled"],
    apps: "Terminal blocks, MCB housings, LED bulb bodies, lamp holders, B22 caps",
    applications: [
      { img: "/applications/pbt/terminal.png", label: "Terminal blocks" },
      { img: "/applications/pbt/bulb.png", label: "GU10 LED bulbs" },
      { img: "/applications/pbt/bulb-holder.png", label: "B22 bulb caps" },
      { img: "/applications/pbt/led-bulb.png", label: "LED bulb bodies" },
      { img: "/applications/pbt/MCB.png", label: "MCB housings" },
      { img: "/applications/pbt/connectors.png", label: "Terminal connectors" },
      { img: "/applications/pbt/lamp.png", label: "Lamp holders" },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
