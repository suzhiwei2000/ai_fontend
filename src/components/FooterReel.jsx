import React from "react";
import logo from "../../images/logo1.png";

const FooterReel = () => (
  <div className="flex w-full md:justify-center  flex-col p-4 gradient-bg-footer">
    <div className="flex mf:flex-row flex-col justify-between md:p-20 py-12 px-4">
    <div className="felx flex-col">
    <img src={logo} alt="logo" className="w-32 cursor-pointer" />
    <div className="w-[400px] my-5 text-white">
    未来的交易市场将会更加智能化和自动化，ROBOT作为交易者的私人助理，将会帮助每一位交易者实现自动化交易，从而提高交易效率和收益。ROBOT不仅可以根据交易者的需求和策略进行自动交易，还可以不断学习和优化交易策略，使得交易者的收益最大化。同时，ROBOT还能够实时监控市场动态和变化，及时提醒交易者进行调整和操作，帮助交易者降低风险和损失。ROBOT的出现，将会极大地提高交易者的交易效率和收益，成为未来交易市场的重要助手。
    </div>
    <div>111111</div>
    </div>
    <div className="felx flex-col text-white justify-center items-center">
        <div className="font-bold text-3xl">关于我们</div>
        <ul className="flex flex-col justify-center items-center">
            <li className="my-4">联系我们</li>
            <li>宣传册下载</li>
            <li className="my-4">可接受服务</li>
            <li>隐私政策</li>
            <li className="my-4">服务条款</li>

        </ul>   
    </div>
    <div className="felx flex-col text-white">
        <div className=" font-bold text-3xl">客服</div>
        <div className="my-4">客服微信: zh8001988</div>
    </div>
    </div>
  </div>
);

export default FooterReel;
