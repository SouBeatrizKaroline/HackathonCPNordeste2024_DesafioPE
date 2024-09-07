import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react"
import { Nav } from "../../shared/components/Nav"
import { Title } from "../../shared/components/Title"
import whatsapp from "../../shared/images/whatsapp.png";
import draw from "../../shared/images/draw.png";
import { Footer } from "../../shared/components/Footer";

export const EmpregoPage = () => {

    return (
        <main>
        <Nav />
        <Box
            bgImage={draw}
            bgPosition="right"
            bgRepeat="no-repeat"
            bgSize="contain"
            height="73vH"
        >
            <Box m="50px">
                <Title text="Emprego" />
                <Text fontSize={{base: "large", md: "x-large", lg: "xx-large"}}>
                    Simplifique sua busca por emprego! No Delas, você encontra todas as ferramentas necessárias para construir um currículo de impacto, se preparar para entrevistas e encontrar a vaga dos seus sonhos de forma rápida e eficiente!
                </Text>
                <Flex align="center" justifyContent="center">
                    <Box>
                        <Link href="/" isExternal>
                            <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                Mentoria gratuita 2024.2                            
                            </Button>
                        </Link>
                        <Link href="/" isExternal>
                            <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                Entre em nosso canal de mulheres
                                <Image src={whatsapp} boxSize="100px"></Image>
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/" isExternal>
                            <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                Banco de dados - currículos
                            </Button>
                        </Link>
                        <Link href="/" isExternal>
                            <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                Outras
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
        <Footer />
        </main>
    )
}