import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const Login = () => {
  const token = cookies().get("jwtToken")?.value;
  if (token) redirect("/");
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <p className="text-3xl font-bold text-gray-800 mb-5">Log In</p>
        <LoginForm/>
      </div>
    </section>
  );
}

export default Login