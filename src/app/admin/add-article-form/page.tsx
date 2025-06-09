import AddArticleForm from "../AddArticleForm";

const AdminDashboard = () => {
  return (
    <div className="fix-height flex items-center justify-center px-5 lg:px-20">
      <div className="shadow bg-purple-200 rounded w-full">
        <h2 className="text-xl lg:text-2xl text-gr700 font-semibold mb-4">
          Add New Article
        </h2>
        <AddArticleForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
