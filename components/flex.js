import React from 'react'
import {View,Text} from 'react-native'

const App=()=>{
  return(
    <View style={{flex:1,margin:20}}>
      <View style={{flex:1,backgroundColor:'#9400d3'}}>
        <Text style={{color:'red'}}>Hello World</Text>
      </View>
      <View style={{flex:2,backgroundColor:'#228b22'}}></View>
      <View style={{flex:3,backgroundColor:'#ffd700'}}></View>
    </View>
  )
}
export default App