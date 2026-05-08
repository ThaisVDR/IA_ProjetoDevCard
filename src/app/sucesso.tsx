import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Sucesso() {
    const router = useRouter();

    return (
        <View style={styles.container}>

            <View style={styles.icone}>
                <Ionicons name="checkmark" size={60} color="white" />
            </View>

            <Text style={styles.texto}>Cartão criado com sucesso!</Text>
            <Text style={styles.subtitulo}>
                Seu cartão de visita digital está pronto.{"\n"}
                Compartilhe com a galera!
            </Text>
            <TouchableOpacity
                style={styles.btnRoxo}
                onPress={() => router.replace('/cadastro')}
            >
                <Text style={styles.txtBranco}>Criar outro cartão</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRoxo} onPress={() => router.replace('/')}>
                <Text style={styles.txtBranco}>Voltar ao Início</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    icone: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#27ae60',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    texto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#258b17',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 65,
    },
    btnRoxo: {
        backgroundColor: '#7b42f5',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    txtBranco: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
