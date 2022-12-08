import Image from "next/image";
export default function Card(props){
  return (
    <div class="shadow-md rounded-lg p-4 bg-gradient-to-r from-blue-200 to-purple-100 m-10">
      <h3 class="text-4xl text-center p-4 text-slate-700">{props.heading} →</h3>
      <p class="text-md text-center p-2 font-bold text-blue-500">
        {props.description}
      </p>
      <div class="p-4 flex place-content-center">
        <Image src={props.image} width={200} height={200} />
      </div>
    </div>
  );
}
