import { FiPackage, FiShoppingCart, FiDatabase } from 'react-icons/fi'

const desktopApps = [
  {
    icon: FiPackage,
    color: '#6C63FF',
    title: 'Inventory Management System',
    desc: 'A comprehensive business inventory and stock tracking system for monitoring products, stock levels and business operations.',
    features: ['Product Management', 'Stock Tracking', 'Low Stock Alerts', 'Sales Reporting', 'Multi-user Access'],
  },
  {
    icon: FiShoppingCart,
    color: '#FF6B6B',
    title: 'Dhrone Tech POS System',
    desc: 'A retail point of sale platform with inventory management, sales analytics and transaction management.',
    features: ['Point of Sale', 'Inventory Management', 'Sales Analytics', 'Transaction History', 'Customer Management'],
  },
]

const apis = [
  {
    icon: FiDatabase,
    color: '#FFD93D',
    title: 'Task Manager RESTful API',
    desc: 'A secure REST API with authentication, CRUD operations and protected routes for task management.',
    features: ['JWT Authentication', 'RESTful Endpoints', 'Protected Routes', 'MongoDB Integration', 'Input Validation'],
  },
]

export default function AppsPage() {
  return (
    <div className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Software</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-4">
            Apps & <span className="text-gradient-violet">Systems</span>
          </h1>
          <p className="text-textMuted max-w-xl">Powerful desktop and mobile applications built to streamline business operations.</p>
        </div>

        {/* Desktop Apps */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-textPrimary mb-6 flex items-center gap-3">
            <span className="w-1 h-6 rounded-full bg-violet" />
            Desktop Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {desktopApps.map((app) => (
              <div key={app.title} className="card p-6 overflow-hidden">
                <div className="h-0.5 -mx-6 -mt-6 mb-6" style={{ backgroundColor: app.color }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${app.color}20` }}>
                  <app.icon size={24} style={{ color: app.color }} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">{app.title}</h3>
                <p className="text-sm text-textMuted mb-5 leading-relaxed">{app.desc}</p>
                <ul className="space-y-2">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-textMuted">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* APIs */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-textPrimary mb-6 flex items-center gap-3">
            <span className="w-1 h-6 rounded-full bg-coral" />
            API Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apis.map((api) => (
              <div key={api.title} className="card p-6 overflow-hidden">
                <div className="h-0.5 -mx-6 -mt-6 mb-6" style={{ backgroundColor: api.color }} />
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${api.color}20` }}>
                  <api.icon size={20} style={{ color: api.color }} />
                </div>
                <h3 className="font-bold text-textPrimary mb-2">{api.title}</h3>
                <p className="text-sm text-textMuted mb-4 leading-relaxed">{api.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {api.features.map((f) => (
                    <span key={f} className="pill text-xs">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '2+', label: 'Desktop Apps' },
            { value: '5+', label: 'APIs Built' },
            { value: '100+', label: 'Endpoints' },
            { value: '99.9%', label: 'Uptime' },
          ].map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <p className="text-2xl font-extrabold text-gradient-violet mb-1">{s.value}</p>
              <p className="text-xs text-textMuted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}