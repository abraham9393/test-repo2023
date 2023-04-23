import { useState } from "react";
import { Button, Text, View, ScrollView } from "react-native";
//suma 4 y multiplica x2 el setstate
App = () => {

  const [num, setNum] = useState(1)
  const [names, setNames] = useState([])
  const [obj, setObj] = useState({ color: "red", circle: "small" ,bg:"#aaa"})

  return (
    <ScrollView style={{ marginTop: 2 ,backgroundColor:obj.bg, flex:1}}>
      <View style={{alignItems:"center"}}>
        <Text>Hello</Text>
        <Text style={{ fontSize: 37 }}>{num}</Text>
        <Button
          title="multiplicalo"
          onPress={() => {
            setNum((state) => {
              let res = state + 4
              res = res * 2
              return res
            })
          }}
        >

        </Button>
        <Text>---</Text>
        <Button title="Agrega nombres"
          onPress={() => {
            setNames([...names, "Vero", "Javier", "Leo", "nano"])
          }}
        ></Button>

        {
          names.map((item, key) => <View key={key}>
            <Text style={{ color: "blue", backgroundColor: "orange" }}>{item}</Text>
          </View>)
        }
        <Text>---</Text>
        <Button
          color={obj.color}
          title="cambia color a verde"
          onPress={() => setObj({ ...obj, color: "green",bg:"yellowgreen" })
          }
        ></Button>
        <Text>{obj.color}</Text>
     
      <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
       
        </View>
    </ScrollView>
  )
}

export default App;
