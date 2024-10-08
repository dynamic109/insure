import { Flex, Image, Stack, Heading, Link } from "@chakra-ui/react";
import React from "react";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

function Footer() {
  const FooterData = [
    {
      title: "OUR COMPANY",
      link1: "HOW WE WORK",
      link2: "WHY INSURE?",
      link3: "CHECK PRICE",
      link4: "REVIEWS",
    },
    {
      title: "HELP ME",
      link1: "FAQ",
      link2: "TERMS OF USE",
      link3: "PRIVACY POLICY",
      link4: "COOKIES",
    },
    {
      title: "CONTACT",
      link1: "SALES",
      link2: "SUPPORT",
      link3: "LIVE CHAT",
      link4: "",
    },
    {
      title: "OTHERS",
      link1: "CAREERS",
      link2: "PRESS",
      link3: "LICENCES",
      link4: "",
    },
  ];
  return (
    <Flex
      direction={"column"}
      justifyContent={{ base: "center" }}
      p={{ base: " 50px ", lg: "50px 100px ", "2xl": "20px 500px " }}
      gap={"30px"}
      bg={"hsl(0, 0%, 98%)"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        gap={"25px"}
      >
        <Image src={Logo} alt="Insure logo" height={"13px"} width={"85px"} />
        <Stack direction={"row"} spacing={"10px"}>
          <Image src={Facebook} boxSize={5} />
          <Image src={Twitter} boxSize={5} />
          <Image src={Pinterest} boxSize={5} />
          <Image src={Instagram} boxSize={5} />
        </Stack>
      </Flex>
      <hr />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={"20px"}
      >
        {FooterData.map((data, index) => (
          <Stack
            direction={"column"}
            key={index}
            fontSize={"10px"}
            fontWeight={"500"}
            spacing={"20px"}
            textAlign={{ base: "center", md: "left" }}
            mr={{ base: "0", md: "70px", lg: "150px" }}
            lineHeight={"20px"}
            fontFamily={"DM Serif Display"}
          >
            <Heading color={"hsl(273, 4%, 51%)"} fontSize={"11px"}>
              {data.title}
            </Heading>
            <Stack direction={"column"} color={"hsl(256, 26%, 20%)"}>
              <Link href="#">{data.link1}</Link>
              <Link href="#">{data.link2}</Link>
              <Link href="#">{data.link3}</Link>
              <Link href="#">{data.link4}</Link>
            </Stack>
          </Stack>
        ))}
      </Flex>
    </Flex>
  );
}

export default Footer;
