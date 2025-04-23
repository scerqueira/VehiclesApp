import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { VehiclesProvider } from '../context/VehiclesContext';
import { theme } from '../theme/theme';

const Providers = ({ children }: { children: React.ReactElement }) => (
  <ThemeProvider theme={theme}>
    <VehiclesProvider>
      <NavigationContainer>{children} </NavigationContainer>
    </VehiclesProvider>
  </ThemeProvider>
);

const customRender = (component: React.ReactElement, options?: RenderOptions) =>
  render(component, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
