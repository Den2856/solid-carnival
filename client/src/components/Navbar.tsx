import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", logoPath: "/links/home.svg", path: "/#start" },
  { name: "Menu", logoPath: "/links/menu.svg", path: "/#menu" },
  { name: "Services", logoPath: "/links/info.svg", path: "/#services" },
  { name: "Contact", logoPath: "/links/contact.svg", path: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-dark text-white p-2 border border-dark min-w-14.5 rounded-[15px] bg-card-overlay sm:sticky sm:top-4 sm:self-start sm:h-[calc(100vh-2rem)]">
      <div className="flex flex-col max-sm:flex-row items-center gap-5 h-full justify-between">
        <img src="/logo.png" alt="Zest Logo" className="size-10" />

        <div className="flex flex-col max-sm:flex-row items-center gap-3.75">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-main transition-colors duration-300"
            >
              <img src={link.logoPath} alt={link.name} className="size-9.5" />
            </Link>
          ))}
        </div>

        <img src="/logo.png" alt="Zest Logo" className="size-10 max-sm:hidden" />
      </div>
    </nav>
  );
}