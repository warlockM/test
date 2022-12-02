import Navbar from './components/navbar';
import Footer from './components/footer';

export default function AboutUs() {
    return (
      <div class="container m-auto">
        <Navbar />
        <h1 class="text-center text-3xl font-bold pt-8">Who are we?</h1>
        <div class="flex space-x-7">
        
          <div class="p-4 bg-slate-200 shadow-lg m-20 float-left">
            The School Mental Health Initiative is
            a comprehensive online platform designed to help schools, educators,
            and parents support the mental health of students. Our goal is to
            provide school-based mental health resources, tools, and best
            practices to ensure that all students have access to the support
            they need. Additionally, our website provides resources for
            educators to better understand mental health issues, as well as
            strategies to help support their students’ emotional wellbeing. 
            <span class="float-left h-48 w-48"><img src="../images/about.jpg"/></span>
          </div>
          
          </div>
          <p class="text-sm m-20">
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
        
        
          <p class="text-s">
            Mayank is an engineer and co-founder of the School Mental Health
            Initiative. He has a passion for making a positive impact in the
            lives of young people and has dedicated his career to doing so. He
            has extensive experience in software development and operations,
            having worked in the tech industry prior to founding heal100. Mayank
            is also a strong advocate for mental health awareness and strives to
            create an open, supportive environment to enable people to reach
            their full potential. He is an innovative leader and passionate
            about creating effective solutions to promote mental health and
            well-being in educational settings.
          </p>
          <Footer />
      </div>
    );
}