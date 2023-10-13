import Link from "next/link";


export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img src="/images/logo.svg" alt="Jean Chane-to" className="h-6" />
          </Link>
        </div>
        <div className="hidden min-[351px]:flex lg:flex-1 lg:justify-end gap-4">
          <a
            href="https://github.com/jeanchaneto"
            target="_blank"
            className=" self-center "
          >
            <img
              src="/images/github-logo.svg"
              alt="Github logo"
              className="h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-chane-to/"
            target="_blank"
            className=" self-center "
          >
            <img
              src="/images/linkedin-logo.svg"
              alt="Linkedin logo"
              className="h-6"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
