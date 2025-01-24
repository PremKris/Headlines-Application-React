import React, { useEffect, useState } from "react";
import Newitems from "./Newitems";
import LinearProgress from "@mui/material/LinearProgress";
import Navbar from "./Navbar";
import { BrowserRouter as Link } from "react-router-dom";

function News(props) {
  const { newPerPage, country, category } = props;
  const [article, setarticle] = useState(null);
  const [pageNo, setpageNo] = useState(1);
  const [maxPage, setmaxPage] = useState(1);
  const [loading, setloading] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=94069617342740b191fa88240a94d532&pageSize=${newPerPage}&page=${pageNo}&category=${category}`;
      try {
        const response = await fetch(url); // Fetch data from the
        setloading(true);
        const data = await response.json(); // Convert response to JSON
        console.log("data", data);
        document.title = `Headlines-${category}`;
        setloading(false);
        setmaxPage(() => {
          const quotient = Math.ceil(data.totalResults / newPerPage);
          if (pageNo === quotient) {
            return quotient;
          }
        });
        setarticle(data.articles); // Update state with the articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles(); // Call the async function
    // Scroll to the top of the page when `pageNo` changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  }, [pageNo]); // Runs every time pageNo changes

  const handleNextPage = () => {
    setpageNo((prev) => prev + 1); // Increment page number
  };

  const handlePreviousPage = () => {
    setpageNo((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent pageNo from going below 1
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,        // Scroll to the top
  //     behavior: "smooth", // Smooth scrolling animation
  //   });
  // }
  return (
    <>
      <Navbar Navtitle="News Headlines" />
      <div className="text-center" style={{ margin: "20px 0px" }}>
        <h1>Top Headlines</h1>
      </div>
      <div id="plsas">
        {loading ? (
          <LinearProgress />
        ) : (
          <div className="row my-4">
            {article &&
              article.map((element) => {
                //If I use the map with arrow function I can return anything
                return (
                  <>
                    <div
                      className="col mx-4 my-4"
                      style={{ display: "flex", justifyContent: "center" }}
                      key={element.url}
                    >
                      <Newitems
                        title={element.title}
                        description={element.description}
                        imgurl={element.urlToImage}
                        newsurl={element.url}
                        date={element.publishedAt}
                        author={element.author}
                        source={element.source.name}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        )}
        {!loading && (
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePreviousPage}
              disabled={pageNo === 1}
            >
              Previous
            </button>
            <span style={{ margin: "0 10px" }}>Page: {pageNo}</span>
            <button
              type="button"
              disabled={maxPage}
              className="btn btn-primary"
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default News;
