import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import * as S from './styles';
import {G, fonts} from '~/theme';
import {Header, Button, CardPersonal, ListHeader} from '~/components';

const Training = () => {
  return (
    <>
      <Header title="Oscar Alho" />
      <ListHeader title="Treinos" />
      <ScrollView>
        <S.Container>
          <View>
            <S.SectionTitle>Pendentes</S.SectionTitle>
            <ScrollView horizontal style={{height: 240}}>
              <CardPersonal />
              <CardPersonal />
              <CardPersonal />
            </ScrollView>
          </View>
          <View>
            <S.SectionTitle>Pendentes</S.SectionTitle>
            <ScrollView horizontal style={{height: 240}}>
              <CardPersonal />
              <CardPersonal />
              <CardPersonal />
            </ScrollView>
          </View>
          <View>
            <S.SectionTitle>Pendentes</S.SectionTitle>
            <ScrollView horizontal style={{height: 240}}>
              <CardPersonal />
              <CardPersonal />
              <CardPersonal />
            </ScrollView>
          </View>
        </S.Container>
      </ScrollView>
    </>
  );
};

export default Training;
