function Input(props) {
    const  {txt } = props

  return (
    <div>
        <input  className="w-full h-[50px] border-2 border-white bg-[rgba(250,250,250,0.4)] pl-2  md:mr-[4rem] rounded-[10px] text-white hover:bg-white hover:text-black focus:border-white focus:bg-white focus:text-black mb-3" placeholder={txt}></input>

    </div>
  )
}

export default Input;




