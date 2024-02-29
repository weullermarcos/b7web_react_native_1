import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


//Criando um tipo props para o componente
type Props = {

    nome?: string;
}

//Criando os estilos do componente
const styles = StyleSheet.create({

    input:{

        backgroundColor: '#CCCCCC',
        padding: 10,
    },

});

//Criando um  novo componente - Recebendo as props
export const SeuNome = ({nome}: Props) => {

    
    //Criando state para o campo de input
    const [nameField, setNameField] = useState('');

    return(

        <View>
            <Text>Qual o seu nome?</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Digite o seu nome..." 
                placeholderTextColor={'#FF0000'}
                value={nameField}
                onChangeText={texto => setNameField(texto)}
            />

            {nameField &&
                <Text>Nome digitado: {nameField}</Text>
            }
            
        </View>

    );
}


