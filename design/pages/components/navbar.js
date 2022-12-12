import Link from 'next/link'
import Image from 'next/image';
export default function Navbar() {
    return (
      <div class="flex flex-wrap place-content-center space-x-5 shadow-sm rounded-md text-[#1E3888] text-md lg:text-lg font-bold mx-auto">
        <div class="shrink-0">
        <Link href="/"><Image src="/logo.png" alt="logo" width={80} height={30}/></Link>
          </div>
          <div class=" flex flex-wrap">
          <Link class="p-2 hover:bg-[#1E3888] hover:text-white" href="/">Home</Link>
          <Link class="p-2 hover:bg-[#1E3888] hover:text-white" href="/about">About</Link>
          <Link class="p-2 hover:bg-[#1E3888] hover:text-white" href="/service">Services</Link>
          <Link class="p-2 hover:bg-[#1E3888] hover:text-white" href="/treatment">Treatment</Link>
          </div>
      </div>
    );
}