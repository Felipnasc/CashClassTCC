import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Vibration } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import api from "../../Axios/axios"
import { useAuth } from "../../Context/Context";

export default function Log1({navigation}){
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [erro, setErro] = React.useState("");

  const { login } = useAuth();

  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  const handleProximoPress = () => {
    if (!email || !senha) {
      Vibration.vibrate(250);
    } else {
      api.post('/usuario/verificar', {
        email: email,
        senha: senha
      })
      .then(function (response) {
        if (response.data.errorStatus === false) {
          console.log(response.data.userData)
          const userData = response.data.userData;
          console.log(userData)
          login(userData);
          navigation.navigate('Principal');
        } else {
          Alert.alert('Erro', response.data.mensageStatus);
        }
      })
      .catch(function (error) {
        console.error(error);
        setErro("E-mail ou senha incorretos. Por favor, tente novamente.");
      });
    }
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };
  return (
    <View style={styles.iphone14Pro42}>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-35.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-38.png")}
        />
        <Text style={styles.cash}>Cash</Text>
        <Text style={styles.class}>Class</Text>
      </View>
      <Pressable style={styles.rectangleParent} onPress={() => navigation.navigate('Log2')}>
        <View style={styles.groupInner} />
        <Text style={styles.criarConta} onPress={() => navigation.navigate('Log2')}>Criar conta</Text>
      </Pressable>
      <View style={styles.iphone14Pro42Child} />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />

          <Text style={styles.login1} onPress={handleProximoPress}>Login</Text>

      </View>
      <Image
        style={styles.perfil1Icon}
        contentFit="cover"
        source={require("../../../assets/perfil11.png")}
      />
      <View style={[styles.iphone14Pro42Item, styles.iphone14Layout]} />
      <View style={[styles.iphone14Pro42Inner, styles.iphone14Layout]} />
      
      <TextInput  style={styles.senha}
          placeholder="Digite sua senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity onPress={toggleMostrarSenha} style={styles.eyeIcon}>
          <Text>{mostrarSenha ? '👀' : '👀'}</Text> 
          </TouchableOpacity>

      <TextInput style={[styles.email, styles.senhaTypo]}  onChangeText={(text) => setEmail(text)} placeholder="Digite seu Email"></TextInput> 

      <Text style={styles.jTemConta}>{`Já tem conta? 
Vamos estudar então!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 332,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  eyeIcon: {
    paddingHorizontal: 10,
    left: 270,
    top: 603,
  },
  rectangleLayout: {
    height: 39,
    width: 180,
    position: "absolute",
  },
  iphone14Layout: {
    height: 49,
    width: 227,
    borderRadius: Border.br_4xl,
    left: 86,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  senhaTypo: {
    height: 30,
    left: 65,
    width: 250,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    alignItems: "flex-end",
    fontSize: 16,
    color: Color.colorBlack,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 30,
    position: "absolute",
  },
  groupChild: {
    left: 1,
    height: 71,
    top: 1,
    borderRadius: Border.br_3xl,
  },
  groupItem: {
    top: 66,
    left: 23,
    height: 74,
  },
  cash: {
    top: 20,
    left: 107,
    color: "rgba(0, 0, 0, 0.79)",
    transform: [
      {
        rotate: "-2.52deg",
      },
    ],
    height: 40,
    width: 118,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 60,
    fontSize: FontSize.size_29xl,
    position: "absolute",
  },
  class: {
    top: 85,
    left: 131,
    color: Color.colorWhite,
    transform: [
      {
        rotate: "-2.52deg",
      },
    ],
    height: 40,
    width: 118,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
    lineHeight: 60,
    fontSize: FontSize.size_29xl,
    position: "absolute",
    transform: [{ rotate: '2deg' }]
  },
  vectorParent: {
    top: 93,
    left: 18,
    width: 356,
    height: 141,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    height: 41,
    width: 267,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  criarConta: {
    left: 46,
    fontSize: 32,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 34,
    top: 5,
    position: "absolute",
  },
  rectangleParent: {
    top: 306,
    left: 63,
    height: 41,
    width: 267,
    position: "absolute",
  },
  iphone14Pro42Child: {
    top: 411,
    left: 52,
    borderRadius: 28,
    backgroundColor: "#d9d9d9",
    width: 288,
    height: 347,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#11ae04",
    left: 0,
    top: 0,
    width: 180,
    borderRadius: Border.br_3xl,
  },
  login1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 97,
    left: 42,
    height: 29,
    top: -0,
    fontSize: 20,
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
  },
  login: {
    left: 42,
    top: 5,
    position: "absolute",
  },
  rectangleGroup: {
    top: 696,
    left: 104,
  },
  perfil1Icon: {
    top: 372,
    left: 147,
    width: 94,
    height: 94,
    position: "absolute",
  },
  iphone14Pro42Item: {
    top: 542,
  },
  iphone14Pro42Inner: {
    top: 616,
  },
  senha: {
    top: 625,
    left: 104,
    fontSize: 16,
   
  },
  email: {
    top: 551,
    left: 101,
    fontSize: FontSize.size_xl,
    
  },
  jTemConta: {
    top: 470,
    left: 85,
    color: "#001aff",
    width: 222,
    height: 68,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
    position: "absolute",
  },
  iphone14Pro42: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

