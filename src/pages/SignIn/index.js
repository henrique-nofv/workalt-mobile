import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {fonts, colors} from '~/theme';
import {Input, Button} from '~/components';
import * as S from './styles';

import iconBack from '~/assets/images/icon-arrow-back.png';
import logo from '~/assets/images/logo.png';

const SingIn = ({navigation}) => {
  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack
          activeOpacity={1}
          title="PERSONAL TRAINER"
          onPress={() => {
            navigation.goBack();
          }}>
          <S.Logo
            source={iconBack}
            resizeMode="contain"
            style={styles.iconBack}
          />
        </S.ButtonBack>
      </S.Header>
      <S.Body>
        <Image source={logo} resizeMode="cover" style={{marginBottom: 66}} />
        <Input label="Email" />
        <Input label="Senha" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Esqueci a senha </Text>
        </TouchableOpacity>
      </S.Body>
      <Button
        activeOpacity={1}
        title="PERSONAL TRAINER"
        onPress={() => {
          navigation.navigate('MainRoutes');
        }}
        title="LOGIN"
        backgroundColor={colors.purple}
      />
      <Button title="CRIAR CONTA" />
    </S.Container>
  );
};

export const styles = StyleSheet.create({
  iconBack: {
    width: 35,
    height: 34,
  },
  button: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 80,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Ubuntu',
  },
});

export default SingIn;
