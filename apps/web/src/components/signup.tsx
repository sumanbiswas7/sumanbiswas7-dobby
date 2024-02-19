import { Box, Button, Flex, PasswordInput, Text, TextInput, Title } from "@mantine/core";

export function Signup() {
   return (
      <Box>
         <Title mb={"sm"} c={"rgba(0,0,0,0.6)"}>
            Signup
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

            <Button>Create Account</Button>
         </Flex>
      </Box>
   );
}
