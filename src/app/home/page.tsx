"use client";

import { useEffect, useRef } from "react";
import "./style.css";

import {
  FaCheck,
  FaDraftingCompass,
  FaHeadphones,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { FaCompassDrafting } from "react-icons/fa6";
import { div } from "framer-motion/client";
import { Console } from "console";

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");

      const carouselElement = document.getElementById("headerCarousel");
      if (carouselElement) {
        const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
          interval: 2000, // Change slide every 2 seconds
          ride: "carousel", // Autoplay
        });
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
      const carouselElement = document.getElementById("testimonialCarousel");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 5000, // Adjust the interval as needed
          ride: "carousel",
        });
      }
    }
  }, []);

  useEffect(() => {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    const handleScroll = () => {
      portfolioItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          item.classList.add("visible");
        } else {
          item.classList.remove("visible");
        }
      });
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ProjectChange = (e: any) => {
    const clickedText = e.target.innerText;

    const generalCarpentryItems = document.querySelectorAll(
      "[id^='generalCarpentry']"
    );
    debugger;
    const customCarpentryItems = document.querySelectorAll(
      "[id^='customCarpentry']"
    );

    const showItems = (items: NodeListOf<Element>) => {
      debugger;
      items.forEach((item) => {
        //(item as HTMLElement).style.display = "block"; // Show element
        setTimeout(() => {
          (item as HTMLElement).style.display = "block";
          item.classList.add("show");
          // Add class after a short delay for transition
        }, 500);
      });
    };

    const hideItems = (items: NodeListOf<Element>) => {
      debugger;
      items.forEach((item) => {
        item.classList.remove("show");
        // Remove show class to trigger fade-out
        setTimeout(() => {
          (item as HTMLElement).style.display = "none"; // Hide element after transition completes
        }, 500); // Delay hiding until the transition ends
      });
    };

    if (clickedText === "All") {
      hideItems(generalCarpentryItems);
      hideItems(customCarpentryItems);
      showItems(generalCarpentryItems);
      showItems(customCarpentryItems);
    } else if (clickedText === "General Carpentry") {
      hideItems(generalCarpentryItems);
      hideItems(customCarpentryItems);
      showItems(generalCarpentryItems);
    } else if (clickedText === "Custom Carpentry") {
      hideItems(generalCarpentryItems);
      hideItems(customCarpentryItems);
      showItems(customCarpentryItems);
    }
  };

  return (
    <div>
      <div>
        <div className="container-fluid relative p-0 pb-5 -z-10">
          <div
            id="headerCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <ol className="carousel-indicators">
              <li
                data-bs-target="#headerCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
              ></li>
              <li data-bs-target="#headerCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#headerCarousel" data-bs-slide-to="2"></li>
            </ol>

            {/* Carousel Inner Start */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="owl-carousel-item position-relative">
                  <img
                    className="img-fluid w-full"
                    src="/carousel-1.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(53, 53, 53, .7)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 text-center">
                          <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            Welcome To WooDY
                          </h5>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            Best Carpenter & Craftsman Services
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            Vero elitr justo clita lorem. Ipsum dolor at sed
                            stet sit diam no. Kasd rebum ipsum et diam justo
                            clita et kasd rebum sea elitr.
                          </p>
                          <a
                            href=""
                            className="btn custom-btn py-md-3 px-md-5 me-3 animated slideInLeft"
                            style={{ backgroundColor: "#AB7442" }}
                          >
                            Read More
                          </a>
                          <a
                            href=""
                            className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                          >
                            Free Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="owl-carousel-item position-relative">
                  <img
                    className="img-fluid w-full"
                    src="/carousel-2.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(53, 53, 53, .7)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 text-center">
                          <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            Welcome To WooDY
                          </h5>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            Best Carpenter & Craftsman Services
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            Vero elitr justo clita lorem. Ipsum dolor at sed
                            stet sit diam no. Kasd rebum ipsum et diam justo
                            clita et kasd rebum sea elitr.
                          </p>
                          <a
                            href=""
                            className="btn py-md-3 px-md-5 me-3 animated slideInLeft bg-"
                            style={{ backgroundColor: "#AB7442" }}
                          >
                            Read More
                          </a>
                          <a
                            href=""
                            className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                          >
                            Free Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="owl-carousel-item position-relative">
                  <img
                    className="img-fluid w-full"
                    src="/carousel-3.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(53, 53, 53, .7)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 text-center">
                          <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                            Welcome To WooDY
                          </h5>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            Best Carpenter & Craftsman Services
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            Vero elitr justo clita lorem. Ipsum dolor at sed
                            stet sit diam no. Kasd rebum ipsum et diam justo
                            clita et kasd rebum sea elitr.
                          </p>
                          <a
                            href=""
                            className="btn custom-btn py-md-3 px-md-5 me-3 animated slideInLeft"
                            style={{ backgroundColor: "#AB7442" }}
                          >
                            Read More
                          </a>
                          <a
                            href=""
                            className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                          >
                            Free Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#headerCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#headerCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* <!-- Feature Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FaUserCheck
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#AB7442",
                      }}
                    />
                  </div>
                  <h1 className="display-1 text-light font-bold mb-0">01</h1>
                </div>
                <h5>Creative Designers</h5>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FaCheck
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#AB7442",
                      }}
                    />
                  </div>
                  <h1 className="display-1 text-light mb-0 font-bold">02</h1>
                </div>
                <h5>Quality Products</h5>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FaDraftingCompass
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#AB7442",
                      }}
                    />
                  </div>
                  <h1 className="display-1 text-light mb-0 font-bold">03</h1>
                </div>
                <h5>Free Consultation</h5>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FaHeadphones
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#AB7442",
                      }}
                    />
                  </div>
                  <h1 className="display-1 text-light mb-0 font-bold">04</h1>
                </div>
                <h5>Customer Support</h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature Start --> */}

        {/* <!-- About Start --> */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0 m-0 p-0 h-full">
          <div className="container about px-lg-0 w-full">
            <div className="row g-0 mx-lg-0 m-0 p-0">
              <div
                className="col-lg-6 ps-lg-0 w-1/2"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100 w-full">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="/about.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-6 about-text py-5 wow fadeIn w-1/2"
                data-wow-delay="0.5s"
              >
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">About Us</h1>
                  </div>
                  <p className="mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <div className="row g-4 mb-4 pb-2">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <FaUsers
                            style={{
                              color: "#AB7442",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </div>
                        <div className="ms-3">
                          <h2
                            className="font-bold mb-1"
                            style={{ color: "#AB7442" }}
                            data-toggle="counter-up"
                          >
                            1234
                          </h2>
                          <p className="fw-medium mb-0">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <FaCheck
                            style={{
                              color: "#AB7442",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </div>
                        <div className="ms-3">
                          <h2
                            className="font-bold mb-1"
                            data-toggle="counter-up"
                            style={{ color: "#AB7442" }}
                          >
                            1234
                          </h2>
                          <p className="fw-medium mb-0">Projects Done</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href=""
                    className="btn py-3 px-5"
                    style={{ backgroundColor: "#AB7442", color: "white" }}
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid hover:scale-125 transition-all duration-500"
                      src="/service-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 style={{ color: "#AB7442" }}>General Carpentry</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a
                      className="fw-medium"
                      style={{ color: "#AB7442" }}
                      href=""
                    >
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid hover:scale-125 transition-all duration-500"
                      src="/service-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Furniture Manufacturing</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a
                      className="fw-medium"
                      style={{ color: "#AB7442" }}
                      href=""
                    >
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid hover:scale-125 transition-all duration-500"
                      src="/service-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Furniture Remodeling</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a
                      className="fw-medium"
                      style={{ color: "#AB7442" }}
                      href=""
                    >
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid hover:scale-125 transition-all duration-500"
                      src="/service-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Floor</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a
                      className="fw-medium"
                      style={{ color: "#AB7442" }}
                      href=""
                    >
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid hover:scale-125 transition-all duration-500"
                      src="/service-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Wooden Furniture</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a
                      className="fw-medium"
                      style={{ color: "#AB7442" }}
                      href=""
                    >
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid hover:scale-125 transition-all duration-500"
                      src="/service-6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">Custom Work</h4>
                    <p>
                      Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                      lorem diam.
                    </p>
                    <a
                      className="fw-medium"
                      style={{ color: "#AB7442" }}
                      href=""
                    >
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Feature Start --> */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div
                className="col-lg-6 feature-text py-5 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="p-lg-5 ps-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Why Choose Us</h1>
                  </div>
                  <p className="mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <FaCheck
                            style={{
                              width: "30px",
                              height: "30px",
                              color: "#AB7442",
                            }}
                          />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Quality</p>
                          <h5 className="mb-0">Services</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <FaUserCheck
                            style={{
                              width: "30px",
                              height: "30px",
                              color: "#AB7442",
                            }}
                          />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Creative</p>
                          <h5 className="mb-0">Designers</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <FaCompassDrafting
                            style={{
                              width: "30px",
                              height: "30px",
                              color: "#AB7442",
                            }}
                          />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Free</p>
                          <h5 className="mb-0">Consultation</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <FaHeadphones
                            style={{
                              width: "30px",
                              height: "30px",
                              color: "#AB7442",
                            }}
                          />
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">Customer</p>
                          <h5 className="mb-0">Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="/feature.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End --> */}

        {/* <!-- Projects Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center font-extrabold">
              <h1 className="display-5 mb-5 font-extrabold">
                __Our Projects__
              </h1>
            </div>
            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                  <li
                    className="mx-2 active"
                    data-filter="*"
                    onClick={ProjectChange}
                  >
                    All
                  </li>
                  <li
                    className="mx-2"
                    data-filter=".first"
                    onClick={ProjectChange}
                  >
                    General Carpentry
                  </li>

                  <li
                    className="mx-2"
                    data-filter=".second"
                    onClick={ProjectChange}
                  >
                    Custom Carpentry
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-4 portfolio-container flex flex-wrap">
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.1s"
                id="generalCarpentry-1"
                style={{
                  transition: "opacity 0.5s ease",
                  transform: "0.5s ease",
                }}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="/portfolio-1.jpg"
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="/portfolio-1.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className=" fw-medium mb-2" style={{ color: "#AB7442" }}>
                      General Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.3s"
                id="customCarpentry-1"
                style={{
                  transition: "opacity 0.5s ease",
                  transform: "0.5s ease",
                }}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="/portfolio-2.jpg"
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="/portfolio-2.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="fw-medium mb-2" style={{ color: "#AB7442" }}>
                      Custom Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.5s"
                id="generalCarpentry-2"
                style={{
                  transition: "opacity 0.5s ease",
                  transform: "0.5s ease",
                }}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="/portfolio-3.jpg"
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="/portfolio-3.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="fw-medium mb-2" style={{ color: "#AB7442" }}>
                      General Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.1s"
                id="customCarpentry-2"
                style={{
                  transition: "opacity 0.5s ease",
                  transform: "0.5s ease",
                }}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="/portfolio-4.jpg"
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="/portfolio-4.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className="border border-5 border-light border-top-0 p-4"
                    id="customCarpentry"
                  >
                    <p className="fw-medium mb-2" style={{ color: "#AB7442" }}>
                      Custom Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.3s"
                id="generalCarpentry-3"
                style={{
                  transition: "opacity 0.5s ease",
                  transform: "0.5s ease",
                }}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="/portfolio-5.jpg"
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="/portfolio-5.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className="border border-5 border-light border-top-0 p-4"
                    id="generalCarpentry"
                  >
                    <p className="fw-medium mb-2" style={{ color: "#AB7442" }}>
                      General Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.5s"
                id="customCarpentry-3"
                style={{
                  transition: "opacity 0.5s ease",
                  transform: "0.5s ease",
                }}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="/portfolio-6.jpg"
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="img/portfolio-6.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href=""
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="fw-medium mb-2" style={{ color: "#AB7442" }}>
                      Custom Carpentry
                    </p>
                    <h5 className="lh-base mb-0">
                      Wooden Furniture Manufacturing And Remodeling
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Projects End --> */}

        {/* <!-- Quote Start --> */}
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
          <div className="container quote px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="/quote.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-6 quote-text py-5 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Free Quote</h1>
                  </div>
                  <p className="mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo erat amet
                  </p>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Name"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Mobile"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        {/* <select 
                        className="form-select border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select> */}
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control border-0"
                          placeholder="Special Note"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn custom-btn w-100 py-3"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Quote End --> */}

        {/* <!-- Team Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Team Members</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/team-1.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/team-2.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/team-3.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden position-relative">
                    <img className="img-fluid" src="/team-4.jpg" alt="" />
                    <div className="team-social">
                      <a className="btn btn-square" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center border border-5 border-light border-top-0 p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End --> */}

        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="display-5 mb-5">Testimonial</h1>
            </div>

            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel Inner Start */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col text-center">
                      <img
                        className="img-fluid bg-light p-2 mx-auto mb-3"
                        src="/testimonial-1.jpg"
                        style={{ width: "90px", height: "90px" }}
                        alt="Client 1"
                      />
                      <div className="testimonial-text p-4">
                        <p>
                          Clita clita tempor justo dolor ipsum amet kasd amet
                          duo justo duo duo labore sed sed. Magna ut diam sit et
                          amet stet eos sed clita erat magna elitr erat sit sit
                          erat at rebum justo sea clita.
                        </p>
                        <h5 className="mb-1">Client Name 1</h5>
                        <span className="fst-italic">Profession 1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col text-center">
                      <img
                        className="img-fluid bg-light p-2 mx-auto mb-3"
                        src="/testimonial-2.jpg"
                        style={{ width: "90px", height: "90px" }}
                        alt="Client 2"
                      />
                      <div className="testimonial-text p-4">
                        <p>
                          Clita clita tempor justo dolor ipsum amet kasd amet
                          duo justo duo duo labore sed sed. Magna ut diam sit et
                          amet stet eos sed clita erat magna elitr erat sit sit
                          erat at rebum justo sea clita.
                        </p>
                        <h5 className="mb-1">Client Name 2</h5>
                        <span className="fst-italic">Profession 2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col text-center">
                      <img
                        className="img-fluid bg-light p-2 mx-auto mb-3"
                        src="/testimonial-3.jpg"
                        style={{ width: "90px", height: "90px" }}
                        alt="Client 3"
                      />
                      <div className="testimonial-text p-4">
                        <p>
                          Clita clita tempor justo dolor ipsum amet kasd amet
                          duo justo duo duo labore sed sed. Magna ut diam sit et
                          amet stet eos sed clita erat magna elitr erat sit sit
                          erat at rebum justo sea clita.
                        </p>
                        <h5 className="mb-1">Client Name 3</h5>
                        <span className="fst-italic">Profession 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}
      </div>
    </div>
  );
}
