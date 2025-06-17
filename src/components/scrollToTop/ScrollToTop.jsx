import { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [visibleBtn, setVisibleBtn] = useState(false)

  const handleScroll = ()=>{
    setVisibleBtn(window.scrollY > 300)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return ()=>window.removeEventListener("scroll", handleScroll)
  },[])

  const scrollTop=()=>{
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    })
  }

  return (
    <button className={`btn scrollToTop flex-center ${visibleBtn ? "active" : ""}`} 
      onClick={scrollTop}
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </button>
  );
};

export default ScrollToTop;
