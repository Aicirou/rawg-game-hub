import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width={"200px"} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
