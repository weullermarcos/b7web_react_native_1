import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';

//importando componente PizzaItem criado
import { PizzaItem } from './components/PizzaItem';
import { useState } from "react";

const App = () =>{

   //Criando States de nome e sobrenome
   const [nome, setNome] = useState('Ninguém');
   const [sobrenome, setSobrenome] = useState('Santos');

   //Criando state para ocultar ou exibir os botões de troca de nome
   const [showOptions, setShowOptions] = useState(true);


   //Ação do botão para trocar o nome para Weuller
   const handleBotao1 = () => {
      setNome('Weuller');
      setSobrenome('Marcos');
   }

   //Ação do botão para trocar o nome para João
   const handleBotao2 = () => {
      setNome('João');
      setSobrenome('Paulo');
   }

   //Ação para exibir / Ocultar botões de troca de nome
   const handleOptionsButton = () => {
      setShowOptions(! showOptions);
   }

   //Ação a ser executada ao clicar no botão - É uma função
   const handleButton = () =>{

      Alert.alert('Fui clicado!');
   }

   //Ação para quando COMEÇOU a apertar o botão
   const handleComecouApertar = () => {

      Alert.alert('Começou a apertar!');
   }

   //Ação para quando TERMINOU de apertar o botão
   const handleTerminouApertar = () => {
      
      Alert.alert('Terminou de apertar!');
   }

   //Ação para quando fez um Aperto Longo
   const handleApertoLongo = () => {

      Alert.alert('Aperto Longoooo!');
   }

   return (
   <SafeAreaView style={{ margin: Constants.statusBarHeight }}>

      <Text style={styles.titulo}>Olá Mundo!</Text>

      <Text style={styles.subtitulo}>Meu nome é: {nome} {sobrenome}</Text>

      {showOptions &&
         <View style={styles.box}>
            <Button title="Mudar para Weuller" onPress={handleBotao1}/>
            <Button title="Mudar para João" onPress={handleBotao2}/>
         </View>
      }

      <Button title={showOptions ? 'Ocultar Opções!' : 'Mostrar Opções!'} onPress={handleOptionsButton} />


      <Pressable style={styles.button} onPressIn={handleComecouApertar} onPressOut={handleTerminouApertar}>
         <View>
            <Text style={styles.buttonText}>Clique em mim!</Text>
         </View>
      </Pressable>

      <Pressable style={styles.button} onLongPress={handleApertoLongo} delayLongPress={1000}>
         <View>
            <Text style={styles.buttonText}>Long Press!</Text>
         </View>
      </Pressable>


      <Text style={styles.subtitulo}>Lista de Pizzas:</Text>
      
      <PizzaItem 
         name="Calabresa" 
         price={20} 
         originalPrice={100}
         items={['Farinha', 'Cebola', 'Queijo', 'Calabresa', 'Corante']}
         onPress={() => Alert.alert('Calabresa')} 
      />

      <PizzaItem 
         name="Portuguesa" 
         price={50} 
         items={['Cebola', 'Queijo', 'Calabresa', 'Pimentão']}
         onPress={() => Alert.alert('Portuguesa')}
      />   

      <PizzaItem 
         name="Frango com Pequi" 
         price={150} 
         items={['Farinha', 'Queijo', 'Frango', 'Pequi']}
         onPress={() => Alert.alert('Frango com Pequi')}
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
      marginTop: 20,
      marginBottom: 20,
   },

   button:{
      backgroundColor: '#FF0000',
      padding: 10,
      margin: 10,
   },

   buttonText:{
      color: '#FFFFFF',
      textAlign: 'center',
   },

   box:{

      borderColor: '#000000',
      borderStyle: 'dotted',
      borderWidth: 2,
      padding: 5,
      margin: 5,

   },

});

export default App;