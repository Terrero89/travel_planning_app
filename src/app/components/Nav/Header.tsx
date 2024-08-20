import React from "react";
import NavLinks from "./NavLinks";

interface Props { }

const Header: React.FC<Props> = () => {
    return (
        <div>
            <header>
                <nav
                    className="border-2 border-white border-opacity-25 p-5 flex justify
    justify-between rounded-md"
                >
                    <div className="flex justify-center mx-5 text-1xl text-gray-100">
                        LOGO
                    </div>
                    <NavLinks />
                </nav>
            </header>
        </div>
    );
};

export default Header;