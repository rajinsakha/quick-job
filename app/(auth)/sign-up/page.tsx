import SignUpForm from '@/components/form/SignUpForm'
import Logo from '@/components/ui/logo'

import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
    <div className="flex justify-center gap-2 md:justify-start">
      <Link href="/" className="flex items-center gap-2 font-medium">
      <Logo />
      </Link>
    </div>
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <SignUpForm />
      </div>
    </div>
    </div>
  )
}

export default SignUp