import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import secondScreen from './screens/secondscreen';
import Home from './screens/homescreen';
import Bar from './components/bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        header:(props) => <Bar {...props}/>
      }}>
        <Stack.Screen name="MD Nav Demo First" component={Home} />
        <Stack.Screen name="MD Nav Demo Second" component={secondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});