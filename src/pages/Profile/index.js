import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {colors} from '~/theme';
import {Button} from '~/components';
import * as S from './styles';

import CriarConta from '~/assets/images/Criar_Conta.png';

const Profile = ({navigation}) => {
  return (
    <ImageBackground source={CriarConta} style={styles.image}>
      <View style={styles.buttons}>
        <Button
          activeOpacity={1}
          title="ALUNO"
          backgroundColor={'#151515'}
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
        <Button
          activeOpacity={1}
          title="PERSONAL TRAINER"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Profile;
