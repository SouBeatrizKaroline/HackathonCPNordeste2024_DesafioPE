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
                        Você não está sozinha! <br />
                        Aqui você encontra apoio e informações sobre como lidar com a violência contra a mulher.
                    </Text>
                    <Flex align="center" justifyContent="center">
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    DISQUE 180
                                    <Image src={whatsapp} boxSize="100px"></Image>
                                </Button>
                            </Link>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Fale com a polícia do estado pelo chat
                                </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Conheça todos os tipos de violência
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