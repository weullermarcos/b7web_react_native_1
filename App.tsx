import { Alert, Button, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';

//importando componente PizzaItem criado
import { PizzaItem } from './components/PizzaItem';
import { useState } from "react";
import { Pessoa } from "./types/Pessoa";

const App = () =>{

   //Criando States de nome e sobrenome
   const [nome, setNome] = useState('Ninguém');
   const [sobrenome, setSobrenome] = useState('Santos');

   //Criando state para ocultar ou exibir os botões de troca de nome
   const [showOptions, setShowOptions] = useState(true);


   //Criando uma state para o objeto pessoa
   const [pessoa, setPessoa] = useState<Pessoa>({
      nome: 'Jorel',
      idade: 25,
      altura: 1.85,
      peso: 96
   });

   //Criando state com array
   const [ingredientes, setIngredientes] = useState<string[]>([
      'fatinha',
      'ovo',
      'corante'
   ]);


   //Ação para adicionar um novo ingrediente ao array de ingredientes
   const handleNovoIngrediente = () => {

      //os ... permite clonar um array inteiro e só adicionar o que for necessário
      setIngredientes([...ingredientes, 'Leite']);
   }


   //Função para trocar o nome da pessoa pelo nome recebido
   const trocaNome = (novNome: string) => {

      //os ... permite clonar um objeto inteiro e só modificar o que for necessário
      //no exemplo abaixo clonamos o objeto pessoa e só trocamos o nome
      setPessoa({...pessoa, nome: novNome});
   }

   //Troca a Idade da pessoa pela idade recebida
   const trocaIdade = (novaIdade: number) => {

      //os ... permite clonar um objeto inteiro e só modificar o que for necessário
      //no exemplo abaixo clonamos o objeto pessoa e só trocamos a idade
      setPessoa({...pessoa, idade: novaIdade});
   }

   //Ação do botão para trocar o nome para Weuller
   const handleBotao1 = () => {

      //Usa states para fazer a troca do nome e sobrenome
      setNome('Weuller');
      setSobrenome('Marcos');
   }

   //Ação do botão para trocar o nome para João
   const handleBotao2 = () => {

      //Usa states para fazer a troca do nome e sobrenome
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
   <ScrollView style={{ margin: Constants.statusBarHeight }}>

      <Text style={styles.titulo}>Olá Mundo!</Text>

      {/* Bloco - Usando Pressable Botões e Sates*/}
      <View style={styles.box}>
         <Text style={styles.subtitulo}>Meu nome é: {nome} {sobrenome}</Text>

         {showOptions &&
            <View style={styles.box}>
               <Button title="Mudar para Weuller" onPress={handleBotao1}/>
               <Button title="Mudar para João" onPress={handleBotao2}/>
            </View>
         }

         <Button title={showOptions ? 'Ocultar Opções!' : 'Mostrar Opções!'} onPress={handleOptionsButton} />
      </View>


      {/* Bloco - Botões - Usando Pressable */}
      <View style={styles.box}>
         <Text style={styles.subtitulo}>Usando Pressable:</Text>
         <Pressable style={styles.button} onPressIn={handleComecouApertar} onPressOut={handleTerminouApertar}>
            <View>
               <Text style={styles.buttonText}>Testando Onpress!</Text>
            </View>
         </Pressable>

         <Pressable style={styles.button} onLongPress={handleApertoLongo} delayLongPress={1000}>
            <View>
               <Text style={styles.buttonText}>Long Press!</Text>
            </View>
         </Pressable>
      </View>


      {/* Bloco - Alterar Nome e Idade - States como Objeto */}
      <View style={styles.box}>
         <Text style={styles.subtitulo}>Pessoa - States com Objeto</Text>
         <Text>Nome: {pessoa.nome}</Text>
         <Text>Idade: {pessoa.idade} anos</Text>

         <Button title="Trocar nome para Weuller" onPress={() => trocaNome('Weuller')}/>
         <Button title="Trocar nome para Jão" onPress={() => trocaNome('Jão')}/>

         <Button title="Trocar idade para 90 anos" onPress={() => trocaIdade(90)}/>
         <Button title="Trocar idade para 10 anos" onPress={() => trocaIdade(10)}/>
      </View>


      {/* Bloco - Adicionar ingredientes - States com array */}
      <View style={styles.box}>
         <Text style={styles.subtitulo}>Ingredientes - States com Array</Text>
         <View>
            {ingredientes.map((item, index) => (
               <Text key={index}>{item}</Text>
            ))}
         </View>

         <Button title="Adicionar ingrediente" onPress={handleNovoIngrediente}/>
      </View>


      {/* Bloco - Lista de Pizzas - Usando Props*/}
      <View style={styles.box}>
         <Text style={styles.subtitulo}>Pizzas - Usando Props e Componentes</Text>
         
         <PizzaItem 
            name="Calabresa" 
            price={20} 
            originalPrice={100}
            items={['Farinha', 'Cebola', 'Queijo', 'Calabresa', 'Corante']}
            onPress={() => Alert.alert('Calabresa')} 
         /> 

         <PizzaItem 
            name="Frango com Pequi" 
            price={150} 
            items={['Farinha', 'Queijo', 'Frango', 'Pequi']}
            onPress={() => Alert.alert('Frango com Pequi')}
         />
      </View>

      {/* Bloco - Usando Imagem Externa*/}
      <View style={styles.box}>

         <Text style={styles.subtitulo}>Usando Imagem Externa</Text>
         <Image 
            source={{uri: 'https://www.google.com.br/google.jpg'}} 
            style={{width: 300, height: 100}}
         />
      </View>

      {/* Bloco - Usando Imagem Interna*/}
      <View style={styles.box}>

         <Text style={styles.subtitulo}>Usando Imagem Interna</Text>
         <Image 
            source={require('./assets/logo.png')} 
            style={{width: 250, height: 250}}
         />
      </View>

      {/* Bloco - Usando Imagem Como Background*/}
      <View style={styles.box}>
         <ImageBackground source={require('./assets/logo.png')} style={{width: 250, height: 250}}>
            <Text style={{color: '#FFFFFF'}}>Texto de exemplo...</Text>
         </ImageBackground>
      </View>


   </ScrollView>
   );
}

const styles = StyleSheet.create({

   titulo:{
      fontSize: 20,
      color: '#FF0000',
      textAlign: 'center',
   },

   subtitulo:{
      fontSize: 16,
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
      padding: 10,
      margin: 10,

   },

});

export default App;