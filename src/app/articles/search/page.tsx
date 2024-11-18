interface SearchArticlesPageProps {
  searchParams: {searchText: string};
}

const SearchArticles = ({ searchParams }:SearchArticlesPageProps) => {
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-2xl font-bold">
        Search Text is: {searchParams.searchText}
      </h1>
    </section>
  );
}

export default SearchArticles