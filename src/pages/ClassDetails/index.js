import React from 'react';
import {List} from 'react-native-paper';
import {Image, ScrollView} from 'react-native';

import {G, colors, fonts} from '~/theme';
import {Header, Button, ListHeader} from '~/components';

import * as S from './styles';

import iconMoney from '~/assets/images/icon-money.png';
import iconLocation from '~/assets/images/icon-location.png';
import iconPeople from '~/assets/images/icon-people.png';
import iconTag from '~/assets/images/icon-tag.png';
import iconCalendar from '~/assets/images/icon-calendar.png';
import iconHour from '~/assets/images/icon-hour.png';

const ClassDetails = ({navigation}) => {
  const personal = {
    title: 'Thomas  Turing',
    cref: '134.003.00/00',
  };

  return (
    <>
      <Header
        buttonActive
        goToPerfil={() => {
          navigation.navigate('PersonalDetails');
        }}
        title={personal.title}
        cref={personal.cref}
      />
      <S.Container>
        <ListHeader title="Descrição" />
        <S.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into
        </S.Description>
        <ListHeader title="Detalhes" />
        <ScrollView>
          <List.Item
            title="Valor"
            description="R$ 150,00"
            left={(props) => (
              <S.Circle>
                <Image source={iconMoney} resizeMethod="scale" />
              </S.Circle>
            )}
            titleStyle={fonts.title}
            descriptionStyle={fonts.description}
            style={{alignItems: 'center', marginLeft: 15}}
          />

          <List.Item
            title="Local"
            description="Rua Capitão Escobar do Spider, 345
              Ecoville - Curitiba, Parana"
            left={(props) => (
              <S.Circle>
                <Image source={iconLocation} resizeMethod="scale" />
              </S.Circle>
            )}
            titleStyle={fonts.title}
            descriptionStyle={fonts.description}
            style={{alignItems: 'center', marginLeft: 15}}
          />

          <List.Item
            title="Pessoas"
            description="4/10 confirmadas"
            left={(props) => (
              <S.Circle>
                <Image source={iconPeople} resizeMethod="scale" />
              </S.Circle>
            )}
            titleStyle={fonts.title}
            descriptionStyle={fonts.description}
            style={{alignItems: 'center', marginLeft: 15}}
          />

          <List.Item
            title="Tags"
            description="Musculação, Hipertrofia"
            left={(props) => (
              <S.Circle>
                <Image source={iconTag} resizeMethod="scale" />
              </S.Circle>
            )}
            titleStyle={fonts.title}
            descriptionStyle={fonts.description}
            style={{alignItems: 'center', marginLeft: 10}}
          />

          <List.Item
            title="Data"
            description="16/05/2020"
            left={(props) => (
              <S.Circle>
                <Image source={iconCalendar} resizeMethod="scale" />
              </S.Circle>
            )}
            titleStyle={fonts.title}
            descriptionStyle={fonts.description}
            style={{alignItems: 'center', marginLeft: 15}}
          />

          <List.Item
            title="Horario"
            description="18:00 - 23:00"
            left={(props) => (
              <S.Circle>
                <Image source={iconHour} resizeMethod="scale" />
              </S.Circle>
            )}
            titleStyle={fonts.title}
            descriptionStyle={fonts.description}
            style={{alignItems: 'center', marginLeft: 10}}
          />
        </ScrollView>

        <Button backgroundColor={colors.purple} title="APLICAR" />
      </S.Container>
    </>
  );
};

export default ClassDetails;
