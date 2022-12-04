import Navbar from './components/navbar';
import Footer from './components/footer';
import Image from 'next/image';

export default function AboutUs() {
    return (
      <div class="container m-auto">
        <Navbar />
        <h1 class="text-center text-3xl font-bold pt-8">Who are we?</h1>
        <div class="flex space-x-7">
          <div class="p-4 bg-slate-200 shadow-lg m-20 float-left place-content-center">
            <span class="block float-left">
              <Image class="mr-20" src="/about.jpg" width={320} height={320} />
            </span>
            <p class="text-xl">
              The School Mental Health Initiative is a comprehensive online
              platform designed to help schools, educators, and parents support
              the mental health of students. Our goal is to provide school-based
              mental health resources, tools, and best practices to ensure that
              all students have access to the support they need. Additionally,
              our website provides resources for educators to better understand
              mental health issues, as well as strategies to help support their
              students’ emotional wellbeing.
            </p>
          </div>
        </div>
        <div class="p-4 bg-slate-200 shadow-lg m-20 float-left place-content-center">
          <span class="block float-right">
            <Image
              class="ml-20"
              src="/bhoomikamam.jpg"
              width={320}
              height={320}
            />
          </span>
          <p class="text-xl m-20">
            Dr. Bhoomika is a clinical psychologist with 10 years of experience
            in child mental health. She is an advocate for early intervention
            and prevention of mental health challenges in children. She
            specializes in treating anxiety, depression, ADHD, and other mental
            health issues in children. She has experience with a wide range of
            treatment modalities, including cognitive-behavioral therapy, play
            therapy, and family therapy. Dr. Bhoomika is passionate about
            helping families understand and navigate the complex challenges of
            parenting and mental health. She believes that with appropriate
            guidance and support, children can build resilience and lead
            fulfilling lives.
          </p>
        </div>
        <Footer />
      </div>
    );
}