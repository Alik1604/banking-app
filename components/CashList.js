import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const Item = ({ title, currency, balance}) => {
    let curr;
    let cash;
    switch (currency) {
        case 'eur':
        curr = '€'
        break;
        case 'gbp':
        curr = '£';
        break;
        case 'usd':
        curr='$';
        break;
        case 'krw':
        curr='₩';
        break;
        default:
        console.log(`Sorry, we are out of ${currency}.`);
    }
    
    return(
        <View style={styles.currItem}>
            <View style={{flexDirection:'row', flexGrow: 1}}>
                <View style={styles.currCircule}>
                    <Text style={{ flex:1, textAlign:'center', paddingTop:2, color:'#fff', fontSize:24}}>{curr}</Text>
                </View>
                <View style={{marginLeft:5}}>
                    <Text style={{fontSize:15}}>{title}</Text>
                    <Text style={{fontSize:15}}>Account details</Text>
                </View>
            </View>
            <Text style={{fontSize:15, marginBottom:15, marginRight:5}}> {curr+' '+balance}</Text>
        </View>
      );  
}

export default function CashList(props) {
    const DATA = props.list;
    const renderItem = ({ item }) => (
        <Item title={item.title} balance={item.balance} currency={item.currency}/>
      );
return(
    <SafeAreaView >
        <FlatList
            data={DATA}
            renderItem={renderItem}
            style={{ width:'100%', height:'80%', marginBottom:'15%'}}
            contentContainerStyle={{ alignItems:'center'}}
        />
    </SafeAreaView>
);
}
const styles = StyleSheet.create({
    currItem:{
      height:60,
      width:'90%',
      backgroundColor: '#EDF1F9',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      justifySelf:'center',
      alignItems:'center',
      flexDirection:'row',
      padding:13,
      marginTop:20,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.15,
      shadowRadius: 3,
    },
    currCircule:{
       width:34,
       height:34,
       backgroundColor:'#FFAC30',
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       borderBottomLeftRadius: 30,
       borderBottomRightRadius: 30, 
    },
  });