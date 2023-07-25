import React from "react";
import Nav from "./Nav";
import { Box, HStack } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        ></HStack>
            <img src="./images/littlelemonlogo.png" alt="LittleLemonLogo" width="42" height="50"/>
            <meta name="og:image" content="little lemon logo"/>
            <Nav/>  
        </Box>
        
    );

};



export default Header;