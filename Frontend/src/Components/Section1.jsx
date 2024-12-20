import { useEffect, useState } from "react";

function Section1() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3000/"
      );
      const ApiData = await response.json();
      setdata(ApiData);
    };
    fetchData();
  }, []);
  return (
    <>
      <section id="billboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <button className="prev slick-arrow">
                <i className="icon icon-arrow-left"></i>
              </button> */}

              <div className="main-slider pattern-overlay">
                {data.map((item) => (
                  <div className="slider-item " key={item.name}>
                    <div className="banner-content">
                      <h2 className="banner-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="btn-wrap">
                        <a
                          href="#"
                          className="btn btn-outline-accent btn-accent-arrow"
                        >
                          {" "}
                          Read More<i className="icon icon-ns-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <img
                      src={item.image}
                      alt="banner"
                      className="banner-image"
                    />
                  </div>
                ))}

                {/* 
                <div className="slider-item">
                  <div className="banner-content">
                    <h2 className="banner-title">Birds gonna be Happy</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna
                      commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                      eu.
                    </p>
                    <div className="btn-wrap">
                      <a
                        href="#"
                        className="btn btn-outline-accent btn-accent-arrow"
                      >
                        Read More<i className="icon icon-ns-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <img
                    src="images/main-banner2.jpg"
                    alt="banner"
                    className="banner-image"
                  />
                </div> */}
              </div>

              {/* <button className="next slick-arrow">
                <i className="icon icon-arrow-right"></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
