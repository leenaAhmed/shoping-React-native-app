import React, { useContext, useEffect } from "react";
import {
  Input,
  Text,
  Box,
  Spacer,
  FlatList,
  HStack,
  Heading,
  VStack
} from "native-base";
import { UserContext } from "../context";
import { getProduct } from "../action";
import Card from "./card";
export default function HomeScreen(props) {
  const { state, Dispatch } = useContext(UserContext);
  console.log(state);
  useEffect(() => {
    const resolvedata = async () => {
      Dispatch(await getProduct());
    };
    resolvedata();
  }, []);
  return (
    <VStack style={{ margin: 15 }}>
      <Heading fontSize="xl" p="4" pb="3">
        Prorduct
      </Heading>

      <FlatList
        data={state.list}
        renderItem={({ item }) => <Card item={item} {...props} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Box style={{ marginBottom: 10 }}></Box>}
      />
    </VStack>
  );
}
