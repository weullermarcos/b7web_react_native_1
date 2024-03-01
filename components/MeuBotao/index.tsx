import { Alert, Text, TouchableOpacity } from "react-native";
import {styles} from './styles';

//Props do componente MeuBotao
type Props = {
    textoBotao: string;
}

//Criando meu componente de botão
export const MeuBotao = ({textoBotao}: Props) =>{

    return(
        <TouchableOpacity onPress={() => {Alert.alert('Clicado!')}} style={styles.container}>
            <Text style={styles.text}>{textoBotao}</Text>
        </TouchableOpacity>
    );

}
