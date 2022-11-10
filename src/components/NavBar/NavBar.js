import React, { useState } from "react";
import { NavbarContainer, NavbarWrapper, Menu, MenuItem, MenuItemLink, IconLogoMovile, IconLogo } from "./NavBar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";



function NavBar() {
    const [click, setClick] = useState(false);

    const changeClick = () => {
        setClick(!click);
    }
    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        {/* Search Movies */}
                        {/* <img src="./img/logo.png" /> */}
                        <Link to="/" className="link">
                            SEARCH
                        </Link>
                    </IconLogo>
                    <IconLogoMovile onClick={() => changeClick()}>
                        {click ? <FaTimes /> : <FaBars />}
                    </IconLogoMovile>
                    <Menu click={click}>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <div>
                                    <AiFillStar />
                                    <NavLink to="/favorites">Favorites</NavLink>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    );
}

export default NavBar;