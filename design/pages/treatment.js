import Footer from './components/footer';
import Navbar from './components/navbar';
import ChildCounseling from './components/childcounseling';

export default function Treatment() {
    return (
      <div>
        <Navbar />
        <div class="flex">
          <div class="container w-1/6 bg-slate-300 p-4 overscroll-none h-y-screen">
            <ul class="p-4">
              <li class="p-4 hover:bg-sky-700 hover:text-white">
                Child Counseling
              </li>
              <li class="p-4 hover:bg-sky-700 hover:text-white">
                Family Therapy
              </li>
              <li class="p-4 hover:bg-sky-700 hover:text-white">Anxiety</li>
              <li class="p-4 hover:bg-sky-700 hover:text-white">Depression</li>
              <li class="p-4 hover:bg-sky-700 hover:text-white">Some Jargon</li>
              <li class="p-4 hover:bg-sky-700 hover:text-white">
                Career Counseling
              </li>
            </ul>
          </div>
          <div class="container w-5/6 bg-slate-150 p-4 overscroll-none">
            <ChildCounseling />
          </div>
        </div>
        <Footer />
      </div>
    );
}