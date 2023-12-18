import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-b h-screen from-secondary to-[#232328]">
      <div className="justify-center items-center flex h-full">
        <Image alt="Guide me right" height={400} width={400} src="/logo.svg" />
      </div>
    </div>
  )
}
