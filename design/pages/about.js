import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';

export default function AboutUs() {
    return (
      <div>
        <Navbar />
        <div class="text-5xl sm:text-3xl font-bold m-10 text-center letter-spacing: -0.05em">
        <span class="text-3xl lg:text-5xl text-slate-500">
          Who are we?
        </span>
      </div>
        <div class="grid grid-cols-1 md:flex  place-content-center m-10 mx-auto">
          <div class="place-content-center m-10 p-5">
            <p class="text-xl">
              The School Mental Health Initiative is a comprehensive online
              platform designed to help schools, educators, and parents support
              the mental health of students. Our goal is to provide school-based
              mental health resources, tools, and best practices to ensure that
              all students have access to the support they need. Additionally, our
              website provides resources for educators to better understand mental
              health issues, as well as strategies to help support their students’
              emotional wellbeing.
            </p>
          </div>
          <div class="shrink-0 place-content-center m-10">
            <Image src="/School.jpg" width={400} height={400} class=""/>
          </div>
        </div>
        
          <div class="text-5xl sm:text-3xl font-bold m-10 text-center letter-spacing: -0.05em">
        <span class="text-3xl lg:text-5xl text-slate-500">
          Meet Our Director
        </span>
        
        </div>
        <div class="grid grid-cols-1 md:flex bg-gradient-to-r from-blue-200 to-purple-100 place-content-center">
          <div class="shrink-0 place-content-end">
          <Image src="/bhoomikamam.jpg" width={400} height={400} class="p-4"/>
          </div>
          <div class="m-10">
            <p class="text-xl">
            She is a clinical psychologist with 10 years of experience
            in child mental health. She is an advocate for early intervention
            and prevention of mental health challenges in children. She
            specializes in treating anxiety, depression, ADHD, and other mental
            health issues in children. She has experience with a wide range of
            treatment modalities, including cognitive-behavioral therapy, play
            therapy, and family therapy. Dr. Bhoomika is passionate about
            helping families understand and navigate the complex challenges of
            parenting and mental health. She believes that with appropriate
            guidance and support, children can build resilience and lead
            fulfilling lives.</p></div>
        </div>
        <Footer />
      </div>
    );
}