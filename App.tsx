import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';

//importando componente PizzaItem criado
import { PizzaItem } from './components/PizzaItem';

const App = () =>{

   //Ação a ser executada ao clicar no botão - É uma função
   const handleButton = () =>{

      Alert.alert('Fui clicado!');
   }

   return (
   <SafeAreaView style={{ margin: Constants.statusBarHeight }}>

      <Text style={styles.titulo}>Olá Mundo!</Text>


      <Button title="Clique aqui!" onPress={handleButton} />


      <Text style={styles.subtitulo}>Lista de Pizzas:</Text>
      
      <PizzaItem 
         name="Calabresa" 
         price={20} 
         originalPrice={100}
         items={['Farinha', 'Cebola', 'Queijo', 'Calabresa', 'Corante']}
      />
      <PizzaItem 
         name="Portuguesa" 
         price={50} 
         items={['Cebola', 'Queijo', 'Calabresa', 'Pimentão']}
      />
      <PizzaItem 
         name="Frango com Pequi" 
         price={150} 
         items={['Farinha', 'Queijo', 'Frango', 'Pequi']}
      />

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