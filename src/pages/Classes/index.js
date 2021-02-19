import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {G} from '~/theme';
import {CardStudent} from '~/components';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const FirstRoute = ({navigation}) => {
  return (
    <G.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardStudent
          onPress={() => {
            navigation.navigate('DescriptionPersonal');
          }}
        />
        <CardStudent
          onPress={() => {
            props.adicionalprops.navigation.navigate('DescriptionPersonal');
          }}
        />
        <CardStudent
          onPress={() => {
            props.adicionalprops.navigation.navigate('DescriptionPersonal');
          }}
        />
        <CardStudent
          onPress={() => {
            props.adicionalprops.navigation.navigate('DescriptionPersonal');
          }}
        />
      </ScrollView>
    </G.Container>
  );
};

const SecondRoute = ({navigation}) => (
  <G.Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardStudent
        onPress={() => {
          navigation.navigate('DescriptionPersonal');
        }}
      />
      <CardStudent
        onPress={() => {
          navigation.navigate('DescriptionPersonal');
        }}
      />
      <CardStudent
        onPress={() => {
          navigation.navigate('DescriptionPersonal');
        }}
      />
      <CardStudent
        onPress={() => {
          navigation.navigate('DescriptionPersonal');
        }}
      />
      <CardStudent
        onPress={() => {
          navigation.navigate('DescriptionPersonal');
        }}
      />
    </ScrollView>
  </G.Container>
);

const initialLayout = {width: Dimensions.get('window').width};

const Classes = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Invidivual'},
    {key: 'second', title: 'Em Grupo'},
  ]);
  const renderScene = SceneMap({
    first: () => <FirstRoute {...props} />,
    second: () => <SecondRoute {...props} />,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#671786'}}
      style={{backgroundColor: '#000'}}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default Classes;
