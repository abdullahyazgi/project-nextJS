import React from 'react'

const Login = () => {
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <p className="text-3xl font-bold text-gray-800 mb-5">Log In</p>
        <form className='flex flex-col'>
          <input
            className="mb-4 border rounded p-2 text-xl"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="mb-4 border rounded p-2 text-xl"
            type="password"
            placeholder="Enter Your Password"
          />
          <button type='submit' className='text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold'>send</button>
        </form>
      </div>
    </section>
  );
}

export default Login