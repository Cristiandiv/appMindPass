import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import Agenda from './Agenda';
import Diario from './Diario';
import Stats from './Stats';
import HomeScreen from './HomeScreen';
import TelasStats from './TelasStats';


const Stack = createStackNavigator();

export default function Rotas(){
  return(
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen}/>
        <Stack.Screen name="Diario" component={Diario}/>
        <Stack.Screen name="Agenda" component={Agenda}/>
        <Stack.Screen name="Stats" component={Stats}/>
        <Stack.Screen name="TelaStat" component={TelasStats}/>
        </ Stack.Navigator>
  );
}