import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "./GlobalStyles";
import { useAuth } from "../../Context/Context";

export default function Principal({ navigation }) {

  const { user } = useAuth();

  const desbloqueioAtivi2 = () => {
    console.log("User:", user);

    if (user.atividade_presente >= 2) {
      navigation.navigate("Per1");
    } else {
      console.log("Atividade presente não é 2.");
    }
  }

  const desbloqueioAtivi3 = () => {
    console.log("User:", user);

    if (user.atividade_presente >= 3) {
      navigation.navigate("Stop");
    } else {
      console.log("Atividade presente não é 3.");
    }
  }

  React.useEffect(() => {
    console.log("User atualizado:", user);
  }, [user]);

  console.log("atividade_presente:", user.atividade_presente);

  return (

  // SEGUNDO BOTÃO DE ATIVIDADE
    <View style={styles.iphone14Pro33}>
  <Pressable
    style={[styles.iphone14Pro33Inner, styles.rectangleLayout]}
    onPress={desbloqueioAtivi2}
  >
    <View style={[styles.rectangleParent, styles.parentPosition]}>
      <View style={user.atividade_presente >= 3 ? [styles.groupChild22, styles.groupChildBorder] : [styles.groupChild, styles.groupChildBorder]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={desbloqueioAtivi2}
      >
      {user.atividade_presente < 2 ? 
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-100.png")}
        /> : 
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../../../assets/rectangle-1001.png")}
        />
      }
      </Pressable>
      <Pressable style={styles.bloqueadoPosition} onPress={desbloqueioAtivi2}>
        <Text style={[styles.bloqueado1, styles.bloqueadoTypo]}>
          {user.atividade_presente < 2 ? 'Bloqueado' : 'Liberado'}
        </Text>
      </Pressable>
      <Text style={styles.oQue} onPress={desbloqueioAtivi2}>O QUE É IMPOSTO?</Text>
    </View>
  </Pressable>

  
  <Pressable
    style={[styles.iphone14Pro33Child, styles.rectangleLayout]}
    onPress={desbloqueioAtivi3}
  >
    <View style={[styles.rectangleParent, styles.parentPosition]}>
      <View style={[styles.groupChild, styles.groupChildBorder]} />
      {user.atividade_presente < 3 ? 
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-100.png")}
      /> :
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-1001.png")}
      />}
      <Text style={[styles.bloqueado2, styles.bloqueadoTypo]} onPress={desbloqueioAtivi3}>
        {user.atividade_presente < 3 ? 'Bloqueado' : 'Liberado'}
      </Text>
      <Text style={[styles.ticaEDinheiro, styles.oQue1Typo]} onPress={desbloqueioAtivi3}>
        ÉTICA E DINHEIRO
      </Text>
      <View style={styles.icons8Dinheiro1002} />
    </View>
  </Pressable>


  <Text style={styles.situao1O}>Situação 1- O que é dinheiro?</Text>

  
  <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
    <Pressable
      style={ user.atividade_presente < 2 ? [styles.rectanglePressable, styles.groupChildBorder] : [styles.rectanglePressable2, styles.groupChildBorder]}
      onPress={() => navigation.navigate("Pergu1")}
    />
    <Text style={[styles.oQue1, styles.oQue1Typo]}>O QUE É INFLAÇÃO?</Text>
  </View>


  <View style={[styles.iphone14Pro33Item, styles.groupChildBorder]} />


  <View style={[styles.groupView, styles.groupViewLayout]}>
    <View style={[styles.vectorParent, styles.groupViewLayout]}>
      <Image
        style={[styles.groupChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-35.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-38.png")}
      />
      <Text style={styles.cash}>Cash</Text>
      <Text style={[styles.class, styles.cashTypo]}>Class</Text>
    </View>
  </View>


  <Pressable
    style={[styles.definicoes1, styles.licao1Layout]}
    onPress={() => navigation.navigate("Pessoal1")}
  >
    <Image
      style={styles.iconLayout}
      contentFit="cover"
      source={require("../../../assets/definicoes-1.png")}
    />
  </Pressable>


  <Pressable
    style={[styles.comparacao11, styles.licao1Layout]}
    onPress={() => navigation.navigate("Comp1")}
  >
    <Image
      style={styles.iconLayout}
      contentFit="cover"
      source={require("../../../assets/comparacao-1-1.png")}
    />
  </Pressable>


  <Pressable style={[styles.licao1, styles.licao1Layout]} onPress={() => navigation.navigate("Sit1")}>
    <Image
      style={styles.iconLayout}
      contentFit="cover"
      source={require("../../../assets/licao-1.png")}
    />
  </Pressable>


  <Image
    style={styles.bolsaDeDinheiro1Icon}
    contentFit="cover"
    source={require("../../../assets/bolsadedinheiro-1.png")}
  />


  <Image
    style={[styles.iphone14Pro33Child1, styles.wrapperLayout]}
    contentFit="cover"
    source={require("../../../assets/rectangle-1001.png")}
  />


  <Text style={[styles.realizarAtividade, styles.bloqueadoTypo]} onPress={() => navigation.navigate("Pergu1")}>
    Liberado
  </Text>
</View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 103,
    width: 336,
    position: "absolute",
  },
  parentPosition: {
    left: 0,
    top: 0,
  },
  groupChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 35,
    width: 169,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  bloqueadoTypo: {
    height: 19,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
  },
  oQue1Typo: {
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  groupViewLayout: {
    height: 108,
    width: 210,
    position: "absolute",
  },
  groupChildLayout: {
    width: 184,
    position: "absolute",
  },
  cashTypo: {
    transform: [
      {
        rotate: "2.6deg",
      },
    ],
    height: 22,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 34,
    position: "absolute",
  },
  licao1Layout: {
    height: 48,
    width: 48,
    top: 147,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSnow,
    borderColor: Color.colorGray,
    borderRadius: Border.br_3xl,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 103,
    width: 336,
  },
  groupChild22: {
    backgroundColor: Color.colorGold,
    borderColor: Color.colorGray,
    borderRadius: Border.br_3xl,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 103,
    width: 336,
  },
  icon: {
    borderRadius: Border.br_mini,
  },
  wrapper: {
    top: 52,
    left: 84,
    height: 35,
    width: 169,
  },
  bloqueado1: {
    width: 90,
    height: 59,
    top: -4,
    fontSize: FontSize.size_base,
  },
  bloqueadoPosition: {
    top: 62,
    left: 123,
    position: "absolute",
  },
  oQue: {
    left: 68,
    width: 201,
    height: 31,
    fontSize: FontSize.size_xl,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  rectangleParent: {
    height: 103,
    width: 336,
    position: "absolute",
  },
  iphone14Pro33Inner: {
    top: 559,
    left: 28,
    width: 336,
  },
  rectangleIcon: {
    borderRadius: Border.br_mini,
    top: 52,
    left: 84,
    height: 35,
    width: 169,
  },
  bloqueado2: {
    fontSize: FontSize.size_base,
    top: 58,
    left: 126,
    position: "absolute",
  },
  ticaEDinheiro: {
    top: 11,
    left: 74,
    width: 188,
    height: 31,
  },
  icons8Dinheiro1002: {
    left: 10,
    width: 50,
    height: 50,
    top: 42,
    position: "absolute",
  },
  iphone14Pro33Child: {
    top: 690,
    left: 28,
    width: 336,
  },
  situao1O: {
    top: 239,
    left: -1,
    fontSize: 32,
    color: Color.colorGold,
    width: 396,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    position: "absolute",
  },
  rectanglePressable: {
    backgroundColor: Color.colorSnow,
    borderColor: Color.colorGray,
    borderRadius: Border.br_3xl,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 103,
    width: 336,
  },
  rectanglePressable2: {
    backgroundColor: Color.colorGold,
    borderColor: Color.colorGray,
    borderRadius: Border.br_3xl,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    height: 103,
    width: 336,
  },
  oQue1: {
    left: 60,
    width: 216,
    top: 10,
  },
  rectangleContainer: {
    top: 428,
    left: 28,
    width: 336,
  },
  iphone14Pro33Item: {
    top: -18,
    borderRadius: 20,
    backgroundColor: "#3b3e3c",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#494949",
    width: 393,
    height: 226,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupChild1: {
    top: 1,
    left: 1,
    height: 39,
    width: 40,
  },
  groupChild2: {
    top: 37,
    left: 13,
    height: 40,
  },
  cash: {
    left: 70,
    width: 65,
    top: 11,
    color: Color.colorGray,
    transform: [
      {
        rotate: "-2.52deg",
      },
    ],
    height: 22,
    lineHeight: 30,
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_5xl,
  },
  class: {
    left: 28,
    color: "#fff",
    width: 151,
    top: 43,
  },
  vectorParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 56,
    left: 97,
  },
  definicoes1: {
    left: 316,
  },
  comparacao11: {
    left: 172,
  },
  licao1: {
    left: 40,
  },
  bolsaDeDinheiro1Icon: {
    top: 336,
    left: 170,
    width: 64,
    height: 64,
    position: "absolute",
  },
  iphone14Pro33Child1: {
    top: 482,
    left: 112,
    borderRadius: Border.br_mini,
  },
  realizarAtividade: {
    top: 490,
    left: 126,
    width: 141,
    height: 19,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iphone14Pro33: {
    backgroundColor: "#4f4f4f",
    flex: 1,
    height: 853,
    overflow: "hidden",
    width: "100%",
  },
});
