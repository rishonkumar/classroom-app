import React from 'react';
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="Learn from the EXPERT " size={'2xl'} />
            <Text children="Find the Value-able content At Reasonable Price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
        </Stack>
      </div>
    </section>
  );
};

export default Home;
