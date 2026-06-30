import { FaCircleCheck } from 'react-icons/fa6'

const items = [
  'Web Development','Cloud Solutions','UI/UX Design','SEO Optimization',
  'E-Commerce','API Integration','Admin Dashboards','Mobile Responsive',
  'Web Development','Cloud Solutions','UI/UX Design','SEO Optimization',
  'E-Commerce','API Integration','Admin Dashboards','Mobile Responsive',
]

export default function MarqueeStrip() {
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{ background: 'linear-gradient(135deg, #1a56db, #7c3aed)', marginTop: '68px' }}
    >
      <div className="flex animate-marquee w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-white/80 text-sm font-medium
                       px-8 border-r border-white/20 last:border-0 whitespace-nowrap"
          >
            <FaCircleCheck className="text-white/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
