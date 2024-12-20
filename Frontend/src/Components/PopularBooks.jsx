import { useEffect, useState } from "react";

function PopularBooks() {
  let [books, setBookdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/popularBooks");
      const ApiData = await response.json();
      setBookdata(ApiData);
    };
    fetchData();
  }, []);
  return (
    <>
      <section id="popular-books" className="bookshelf py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Popular Books</h2>
              </div>
              <ul className="tabs">
                <li className="active tab">All Genre</li>
              </ul>
              <div className="tab-content">
                <div id="all-genre" className="active">
                  <div className="row">
                    {books.map((book) => (
                      <div key={book.bookName} className="col-md-3">
                        <div className="product-item">
                          <figure className="product-style">
                            <img
                              src={book.image}
                              alt="Books"
                              className="product-item"
                            />
                            <button
                              type="button"
                              className="add-to-cart"
                              data-product-tile="add-to-cart"
                            >
                              Add to Cart
                            </button>
                          </figure>
                          <figcaption>
                            <h3>{book.bookName}</h3>
                            <span>{book.author}</span>
                            <div className="item-price">{book.desc}</div>
                          </figcaption>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularBooks;
