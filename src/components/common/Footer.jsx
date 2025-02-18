import * as Route from "@/constants/routes";
import logo from "@/images/logo.png";
import bytetactix from "@/images/bytetactix-logo.png";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by{" "}
            {/* <a href="https://github.com/jgudo">JULIUS GUEVARRA</a> */}
            <img src={bytetactix} height={30} />
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} height={30} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            All rights reserved
            {/* <a href="https://github.com/jgudo/ecommerce-react">HERE</a> */}
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
