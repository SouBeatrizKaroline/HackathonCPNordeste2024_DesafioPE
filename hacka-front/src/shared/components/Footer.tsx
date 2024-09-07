import { Box, Flex, Text } from "@chakra-ui/react"


export const Footer = () => {
    return (
        <Box as="footer" bgColor="#D0736F" height="12vH" color="white" >
            <Flex align={"center"} justify={"flex-start"} px="30px" py="15px">
                <Box mx="50px">
                    <Text>
                        Serviços
                    </Text>
                    <Text>
                        Governos
                    </Text>
                    <Text>
                        Órgãos
                    </Text>
                </Box>
                <Box>
                    <Text>
                        Secretaria
                    </Text>
                    <Text>
                        Notícias
                    </Text>
                    <Text>
                        Educação
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}