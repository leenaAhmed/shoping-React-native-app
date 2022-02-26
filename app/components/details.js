import React, { useEffect, useContext } from "react";
import {
  Text,
  Box,
  VStack,
  Pressable,
  Heading,
  Image,
  Center,
  HStack
} from "native-base";
import { UserContext } from "../context";
import { getProductDetails, ClearDetail } from "../action";
export default function DetailsScreen({ route }) {
  const { state, Dispatch } = useContext(UserContext);
  console.log(state.details);
  useEffect(() => {
    const resolveAction = async () => {
      Dispatch(await getProductDetails(route.params.id));
    };
    resolveAction();
    return () => {
      Dispatch(ClearDetail());
    };
  }, []);
  const { title, image, description, price, category } = state.details;
  if (state.details.id) {
    return (
      <>
        <Heading fontSize="xl" p="4" pb="3">
          product details
        </Heading>
        <Box
          bg="#fff"
          py="4"
          px="3"
          borderRadius="5"
          rounded="md"
          maxWidth="100%"
          style={{ margin: 10 }}
        >
          <Box>
            <Center>
              <Image
                source={{
                  uri: image
                }}
                alt={title}
                size="2xl"
              />
            </Center>
          </Box>
          <Box>
            <VStack space="2" pt="3">
              <Text fontSize="xl" color="#5e35b1">
                {title}
              </Text>
              <Text fontWeight="bold">category : {category}</Text>

              <Text fontSize="sm"> {description}</Text>
            </VStack>
          </Box>
          <HStack py="5" justifyContent="space-between">
            <Pressable
              rounded="xs"
              bg="#ba68c8"
              alignSelf="flex-start"
              py="2"
              px="25"
            >
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                BUY
              </Text>
            </Pressable>
            <Text> price: {price}</Text>
          </HStack>
        </Box>
      </>
    );
  } else return <Text>loading...</Text>;
}
