import { Flex, Text, ActionIcon, TextInput } from "@mantine/core";
import { IconSearch, IconLogout } from "@tabler/icons-react";

export function NavBar() {
   return (
      <Flex align={"center"} gap={"md"} p={"md"} bg={"rgba(0,0,0,0.05)"} w={"100%"} pos={"sticky"}>
         <Text w={"100%"} fw={"bold"} visibleFrom="sm">
            Image Search
         </Text>

         <Flex w={"100%"} justify={"flex-end"} gap={"md"} align={"center"}>
            <TextInput
               maw={"20rem"}
               placeholder="Search by image names"
               rightSection={
                  <ActionIcon>
                     <IconSearch size={13} />
                  </ActionIcon>
               }
            />

            <ActionIcon bg={"red"}>
               <IconLogout size={13} />
            </ActionIcon>
         </Flex>
      </Flex>
   );
}
