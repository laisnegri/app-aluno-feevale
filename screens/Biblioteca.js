import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class Biblioteca extends React.Component{
    render(){
        const url = 'http://www.feevale.br/BusService/AppAluno/Aluno/AppAluno.svc/AppAluno/IAppAluno/LogarBibiloteca';
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Biblioteca'}/>
                </Header>
               <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
           </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})