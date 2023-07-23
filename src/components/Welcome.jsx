import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { TransactionContext } from "../context/TransactionContext";
import  bgc from '../../images/bgc.png'
// const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
// console.log(t);

// useContext可以帮助我们跨越组件层级直接传递变量，实现数据共享。
const Welcome = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const containerStyle = {
    backgroundImage: `url(${bgc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const { t } = useTranslation();

  return (
    <div id="ref1" className="flex w-full mt-[80px] h-full justify-center items-center " style={containerStyle}>
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            {t("Welcome.Send Crypto")} <br />  {t("Welcome.across the world")}
          </h1>
          <p className="text-left mt-5  text-white leading-7 font-medium border-l-4 pl-4 border-white md:w-6/12 w-11/12 text-base">
            {t("Welcome.Explore")}
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row  justify-center items-center my-5 bg-[#FFD700]  rounded-full cursor-pointer hover:bg-[#FFDF7F]"
            >
              {/* <AiFillPlayCircle className="text-white mr-2" /> */}
              <div className="text-white text-base px-6 py-3 font-semibold">
                {t("Welcome.Connect Wallet")}

              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
