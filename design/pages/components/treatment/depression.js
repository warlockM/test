import Navbar from "../navbar";
import Sidebar from "../sidebar";
import Image from "next/image";
import Footer from "../footer";

export default function Depression() {
  return (
    <div>
        <Navbar />
        <div class="flex">
          <Sidebar />
          <div class="container w-5/6 p-8 m-10">
            <h1 class="text-5xl mb-10">Welcome to Depression.</h1>
            <Image src="/laugh2.jpg" width={500} height={500} />
            <p class="text-xl mt-10">
              Child therapy consists of 4 sessions and 1 with parents to
              identify the bevioral issues with the child.
            </p>
          </div>
        </div>
        <Footer />
      </div>
  );
}