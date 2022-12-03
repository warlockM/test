import Link from 'next/link'
import Image from 'next/image';
export default function Navbar() {
    return (
      <div class="flex place-content-center space-x-8 bg-slate-100 p-0 shadow-lg rounded-md font-bold text-[#1E3888] mx-auto">
        <div class="p-0">
          <Image src="/logo.png" alt="logo" width={200} height={100} />
        </div>
        <div class="mt-10">
          <Link href="/">Home</Link>
        </div>
        <div class="mt-10">
          <Link href="/about">About</Link>
        </div>
        <div class="mt-10">
          <Link href="/service">Services</Link>
        </div>
        <div class="mt-10">
          <Link href="/treatment">Treatment</Link>
        </div>
      </div>
    );
}