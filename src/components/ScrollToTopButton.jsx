import React, { useState, useEffect } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";


function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  // 处理滚动事件
  const handleScroll = () => {
    // 获取当前滚动位置
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 根据滚动位置判断是否显示回到顶部按钮
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    // 监听滚动事件
    window.addEventListener("scroll", handleScroll);

    // 清除滚动事件的监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 处理点击回到顶部按钮的事件
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 使用平滑滚动效果
    });
  };

  return (
    <div className="scroll-to-top fixed bottom-8 right-5">
      {isVisible && (
      <AiOutlineCaretUp onClick={scrollToTop} className="text-white" fontSize={68} />
      )}
    </div>
  );
}

export default ScrollToTopButton;
