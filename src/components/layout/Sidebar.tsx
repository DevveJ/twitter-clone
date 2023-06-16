import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

export default function Sidebar() {
  const { data: currentUser } = useCurrentUser()

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/'
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true
    }
  ]

  return (
    <div className='col-span-1 h-full pr-2 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map(({ auth, href, icon, label }) => (
            <SidebarItem
              key={href}
              auth={auth}
              href={href}
              label={label}
              icon={icon}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label='Logout'
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}
