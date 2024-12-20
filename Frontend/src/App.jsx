import "./App.css";
import Artical from "./Components/Artical";
// import BestSellingBooks from "./Components/BestSellingBooks";
import ClientHolder from "./Components/ClientHolder";
import FeaturedBooks from "./Components/FeaturedBooks";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Index from "./Components/Index";
// import NovelStoryContainer from "./Components/NovelStoryContainer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularBooks from "./Components/PopularBooks";
// import Quotation from "./Components/Quotation";
import Section1 from "./Components/Section1";
// import BookListPage from "./Components/BookListPage";
// import BookDetailsPage from "./Components/BookDetailsPage";

function App() {
  return (
    <>
      {/* <Router>
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/book-details" element={<BookDetailsPage />} />
      </Routes>
    </Router> */}

      <Header />
      <Section1 />
      <ClientHolder />
      <FeaturedBooks />
      <Artical />
      <PopularBooks />
      {/* <NovelStoryContainer /> */}
      <Footer />
    </>
  );
}

export default App;
