import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { useEffect, useState } from 'react';
import axios from '../node_modules/axios';
import CashBar from '../components/CashBar'
import HeadButtons from '../components/HeadButtons';
import CashList from '../components/CashList'
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  const url = 'https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data';

  const [data, setDate] = useState({}); 
  const getData = () =>{
    axios.get(url, {
      headers: { 
        'x-api-key': "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59" 
      }
    })
    .then((response) => {
      setDate(response.data.body); 
    })
  }
  
  useEffect(() => {
    getData();
  }, []);

    return (
      <View style={styles.container}>
          <CashBar cash={data.balance}/>
          <HeadButtons/>
          <View style={styles.currList}>
            <Text style={{fontSize:18, marginTop:20, marginLeft:32 , color:'#262F56'}}>All currency accounts</Text>
            <CashList list={data.accounts}/>
          </View>
          <Footer navigation={navigation} state={'Home'}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D1F3C',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
    },
    currList:{
      width:'100%',
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginBottom:'10%',
     flex:6,
    },
  });