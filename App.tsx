import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { VehiclesProvider } from './src/context/VehiclesContext';

import { Vehicles } from './src/screens/Vehicles';
import VehiclesDetails from './src/screens/VehicleDetails';
import type { RootStackParamList } from './src/types/navigation';

import 'styled-components/native';
import './src/types/styled';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallback from './src/components/ErrorFallback';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <VehiclesProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Vehicles" component={Vehicles} />
              <Stack.Screen name="VehicleDetails" component={VehiclesDetails} options={{ headerTitle: '' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </VehiclesProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
