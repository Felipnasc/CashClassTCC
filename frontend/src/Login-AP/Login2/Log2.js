import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, TouchableOpacity, Vibration, Alert } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, Border, FontFamily } from "./GlobalStyles";
import api from "../../Axios/axios"
import { useAuth } from "../../Context/Context";

export default function Log2({navigation}){
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [mostrarSenha, setMostrarSenha] = React.useState(false);
  const [atividade_presente, setAtividadePresente] = React.useState(1);

  const { login } = useAuth();
  
  const handleProximoPress = () => {
    if (!email || !senha) {
      Vibration.vibrate(250); // Isso vibra por 500 milissegundos
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
    } else {
      api.post('./usuario/inserir', {
        email: email,
        senha: senha,
        atividade_presente: 1
      })
      .then(function (response) {
        const data = response.data; // Aqui está o objeto com os dados
        console.log(data);
  
        login({ email, senha, atividade_presente });
        navigation.navigate('Apre1');
      })
      .catch(function (error) {
        console.error(error);
      })
    }
  }
        



  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <View style={styles.Log2}>
      <Text style={styles.vamosComearAgora}>{`Vamos começar agora.
Isso não levará muito tempo.`}</Text>
      <Text style={[styles.preenchaComSeu, styles.proxmo1Typo]}>
        Preencha com seu e-mail e senha
      </Text>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={styles.rectangleWrapper}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
      <TextInput style={[styles.eMail, styles.eMailcontainer]} value={email}
              onChangeText={(text) => setEmail(text)} placeholder="E-mail"> 
        </TextInput>
      </View>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <View>
      <View style={styles.eMailLayout}>
        <TextInput
          style={styles.senha}
          placeholder="Digite sua senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity onPress={toggleMostrarSenha} style={styles.eyeIcon}>
          <Text>{mostrarSenha ? '👀' : '👀'}</Text>
        </TouchableOpacity>
      </View>
    </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />

        <Pressable style={styles.proxmo} onPress={handleProximoPress}>
        <Text style={[styles.proxmo1, styles.proxmo1Typo]}>Próximo</Text>
      </Pressable>
      </View>
      <Pressable
        style={[styles.icons8Esquerda305, styles.eMailLayout]}
        onPress={() => navigation.navigate("Log1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/icons8esquerda30-8.png")}
        />
      </Pressable>
      <Text
        style={[styles.aoClicarEm, styles.aoClicarEmTypo]}
      >{`Ao clicar em “Próximo” você aceita os `}</Text>
      <Text style={[styles.termosDeUso, styles.aoClicarEmTypo]} onPress={() => navigation.navigate("Pol1")}>
        Termos de Uso e Política de Privacidade do Cash Class
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  senha: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  eMailLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eMailcontainer:{
    position: "absolute",
  left: 2,
  top: 13,
  width: 300, // Largura do enquadramento
  
  },
  input: {
    flex: 1,
    height: 30,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
  },
  eyeIcon: {
    paddingHorizontal: 10,
    left: 280,
    top: -5,
  },
  proxmo1Typo: {
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
  },
  groupLayout1: {
    height: 56,
    width: 329,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorSnow,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  eMailLayout: {
    height: 30,
    position: "absolute",
  },
  groupItemLayout: {
    height: 61,
    width: 329,
    position: "absolute",
  },
  groupLayout: {
    height: 39,
    width: 180,
    position: "absolute",
  },
  aoClicarEmTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
    position: "absolute",
  },
  vamosComearAgora: {
    top: 108,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 332,
    height: 65,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
    alignItems: "flex-end",
    color: Color.colorSnow,
    left: 30,
    position: "absolute",
  },
  preenchaComSeu: {
    top: 208,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 328,
    height: 32,
    left: 32,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    color: Color.colorSnow,
    position: "absolute",
  },
  groupChild: {
    height: 56,
    width: 329,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
    height: 56,
    width: 329,
    position: "absolute",
  },
  eMail: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  groupParent: {
    top: 312,
    left: 32,
  },
  groupItem: {
    backgroundColor: Color.colorSnow,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  senha: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    top: 14,
    left: 31,
  },
  rectangleParent: {
    top: 402,
    left: 30,
    height: 61,
  },
  groupInner: {
    backgroundColor: "#11ae04",
    borderRadius: Border.br_3xl,
    width: 180,
    left: 0,
    top: 0,
  },
  proxmo1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#fff",
    alignItems: "center",
    width: 97,
    height: 29,
    top: -5,
  },
  proxmo: {
    left: 42,
    top: 5,
    position: "absolute",
  },
  rectangleGroup: {
    top: 692,
    left: 187,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8Esquerda305: {
    left: 31,
    top: 54,
    width: 30,
  },
  aoClicarEm: {
    top: 531,
    left: 38,
    fontSize: 15,
    width: 317,
    height: 31,
    color: Color.colorSnow,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  termosDeUso: {
    top: 567,
    left: 46,
    fontSize: 16,
    color: "#03dc33",
    width: 288,
  },
  Log2: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});
