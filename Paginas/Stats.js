import {ScrollView, Text, View,StyleSheet, ImageBackground,  Button, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Stats ({navigation}){
  return(
    <ImageBackground
    source={require('../assets/fundoAnimadoMindPass-AzulClaro2.gif')}
    style={styles.container}
    >

<ScrollView>

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

        <View style={styles.viewText}>
        
          <Text style={styles.textStyleTitle}>
          Como você está se sentindo hoje?
          </Text>

        </View>

      <View style={[styles.viewOcta, {zIndex: 1}]}>
      
        <Image source={require('../assets/octagono1.png')}
        style={styles.imageStyle}
        />

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonFeliz, {zIndex: 2}]}
        onPress={()=> navigation.navigate('TelaStat')}>
          <Text>Feliz</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonAssustado, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Assustado</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonTriste, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Triste</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonPreocupado, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Preocupado</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonMal, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Mal</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonEstressado, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Estressado</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonDeprimido, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Deprimido</Text>
        </TouchableOpacity>

        <TouchableOpacity title="Feliz"  style={[styles.viewButtonCalmo, {zIndex: 2}]}
        onPress={()=> navigation.navigate('Agenda')}>
          <Text>Calmo</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.viewFooter}>
        <Text>
        Eis aqui a parte do xp do usuario.
        </Text>
      </View>
    
</ScrollView>
    

    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'rgba(45, 181, 131, 1)',
    paddingHorizontal: 6,
    margin: 0,
  },

  buttonImageIconStyle: { //edicao perfeita para a barra do top com o scrollview
    padding: 20,
    marginLeft: 8,
    marginRight: 8,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  viewstyle: {
    flex: 1,
    flexWrap: 'nowrap',
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
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    pading: 6,
    backgroundColor: '#DCDCDC'
  },

  textStyleTitle: { //estilo das frases encima das notas e eventos.
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10
  },

  imageStyle: {
    height: 340,
    width: 380,
    resizeMode: 'stretch',
  },

  viewOcta: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 40,
    margin:6,
    borderRadius: 2,
    // backgroundColor: '#DCDCDC',
  },

  viewButtonFeliz: {
    flex: 1,
    position: 'absolute',
    top: 70,
    right: 80,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewButtonAssustado: {
    flex: 1,
    position: 'absolute',
    top: 145,
    right: 30,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewButtonTriste: {
    flex: 1,
    position: 'absolute',
    bottom: 70,
    right: 70,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewButtonPreocupado: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

    viewButtonMal: {
    flex: 1,
    position: 'absolute',
    bottom: 70,
    left: 75,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewButtonEstressado: {
    flex: 1,
    position: 'absolute',
    top: 145,
    left: 40,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewButtonDeprimido: {
    flex: 1,
    position: 'absolute',
    top: 70,
    left: 60,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewButtonCalmo: {
    flex: 1,
    position: 'absolute',
    top: 40,
    backgroundColor: '#57b9fa',
    margin: 6,
    padding: 6
  },

  viewFooter:{
    flex: 1,
    padding: 10,
    margin: 6,
    backgroundColor: '#DCDCDC',
    height: 160,
    width: 380
  },


});