import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";

const links = [
  { linkName: "Products", path: "/products" },
  { linkName: "ShoppingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent={"space-between"}>
        <IconButton
          size="md"
          icons={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} w={6} h={6} color="orange.400" />
              <Text fontWeight="extrabold">Product Store</Text>
            </Flex>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex s={"center"}>
          <NavLink>
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignSelf="center"
              onClick={() => toggleColorMode()}
            />
          </NavLink>
          {/* -----------  */}
          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="small"
            fontWeight={400}
            variant="link"
          >
            Login
          </Button>
          <Button
            as={ReactLink}
            to="/register"
            m={2}
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            _hover={{ bg: "gray.200" }}
            bg={"gray.100"}
            color={"gray.800"}
          >
            Register
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key="register" path="/register">
              Register
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
