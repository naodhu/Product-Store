import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Gi3DGlasses } from "react-icons/gi";
import { useSpring, animated } from "react-spring";

const AnimatedIcon = animated(Icon);

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const animationProps = useSpring({
    transform: isHovered ? "scale(1.2)" : "scale(1)",
  });

  return (
    <Box w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
      <Container as="footer" role="contentinfo" maxW="7xl">
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "12", md: "16" }}
        >
          <Stack spacing={{ base: "6", md: "8" }} align="start">
            <Flex alignItems="center">
              <motion.div whileHover={{ scale: 1.2 }}>
                <AnimatedIcon
                  as={Gi3DGlasses}
                  style={animationProps}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  h={10}
                  w={10}
                  color="orange.400"
                />
              </motion.div>
              <Text fontSize="2xl" fontWeight="extrabold">
                Product Store
              </Text>
            </Flex>
            <Text color="muted">We love technology.</Text>
          </Stack>
          <Stack
            direction={{ base: "column-reverse", md: "column", lg: "row" }}
            spacing={{ base: "12", md: "8" }}
          >
            <Stack direction="row" spacing="8">
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  Product
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link">How it works</Button>
                  <Button variant="link">Pricing</Button>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  Legal
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link">Privacy</Button>
                  <Button variant="link">Terms</Button>
                  <Button variant="link">License</Button>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  Company
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link">About Us</Button>
                  <Button variant="link">Careers</Button>
                  <Button variant="link">Contact</Button>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold" color="subtle">
                  Help
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link">Support</Button>
                  <Button variant="link">FAQ</Button>
                  <Button variant="link">Documentation</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Stay up to date
              </Text>
              <Stack
                spacing="4"
                direction={{ base: "column", sm: "row" }}
                maxW={{ lg: "360px" }}
              >
                <Input placeholder="Enter your email" type="email" required />
                <Button variant="primary" type="submit" flexShrink={0}>
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Product Store, Inc. All rights
            reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </motion.div>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
