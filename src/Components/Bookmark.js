import React from "react";
import { useSelector } from "react-redux";

function Bookmark() {
  const showtag = useSelector((state) => state.message?.bookmark);
  console.log("bhavana", showtag);
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5 w-[90%] max-w-[900px] mx-auto mt-10 pb-[100vh] ">
      {showtag &&
        showtag?.map((item, i) => {
          // console.log(i);
          return (
            <div class="">
              <p class="flex flex-col relative text-white  bg-red-400 p-4 max-w-[400px] rounded-xl mb-2 text-center text-lg justify-center items-center">
        {item.text}
        <span class="mt-6">
         
          " {item.author} "
        </span>
        {/* <span class="mt-6"> " {author?author:'Thomas Edison'} "</span> */}
      </p>
            </div>
          );
        })}
    </div>
  );
}

export default Bookmark;
