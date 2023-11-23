import React from 'react';
import { Button, Heading, VStack } from '@chakra-ui/react';

function App() {
  return (
    <VStack p={4}>
      <Heading mb={4}>Mi Aplicación con Chakra UI</Heading>
      <Button colorScheme="teal" size="md">
        Mi Botón Chakra UI
      </Button>
      {/* Agrega más componentes de Chakra UI según sea necesario */}
    </VStack>
  );
}

export default App;