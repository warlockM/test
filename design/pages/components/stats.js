import Image from "next/image";
export default function Stats(props){
    return (
      <div class="bg-slate-200 h-{200} shadow-md p-5 rounded-md flex flex-wrap place-content-center">
        <h1 class="text-3xl text-center font-extrabold p-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{props.stat}</h1>
        <p class="text-xl p-4 font-bold">{props.text}</p>
        <Image src={props.img} alt={props.alt} width={200} height={100}/>
      </div>
    );
}