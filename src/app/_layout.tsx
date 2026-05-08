import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'devCard' }} />
            <Stack.Screen name="/cadastro" options={{ title: 'Cadastro' }} />
            <Stack.Screen name="/preview" options={{ title: 'Cartão' }} />
            <Stack.Screen name="/sucessor" options={{ title: 'Sucesso' }} />

        </Stack>
    );
}