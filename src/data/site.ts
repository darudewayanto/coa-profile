// Single source of truth for contact details, navigation and shared content.
// Content is drawn from "COA Slide Deck - Profile & Program 140626" and
// "COA Micro Credential Deck 290126". Edit here; every page reads from this file.

export const site = {
  name: "Center of Agility",
  short: "COA",
  tagline: "Empowering Agile Young Leaders",
  description:
    "Center of Agility (COA) on Campus, gerakan membangun agility, resiliensi, dan agile mindset generasi muda Indonesia langsung dari kampus. Micro-credential terakreditasi internasional oleh ICF & MyBrain, dipersembahkan oleh HADE.",
  url: "https://coa.belajaragile.com",
  // Nomor WhatsApp COA sama dengan HADE (konfirmasi Daru, 17 Okt 2026). TODO: email khusus COA.
  email: "salam@hijrahcoach.co.id",
  phoneDisplay: "+62 811 1881 877",
  whatsapp: "628111881877",
  instagram: "https://www.instagram.com/centerofagility/",
  instagramHandle: "@centerofagility",
  instagramCoach: "https://www.instagram.com/agilecoach.id/",
  hadeUrl: "https://hade.belajaragile.com",
  // COA community on the belajaragile.com platform (sign up / log in).
  communityUrl: "https://belajaragile.com/coa",
  communityLoginUrl: "https://belajaragile.com/masuk?komunitas=center-of-agility",
};

const waMessages = {
  general: "Halo Center of Agility, saya ingin tahu lebih lanjut tentang program COA.",
  student: "Halo Center of Agility, saya mahasiswa dan ingin ikut Micro-Credential COA. Mohon info batch berikutnya.",
  campus: "Halo Center of Agility, kami dari kampus dan tertarik membangun Center of Agility on Campus. Mohon jadwal diskusi.",
  corporate: "Halo Center of Agility, kami dari perusahaan/lembaga dan tertarik menjadi partner ekosistem COA.",
  community: "Halo Center of Agility, kami dari komunitas dan ingin berkolaborasi dalam program COA.",
  certification: "Halo Center of Agility, saya tertarik dengan Agile Coaching Certification untuk dosen/profesional.",
} as const;

export type WaTopic = keyof typeof waMessages;

export const wa = (topic: WaTopic = "general") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessages[topic])}`;

export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/program", label: "Program" },
  { href: "/micro-credential", label: "Micro-Credential" },
  { href: "/belajar-agile", label: "Belajar Agile" },
  { href: "/kemitraan", label: "Kemitraan" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export const stats = [
  { value: "12", label: "Kampus\nPartner" },
  { value: "5", label: "Level\nMicro-Credential" },
  { value: "200.000+", label: "Total\nStudent Body" },
];

export const youthFacts = {
  quote:
    "Satu dari tiga remaja Indonesia memiliki masalah kesehatan mental, sementara satu dari dua puluh remaja Indonesia memiliki gangguan mental dalam 12 bulan terakhir.",
  source: "Indonesia National Adolescent Mental Health Survey (I-NAMHS), 2022",
  industry: [
    "Sulit menerima perintah kerja",
    "Sulit bekerja sama",
    "Komunikasi kurang baik",
    "Bekerja dalam silo",
    "Mudah menyerah",
    "Memilih cara yang “nyaman” dijalani",
  ],
};

// "Kami hadir dan berperan serta aktif memberikan kontribusi kepada remaja dan generasi muda Indonesia lewat kampus."
export const mission = [
  "Membangun agility dan resiliensi remaja dan generasi muda, calon pemimpin, sejak dari kampus, sebagai mahasiswa.",
  "Mempersiapkan daya juang mahasiswa menuju dunia entrepreneurship dan korporasi.",
  "Membantu dosen dan pengajar dengan kemampuan dan kompetensi agile coaching.",
  "Melibatkan dunia akademisi dalam riset dan pengembangan ilmu agile coaching & agile transformation.",
  "Bekerja sama dengan kampus menjadi inkubasi yang mempersiapkan generasi muda sebagai talenta di dunia profesional.",
];

export const pillars = [
  {
    key: "learning",
    name: "Learning",
    icon: "icon-04-x43",
    text: "Pelatihan, pembelajaran, bootcamp, serta 1on1 coaching & mentoring agar mahasiswa membangun agility, agile mindset, dan menjadi agile practitioner.",
  },
  {
    key: "collaborating",
    name: "Collaborating",
    icon: "icon-04-x44",
    text: "Membangun ekosistem dan gerakan agile antar kampus yang terhubung dengan korporasi serta pemilik usaha, untuk membangun generasi muda yang andal.",
  },
  {
    key: "leveraging",
    name: "Leveraging",
    icon: "icon-04-x45",
    text: "Menjadi “daya ungkit” bonus demografi dengan mengembangkan potensi mahasiswa dan generasi muda melalui langkah konkret menuju Indonesia Emas.",
  },
];

export const programs = [
  {
    no: 1,
    slug: "seminar-workshop-coaching",
    name: "Agile Seminar, Workshop & 1on1 Coaching",
    short: "Pembekalan agile, agility, dan agile mindset untuk mahasiswa, dari workshop sampai sertifikasi micro-credential.",
    points: [
      "Pembekalan ilmu agile, agility, dan agile mindset untuk mahasiswa dan generasi muda, mulai dari workshop sampai sertifikasi (micro-credential).",
      "Program “Duta Agility” mahasiswa di kampus.",
      "1on1 agile coaching & mentoring oleh professional agile coach.",
    ],
    cta: "student" as WaTopic,
  },
  {
    no: 2,
    slug: "agile-coaching-certification",
    name: "Agile Coaching Certification",
    short: "Sertifikasi kompetensi agile coaching untuk dosen “Head of Center”, staf, alumni, publik, dan korporasi.",
    points: [
      "Membekali para dosen “Head of Center” dengan sertifikasi kompetensi agile coaching.",
      "Workshop sertifikasi untuk staf, dosen, alumni, dan publik.",
      "Workshop sertifikasi untuk profesional dan korporasi.",
    ],
    cta: "certification" as WaTopic,
  },
  {
    no: 3,
    slug: "agile-research-center",
    name: "Agile Research Center",
    short: "Menjembatani korporasi, industri, dan akademisi dalam ekosistem riset agile & agile transformation.",
    points: [
      "Membangun hubungan antara korporasi dan industri dengan akademisi.",
      "Menciptakan ekosistem riset, khususnya di bidang agile dan agile transformation.",
    ],
    cta: "corporate" as WaTopic,
  },
  {
    no: 4,
    slug: "agile-talent-center",
    name: "Agile Talent Center",
    short: "Recruitment & talent center: lulusan siap kerja dengan agility tersertifikasi.",
    points: [
      "Recruitment dan talent center untuk mempersiapkan calon lulusan yang memiliki agility, lengkap dengan sertifikasi dan micro-credential.",
      "Sertifikasi terakreditasi (micro-credential) untuk mahasiswa Level 1–5 di bidang Agility dan Agile Mindset.",
    ],
    cta: "corporate" as WaTopic,
  },
];

export const dutaAgility = {
  activities: [
    "Active Workshop",
    "Project Simulation",
    "Social Humanity Project",
    "Leader’s Experience Development",
    "Micro-Credential",
    "Competition (kampus, regional, nasional)",
  ],
};

// Micro-credential: 5 levels × 5 chapters, three learning tracks per level.
export const levels = [
  {
    level: 1,
    name: "Agile Mindset",
    tagline: "Why & what agile, being & doing, anti-fragile, ANTs, purpose of life.",
    chapters: [
      { title: "About Agile & Agile Mindset", topics: ["Why Agile", "What is Agile", "Agile Mindset", "Being & Doing"] },
      { title: "Anti-Fragile", topics: ["Paradox of Happiness", "Fake Happiness", "Fragile & Robust", "Anti-Fragile", "Coaching for Anti-Fragility"] },
      { title: "Developing Mindset", topics: ["About ANTs", "Killing ANTs", "Basic Coaching Technique"] },
      { title: "Gratification", topics: ["Instant Gratification", "Marshmallow Research"] },
      { title: "Purpose of Life & Personal Goal", topics: ["Clarify Purpose of Life", "Develop Personal Goal"] },
    ],
    project: "Helping People Killing ANTs and Create Clear Purpose of Life & Personal Goal",
    coaching: "1on1 Coaching & Mentoring, by Professional Agile Coach",
  },
  {
    level: 2,
    name: "Agility & Resilience",
    tagline: "Change formula, self-awareness, double loop learning, mistake quota.",
    chapters: [
      { title: "Change Formula", topics: ["About Change Formula", "Exercise"] },
      { title: "Self-Awareness & Self-Management", topics: ["About Self-Awareness & Self-Management", "Exercise"] },
      { title: "Double Loop", topics: ["About Double Loop Learning", "Exercise"] },
      { title: "Practice & Failure", topics: ["Proactive Imperfection", "Mistake Quota"] },
      { title: "Change Table", topics: ["Change Table"] },
    ],
    project: "Developing Practice Mistake Quota",
    coaching: "1on1 Coaching & Mentoring, by Professional Agile Coach",
  },
  {
    level: 3,
    name: "Agile Competency",
    tagline: "Neuro-dominance, komunikasi, design thinking, creative thinking, leading agility.",
    chapters: [
      { title: "Neuro-Dominance for Agility", topics: ["About Neuro-Dominance", "Agility with Neuro-Dominance"] },
      { title: "Communication in Agile", topics: ["Developing Communication in Agile", "Thomas-Kilmann Conflict Management"] },
      { title: "Design Thinking", topics: ["Why Design Thinking", "Design Thinking in Agile", "Design Thinking Framework"] },
      { title: "Creative Thinking", topics: ["Why Creative Thinking", "Creative Thinking Tools"] },
      { title: "Leading Agility", topics: ["Leading Agility"] },
    ],
    project: "Practice Agile Competency in Case Project",
    coaching: "1on1 Coaching & Mentoring, by Professional Agile Coach & Industry Expert Mentorship",
  },
  {
    level: 4,
    name: "Collaboration & Agile Team",
    tagline: "Building container, handling resistance, team development, agile coaching.",
    chapters: [
      { title: "Building Container", topics: ["What is Container in Agile", "How to Build Container"] },
      { title: "Handling Resistance", topics: ["Resistance in Agile", "Handling Resistance"] },
      { title: "Team Development", topics: ["Team Development Model", "Team Assessment", "Team Health Check-Up"] },
      { title: "Agile Coaching Fundamental", topics: ["What is Agile Coaching", "Why Agile Coaching"] },
      { title: "Coaching Competency", topics: ["Building Agile Coaching Competency", "Practice Agile Coaching"] },
    ],
    project: "Practice Building Agile Team & Collaboration",
    coaching: "1on1 Coaching & Mentoring, by Professional Agile Coach & Industry Expert Mentorship",
  },
  {
    level: 5,
    name: "Building Agile Culture",
    tagline: "Agile culture model, group & team coaching, agile culture transformation.",
    chapters: [
      { title: "Agile Culture Fundamental", topics: ["Why Agile Culture", "Setting Fundamental on Agile Culture"] },
      { title: "Designing Agile Culture", topics: ["Agile Culture Model", "Choosing the Right Model & Framework"] },
      { title: "Agile Group & Team Coaching", topics: ["About Agile Group & Team Coaching", "Group & Team Coaching Technique"] },
      { title: "Agile Culture Transformation", topics: ["Agile Culture Transformation"] },
      { title: "Change Curve", topics: ["About Change Curve", "Exercise Change Curve"] },
    ],
    project: "Agile Culture Development in Practice",
    coaching: "1on1 Coaching & Mentoring, by Professional Agile Coach & Industry Expert Mentorship",
  },
];

export const mcPillars = [
  { name: "Learning & Development", icon: "icon-04-x43", text: "Kelas interaktif per chapter: konsep, latihan, dan refleksi." },
  { name: "Project & Simulation", icon: "icon-04-x44", text: "Setiap level ditutup dengan proyek nyata untuk mempraktikkan yang dipelajari." },
  { name: "Agile Coaching & Mentorship", icon: "icon-04-x45", text: "1on1 coaching oleh professional agile coach, ditambah mentor industri di Level 3–5." },
];

// Observation guideline used by facilitators during every session.
export const observation = [
  {
    category: "Contribution",
    items: [
      { name: "Speak / Positive", text: "Antusias berbicara, memberi ide dan pendapat, berbagi hal positif yang bermanfaat bagi orang lain." },
      { name: "Active", text: "Cepat merespons secara positif, berinisiatif, dan bertindak menyelesaikan tantangan." },
      { name: "Inspire", text: "Keaktifan dan energi positifnya memengaruhi tim untuk berpikir dan bergerak." },
    ],
  },
  {
    category: "Influencer",
    items: [
      { name: "Lead", text: "Mau mengambil kesempatan sebagai pemimpin dan menunjukkan kemampuan memimpin tim." },
      { name: "Engage", text: "Terlibat aktif, fokus, dan antusias dalam setiap aktivitas pembelajaran." },
      { name: "Servant Leader", text: "Membantu dan memfasilitasi tim untuk bertumbuh." },
    ],
  },
  {
    category: "Game Changer",
    items: [
      { name: "Red zone", text: "Cenderung berpersepsi negatif, bahkan memengaruhi orang lain ke arah negatif." },
      { name: "Yellow zone", text: "Di pertengahan, bisa terpengaruh ke arah negatif atau positif." },
      { name: "Green zone", text: "Cenderung positif, dan menularkan sikap positif ke orang lain." },
    ],
  },
];

export const partnership = [
  {
    name: "Certification",
    points: [
      "HADE memberikan sertifikasi internasional agile coaching, terakreditasi IC-Agile, kepada Head of Center (HoC) di universitas.",
      "HADE memberikan pembinaan agile coaching berkesinambungan kepada HoC.",
    ],
  },
  {
    name: "Space & Signage",
    points: [
      "Universitas menyediakan ruangan dedicated sebagai Center of Agility untuk sesi 1on1 dan persiapan program para coach.",
      "Universitas mengizinkan pemasangan signage COA di area center.",
    ],
  },
  {
    name: "Development",
    points: [
      "Universitas aktif mendukung, mengadakan, mempromosikan, dan mempublikasikan seluruh program COA.",
      "Universitas dan HADE bersama mengembangkan usaha melalui COA: sertifikasi dan program lain untuk internal kampus, publik, dan korporasi.",
    ],
  },
];

export const timeline = [
  { step: "Meeting", text: "HADE bertemu calon partner kampus untuk membahas konsep dan ketertarikan bergabung dengan COA." },
  { step: "Signing", text: "HADE dan kampus menandatangani kesepakatan singkat untuk berkolaborasi membangun COA." },
  { step: "Enrollment", text: "Membuka & launching COA, lalu sertifikasi Agile Coaching untuk Head of Center.", note: "*menyesuaikan waktu dan keadaan" },
  { step: "Program COA", text: "Program rutin kampus, Duta Agility, dan sertifikasi Micro-Credential berjalan." },
];

export const joinMovement = [
  { who: "Universitas", icon: "icon-11-x103", topic: "campus" as WaTopic, text: "Bergabung dan bekerja sama membangun Center of Agility on Campus.", cta: "Ajukan Kemitraan" },
  { who: "Korporasi", icon: "icon-11-x104", topic: "corporate" as WaTopic, text: "Menjadi partner ekosistem agility generasi muda dalam pembelajaran, pendampingan, dan talent.", cta: "Jadi Partner" },
  { who: "Komunitas", icon: "icon-11-x105", topic: "community" as WaTopic, text: "Berkolaborasi menyelenggarakan program dan kampanye media sosial untuk generasi muda.", cta: "Ajak Kolaborasi" },
];

export const universities = [
  { file: "brawijaya", name: "Universitas Brawijaya" },
  { file: "itb", name: "Institut Teknologi Bandung" },
  { file: "telkom-university", name: "Telkom University" },
  { file: "trisakti", name: "Universitas Trisakti" },
  { file: "upn-veteran-jakarta", name: "UPN “Veteran” Jakarta" },
  { file: "upn-veteran-jatim", name: "UPN “Veteran” Jawa Timur" },
  { file: "unsoed", name: "Universitas Jenderal Soedirman" },
  { file: "trilogi", name: "Universitas Trilogi" },
  { file: "podomoro", name: "Podomoro University" },
  { file: "udinus", name: "Universitas Dian Nuswantoro" },
  { file: "unikama", name: "Universitas PGRI Kanjuruhan Malang" },
  { file: "poliwangi", name: "Politeknik Negeri Banyuwangi" },
];

// Event photos (Dropbox: Center of Agility/Event). Captions only name events we can verify from the photo.
export const gallery = [
  { file: "dsc05796", caption: "Launching Center of Agility — Universitas Trilogi" },
  { file: "dsc03668", caption: "Mini-workshop & Launching FTMD–HADE Center of Agility — ITB, Jan 2026" },
  { file: "dsc01505", caption: "Launching COA di iBF — Teknik Industri, Universitas Trisakti, Des 2025" },
  { file: "dsc01790", caption: "Building an Agile Mindset for Entrepreneurs — Podomoro University, Des 2025" },
  { file: "dsc00521", caption: "Peresmian ruang Center of Agility — Telkom University" },
  { file: "dsc05853", caption: "Ratusan mahasiswa di sesi Agile Mindset" },
  { file: "dsc02184", caption: "Peresmian Center of Agility bersama pimpinan kampus" },
  { file: "dsc01851", caption: "Penandatanganan kerja sama Center of Agility" },
  { file: "dsc03759", caption: "“Apa itu Agile Mindset?” — membangun mental fitness & resilience" },
  { file: "dsc00982", caption: "Satu ruangan, satu gerakan agility" },
  { file: "dsc01917", caption: "Bersama mahasiswa & partner ekosistem" },
  { file: "dsc00431", caption: "Mahasiswa berbagi refleksi di workshop" },
];

export const hade = {
  strengths: [
    { value: "3", label: "Board Master Agile Coach credential holder — the first & only in Asia & Australia" },
    { value: "28", label: "Coaching firms" },
    { value: "180", label: "Associate coaches" },
    { value: "1.800+", label: "HADE graduate coaches" },
  ],
  presence: "Indonesia, Hong Kong, Qatar & Australia, dengan subsidiary dan strategic partnership di USA, UK, Qatar, Saudi Arabia, UEA, Kuwait, Oman, Bahrain, Malaysia, dan Singapura. HADE Middle-East berkantor pusat di Bahrain.",
  awards: [
    "Top Business Award 2016",
    "ASEAN Top Business Award 2017",
    "100 Best Global Coaching Leader 2017",
    "100 Top Global Coaching Leader 2018",
    "101 Best Global Coaching Leader 2019",
  ],
  clients: ["Telkom Group", "Pertamina Group", "BPJS Ketenagakerjaan", "Kementerian Ketenagakerjaan", "Shell Indonesia", "XL Axiata"],
};

// Class catalogue on belajaragile.com/coa (from the platform's Kelas page, Oct 2026).
export const classSeries = [
  {
    name: "Micro-Credential COA",
    shot: "kelas-micro-credential",
    text: "Jalur utama COA dari Level 1 sampai 5. Mulai gratis dari kelas WELCOME dan Level 1 · Agile Mindset.",
    classes: [
      { title: "WELCOME — Welcoming & Introduction", tier: "Gratis" },
      { title: "Level 1 · Agile Mindset", tier: "Gratis" },
      { title: "Level 2 · Agility & Resiliency", tier: "Premium Bulanan" },
      { title: "Level 3 · Agile Competency", tier: "Premium Bulanan" },
      { title: "Level 4 · Agile Team & Collaboration", tier: "Premium Bulanan" },
      { title: "Level 5 · Building Agile Culture", tier: "Premium Bulanan" },
    ],
  },
  {
    name: "Agility & Mental Fitness Series + Coaching",
    shot: "kelas-mental-fitness",
    text: "Kelas singkat untuk menjaga mental tetap fit: melawan pikiran negatif, kontrol diri, dan tahan banting.",
    classes: [
      { title: "Agility & Mental Fitness with Applied-Neuroscience", tier: "Gratis" },
      { title: "Anti-Fragile in Agility", tier: "Gratis" },
      { title: "Killing Negative Thoughts", tier: "Gratis" },
      { title: "Self-Control & Instant Gratification", tier: "Gratis" },
      { title: "Managing Stress & Handling Resistance", tier: "Gratis" },
      { title: "Coaching Competency Workshop (Digital Program) berbasis ICF Core Competencies", tier: "Program Digital" },
    ],
  },
  {
    name: "Youth Communications & Entrepreneurship Series",
    shot: "kelas-komunikasi-bisnis",
    text: "Bekal presentasi, komunikasi, dan memulai usaha, untuk organisasi kampus, magang, sampai startup pertamamu.",
    classes: [
      { title: "Mastering Communication & Influencing with Applied-Neuroscience", tier: "Gratis" },
      { title: "High Impact & Effective Engagement Presentation", tier: "Gratis" },
      { title: "How To Start Your Business", tier: "Premium Bulanan" },
      { title: "How To Scale-Up Your Business", tier: "Premium Bulanan" },
      { title: "How To Create Your Investor Pitch Deck", tier: "Premium Bulanan" },
    ],
  },
];
