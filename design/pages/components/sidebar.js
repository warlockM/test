import Link from "next/link";

export default function Sidebar(){
    
    return (
        <div class="container w-1/6 bg-slate-300 overflow-y-scroll h-screen ">
            <ul class="p-4">
              <Link href="/components/treatment/childcounseling"><li class="p-4 hover:bg-sky-700 hover:text-white">
                Child Counseling
              </li></Link>
              <Link href="/components/treatment/familytherapy"><li class="p-4 hover:bg-sky-700 hover:text-white">
                Family Therapy
              </li></Link>
              <Link href="/components/treatment/anxiety"><li class="p-4 hover:bg-sky-700 hover:text-white">Anxiety</li></Link>
              <Link href="/components/treatment/depression"><li class="p-4 hover:bg-sky-700 hover:text-white">Depression</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Obsessive Compulsive Disorder</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Autism</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Mental Retardation</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Learning Difficulty/Disorder</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Emotional and Behavioral Disorder</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Conduct Disorder</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Attention Deficit Hyperactivity Disorder (ADHD)</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Internet addiction</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Bipolar disorder</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Obsessive Compulsive Disorder</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Sleep Problems</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Poor Concentration</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">School Refusal</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Child Abuse</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Adolescent Conflicts</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Relationship Problems</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Anger Outburst</li></Link>
              <Link href="/components/treatment/"><li class="p-4 hover:bg-sky-700 hover:text-white">Parental Conflicts</li></Link>
            </ul>
       </div>
    );
}