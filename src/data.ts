export type Project = {
  id: string
  name: string
  type: string
  category: 'Company' | 'Independent' | 'Portfolio' | 'Freelance'
  summary: string
  details: string
  stack: string[]
  url: string
  status?: string
  number: string
  style: 'violet' | 'teal' | 'orange' | 'blue' | 'pink' | 'lime' | 'slate'
}

export const projects: Project[] = [
  {
    id:'allora', name:'Allora / SPA Management', type:'Booking & operations platform', category:'Company',
    summary:'Contributed backend booking logic, employee scheduling and customer appointment workflows.',
    details:'Team-developed SPA management platform. Linked repository is the latest Novox-owned backend; earlier personal backend is separately documented.',
    stack:['Node.js','Express','MongoDB','REST API'], url:'https://github.com/novoxedtechllp-dotcom/spaBackLat', number:'01',style:'violet'
  },
  {
    id:'travel', name:'Travel Agency Platform', type:'Travel booking & admin', category:'Company',
    summary:'Full-stack booking platform with customer journeys, packages, inquiries and an agency admin dashboard.',
    details:'React frontend and Express/MongoDB API. Company work; repository currently needs a security review before production or public-source reuse.',
    stack:['React','Node.js','Express','MongoDB'],url:'https://github.com/Muhammedsajid10/travel-agency',number:'02',style:'teal'
  },
  {
    id:'workflow', name:'WorkflowPro',type:'Enterprise-style task API',category:'Portfolio',
    summary:'Task management REST API with role-based access, PostgreSQL and Prisma data models.',
    details:'Backend-oriented portfolio project focused on APIs, structured authorization, and relational database design.',
    stack:['Node.js','PostgreSQL','Prisma','JWT'],url:'https://github.com/Muhammedsajid10/WorkflowPro-Enterprise-Task-Management-API',number:'03',style:'orange'
  },
  {
    id:'dukaan', name:'SmartDukaan',type:'Retail management SaaS',category:'Independent',
    summary:'In-progress mobile shop management system covering sales, inventory and purchase workflows.',
    details:'Private repository; this card describes the project without exposing its source. Ask for a walkthrough or selected demo.',
    stack:['React','TypeScript','Express','MongoDB'],url:'',status:'In development · Private source',number:'04',style:'blue'
  },
  {
    id:'himate', name:'HiMate Backend',type:'Social & communication APIs',category:'Portfolio',
    summary:'In-progress backend with authentication, messaging routes and Socket.IO connectivity.',
    details:'Backend codebase includes profile, messaging, verification and payment-related integration endpoints; production readiness is not claimed.',
    stack:['Express','MongoDB','Socket.IO','REST API'],url:'https://github.com/Muhammedsajid10/HiMate',status:'In development',number:'05',style:'pink'
  },
  {
    id:'tahfeel', name:'Tahfeel Technical Services',type:'Corporate website',category:'Freelance',
    summary:'Responsive company website showcasing services, project gallery and WhatsApp contact.',
    details:'Client-oriented React site. The on-page enquiry form is currently a frontend demonstration, not a connected email/backend submission.',
    stack:['React','Vite','Framer Motion','CSS'],url:'https://github.com/Muhammedsajid10/thahfeel-work',number:'06',style:'lime'
  },
  {
    id:'employee',name:'SPA Employee Dashboard',type:'Employee-facing application',category:'Company',
    summary:'React dashboard for SPA team operations, authentication, attendance and schedules.',
    details:'Companion application for the SPA management project, with employee-focused views and backend integration.',
    stack:['React','Vite','REST API'],url:'https://github.com/Muhammedsajid10/EmployeeSideSpa',number:'07',style:'slate'
  },


{
  id: 'kalyan',
  name: 'Kalyan Engineering',
  type: 'Product & Inventory Management Backend',
  category: 'Company',

  summary:
    'Backend system supporting product management, stock tracking, franchise operations and administrative workflows.',

  details:
    'Company-developed application using Express.js and MongoDB, with REST APIs for authentication, categories, products, sub-products, inventory and dashboard data.',

  stack: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
    'REST API'
  ],

  url: 'https://github.com/novoxedtechllp-dotcom/kalyanBackEnd',

  number: '08',
  style: 'blue'
}

]

export const skills = [
  {category:'Frontend',items:['React','TypeScript','JavaScript','Redux Toolkit','HTML / CSS','Tailwind CSS','Vite']},
  {category:'Backend',items:['Node.js','Express.js','REST APIs','JWT / RBAC','Socket.IO','WebRTC fundamentals']},
  {category:'Databases',items:['MongoDB','Mongoose','PostgreSQL','MySQL','Prisma']},
  {category:'DevOps & Tools',items:['Hostinger VPS','Ubuntu / SSH','Node.js deployment','Git / GitHub','Postman','Vercel / Render','AWS fundamentals']}
]
