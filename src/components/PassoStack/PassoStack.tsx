/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button} from 'react-native';

type AppProps = {
  children: React.ReactNode;
  avancar: string;
  voltar?: boolean;
  navigation: any;
};

export default class PassoStack extends React.Component<AppProps> {
  render(): React.ReactNode {
    const {voltar = false} = this.props;
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {voltar && (
            <Button
              title="Voltar"
              onPress={() => this.props.navigation.goBack()}
            />
          )}

          {this.props.avancar && (
            <Button
              title="Avançar"
              onPress={() =>
                this.props.navigation.push(this.props.avancar, {
                  numero: parseInt((Math.random() * 100).toString(), 10),
                })
              }
            />
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
