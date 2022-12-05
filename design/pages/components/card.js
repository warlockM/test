import Image from "next/image";
export default function Card(props){
  return (
    <div class="border-black border-r-2 rounded-lg p-4 hover:bg-slate-200">
      <h3 class="text-5xl text-center p-4 text-slate-700">{props.heading} →</h3>
      <p class="text-md text-center p-2 font-bold text-blue-500">{props.description}</p>
      <div class="p-4 flex place-content-center">
      <Image src={props.image} width={200} height={200} />
      </div>
    </div>
  );
}
