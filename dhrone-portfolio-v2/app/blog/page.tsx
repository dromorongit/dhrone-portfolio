import { FiEdit } from 'react-icons/fi'

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-violet/10 flex items-center justify-center mx-auto mb-6">
          <FiEdit size={28} className="text-violet" />
        </div>
        <h1 className="text-3xl font-extrabold text-textPrimary mb-3">Blog</h1>
        <p className="text-textMuted">Articles and insights are coming soon.</p>
      </div>
    </div>
  )
}