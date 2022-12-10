export default function Stats(props){
    return (
      <div class="p-5 rounded-md flex flex-wrap place-content-center">
        <div class="text-3xl  text-center font-extrabold p-2 bg-clip-text text-transparent 
        bg-gradient-to-r from-pink-500 to-violet-500">{props.stat}</div>
        <div class="text-xl p-2 font-bold">{props.text}</div>
      </div>
    );
}