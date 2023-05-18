import { HStack, Image } from "@chakra-ui/react";
import webpack from "../assets/webpack.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={webpack} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
