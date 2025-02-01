import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Notifications } from "./notifications";

const navLinks = [
    { title: "Home", to: "/", icon: "feather-home" },
    { title: "Stories", to: "/defaultstorie", icon: "feather-zap" },
    { title: "Videos", to: "/defaultvideo", icon: "feather-video" },
    { title: "Groups", to: "/defaultgroup", icon: "feather-user" },
    { title: "Shop", to: "/shop2", icon: "feather-shopping-bag" },
];
export const Layout = ({ children }) => (
    <Fragment>
        <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
                <Link to="/">
                    <i className="feather-zap text-success display2-size me-3 ms-0"></i>
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0 mr-2">
                        Sociala.
                    </span>
                </Link>
            </div>

            <form action="#" className="float-left header-search ms-3">
                <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-sm text-grey-400"></i>
                    <input
                        type="text"
                        placeholder="Start typing to search.."
                        className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
                    />
                </div>
            </form>
            {/* Desktop Menu */}

            {/* <NavLink
            activeClassName="active"
            to="/home"
            className="p-2 text-center ms-3 menu-icon center-menu-icon"
        >
            <i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
            activeClassName="active"
            to="/defaultstorie"
            className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
            <i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
            activeClassName="active"
            to="/defaultvideo"
            className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
            <i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
            activeClassName="active"
            to="/defaultgroup"
            className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
            <i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink>
        <NavLink
            activeClassName="active"
            to="/shop2"
            className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
            <i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
        </NavLink> */}

            {/* Krótszy zapis powyższego kodu: */}

            {navLinks.map((navLink, index) => (
                <NavLink

                    // very important:
                    key={`${navLink.title},${index}`}

                    activeClassName="active"
                    to={navLink.to}
                    className="p-2 text-center ms-0 menu-icon center-menu-icon"
                >
                    <i
                        className={`${navLink.icon} font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500`}
                    />
                </NavLink>
            ))}

            <Notifications />
            {/* /Desktop Menu */}

            <Link
                to="/defaultmessage"
                className="p-2 text-center ms-3 menu-icon chat-active-btn"
            >
                <i className="feather-message-square font-xl text-current"></i>
            </Link>

            <Link to="defaultsettings" className="p-0 ms-3 menu-icon">
                <img src="assets/images/user.png" alt="user" className="w40 mt--1" />
            </Link>
        </div>
        {children}
    </ Fragment>
);