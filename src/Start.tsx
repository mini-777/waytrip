import * as React from 'react';
import { Button, Box, Center, Image, Text, VStack, HStack } from 'native-base';

import { Animated } from 'react-native';
import axios from 'axios';
const Start = ({ navigation, route }: any) => {
  const ComponentA = () => (
    <Center>
      <HStack>
        <Text bold fontSize='30' color='#675DE7'>
          AI
        </Text>
        <Text fontSize={'30'}>가</Text>
      </HStack>
      <HStack>
        <Text bold fontSize={'30'} color='#675DE7'>
          대화
        </Text>
        <Text fontSize={'30'}>를 정리하고 있어요</Text>
      </HStack>
    </Center>
  );
  const ComponentB = () => (
    <Box>
      <HStack>
        <Text bold fontSize='30' color='#675DE7'>
          여행계획
        </Text>
        <Text fontSize='30'>을 정리하고 있어요</Text>
      </HStack>
    </Box>
  );
  const ComponentC = () => (
    <Center>
      <HStack>
        <Text bold fontSize='30' color='#675DE7'>
          생각
        </Text>
        <Text fontSize={30}>이 많아질땐 </Text>
      </HStack>
      <HStack>
        <Text bold fontSize='30' color='#675DE7'>
          여행
        </Text>
        <Text fontSize={30}>을 떠나보세요</Text>
      </HStack>
    </Center>
  );
  const ComponentD = () => (
    <Text bold fontSize='30' color='#675DE7'>
      거의 끝났어요
    </Text>
  );

  const components = [ComponentA, ComponentB, ComponentC, ComponentD];

  const ComponentToRender = components[index];

  return (
    <Center>
      <Box mt='40'>
        <Animated.View style={{ opacity: fadeAnim }}>
          <ComponentToRender />
        </Animated.View>
      </Box>
      <Image
        source={require('../assets/image/Loading.png')}
        alt='loading image'
        size={400}
        style={{
          position: 'absolute',
          top: 250,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></Image>
    </Center>
  );
};

export default Start;
