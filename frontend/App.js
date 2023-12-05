import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  {AuthProvider} from "./src/Context/Context"

//Home-Page//
import Principal from "./src/HomePG/Screens/Principal";
import Principal2 from "./src/HomePG/Screens2/Principal2";
import Sit1 from "./src/HomePG/Situações/Sit1";

//Login-Apresentações//
import Log1 from "./src/Login-AP/Login1/Log1";
import Log2 from "./src/Login-AP/Login2/Log2";
import Apre1 from "./src/Login-AP/Apresentações1/Apre1";
import Apre2 from "./src/Login-AP/Apresentações2/Apre2";

//Perguntas-1//
import Pergu3 from "./src/Perguntas1/Tela3/Pergu3";
import Pergu2 from "./src/Perguntas1/Tela2/Pergu2";
import Pergu1 from "./src/Perguntas1/Tela1/Pergu1";
import Pergu5 from "./src/Perguntas1/Tela5/Pergu5";
import Pergu6 from "./src/Perguntas1/Tela6/Pergu6";
import Pergu7 from "./src/Perguntas1/Tela7/Pergu7";
import Pergu8 from "./src/Perguntas1/Tela8/Pergu8";
import Pergu9 from "./src/Perguntas1/Tela9/Pergu9";

//Politica e Privacidade//
import Pol1 from "./src/Politica-1/Polit/Pol1";
import Pessoal1 from "./src/Politica-1/Config/Pessoal1";

//Perguntas-2//
import Per1 from "./src/Perguntas2/Tela-1/Per1";
import Per2 from "./src/Perguntas2/Tela-2/Per2";
import Per3 from "./src/Perguntas2/Tela-3/Per3";
import Per4 from "./src/Perguntas2/Tela-4/Per4";
import Per5 from "./src/Perguntas2/Tela-5/Per5";
import Per6 from "./src/Perguntas2/Tela-6/Per6";

//Acertos e erros//
import Pergu10 from "./src/Extras/Tela-Acerto/Pergu10";
import Pergu101 from "./src/Extras/Tela-Errado/Pergu101";

//Comparações//
import Comp1 from "./src/Comparações-1/Comparações/Comp1";
import Comp2 from "./src/Comparações-1/Comparações2/Comp2";
import Comp3 from "./src/Comparações-1/Comparações3/Comp3";
import Comp4 from "./src/Comparações-1/Comporações4/Comp4";

//Extras//
import Stop from "./src/Extras/Pare/Stop";


const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
      "Inter-SemiBold": require("./assets/fonts/Inter/static/Inter-Bold.ttf"),
        "Inter-Light": require("./assets/fonts/Inter/static/Inter-Light.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter/static/Inter-Bold.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter/static/Inter-Regular.ttf"),
        "Lalezar-Regular": require("./assets/fonts/Lalezar/Lalezar-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Log1"
              component={Log1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Log2"
              component={Log2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pol1"
              component={Pol1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pergu3"
              component={Pergu3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Principal"
              component={Principal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pergu1"
              component={Pergu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pergu2"
              component={Pergu2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pergu5"
                component={Pergu5}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Pergu6"
                component={Pergu6}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Pergu7"
                component={Pergu7}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pergu8"
                component={Pergu8}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pergu9"
                component={Pergu9}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pergu10"
                component={Pergu10}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pergu101"
                component={Pergu101}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Comp1"
                component={Comp1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Comp2"
                component={Comp2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Comp3"
                component={Comp3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Comp4"
                component={Comp4}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Pessoal1"
                component={Pessoal1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Principal2"
                component={Principal2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Apre1"
                component={Apre1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Apre2"
                component={Apre2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Per1"
                component={Per1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Per2"
                component={Per2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Per3"
                component={Per3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Per4"
                component={Per4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Per5"
                component={Per5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Per6"
                component={Per6}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Stop"
                component={Stop}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Sit1"
                component={Sit1}
                options={{ headerShown: false }}
              />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </AuthProvider>
  );
};


export default App;
