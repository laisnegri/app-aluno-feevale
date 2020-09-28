import React from 'react';
import {View, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';

import ScreenName from '../components/ScreenName';

import Header from '../components/Header';

export default class Sos extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header>
                    <ScreenName name={'Aulas Hoje'}/>
                </Header>
              {/* {  <WebView source={{ uri: 'https://www.feevale.br/institucional/sos' }} style={{ marginTop: 20 }} /> */}
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