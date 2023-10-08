import Link from "next/link";

export default function Header() {

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <p className="h-8 font-sora text-gray-100">
              {" "}
              <span className=" font-bold">Jean</span>{" "}
              <span className="font-light">Chane-to</span>
            </p>
          </Link>
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
