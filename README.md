# Diccionario-LSC-APP

- Tiene que tener instalado Node, npm e instala expocli:
  npm install -g expo-cli o npm install expo@latest -g

  si se demora mucho verifica el cache antes de instalar expo: npm cache verify

- Crear proyecto:
  expo init DiccionarioLSC (Version antigua)
  npx create-expo-app DiccionarioLSC (Nueva version)

- Instalar react navegation:
  npm install @react-navigation/native-stack react-native-screens react-native-safe-area-context
  o
  npm install @react-navigation/native react-native-screens react-native-safe-area-context

- Instalar axios o fetch para realizar solicitudes HTTP:
  npm install axios
  npm install fetch

- Instalar los temas de las letras:
  npm install expo-font

- Instalar para videos
  npx expo install expo-av

- Instalar BD farebase:
  npx expo install firebase

- Instalar eas (exportar apk)
  npm install -g eas-cli

- Exportar APK:
  eas login (iniciar sesion expo)
  eas build -p android --profile preview (exportar)

- Iniciar el proyecto: npx expo start
