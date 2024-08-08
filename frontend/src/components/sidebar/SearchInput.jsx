import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-5 m-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      ></input>
      <button type="submit" className="btn btn-circle bg-sky-500 text-black">
        <IoSearchSharp style={{ fontSize: "24px" }} />
      </button>
    </form>
  );
};

export default SearchInput;

// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-5 m-4">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       ></input>
//       <button type="submit" className="btn btn-circle bg-sky-500 text-black">
//         <IoSearchSharp style={{ fontSize: "24px" }} />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
