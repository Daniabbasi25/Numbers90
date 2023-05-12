import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextInput as InputText,
  TextInputProps,
  GestureResponderEvent,
  Image,
  TouchableOpacity
} from "react-native";
import React, { FC } from 'react'
import styles from './styles'
import { AppliedTheme } from "@constants";

 interface Props extends TextInputProps {
   name: string;
   label: string;
   placeholder: string;
   rightIcon?: boolean;
   icon?: any;
   onPress?: (event: GestureResponderEvent) => void;
 }
const theme=AppliedTheme()
const TextInput: FC<Props> = (Props) => {
  const { label, name, placeholder, rightIcon, icon, onPress, ...otherProps } =
    Props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} </Text>
      <View style={styles.textField}>
        <InputText
          style={[styles.inputStyle, { width: rightIcon ? "90%" : "100%" }]}
          placeholder={placeholder}
          placeholderTextColor={theme.placeHolder.primary}
          {...otherProps}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onPress}>
            <Image source={icon} style={styles.iconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInput

 