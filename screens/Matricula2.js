import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ScreenName from '../components/ScreenName';
import { Disciplina } from './Disciplina'; 

//import feevaleApi from '../api/service/feevaleApi';

import Header from '../components/Header';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
  
const disciplinas = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Projeto Integrador",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Gerência de Projetos",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Trabalho de Conclusão I",
    },
    {
     id: "58694a0f-3da1-471f-bd96-145571e29d72",
     title: "Processamento de Imagens",
    },
  ];

  const pressHandler = (id) => {
      console.log(id);
      //Aqui chama a outra tela
  }

  function Matricula({ Disciplina }) {
    const navigation = useNavigation();
    return(
      <React.Fragment>
      <Header>
      </Header>
      <View style={styles.containerTitulo}>
          <Text style={{ color: 'white', alignContent: 'center' }}>Sistemas da Informação - Bacharelado - 202002</Text>
      </View>
      <View style={styles.container}>
          <FlatList
              data={disciplinas}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate(Disciplina)}>
                      <Text style={styles.item}>{item.title}</Text>
                  </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
          />
      </View>
      </React.Fragment>
    )
  }

const styles = StyleSheet.create({
    containerTitulo: {
        width: 'flex',
        height: '30px',
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A2A2A2',
    },
    container: {
        flex: 1,
      },
      item: {
        backgroundColor: '#fff',
        padding: 8,
        color: '#706F72'
      },
      title: {
        fontSize: 15,
      },  
       
})

export default Matricula;