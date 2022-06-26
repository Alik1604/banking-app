import { StyleSheet, Text, View, Button, TouchableOpacity,Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import SettingsPage from './pages/SettingsPage';
import TopUpPage from './pages/TopUpPage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
       <Stack.Navigator>
        <Stack.Screen name="Accounts" component={HomePage} 
          options={{
            title: 'Accounts',
            headerStyle: {
              backgroundColor: '#0D1F3C',
              borderBottomWidth: 0,
              
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:26, 
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerRight: () => (
              <TouchableOpacity style={styles.button}>
                <Image source={require("./imgs/h2.png")}/>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={styles.button}>
                <Image source={require("./imgs/h1.png")}/>
              </TouchableOpacity>
            )
          }} 
          
        />
        <Stack.Screen name="Card" component={CardPage} 
          options={{
            title: 'Card',
            headerStyle: {
              backgroundColor: '#0D1F3C',
              borderBottomWidth: 0,
              
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:26, 
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerRight: () => (
              <TouchableOpacity style={styles.button}>
                <Image source={require("./imgs/n2.png")}/>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={styles.button}>
                <Image source={require("./imgs/h1.png")}/>
              </TouchableOpacity>
            )
          }}

        />
        <Stack.Screen name="Top Up" component={TopUpPage} 
           options={{
            title: 'Top Up',
            headerStyle: {
              backgroundColor: '#0D1F3C',
              borderBottomWidth: 0,
              
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:26, 
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerRight: () => (
              <TouchableOpacity style={styles.button}>
                <Image source={require("./imgs/n2.png")}/>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity style={styles.button}>
                <Image source={require("./imgs/h1.png")}/>
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen name="Settings" component={SettingsPage} 
             options={{
              title: 'Settings',
              headerStyle: {
                backgroundColor: '#0D1F3C',
                borderBottomWidth: 0,
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:26, 
              },
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerRight: () => (
                <TouchableOpacity style={styles.button}>
                  <Image source={require("./imgs/n2.png")}/>
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity style={styles.button}>
                  <Image source={require("./imgs/h1.png")}/>
                </TouchableOpacity>
              )
            }}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button:{

  }
});
