import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between">
      <Image alt="Guide me right" height={80} width={80} src="/logo.svg" />
    </header>
  )
}

export default Header