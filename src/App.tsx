import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TelaA from './templates/TelaA';
import TelaB from './templates/TelaB';
import TelaC from './templates/TelaC';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <TelaA />
        <TelaB />
        <TelaC />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
