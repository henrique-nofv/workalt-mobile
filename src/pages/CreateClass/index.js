import React from 'react'
import { View, Text, ScrollView,SafeAreaView } from 'react-native'
import { TextInput, TextInputMask } from 'react-native-paper';

import * as S from './styles';
import { Input, Button } from '~/components';
import { colors } from '~/theme';

const CreateClass = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <S.Container>
          <View style={{alignItems: 'center', marginBottom:80, marginTop: 50}}>
            <Input label="Valor" />
            <Input label="Local" />
            <Input label="Pessoas" />
            <Input label="Tags" />
            <Input label="Data" />
            <Input label="Horario" />
          </View>
          <Button title="Criar conta" backgroundColor="#671786"  />
        </S.Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateClass;
