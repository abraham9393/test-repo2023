import { useState } from "react";23566
import { Button, Text, View, ScrollView } from "react-native";
//suma 4 y multiplica x2 el setstatex4x5x4x3x2xx21x1234
App = () => {

  const [num, setNum] = useState(1)
  const [names, setNames] = useState([])
  const [obj, setObj] = useState({ color: "red", circle: "small" ,bg:"#aaa"})

  return (
    <ScrollView style={{ marginTop: 2 ,backgroundColor:obj.bg, flex:1}}>
      <View style={{alignItems:"center"}}> <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
        <Text>Hello</Text> <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
        <Button <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
          title="multiplicalo"
          onPress={() => {
            setNum((state) => { <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
              let res = state + 4
              res = res * 2
              return res
            }) <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
          }} <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
        > <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
 <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
        ></Button>
        </Button>
        <Text>---</Text>
        <Button title="Agrega nombres"
          onPress={() => {
            setNames([...names, "Vero", "Javier", "Leo", "nano"])
          }}
        ></Button>
 <Button
          color={obj.color}
          title="cambia color a purple"
          onPress={() => setObj({ ...obj, color: "purple",bg:"purple" })
          }
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
     bf bf 
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
dfgjgf btb
export default App;
