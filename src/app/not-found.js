import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">Page Not Found</p>
        <p className="text-xl text-gray-500 mt-4">The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 block">
          Go back to the CS222 homepage
        </a>
      </div>
    </div>
  )
}