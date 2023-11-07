import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import InputText from './screens/InputText';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Displaydata from "./screens/Displaydata"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View className="h-screen flex justify-center" >
      <NavigationContainer>
      <Stack.Navigator initialRouteName="InpuText">
      <Stack.Screen name="InputText" component={InputText}/>
      <Stack.Screen name="Displaydata" component={Displaydata}/>
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

