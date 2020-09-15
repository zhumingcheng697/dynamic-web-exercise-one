import React from "react";

function ArticleCard({ articleData }) {
  console.log(articleData);
  return (
    <div>
      <h2>{articleData.title}</h2>
      <p>
        {new Date(articleData.publishedDate).toLocaleString("ja", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
    </div>
  );
}

export default ArticleCard;
