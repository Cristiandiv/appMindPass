import {ScrollView, ImageBackground,  Text, View,StyleSheet, Button, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Diario({ navigation }){
  return(

    <ImageBackground
    source={require('../assets/fundoAnimadoMindPass-AzulClaro3.gif')}
    style={styles.container}
    >

    
      <View style={styles.viewstyle}>
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
    <Text style={styles.textStyleTitle}>Aqui você pode escrever sobre seus sentimentos, pensamentos.</Text>
    </View>



    <View style={styles.viewInput1}>
    <TextInput
    multiline={true}
    numberOfLines={10}
    placeholderTextColor={'#fff'}
    style={styles.textoinput}
    placeholder="Digite aqui"
    />

    <TextInput
    multiline={true}
    numberOfLines={10}
    placeholderTextColor={'#fff'}
    style={styles.textoinput}
    placeholder="Digite aqui"
    />
    </View>
    
    <View style={styles.viewInput2}>
    <TextInput
    multiline={true}
    numberOfLines={10}
    placeholderTextColor={'#fff'}
    style={styles.textoinput}
    placeholder="Digite aqui"
    />

    <TextInput
    multiline={true}
    numberOfLines={10}
    placeholderTextColor={'#fff'}
    style={styles.textoinput}
    placeholder="Digite aqui"
    />
    </View>

    <View style={styles.viewInput3}>
    <TextInput
    multiline={true}
    numberOfLines={10}
    placeholderTextColor={'#fff'}
    style={styles.textoinput}
    placeholder="Digite aqui"
    />

    <TextInput
    multiline={true}
    numberOfLines={10}
    placeholderTextColor={'#fff'}
    style={styles.textoinput}
    placeholder="Digite aqui"
    />
    </View>

    </ScrollView>

    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(45, 181, 131, 1)',
    padding: 0,
    margin: 0
  },

  buttonImageIconStyle: {
    padding: 20,
    margin: 1,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  viewstyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent: 'space-evenly',
    margin: 6,
    borderRadius: 10, 
    padding: 1,
    backgroundColor: '#DCDCDC',
    opacity: 0.72
  },

  fundoIcone: {
    margin: 6,
    borderRadius: 10, 
    padding:5, 
    backgroundColor: '#DCDCDC',
  },

  viewText: {
    flex: 1,
    margin: 6,
    pading: 10,
    backgroundColor: '#DCDCDC'
  },

  textStyleTitle: { //estilo das frases encima das notas e eventos.
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center'
  },

  textoinput: {
    width: 170,
    height: 120,
    backgroundColor:'rgba(63, 191, 129, 0.88)',
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    margin: 6,
    padding: 6,
    textAlignVertical: 'top'
    },

  viewInput1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    margin:6,
    borderRadius: 2,
    backgroundColor: '#DCDCDC',
  },

  viewInput2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    margin:6,
    borderRadius: 2,
    backgroundColor: '#DCDCDC',
  },

  viewInput3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    margin:6,
    borderRadius: 2,
    backgroundColor: '#DCDCDC',
  },

});