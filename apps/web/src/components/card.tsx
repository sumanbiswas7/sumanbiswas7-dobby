import { Box, Image, Text } from "@mantine/core";

export function Card({ url, title }: Props) {
   return (
      <Box>
         <Image src={url} style={{ width: "100%", height: "15rem", objectFit: "cover", borderRadius: 5 }} />
         <Text size="lg" fw={"bold"}>
            {title}
         </Text>
      </Box>
   );
}

interface Props {
   url: string;
   title: string;
}
