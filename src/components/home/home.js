import React from "react";
import { FiChevronRight } from "react-icons/fi";
import homeStyle from "./home.module.css";

const Home = () => {
  return (
    <div className={homeStyle.wrapper}>
      <div className={homeStyle.leftWrapper}>
        <div className={homeStyle.leftText}>
          <span className={homeStyle.firstTxt}>Hi all. I am</span>
          <span className={homeStyle.nameTxt}>Ranto Berk</span>
          <span className={homeStyle.developerTxt}>
            <FiChevronRight /> Full-stack Developer
          </span>
        </div>
      </div>
      <div className={homeStyle.rightWrapper}>
        <div className={homeStyle.backdropFilterTop} />
        <div className={homeStyle.backdropFilterBottom} />
      </div>
    </div>
  );
};

export default Home;
