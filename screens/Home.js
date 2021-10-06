import React from 'react';
import { Text, Box, VStack, Button, Divider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function HomeScreen() {
  return (
          <VStack>
            <Box width="100%" height="40%" justifyContent="center" backgroundColor='white'>
              <Text fontSize='36' textAlign="center"  >  $1.88 </Text>
            </Box>
            <Button.Group mx="auto" >
              <Button size="lg"  width="45%" >Add Funds</Button>
              <Button size="lg" width="45%" >Send</Button>
            </Button.Group>
            <Divider/>
          </VStack>
  )};