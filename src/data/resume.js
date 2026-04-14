// src/data/resume.js
export const person = {
  name: 'Juvana Khan',
  title: 'Full-Stack Engineer & AI Specialist',
  location: 'New Jersey, USA',
  email: 'sayeedajuvanakhan@gmail.com',
  phone: '(972) 856-0080',
  linkedin: 'linkedin.com/in/juvana-k',
  linkedinUrl: 'https://linkedin.com/in/juvana-k',
  visa: 'F-1 · CPT Eligible · 3-yr STEM OPT',
  availability: 'Dec 2026 (CPT: earlier)',
  quote:
    "I build things end-to-end — from LLM integration and REST APIs to React interfaces and CI/CD pipelines. I care about reliability, speed, and user impact. I'd love to bring that to The New York Times.",
};

export const education = [
  {
    school: 'Rutgers, The State University of New Jersey',
    degree: 'Master of IT & Analytics',
    period: 'Aug 2025 – Dec 2026',
  },
  {
    school: 'G. Narayamma Institute of Technology and Science',
    degree: 'B.Tech, Computer Science Engineering — AI & ML Specialization',
    period: 'May 2024',
  },
];

export const experience = [
  {
    company: 'Synefo',
    location: 'Hyderabad, India',
    role: 'Full-Stack Software Engineer',
    period: 'Oct 2024 – Mar 2025',
    bullets: [
      'Built and shipped a production-grade Generative AI-powered enterprise chatbot end-to-end: React frontend, FastAPI backend, and LLM integration — automating 70% of complex internal queries at scale.',
      'Owned CI/CD pipeline (GitHub Actions) for deployment to production, reducing deployment failures by 40% and enabling rapid, reliable release cycles.',
      'Developed scalable full-stack systems with Java, Spring Boot (backend) and React, Angular (frontend), growing user engagement by 50%.',
      'Collaborated cross-functionally with product and AI teams in an agile environment.',
    ],
    stats: [
      { label: 'Query Automation', value: '70%' },
      { label: 'Fewer Deploy Failures', value: '40%' },
      { label: 'User Engagement ↑', value: '50%' },
    ],
  },
  {
    company: 'Zavyat Enterprise Pvt Ltd',
    location: 'Hyderabad, India',
    role: 'Software Developer',
    period: 'Jan 2024 – Oct 2024',
    bullets: [
      'Delivered responsive web and mobile apps using React, Angular, and Flutter/Dart — reducing load times by 40% and improving UX across logistics features used by thousands.',
      'Optimized Node.js backend performance through intelligent caching, reducing database load by 35% and doubling API response speed.',
      'Worked across the full stack to ship features iteratively and maintain high code quality.',
    ],
    stats: [
      { label: 'Load Time ↓', value: '40%' },
      { label: 'DB Load ↓', value: '35%' },
      { label: 'API Speed ↑', value: '2×' },
    ],
  },
];

export const projects = [
  {
    title: 'Stress & Heart Rate Detection via Facial Expressions',
    period: 'Fall 2023',
    badge: 'Patent Granted',
    description:
      'Designed and trained a CNN-based deep learning model achieving ~94.2% accuracy; built a real-time modular inference pipeline with live visualization. Awarded a patent for novel application of computer vision to non-invasive physiological health monitoring.',
    tags: ['CNN', 'PyTorch', 'Computer Vision', 'Python'],
  },
  {
    title: 'College Companion — AI Career Counseling Chatbot',
    period: 'Summer 2023',
    badge: 'Full-Stack',
    description:
      'Built and deployed a full-stack NLP-powered chatbot (Python backend APIs + scalable frontend) delivering context-aware, personalized real-time guidance — end-to-end ownership from architecture to production deployment.',
    tags: ['NLP', 'Python', 'React', 'FastAPI'],
  },
];

export const skills = {
  Languages: ['JavaScript', 'Python', 'Java', 'SQL', 'Go (familiar)'],
  Frontend: ['React', 'Angular', 'CSS Modules', 'Tailwind CSS', 'HTML5'],
  Backend: ['Node.js', 'Express', 'FastAPI', 'Flask', 'Spring Boot', 'GraphQL', 'REST APIs'],
  'Tools & Cloud': ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Postman', 'Render'],
  'ML / AI': ['PyTorch', 'scikit-learn', 'NLP', 'LLMs', 'Generative AI', 'Pandas', 'NumPy'],
};

export const tickerItems = [
  'Juvana Khan ships AI-powered enterprise chatbot automating 70% of internal queries',
  'Patent granted for CNN-based heart rate detection via facial expressions — 94.2% accuracy',
  'CI/CD pipeline reduces deployment failures by 40% at Synefo',
  'Rutgers MITA student targets New York Times full-stack engineering role',
  'Node.js optimization doubles API response speed, cuts database load 35%',
  'React + Angular apps boost user engagement 50% across enterprise platform',
  'Load time reductions of 40% improve UX for thousands of logistics users',
  'STEM OPT eligible full-stack engineer available starting 2026',
];

export const careerChartData = {
  impact: {
    labels: ['Query\nAutomation', 'Deploy\nFailures ↓', 'User\nEngagement ↑', 'API\nSpeed ↑', 'Load\nTime ↓', 'DB\nLoad ↓'],
    data: [70, 40, 50, 100, 40, 35],
  },
  skills: {
    labels: ['Frontend', 'Backend', 'AI / ML', 'DevOps', 'Databases', 'System Design'],
    data: [90, 88, 82, 78, 80, 85],
  },
  timeline: {
    labels: ['2023 Patent', 'Zavyat Jan\'24', 'Synefo Oct\'24', 'Rutgers Aug\'25', 'Graduation Dec\'26'],
    data: [60, 70, 85, 88, 100],
  },
};

export const wordleWords = [
  { word: 'REACT', hint: "Juvana's go-to JavaScript UI library" },
  { word: 'FLASK', hint: 'Python micro-framework she uses for web APIs' },
  { word: 'NUMPY', hint: 'Numerical Python library used in her ML work' },
  { word: 'TORCH', hint: 'Deep learning framework — PyTorch short form' },
  { word: 'DOCKER', hint: 'Containerization tool in her DevOps stack' },
  { word: 'GRAPHQL', hint: 'Query language for APIs in her backend stack' },
];

export const crosswordClues = {
  across: [
    { number: 1, row: 0, col: 0, answer: 'REACT', clue: "Juvana's primary frontend framework" },
    { number: 3, row: 2, col: 0, answer: 'FASTAPI', clue: 'Python backend framework she used at Synefo' },
    { number: 5, row: 4, col: 0, answer: 'DOCKER', clue: 'Container tool in her DevOps stack' },
    { number: 6, row: 6, col: 1, answer: 'PATENT', clue: 'She was granted one for her CNN model' },
  ],
  down: [
    { number: 1, row: 0, col: 0, answer: 'RUTGERS', clue: 'University where Juvana pursues her Masters' },
    { number: 2, row: 0, col: 2, answer: 'AGENTIC', clue: 'Type of AI pipeline in modern chatbots' },
    { number: 4, row: 0, col: 5, answer: 'TORCH', clue: 'PyTorch short form, her deep learning library' },
    { number: 5, row: 4, col: 0, answer: 'DEPLOY', clue: 'What GitHub Actions automates' },
  ],
};
