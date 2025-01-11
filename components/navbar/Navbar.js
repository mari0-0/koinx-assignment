"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./navbar.css";
import { ArrowUpRight, Menu, X } from "lucide-react";

const menuLinks = [
  { path: "#", label: "Crypto Taxes" },
  { path: "#", label: "Free Tools" },
  { path: "#", label: "Resource Center" },
];

const Navbar = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const listenScroll = () =>
      window.addEventListener("scroll", () => {
        if (window.scrollY > 25) {
          navbar.classList.add("navbar-scrolled");
        } else if (window.scrollY < 25) {
          navbar.classList.remove("navbar-scrolled");
        }
      });

    const navbar = document.querySelector(".menu-container");
    listenScroll();

    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  return (
    <>
      <div className="menu-container shadow-lg" ref={container}>
        <div className="menu-bar-wrapper">
          <div className="menu-bar">
            <div className="menu-logo">
              <div className="flex justify-center items-center gap-2">
                <img src="/logo.png" alt="logo" />
              </div>
            </div>

            <div className="hidden md:flex gap-2 items-center font-semibold">
              {menuLinks.map((link, index) =>
                index !== menuLinks.length ? (
                  <Navlink key={index} path={link.path}>
                    {link.label}
                  </Navlink>
                ) : undefined
              )}

              <a href="#">
                <button className="py-3 px-6 text-white text-[1rem] rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]">
                  Get Started
                </button>
              </a>
            </div>

            <div
              className="menu-open md:hidden flex justify-center items-center gap-3"
              onClick={toggleMenu}
            >
              <span className="cursor-pointer">
                <Menu />
              </span>
            </div>
          </div>
        </div>

        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <div className="flex justify-center items-center gap-2">
                <img src="/logo.png" alt="logo" />
              </div>
            </div>
          </div>
          <div className="menu-close-icon">
            <p>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <a href={link.path} className="menu-link">
                      {link.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <a
                  href="https://www.koinx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <span>Twitter</span>{" "}
                  <span className="text-sm">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
                <a
                  href="https://www.koinx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <span>Instagram</span>{" "}
                  <span className="text-sm">
                    <ArrowUpRight size={20} />
                  </span>
                </a>

                <p>contact@koinx.com</p>
                <p>+12 3456 89010</p>
              </div>
            </div>
          </div>
          <div className="menu-preview">
            <div className="menu-close text-white cursor-pointer" onClick={toggleMenu}>
              <X />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

export const Navlink = ({ children, path }) => {
  return (
    <a href={path}>
      <button className="px-4 py-3 rounded-lg font-semibold text-[1rem] hover:bg-blue-400 hover:bg-opacity-20 ease-in-out duration-500">
        {children}
      </button>
    </a>
  );
};
