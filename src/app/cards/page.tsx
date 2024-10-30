"use client";

import { useEffect } from "react";

export default function Page() {
 

  const ProjectChange = (e: any) => {
    const clickedText = e.target.innerText;

    const all = document.querySelectorAll(".portfolio-item");
    const generalCarpentryItems = document.querySelectorAll(
      "[id^='generalCarpentry']"
    );

    const customCarpentryItems = document.querySelectorAll(
      "[id^='customCarpentry']"
    );

    const showItems = (items: NodeListOf<Element>) => {

      items.forEach((item) => {
        const element = item as HTMLElement;
        element.style.opacity = "0"; // Start hidden
        element.style.display = "block"; // Ensure the element is displayed
        

        // Allow the display to apply first, then animate opacity
        requestAnimationFrame(() => {
          setTimeout(() => {
            element.style.opacity = "1"; // Fade in
            element.style.transition = "opacity 1s ease-in-out"; // Set transition
          }, 10); // Small delay to ensure the browser registers the change
        });

        element.classList.add("show");
      });
    };

    const hideItems = (items: NodeListOf<Element>): Promise<void[]> => {
      return Promise.all(
        Array.from(items).map((item) => {

          return new Promise<void>((resolve) => {
            const element = item as HTMLElement;
            element.style.transition = "opacity 1s ease-in-out"; // Fade out effect
            element.style.opacity = "0"; // Start fading out

            // Use transitionend to hide the element after the fade-out completes
            element.addEventListener(
              "transitionend",
              () => {
                element.style.display = "none";
                // Hide the element after fade out
                element.classList.remove("show"); // Remove the 'show' class
                resolve(); // Resolve the promise when done
              },
              { once: true }
            ); // Ensure the listener is removed after it runs once
          });
        })
      );
    };

    const element = document.getElementsByClassName('portfolio-container')

    

    if (clickedText === "All") {
      //   hideItems(generalCarpentryItems)
      //     hideItems(customCarpentryItems)
     
        // Once all items are hidden, show them both
        showItems(generalCarpentryItems);
        showItems(customCarpentryItems);
      
    //   showItems(generalCarpentryItems);
    //   showItems(customCarpentryItems);
    } else if (clickedText === "General Carpentry") {
      hideItems(customCarpentryItems).then(() => {
        showItems(generalCarpentryItems);
      });
    } else if (clickedText === "Custom Carpentry") {
      hideItems(generalCarpentryItems).then(() => {
        showItems(customCarpentryItems);
      });
    }
  };

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center font-extrabold">
            <h1 className="display-5 mb-5 font-extrabold">__Our Projects__</h1>
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
              className="col-lg-4 col-md-6 generalCarpentry first wow fadeInUp"
              data-wow-delay="0.1s"
              id="generalCarpentry-1"
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
              className="col-lg-4 col-md-6 customCarpentry second wow fadeInUp"
              data-wow-delay="0.3s"
              id="customCarpentry-1"
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
              className="col-lg-4 col-md-6 generalCarpentry first wow fadeInUp"
              data-wow-delay="0.5s"
              id="generalCarpentry-2"
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
              className="col-lg-4 col-md-6 customCarpentry second wow fadeInUp"
              data-wow-delay="0.1s"
              id="customCarpentry-2"
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
              className="col-lg-4 col-md-6 generalCarpentry first wow fadeInUp"
              data-wow-delay="0.3s"
              id="generalCarpentry-3"
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
              className="col-lg-4 col-md-6 customCarpentry second wow fadeInUp"
              data-wow-delay="0.5s"
              id="customCarpentry-3"
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
    </div>
  );
}
