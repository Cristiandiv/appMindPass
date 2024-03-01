import {ScrollView, Easing, Animated,  Text, ImageBackground, View,StyleSheet, Button, Image, TouchableOpacity, TextInput } from 'react-native';
 
export default function HomeScreen({ navigation }){
  return(

    
    
    <ImageBackground
    source={require('../assets/fundoAnimadoMindPass-AzulClaro3.gif')}
    style={styles.container}
    >

     
    <View style={styles.viewstyle}>

    <TouchableOpacity title="Home" style={styles.fundoIcone}
    onPress={()=> navigation.navigate('HomeScreen')}>
    <Image
    source={require('../assets/minicerebro.png')}
    style={styles.buttonImageIconStyle}
    />
    </TouchableOpacity>
    
    <TouchableOpacity title="Stats" style={styles.fundoIcone}
    onPress={()=> navigation.navigate('Stats')}>
    <Image
    source={require('../assets/icone-stats.png')}
    style={styles.buttonImageIconStyle}
    />
    </TouchableOpacity>
    
    <TouchableOpacity title="Agenda" style={styles.fundoIcone}
    onPress={()=> navigation.navigate('Agenda')}>
    <Image
    source={require('../assets/mapa.png')}
    style={styles.buttonImageIconStyle}
    />
    </TouchableOpacity>
    
    <TouchableOpacity title="Diario" style={styles.fundoIcone}
    onPress={()=> navigation.navigate('Diario')}>
    <Image
    source={require('../assets/diario.png')}
    style={styles.buttonImageIconStyle}
    />
    </TouchableOpacity>
    
    <TouchableOpacity title="Agenda" style={styles.fundoIcone}
    onPress={()=> navigation.navigate('Agenda')}>
    <Image
    source={require('../assets/agenda.png')}
    style={styles.buttonImageIconStyle}
    />
    </TouchableOpacity>
    </View>


    <ScrollView style={styles.ScrollView}>

    <Image
    source={require('../assets/Mind-Pass.gif')}
    style={styles.backgroundMindpass}
    />
    <Image
    source={require('../assets/Mind-Pass.gif')}
    style={styles.backgroundMindpass}
    />
    <Image
    source={require('../assets/Mind-Pass.gif')}
    style={styles.backgroundMindpass}
    />

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
    margin: 1,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  viewstyle: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    margin: 6,
    borderRadius: 10, 
    padding: 1,
    backgroundColor: '#dcdcdc', ///azul bb : #87cefa / verde : #3cb371 
    opacity: 0.72,
    position: 'relative'
  },

  fundoIcone: {
    margin: 6,
    borderRadius: 10, 
    padding:5, 
    backgroundColor: '#dcdcdc',
  },

  backgroundMindpass: {
    width: 360,
    height: 400,
    marginBottom: 10,
    resizeMode: 'stretch',
    },

  ScrollView: {
    flex: 1,
    margin: 6,
    padding: 10,
    backgroundColor: '#4db8ff',
    opacity: 0.7
  },


  
});
