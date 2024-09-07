import { Box, Text } from "@chakra-ui/react"
import { Nav } from "../../shared/components/Nav"
import { Title } from "../../shared/components/Title"
import draw from "../../shared/images/draw.png";
import { Footer } from "../../shared/components/Footer";

export const AboutPage = () => {

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
                    <Title text="Sobre o DELAS"/>
                    <Text fontSize={{base: "large", md: "x-large", lg: "xx-large"}} align={"center"}>
                    Essa plataforma inovadora, idealizada pelo Governo do Estado de Pernambuco, representa um marco na consolidação de políticas públicas para as mulheres, agregando e otimizando os diversos programas já existentes.
                    </Text>
                </Box>
            </Box>
            <Footer />
        </main>
    )
}