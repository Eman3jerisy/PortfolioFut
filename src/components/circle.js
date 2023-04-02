import img from './../img/meter3.svg'
function Circle(props) {
    const  {num , heading } = props

  return (
    <div>
        <div >
        <div className="relative text-white w-[70%]">
            {/* <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-black text-[32px] font-bold text-white">{num}%</p> */}
            <img src={img} alt="Logo" />
        </div>
        <p className=" text-black text-[16px] font-bold text-center text-white mt-4">{heading}</p>
       </div>
    </div>
  )
}

export default Circle;




