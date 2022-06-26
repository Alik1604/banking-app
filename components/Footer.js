import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Footer({navigation , state}) {
    // switch (currency) {
    //     case 'eur':
    //     curr = '€'
    //     break;
    //     case 'gbp':
    //     curr = '£';
    //     break;
    //     case 'usd':
    //     curr='$';
    //     break;
    //     case 'krw':
    //     curr='₩';
    //     break;
    //     default:
    //     console.log(`Sorry, we are out of ${currency}.`);
    // }

    return(
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Accounts')}>
            {state == 'Home' ?
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../imgs/p1A.png')}></Image>
                <Text style={{marginTop:5,color:'#FFAC30'}}>Home</Text>
              </View>
              :
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../imgs/p1.png')}></Image>
                <Text style={{marginTop:5}}>Home</Text>
              </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Card')}>
            {state == 'Card' ?
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../imgs/p2A.png')}></Image>
                <Text style={{marginTop:5,color:'#FFAC30' }}>Card</Text>
              </View>
              :
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../imgs/p2.png')}></Image>
                <Text style={{marginTop:5}}>Card</Text>
              </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Top Up')}>
            {state == 'Top up'?
              <View style={{justifyContent:'center', alignItems:'center',}}>
                <Image source={require('../imgs/p3A.png')}></Image>
                <Text style={{marginTop:5, color:'#FFAC30'}}>Top up</Text>
              </View>
            :
              <View style={{justifyContent:'center', alignItems:'center',}}>
                <Image source={require('../imgs/p3.png')}></Image>
                <Text style={{marginTop:5}}>Top up</Text>
              </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            {state == 'Settings'?
              <View style={{justifyContent:'center', alignItems:'center',}}>
                <Image source={require('../imgs/p4A.png')}></Image>
                <Text style={{marginTop:5,color:'#FFAC30'}}>Settings</Text>
              </View>
              :
              <View style={{justifyContent:'center', alignItems:'center',}}>
                <Image source={require('../imgs/p4.png')}></Image>
                <Text style={{marginTop:5}}>Settings</Text>
              </View>
          }
            
          </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    footer: {
      position: "absolute",
      bottom: 0,
      backgroundColor: '#FFFFFF',
      height: '10%',
      width: '100%',
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 2,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      zIndex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:10,
      paddingLeft:30,
      paddingRight:30,
      paddingBottom:20,
    },
  });

