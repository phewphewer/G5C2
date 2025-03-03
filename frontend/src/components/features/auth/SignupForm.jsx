import React from 'react';
import Header from '../../layout/Header';

export default function SignupForm() {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[100vh] flex justify-center">
        <div className="w-[50%] h-[50%]  bg-gray-700">
          <div className="w-full h-[7vh] bg-amber-600 ">
            <h1 className="text-[2em] font-bold">Sign Up Form</h1>
          </div>
          <div>
            <form onSubmit="">
              <div class="w-f ull h-[5vh] items-center flex">
                <span>Name:</span>
                {/* FIRST NAME */}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                />{' '}
                
                {/* MIDDLE NAME */}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Middle Name"
                />{' '}

                {/* LAST NAME */}
                <input type="text" name="" id="" placeholder="Last Name" />{' '}
                
              </div>
              
              {/* MALE OR FEMALE */}
              {/* <span>Sex:</span>
              <label>
                <input type="radio" name="" id="" />
              </label>
              <label>
                <input type="radio" name="" id="" />
              </label> */}
              {/* EMAIL ADDRESS */}
              <div>
                <span>Email Address:</span>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@email.com"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <span>Password:</span>
                <input type="password" name="" id="" placeholder="Password" />
              </div>

              {/* REPEAT PASSWORD */}
              <div>
                <span>Re-enter your Password:</span>
                <input type="password" name="" id="" placeholder="Password" />
              </div>
              <div>
                <button type="submit">LOG-IN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
