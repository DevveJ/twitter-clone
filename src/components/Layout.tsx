import FollowBar from './layout/FollowBar'
import Sidebar from './layout/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='h-screen bg-black'>
      <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
        <div className='grid grid-cols-5 lg:grid-cols-4 h-full'>
          <Sidebar />
          <main className='col-span-4 lg:col-span-2 border-x border-neutral-800'>
            {children}
          </main>
          <FollowBar />
        </div>
      </div>
    </div>
  )
}
