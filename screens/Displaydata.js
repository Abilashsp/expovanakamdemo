import { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import _ from "lodash";



const fontstyle=[
    {
        "font-family": [
          {"name":"ImUnderline",
          "value":"underline"},
          {"name":"GoBold",
          "value":"font-bold"},
          {"name":"BiItalic",
          "value":"italic"}
        ]
      }
]

const bg=[
    {
        "backgroundColor": [
          {"name":"Red",
          "value":"bg-red-500"},
          {"name":"Blue",
          "value":"bg-blue-500"},
          {"name":"yellow",
          "value":"bg-amber-400"}
        ]
      }
]
const fontsizes=[
    {
        "fontSize": [
          {"name":"1x",
          "value":"text-base"},
          {"name":"2x",
          "value":"text-xl"},
          {"name":"3x",
          "value":"text-3xl"},
          {"name":"5x",
          "value":"text-6xl"}
        ]
      }
]
const screenbackground=[
    {
        "ScreenbackgroundColor": [
          {"name":"Red",
          "value":"bg-red-500"},
          {"name":"Blue",
          "value":"bg-blue-500"},
          {"name":"yellow",
          "value":"bg-amber-400"}
        ]
      }
]
const fontColors=[
    {
        "fcolor": [
          {"name":"Red",
          "value":"text-red-500"},
          {"name":"Blue",
          "value":"text-blue-500"},
          {"name":"yellow",
          "value":"text-amber-400"}
        ]
      }
]

 
export default function Displaydata({ route }) {
    
    const [checkid, setcheckid] = useState(null);
    const[font,setfont]=useState([])
    const[bgcolor,setbgcolor]=useState(null)
    const [fontsize,setfontsize]=useState(null);
    const[screen,setscreen]=useState(null)
    const[fontColor,setfontColor]=useState(null)
    
    const Getid = (id) => {
        setcheckid(id)
        
    }
    const getfontname = (fonts) => {
        if (font.includes(fonts)) {
          setfont((prev) => prev.filter((name) => name !== fonts));
        } else {
          setfont((prev) => [...prev, fonts]);
        }
      };
      
      const getscreen = (color) => {
        setscreen(color)
      };
      const getcss=(cssvalue)=>{
        setbgcolor(cssvalue)
        setfontColor(cssvalue)
        setfontsize(cssvalue)
      }



    const { paramKey, id } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className={`w-screen h-screen flex items-center justify-center ${screen}`}>
{/* <Text>{font}</Text> */}
                <Text className={`text-6xl transform -rotate-90 ${font.join(' ')} ${bgcolor} ${fontsize} ${fontColor}`}  onPress={() => Getid(id)}>{paramKey}</Text>
                {fontstyle[0]["font-family"].map((t, index) => (
       <View className=" transform -rotate-90 left-1/3 "><Button  title={t.name} onPress={()=>getfontname(t.value)}/></View> 
        ))}
        {bg[0]["backgroundColor"].map((t, index) => (
       <View className=" transform -rotate-90 left-1/3 "><Button title={t.name} onPress={()=>getcss(t.value)}/></View> 
        ))}
          {fontsizes[0]["fontSize"].map((t, index) => (
       <View className=" transform -rotate-90 left-1/3"><Button title={t.name} onPress={()=>getcss(t.value)}/></View> 
        ))}
         {screenbackground[0]["ScreenbackgroundColor"].map((t, index) => (
       <View className=" transform -rotate-90 left-1/3"><Button title={t.name} onPress={()=>getscreen(t.value)}/></View> 
        ))}
         {fontColors[0]["fcolor"].map((t, index) => (
       <View className=" transform -rotate-90 left-1/3"><Button title={t.name} onPress={()=>getcss(t.value)}/></View> 
        ))}
            </View>
    
        </SafeAreaView>
    );

};