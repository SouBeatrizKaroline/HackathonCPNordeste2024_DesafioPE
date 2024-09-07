import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { Nav } from "../../shared/components/Nav"
import logoDelas from '../../shared/images/logoDelas.png';
import medico from '../../shared/images/medico.png';
import empreendedora from '../../shared/images/empreendedora.png';
import emprego from '../../shared/images/emprego.png';
import seguranca from '../../shared/images/seguranca.png';
import educacao from '../../shared/images/educacao.png';
import draw from "../../shared/images/draw.png";
import { Footer } from "../../shared/components/Footer";


export const HomePage = () => {

    return (
        <main>
            <Nav />
            <Flex align={"center"}
                bgImage={draw}
                bgPosition="right"
                bgRepeat="no-repeat"
                bgSize="contain"
                height="100%"
            >
                <Box my="90px" ml={{base: "10px", md: "25px", lg:"50px"}} mr="0px">
                    <Flex align={"center"} my="30px">
                        <Box pos="relative" boxSize="170px" mr="20px">
                            <Image src={logoDelas} boxSize="full" color='linear(to-t, black.200, transparent.500)'/>
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                w="100%"
                                h="100%"
                                bgGradient="linear(to-b, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))"
                            />
                            <Text pos="absolute" top="85%" left="50%" color="white" transform="translate(-50%,-50%)">
                                Sobre
                            </Text>
                        </Box>
                        <Box pos="relative" boxSize="170px">
                            <Image src={medico} boxSize="full" color='linear(to-t, black.200, transparent.500)' />
                            <Text pos="absolute" top="85%" left="50%" color="white" transform="translate(-50%,-50%)">
                                Saúde
                            </Text>
                        </Box>
                    </Flex>

                    <Flex align={"center"} my="30px">
                        <Box pos="relative" boxSize="170px" mr="20px">
                            <Image src={empreendedora} boxSize="full" color='linear(to-t, black.200, transparent.500)' />
                            <Text pos="absolute" top="85%" left="50%" color="white" transform="translate(-50%,-50%)">
                                Empreendedorismo
                            </Text>
                        </Box>
                        <Box pos="relative" boxSize="170px">
                            <Image src={emprego} boxSize="full" color='linear(to-t, black.200, transparent.500)' />
                            <Text pos="absolute" top="85%" left="50%" color="white" transform="translate(-50%,-50%)">
                                Emprego
                            </Text>
                        </Box>
                    </Flex>


                    <Flex align={"center"}>
                        <Box pos="relative" boxSize="170px" mr="20px">
                            <Image src={seguranca} boxSize="full" color='linear(to-t, black.200, transparent.500)' />
                            {/* <Box
                                position="absolute"
                                top="0"
                                left="0"
                                w="100%"
                                h="100%"
                                bgGradient="linear(to-b, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))"
                            /> */}
                            <Text pos="absolute" top="85%" left="50%" color="white" transform="translate(-50%,-50%)">
                                Segurança
                            </Text>
                        </Box>
                        <Box pos="relative" boxSize="170px">
                            <Image src={educacao} boxSize="full" color='linear(to-t, black.200, transparent.500)' />
                            <Text pos="absolute" top="85%" left="50%" color="white" transform="translate(-50%,-50%)">
                                Educação
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box mr={{base: "25px", md: "100px", lg:"200px"}} ml={{base: "25px", md: "100px", lg:"200px"}} width={"400px"}>
                    <Image src={logoDelas} boxSize={{base: "100px", lg:"250px"}} />
                    <Text fontSize={{base: "large", md: "x-large", lg: "xx-large"}}>
                        Tudo sobre a saúde, segurança, educação, emprego e cuidado das mulheres pernambucanas em um só lugar
                    </Text>
                </Box>
            </Flex>
            <Footer />
        </main>
    )
}