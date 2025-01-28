import RegisterForm from './RegisterForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const Register = () => {
  const token = cookies().get("jwtToken")?.value;
  if(token) redirect("/");
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <p className="text-3xl font-bold text-gray-800 mb-5">Creat New Account</p>
        <RegisterForm/>
      </div>
    </section>
  );
}

export default Register