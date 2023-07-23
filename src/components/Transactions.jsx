import React, { useContext } from "react";
import { Button } from "antd";
import Xgplayer from './xgplayer'



const Transactions = () => {
  // const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div id="ref3"  className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col  items-center   md:p-12 py-12 px-4">
        <h3 className=" text-3xl text-white text-center my-2">
          观看ROBOT使用教程
        </h3>
        <div className="text-white text-1xl w-6/12 text-center">
          您只需对接tradingview超级图标网站策略库，挑选出优质的交易策，Robot将呈现完美自动交易效果效果，全程无
          需人工干预 从此告别熬夜盯盘 错过最佳价格买卖
        </div>
        <Button type="primary" className="mt-10">更多教程</Button>
        <div className="my-20">
        <Xgplayer/>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
