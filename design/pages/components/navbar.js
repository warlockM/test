import Link from 'next/link'
import Image from 'next/image';
export default function Navbar() {
    return (
      <div class="flex place-content-center space-x-8 bg-slate-100 shadow-lg rounded-md font-bold text-[#1E3888] text-xl mx-auto">
        <div class=" flex place-content-left">
          <Image src="/logo.png" alt="logo" width={100} height={20} />
          </div>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/">Home</Link>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/about">About</Link>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/service">Services</Link>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/treatment">Treatment</Link>
      </div>
    );
}