import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react"
import { Nav } from "../../shared/components/Nav"
import { Title } from "../../shared/components/Title"
import whatsapp from "../../shared/images/whatsapp.png";
import draw from "../../shared/images/draw.png";
import { Footer } from "../../shared/components/Footer";

export const EmpreendedorismoPage = () => {

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
                    <Title text="Empreendedorismo" />
                    <Text fontSize={{base: "large", md: "x-large", lg: "xx-large"}}>
                    Tudo o que você precisa para empreender, em um só lugar. <br />
                    Decole seu negócio com o apoio do Governo de Pernambuco! Cursos, crédito especial e uma comunidade de empreendedores te esperando.
                    </Text>
                    <Flex align="center" justifyContent="center">
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Programas de Apoio
                                </Button>
                            </Link>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Crédito do Governo Estadual
                                </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Cursos profissionalizantes
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