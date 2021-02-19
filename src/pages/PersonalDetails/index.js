import React from 'react';
import {List} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {View, Image, ScrollView, Dimensions, Text} from 'react-native';

import {G, colors, fonts} from '~/theme';
import {Header, Button, ListHeader, CardStudent} from '~/components';

import * as S from './styles';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';

import photo1 from '~/assets/images/training-picture-1.jpg';
import photo2 from '~/assets/images/training-picture-2.jpg';
import photo3 from '~/assets/images/training-picture-3.jpg';

const FirstRoute = ({navigation}) => {
  const [items] = React.useState([photo1, photo2, photo3]);

  const renderItem = ({item, index}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={item}
          style={{height: 300, width: Dimensions.get('screen').width - 20}}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
    );
  };

  return (
    <S.Container>
      <ListHeader title="Sobre" />
      <S.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap
      </S.Description>
      <ListHeader title="Galeria" />
      <Carousel
        vertical
        loop={true}
        layoutCardOffset={20}
        layout={'tinder'}
        data={items}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('screen').width - 20}
        sliderHeight={300}
        itemHeight={300}
        itemWidth={Dimensions.get('screen').width - 20}
      />
    </S.Container>
  );
};

const SecondRoute = ({navigation}) => (
  <G.Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardStudent bagde="EM GRUPO" distance={15} />
      <CardStudent bagde="INDIVIDUAL" distance={15} />
      <CardStudent bagde="EM GRUPO" distance={15} />
      <CardStudent bagde="EM GRUPO" distance={15} />
      <CardStudent bagde="INDIVIDUAL" distance={15} />
      <CardStudent bagde="EM GRUPO" distance={15} />
    </ScrollView>
  </G.Container>
);

const ThirdRoute = ({navigation}) => (
  <G.Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardStudent rating description="Gostoso" />
      <CardStudent rating />
      <CardStudent rating />
      <CardStudent rating />
      <CardStudent rating />
      <CardStudent rating />
    </ScrollView>
  </G.Container>
);

const initialLayout = {width: Dimensions.get('window').width};

const PersonalDetails = (props) => {
  const personal = {
    title: 'Thomas  Turing',
    cref: '134.003.00/00',
  };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Perfil'},
    {key: 'second', title: 'Aulas'},
    {key: 'third', title: 'Avaliações'},
  ]);
  const renderScene = SceneMap({
    first: () => <FirstRoute {...props} />,
    second: () => <SecondRoute {...props} />,
    third: () => <ThirdRoute {...props} />,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#671786'}}
      style={{backgroundColor: '#000'}}
    />
  );

  return (
    <>
      <Header title={personal.title} cref={personal.cref} />

      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default PersonalDetails;
