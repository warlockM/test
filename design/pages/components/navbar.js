import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
	let content
	function clickHandler(e, n) {
		e.preventDefault();
		if(n == 1) {
			content = <div>hello</div>
			console.log(n)
			n = 0
			console.log(n)
		}
		else{
			content = <div>bye</div>
		}
		}
    return (
      //   <div class="max-w-6xl mx-auto px-4">
      // 			<div class="flex justify-between">
      // 				<div class="flex space-x-7">
      // 					<div>
      // 						{/* <!-- Website Logo --> */}
      // 						<a href="#" class="flex items-center py-4 px-2">
      // 							<img src="logo.png" alt="Logo" class="h-8 w-20 mr-2"></img>
      // 						</a>
      // 					</div>
      // 					{/* <!-- Primary Navbar items --> */}
      // 					<div class="hidden md:flex items-center space-x-1">
      // 						<Link href="/" class="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold ">Home</Link>
      // 						<Link href="/service" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Services</Link>
      // 						<Link href="/about" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</Link>
      // 						<Link href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact Us</Link>
      // 					</div>
      // 				</div>
      // 				{/* <!-- Secondary Navbar items --> */}
      // 				<div class="hidden md:flex items-center space-x-3 ">
      // 					<Link href="" class="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300">Upgrade Your School</Link>
      // 				</div>
      // 				{/* <!-- Mobile menu button --> */}
      // 				<div class="md:hidden flex items-center">
      // 					<button class="outline-none mobile-menu-button">
      // 					<svg class=" w-6 h-6 text-gray-500 hover:text-blue-500"
      // 						x-show="!showMenu"
      // 						fill="none"
      // 						stroke-linecap="round"
      // 						stroke-linejoin="round"
      // 						stroke-width="2"
      // 						viewBox="0 0 24 24"
      // 						stroke="currentColor"
      // 					>
      // 						<path d="M4 6h16M4 12h16M4 18h16"></path>
      // 					</svg>
      // 				</button>
      // 				</div>
      // 			</div>
      //     <div class="hidden mobile-menu">
      // 			<ul class="">
      // 				<li><a href="index.html" class="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</a></li>
      // 				<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Services</a></li>
      // 				<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</a></li>
      // 				<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact Us</a></li>
      // 			</ul>
      // 		</div>
      // 		</div>
      <div>
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>

          <div class="hidden space-x-7 md:flex">
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
          </div>
          <div class="space-x-7 hidden md:flex">
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
          </div>
          <div class="md:hidden flex items-center">
            <button onClick={(e) => clickHandler(e, 1)}>
			<svg class=" w-6 h-6 text-gray-500 hover:text-blue-500"
      						x-show="!showMenu"
      						fill="none"
      						stroke-linecap="round"
      						stroke-linejoin="round"
      						stroke-width="2"
      						viewBox="0 0 24 24"
      						stroke="currentColor"
      					>
      						<path d="M4 6h16M4 12h16M4 18h16"></path>
      					</svg>
            </button>
          </div>
        </div>
		{content}
      </div>
    );
}