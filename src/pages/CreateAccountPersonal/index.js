import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import LogoProfessional from '~/assets/images/logo-with-professional.png'
import * as S from './styles';
import { Input, Button } from '~/components';
import { ScrollView } from 'react-native-gesture-handler';

const CreateAccountPersonal = (props) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <S.Container>
    <S.LogoImage source={LogoProfessional} resizeMethod="scale" />
    <View style={{alignItems: 'center', marginBottom:50}}>
      <Input label="Nome Completo" />
        <Input label="Telefone" />
        <Input label="Email" />
        <Input label="CREF" />
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
