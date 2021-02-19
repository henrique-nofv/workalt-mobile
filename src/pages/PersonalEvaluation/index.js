import React from 'react';
import {TextInput} from 'react-native-paper';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {fonts, colors} from '~/theme';
import * as S from './styles';

import {Button} from '~/components';

import imagePersonal from '../../assets/images/profile-personal.jpg';

const PersonalEvaluation = () => {
  return (
    <S.Container>
      <S.Header>
        <Image source={imagePersonal} style={styles.avatar} />
        <Text style={styles.title}>Thomas Turing</Text>
      </S.Header>
      <S.Body>
        <Text style={[fonts.title, {textAlign: 'center'}]}>
          Quantas estrelas você {'\n'} dá para Thomas?
        </Text>
        <AirbnbRating
          useNativeDriver={true}
          count={5}
          reviews={['Muito ruim', 'Ruim', 'Normal', 'Bom', 'Ótimo']}
          defaultRating={3}
          reviewColor="#671786"
          selectedColor="#671786"
          size={40}
        />
        <Text style={styles.text}>Escreva um comentário</Text>
        <TextInput
          label="Comentário"
          style={{
            marginTop: 20,
            height: 50,
            width: '70%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          value={''}
          mode="flat"
          onChangeText={''}
        />
      </S.Body>
      <Button title="ENVIAR" backgroundColor={colors.purple} />
    </S.Container>
  );
};

export const styles = StyleSheet.create({
  avatar: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Poppins',
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default PersonalEvaluation;
