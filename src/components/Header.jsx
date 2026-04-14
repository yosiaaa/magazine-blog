import navigation from "../lib/navigation.json";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import socialmedia from "../lib/sociamedia.json";
import { RiMenu5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const socmedMap = {
  instagram: RiInstagramLine,
  x: RiTwitterXLine,
  youtube: RiYoutubeFill,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <header className="flex flex-col px-6 lg:px-20 pt-6 lg:pb-12">
        <div className="flex w-full pb-2 lg:pb-5 justify-between items-center">
          <Link
            to="/"
            className="text-base whitespace-nowrap md:whitespace-normal lg:text-2xl font-bold uppercase font-inter items-start"
          >
            Aisoy Magazine
          </Link>
          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex gap-6 items-end">
              <ul className="flex gap-6 items-center">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="font-inter font-medium text-xl relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.navigate}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex w-5 h-px bg-slate-800"></div>
            <div className="hidden lg:flex gap-3 items-center">
              {socialmedia.map((item) => {
                const Icon = socmedMap[item.icon];

                if (!Icon) return null;

                return (
                  <a key={item.id} href={item.href}>
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="flex lg:hidden relative z-60">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <RiCloseFill size={24} />
                ) : (
                  <RiMenu5Fill size={24} color="#343434" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } bg-black/40`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col px-10 pt-24 transform transition-transform duration-300 ${
                isOpen ? "translate-y-0" : "-translate-y-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)} // close on link click
                      className="text-2xl font-semibold font-inter"
                    >
                      {item.navigate}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-300"></div>

              {/* Social */}
              <div className="flex gap-5">
                {socialmedia.map((item) => {
                  const Icon = socmedMap[item.icon];
                  if (!Icon) return null;

                  return (
                    <Link key={item.id} to={item.href}>
                      <Icon size={24} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t px-10 lg:px-0 flex border-gray-700"></div>
      </header>
    </>
  );
}
