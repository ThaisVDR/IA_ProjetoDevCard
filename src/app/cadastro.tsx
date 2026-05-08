import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [anos, setAnos] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [cor, setCor] = useState(''); 

    const [erroNome, setErroNome] = useState('');
    const [erroCargo, setErroCargo] = useState('');
    const [erroAnos, setErroAnos] = useState('');
    const [erroTecnologia, setErroTecnologia] = useState('');

    function salvar() {
        let valido = true;

        if (nome.length < 3) {
            setErroNome("Mínimo de 3 caracteres");
            valido = false;
        } else {
            setErroNome("");
        }

        if (cargo == "") {
            setErroCargo("Cargo é obrigatório");
            valido = false;
        } else {
            setErroCargo("");
        }

        if (anos == "" || Number(anos) <= 0) {
            setErroAnos("Coloque um número maior que 0");
            valido = false;
        } else {
            setErroAnos("");
        }

        if (tecnologia == "") {
            setErroTecnologia("Tecnologia é obrigatória");
            valido = false;
        } else {
            setErroTecnologia("");
        }

        if (valido) {
            router.push({
                pathname: '/preview',
                params: { nome, cargo, empresa, anos, tecnologia, cor },
            });
        }
    }

    return (
        <ScrollView style={styles.fundo}>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Cadastro</Text>
                <Text style={styles.sub}>Preencha seus dados de dev</Text>

                <Text style={styles.label}>Nome completo</Text>
                <TextInput 
                    style={erroNome ? styles.inputErro : styles.input} 
                    value={nome} 
                    onChangeText={setNome} 
                    placeholder="Digite a seu Nome Completo" 
                />
                {erroNome ? <Text style={styles.msgErro}>{erroNome}</Text> : null}

                <Text style={styles.label}>Cargo</Text>
                <TextInput 
                    style={erroCargo ? styles.inputErro : styles.input} 
                    value={cargo} 
                    onChangeText={setCargo} 
                    placeholder="Digite a seu Cargo" 
                />
                {erroCargo ? <Text style={styles.msgErro}>{erroCargo}</Text> : null}

                <Text style={styles.label}>Empresa (opcional)</Text>
                <TextInput 
                    style={styles.input} 
                    value={empresa} 
                    onChangeText={setEmpresa} 
                    placeholder="Digite a sua Empresa" 
                />

                <Text style={styles.label}>Anos de experiência</Text>
                <TextInput
                    style={erroAnos ? styles.inputErro : styles.input}
                    value={anos}
                    onChangeText={setAnos}
                    placeholder="Digite a seu Ano de Experiência"
                    keyboardType="numeric"
                />
                {erroAnos ? <Text style={styles.msgErro}>{erroAnos}</Text> : null}

                <Text style={styles.label}>Tecnologia favorita</Text>
                <TextInput 
                    style={erroTecnologia ? styles.inputErro : styles.input} 
                    value={tecnologia} 
                    onChangeText={setTecnologia} 
                    placeholder="Digite a sua Tecnologia" 
                />
                {erroTecnologia ? <Text style={styles.msgErro}>{erroTecnologia}</Text> : null}

                <Text style={styles.label}>Cor do cartão</Text>
                <View style={styles.areaCores}>
                    <TouchableOpacity 
                        style={[styles.btnCor, cor === 'Azul' && styles.ativo]} 
                        onPress={() => setCor('Azul')}
                    >
                        <Text>Azul</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.btnCor, cor === 'Verde' && styles.ativo]} 
                        onPress={() => setCor('Verde')}
                    >
                        <Text>Verde</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.btnCor, cor === 'Roxo' && styles.ativo]} 
                        onPress={() => setCor('Roxo')}
                    >
                        <Text>Roxo</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnSalvar} onPress={salvar}>
                    <Text style={styles.txtBtn}>Gerar Cartão</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#fff',
    },
    conteudo: {
        padding: 25,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
    },
    sub: {
        color: '#666',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
    },
    inputErro: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        padding: 12,
    },
    msgErro: {
        color: 'red',
        fontSize: 12,
    },
    areaCores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btnCor: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        width: '30%',
        alignItems: 'center',
    },
    ativo: {
        borderColor: '#7b42f5',
        backgroundColor: '#f0eaff',
    },
    btnSalvar: {
        backgroundColor: '#7b42f5',
        padding: 15,
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
    },
    txtBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
