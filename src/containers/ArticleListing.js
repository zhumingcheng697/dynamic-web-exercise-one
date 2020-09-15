import React from "react";

import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function ArticleListing() {
  return (
    <section>
      <header>
        <h1>Articles</h1>
      </header>
      {Data.map((article, i) => {
        return <ArticleCard key={i} articleData={article} />;
      })}
    </section>
  );
}

export default ArticleListing;
