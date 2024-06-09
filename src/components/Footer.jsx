import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-blue-400 text-primary-content">
                <aside>
                    <h1 className="btn btn-ghost text-2xl -ml-7 lg:-ml-3 text-white"> <TfiCup /> Innovate <span className="-ml-2 text-orange-500">Contest</span> </h1>
                    <p className="font-bold text-gray-500 ">
                        {/* <nav >
                            <h6 className="footer-title text-gray-200 ">Services</h6>
                            <a className="link link-hover text-gray-500 ">Branding</a>
                            <a className="link link-hover text-gray-500 mx-1">Design</a>
                            <a className="link link-hover text-gray-500">Marketing</a>
                            <a className="link link-hover text-gray-500 mx-1">Advertisement</a>
                        </nav> */}
                    </p>
                    <p>Copyright © 2024 - All right reserved InnovateContest</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;