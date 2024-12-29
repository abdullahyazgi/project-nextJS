import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@prisma/client";
import type { Metadata } from "next";
import SearchArticlesInput from "@/components/articles/SearchArticlesInput";
import Pagination from "@/components/articles/pagination";
import { getArticles, getArticlesCount } from "@/apiCalls/articleApiCall";
import { ARTICLE_PER_PAGE } from "@/utils/constants";

interface ArticlesPageProps {
  searchParams: { pageNumber: string }
}

const Articles = async ( { searchParams } : ArticlesPageProps) => {
  const { pageNumber } = searchParams;
  const articles: Article[] = await getArticles(pageNumber);
  const count:number = await getArticlesCount();

  const pages = Math.ceil(count / ARTICLE_PER_PAGE);

  return (
    <section className="fix-height container m-auto px-5">
      <SearchArticlesInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination
        pageNumber={parseInt(pageNumber)}
        route="/articles"
        pages={pages}
      />
    </section>
  );
};

export default Articles;

export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles about programing",
};
