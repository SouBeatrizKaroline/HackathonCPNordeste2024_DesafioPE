import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react"
import { Nav } from "../../shared/components/Nav"
import { Title } from "../../shared/components/Title"
import pediatria from "../../shared/images/pediatria.png"
import geriatria from "../../shared/images/geriatria.png"
import saudeDaMulher from "../../shared/images/saudeMulher.png"
import draw from "../../shared/images/draw.png";
import { Footer } from "../../shared/components/Footer"

export const SaudePage = () => {

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
                    <Title text="Saúde"/>
                    <Text fontSize={{base: "large", md: "x-large", lg: "xx-large"}}>
                        Seja qual for a sua necessidade, nós te ajudamos a encontrar o atendimento ideal. <br/>
                        Agendar sua consulta é fácil e rápido, agende agora!
                    </Text>
                    <Flex align="center" justifyContent="center">
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Pediatria
                                    <Image src={pediatria} boxSize="100px"></Image>
                                </Button>
                            </Link>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Saúde da mulher
                                    <Image src={saudeDaMulher} boxSize="100px"></Image>
                                </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Geriatria
                                    <Image src={geriatria} boxSize="100px"></Image>
                                </Button>
                            </Link>
                            <Link href="/" isExternal>
                                <Button my="30px" _hover={{bgColor: "rgba(138, 45, 41, 1)"}} height="144px" fontSize={{base: "large", md: "x-large", lg: "xx-large"}} width="614.93px" color="white" bgColor="rgba(208, 115, 111, 1)" border="2px" borderStyle="solid" borderColor="rgba(223, 41, 53, 1)" borderRadius="40px">
                                    Outras Especialidades
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