import Image from "next/image";
export default function ChildCounseling(){
    return (
        <div class="container w-5/6 p-8 m-10">
            <h1 class="text-5xl mb-10">Welcome to treatment section.</h1>
            <Image src="/laugh2.jpg" width={500} height={500} />
            <p class="text-xl mt-10">Child therapy consists of 4 sessions and 1 with parents to identify the bevioral issues with the child.</p>
      </div>
    );
}