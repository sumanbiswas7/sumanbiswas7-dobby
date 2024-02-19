import { Box, Button, Flex, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { errorNotification, successNotification } from "../utils/notifications";
import { useNavigate } from "react-router-dom";

export function Login() {
   const navigate = useNavigate();

   async function loginUser() {
      try {
         navigate("/");
         successNotification("User logged in");
      } catch (error) {
         errorNotification("Unable to login user");
      }
   }

   return (
      <Box>
         <Title mb={"sm"} c={"rgba(0,0,0,0.6)"}>
            Login
         </Title>
         <Flex
            direction="column"
            bg={"rgba(0,0,0,0.05)"}
            p={"md"}
            w={"90vw"}
            maw={"40rem"}
            style={{ borderRadius: 10 }}
         >
            <TextInput placeholder="john@email.com" label="Email" required w={"100%"} />
            <PasswordInput placeholder="*****" label="Password" required mb={"sm"} w={"100%"} />

            <Text size="xs" mb={"sm"}>
               Credentials:{" "}
               <Text span c={"#39d5ac"}>
                  john@email.com, john12345
               </Text>
            </Text>
            <Button onClick={loginUser}>Submit</Button>
         </Flex>
      </Box>
   );
}
