import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import createBottomNavigator from './navigators/BottomNavigator';

import Training from '~/pages/Training/index';
import Chat from '~/pages/Chat/index';
import Home from '~/pages/Home/index';
import PersonalEvaluation from '~/pages/PersonalEvaluation/index';
import CreateAccountPersonal from "~/pages/CreateAccountPersonal";
import CreateAccountStudent from "~/pages/CreateAccountStudent";
import CreateClass from "~/pages/CreateClass";
import Profile from '~/pages/Profile/index';
import {
  Chat as ChatIcon,
  Home as HomeIcon,
  Train as TrainingIcon,
} from './navigators/BottomNavigator/icons';
import Classes from '~/pages/Classes';
import Payment from '../pages/Payment/index';
import ClassDetails from '~/pages/ClassDetails';
import PersonalDetails from '../pages/PersonalDetails/';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();
const BottomStack = createBottomNavigator();

const MainRoutes = () => {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        name="Training"
        component={Training}
        options={{icon: <TrainingIcon />}}
      />
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{icon: <HomeIcon />}}
      />
      <BottomStack.Screen
        name="Chat"
        component={Chat}
        options={{icon: <ChatIcon />}}
      />
    </BottomStack.Navigator>
  );
};

const AlternativeRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="CreateClass"
        options={{
          title: 'CRIAR AULA',
        }}
        component={CreateClass}
      />
      <Stack.Screen
        name="CreateAccountStudent"
        options={{
          title: 'CRIAR CONTA ALUNO',
        }}
        component={CreateAccountStudent}
      />
      <Stack.Screen
        name="CreateAccountPersonal"
        options={{
          title: 'CRIAR CONTA PERSONAL TRAINER',
        }}

        component={CreateAccountPersonal}
      />
      <Stack.Screen
        name="PersonalDetails"
        options={{
          title: 'PROFISSIONAL',
        }}
        component={PersonalDetails}
      />
      <Stack.Screen
        name="PersonalEvaluation"
        options={{
          title: 'PERSONAL',
        }}
        component={PersonalEvaluation}
      />
      <Stack.Screen
        name="Payment"
        options={{
          title: 'PAGAMENTO',
        }}
        component={Payment}
      />
      <Stack.Screen
        name="Classes"
        options={{
          title: 'AULAS',
        }}
        component={Classes}
      />
      <Stack.Screen
        name="DescriptionPersonal"
        options={{
          title: 'DESCRIÇÃO DA AULA',
        }}
        component={ClassDetails}
      />
    </Stack.Navigator>
  );
};

//Vai ser trocado para outro arquivo quando colocarmos backend
const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      <Stack.Screen name="MainRoutes" component={MainRoutes} />
      <Stack.Screen name="AlternativeRoutes" component={AlternativeRoutes} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
