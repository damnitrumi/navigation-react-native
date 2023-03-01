import React from 'react';
import TextoCentral from '../components/TextoCentral/TextoCentral';

export default class TelaC extends React.Component<any, any> {
  render(): React.ReactNode {
    const route = this.props.route || {params: {numero: 0}};
    return (
      <TextoCentral corFundo="#9932cd">
        Tela C - {route.params.numero}
      </TextoCentral>
    );
  }
}
