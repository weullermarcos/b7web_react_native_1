import { SafeAreaView, Text, View } from "react-native";
import Constants from 'expo-constants';

//importando componente PizzaItem criado
import { PizzaItem } from './components/PizzaItem';

const App = () =>{
   return (
   <SafeAreaView style={{ margin: Constants.statusBarHeight }}>
      <Text>Olá Mundo!</Text>
      <PizzaItem/>
      <PizzaItem/>
      <PizzaItem/>
   </SafeAreaView>
   );
}

export default App;