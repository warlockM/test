export default function Button(props){
  return <button
  class="m-4 bg-blue-900 text-white text-sm p-4 pr-7 pl-7 shadow-lg shadow-slate-500 font-bold tracking-wide rounded-lg"
  type="submit"
>
  {props.text}
</button>
}
