import React from 'react'
import {View,Text,Image} from 'react-native'

const App=()=>{
  return(
    <View>
      <Image 
        style={{width:'100%',height:150}}
        source={require('./images/woof.jpg')} 
      />
      <Image 
        style={{width:'100%',height:350}}
        source={{uri: 'https://f.ptcdn.info/098/064/000/prusp779x9D0XTEQ58u5-o.jpg'}}
      />
    </View>
  )
}
export default App