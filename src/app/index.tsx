import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { THEME } from '../styles/contants';
import { Button } from '../components/Button';


export default function Home() {
    const router = useRouter();
    return (

        <SafeAreaView>
           <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>DevCard</Text>
                <Text style={styles.subtitulo}>Seu cartão de visita digital de dev mobile</Text>
            </View>
           <Button label="Criar meu Cartão" onPress={() => router.push('/cadastro')} />

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
    },
    logo: {
        fontSize: 58,
        color: THEME.colors.primary,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 16,
        color: THEME.colors.subtitle,
        fontWeight: '400',
        width: 200,
        textAlign: 'center',
    },
});
