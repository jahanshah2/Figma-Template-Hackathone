import Cart from '@/app/components/Cart/Cart'
import { auth } from '@/auth'
import React from 'react'

const page = async () => {
  const session = await auth()
  return (
    <>
    <Cart session={session} />
    </>
  )
}

export default page