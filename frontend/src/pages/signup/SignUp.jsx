import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-40 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-30">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="'text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="'text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline text-blue-500 mt-1 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-1 ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// const SignUp = () => {
//   return (
//     <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-40 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3x1 font-semibold text-center text-gray-30">
//           Sign Up <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="'text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="'text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           {/* GENDER CHECKBOX GOES HERE */}
//           <GenderCheckbox />

//           <a
//             href="#"
//             className="text-sm hover:underline text-blue-500 mt-1 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-1 ">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
