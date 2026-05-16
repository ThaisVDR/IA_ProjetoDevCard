import { THEME } from "../../styles/contants";
import { StyleSheet } from "react-native";

const stylePrimary = StyleSheet.create({
  buttonContainer: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.md,
  },

  buttonText: {
    color: THEME.colors.primary_foreground,
    fontWeight: "500",
    fontSize: 18,
  },
});

const styleSecondary = StyleSheet.create({
  buttonContainer: {
    ...stylePrimary.buttonContainer,
    backgroundColor: "transparent",
  },

  buttonText: {
    ...stylePrimary.buttonText,
    color: THEME.colors.primary,
  },
});

const styleOutline = StyleSheet.create({
  buttonContainer: {
    ...stylePrimary.buttonContainer,
    backgroundColor: "transparent",
    borderColor: THEME.colors.primary,
    borderWidth: 2,
  },

  buttonText: {
    ...stylePrimary.buttonText,
    color: THEME.colors.primary,
  },
});

export const styles = {
  primary: stylePrimary,
  secondary: styleSecondary,
  outline: styleOutline,
} as const;
