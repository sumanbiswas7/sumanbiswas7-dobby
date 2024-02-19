import { Box, Flex, Grid, SimpleGrid } from "@mantine/core";
import { NavBar } from "../components/navbar";

export default function HomePage() {
   return (
      <Flex w={"100vw"} h={"100vh"} direction={"column"}>
         <NavBar />

         <Box h={"100%"} style={{ overflowY: "scroll" }}>
            <SimpleGrid bg={"red"} w={"100%"} cols={2} spacing="sm" p={"sm"}>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>1</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>2</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>3</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>4</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
               <div style={{ backgroundColor: "blue", height: "10rem" }}>5</div>
            </SimpleGrid>
         </Box>
      </Flex>
   );
}
