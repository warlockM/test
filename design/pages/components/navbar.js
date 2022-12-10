import Link from 'next/link'
import Image from 'next/image';
export default function Navbar() {
    return (
      <div class="flex flex-wrap place-content-center space-x-5 bg-blue-300">
        <div class="shrink-0 mt-1">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={80} height={25} />
          </Link>
          </div>
          <div class="flex flex-wrap">
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/">Home</Link>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/about">About</Link>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/service">Services</Link>
          <Link class="p-3 hover:bg-[#1E3888] hover:text-white" href="/treatment">Treatment</Link>
          {/* <a href="/api/auth/login">Login</a> */}
          </div>
      </div>
    );
}