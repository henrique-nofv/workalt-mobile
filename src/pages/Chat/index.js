import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, Avatar} from 'react-native-paper';
import profileImg from '~/assets/images/profile-personal.jpg';

import * as S from './styles';
import {fonts} from '~/theme';

const Chat = () => {
  return (
    //TODO: for para renderizar os items e abrir a conversa, trocar view por scrollview
    <S.Container>
      <ScrollView>
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
        <List.Item
          title="Thomas Turing"
          description="Sim, podemos nos encontrar na entrada do parque barigui."
          onPress={''}
          titleStyle={fonts.title}
          descriptionStyle={fonts.description}
          left={(props) => (
            <Avatar.Image
              style={{alignSelf: 'center', marginRight: 8}}
              size={50}
              source={profileImg}
            />
          )}
        />
      </ScrollView>
    </S.Container>
  );
};

export default Chat;
