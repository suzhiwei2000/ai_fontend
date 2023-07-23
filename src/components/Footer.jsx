import React from "react";
import { cardItem } from "./json";
const Footer = () => (
  <div id="ref4"  className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex justify-center items-center flex-col mt-5">
      <h2 className="text-white text-3xl text-center">
        操作简单 更多小白客户认可
      </h2>
      <p className="text-white text-sm text-center font-medium mt-2">
        您只需简单的操作步骤，即可创建自己的自动交易机器，从此告别命运被他人掌控
        轻松自己做量化
      </p>
    </div>
    <div className="flex w-full text-white px-16 mb-10  items-center flex-wrap ">
      {cardItem.map((item, index) => {
        return (
          <div key={index} className="flex flex-col mt-5 py-10 hover:bg-[#3c0857] cursor-pointer items-center w-1/3">
            <img src={item.image} alt="nature" className="w-8 h-8 2xl" />
            <div className="text-2xl my-2">{item.title}</div>
            <div className="text-center text-gray-100 whitespace-pre-wrap ">{item.content}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Footer;
