import { Box, Flex, SimpleGrid, Text } from "@mantine/core";
import { NavBar } from "../components/navbar";
import DUMMY_DATA from "../data/dummy-data.json";
import { Card } from "../components/card";

export default function HomePage() {
   return (
      <Flex w={"100vw"} h={"100vh"} direction={"column"}>
         <NavBar />

         <Box h={"100%"} style={{ overflowY: "scroll" }}>
            {DUMMY_DATA.length ? (
               <SimpleGrid w={"100%"} cols={2} spacing="sm" p={"sm"}>
                  {DUMMY_DATA.map((data) => (
                     <Card title={data.name} url={data.url} />
                  ))}
               </SimpleGrid>
            ) : (
               <Text>No data to show</Text>
            )}
         </Box>
      </Flex>
   );
}
