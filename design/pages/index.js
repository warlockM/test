import Head from 'next/head'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
import Image from 'next/image';
import Review from './components/reviews';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Heal 100</title>
        <meta name="description" content="Heal100" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <h1
        className="text-5xl text-[#1E3888] font-bold m-20 text-center 
      letter-spacing: -0.05em underline decoration-wavy decoration-slate-100"
      >
        Empowering Minds, Transforming Lives
      </h1>
      <div class="flex flex-wrap items-center justify-center relative rounded-md bg-gradient-to-r from-blue-200 to-purple-100">
        <Image
          src="/Family.jpg"
          width={400}
          height={400}
          class="shrink-0 m-10"
        />
        <div>
          <h3 class="text-[#1E3888] text-center text-2xl">
            Heal100 is an Initiative that cater to the allround development of
            young children<span class="block"></span> and address their mental
            wellness needs
          </h3>

          <div class="m-10 flex flex-wrap place-content-center space-x-6 text-xl font-bold text-[#1E3888]">
            <div>Counseling</div>
            <div>▪</div>
            <div>Therapy</div>
            <div>▪</div>
            <div>Wellness</div>
            <div>▪</div>
            <div> Lifeskill</div>
          </div>
          <div class="flex place-content-center space-x-3">
            <Link href="">
              <button
                class="bg-slate-200 text-slate-700 text-sm p-4 shadow-md shadow-slate-500 font-bold tracking-wide
           border-black border-1 pr-7 pl-7 rounded-lg hover:bg-white"
              >
                Learn more
              </button>
            </Link>
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

      <p class="place-content-center text-3xl text-[#1E3888] font-bold mb-8 mx-auto mt-28 text-center letter-spacing: -0.05em underline decoration-wavy decoration-slate-100">
        Stress is not going anywhere, <span class="block"></span>but we can be
        better prepared!
      </p>
      <div class="flex flex-wrap space-x-8 p-7 bg-slate-100 rounded-md bg-gradient-to-r from-purple-200 to-blue-100">
        <p class="text-2xl text-slate-800 m-20">
          Studies show that a stressed student is 73% likely to underperform if
          they are stressed. We aim to offer services that enhances a student's
          coping mechanism and help them to be more resilient to stress. Lorem
          ipsum
        </p>
        <div class="shrink-0">
          <Image
            src="/School.jpg"
            alt="connect"
            class="rounded-md m-10"
            width={300}
            height={300}
          />
        </div>
        <div />
      </div>
      <h1 class="text-5xl text-center">Schools in conversations with</h1>
      <div class="flex flex-wrap place-content-center place-content-center bg-slate-100 relative">
        <Image src="/School.jpg" width={200} height={200}/><br/>
        <Image src="/School.jpg" width={200} height={200}/><br/>
        <Image src="/School.jpg" width={200} height={200}/><br/>
        <Image src="/School.jpg" width={200} height={200}/><br/>
      </div>
      <div class="flex place-content-center">
        <Review />
      </div>
      <Footer />
    </div>
  );
}
