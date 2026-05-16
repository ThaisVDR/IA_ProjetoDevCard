import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { THEME } from "../styles/contants";
import { DevCard } from "../components/DevCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams() as unknown as Form;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Seu Cartão</Text>
        </View>

        {!!params && <DevCard data={params} />}

        <View style={styles.footerContainer}>
          <Button
            variant="outline"
            label="Editar"
            onPress={() => router.push("/cadastro")}
          />
          <Button label="Finalizar" onPress={() => router.push("/sucesso")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 12,
  },

  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
  },

  title: {
    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h3,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
