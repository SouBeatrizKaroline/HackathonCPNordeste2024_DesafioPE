import { Box, Link, Flex, Image } from "@chakra-ui/react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import logoPE from '../images/logoPE.png';
import femaleUser from '../images/femaleUser.png';

export const Nav = () => {

    const location = useLocation();

    return (
        <Box bgColor="#D0736F" height="100px">
            <Flex justifyContent={"space-between"} align="center" >
                <Flex align="center" px={4} color={"white"}>
                    <Image src={logoPE} boxSize="100px" m={0} mr={5}/>
                    <Link fontWeight={location.pathname === '/' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/">Início</Link>
                    <Link fontWeight={location.pathname === '/sobre' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/sobre" >Sobre</Link>
                    <Link fontWeight={location.pathname === '/saude' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/saude">Saúde</Link>
                    <Link fontWeight={location.pathname === '/seguranca' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/seguranca">Segurança</Link>
                    <Link fontWeight={location.pathname === '/educacao' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/educacao">Educação</Link>
                    <Link fontWeight={location.pathname === '/emprego' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/emprego">Emprego</Link>
                    <Link fontWeight={location.pathname === '/empreendedorismo' ? "bold" : "normal"} as={RouterLink} mr={5} fontSize="20px" _hover={{fontWeight: 'bold'}} to="/empreendedorismo">Empreendedorismo</Link>
                </Flex>
                <Image src={femaleUser} boxSize="60px"/>
            </Flex>
        </Box>
    )
}