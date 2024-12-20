import { useEffect, useState } from 'react'
// import "App.css"
import st from './FeatureBooks.module.css'
// import books from './booksData';

function FeaturedBooks() {
    let [data, setdata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:3000/featuredBooks"
        );
        const ApiData = await response.json();
        setdata(ApiData);
      };
      fetchData();
    // setdata(books)
    }, []);
    

  // const openBookPage = (book) => {
  //   const url = `/book-details?id=${book.id}&title=${encodeURIComponent(
  //     book.title
  //   )}&description=${encodeURIComponent(book.description)}`;
  //   window.open(url, "_blank"); // Open in a new tab
  // };
  return (
    <>
     <section id="featured-books" className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Featured Books</h2>
              </div>
              <div className="product-list" >
                <div className="row">
                  
                {data.map((book)=>(

                  <div  
                  key={book.bookName} 
                  // onClick={() => openBookPage(book)}
                  className={`col-md-3  `}>
                    <div className={`product-item ${st.featureBookStyle} `}>
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
                        <span>{book.bookWriter}y</span>
                        <div className="item-price">{book.price}</div>
                      </figcaption>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-wrap align-right">
                <a href="#" className="btn-accent-arrow">
                  View all products <i className="icon icon-ns-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedBooks