import React from 'react'
import { View, StyleSheet } from 'react-native'

import { colors } from '~/theme';
import { Button } from '~/components';
import * as S from "./styles";

import { CreditCardInput } from "../../components/react-native-credit-card-input";

_onChange => form => console.log(form);

const Payment = () => {

  return (
    <S.Container>
      <View style={styles.card}>
        <CreditCardInput
          inputContainerStyle={{color: "white"}}
          labels={{ number: "Número cartão", expiry: "Data Exp.", cvc: "CVC/CCV", name: "Nome completo" }}
          inputContainerStyle={{ borderBottomColor: 'white' }}
          placeholders={{ number: "1234 5678 1234 5678", expiry: "MM/AA", cvc: "CVC", name: "Nome escrito no cartão" }}
          placeholderColor={'white'}
          requiresName={true}
          onChange={this._onChange}
        >
        </CreditCardInput>
      </View>
      <View style={styles.alignBottom}>
        <Button title="CADASTRAR CARTÃO" backgroundColor={colors.purple} />
      </View>
    </S.Container>
  )
}

export const styles = StyleSheet.create({
  alignBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  card: {
    paddingTop: 50,
    borderColor: 'white'
  }
});

export default Payment
