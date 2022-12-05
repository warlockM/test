import Head from 'next/head'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {

  function onClickHandler() {
    const key = 'https://api.airtable.com/v0//CustomerInterest/'
    console.log(key);
    console.log('\$process.env.AIRTABLE_API_KEY');
  }

  return (
    <div class="container">
      <Head>
        <title>Heal 100</title>
        <meta name="description" content="Heal100" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1
        className="text-5xl text-[#1E3888] font-bold m-20 text-center 
      letter-spacing: -0.05em underline decoration-wavy decoration-slate-100"
      >
        Empowering Minds, Transforming Lives
      </h1>
      <div class="mx-auto bg-slate-100 p-11  relative rounded-md">
        <h3 class="text-slate-500 text-center text-2xl">
          Heal100 is an Initiative that cater to the allround development of
          young children<span class="block"></span> and address their mental
          wellness needs
        </h3>
        <div class="m-10 flex place-content-center space-x-6 text-xl font-bold text-[#1E3888]">
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
            <button onClick={onClickHandler}
              class="bg-slate-200 text-slate-700 text-sm p-4 shadow-md shadow-slate-500 font-bold tracking-wide
           border-black border-1 pr-7 pl-7 rounded-lg"
            >
              Learn more
            </button>
          </Link>
          <Link href="/connect">
            <button
              class="bg-blue-900 text-white text-sm p-4 shadow-md shadow-slate-500 font-bold 
          tracking-wide pr-7 pl-7 rounded-lg"
            >
              Connect with us
            </button>
          </Link>
        </div>
      </div>

      <p class="place-content-center text-3xl text-[#1E3888] font-bold mb-8 mx-auto mt-28 text-center letter-spacing: -0.05em underline decoration-wavy decoration-slate-100 offset-8">
        Stress is not going anywhere, <span class="block"></span>but we can be
        better prepared!
      </p>
      <div class="flex space-x-8 p-7 bg-slate-100  relative rounded-md">
        <p class="text-2xl text-slate-500">
          Studies show that a stressed student is 73% likely to underperform if they are stressed. We aim to offer services that 
          enhances a student's coping mechanism and help them to be more resilient to stress. Lorem ipsum
        </p>
        <Image
          src="/School.jpg"
          alt="connect"
          class="rounded-md"
          width={300}
          height={300}
        />
        <div />
      </div>
      <Footer />
    </div>
  );
}
