"use client";

import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
  };
  return (
    <div>
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow "
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <div className="container-fluid bg-light p-0 font-bold">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <LiaMapMarkerSolid />
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <CiClock2 />
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4 -translate-y-3.5">
              <small className="fa fa-phone-alt  me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square bg-white  me-1" href="">
                <FaFacebookSquare />
              </a>
              <a className="btn btn-sm-square bg-white  me-1" href="">
                <FaSquareXTwitter />
              </a>
              <a className="btn btn-sm-square bg-white  me-1" href="">
                <FaLinkedin />
              </a>
              <a className="btn btn-sm-square bg-white  me-0" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white sticky top-0 p-3 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold"
            style={{ color: "#AB7442" }}
          >
            WooDY
          </Link>
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div
            className={`lg:flex ${
              isOpen ? "block" : "hidden"
            } w-full lg:w-auto`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
              <Link
                href="/home"
                className="text-gray-700 hover:text-primary py-2 px-4"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary py-2 px-4"
              >
                About
              </Link>
              <Link
                href="/service"
                className="text-gray-700 hover:text-primary py-2 px-4"
              >
                Service
              </Link>
              <Link
                href="/project"
                className="text-gray-700 hover:text-primary py-2 px-4"
              >
                Project
              </Link>
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-primary py-2 px-4"
                  onClick={togglePages}
                >
                  Pages
                </button>
                <div
                  className={`absolute ${
                    isPagesOpen ? "scale-y opacity-100" : "scale-y-0 opacity-0"
                  } bg-white origin-top shadow-lg rounded mt-1 transition-all duration-300 ease-in-out`}
                  style={{zIndex: '100'}}
                >
                  <Link
                    href="/feature"
                    className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
                  >
                    Feature
                  </Link>
                  <Link
                    href="/quote"
                    className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
                  >
                    Free Quote
                  </Link>
                  <Link
                    href="/team"
                    className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/testimonial"
                    className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
                  >
                    Testimonial
                  </Link>
                  <Link
                    href="/404"
                    className="block text-gray-700 hover:bg-gray-100 px-4 py-2"
                  >
                    404 Page
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary py-2 px-4"
              >
                Contact
              </Link>
            </div>
            <Link
              href=""
              className="hidden lg:block py-4 px-5 ml-4 text-white rounded-lg hover:bg-blue-700 flex items-center"
              style={{ backgroundColor: "#AB7442" }}
            >
              Get A Quote <i className="fa fa-arrow-right ml-3"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
