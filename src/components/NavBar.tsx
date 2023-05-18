import { HStack, Image, Text } from "@chakra-ui/react";
import webpack from "../assets/webpack.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={webpack} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
