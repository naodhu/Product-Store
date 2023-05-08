import {
  CloseButton,
  Flex,
  Select,
  useColorModeValue as mode,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const CartItem = ({ cartItem }) => {
  const { id, image, name, price, qty, stock } = cartItem;

  const dispatch = useDispatch();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="4" width="full">
        <Image
          rounded="lg"
          w="120px"
          h="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0,5">
            <Text fontWeight="medium">{name}</Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        w="full"
        mt={{ base: "4", md: "0" }}
        align={{ base: "center", md: "baseline" }}
        display="flex"
      >
        <Select
          maxW="65px"
          focusBorderColor={mode("blue.500", "blue.300")}
          value={qty}
          onChange={(e) => dispatch(addToCart(id, Number(e.target.value)))}
        >
          {[...Array(stock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Select>
        <Text fontWeight="bold">{price}€</Text>
        <CloseButton />
      </Flex>
    </Flex>
  );
};

export default CartItem;
