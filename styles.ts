import { StyleSheet } from "react-native";

//Criando arquivo de estilos
export const styles = StyleSheet.create({

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
 
    input:{
       backgroundColor: '#CCCCCC',
       padding: 10,
    },

    ball:{
        backgroundColor: '#000000',
        width: 50,
        height: 50,
        borderRadius: 25
    },

    fundoAzul: {
        backgroundColor: '#0000FF',
    }
 
 });