import React from 'react';
import ReactDOM from 'react-dom';

// Importar ChakraProvider y el tema de Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';

// Importar el componente App
import App from './App';

// Obtener el elemento root del DOM
const container = document.getElementById('root');

// Crear el root con ReactDOM.createRoot
const root = ReactDOM.createRoot(container);

// Renderizar la aplicación dentro de ChakraProvider
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  </ChakraProvider>
);