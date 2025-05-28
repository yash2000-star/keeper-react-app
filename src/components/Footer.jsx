import React from "react";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className="text-center mt-5 py-3 bg-light">
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
};

export default Footer;