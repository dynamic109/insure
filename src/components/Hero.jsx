import React from "react";
import { Button, Flex, Heading, Image, Text, Stack } from "@chakra-ui/react";
import HeroImageMobile from "../images/image-intro-mobile.jpg";

function Hero({ isView }) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      backgroundImage={
        "url('../images/bg-pattern-intro-left-mobile.svg'), url('../images/bg-pattern-intro-right-mobile.svg')"
      }
      backgroundPosition={["top left, bottom right", "top right, bottom left"]}
      backgroundRepeat="no-repeat"
      backgroundSize="auto, auto"
      position={"relative"}
    >
      <Flex
        height={{ base: "100%", lg: "500px" }}
        p={{ base: " 0px ", lg: "20px 100px ", "2xl": "20px 500px " }}
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        bg={"hsl(256, 26%, 20%)"}
        gap={"30px"}
      >
        <Flex
          flex={{ base: "1", lg: "2" }}
          justify="center"
          align="center"
          order={{ base: "1", lg: "2" }}
          pt={{ lg: "200px" }}
        >
          <Image
            src={HeroImageMobile}
            alt="A picture of a Family"
            width={"100%"}
          />
        </Flex>
        <Flex
          order={{ base: "2", lg: "1" }}
          direction={"column"}
          flex={{ base: "2", lg: "2" }}
          color={"white"}
          textAlign={{ base: "center", lg: "start" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          py={"60px"}
          position="relative"
          zIndex="1"
          gap={"40px"}
          px={{ base: "40px", md: "100px", lg: "0" }}
        >
          {/* <hr width={"100px"} display={{ base: "none", md: "block" }} /> */}
          <Text
            maxW={"200px"}
            display={{ base: "none", lg: "block" }}
            border={"1px solid grey"}
          ></Text>
          <Stack>
            <Heading
              fontFamily={"DM Serif Display"}
              letterSpacing={"3px"}
              fontSize={{ base: "25px", md: "40px" }}
            >
              Humanizing your insurance.
            </Heading>
            <Text
              fontFamily={"Karla"}
              letterSpacing={"1px"}
              fontSize={{ base: "13px", md: "18px" }}
            >
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </Text>
          </Stack>
          <Button
            border={"1px solid white"}
            maxW={"200px"}
            alignSelf={{ base: "center", lg: "start" }}
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
            VIEW PLANS
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Hero;
