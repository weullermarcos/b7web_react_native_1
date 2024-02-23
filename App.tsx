import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

//importando componente PizzaItem criado
import { PizzaItem } from './components/PizzaItem';

const App = () =>{
   return (
   <SafeAreaView style={{ margin: Constants.statusBarHeight }}>

      <Text style={styles.titulo}>Olá Mundo!</Text>
      <Text style={styles.subtitulo}>Lista de Pizzas:</Text>
      
      <PizzaItem/>
      <PizzaItem/>
      <PizzaItem/>
   </SafeAreaView>
   );
}

const styles = StyleSheet.create({

   titulo:{
      fontSize: 24,
      color: '#FF0000',
      textAlign: 'center',
   },

   subtitulo:{
      fontSize: 18,
      color: '#0000FF',
      textAlign: 'center',
   }
});

export default App;