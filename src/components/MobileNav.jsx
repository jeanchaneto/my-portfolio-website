import Link from "next/link";
import { useRouter } from "next/router";

const mobileNavItems = [
  { page: "Home", link: "/" },
  { page: "About", link: "/about" },
  { page: "Portfolio", link: "/portfolio" },
  { page: "Services", link: "/services" },
  { page: "Blog", link: "/blog" },
  { page: "Contact", link: "/contact" },
];

const MobileNav = () => {
  const { pathname } = useRouter();
  return (
    <nav className="absolute top-[80px] screen-less-header w-full z-50 backdrop-blur-3xl bg-black/50 lg:hidden">
      <ul className=" px-6 ">
        {mobileNavItems.map((item, i) => (
          <li
            className=" h-12 hover:opacity-50 border-b border-white/10 flex items-center "
            key={i}
          >
            <Link href={item.link}>
              <div className="flex gap-2 items-center">
                <p>{item.page}</p>
                {pathname === item.link && (
                  <div className="w-1 h-1 bg-cyan-200 rounded-full " />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
