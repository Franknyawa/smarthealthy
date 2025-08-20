import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import React from 'react';

const Home = () => {
  return (
    <Container>
       <div className='p-10 bg-red-300 bg-shop-light-pink' >
      <h2 className='text-xl font-semibold'>Home</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div>
      <Button>Chek OUt</Button>
    </div>

    </Container>
   
    
  );
}

export default Home;

