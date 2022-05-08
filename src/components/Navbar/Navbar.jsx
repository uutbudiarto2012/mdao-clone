import "./Navbar.scss";
import { GrValidate } from "react-icons/gr";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Menu = () => {
  return (
    <div className="navbar">
      <div className="top px-24 ">
        <div className="top-item">
          Uniswap Page <span>0x999000...999456</span>
        </div>
        <div className="top-item right">
          Uniswap Page <span>0x999000...999456</span>
        </div>
      </div>
      <div className="main-nav px-5 md:px-24">
        <div className="left">LOGO</div>
        <div className="right">
          <ul className="menus">
            <li className="menu-list">
              <a href="/#" className="menu-link">
                About
              </a>
            </li>
            <li className="menu-list">
              <a href="/#" className="menu-link">
                Key Features
                <div className="dropdown-menu">
                  <ul className="drop-menu">
                    <li>
                      <div className="icon">
                        <GrValidate />
                      </div>
                      <div className="menu-title">STACKING</div>
                    </li>
                    <li>
                      <div className="icon">
                        <GrValidate />
                      </div>
                      <div className="menu-title">GOVERNANCE</div>
                    </li>
                    <li>
                      <div className="icon">
                        <GrValidate />
                      </div>
                      <div className="menu-title">VALIDATOR</div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li className="menu-list">
              <a href="/#" className="menu-link">
                Roadmap
              </a>
            </li>
            <li className="menu-list">
              <a href="/#" className="menu-link">
                Governance
              </a>
            </li>
            <li className="menu-list">
              <a href="/#" className="menu-link">
                Sherpas
              </a>
            </li>
            <li className="menu-list">
              <a href="/#" className="menu-link">
                OM
              </a>
            </li>
            <li className="menu-list">
              <a href="/#" className="menu-link">
                News
              </a>
            </li>
            <li>
              <div className="menu-action">
                <button>
                  <span>App</span>
                  <BsArrowUpRightSquare />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
