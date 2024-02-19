import { Flex } from "@mantine/core";
import { Signup } from "../components/signup";

const SignupPage: React.FC = () => {
   return (
      <Flex p={"md"} w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
         <Signup />
      </Flex>
   );
};

export default SignupPage;
