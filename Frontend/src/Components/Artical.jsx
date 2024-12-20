import { useEffect, useState } from "react";

function Artical() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const response = await fetch("http://localhost:3000/blogs");
      const newData = await response.json();
      console.log(newData);
      setData(newData);
    };

    fetchApiData();
  }, []);
  return (
    <>
      <section id="latest-blog" className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Read our articles</span>
                </div>
                <h2 className="section-title">Latest Articles</h2>
              </div>
              <div className="row">
                {data.map((blog) => (
                  <div key={blog.id} className="col-md-4">
                    <article className="column">
                      <figure>
                        <a href="#" className="image-hvr-effect">
                          <img
                            src={blog.image}
                            alt="post"
                            className="post-image"
                          />
                        </a>
                      </figure>

                      <div className="post-item">
                        <div className="meta-date">{blog.date}</div>
                        <h3>
                          <a href="#">{blog.description}</a>
                        </h3>
                        <div className="links-element">
                          <div className="categories">{blog.categorie}</div>
                          <div className="social-links">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="icon icon-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon icon-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon icon-behance-square" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
               
              </div>
              <div className="row">
                <div className="btn-wrap align-center">
                  <a
                    href="#"
                    className="btn btn-outline-accent btn-accent-arrow"
                    tabIndex={0}
                  >
                    Read All Articles
                    <i className="icon icon-ns-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Artical;
