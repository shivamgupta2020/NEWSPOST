import { useState, React } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";
const NewsLists = ({ category }) => {
  const NEWS_API_KEY= "dc4aad7e790742b4aed2743a3e3f0678"
  const [news, setNews] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, [category]);

  return (
    <div>
      <h2 class="text-center">
        Latest{" "}
        <span class="badge bg-dark text-light fs-4 text-decoration-none">
          News
        </span>
      </h2>
      {news.map((news) => {
        return (
          <NewsItem
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsLists;
