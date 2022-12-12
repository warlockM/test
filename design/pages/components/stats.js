export default function Stats(props){
    return (
      <div class="m-10 p-5 rounded-md flex flex-wrap place-content-center shadow-md">
        <div
          class="text-5xl  text-center font-extrabold p-2 bg-clip-text text-transparent 
        bg-gradient-to-r from-pink-500 to-violet-500"
        >
          {props.stat}
        </div>
        <div class="text-xl p-2 mt-2 font-bold">{props.text}</div>
      </div>
    );
}