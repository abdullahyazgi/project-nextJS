import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@/utils/types";
import type { Metadata } from "next";
import SearchArticlesInput from "@/components/articles/SearchArticlesInput";
import Pagination from "@/components/articles/pagination";

const Articles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  if(!response.ok) {
    throw new Error(`Failed to fetch articles`);
  }
  
  const articles: Article[] = await response.json();

  return (
    <section className="fix-height container m-auto px-5">
      <SearchArticlesInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.slice(0, 6).map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination/>
    </section>
  );
};

export default Articles;

export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles about programing",
};
