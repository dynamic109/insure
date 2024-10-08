import { Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";

function Aside() {
  return (
    <Flex
      my={{ base: "10px", md: "50px" }}
      p={{ base: " 50px ", lg: "0px 100px ", "2xl": "20px 500px " }}
    >
      <Flex
        width={"100%"}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        bg={"hsl(256, 26%, 20%)"}
        p={"30px 40px"}
        backgroundImage={"url('../images/bg-pattern-intro-right-mobile.svg')"}
        backgroundRepeat="no-repeat"
        backgroundSize="auto"
        position={"relative"}
        color={"white"}
        gap={"30px"}
      >
        <Heading
          fontFamily={"DM Serif Display"}
          maxW={"400px"}
          textAlign={{ base: "center", md: "left" }}
        >
          Find out more
          <br />
          about how we work
        </Heading>
        <Button
          border={"1px solid white"}
          maxW={"200px"}
          p="3px 15px"
          bg={"transparent"}
          color={"white"}
          fontSize={"11px"}
          fontWeight={"500"}
          borderRadius={"0"}
          letterSpacing={"3px"}
          _hover={{
            background: "white",
            color: "hsl(256, 26%, 20%)",
          }}
        >
          HOW WE WORK
        </Button>
      </Flex>
    </Flex>
  );
}

export default Aside;
