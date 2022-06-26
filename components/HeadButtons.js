import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';

export default function HeadButtons({controler}) {
    return (
        <View style={{marginTop:'5%', width:'90%', flex:2, flexDirection:'row',  justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => controler(true)}>
                <View style={{alignItems:'center' }}>
                  <View style={styles.buttonBlock1}>
                    <Image
                      source={require('../imgs/1.png')}
                    />
                  </View>
                  <Text  style={{fontSize:12, color:'#FFFFFF', marginTop:5}} >Viev details</Text>
                </View>
              </TouchableOpacity>
              <View style={{alignItems:'center'}}>
                  <View style={styles.buttonBlock2}>
                  <Image
                      source={require('../imgs/2.png')}
                    />
                  </View>
                  <Text style={{fontSize:12, color:'#FFFFFF', marginTop:5}}>Exchange</Text>
              </View>
              <View style={{alignItems:'center'}}>
                  <View style={styles.buttonBlock1}>
                  <Image
                      source={require('../imgs/3.png')}
                    />
                  </View>
                  <Text style={{fontSize:12, color:'#FFFFFF', marginTop:5}}>Send Money</Text>
              </View>
              <View style={{alignItems:'center'}}>
                  <View style={styles.buttonBlock2}>
                  <Image
                      source={require('../imgs/4.png')}
                    />
                  </View>
                  <Text style={{fontSize:12, color:'#FFFFFF', marginTop:5}}>Statistic</Text>
              </View>
          </View>
    )
}

const styles = StyleSheet.create({
    buttonBlock1:{
      backgroundColor:'#262F56', 
      height: 50,  
      width:50,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      alignItems:'center',
      justifyContent:'center',
    },
    buttonBlock2:{
      backgroundColor:'#EDF1F9', 
      height: 50,  
      width:50,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      alignItems:'center',
      justifyContent:'center',
    },
  });