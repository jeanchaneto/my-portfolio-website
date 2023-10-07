
export default function Home() {
  return (
    <main>
      <div className="relative isolate overflow-hidden ">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 justify-between ">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 z-20">
            <h2 className="text-base font-semibold leading-7 text-sky-500">
              React.JS Front End Developper
            </h2>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl font-sora whitespace-nowrap">
              Hi, I'm <span className=" bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-300 inline-block text-transparent bg-clip-text" >Jean Chane-to</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Contact me
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Download my CV <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/images/hero-photo.png"
              alt="App screenshot"
              
              className="w-[76rem] rounded-md  shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div> */}
        
          <div className=" flex-shrink w-96 z-20  ">
            <img
              src="/images/hero-photo.png"
              alt="Jean Chane-to"
              className=" rounded-md  shadow-2xl object-cover "
            />
          </div>
        </div>
        
      </div>
      
    </main>
  );
}
