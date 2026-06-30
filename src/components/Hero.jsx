import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowRight, FaHeadset, FaCircleCheck,
  FaCloud, FaServer, FaDatabase, FaShield, FaCode, FaBolt,
  FaMobileScreen, FaLaptopCode, FaGears, FaGaugeHigh,
} from 'react-icons/fa6'
import useCounter from '../hooks/useCounter'

/* ─────────────────────────────────────────────────────────────────────────────
   Timing
───────────────────────────────────────────────────────────────────────────── */
const LOOP  = 24          // total loop in seconds
const CUT   = [0,4,10,16,22,24]  // scene boundaries

function useVideoTime() {
  const [t, setT] = useState(0)
  const origin = useRef(null)
  useEffect(() => {
    origin.current = performance.now()
    let raf
    const tick = (now) => {
      setT(((now - origin.current) / 1000) % LOOP)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return t
}

function scene(t) {
  for (let i = 0; i < CUT.length - 1; i++) {
    if (t >= CUT[i] && t < CUT[i + 1]) {
      const dur = CUT[i + 1] - CUT[i]
      return { s: i + 1, el: t - CUT[i], pct: (t - CUT[i]) / dur }
    }
  }
  return { s: 1, el: 0, pct: 0 }
}

/* ─────────────────────────────────────────────────────────────────────────────
   Static data
───────────────────────────────────────────────────────────────────────────── */
const NODES = [
  { id:'cloud',  x:50, y:44, Icon:FaCloud,        label:'Cloud Hub',  col:'#60a5fa', glow:'#3b82f6', big:true  },
  { id:'server', x:16, y:44, Icon:FaServer,       label:'Server',     col:'#c084fc', glow:'#a855f7'            },
  { id:'db',     x:31, y:14, Icon:FaDatabase,     label:'Database',   col:'#34d399', glow:'#10b981'            },
  { id:'sec',    x:50, y:76, Icon:FaShield,       label:'Security',   col:'#f472b6', glow:'#ec4899'            },
  { id:'api',    x:79, y:22, Icon:FaCode,         label:'API Layer',  col:'#fbbf24', glow:'#f59e0b'            },
  { id:'ai',     x:77, y:67, Icon:FaBolt,         label:'AI / ML',    col:'#fb923c', glow:'#f97316'            },
]
const EDGES = [
  { a:'cloud', b:'server', col:'#3b82f6', d:0.0 },
  { a:'cloud', b:'db',     col:'#10b981', d:0.5 },
  { a:'cloud', b:'sec',    col:'#ec4899', d:1.0 },
  { a:'cloud', b:'api',    col:'#f59e0b', d:1.5 },
  { a:'cloud', b:'ai',     col:'#f97316', d:2.0 },
  { a:'server', b:'db',    col:'#a855f7', d:2.5 },
]

const SERVICES = [
  { Icon:FaCloud,        label:'Cloud Migration', col:'#3b82f6', bg:'rgba(59,130,246,0.12)'  },
  { Icon:FaBolt,         label:'AI Solutions',    col:'#f97316', bg:'rgba(249,115,22,0.12)'  },
  { Icon:FaLaptopCode,   label:'Web Dev',         col:'#7c3aed', bg:'rgba(124,58,237,0.12)'  },
  { Icon:FaMobileScreen, label:'Mobile App',      col:'#0ea5e9', bg:'rgba(14,165,233,0.12)'  },
  { Icon:FaGears,        label:'DevOps',          col:'#10b981', bg:'rgba(16,185,129,0.12)'  },
  { Icon:FaShield,       label:'Cybersecurity',   col:'#ec4899', bg:'rgba(236,72,153,0.12)'  },
  { Icon:FaGaugeHigh,    label:'Analytics',       col:'#f59e0b', bg:'rgba(245,158,11,0.12)'  },
  { Icon:FaServer,       label:'Consulting',      col:'#a855f7', bg:'rgba(168,85,247,0.12)'  },
]

const BARS = [
  { label:'Performance', val:98,  col:'#60a5fa' },
  { label:'Security',    val:97,  col:'#f472b6' },
  { label:'Uptime',      val:100, col:'#34d399' },
  { label:'Satisfaction',val:100, col:'#c084fc' },
]

const PX = [
  {x:8, y:20,sz:1.4,d:4.0,dl:0.0},{x:88,y:12,sz:2.0,d:5.5,dl:1.2},
  {x:28,y:72,sz:1.0,d:3.5,dl:0.5},{x:72,y:58,sz:2.2,d:6.0,dl:2.0},
  {x:52,y:8, sz:1.5,d:4.5,dl:0.8},{x:18,y:88,sz:1.0,d:3.0,dl:1.5},
  {x:92,y:78,sz:1.8,d:5.0,dl:0.3},{x:62,y:32,sz:1.3,d:4.0,dl:1.8},
  {x:38,y:50,sz:1.0,d:3.5,dl:0.9},{x:78,y:42,sz:2.0,d:5.5,dl:2.5},
  {x:14,y:55,sz:1.5,d:4.5,dl:1.1},{x:55,y:82,sz:1.0,d:3.0,dl:0.4},
]

/* ─────────────────────────────────────────────────────────────────────────────
   Shared background (dark grid + particles)
───────────────────────────────────────────────────────────────────────────── */
function Bg() {
  return (
    <>
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(150deg,#060d1f 0%,#0a1628 55%,#0d1f3c 100%)' }} />
      <div style={{ position:'absolute', inset:0, opacity:0.04,
        backgroundImage:'linear-gradient(rgba(99,179,237,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,179,237,.5) 1px,transparent 1px)',
        backgroundSize:'18px 18px' }} />
      {PX.map((p,i) => (
        <motion.div key={i}
          style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`,
            width:p.sz, height:p.sz, borderRadius:'50%',
            background:'rgba(147,197,253,0.65)' }}
          animate={{ y:[-6,6,-6], opacity:[0.15,0.65,0.15] }}
          transition={{ duration:p.d, delay:p.dl, repeat:Infinity, ease:'easeInOut' }}
        />
      ))}
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Scene 1 — Brand Intro (0–4 s)
───────────────────────────────────────────────────────────────────────────── */
function S1({ el }) {
  return (
    <motion.div key="s1"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.55 }}
      style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center', gap:8, padding:16, textAlign:'center' }}
    >
      {/* Logo + glow rings */}
      <div style={{ position:'relative', marginBottom:2 }}>
        <motion.div animate={{ scale:[1,1.35,1], opacity:[0.18,0.04,0.18] }}
          transition={{ duration:2.5, repeat:Infinity }}
          style={{ position:'absolute', inset:-18, borderRadius:'50%',
            background:'radial-gradient(circle,#3b82f680,transparent 68%)' }} />
        <motion.div animate={{ scale:[1,1.18,1], opacity:[0.45,0.12,0.45] }}
          transition={{ duration:2, delay:0.3, repeat:Infinity }}
          style={{ position:'absolute', inset:-9, borderRadius:'50%',
            border:'1px solid rgba(99,179,237,0.45)' }} />
        <motion.div
          initial={{ scale:0.4, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{ delay:0.2, duration:0.65, ease:'backOut' }}
          style={{ width:58, height:58, borderRadius:'50%', overflow:'hidden',
            border:'2px solid rgba(99,179,237,0.5)',
            boxShadow:'0 0 28px rgba(59,130,246,0.55)' }}
        >
          <img src="/logo.jpeg" alt="JK Cloud" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:0.55, duration:0.5 }}>
        <div style={{ color:'#fff', fontSize:13, fontWeight:800, letterSpacing:'0.04em',
          lineHeight:1.2, marginBottom:3, textShadow:'0 0 20px rgba(99,179,237,0.4)' }}>
          JK Cloud Technologies
        </div>
        <div style={{ color:'rgba(147,197,253,0.85)', fontSize:9, fontWeight:600,
          letterSpacing:'0.07em' }}>
          EMPOWERING BUSINESSES WITH CLOUD &amp; AI
        </div>
      </motion.div>

      <div style={{ display:'flex', gap:6, flexWrap:'wrap', justifyContent:'center' }}>
        {['Secure','Scalable','Intelligent'].map((lbl,i) => (
          <motion.span key={lbl}
            initial={{ opacity:0, scale:0.75 }} animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.95 + i*0.15, duration:0.35 }}
            style={{ padding:'3px 10px', borderRadius:20,
              background:'rgba(59,130,246,0.14)',
              border:'1px solid rgba(99,179,237,0.32)',
              color:'#93c5fd', fontSize:9, fontWeight:700, letterSpacing:'0.06em' }}
          >{lbl}</motion.span>
        ))}
      </div>

      <motion.div animate={{ opacity: el > 2.5 ? 1 : 0 }} transition={{ duration:0.6 }}
        style={{ color:'rgba(255,255,255,0.28)', fontSize:8, fontWeight:500,
          letterSpacing:'0.12em', marginTop:2 }}>
        ✦ YOUR DIGITAL TRANSFORMATION PARTNER ✦
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Scene 2 — Cloud Network (4–10 s)
───────────────────────────────────────────────────────────────────────────── */
function Edge({ a, b, col, d }) {
  const na = NODES.find(n => n.id === a)
  const nb = NODES.find(n => n.id === b)
  if (!na || !nb) return null
  const { x:x1, y:y1 } = na, { x:x2, y:y2 } = nb
  return (
    <g>
      <motion.line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={col} strokeWidth={0.45} strokeOpacity={0.28} strokeDasharray="2.5 2"
        initial={{ opacity:0 }} animate={{ opacity:1 }}
        transition={{ delay:d, duration:0.5 }} />
      <motion.circle r={1.3} fill={col} fillOpacity={0.85}
        cx={x1} cy={y1}
        animate={{ cx:[x1,x2], cy:[y1,y2], opacity:[0,0.9,0.9,0] }}
        transition={{ duration:2, delay:d+0.8, repeat:Infinity, repeatDelay:1.4, ease:'linear' }} />
      <motion.circle r={0.9} fill={col} fillOpacity={0.55}
        cx={x2} cy={y2}
        animate={{ cx:[x2,x1], cy:[y2,y1], opacity:[0,0.7,0.7,0] }}
        transition={{ duration:2.2, delay:d+2.2, repeat:Infinity, repeatDelay:1.8, ease:'linear' }} />
    </g>
  )
}

function S2() {
  return (
    <motion.div key="s2"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.55 }}
      style={{ position:'absolute', inset:0 }}
    >
      <div style={{ position:'absolute', top:10, left:12,
        color:'rgba(255,255,255,0.3)', fontSize:8, fontWeight:700,
        letterSpacing:'0.1em', textTransform:'uppercase' }}>
        Cloud Network Infrastructure
      </div>

      <svg viewBox="0 0 100 100" preserveAspectRatio="none"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
        {EDGES.map(e => <Edge key={`${e.a}-${e.b}`} {...e} />)}
      </svg>

      {NODES.map((n,i) => (
        <motion.div key={n.id}
          initial={{ scale:0, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{ delay:i*0.14, duration:0.45, ease:'backOut' }}
          style={{ position:'absolute', left:`${n.x}%`, top:`${n.y}%`,
            transform:'translate(-50%,-50%)',
            display:'flex', flexDirection:'column', alignItems:'center', gap:3 }}
        >
          <motion.div
            animate={{ y:[0,-4,0] }}
            transition={{ duration:2.4+i*0.35, delay:i*0.45, repeat:Infinity, ease:'easeInOut' }}
            style={{ width:n.big?30:22, height:n.big?30:22, borderRadius:'50%',
              background:`radial-gradient(circle at 40% 35%,${n.col}35,#0a1628)`,
              border:`1.5px solid ${n.glow}55`,
              boxShadow:`0 0 ${n.big?14:9}px ${n.glow}55`,
              display:'flex', alignItems:'center', justifyContent:'center' }}
          >
            <n.Icon style={{ color:n.col, fontSize:n.big?13:10 }} />
          </motion.div>
          <span style={{ color:'rgba(255,255,255,0.5)', fontSize:6, fontWeight:600,
            whiteSpace:'nowrap', letterSpacing:'0.04em' }}>{n.label}</span>
        </motion.div>
      ))}

      <div style={{ position:'absolute', bottom:10, left:12, right:12,
        display:'flex', gap:8, justifyContent:'center' }}>
        {[['#34d399','99.9% Uptime'],['#60a5fa','Auto-Scaling'],['#c084fc','Zero Downtime']].map(([col,lbl]) => (
          <div key={lbl} style={{ display:'flex', alignItems:'center', gap:3 }}>
            <motion.div animate={{ opacity:[1,0.25,1] }} transition={{ duration:1.5, repeat:Infinity }}
              style={{ width:5, height:5, borderRadius:'50%', background:col, boxShadow:`0 0 5px ${col}` }} />
            <span style={{ color:'rgba(255,255,255,0.4)', fontSize:7, fontWeight:600 }}>{lbl}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Scene 3 — Services Grid (10–16 s)
───────────────────────────────────────────────────────────────────────────── */
function S3() {
  return (
    <motion.div key="s3"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.55 }}
      style={{ position:'absolute', inset:0, padding:'10px 12px',
        display:'flex', flexDirection:'column', gap:7 }}
    >
      <div style={{ color:'rgba(255,255,255,0.3)', fontSize:8, fontWeight:700,
        letterSpacing:'0.1em', textTransform:'uppercase' }}>Our Services</div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:5, flex:1 }}>
        {SERVICES.map((sv,i) => (
          <motion.div key={sv.label}
            initial={{ opacity:0, y:14, scale:0.88 }}
            animate={{ opacity:1, y:0, scale:1 }}
            transition={{ delay:i*0.09, duration:0.4, ease:'backOut' }}
            style={{ borderRadius:8, padding:'8px 4px', textAlign:'center',
              background:sv.bg, border:`1px solid ${sv.col}28`,
              display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}
          >
            <div style={{ width:24, height:24, borderRadius:6, background:`${sv.col}22`,
              display:'flex', alignItems:'center', justifyContent:'center' }}>
              <sv.Icon style={{ color:sv.col, fontSize:11 }} />
            </div>
            <span style={{ color:'rgba(255,255,255,0.72)', fontSize:7, fontWeight:600,
              lineHeight:1.2, letterSpacing:'0.02em' }}>{sv.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1, duration:0.5 }}
        style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:4 }}>
        <FaCircleCheck style={{ color:'#34d399', fontSize:8 }} />
        <span style={{ color:'rgba(255,255,255,0.32)', fontSize:7, fontWeight:500 }}>
          Trusted by 100+ businesses worldwide
        </span>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Scene 4 — Analytics Dashboard (16–22 s)
───────────────────────────────────────────────────────────────────────────── */
function Bar({ val, col, delay }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(val), delay); return () => clearTimeout(t) }, [val, delay])
  return (
    <div style={{ height:5, borderRadius:4, background:'rgba(255,255,255,0.07)' }}>
      <div style={{ height:'100%', borderRadius:4, width:`${w}%`,
        background:`linear-gradient(90deg,${col},${col}99)`,
        boxShadow:`0 0 7px ${col}70`,
        transition:'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
    </div>
  )
}

function S4() {
  const KPI = [
    { e:'🏆', v:'200+', l:'Projects', col:'#60a5fa' },
    { e:'👥', v:'100+', l:'Clients',  col:'#34d399' },
    { e:'⚡', v:'100%', l:'Uptime',   col:'#c084fc' },
  ]
  return (
    <motion.div key="s4"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.55 }}
      style={{ position:'absolute', inset:0, padding:'10px 12px',
        display:'flex', flexDirection:'column', gap:7 }}
    >
      <div style={{ color:'rgba(255,255,255,0.3)', fontSize:8, fontWeight:700,
        letterSpacing:'0.1em', textTransform:'uppercase' }}>Analytics Dashboard</div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6 }}>
        {KPI.map((k,i) => (
          <motion.div key={k.l}
            initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:i*0.12, duration:0.4 }}
            style={{ borderRadius:8, padding:'6px 8px', textAlign:'center',
              background:'rgba(255,255,255,0.04)', border:`1px solid ${k.col}28` }}>
            <div style={{ fontSize:13 }}>{k.e}</div>
            <div style={{ color:k.col, fontSize:14, fontWeight:800, lineHeight:1.1 }}>{k.v}</div>
            <div style={{ color:'rgba(255,255,255,0.35)', fontSize:7, fontWeight:500 }}>{k.l}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:6, flex:1 }}>
        {BARS.map((b,i) => (
          <motion.div key={b.label}
            initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }}
            transition={{ delay:0.45+i*0.1, duration:0.4 }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:3 }}>
              <span style={{ color:'rgba(255,255,255,0.48)', fontSize:8, fontWeight:600 }}>{b.label}</span>
              <span style={{ color:b.col, fontSize:8, fontWeight:700 }}>{b.val}%</span>
            </div>
            <Bar val={b.val} col={b.col} delay={550+i*110} />
          </motion.div>
        ))}
      </div>

      <div style={{ display:'flex', gap:10, justifyContent:'center' }}>
        {[['#34d399','Systems Operational'],['#60a5fa','AI Processing Active']].map(([dot,lbl]) => (
          <div key={lbl} style={{ display:'flex', alignItems:'center', gap:3 }}>
            <motion.div animate={{ opacity:[1,0.2,1] }} transition={{ duration:1.4, repeat:Infinity }}
              style={{ width:5, height:5, borderRadius:'50%', background:dot,
                boxShadow:`0 0 5px ${dot}` }} />
            <span style={{ color:'rgba(255,255,255,0.32)', fontSize:7, fontWeight:500 }}>{lbl}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Scene 5 — Outro (22–24 s)
───────────────────────────────────────────────────────────────────────────── */
function S5() {
  return (
    <motion.div key="s5"
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.55 }}
      style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center', gap:10, textAlign:'center', padding:16 }}
    >
      {/* Light streak */}
      <motion.div
        animate={{ x:['-110%','210%'], opacity:[0,0.7,0] }}
        transition={{ duration:1.8, delay:0.4, repeat:Infinity, repeatDelay:1.5 }}
        style={{ position:'absolute', top:'48%', left:0, right:0, height:1.5,
          background:'linear-gradient(90deg,transparent,rgba(147,197,253,0.8),transparent)',
          transform:'translateY(-50%)' }}
      />

      <motion.div
        animate={{ boxShadow:['0 0 18px rgba(59,130,246,0.35)','0 0 40px rgba(124,58,237,0.7)','0 0 18px rgba(59,130,246,0.35)'] }}
        transition={{ duration:2, repeat:Infinity }}
        style={{ width:56, height:56, borderRadius:'50%', overflow:'hidden',
          border:'2px solid rgba(99,179,237,0.5)' }}
      >
        <img src="/logo.jpeg" alt="JK Cloud" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
      </motion.div>

      <div>
        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:0.3, duration:0.55 }}
          style={{ color:'#fff', fontSize:15, fontWeight:800, letterSpacing:'0.03em',
            marginBottom:5, textShadow:'0 0 24px rgba(99,179,237,0.45)' }}>
          Innovate. Transform. Scale.
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ delay:0.7, duration:0.5 }}
          style={{ color:'rgba(147,197,253,0.65)', fontSize:9, fontWeight:600, letterSpacing:'0.1em' }}>
          JK CLOUD TECHNOLOGIES
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   VideoShowcase — orchestrates scenes inside the card's video area
───────────────────────────────────────────────────────────────────────────── */
const SCENE_COLORS = ['#3b82f6','#10b981','#7c3aed','#f59e0b','#ec4899']

function VideoShowcase() {
  const t = useVideoTime()
  const { s, el } = scene(t)

  return (
    <div style={{ width:'100%', aspectRatio:'16/9', borderRadius:12,
      overflow:'hidden', position:'relative' }}>
      <Bg />
      <AnimatePresence mode="wait">
        {s === 1 && <S1 key="s1" el={el} />}
        {s === 2 && <S2 key="s2" />}
        {s === 3 && <S3 key="s3" />}
        {s === 4 && <S4 key="s4" />}
        {s === 5 && <S5 key="s5" />}
      </AnimatePresence>
      {/* Overall progress bar */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2,
        background:'rgba(255,255,255,0.06)' }}>
        <div style={{ height:'100%', width:`${(t/LOOP)*100}%`,
          background:SCENE_COLORS[s-1],
          boxShadow:`0 0 8px ${SCENE_COLORS[s-1]}80`,
          transition:'width 0.1s linear, background 0.5s ease' }} />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   StatItem
───────────────────────────────────────────────────────────────────────────── */
function StatItem({ count, suffix, label, icon }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const val = useCounter(count, 2000, inView)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold:0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="text-xl font-black text-slate-900 leading-none">{val}{suffix}</div>
        <div className="text-xs text-slate-400 font-medium">{label}</div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   HeroCard — the glass wrapper around VideoShowcase
───────────────────────────────────────────────────────────────────────────── */
function HeroCard() {
  return (
    <motion.div
      initial={{ opacity:0, y:40, scale:0.96 }}
      animate={{ opacity:1, y:0, scale:1 }}
      transition={{ duration:0.85, delay:0.3, ease:[0.22,1,0.36,1] }}
      className="relative w-full"
      style={{ maxWidth:600 }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 pointer-events-none"
        style={{ background:'linear-gradient(135deg,#3b82f6,#7c3aed)',
          borderRadius:24, transform:'scale(0.9) translateY(22px)' }} />

      {/* Glass card */}
      <motion.div
        whileHover={{ y:-7, boxShadow:'0 32px 80px rgba(59,130,246,0.22),0 0 0 1px rgba(255,255,255,0.1)' }}
        transition={{ duration:0.3 }}
        style={{ borderRadius:18, padding:16,
          background:'linear-gradient(145deg,#172D47,#0f1e35)',
          border:'1px solid rgba(255,255,255,0.12)',
          backdropFilter:'blur(12px)',
          boxShadow:'0 20px 60px rgba(0,0,0,0.3),0 0 0 1px rgba(255,255,255,0.04)' }}
      >
        {/* Browser chrome */}
        <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:12, padding:'0 2px' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => (
            <div key={c} style={{ width:9, height:9, borderRadius:'50%', background:c }} />
          ))}
          <div style={{ flex:1, margin:'0 8px' }}>
            <div style={{ height:18, borderRadius:20, background:'rgba(255,255,255,0.06)',
              display:'flex', alignItems:'center', justifyContent:'center',
              color:'rgba(255,255,255,0.3)', fontSize:9, fontWeight:500 }}>
              jkcloudtech.com
            </div>
          </div>
          <div style={{ width:12, height:12, borderRadius:3, background:'rgba(255,255,255,0.07)' }} />
        </div>

        {/* Animated showcase */}
        <VideoShowcase />

        {/* Footer */}
        <div style={{ marginTop:12, padding:'0 2px',
          display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ color:'rgba(255,255,255,0.3)', fontSize:10, fontWeight:500 }}>
            Your Digital Growth Partner
          </span>
          <div style={{ display:'flex', alignItems:'center', gap:5 }}>
            <motion.div animate={{ opacity:[1,0.2,1] }} transition={{ duration:1.6, repeat:Infinity }}
              style={{ width:6, height:6, borderRadius:'50%', background:'#4ade80',
                boxShadow:'0 0 6px #4ade80' }} />
            <span style={{ color:'rgba(255,255,255,0.28)', fontSize:9 }}>Live Preview</span>
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
        transition={{ delay:1.1, duration:0.4 }}
        className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2
                   bg-white rounded-2xl shadow-xl px-3 py-2 border border-slate-100"
      >
        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
          style={{ background:'#eff6ff' }}>🏆</div>
        <div>
          <div className="text-xs font-black text-slate-900 leading-none">200+</div>
          <div style={{ fontSize:9 }} className="text-slate-400">Projects</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
        transition={{ delay:1.3, duration:0.4 }}
        className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2
                   bg-white rounded-2xl shadow-xl px-3 py-2 border border-slate-100"
      >
        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
          style={{ background:'#f0fdf4' }}>⭐</div>
        <div>
          <div className="text-xs font-black text-slate-900 leading-none">100%</div>
          <div style={{ fontSize:9 }} className="text-slate-400">Satisfaction</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero (page section)
───────────────────────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="home" className="bg-white py-10 lg:py-16 overflow-x-clip">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity:0, x:-40 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-500 tracking-[3px] uppercase">
                Innovate • Build • Grow
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] mb-5">
              Digital Solutions<br />
              <span className="gradient-text">That Drive Growth</span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              We help businesses transform ideas into powerful digital experiences
              with cutting-edge technology and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <motion.a href="#services" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="btn-primary">
                Explore Services <FaArrowRight className="text-sm" />
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="btn-outline">
                Contact Us <FaHeadset className="text-sm" />
              </motion.a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              {[
                { count:200, suffix:'+', label:'Projects Done',    icon:'🏆' },
                { count:100, suffix:'%', label:'Satisfaction',     icon:'❤️' },
                { count:100, suffix:'+', label:'Happy Clients',    icon:'👥' },
                { count:5,   suffix:'+', label:'Years Experience', icon:'🚀' },
              ].map(s => <StatItem key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* Right: animated showcase card */}
          <div className="flex items-center justify-center lg:justify-end">
            <HeroCard />
          </div>

        </div>
      </div>
    </section>
  )
}
