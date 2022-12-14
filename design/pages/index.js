import Head from 'next/head'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
import Image from 'next/image';
import Review from './components/reviews';
import Stats from './components/stats';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Heal 100</title>
        <meta name="description" content="Heal100" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <div
        class="text-3xl sm:text-5xl lg:text-8xl font-bold m-10 text-center">
        <span class="bg-clip-text text-slate-800">
          Empowering Minds, Transforming Lives
        </span>
      </div>

      <div class="flex flex-wrap items-center justify-center relative rounded-md ">
        <div class="m-10">

          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="laugh.jpg" alt="Modern building architecture"></img>
          </div>
        <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Heal100 - The complete wellness solution</div>
            <p class="text-xl md:text-3xl block mt-1 leading-tight font-medium text-black">Nurturing Minds For Future</p>
            <p class="mt-2 text-slate-500">Heal100 is an Initiative that cater to the allround development of
            young children<span class="block"></span> and address their mental
            wellness needs.</p>
          </div>
        </div>
      </div>
          <div class=" m-10 flex place-content-center space-x-3 ">

            <Link href="/connect">
              <button
                class="bg-blue-700 text-white text-sm p-4 shadow-md shadow-slate-500 font-bold tracking-wide pr-7 pl-7 rounded-lg hover:bg-blue-900">
                Upgrade Your School
              </button>
            </Link>
          </div>
        </div>
      </div>
      
        <h1 class="text-4xl text-center mt-10 mb-10">
        Stress is not going anywhere,<span class="block">
          but we can help you manage it.
        </span>
      </h1>

      <div class="grid grid-cols-1 md:grid md:grid-cols-2">
        <Stats stat="1000+" text="Therapy Sessions"/>
        <Stats stat="50+" text="Public Appearances"/>
        <Stats stat="20+" text="Schools Visited"/>
        <Stats stat="1000+" text="Happy Minds"/>

      </div>

      <div class="m-10">
        <Review />
      </div>
      
      <h1 class="text-4xl text-center mt-10 mb-10">
        Have Queries?<span class="block">
          You can reach us at:
        </span>
      </h1>
      <div class="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-1 m-10 text-2xl font-bold bg-sky-200 shadow-md">
        <h1 class="text-center">+91 987-654-3210</h1>
        <h1 class="text-center">heal100@gmail.com</h1>
      </div>
      <Footer />
    </div>
  );
}
