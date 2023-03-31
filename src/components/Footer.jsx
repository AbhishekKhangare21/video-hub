import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend, AiFillYoutube, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading size="md" textTransform={'uppercase'}>
            Subscribe To Get Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px ssolid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px ssolid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'_blank'} href="https://github.com/AbhishekKhangare21">
              <AiFillGithub size={'40px'} />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
