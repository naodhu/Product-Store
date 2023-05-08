import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Text,
  useColorModeValue,
  Stack,
  Button,
  Tooltip,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Rating = ({ rating, numberOfReviews }) => {
  const { iconSize,     } = useState("14px");
  return (
    <Flex>
      <HStack spacing="2">
        <StarIcon
          iconSize={iconSize}
          rating={rating}
          w="14px"
          color="orange.500"
        />
        <StarIcon
          iconSize={iconSize}
          rating={rating}
          w="14px"
          color={rating >= 2 ? "orange.500" : " gray.200"}
        />
        <StarIcon
          iconSize={iconSize}
          rating={rating}
          w="14px"
          color={rating >= 3 ? "orange.500" : " gray.200"}
        />
        <StarIcon
          iconSize={iconSize}
          rating={rating}
          w="14px"
          color={rating >= 4 ? "orange.500" : " gray.200"}
        />
        <StarIcon
          iconSize={iconSize}
          rating={rating}
          w="14px"
          color={rating >= 5 ? "orange.500" : " gray.200"}
        />
      </HStack>
      <Text fontsize="md" fontWeight="bold" ml="3">
        {`${numberOfReviews} ${numberOfReviews === 1 ? "review" : "reviews"}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue("gray.100", "gray.700")}
      minW="240px"
      h="450px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.productIsNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.500"
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.500"
        />
      )}
      <Image src={product.image} alt={product.name} roundedTop="lg" />

      <Box flex="1" maxH="5" alignItem="baseline">
        {product.stock <= 0 && (
          <Badge rounded="full" px="2" colorScheme="red" fontSize="0.8em">
            Out of Stock
          </Badge>
        )}
        {product.productIsNew && (
          <Badge rounded="full" px="2" colorScheme="green" fontSize="0.8em">
            New
          </Badge>
        )}
      </Box>

      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={ReactLink}
          to={`/product/${product._id}`}
          pt="2"
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignContent="center" py="2">
        <Rating
          rating={product.rating}
          numberOfReviews={product.numberOfReviews}
        />
      </Flex>
      <Flex justify="space-between" alignContent="center">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color={"gray.600"} fontSize="lg">
            $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          placement="top"
          color="gray.800"
          fontSize="1.2em"
        >
          <Button variant="ghost" display="flex" disabled={product.stock <= 0}>
            <Icon as={FiShoppingCart} w={6} h={6} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
