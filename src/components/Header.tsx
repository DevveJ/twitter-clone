import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

export default function Header({ label, showBackArrow }: HeaderProps) {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <div className='border-b border-neutral-800 p-5'>
      <div className='flex flex-row items-center gap-2'>
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color='white'
            size={20}
            className='cursor-pointer hover:opacity-70 transition'
          />
        )}
        <h1 className='text-xl font-semibold'>{label}</h1>
      </div>
    </div>
  )
}
