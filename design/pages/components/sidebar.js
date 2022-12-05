import Link from "next/link";

export default function Sidebar(){
    
    return (
        <div class="container w-1/6 bg-slate-300 p-4 h-y-screen">
            <ul class="p-4">
              <Link href="/components/treatment/childcounseling"><li class="p-4 hover:bg-sky-700 hover:text-white">
                Child Counseling
              </li></Link>
              <Link href="/components/treatment/familytherapy"><li class="p-4 hover:bg-sky-700 hover:text-white">
                Family Therapy
              </li></Link>
              <Link href="/components/treatment/anxiety"><li class="p-4 hover:bg-sky-700 hover:text-white">Anxiety</li></Link>
              <Link href="/components/treatment/depression"><li class="p-4 hover:bg-sky-700 hover:text-white">Depression</li></Link>
              <Link href="/components/treatment/familytherapy"><li class="p-4 hover:bg-sky-700 hover:text-white">Some Jargon</li></Link>
              <Link href="/components/treatment/familytherapy"><li class="p-4 hover:bg-sky-700 hover:text-white">Career Counseling</li></Link>
            </ul>
       </div>
    );
}