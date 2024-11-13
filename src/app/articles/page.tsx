import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@/utils/types";
import type { Metadata } from "next";

const Articles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  if(!response.ok) {
    throw new Error(`Failed to fetch articles`);
  }
  
  const articles: Article[] = await response.json();

  return (
    <section className="fix-height container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Articles;

export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles about programing",
};
