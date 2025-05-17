import { Link, useLocation } from "react-router-dom";
import headerStyle from "./header.module.css";

const HeaderNav = () => {
  let location = useLocation();

  return (
    <div className={headerStyle.wrapper}>
      <div className={headerStyle.menu}>
        <div className={`${headerStyle.logo} ${headerStyle.leftItem}`}>
          <Link className={headerStyle.leftItemLink} to="/">
            ranto-berk
          </Link>
        </div>

        <div
          className={
            location.pathname === "/"
              ? headerStyle.leftActiveItem
              : headerStyle.leftItem
          }
        >
          <Link className={headerStyle.leftItemLink} to="/">
            _hello
          </Link>
        </div>

        <div
          className={
            location.pathname === "/about-me"
              ? headerStyle.leftActiveItem
              : headerStyle.leftItem
          }
        >
          <Link className={headerStyle.leftItemLink} to="/about-me">
            _about-me
          </Link>
        </div>

        <div
          className={
            location.pathname === "/projects"
              ? headerStyle.leftActiveItem
              : headerStyle.leftItem
          }
        >
          <Link className={headerStyle.leftItemLink} to="/projects">
            _projects
          </Link>
        </div>
      </div>

      <div className={headerStyle.menu}>
        <div
          className={
            location.pathname === "/contact-me"
              ? headerStyle.rightActiveItem
              : headerStyle.rightItem
          }
        >
          <Link className={headerStyle.rightItemLink} to="/contact-me">
            _contact-me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
