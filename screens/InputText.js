import { Text, View,TextInput ,Button} from 'react-native';
import React, { useState } from 'react'
import Displaydata from "./Displaydata"

export default function InputText({ navigation }) {
    const[text,settext]=useState("");
    const[addvalue,setaddvalue]=useState(null);
    const[id,setid]=useState(0)
    
    const add=()=>{
        setaddvalue(text)
        settext("")
        setid(id+1)
    }
    

const handlechange=(textvalue)=>{
    settext(textvalue)
}


  return (
    <View className='mx-7 max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-56'>
        <Text className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center bottom-1/2 bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-4 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Vanakkam</Text>
        <View className="">
          <Text className="mb-4">Enter the Text Here</Text>
        <TextInput
      className='w-full h-32 border rounded-lg mb-11 p-2 text-xl'
      value={text}
      placeholder="Enter text..."
      onChangeText={handlechange}
    />
        </View>
    
   <View className="mx-auto w-40">
   <Button
      title="Add"
      onPress={() => {
        add(); 
        navigation.navigate('Displaydata',{paramKey:text,id:id});
      }}
    />
   </View>
  </View>
  )
}
