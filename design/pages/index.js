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
        class="text-5xl font-bold m-10 text-center 
      letter-spacing: -0.05em"
      >
        <span class="bg-clip-text text-slate-800">
          Empowering Minds, Transforming Lives
        </span>
      </div>
      <div class="flex flex-wrap items-center justify-center relative rounded-md ">
        <div class="m-10">
          <h3 class="text-slate-500 text-center text-xl mt-10">
            Heal100 is an Initiative that cater to the allround development of
            young children<span class="block"></span> and address their mental
            wellness needs.
          </h3>

          <div class="m-10 flex flex-wrap place-content-center space-x-6 text-xl font-bold text-slate-500">
            <span>
              Counseling
            </span>
            <div>▪</div>
            <span>
              Therapy
            </span>
            <div>▪</div>
            <span>
              Wellness
            </span>
            <div>▪</div>
            <span>
              Lifeskill
            </span>
          </div>
          <div class="flex place-content-center space-x-3">

            <Link href="/connect">
              <button
                class="bg-blue-700 text-white text-sm p-4 shadow-md shadow-slate-500 font-bold 
          tracking-wide pr-7 pl-7 rounded-lg hover:bg-blue-900"
              >
                Upgrade Your School
              </button>
            </Link>
          </div>
        </div>
      </div>
      
        <h1 class="text-4xl text-center mt-10 mb-20">
        Stress is not going anywhere,<span class="block">
          but we can help you manage it.
        </span>
      </h1>
      <div class="grid grid-cols-3 auto-cols-max place-content-center m-10">
        <div class="p-4">
          <Stats stat="500+" text="Happy Clients" img="/logo.png"/>
        </div>
        <div class="p-4">
          <Stats stat="2000+" text="Counselings Done" img="/logo.png"/>
        </div>
        <div class="p-4">
          <Stats stat="100+" text="Awareness Sessions" img="/logo.png"/>
        </div>
        <div class="p-4">
          <Stats stat="200+" text="Public Appearances" img="/logo.png"/>
        </div>
        <div class="p-4">
          <Stats stat="200+" text="Public Appearances" img="/logo.png"/>
        </div>
        <div class="p-4">
          <Stats stat="200+" text="Public Appearances" img="/logo.png"/>
        </div>
      </div>
      <h1 class="text-4xl text-center mt-10 mb-20">
        Schools in conversation with
      </h1>
      <div class="flex flex-wrap place-content-center space-x-8">
        <Image src="/School.jpg" width={300} height={300} class="shrink-0" />
        <br />
        <Image src="/School.jpg" width={300} height={300} class="shrink-0" />
        <br />
        <Image src="/School.jpg" width={300} height={300} class="shrink-0" />
        <br />
        <Image src="/School.jpg" width={300} height={300} class="shrink-0" />
        <br />
      </div>
      <div class="m-10 flex flex-wrap place-content-center">
        <Review />
      </div>
      <Footer />
    </div>
  );
}
