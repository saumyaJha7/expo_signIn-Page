import {
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import SocialButtons from "@/components/SocialsButtons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>

      <View
        style={{
          alignItems: "center",
          marginBottom: 20,
          marginTop: 40,
          gap: 10,
          
        }}
      >
        <Image
          source={require("@/assets/images/logo.webp")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>SignIn</Text>
        <Text style={{ fontSize: 16, color: "#666" }}>Let's experience the joy of telecare AI</Text>
      </View>

      <View
        style={{
          gap: 15,
          marginBottom: 20,
          marginHorizontal: 20,
          marginTop: 15,
        }}
      >
        <View
          style={{
            gap: 7,
            marginTop: 10,
          }}
        >
          <Text>Email Address</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 24,
              paddingHorizontal: 16,
              borderWidth: 2,
              borderColor: "#B7DE71",
            }}
          >
            <Feather name="mail" size={22} color="#4A4A4A" />

            <TextInput
              placeholder="Enter your email"
              style={{
                flex: 1,
                paddingVertical: 16,
                paddingHorizontal: 12,
                fontSize: 18,
              }}
            />
          </View>
        </View>
        <View
          style={{
            gap: 7,
            marginTop: 10,
          }}
        >
          <Text>Password</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 24,
              paddingHorizontal: 16,
              borderWidth: 2,
              borderColor: "#B7DE71",
            }}
          >
            <Feather name="lock" size={22} color="#4A4A4A" />

            <TextInput
              placeholder="Enter your password"
              style={{
                flex: 1,
                paddingVertical: 16,
                paddingHorizontal: 12,
                fontSize: 18,
              }}
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? "eye-off" : "eye"} size={22} color="#4A4A4A" />
            </TouchableOpacity>
          </View>
        </View>
        <Pressable
          style={({ pressed }) => ({
            backgroundColor: "#85CB18",
            paddingVertical: 18,
            borderRadius: 24,
            alignItems: "center",
            opacity: pressed ? 0.8 : 1,
            marginTop: 10,
          })}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Sign In →
          </Text>
        </Pressable>
      </View>

      
      <SocialButtons />

      <View
        style={{
          flex : 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          marginTop: 30,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#85CB18", fontWeight: "500" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        
      </View>

      <View
        style={{
          flex : 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}>
        <Pressable>
          <Text style={{ color: "#85CB18" , textDecorationLine: "underline" }}>Forgot your password?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 15,

    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    fontSize: 18,
  },
});
