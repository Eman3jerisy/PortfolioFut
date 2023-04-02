import contactimg from "./../img/contact-img.svg"
import Input from "./inputs";
import Btn from "./Btn";
function Contact() {
  return (
    <div className="bg-gradient-to-l from-purple-500 to-pink-500 p-[4rem] pb-[10rem]">
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="img">
                <img src={contactimg} alt="Img"></img>
            </div>
            <div className="form w-full">
                <h1 class="mb-[15px] font-bold text-white text-[38px]">Get In Touch</h1>
                <form className="md:w-[87%]">
                   <div className="md:flex gap-3">
                   <Input txt="First Name"/>
                   <Input txt="Last Name"/>
                   </div>
                   <div className="md:flex gap-3">
                   <Input txt="Email"/>
                   <Input txt="Phone No."/>
                   </div>
                   <textarea  className="w-full h-[150px] border-2 border-white bg-[rgba(250,250,250,0.4)] mr-[4rem] rounded-[10px] text-white hover:bg-white hover:text-black focus:border-white focus:bg-white focus:text-black mb-3 flex justify-start" placeholder="Write message"></textarea>
                   <Btn txt="Send"/>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact;