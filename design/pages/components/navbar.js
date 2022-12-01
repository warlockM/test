import Link from 'next/link'
export default function Navbar() {
    return (
    <div class="flex place-content-center space-x-8 bg-slate-100 p-5 shadow-lg rounded-md font-bold text-[#1E3888] w-screen">
          <div><Link href = "/">Home</Link></div>
          <div><Link href = "about">About</Link></div>
          <div><Link href = "service">Services</Link></div>
          <div><Link href = "treatment">Treatment</Link></div>
          </div>
    )
}