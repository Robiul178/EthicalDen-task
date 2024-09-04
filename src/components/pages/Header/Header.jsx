import { FaArrowRight } from "react-icons/fa6";
import Logo from '../../../../src/assets/Logo.svg'

const Header = () => {


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About us</a></li>
                        <li>
                            <a>Study Distention</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Gallery</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Blog</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>
                <div>
                    <img
                        className='w-[143px] h-[41px]'
                        src={Logo}
                        alt="logo"
                    />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Home</a></li>
                    <li><a>About us</a></li>
                    <li>
                        <details>
                            <summary className="text-[#F79B2C] "> Study Distention</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary> Gallery</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Blog</a></li>
                    <li><a>Contact us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="border px-6 py-1 border-[#F79B2C] text-[#F79B2C] font-semibold flex gap-3">Enquire Now <FaArrowRight className="mt-1" /></button>
            </div>
        </div>
    );
};

export default Header;