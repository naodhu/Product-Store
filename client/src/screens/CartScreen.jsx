import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Spinner,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Wrap,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";

const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { cart, loading, error } = cartInfo;
  return (
    <Wrap spacing="30px" justify="center" minHeight="100vh">
      {loading ? (
        <Stack direction="row" spacing={4}>
          <Spinner
            mt={20}
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      ) : error ? (
        <Alert status="error" w="100%">
          <AlertIcon />
          <AlertTitle>
            sorry, something went wrong. please try again later
          </AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="warning" w="100%">
          <AlertIcon />
          <AlertTitle>
            sorry, your cart is empty. please add some items
          </AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to="/products">
              go to products
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          py={{ base: "12", md: "20" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", lg: "24" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading
                fontSize="2xl"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                Your Cart
              </Heading>

              <Stack spacing="10">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
                  <CartOrderSummary />

              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link
                  as={ReactLink}
                  to="/products"
                  color={mode("blue.600", "blue.300")}
                >
                  continue to shopping →
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;
