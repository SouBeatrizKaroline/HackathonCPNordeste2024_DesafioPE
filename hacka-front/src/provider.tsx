import { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "./shared/theme/Fonts";



const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme = {extendTheme({
      fonts: {
        heading: `'Akatab', 'sans-serif'`,
        body: `'Akatab', 'sans-serif'`, 
      }
    })}>
        <Fonts />
        {children}
    </ChakraProvider>
  );
};

export default Provider;