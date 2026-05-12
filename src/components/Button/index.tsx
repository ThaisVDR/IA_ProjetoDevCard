import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import {style} from '../Button/styles';

type Props = {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline';
    onPress?: () => void;
}


export function Button({ label, variant = 'primary', onPress }: Props) {
    return (
        <TouchableOpacity style={style[variant].button} onPress={onPress}>
            <Text style={style[variant].buttonTexto}>{label}</Text>
        </TouchableOpacity>
    );
}
