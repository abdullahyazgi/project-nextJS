import Link from "next/link";

const HomeAdminPage = () => {
  return (
    <ul className="mt-10 flex items-center justify-center flex-col">
      <Link href="/admin/add-article-form">
        <span>Add new article</span>
      </Link>
      <Link href="/admin/articles-table?pageNumber=1">
        <span>Go to Articles</span>
      </Link>
    </ul>
  );
};

export default HomeAdminPage;
