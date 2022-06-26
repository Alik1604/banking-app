import { StyleSheet, Text, View, Button, Modal,Image, TouchableOpacity, ScrollView} from 'react-native';
import { BlurView } from 'expo-blur';

export default function Info({controler}) {

return(
    <Modal animationType="slide" transparent={true}>
        
        <BlurView intensity={10} style={styles.Container}>
       
           <View style={styles.cashBlock} >
           <TouchableOpacity onPress={() => controler(false)} >
                <View style={styles.cicrcule}>
                    <Image source={require('../imgs/plus.png')}></Image>
                </View>
           </TouchableOpacity>
           <ScrollView contentContainerStyle={{alignItems:'center'}} style={styles.ScrollWraper}>
           <View style={{alignItems:'center', justifyContent:'center',}}>
                <Text style={{fontSize:26,color:'#0D1F3C'}}>British Sterlings (GBP)</Text>
                <Text style={{textAlign:'center',fontSize:18, color:'#0D1F3C',marginTop:'3%'}}>£ 8,275.29</Text>
            </View> 
            <Text style={{fontSize:16,color:'#0D1F3C', width:'100%',textAlign:'center',  marginTop:'10%'}}>[Currency name] details {"\n"} here you can find the account number, {"\n"} IBAN and also share and send money</Text>
            <View style={{ marginTop:'20%'}}>
                <Text  style={{fontSize:18,color:'#485068'}}>Account number: 123456789 00</Text>
                <Text style={{fontSize:18,color:'#485068', textAlign:'center', marginTop:'5%'}}>Sort code: 98-76-54</Text>
            </View>
            <Text style={{fontSize:18,color:'#485068', textAlign:'center', marginTop:'10%'}}>IBAN: GBP 00123456789 100</Text>
            <View style={styles.SCCont}>
                <View style={{flexDirection:'row',}}>
                    <Image source={require('../imgs/copy.png')}></Image>
                    <Text style={{fontSize:19,color:'#0D1F3C', marginLeft:8}}>Copy</Text>
                </View>
                <View style={{height:'100%', width:1, backgroundColor:"#BCC5D3"}}></View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../imgs/share.png')}></Image>
                    <Text style={{fontSize:19,color:'#0D1F3C',marginLeft:8}}>Share</Text>
                </View>
            </View>
            <View style={styles.closeButton}>
                <Text style={{fontSize:19}}>Close account</Text>
            </View>
           </ScrollView> 
          
           </View>
        </BlurView>
    </Modal >
);
}
const styles = StyleSheet.create({ 
    Container:{
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(13, 31, 60, 0.496995)',
        zIndex:0,
    },
    cashBlock:{
        height:'75%',
        position:'absolute',
        bottom:0,
        backgroundColor:'#fff',
        paddingBottom:'10%',
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:'center',
        shadowOffset: {width: 0, height: -6},
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    cicrcule:{
        backgroundColor:'#FFAC30',
        borderColor:'#EDF1F9',
        width:60,
        height:60,
        borderWidth:4,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        bottom:30,
    },
    closeButton:{
        borderColor:'#B5BBC9',
        borderWidth:1,
        padding:15,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        width:'80%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
    },
    SCCont:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:"70%",
        marginTop:'30%'
    },
   
  });