/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

type AppProps = {
  children: React.ReactNode;
  corFundo?: string;
  corTexto?: string;
};

export default class TextoCentral extends React.Component<AppProps> {
  render(): React.ReactNode {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.props.corFundo || '#000',
        }}>
        <Text style={{fontSize: 50, color: this.props.corTexto || '#FFF'}}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}
