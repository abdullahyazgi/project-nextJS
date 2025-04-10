"use client";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="fix-height pt-7 text-center">
      <div className="text-3xl text-red-600 font-semibold">
        Somthing went wrong
      </div>
      <p className="text-gray-700 my-3 text-xl">
        Error Message: {error.message};
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Try again
      </button>
      <Link className="text-xl underline text-blue-700 block mt-6" href="/">
        Go to Home page
      </Link>
    </div>
  );
};

export default ErrorPage;
