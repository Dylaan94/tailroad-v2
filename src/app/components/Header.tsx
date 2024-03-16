import Link from "next/link";

export default function Header() {
  // create links object to be mapped over
  const links: { href: string; label: string }[] = [
    { href: "/", label: "home" },
    { href: "/about-us", label: "about us" },
    { href: "/our-services", label: "our services" },
    { href: "/our-process", label: "our process" },
    { href: "/our-work", label: "our work" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <header className="h-16 flex justify-center w-full bg-transparent absolute top-0 left-0 z-50 josefin-sans ">
      <div className=" items-center flex justify-between w-[95%] ">
        <a>image </a>
        <nav>
          <ul className="flex">
            {links.map(({ href, label }) => (
              <li className="px-2" key={`${href}${label}`}>
                <Link className="text-white" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
