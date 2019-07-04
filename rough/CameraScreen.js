import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import{Permissions} from "expo"
// import {FontAwesome} from "@expo/vector-icons"
import { Camera } from 'expo-camera'

export default class CameraScreen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      hasCameraPerm: null,
      type: Camera.Constants.Type.back,
      isFlashLightOn: Camera.Constants.FlashMode.off
    }
  }

  static navigationOption = {
    title: "Camera"

  }

// Permissionsss:

    async componentDidMount(){
      const {status} = await Permissions.askAsync(Permissions.CAMERA)
    
    this.setState({
      hasCameraPermission: status=== "granted"
    })
    }

    // flip camera

    flipCamera = () => {

      this.setState({
        type:
        this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back

      })
    }

    // Flash toggle aage picche (HInglishh)

    ToggleFlash = () => {
       
      this.setState({
        isFlashLightOn: 
        this.state.isFlashLightOn === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off

      })
    }


    // Take pictue and sending to home screeen

  takePicture = async()=>{
      if (this.camera) {
        let photo = await this.camera.takePictureAsync()
        this.props.navigation.navigate("Home", {photo:photo})
      }




  }



  render(){   

  return (
    <View style={styles.container}>
        
      <Text>Camera screen</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder :{ 
      alignSelf: "center"
  },
  button: {
      margin :20
  },


});