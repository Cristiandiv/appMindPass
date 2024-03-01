import {ScrollView, Text, View,StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import {
  useFonts,
  PressStart2P_400Regular,
} from '@expo-google-fonts/press-start-2p';
import {
  Exo2_700Bold
} from '@expo-google-fonts/exo-2';

export default function Agenda({ navigation }){

  let [fontsLoaded, fontError] = useFonts({
    PressStart2P_400Regular, Exo2_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return(
    
    <ImageBackground
    source={require('../assets/fundoAnimadoMindPass-AzulClaro3.gif')}
    style={styles.container}
    >

  

    <View style={styles.buttonBar}>
      <TouchableOpacity title="Agenda"  style={styles.fundoIcone}
      onPress={()=> navigation.navigate('Agenda')}>
      <Image
      source={require('../assets/minicerebro.png')}
      style={styles.buttonImageIconStyle}
      />
      </TouchableOpacity>
      
      <TouchableOpacity title="Stats"  style={styles.fundoIcone}
      onPress={()=> navigation.navigate('Stats')}>
      <Image
      source={require('../assets/icone-stats.png')}
      style={styles.buttonImageIconStyle}
      />
      </TouchableOpacity>
     
      <TouchableOpacity title="Agenda"  style={styles.fundoIcone}
      onPress={()=> navigation.navigate('Agenda')}>
      <Image
      source={require('../assets/mapa.png')}
      style={styles.buttonImageIconStyle}
      />
      </TouchableOpacity>
      
      <TouchableOpacity title="Diario"  style={styles.fundoIcone}
      onPress={()=> navigation.navigate('Diario')}>
      <Image
      source={require('../assets/diario.png')}
      style={styles.buttonImageIconStyle}
      />
      </TouchableOpacity>
      
      <TouchableOpacity title="Agenda"  style={styles.fundoIcone}
      onPress={()=> navigation.navigate('Agenda')}>
      <Image
      source={require('../assets/agenda.png')}
      style={styles.buttonImageIconStyle}
      />
      </TouchableOpacity>

      </View> 

      <ScrollView>

      <View style={styles.viewText}>

      <Text style={styles.textStyleTitle}>
      Veja os Eventos e Missôes da semana.
      </Text>
      </View>

      <View style={styles.viewInput1Agenda}>

      <Image/>
      <Text style={styles.textStyleTitle}> Evento: Reuniao Grupal no Bosque Maia.. </Text>
      <Text style={styles.textStyle}>
      O encontro sera realizado por um grupo de pesquisadores, com o fim de coletar dados e ajudar grupos de auto ajuda ou pessoas que nao tem condicoes de pagar por uma terapia ou tratamento adequado sobre sua saude mental
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{color: '#ffffff'}}>Saber mais</Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.viewInput1Agenda}>

      <Image/>
      <Text style={styles.textStyleTitle}> Evento: Reuniao Grupal no Bosque Maia.. </Text>
      <Text style={styles.textStyle}>
      O encontro sera realizado por um grupo de pesquisadores, com o fim de coletar dados e ajudar grupos de auto ajuda ou pessoas que nao tem condicoes de pagar por uma terapia ou tratamento adequado sobre sua saude mental
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{color: '#ffffff'}}>Saber mais</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.viewInput1Agenda}>

      <Image/>
      <Text style={styles.textStyleTitle}> Evento: Reuniao Grupal no Bosque Maia.. </Text>
      <Text style={styles.textStyle}>
      O encontro sera realizado por um grupo de pesquisadores, com o fim de coletar dados e ajudar grupos de auto ajuda ou pessoas que nao tem condicoes de pagar por uma terapia ou tratamento adequado sobre sua saude mental
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{color: '#ffffff'}}>Saber mais</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.viewInput1Agenda}>

      <Image/>
      <Text style={styles.textStyleTitle}> Evento: Reuniao Grupal no Bosque Maia.. </Text>
      <Text style={styles.textStyle}>
      O encontro sera realizado por um grupo de pesquisadores, com o fim de coletar dados e ajudar grupos de auto ajuda ou pessoas que nao tem condicoes de pagar por uma terapia ou tratamento adequado sobre sua saude mental
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{color: '#ffffff'}}>Saber mais</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.viewInput1Agenda}>

      <Image/>
      <Text style={styles.textStyleTitle}> Evento: Reuniao Grupal no Bosque Maia.. </Text>
      <Text style={styles.textStyle}>
      O encontro sera realizado por um grupo de pesquisadores, com o fim de coletar dados e ajudar grupos de auto ajuda ou pessoas que nao tem condicoes de pagar por uma terapia ou tratamento adequado sobre sua saude mental
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{color: '#ffffff'}}>Saber mais</Text>
      </TouchableOpacity>

      </View>

</ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingHorizontal: 6,
  },

  buttonImageIconStyle: {
    padding: 20,
    marginLeft: 6,
    marginRight: 6,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  fundoIcone: {
    margin: 4,
    borderRadius: 10, 
    padding:5, 
    backgroundColor: '#DCDCDC',
  },

  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    pading: 4,
    backgroundColor: '#DCDCDC'
  },

  textStyleTitle: { //estilo das frases encima das notas e eventos.
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Exo2_700Bold'
  },

  textStyle: { //estilo do texto das notas e eventos.
    fontSize: 15,
    borderRadius: 10,
    textAlign: 'justify',
    fontFamily: 'Exo2_700Bold'
  },

  buttonBar: { //estilo da view dos botoes da Agenda.
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 6,
    borderRadius: 10, 
    backgroundColor: '#DCDCDC', ///azul bb : #87cefa / verde : #3cb371 
    opacity: 0.72,
    position: 'relative'
  },

  buttonStyle:{ //estilo do botao 'saber mais' da Agenda.
    marginLeft: 290,
    padding: 4,
    backgroundColor: 'rgba(63, 191, 129, 0.88)',
    textAlign: 'center',
    fontSize: 10,
    borderRadius: 3
  },

  viewInput1Agenda: {
    margin:6,
    borderRadius: 2,
    backgroundColor: '#DCDCDC',
    padding: 4
  },

});

