import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
  const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    padding: '4',
  };
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w="full" h={'100vh'}>
          <Img src={img1} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Img src={img2} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Img src={img3} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Gaming on Console
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Img src={img4} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Night life is Cool
          </Heading>
        </Box>
      </Carousel>
      <Container maxWidth={'container.lg'} minHeight={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w="fit-content"
          margin="auto"
          borderBottom={'2px solid'}
        >
          Servises
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias
            maiores consectetur doloremque numquam reprehenderit aut. Architecto
            nesciunt cumque quis, animi ipsum vel provident similique distinctio
            accusamus maiores, beatae quod. Distinctio consectetur similique
            officia unde laboriosam sed accusantium ipsa quos quidem. Magni
            natus corporis sed architecto dignissimos nulla mollitia consectetur
            quod a.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
