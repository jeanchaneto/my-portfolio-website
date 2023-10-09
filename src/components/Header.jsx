import Link from "next/link";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-[1920px] items-center justify-between p-6 lg:px-24 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img src="/images/logo.svg" alt="Jean Chane-to" className="" />
          </Link>
        </div>
        <MenuToggle setOpenMenu={setOpenMenu} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
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
      {openMenu && <MobileNav />}
    </header>
  );
}
