import { useState } from "react";
import { Flex, Text, ActionIcon, TextInput, FileButton, Modal, Image, Button } from "@mantine/core";
import { IconSearch, IconLogout } from "@tabler/icons-react";

export function NavBar() {
   const [modal, setModal] = useState(false);
   const [file, setFile] = useState(false);
   const [loading, setLoading] = useState(false);

   async function handleImageSave() {
      try {
      } catch (error) {}
   }

   function handleFileBtnClick(file: any) {
      setFile(file);
      setModal(true);
   }

   return (
      <Flex align={"center"} gap={"md"} p={"md"} bg={"rgba(0,0,0,0.05)"} w={"100%"} pos={"sticky"}>
         <Text w={"100%"} fw={"bold"} visibleFrom="sm">
            Image Search
         </Text>

         <Flex w={"100%"} justify={"flex-end"} gap={"md"} align={"center"}>
            {/* Searchbar */}
            <TextInput
               maw={"20rem"}
               placeholder="Search by image names"
               rightSection={
                  <ActionIcon>
                     <IconSearch size={13} />
                  </ActionIcon>
               }
            />

            {/* New Image */}
            <FileButton onChange={handleFileBtnClick} accept="image/png,image/jpeg">
               {(props) => <ActionIcon {...props}>+</ActionIcon>}
            </FileButton>

            {/* Logout */}
            <ActionIcon bg={"red"}>
               <IconLogout size={13} />
            </ActionIcon>
         </Flex>

         <Modal title="Image Preview" opened={modal && file} onClose={setModal}>
            {file && (
               <Image style={{ width: "100%", height: "10rem", objectFit: "cover" }} src={URL.createObjectURL(file)} />
            )}
            <Button mt={"sm"} fullWidth onClick={handleImageSave} loading={loading}>
               Save
            </Button>
         </Modal>
      </Flex>
   );
}
