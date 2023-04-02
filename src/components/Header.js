import headerimg from "./../img/header-img.svg";
import arrow from "./../img/arrow.png"
import logo from "./../img/logo.svg"
import Btn from "./Btn";
// import {Link , NavLink } from "react-router-dom";

function Header() {
 
  return (
    <header classNameName="w-full h-full md:h-[100vh] bg-center bg-no-repeat bg-cover md:mb-0 mb-[2rem] relative pt-[8rem]">
       {/* Nav */}
       <nav
  class="relative flex w-full flex-nowrap items-center justify-between  py-2 text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start sticky bg-[#201f1f]"
  data-te-navbar-ref>
  <div class="flex w-full flex-wrap items-center justify-between px-6">
    <button
      class="order-2 ml-auto block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent3"
      aria-controls="navbarSupportedContent3"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>
    <a class=" flex items-center mt-2 lg:mt-0 mr-1 max-[990px]:items-start order-1" href="#">
        <a class="navbar-brand text-black text-[20px] font-bold" href="#"><img src={logo}></img></a>
      </a>
    <div
      class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto order-2"
      id="navbarSupportedContent3"
      data-te-collapse-item>
      <div class=" w-[100%]  flex justify-between items-center">
      <ul
        class="list-style-none lg:ml-auto flex flex-col pl-0 lg:flex-row  text-white justify-center items-center "
        data-te-navbar-nav-ref>

        <li class="md:px-2 mr-8" data-te-nav-item-ref>
        <a class="nav-link font-medium hover:font-bold p-0  active" href="#">Home</a>
        </li>
        <li class="md:px-2 mr-8" data-te-nav-item-ref>
        <a class="nav-link font-medium hover:font-bold p-0  active" href="#" >Skills</a>

        </li>
        <li class="md:px-2 mr-8" data-te-nav-item-ref>
        <a class="nav-link font-medium hover:font-bold p-0  active" href="#">Projects</a>
        </li>
        <li class="md:px-[3rem] " data-te-nav-item-ref>
             {/* Icon */}
     <div class=" flex  items-center sm:justify-center text-center max-[760px]:m-auto mb-3">
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-facebook'></i></a>
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-twitter'></i></a>
        <a href="#" class="w-[32px] h-[32px] text-white  border-white flex items-center justify-center rounded-full mr-2 border-[1px] hover:bg-white hover:text-black hover:border-black"><i class='bx bxl-instagram'></i></a>
    </div>
        </li>

        <li class="flex space-x-2 justify-center max-[990px]:hidden ml-auto">
          <Btn className="bg-[rgba(250,250,250,0.4)]"  txt="Let's contact"/>
        </li>
      </ul>
      </div>
    </div>
   
  </div>
</nav>
    
      
       {/* mainSection */}
    <section className="md:py-[5rem] py-[1rem] md:py-[4rem] h-full grid grid-col-1 md:grid-cols-2 gap-4  m-auto md:justify-center w-[90%] m-auto max-[400px]:w-[78%] "> 
        <div className="hero-content text-white">
           <span className="border-white bg-[#f7d6f5d1] border-2 mb-4">
           <small className="text-[17px] text-white dark:text-white font-bold px-4 mt-2">
                Welcome All in my Portfolio
            </small>
           </span>
           {/* <p className="text-white animat writing normal-case srelative"></p>  */}
               <h1 className="text-white mb-3 mt-2 text-4xl font-bold leading-snug max-[400px]:text-[28px] lg:text-[40px] xl:text-[42px] dark:text-white mt-8"
               >Hi, I'm Amera Raed Naser Abo Aoudeh, <span class="txt-rotate" data-period="2000" data-rotate='[ " Full Stack developer.", "Front end developer.", "Back end developer."]'></span></h1>
               <p className="font-bold text-[16px] text-neutral-200">Hello Everyone, I have 8 years of Experience in web Development</p>
               <p className="mt-8"><span className="font-bold text-[22px] text-white mt-[8rem]">Let's Connect</span> <i class='mx-2 bx bx-right-arrow-circle text-[22px] pt-2'></i></p>
        </div>
        <div className="personalimg md:py-[2rem]  pr-0 m-auto w-full h-[320px] md:h-[500px] rounded-[20px] bgimg" >
           <img src={headerimg} alt="my img" className="w-[90%] h-full animate-bounce animate-[wiggle_1s_ease-in-out_infinite] duration-1000 "></img>
        </div>
    </section>
</header>
  )
}


// writing auto
// end
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
export default Header;





