import Footer from './components/footer';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Image from 'next/image';

export default function Treatment() {
    return (
      <div>
        <Navbar />
        <div class="flex">
          <Sidebar />
          <div class="container w-5/6 bg-slate-150 p-4">
          <p class="text-3xl p-5">Why treatment?</p>
            <Image class="p-5" src="/dep.jpeg" width={500} height={500} />
            <p class=" text-2xl p-5">Child mental health is important because a child's mental well-being is crucial to their overall health and development. 
              Children who have good mental health are better able to cope with the challenges of growing up, 
              learn and succeed in school, and form healthy relationships with others. Poor mental health, on the other hand, 
              can lead to a range of problems, including difficulty in school, substance abuse, and problems in relationships. 
              It's important for parents, caregivers, and others who work with children to be aware of the signs of potential 
              mental health issues and to seek help if needed. 
              By supporting a child's mental health, we can help them grow into happy, healthy adults.</p>            
          </div>
        </div>
        <Footer />
      </div>
    );
}