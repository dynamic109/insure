import React, { useState } from "react";

import { Flex, Image, Stack, Link } from "@chakra-ui/react";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";
import Menu from "./Menu";

function NavBar() {
  const [isView, setIsView] = useState(false);

  const toggle = () => {
    setIsView(!isView);
  };

  return (
    <Flex direction={"column"}>
      <Flex
        justifyContent={{ base: "space-between" }}
        alignItems={"center"}
        padding={{ base: "20px", md: "30px" }}
      >
        <Image src={Logo} height={{ base: "15px", md: "32px" }} />
        <Image
          src={isView ? CloseIcon : MenuIcon}
          height={{ base: "30px", md: "45px" }}
          display={{ base: "block", md: "none" }}
          onClick={toggle}
        />
        <Menu />
      </Flex>
      <Flex
        display={isView ? "flex" : "none"}
        textAlign={"center"}
        direction={"column"}
        pt={"30px"}
        gap={"15px"}
        color={"white"}
        className="menu-background"
        fontWeight={"500"}
        fontSize={"20px"}
      >
        <Link href="#">HOW WE WORK</Link>
        <Link href="#">BLOG</Link>
        <Link href="#">ACCOUNT</Link>
        <Link href="#">VIEW PLANS</Link>
      </Flex>
    </Flex>
  );
}

export default NavBar;
