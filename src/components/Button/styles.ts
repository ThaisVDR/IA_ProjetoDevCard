import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const stylePrimary = StyleSheet.create({
  button: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.md,
  },
  buttonTexto: {
    color: THEME.colors.primary_froground,
    fontWeight: "600",
    fontSize: 18,
  },
  textSegundario: {
    color: THEME.colors.primary_froground,
    fontWeight: "500",
    fontSize: 18,
  },
});

export const styleSecondary = StyleSheet.create({
  button: {
    ...stylePrimary.button,
    backgroundColor: "transparent",
  },
  buttonTexto: {
    ...stylePrimary.buttonTexto,
    color: THEME.colors.primary,
  },
});

export const styleOutline = StyleSheet.create({
  button: {
    ...stylePrimary.button,
    backgroundColor: "transparent",
    borderColor: THEME.colors.primary,
    borderWidth: 2,
  },
  buttonTexto: {
    ...stylePrimary.buttonTexto,
    color: THEME.colors.primary,
  },
});

export const style = {
  primary: stylePrimary,
  secondary: styleSecondary,
  outline: styleOutline,
} as const;