import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaA from '../templates/TelaA';
import TelaB from '../templates/TelaB';
import TelaC from '../templates/TelaC';
import PassoStack from '../components/PassoStack/PassoStack';

export default class Navigator extends React.Component {
  render(): React.ReactNode {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA">
          {props => {
            return (
              <PassoStack {...props} avancar="TelaB">
                <TelaA />
              </PassoStack>
            );
          }}
        </Stack.Screen>
        <Stack.Screen name="TelaB">
          {props => {
            return (
              <PassoStack {...props} avancar="TelaC" voltar>
                <TelaB />
              </PassoStack>
            );
          }}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
          {props => {
            return (
              <PassoStack {...props} avancar="TelaC" voltar>
                <TelaC {...props} />
              </PassoStack>
            );
          }}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
