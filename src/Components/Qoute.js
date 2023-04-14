import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkMessage, setmessage, tagMessage } from "../Redux/Slice/Client";
import { Card, Select } from "antd";

function Qoute() {
  const [content, setcontent] = useState("");
  const [v, setv] = useState("");
  const [text, settext] = useState("");
  const [author, setauthor] = useState("");
  const showdata = useSelector((state) => state.message.message);
  const showtag = useSelector((state) => state.message?.tags);
  // console.log("showtgas", showtag);
  const dispatch = useDispatch();
  // console.log("voooo", v);
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    let q = [];
    q =
      content &&
      content?.map((item, i) => {
        return {
          text: item?.text,
          author: item?.author,
        };
      });
    dispatch(setmessage(q));
    // console.log('showdta',showdata);
    const fliterElement = showdata?.find((e) => {
      // console.log("showtgas", showtag);
      // console.log("v", v);
      var t = "";
      if (showtag == "") {
        t = v;
      } else {
        t = showtag;
      }
      console.log("t", t);
      return e.author == t;
    });
    // console.log("monika", fliterElement);
    // console.log('v',v);
    settext(fliterElement?.text);
    setauthor(fliterElement?.author);
  }, [v]);
  async function fetchdata() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const jsondata = await response.json();

      // console.log(jsondata);
      const slicedArray = jsondata.slice(0, 8);
      let q = [];
      q =
        slicedArray &&
        slicedArray?.map((item, i) => {
          // console.log(i);
          return {
            value: item?.author,
            label: item?.author,
            text: item?.text,
            author: item?.author,
            key: i,
            index: i,
          };
        });
      setcontent(q);
      
      dispatch(setmessage(q));
      
    } catch (error) {
      console.log(error);
    }
  }
  function vipin() {
    dispatch(tagMessage(""));
  }
  function bookmarkHandle(){
dispatch(bookmarkMessage({
  text:text,author:author
}))
  }
  return (
    <div class="flex flex-col justify-center items-center h-[100vh] p-5">
      <p class="flex flex-col relative text-white  bg-red-400 p-4 max-w-[400px] rounded-xl mb-5 text-center text-lg justify-center items-center">
        {text
          ? text
          : "Genius is one percent inspiration and ninety-nine percent perspiration."}
        <span class="mt-6">
          {" "}
          " {showtag ? showtag : author ? author : "Thomas Edison"} "
        </span>
        {/* <span class="mt-6"> " {author?author:'Thomas Edison'} "</span> */}
      </p>
      <Card class="flex flex-col space-y-4">
        <Select
          onSelect={(v) => {
            setv(v);
            vipin();
          }}
          style={{ width: 200 }}
          defaultValue="Thomas Edison"
          options={content}
        />
      </Card>
      <button onClick={bookmarkHandle} class="border border-white p-2 mt-8 max-w-[100px] mx-auto rounded-md hover:bg-blue-300 text-white transition-all duration-200">
        Bookmark
      </button>
    </div>
  );
}

export default Qoute;
