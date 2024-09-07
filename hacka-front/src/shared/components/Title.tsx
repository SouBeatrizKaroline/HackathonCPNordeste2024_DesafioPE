import { Text } from "@chakra-ui/react";


export interface ITitleProps{
    text: string;
}

export const Title = ({text}: ITitleProps) => {
    return (
        <Text fontSize={{lg:'xxx-large', base: 'x-large'}} fontWeight='extrabold' bgGradient='linear(to-r, #DF2935, #E8C6C5)' bgClip="text">
            {text}
        </Text>
    )
}