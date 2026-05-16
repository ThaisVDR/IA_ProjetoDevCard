import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { THEME } from "../styles/contants";
import { Input } from "../components/Input";
import { ButtonGroupColors } from "../components/ButtonGroupColor";
import { useState } from "react";
import { useRouter } from "expo-router";

const CARD_COLORS = [
  {
    id: "c1",
    name: "Azul",
    colorCode: "#3b72c0",
  },
  {
    id: "c2",
    name: "Verde",
    colorCode: "#31a745",
  },
  {
    id: "c3",
    name: "Roxo",
    colorCode: "#6e32af",
  },
  {
    id: "c4",
    name: "Rosa",
    colorCode: "#da2e8c",
  },
];

export type Form = {
  fullName: string;
  role: string;
  company?: string;
  experience: number;
  technology: string;
  cardColor: string;
};

type Error = {
  fullName?: string;
  role?: string;
  company?: string;
  experience?: string;
  technology?: string;
  cardColor?: string;
};

export default function Cadastro() {
  const router = useRouter();

  const [form, setForm] = useState<{ data: Form; errors: Error }>({
    data: {
      fullName: "",
      role: "",
      company: "",
      experience: 0,
      technology: "",
      cardColor: "",
    },
    errors: {},
  });

  function handleSubmit() {
    router.push({
      pathname: "/preview",
      params: form.data,
    });
  }

  function handleInputChange(fieldName: keyof Form, value: string | number) {
    if (!value) return;
    setForm((currentForm) => {
      return {
        ...currentForm,
        data: {
          ...currentForm.data,
          [fieldName]: value,
        },
      };
    });

    handleInputValidation(fieldName);
  }

  function handleSetOrRemoveInputError(
    name: keyof Form,
    error: string | undefined,
  ) {
    setForm((currentForm) => {
      return {
        ...currentForm,
        errors: {
          ...currentForm.errors,
          [name]: error,
        },
      };
    });
  }

  function handleInputValidation(field: keyof Form) {
    const { fullName, role, technology, experience, cardColor } = form.data;

    switch (field) {
      case "fullName":
        if (!fullName || fullName.length < 3) {
          handleSetOrRemoveInputError("fullName", "Informe o nome completo");
        } else {
          handleSetOrRemoveInputError("fullName", undefined);
        }
        break;

      case "role":
        if (!role) {
          handleSetOrRemoveInputError("role", "Informe o seu cargo");
        } else {
          handleSetOrRemoveInputError("role", undefined);
        }
        break;

      case "technology":
        if (!technology) {
          handleSetOrRemoveInputError(
            "technology",
            "Informe a sua tecnologia favorita",
          );
        } else {
          handleSetOrRemoveInputError("technology", undefined);
        }
        break;

      case "experience":
        if (!experience || experience < 1) {
          handleSetOrRemoveInputError(
            "experience",
            "Você deve ter pelo menos 1 ano de experiência",
          );
        } else {
          handleSetOrRemoveInputError("experience", undefined);
        }
        break;

      case "cardColor":
        // if(!cardColor) {
        //     handleSetOrRemoveInputError("cardColor", "Selecione uma cor")
        // }  else {
        //     handleSetOrRemoveInputError("cardColor", undefined)
        // };
        break;
    }
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Cadastro</Text>

            <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
          </View>

          <View style={{ height: 700 }}>
            <View style={{ gap: 12, marginBottom: 12 }}>
              <Input
                onChangeText={(text) => {
                  handleInputChange("fullName", text);
                }}
                label="Nome Completo"
                placeholder="Thaís Vitória Dias Rosa"
                defaultValue={form.data.fullName}
                onChange={() => {
                  handleInputValidation("fullName");
                }}
                onBlur={() => {
                  handleInputValidation("fullName");
                }}
                errorMessage={form.errors["fullName"]}
              />
              <Input
                onChangeText={(text) => {
                  handleInputChange("role", text);
                }}
                label="Cargo"
                placeholder="Engenheiro de Software"
                defaultValue={form.data.role}
                onChange={() => {
                  handleInputValidation("role");
                }}
                onBlur={() => {
                  handleInputValidation("role");
                }}
                errorMessage={form.errors["role"]}
              />
              <Input
                onChangeText={(text) => {
                  handleInputChange("company", text);
                }}
                label="Empresa (Opcional)"
                placeholder="Tech Company"
                defaultValue={form.data.company}
                onChange={() => {
                  handleInputValidation("company");
                }}
                onBlur={() => {
                  handleInputValidation("company");
                }}
                errorMessage={form.errors["company"]}
              />
              <Input
                onChangeText={(text) => {
                  handleInputChange("experience", parseInt(text));
                }}
                label="Anos de experiência"
                placeholder="20"
                defaultValue={form.data.experience.toString()}
                onChange={() => {
                  handleInputValidation("experience");
                }}
                onBlur={() => {
                  handleInputValidation("experience");
                }}
                errorMessage={form.errors["experience"]}
              />
              <Input
                onChangeText={(text) => {
                  handleInputChange("technology", text);
                }}
                label="Tecnologia favorita"
                placeholder="React Native"
                defaultValue={form.data.technology}
                onChange={() => {
                  handleInputValidation("technology");
                }}
                onBlur={() => {
                  handleInputValidation("technology");
                }}
                errorMessage={form.errors["technology"]}
              />
            </View>

            <ButtonGroupColors
              onSelect={(colorCode) => {
                handleInputChange("cardColor", colorCode);
              }}
              group={CARD_COLORS}
            />
          </View>

          <View style={styles.footerContainer}>
            <Button
              label="Cadastrar Cartão"
              onPress={handleSubmit}
              disabled={
                Object.entries(form.errors).filter(([key, value]) => !!value)
                  .length > 0
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
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
    gap: 4,
  },

  title: {
    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h3,
    textAlign: "center",
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
