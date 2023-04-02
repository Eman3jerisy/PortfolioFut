import contactimg from "./../img/logo.svg"
import Input from "./inputs";
import Btn from "./Btn";
function Footer() {
  return (
    <footer className=" pb-[1.5rem] pt-[3rem] md:pt-[6rem] px-[3rem] relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:justify-center md:justify-between mb-3">
            <div className="mb-3">
                <img src={contactimg} alt="LOgo" className=" max-[760px]:m-auto mb-3"></img>
            </div>
            {/* Icon */}
            <div class=" flex  items-center sm:justify-center text-center max-[760px]:m-auto mb-3">
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-facebook'></i></a>
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-twitter'></i></a>
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-instagram'></i></a>
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-pinterest'></i></a>
    </div>

        </div>
        <p className="text-white text-[12px] text-center md:text-right">--copyright 2016 @All right reversed here by Amera Raed Naser Abo Aoudeh </p>
    </footer>
  )
}

export default Footer;