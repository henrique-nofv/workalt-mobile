import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'

import Logo from '~/assets/images/logo.png'
import * as S from './styles';
import { Input, Button } from '~/components';

const CreateAccountPersonal = (props) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <S.Container>
    <S.LogoImage source={Logo} resizeMethod="scale" />
    <View style={{alignItems: 'center', marginBottom:50}}>
      <Input label="Nome Completo" />
        <Input label="Telefone" />
        <Input label="Email" />
        <Input label="Senha" />
        <Input label="Confirmar Senha" />
      </View>
      <Button title="Criar conta" backgroundColor="#671786"  />
    </S.Container>
    </ScrollView>
    </SafeAreaView>
  )
}

export default CreateAccountPersonal;

const styles = StyleSheet.create({})
