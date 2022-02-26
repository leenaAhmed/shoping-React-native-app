import {
  Box,
  Text,
  VStack,
  Center,
  Divider,
  Image,
  HStack,
  Icon
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React from "react";

const Card = ({ item, navigation }) => {
  const getSinglePage = () => {
    console.log(item.id);
    navigation.navigate({
      name: "Product",
      params: {
        id: item.id
      }
    });
  };

  if (item) {
    return (
      <Box
        border="1"
        borderRadius="md"
        background="white"
        style={{ margin: 10 }}
      >
        <VStack space="4" divider={<Divider />}>
          <Box px="4">
            <Center>
              <Image
                source={{
                  uri: item.image
                }}
                alt={item.title}
                size="2xl"
              />
              <Box px="4">
                <Text pt="3" fontSize="xl" onPress={getSinglePage}>
                  {item.title}
                </Text>
              </Box>
            </Center>
          </Box>
          <HStack pb="4" px="4" space="1" justifyContent="space-between">
            <Text px="1"> {item.price}</Text>
            <Box>
              <HStack pb="4" px="4" space="1" justifyContent="space-between">
                <Icon as={FontAwesome} name="star" size="5" color="#fbc02d" />
                <Text> {item.rating.rate}</Text>
              </HStack>
            </Box>
          </HStack>
        </VStack>
      </Box>
    );
  } else {
    return <Text> there is no Prorduct</Text>;
  }
};
export default Card;
