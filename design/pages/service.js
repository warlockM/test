import Footer from './components/footer';
import Navbar from './components/navbar';
import Card from './components/card';
import Link from 'next/link';

export default function Services() {
    return (
      <div>
        <Navbar />
        <div class="flex space-x-8 mx-auto place-content-center m-20">
          <Card          
            heading="Exam Stress Management"
            description="For children under the age of 18"
            image="/laugh.jpg"
          />
          <Card
            heading="Teacher Training"
            description="For children and their parents"
            image="/laugh.jpg"
          />
        </div>
        <div class="flex space-x-8 mx-auto place-content-center m-20">
          <Card
            heading="Wellness Sessions"
            description="For general awareness and community building"
            image="/laugh.jpg"
          />
          <Card
            heading="Coping Improvement"
            description="To create a more positive and healthy mindset"
            image="/laugh.jpg"
          />
        </div>
        <div class="flex space-x-8 mx-auto place-content-center m-20">
          <Card
            heading="Parenting Workshops"
            description="For parents to learn and understand their children better"
            image="/laugh.jpg"
          />
          <Card
            heading="Career Guidance"
            description="To unlock full potential and help children find their passion"
            image="/laugh.jpg"
          />
          
        </div>
        <div class="flex space-x-8 mx-auto place-content-center m-20">
        <Link href="/connect">
              <button
                class="bg-blue-700 text-white text-sm p-4 shadow-md shadow-slate-500 font-bold 
          tracking-wide pr-7 pl-7 rounded-lg hover:bg-blue-900"
              >
                Start Upgrading Your School!
              </button>
            </Link>
          </div>
        
        <Footer />
      </div>
    );
}