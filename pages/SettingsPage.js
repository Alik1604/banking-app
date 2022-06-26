import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';

export default function SettingsPage({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.set}>
                <Image source={require('../imgs/n1.png')}></Image>
            </View>
            <Footer navigation={navigation} state={'Settings'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1F3C',
        alignItems: 'center',
        justifyContent: 'center',
      },
      currList:{
        width:'100%',
        height:'55%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom:60,
      },
      set:{
        position: "absolute",
        top:0,
        right:0,
        marginRight:'5%',
        marginTop:'10%',
      }
  });

