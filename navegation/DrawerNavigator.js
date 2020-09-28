import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";

import Matricula from '../screens/Matricula';
import AulasHoje from '../screens/AulasHoje';
import MatriculaOnline from '../screens/MatriculaOnline';
import CartaoFeevale from '../screens/CartaoFeevale';
import Configuracao from '../screens/Configuracao';
import Estacionamento from '../screens/Estacionamento';
import FaleFeevale from '../screens/FaleFeevale';
import Financeiro from '../screens/Financeiro';
import GuiaAcad from '../screens/GuiaAcad';
import InfCadastrais from '../screens/InfCadastrais';
import MinhasMens from '../screens/MinhasMens';
import MinhasSoli from '../screens/MinhasSoli';
import Sobre from '../screens/Sobre';
import Sos from '../screens/Sos';
import Disciplina from '../screens/Disciplina';
import Biblioteca from '../screens/Biblioteca';

const DrawerNavigator = createDrawerNavigator({

    Matricula: {
      screen: Matricula,
      navigationOptions: {
        drawerLabel: "Matrícula",
        title: "Matrícula",
      },
    },

    MatriculaOnline: {
      screen: MatriculaOnline,
      navigationOptions: {
        title: "Matrícula Online",
      },
    },

    AulasHoje: {
      screen: AulasHoje,
      navigationOptions: {
        title: "Aulas Hoje"
      }
    },

    Biblioteca: {
      screen: Biblioteca,
      navigationOptions: {
        title: "Biblioteca"
      }
    },

    CartaoFeevale: {
       screen: CartaoFeevale,
       navigationOptions: {
         title: "Cartão Feevale"
       }
     },
 
     Estacionamento: {
       screen: Estacionamento,
       navigationOptions: {
         title: "Estacionamento"
       }
     },

     Financeiro: {
        screen: Financeiro,
        navigationOptions: {
         title: "Financeiro"
       }
     },

     GuiaAcad: {
        screen: GuiaAcad,
        navigationOptions: {
          title: "Guia Acadêmico"
       }
     },

     InfCadastrais: {
        screen: InfCadastrais,
        navigationOptions: {
          title: "Informações Cadastrais"
       }
     },

     MinhasMens: {
        screen: MinhasMens,
        navigationOptions: {
          title: "Minhas Mensagens"
       }
     },

     MinhasSoli: {
        screen: MinhasSoli,
        navigationOptions: {
         title: "Minhas Solicitações"
       }
     },

     Sos: {
        screen: Sos,
        navigationOptions: {
         title: "SOS Feevale"
       }
     },

     FaleFeevale: {
        screen: FaleFeevale,
        navigationOptions: {
         title: "Fale com a Feevale"
       }
     },

     Sobre: {
       screen: Sobre,
       navigationOptions: {
         title: "Sobre o Aplicativo"
       }
     },

     Configuracao: {
        screen: Configuracao,
        navigationOptions: {
         title: "Configurações"
        }
     },

     Disciplina: {
      screen: Disciplina,
      navigationOptions: {
        title: "Disciplina",
      },
    },

    //  Sair: {
    //   // screen: AulasHoje,
    //    navigationOptions: {
    //      title: "Sair"
    //    }
    //  },
},
  {
    initialRouteName: 'Matricula',
    drawerBackgroundColor: '#5EC135',
    contentOptions: {
      labelStyle: {
        color: 'white',
      },
    },
  },
);


const Menu = createAppContainer(DrawerNavigator);

export default Menu;