import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: "100%", lg: "300px", xl: "100%" }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
