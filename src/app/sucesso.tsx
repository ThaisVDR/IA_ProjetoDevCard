import { Image, StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';
import { THEME } from '../styles/contants';


export default function Sucesso() {
    const router = useRouter();
    return (

        <SafeAreaView>
           <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Cartão criado com sucesso!</Text>
                <Text style={styles.subtitulo}>Seu cartão de visita digital está pronto. Compartilhe com a galera!</Text>
            </View>

            <View style={styles.footer}>
           <Button label="Criar outro cartão" onPress={() => router.push('/cadastro')} />
           <Button variant="secondary" label="Voltar ao início" onPress={() => router.push('/')} />
            </View>

        </View>
        </SafeAreaView>

    
    );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'column',
       height: '100%',
       justifyContent: 'center',
       paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 550,
        gap: 12,
    },
    titulo: {
        fontSize: THEME.text.heading.h2,
        color: THEME.colors.heading,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 16,
        color: THEME.colors.heading,
        fontWeight: '400',
        width: 200,
        textAlign: 'center',
    },
    footer: {
       flexDirection: 'column',
       gap: 12,
    },
});
