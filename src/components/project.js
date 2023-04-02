import projectimg from "./../img/project-img2.png"
function Project() {
  return (
    <section className=" w-full h-full relative  bg-[#201f1f] pt-[2rem]">
    <div class="pb-[4rem] text-center px-8  pt-[2rem] w-[98%] lg:w-[90%] m-auto   ">
   <h1 class="mb-[15px] font-bold text-white text-[38px]">Projects</h1>
   <p class="mx-auto max-w-[500px] text-white ">You can See my portfolio here Yasta</p>
   </div>
   {/* tabs */}
   <ul
  class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row justify-center "
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <a
      href="#tabs-home"
      class="my-2 block border-2 w-[40%] m-auto rounded-lg md:w-full  md:rounded-l-full  border-white px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-white data-[te-nav-active]:border-white data-[te-nav-active]:text-white data-[te-nav-active]:bg-gradient-to-r from-purple-800 to-blue-500 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home"
      aria-selected="true"
      >1st Section</a>
  </li>
  <li role="presentation">
    <a
      href="#tabs-profile"
      class=" my-2 block border-2 w-[40%] m-auto max[760px]:rounded-lg md:w-full border-white px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-white focus:isolate focus:border-transparent data-[te-nav-active]:border-white data-[te-nav-active]:text-white data-[te-nav-active]:bg-gradient-to-r from-purple-800 to-blue-500 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile"
      role="tab"
      aria-controls="tabs-profile"
      aria-selected="false"
      >2nd Section</a>
  </li>
  <li role="presentation" className="">
    <a
      href="#tabs-messages"
      className=" my-2 block border-2 w-[40%] m-auto rounded-lg md:w-full  md:rounded-r-full  border-white px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-white  data-[te-nav-active]:border-white data-[te-nav-active]:text-white data-[te-nav-active]:bg-gradient-to-r from-purple-800 to-blue-500 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400  "
      data-te-toggle="pill"
      data-te-target="#tabs-messages"
      role="tab"
      aria-controls="tabs-messages"
      aria-selected="false"
      >3rd Section</a>
  </li>
</ul>
<div >
  <div
    class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block pb-[4rem]"
    id="tabs-home"
    role="tabpanel"
    aria-labelledby="tabs-home-tab"
    data-te-tab-active>
     {/* Content1 */}
   <div className="w-[90%] m-auto grid md:grid-cols-3 grid-cols-1 gap-8 pb-[3rem]">
        <div className="relative w-[80%] m-auto md:w-full">
        <div className="absolute left-0 top-0 w-full h-0 projectimg  rounded-[16px] flex flex-col justify-center items-center text-[transparent] hover:text-white hover:h-full ease-linear transition-[height] duration-500">
            <h2 className="font-bold text-[22px]">Business Start Up</h2>
            <p className="text-[12px]">Design and development</p>
        </div>
        <img src={projectimg} alt="portfolio img" className="w-full h-full rounded-[16px]  "></img>
        </div>
        <div className="relative w-[80%] m-auto md:w-full">
        <div className="absolute left-0 top-0 w-full h-0 projectimg  rounded-[16px] flex flex-col justify-center items-center text-[transparent] hover:text-white hover:h-full ease-linear transition-[height] duration-500">
            <h2 className="font-bold text-[22px]">Business Start Up</h2>
            <p className="text-[12px]">Design and development</p>
        </div>
        <img src={projectimg} alt="portfolio img" className="w-full h-full rounded-[16px]  "></img>
        </div>
        <div className="relative w-[80%] m-auto md:w-full">
        <div className="absolute left-0 top-0 w-full h-0 projectimg  rounded-[16px] flex flex-col justify-center items-center text-[transparent] hover:text-white hover:h-full ease-linear transition-[height] duration-500">
            <h2 className="font-bold text-[22px]">Business Start Up</h2>
            <p className="text-[12px]">Design and development</p>
        </div>
        <img src={projectimg} alt="portfolio img" className="w-full h-full rounded-[16px]  "></img>
        </div>
        <div className="relative w-[80%] m-auto md:w-full">
        <div className="absolute left-0 top-0 w-full h-0 projectimg  rounded-[16px] flex flex-col justify-center items-center text-[transparent] hover:text-white hover:h-full ease-linear transition-[height] duration-500">
            <h2 className="font-bold text-[22px]">Business Start Up</h2>
            <p className="text-[12px]">Design and development</p>
        </div>
        <img src={projectimg} alt="portfolio img" className="w-full h-full rounded-[16px]  "></img>
        </div>
        <div className="relative w-[80%] m-auto md:w-full">
        <div className="absolute left-0 top-0 w-full h-0 projectimg  rounded-[16px] flex flex-col justify-center items-center text-[transparent] hover:text-white hover:h-full ease-linear transition-[height] duration-500">
            <h2 className="font-bold text-[22px]">Business Start Up</h2>
            <p className="text-[12px]">Design and development</p>
        </div>
        <img src={projectimg} alt="portfolio img" className="w-full h-full rounded-[16px]  "></img>
        </div>
        <div className="relative w-[80%] m-auto md:w-full">
        <div className="absolute left-0 top-0 w-full h-0 projectimg  rounded-[16px] flex flex-col justify-center items-center text-[transparent] hover:text-white hover:h-full ease-linear transition-[height] duration-500">
            <h2 className="font-bold text-[22px]">Business Start Up</h2>
            <p className="text-[12px]">Design and development</p>
        </div>
        <img src={projectimg} alt="portfolio img" className="w-full h-full rounded-[16px]  "></img>
        </div>
    </div>
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block pb-[4rem] text-center text-white"
    id="tabs-profile"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block pb-[4rem] text-center text-white"
    id="tabs-messages"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
</div>
  
   </section>
  )
}

export default Project;




