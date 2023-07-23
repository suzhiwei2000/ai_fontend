import React from "react";
import Accordion from "./Accordion/index";

const items = [
  {
    title: "机器人可以保证赚钱吗?",
    content:
      "您好机器人只是高级交易工具 不会保证任何月化和收益\n当然如果您是杰出的策略交易者 使用机器人是可以赚到非常可观了利润 但是风险是和利润并行的",
  },
  {
    title: "机器人购买有优惠吗？",
    content: "是的 你可以联系客服首次下单 获得80%的折扣",
  },
  {
    title: "我可以代理推广机器人吗？",
    content:
      "当然可以 您如果成功推广 将会获得我们给您的酬劳或者佣金 你可以联系客服详情咨询",
  },
  {
    title: "我得交易信号出发了 但是账户没有开单？ ",
    content: "请根据视频教程 一步步对照参数设置 如还没解决请联系客服",
  },
  {
    title: "机器人支持外汇交易吗？",
    content: "本机器人后期会添加外汇教程 当然你可以选择私人定制实现您的要求",
  },
  {
    title: "为什么 我手机没法打开网页",
    content:
      "因交易领域属于技术领域 手机很难发挥出优势 我们目前所有优化体验 只针对电脑端",
  },
];

const FAQ = () => (
  <div id="ref5"  className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex justify-center items-center flex-col mt-5">
      <h2 className="text-white text-3xl text-center">常见问题FAQ</h2>
      <p className="text-white text-sm text-center font-medium mt-2">
        如果您在使用过程中遇到如下常见问题，可以参照以下解决方法
      </p>
    </div>
    <Accordion items={items}></Accordion>
    <div></div>
  </div>
);

export default FAQ;
