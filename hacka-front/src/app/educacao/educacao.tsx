import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react"
import { Nav } from "../../shared/components/Nav"
import { Title } from "../../shared/components/Title"
import draw from "../../shared/images/draw.png";
import { Footer } from "../../shared/components/Footer";


export const EducacaoPage = () => {

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
                    <Title text="Educação" />
                    <Text fontSize={{base: "large", md: "x-large", lg: "xx-large"}}>
                        Procurando democratizar o conhecimento, nossa plataforma possuí diversos cursos com empresas parceiras ao Governo do Estado. <br />
                        Confira algumas delas abaixo:
                    </Text>
                    <Flex align="center" justifyContent="center">
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Cursos online gratuitos                                
                                </Button>
                            </Link>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Lista de bolsas de estudo em graduação
                                </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Preparatório gratuito para o ENEM 2024
                                </Button>
                            </Link>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Cruso de confeitaria - SENAC
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