import { Flex, Heading, Image, Box, Text } from "@chakra-ui/react";
// import { base } from "framer-motion/client";
import React from "react";

function About({ FeaturesData }) {
  return (
    <Flex
      mt={{ base: "30px", lg: "150px", xl: "200px" }}
      p={{ base: " 50px ", lg: "0px 100px ", "2xl": "20px 500px " }}
      direction={"column"}
      justifyContent={{ base: "center", md: "flex-start" }}
      gap={"30px"}
    >
      <hr
        border={"20px solid hsl(273, 4%, 51%)"}
        width={{ base: "20px", md: "40px" }}
      />
      {/* <Text
        w={{ base: "100px", md: "200px" }}
        justifySelf={"center"}
        alignItems={"center"}
        border={"1px solid hsl(273, 4%, 51%)"}
      ></Text> */}
      <Heading
        fontFamily={"DM Serif Display"}
        textAlign={{ base: "center", md: "left" }}
      >
        We're different
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={{ base: "30px", md: "10px", lg: "40px" }}
        alignItems={"center"}
      >
        {FeaturesData.map((data, index) => (
          <Flex
            gap={{ base: "15px", md: "18px" }}
            key={index}
            justifyContent={{ base: "center", md: "flex-start" }}
            direction={"column"}
            textAlign={{ base: "center", md: "left" }}
          >
            <Image
              alignSelf={{ base: "center", md: "start" }}
              src={data.icon}
              alt={data.icon}
              width={{ base: "60px", md: "50px" }}
            />
            <Heading
              fontSize={{ base: "20px", md: "20px" }}
              letterSpacing={"2px"}
              fontFamily={"DM Serif Display"}
            >
              {data.title}
            </Heading>
            <Text
              color={"hsl(273, 4%, 51%)"}
              fontSize={{ base: "13px", md: "14px" }}
              fontFamily={"Karla"}
            >
              {data.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default About;
