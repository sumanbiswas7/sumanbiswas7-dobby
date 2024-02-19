import { Login } from "../components/login";
import { Flex } from "@mantine/core";

export default function LoginPage() {
   return (
      <Flex p={"md"} w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
         <Login />
      </Flex>
   );
}
