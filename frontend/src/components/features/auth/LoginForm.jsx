import React from 'react';

export default function LoginForm() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center">
        <div className="w-[50%] h-[50%]  bg-gray-700">
          <div className="w-full h-[7vh] bg-amber-600 ">
          <h1 className="text-[2em] font-bold">Log in</h1>
          </div>
          <div className='inline-block'>
            <form>
              <div className='w-full h-5'>Enter registered email address</div>
              <input type="email" name="" id="" className="" placeholder='example@email.com' />
              <div className=''>Enter registered password</div>
              <input type="text" name="" id="" className="" placeholder='password'/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
