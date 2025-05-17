import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import footerStyle from "./footer.module.css";

const FooterNav = () => {
  return (
    <div className={footerStyle.wrapper}>
      <div className={footerStyle.menu}>
        <div className={footerStyle.leftItem}>
          <span>find me in:</span>
        </div>
        <div className={footerStyle.leftItem}>
          <a
            className={footerStyle.leftItemLink}
            href="https://www.linkedin.com/in/ranto-berk/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className={footerStyle.menu}>
        <div className={footerStyle.rightItem}>
          <a
            className={footerStyle.rightItemLink}
            href="https://github.com/RantoUzumaki"
            target="_blank"
            rel="noreferrer"
          >
            @RantoUzumaki <FaGithub className={footerStyle.rightItemLinkSVG} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
