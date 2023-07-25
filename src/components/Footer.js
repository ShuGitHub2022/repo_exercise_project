import React from "react";
import {Box, Flex,VStack} from "@chakra-ui/react";
import {
    faTwitter,
    faInstagram,
    faMedium,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const socials = [ // will change those url link to mine.
  {
    icon: faEnvelope,
    url: "mailto: webmaster@littlelemon.com",
  },
  {
    icon: faTwitter,
    url:"https://twitter.com",
  },
  {
    icon: faMedium,
    url: "https://facebook.com",
  },
  {
    icon: faInstagram,
    url:"https://instegram.com",
  },
];


const Footer = () => {
    return (
        <Box backgroundColor="#18181b">
            <footer>
             <Flex
                margin="0 auto"
                px={12}
                color="white"
                justifyContent="center"
                alignItems="center"
                maxWidth="1024px"
                height={16}
            >
            <img src="./images/littlelemologo.png" alt="littlelemonlogo" width="42" height="50"/>
            <Box>
                <VStack spacing={8}>
                <ul>
                    <li><a href="./home">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./menu">Menu</a></li>
                    <li><a href="./reservation">Reservation</a></li>
                    <li><a href="./order">Order Online</a></li>
                    <li><a href="./login">Login</a></li>
                </ul>
                </VStack>
            </Box>
            <Box>
                <VStack spacing={8}>
                    <p>Contact</p>
                    <p>Address: 123 N. Lindsay st. Chicago, IL 12342</p>
                    <p>Phone:123-234-2345</p>
                    <p>Email: webmaster@littlelemon.com</p>
                </VStack>
            </Box>
            <Box>
                <VStack spacing={8}>
                    <p>Follow us</p>
                    {/* Add links to socials array.Using map to iterate socials array*/
                    socials.map(({icon, url}) => (
                    <a 
                      key = {url}
                      href={url}
                      target="_blank" /*open page in a new tab*/
                      rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                       </a>
                  ))
                }
                </VStack>
            </Box>
            <p>Shu Liu • © 2023</p>
        </Flex>
      </footer>
    </Box>
    );

};
export default Footer;