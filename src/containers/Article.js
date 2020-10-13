import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Data from "../components/data";
import { customDateString } from "../components/dateValues";

function Article() {
  const { id } = useParams();
  const articleData = Data.find((el) => el.id === id);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  if (!articleData) return null;

  return (
    <section className="Article">
      <header
        className="ArticleHeaderWrapper"
        style={{ backgroundImage: `url("${articleData.image.url}")` }}
      >
        <div className="ArticleHeader">
          <h1>{articleData.title}</h1>
          <p className="Date">
            {customDateString(new Date(articleData.publishedDate))}
          </p>
          <p className="Blurb">{articleData.blurb}</p>
        </div>
      </header>
      <article className="ArticleBody">
        {articleData.articleText.map((el, i) => {
          switch (el.type) {
            case "p":
              return <p key={i}>{el.data}</p>;
            case "h2":
              return <h2 key={i}>{el.data}</h2>;
            case "h3":
              return <h3 key={i}>{el.data}</h3>;
            default:
              return null;
          }
        })}
      </article>
    </section>
  );
}

export default Article;
