import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { tagMessage } from "../Redux/Slice/Client";
import abramham from '../images/abramhm.png'
import aristotle from '../images/aristotle.png'
import byron from '../images/byron.png'
import carl from '../images/carl.png'
import johaan from '../images/johaan.png'
import lao from '../images/lao.png'
import thomas from '../images/thomas.png'
import yogi from '../images/yogi.png'
function Tags() {
  // const dispatch=useDis

  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(tagMessage(e.target.text));

    // console.log('vipin',e.target.text);
  }
  return (
    <div>
      <ul class="grid  grid-cols-1 md:grid-cols-2 justify-center items-center pl-8 max-w-[900px] mx-auto mt-10 gap-8  text-white pb-[100vh] ">
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={thomas} alt="thomas" class=" w-[200px] h-[200px] rounded-xl cursor-not-allowed mb-3 " />
          <Link to="/random" style={{ textDecoration: "none" }}>
           Thomas Edison
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={yogi} alt="yogi" class=" w-[200px] h-[200px] rounded-xl cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Yogi Berra
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={abramham} alt="abramham" class=" rounded-xl w-[200px] h-[200px] cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Abraham Lincoln
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={johaan} alt="johaan" class=" rounded-xl w-[200px] h-[200px] cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Johann Wolfgang von Goethe
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={byron} alt="byron" class=" rounded-xl w-[200px] h-[200px] cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Byron Pulsifer
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={lao} alt="lao" class=" rounded-xl w-[200px] h-[200px] cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Lao Tzu
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={carl} alt="carl" class=" rounded-xl w-[200px] h-[200px] cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Carl Sandburg
          </Link>
        </li>
        <li
          onClick={(e) => {
            handleClick(e);
          }}
          class="text-lg "
        >
            <img src={aristotle} alt="aristotle" class=" rounded-xl w-[200px] h-[200px] cursor-not-allowed mb-3" />
          <Link to="/random" style={{ textDecoration: "none" }}>
            Aristotle
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Tags;
