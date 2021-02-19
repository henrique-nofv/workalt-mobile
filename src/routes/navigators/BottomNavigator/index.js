/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import {View, Text} from 'react-native';
import {
  createNavigatorFactory,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';

import * as S from './styles';

const BottomNavigator = ({
  initialRouteName = 'Home',
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) => {
  const {state, navigation, descriptors} = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  const onNavigate = (route) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      data: {
        isAlreadyFocused: route.key === state.routes[state.index].key,
      },
    });
    if (!event.defaultPrevented) {
      navigation.dispatch({
        ...TabActions.jumpTo(route.name),
        target: state.key,
      });
    }
  };

  return (
    <>
      <S.Header>
        <S.HeaderTitle>{state.routes[state.index].name}</S.HeaderTitle>
      </S.Header>
      <View style={[{flex: 1}, contentStyle]}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
      <S.Navigator>
        {state.routes.map((route) => {
          const isActive = route.key === state.routes[state.index].key;
          return (
            <S.Action key={route.key} onPress={() => onNavigate(route)}>
              {React.cloneElement(
                descriptors[route.key].options.icon,
                isActive && {
                  active: true,
                },
              )}
            </S.Action>
          );
        })}
      </S.Navigator>
    </>
  );
};

export default createNavigatorFactory(BottomNavigator);
