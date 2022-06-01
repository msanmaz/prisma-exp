import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Heading } from '@chakra-ui/react'

export default function Setup() {
  const { data: session } = useSession()
  const [name, setName] = useState('')
  if (!session || !session.user) return null

  return (
      <>
    <Heading>Set your username</Heading>
<form
      className='mt-10 ml-20'
    >
      <div className='flex-1 mb-5'>
        <div className='flex-1 mb-5'>Username</div>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border p-1'
        />
      </div>

      <button className='border px-8 py-2 mt-0 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover'>
        Save
      </button>
    </form>
      </>
   
  )
}