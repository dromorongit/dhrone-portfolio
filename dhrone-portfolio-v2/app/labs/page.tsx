import { FiZap } from 'react-icons/fi'

export default function LabsPage() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-6">
          <FiZap size={28} className="text-coral" />
        </div>
        <h1 className="text-3xl font-extrabold text-textPrimary mb-3">Labs</h1>
        <p className="text-textMuted">Experimental projects and experiments are coming soon.</p>
      </div>
    </div>
  )
}