function Btn(props) {
    const  {txt } = props

  return (
    <div> 
        <button className="w-[120px] h-[50px] bg-white text-black font-bold rounded-lg hover:border-[1px] mb-3 hover:border-black">{txt}</button>
    </div>
  )
}

export default Btn;




