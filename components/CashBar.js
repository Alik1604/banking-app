import { StyleSheet, Text, View} from 'react-native';

export default function CashBar(props) {

return(
    <View style={styles.cashBlock}>
              <Text style={{fontSize:18, color:'#262F56'}}>Accounts Name (EUR)</Text>
              <Text style={{fontSize:35}}>€{props.cash}</Text>
              <Text style={{fontSize:18}}>Current balance</Text>
    </View >
);
}
const styles = StyleSheet.create({ 
    cashBlock:{
      marginTop:'5%',
      width:'90%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: '#F1F3F6',
      alignItems:'center',
      justifyContent:'center',
      flex:2
    },
  });