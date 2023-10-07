
export default function Header() {

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-[1980px] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <p className="h-8 font-sora text-sky-500">
              {" "}
              <span className=" font-bold">Jean</span>{" "}
              <span className="font-light">Chane-to</span>
            </p>
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
