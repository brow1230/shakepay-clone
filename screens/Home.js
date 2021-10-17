import React from 'react';
import { Image, Text, Box, VStack, Button, Divider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SvgXml } from 'react-native-svg';
import ShakepayLogo from '../assets/ShakepayLogo.svg'


export default function HomeScreen() {
  return (
          <VStack>
            <Box width="100%" height="60%" justifyContent="center" backgroundColor='white' alignItems="center">
              <ShakepayLogo width={40} height={40} />
              <Text fontSize='36' textAlign="center"  >  $1.88 </Text>
              <Button.Group mx="auto" marginTop='30' >
              <Button size="lg"  width="45%" >Add Funds</Button>
              <Button size="lg" width="45%" >Send</Button>
            </Button.Group>
            </Box>
            <Divider/>
          </VStack>
  )};