import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Stack from '../navegacao/stack';

export default class Navegacao extends React.Component {
  render(): React.ReactNode {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
