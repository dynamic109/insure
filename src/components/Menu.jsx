import { Flex, Link } from "@chakra-ui/react";
import React from "react";

function Menu() {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      alignItems={"center"}
      gap={"15px"}
      color={"hsl(273, 4%, 51%)"}
      fontSize={"11px"}
      fontWeight={"600"}
    >
      <Link
        _hover={{
          color: "hsl(256, 26%, 20%)",
        }}
      >
        HOW WE WORK
      </Link>
      <Link
        _hover={{
          color: "hsl(256, 26%, 20%)",
        }}
      >
        BLOG
      </Link>
      <Link
        _hover={{
          color: "hsl(256, 26%, 20%)",
        }}
      >
        ACCOUNTS
      </Link>
      <Link
        _hover={{
          background: "hsl(256, 26%, 20%)",
          color: "white",
          p: "8px 18px",
        }}
        p={"5px 12px"}
        border={"1px solid hsl(270, 9%, 17%)"}
      >
        VIEW PLANS
      </Link>
    </Flex>
  );
}

export default Menu;
