import React,{useState,useEffect} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Dropdown, Menu, Space } from "antd";
import logo from "../../images/logo1.png";

const NavBarItem = ({ title, classprops }) => {
  return( <li   className={`mx-6 text-base hover:font-bold  cursor-pointer ${classprops}`}>{title}</li>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { t } = useTranslation();
  const onClick = ({ key }) => {
    i18n.changeLanguage(key);
    console.log(key);
  };  
  const [activeTabId, setActiveTabId] = useState('');
  useEffect(() => {
      console.log(activeTabId)
      const ele = document.getElementById(activeTabId);
      const elePosition = (ele?.getBoundingClientRect().top || 0);
      const offsetPosition = elePosition + window.pageYOffset - 75;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"  
      });

  }, [activeTabId]);

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "简体中文",
          key: "zh",
        },
        {
          label: "English",
          key: "en",
        },
      ]}
    />
  );
  const dataBase = [{content:t("header.Index"),key:"ref1"},{content:t("header.Exchange"),key:"ref2"},{content: t("header.Tutorials"),key:"ref3"},
  {content:t("header.Feature"),key:"ref4"},{content:"FAQ",key:"ref5"},{content:t("header.Strategy"),key:"ref6"},{content:t("header.Wallets"),key:"ref7"},]
  return (  
    <nav className="w-full flex fixed top-0 shadow-md gradient-bg-welcome md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* 市场 交换 教程  钱包 */}
        {dataBase.map((item, index) => (
          // <NavBarItem key={item + index} title={item.content} refKey={item.key}/>
          <li onClick={()=>setActiveTabId(item.key)} key={item + index}   className="mx-6 text-base hover:font-bold cursor-pointer">{item.content}</li>
        ))}
        <li className="cursor-pointer">
          <Dropdown overlay={menu}>
            <Space>
              <BiGlobe fontSize={28} />
            </Space>
          </Dropdown>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Index", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
