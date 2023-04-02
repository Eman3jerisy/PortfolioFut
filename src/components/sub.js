
function SUBFooter() {
  return (
   <section className=" bg-white rounded-[16px] sm:h-[350px] md:h-[270px] w-[70%]  md:w-[80%] m-auto mt-[-150px] md:p-[4rem] md:px-[6rem] sm:px-[1rem] p-[2rem] ">
    <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
            <h2 className="font-bold sm:text-[16px] md:text-[28px] text-black">See My Portfolio At Once & leave Here  your email Address,  Yasta</h2>
        </div>
        <div className="flex justify-center items-center">
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
  <input
    type="text"
    class="relative m-0  h-[65px] block w-[1px] min-w-0 flex-auto rounded-l border border-r-0 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out  focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
    placeholder="Email Address"
    aria-label="Email Address"
    aria-describedby="button-addon2" />
  <button
    class="relative z-[2] rounded-r text-white bg-gradient-to-l from-purple-500 to-pink-500 px-[3rem] py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0"
    type="button"
    id="button-addon2">
Submit  </button>
        </div>
        </div>

    </div>
    
   </section>
  )
}

export default SUBFooter;