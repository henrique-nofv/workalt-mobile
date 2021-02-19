import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Card, Title, Paragraph, Avatar, Button, List} from 'react-native-paper';

// import { Container } from './styles';

const Cardinho = () => {
  return (
    <>
      <Card style={styles.borda}>
        <Card.Content>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Title type="h3" style={{color: 'black'}}>
                Thomas Turbando
              </Title>
              <Paragraph style={{color: 'black'}}>★★★★★ 5</Paragraph>
            </View>
            <Avatar.Icon size={38} icon="folder" />
          </View>

          <Text style={{color: 'black'}}>Musculação • Hipertrofia</Text>
          <Text style={{color: 'black'}}>
            Greyhound divisively hello coldly wonderfully marginally far upon
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Button icon="camera" color="white">
              R$150
            </Button>
            <Button icon="camera">24/05/2020</Button>
            <Button icon="camera">4 Vagas</Button>
          </View>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  borda: {
    borderRadius: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: '#6200EE',
    shadowColor: '#6200EE',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dale: {
    padding: 15,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Cardinho;
