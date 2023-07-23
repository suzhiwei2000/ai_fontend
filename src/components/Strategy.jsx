import React from "react";
import img7 from '../../images/img7.webp'
import { AiOutlineArrowRight } from "react-icons/ai";

const strategy = () => (
  <div id="ref6"  className=" w-full gradient-bg-services mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-4xl sm:text-5xl py-2 text-gradient ">
         策略社区
        </h1>
        <p className="text-center my-2 text-white text-2xl font-light md:w-full w-11/12 ">
        策略社区脚本均来自其他玩家上传 仅限用户免费使用<br></br>
        注: 策均为筛选收集 本平台不保证任何收益承诺 仅供参考学习 如发生亏损请自行承担
        </p>
      </div>
    </div>
    <div className="flex w-full justify-between ">
        <div className="felx flex-col items-center justify-center w-1/3 pr-8">
        <img src={img7} alt="logo" className=" cursor-pointer" />
        <div className="my-4 text-2xl font-bold text-white">tradingviw 趋势行策略</div>
        <div className="my-2  text-white">这个策略 是一位芬兰大神写的 YouTube点赞量 达到的5万</div>
        <div className="my-2 flex items-center text-white">阅读正文 <AiOutlineArrowRight size={20} className="ml-4"></AiOutlineArrowRight ></div>
        </div>
        <div className="felx flex-col items-center justify-center w-1/3 pr-8">
        <img src={img7} alt="logo" className=" cursor-pointer" />
        <div className="my-4 text-2xl font-bold text-white">tradingviw 趋势行策略</div>
        <div className="my-2  text-white">这个策略 是一位芬兰大神写的 YouTube点赞量 达到的5万</div>
        <div className="my-2 flex items-center text-white">阅读正文 <AiOutlineArrowRight size={20} className="ml-4"></AiOutlineArrowRight ></div>
        </div>
        <div className="felx flex-col items-center justify-center w-1/3 pr-8">
        <img src={img7} alt="logo" className=" cursor-pointer" />
        <div className="my-4 text-2xl font-bold text-white">tradingviw 趋势行策略</div>
        <div className="my-2  text-white">这个策略 是一位芬兰大神写的 YouTube点赞量 达到的5万</div>
        <div className="my-2 flex items-center text-white">阅读正文 <AiOutlineArrowRight size={20} className="ml-4"></AiOutlineArrowRight ></div>
        </div>
      </div>
  </div>
);

export default strategy;
