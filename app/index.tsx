import { Text, View } from "react-native";
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function Index() {

  const [ loadedFount] = useFonts({
    Inter_900Black
  });

  console.log("loaded fount : " , loadedFount);

//check fount if page in show / mounted
  useEffect(() =>{
    if(loadedFount){
      //fount asel tr not show page 
      SplashScreen.hideAsync();
    }

  } ,[loadedFount])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
      style={{
        fontFamily: 'Inter_900Black'
      }}
      >Jaydip Dhananajay Jadhav</Text>
    </View>
  );
}
