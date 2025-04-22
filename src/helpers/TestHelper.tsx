import React, { JSXElementConstructor, ReactElement } from 'react';

import { ThemeProvider } from 'styled-components/native';

import { render, RenderOptions } from '@testing-library/react-native';

import { VehiclesProvider } from '../context/VehiclesContext';
import { theme } from '../theme/theme';

const Providers = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclesProvider>{children}</VehiclesProvider>
    </ThemeProvider>
  );
};

const customRender = (component: ReactElement<unknown, string | JSXElementConstructor<any>>, options?: RenderOptions) =>
  render(component, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
