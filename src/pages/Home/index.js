import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import musculos from '~/assets/images/musculacao.png';
import emagrece from '~/assets/images/emagrecimento.png';
import danca from '~/assets/images/danca.png';
import luta from '~/assets/images/luta.png';

import * as S from './styles';
import {G} from '~/theme';

const Home = (props) => {
  return (
    <ScrollView>
      <G.CenterdContainer>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('AlternativeRoutes', {screen: 'Classes'});
          }}>
          <Image
            source={musculos}
            resizeMethod="resize"
            resizeMode="contain"
            style={{
              width: Dimensions.get('screen').width,
              height: 250,
              marginVertical: 5,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('AlternativeRoutes', {screen: 'Classes'});
          }}>
          <Image
            resizeMode="contain"
            source={emagrece}
            style={{
              width: Dimensions.get('screen').width,
              height: 250,
              marginVertical: 5,
            }}
          />
        </TouchableOpacity>
        <S.CardsWrapper>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('AlternativeRoutes', {
                screen: 'Classes',
              });
            }}>
            <Image
              source={danca}
              resizeMethod="resize"
              resizeMode="contain"
              style={{width: Dimensions.get('screen').width / 2.2, height: 250}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('AlternativeRoutes', {
                screen: 'Classes',
              });
            }}>
            <Image
              source={luta}
              resizeMethod="resize"
              resizeMode="contain"
              style={{width: Dimensions.get('screen').width / 2.2, height: 250}}
            />
          </TouchableOpacity>
        </S.CardsWrapper>
      </G.CenterdContainer>
    </ScrollView>
  );
};

export default Home;
