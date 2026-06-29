// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  { id: 1, icon: 'FaLaptopCode',    color: '#3b82f6', title: 'Website Development',     category: 'web',    desc: 'Custom, high-performance websites built for speed, security, and scalability.' },
  { id: 2, icon: 'FaBriefcase',     color: '#7c3aed', title: 'Business Websites',       category: 'web',    desc: 'Professional business websites that build credibility and generate leads.' },
  { id: 3, icon: 'FaCartShopping',  color: '#10b981', title: 'E-Commerce Websites',     category: 'web',    desc: 'Feature-rich online stores with payment gateways and inventory management.' },
  { id: 4, icon: 'FaRocket',        color: '#f59e0b', title: 'Landing Pages',           category: 'web',    desc: 'High-converting landing pages optimised for campaigns and lead generation.' },
  { id: 5, icon: 'FaIdCard',        color: '#ec4899', title: 'Portfolio Websites',      category: 'web',    desc: 'Stunning portfolio sites that showcase your work and attract clients.' },
  { id: 6, icon: 'FaCode',          color: '#06b6d4', title: 'Web Applications',        category: 'web',    desc: 'Scalable, robust web apps with modern frameworks and clean architecture.' },
  { id: 7, icon: 'FaCloud',         color: '#3b82f6', title: 'Cloud Solutions',         category: 'cloud',  desc: 'End-to-end cloud migration, hosting, and infrastructure management.' },
  { id: 8, icon: 'FaGaugeHigh',     color: '#7c3aed', title: 'Admin Panel Dev',         category: 'web',    desc: 'Custom admin dashboards with real-time data, analytics, and full control.' },
  { id: 9, icon: 'FaPaintbrush',    color: '#ec4899', title: 'UI/UX Design',            category: 'design', desc: 'Beautiful, intuitive designs that delight users and drive engagement.' },
  { id: 10, icon: 'FaScrewdriverWrench', color: '#10b981', title: 'Website Maintenance', category: 'cloud', desc: 'Proactive maintenance, updates, and monitoring to keep your site flawless.' },
  { id: 11, icon: 'FaMagnifyingGlass', color: '#f59e0b', title: 'SEO Optimization',    category: 'seo',    desc: 'Drive organic traffic with on-page, off-page, and technical SEO strategies.' },
  { id: 12, icon: 'FaBolt',         color: '#06b6d4', title: 'Speed Optimization',      category: 'seo',    desc: 'Boost Core Web Vitals and page speed for better rankings and UX.' },
  { id: 13, icon: 'FaServer',       color: '#3b82f6', title: 'Domain & Hosting',        category: 'cloud',  desc: 'Reliable domain registration and managed hosting with 99.9% uptime.' },
  { id: 14, icon: 'FaPlug',         color: '#7c3aed', title: 'API Integration',         category: 'web',    desc: 'Seamless third-party API integrations to extend your platform capabilities.' },
  { id: 15, icon: 'FaDatabase',     color: '#10b981', title: 'Database Development',    category: 'web',    desc: 'Optimised database design, management, and migration for any scale.' },
  { id: 16, icon: 'FaCreditCard',   color: '#ec4899', title: 'Payment Gateway',         category: 'web',    desc: 'Secure payment integration with Razorpay, Stripe, PayPal, and more.' },
  { id: 17, icon: 'FaShield',       color: '#f59e0b', title: 'Security Implementation', category: 'cloud',  desc: 'SSL, firewall, malware protection, and advanced security hardening.' },
  { id: 18, icon: 'FaMobileScreen', color: '#06b6d4', title: 'Mobile Responsive Design',category: 'design', desc: 'Pixel-perfect responsive designs that look stunning on all devices.' },
]

// ── Pricing ───────────────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    icon: 'FaPaperPlane', name: 'Starter',   sub: 'Landing Page',    price: '6,999',  popular: false,
    ideal: 'Promotions, campaigns & events',
    features: [
      { text: '1 Page Website',        ok: true },
      { text: 'Single Hero Section',   ok: true },
      { text: 'Lead Capture Form',     ok: true },
      { text: 'Mobile Responsive',     ok: true },
      { text: 'WhatsApp Integration',  ok: true },
      { text: 'Basic SEO Setup',       ok: true },
      { text: '15 Days Free Support',  ok: true },
      { text: 'Multi-Page Layout',     ok: false },
      { text: 'Admin Panel',           ok: false },
    ],
  },
  {
    icon: 'FaBriefcase', name: 'Business',  sub: 'Up to 5 Pages',   price: '9,999',  popular: false,
    ideal: 'Startups & local businesses',
    features: [
      { text: 'Up to 5 Pages',         ok: true },
      { text: 'Responsive Design',     ok: true },
      { text: 'Contact Form',          ok: true },
      { text: 'WhatsApp Chat',         ok: true },
      { text: 'Google Map Integration',ok: true },
      { text: 'Social Media Links',    ok: true },
      { text: 'SSL Security',          ok: true },
      { text: 'Admin Panel Access',    ok: true },
      { text: '1 Month Support',       ok: true },
    ],
  },
  {
    icon: 'FaStar', name: 'Professional', sub: 'Up to 10 Pages', price: '14,999', popular: true,
    ideal: 'Growing businesses & agencies',
    features: [
      { text: 'Up to 10 Pages',        ok: true },
      { text: 'Premium Custom Design', ok: true },
      { text: 'Advanced UI/UX',        ok: true },
      { text: 'Speed Optimization',    ok: true },
      { text: 'WhatsApp & Live Chat',  ok: true },
      { text: 'Blog Setup',            ok: true },
      { text: 'Google Analytics',      ok: true },
      { text: 'Security Optimization', ok: true },
      { text: '2 Months Support',      ok: true },
    ],
  },
  {
    icon: 'FaCrown', name: 'Enterprise',  sub: 'Unlimited Pages', price: '24,999', popular: false,
    ideal: 'Established & growing brands',
    features: [
      { text: 'Unlimited Pages',       ok: true },
      { text: 'Fully Custom Design',   ok: true },
      { text: 'Dynamic Web Dev',       ok: true },
      { text: 'Advanced Animations',   ok: true },
      { text: 'CRM/API Integrations',  ok: true },
      { text: 'Booking System',        ok: true },
      { text: 'Multi-Language Support',ok: true },
      { text: 'Priority Support',      ok: true },
      { text: '3 Months Support',      ok: true },
    ],
  },
  {
    icon: 'FaInfinity', name: 'Custom',  sub: 'Full Customization', price: null, popular: false,
    ideal: 'Enterprise businesses & platforms',
    features: [
      { text: 'Custom Web Application',ok: true },
      { text: 'Advanced Admin Panel',  ok: true },
      { text: 'CRM/ERP Integration',   ok: true },
      { text: 'Payment Gateway',       ok: true },
      { text: 'Multi-Vendor Platform', ok: true },
      { text: 'Advanced Security',     ok: true },
      { text: 'Scalable Cloud Hosting',ok: true },
      { text: 'Dedicated PM',          ok: true },
      { text: 'Ongoing Maintenance',   ok: true },
    ],
  },
]

// ── Why Us ────────────────────────────────────────────────────────────────────
export const whyUs = [
  { icon: 'FaPalette',       grad: 'from-primary-500 to-primary-600', title: 'Modern UI',        desc: "Stunning, contemporary designs that reflect your brand's premium identity." },
  { icon: 'FaGaugeHigh',     grad: 'from-accent-600 to-accent-400',   title: 'Fast Performance', desc: 'Optimised code and infrastructure for blazing-fast load times.' },
  { icon: 'FaMagnifyingGlass', grad: 'from-emerald-500 to-emerald-400', title: 'SEO Friendly',  desc: 'Built with SEO best practices to rank higher and drive organic traffic.' },
  { icon: 'FaLock',          grad: 'from-orange-500 to-orange-400',   title: 'Secure',           desc: 'Enterprise-grade security with SSL, firewalls, and data encryption.' },
  { icon: 'FaMobileScreen',  grad: 'from-cyan-500 to-cyan-400',       title: 'Responsive',       desc: 'Perfect on every screen — mobile, tablet, and desktop — always.' },
  { icon: 'FaCloudArrowUp',  grad: 'from-primary-500 to-cyan-400',    title: 'Cloud Ready',      desc: 'Scalable cloud infrastructure that grows as your business grows.' },
  { icon: 'FaTags',          grad: 'from-accent-600 to-accent-400',   title: 'Affordable',       desc: 'Premium quality at competitive prices — maximum value for your investment.' },
  { icon: 'FaHeadset',       grad: 'from-emerald-500 to-emerald-400', title: 'Lifetime Support', desc: 'Dedicated support team available to help you any time, always ready.' },
]

// ── Process steps ─────────────────────────────────────────────────────────────
export const processSteps = [
  { num: '01', icon: 'FaMagnifyingGlassPlus', title: 'Discovery',   desc: 'We understand your business goals, target audience, and project requirements in depth.' },
  { num: '02', icon: 'FaClipboardList',       title: 'Planning',    desc: 'Detailed project roadmap, technology stack selection, and timeline definition.' },
  { num: '03', icon: 'FaPencilRuler',         title: 'UI Design',   desc: 'Creating wireframes, prototypes, and pixel-perfect visual designs for approval.' },
  { num: '04', icon: 'FaCode',                title: 'Development', desc: 'Clean, optimised code development with regular milestones and client updates.' },
  { num: '05', icon: 'FaVials',               title: 'Testing',     desc: 'Rigorous QA testing across devices, browsers, and performance benchmarks.' },
  { num: '06', icon: 'FaRocket',              title: 'Deployment',  desc: 'Smooth, zero-downtime deployment with complete setup and go-live support.' },
  { num: '07', icon: 'FaHeadset',             title: 'Support',     desc: 'Ongoing maintenance, updates, and dedicated support to ensure long-term success.' },
]

// ── Portfolio ─────────────────────────────────────────────────────────────────
export const portfolio = [
  { id: 1, title: 'Corporate Business Website', sub: 'HTML, CSS, Bootstrap',    category: 'website',   icon: 'FaGlobe',       grad: 'from-primary-500 to-accent-600' },
  { id: 2, title: 'Cloud Migration Platform',   sub: 'AWS, Docker, Kubernetes', category: 'cloud',     icon: 'FaCloud',       grad: 'from-cyan-500 to-primary-500' },
  { id: 3, title: 'Business Analytics Dashboard', sub: 'React, Node.js, MongoDB', category: 'dashboard', icon: 'FaChartBar',   grad: 'from-accent-600 to-pink-500' },
  { id: 4, title: 'Fashion E-Commerce Store',   sub: 'WooCommerce, PHP, MySQL', category: 'ecommerce', icon: 'FaBagShopping', grad: 'from-emerald-500 to-cyan-500' },
  { id: 5, title: 'Multi-Tenant Admin Panel',   sub: 'Laravel, Vue.js, MySQL',  category: 'dashboard', icon: 'FaGears',       grad: 'from-orange-500 to-red-500' },
  { id: 6, title: 'Healthcare Management Portal', sub: 'React, Node.js, PgSQL', category: 'website',   icon: 'FaHospital',    grad: 'from-pink-500 to-accent-600' },
]

// ── Testimonials ──────────────────────────────────────────────────────────────
export const testimonials = [
  { name: 'Rahul Sharma',  role: 'CEO, TechStart India',    initials: 'R', grad: 'from-primary-500 to-accent-600', stars: 5,   text: '"JK Cloud Technologies transformed our online presence. The website they built is stunning, fast, and has significantly increased our leads. Truly professional!"' },
  { name: 'Priya Reddy',   role: 'Founder, StyleBazaar',    initials: 'P', grad: 'from-emerald-500 to-cyan-500',   stars: 5,   text: '"The team delivered our e-commerce platform on time and within budget. Sales increased by 40% in the first month. Exceptional work!"' },
  { name: 'Arjun Mehta',   role: 'CTO, FinanceFlow',        initials: 'A', grad: 'from-orange-500 to-pink-500',    stars: 5,   text: '"Our cloud migration was seamless. JK Cloud\'s expertise saved us hours of downtime and cut our infrastructure costs by 35%. Highly recommended!"' },
  { name: 'Sita Krishnan', role: 'Operations Head, LogiFlow', initials: 'S', grad: 'from-accent-600 to-pink-500', stars: 5,   text: '"The admin dashboard they built has streamlined our operations completely. The UI is intuitive, and the team was incredibly responsive throughout."' },
  { name: 'Vikram Nair',   role: 'Director, EduPrime',      initials: 'V', grad: 'from-primary-500 to-emerald-500', stars: 5,  text: '"JK Cloud helped us rank on the first page of Google in just 3 months with their SEO services. The ROI has been incredible. Worth every rupee!"' },
  { name: 'Neha Patel',    role: 'Owner, GreenCafe Chain',  initials: 'N', grad: 'from-cyan-500 to-accent-600',   stars: 4.5, text: '"From design to deployment, the entire process was smooth. Our website looks amazing on all devices and loads super fast. Great team to work with!"' },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faqs = [
  { q: 'How long does it take to build a website?',     a: 'Timeline depends on project complexity. A Landing Page takes 3–5 days, a Business Website 7–14 days, and a full E-Commerce or Custom Web Application 4–8 weeks. We always deliver on the agreed timeline.' },
  { q: 'Do you provide post-launch support?',           a: 'Yes! Every plan includes post-launch support ranging from 15 days to 3 months. We also offer affordable maintenance packages for ongoing support, updates, and security patches.' },
  { q: 'Will my website be mobile-friendly?',           a: 'Absolutely. All our websites are 100% mobile responsive, tested across all screen sizes and browsers. We follow a mobile-first design approach to ensure a seamless experience on every device.' },
  { q: 'Do you help with domain and hosting?',          a: 'Yes, we provide complete domain registration and managed hosting services with a 99.9% uptime SLA. We handle the entire technical setup so you can focus on your business.' },
  { q: 'Can I update the website content myself?',      a: 'Yes! We build websites with easy-to-use admin panels so you can update content, images, and products without any technical knowledge. We also provide training.' },
  { q: 'What payment methods do you accept?',           a: 'We accept UPI, bank transfers, and online payments. For large projects, we typically require 50% upfront and 50% upon delivery. Custom payment terms can be arranged for enterprise projects.' },
  { q: 'Do you work with clients outside India?',       a: 'Yes! We work with clients globally. Our team communicates in English and accommodates different time zones. International payments are accepted via wire transfer or international payment platforms.' },
]

// ── Stats ─────────────────────────────────────────────────────────────────────
export const stats = [
  { count: 150, suffix: '+', label: 'Projects Done' },
  { count: 98,  suffix: '%', label: 'Client Satisfaction' },
  { count: 5,   suffix: '+', label: 'Years Experience' },
]

export const bigStats = [
  { count: 200, suffix: '+', label: 'Projects Delivered' },
  { count: 100, suffix: '+', label: 'Happy Clients' },
  { count: 100, suffix: '%', label: 'Satisfaction Rate' },
  { count: 5,   suffix: '+', label: 'Years Experience' },
]
