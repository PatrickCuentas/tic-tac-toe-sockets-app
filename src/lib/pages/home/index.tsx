import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoReloadOutline } from "react-icons/io5";
import Icon from "./components/Icon";

const Cell = () => {
  return (
    <Box
      bg={"#1f3540"}
      h={"6.8rem"}
      rounded={"xl"}
      boxShadow={"0 5px 50px -5px rgba(0,0,0,0.5)"}
    />
  );
};

const Home = () => {
  return (
    <Flex direction={"column"} gap={4} width="max-content" as="main">
      <Flex justifyContent={"space-between"}>
        <HStack>
          <Img src={"../assets/fa_close.svg"} />
          <Img src={"../assets/fa_circle.svg"} />
        </HStack>
        <Button
          bg={"#1f3540"}
          boxShadow={"0 5px 50px -5px rgba(0,0,0,0.5)"}
          color={"#fff"}
          leftIcon={<Img src="../assets/fa_close_white.svg" />}
        >
          Turn
        </Button>
        <Button bg={"#a8bec9"}>
          <Icon icon={<IoReloadOutline />} fontSize={"20px"} color={"#000"} />
        </Button>
      </Flex>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        {...Array.from({ length: 9 }, (_, i) => <Cell key={i} />)}
      </Grid>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <Box
          bg={"#30c4be"}
          px={8}
          py={4}
          rounded={"3xl"}
          color={"#000"}
          fontWeight={"bold"}
        >
          <Text align={"center"}>X{"(YOU)"}</Text>
          <Text align={"center"}>0</Text>
        </Box>
        <Box
          bg={"#a8bec9"}
          px={8}
          py={4}
          rounded={"3xl"}
          color={"#000"}
          fontWeight={"bold"}
        >
          <Text align={"center"}>Ties</Text>
          <Text align={"center"}>0</Text>
        </Box>
        <Box
          bg={"#f2b238"}
          px={8}
          py={4}
          rounded={"3xl"}
          color={"#000"}
          fontWeight={"bold"}
        >
          <Text align={"center"}>0{"(CPU)"}</Text>
          <Text align={"center"}>0</Text>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Home;
