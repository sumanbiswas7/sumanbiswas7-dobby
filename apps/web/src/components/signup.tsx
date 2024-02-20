import { Box, Button, Flex, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { errorNotification, successNotification } from "../utils/notifications";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
   const [name, setName] = useState<string | null>(null);
   const [email, setEmail] = useState<string | null>(null);
   const [pass, setPass] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   async function createAccount() {
      try {
         if (!name || !email || !pass) return errorNotification("Name Email and Pass is required");
         setLoading(true);
         const BASE_URL = (import.meta as any).env.VITE_BASE_URL;
         const res = await axios.post(`${BASE_URL}/auth/signup`, { name, email, password: pass });
         if (res.status !== 201) return errorNotification("Something went wrong");
         successNotification("User signed up");
         localStorage.setItem("token", res.data.token);
         setLoading(false);
         navigate("/");
      } catch (error) {
         setLoading(false);
         errorNotification("Something went wrong");
      }
   }

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
            <TextInput
               onChange={(e) => setName(e.target.value)}
               placeholder="John Doe"
               label="Name"
               required
               w={"100%"}
            />
            <TextInput
               onChange={(e) => setEmail(e.target.value)}
               placeholder="john@email.com"
               label="Email"
               required
               w={"100%"}
            />
            <PasswordInput
               onChange={(e) => setPass(e.target.value)}
               placeholder="*****"
               label="Password"
               required
               mb={"sm"}
               w={"100%"}
            />

            <Button onClick={createAccount} loading={loading}>
               Create Account
            </Button>
         </Flex>
      </Box>
   );
}
