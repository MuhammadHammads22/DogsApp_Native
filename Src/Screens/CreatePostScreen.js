import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, StatusBar, Modal, ActivityIndicator, TouchableOpacity, Button, StyleSheet, Image, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { useCreatePostMutation } from '../Api/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { setAccountNumber, setAccountTitle, setAddress, setAmountNeeded, setDescription, setPhoneNumber, setSeeker, setSeekerName, setTypeOfDonation } from '../Slices/CreatePostSlice'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video'


export default function CreatePostScreen() {

  const [isErrorServer, setIsErrorServer] = useState(false)
  const [errorServer, setErrorServer] = useState("")

  const seekerNameRef = useRef(null)
  const seekerPhoneNumberRef = useRef(null)
  const seekerAddressRef = useRef(null)
  const seekerAmountNeededRef = useRef(null)
  const seekerDonationTypeRef = useRef(null)
  const seekerDescriptionRef = useRef(null)
  const seekerVideoRef = useRef(null)
  const seekerResidenceVideoRef = useRef(null)
  const seekerBankNameRef = useRef(null)
  const seekerBankTitleRef = useRef(null)
  const seekerAccountNumberRef = useRef(null)




  const focusNextField = (nextFieldRef) => {
    if (nextFieldRef.current) {
      nextFieldRef.current.focus();
    }
  };

  const handleSeekerNameSubmit = () => {
    seekerPhoneNumberRef.current.focus()
  }
  const handleSeekerPhoneNumberSubmit = () => {
    seekerAddressRef.current.focus()
  }
  const handleSeekerAddressSubmit = () => {
    seekerAmountNeededRef.current.focus()
  }
  const handleSeekerAmountNeededSubmit = () => {
    seekerDonationTypeRef.current.focus()
  }
  const handleSeekerDonationTypeSubmit = () => {
    seekerDescriptionRef.current.focus()
  }
  const handleSeekerDescriptionSubmit = () => {
    seekerVideoRef.current.focus()
  }
  const handleSeekerVideoSubmit = () => {
    seekerResidenceVideoRef.current.focus()
  }
  const handleSeekerResidenceVideoSubmit = () => {
    seekerBankNameRef.current.focus()
  }
  const handleSeekerBankNameSubmit = () => {
    seekerBankTitleRef.current.focus()
  }
  const handleSeekerBankTitleSubmit = () => {
    seekerAccountNumberRef.current.focus()
  }
  const handleSeekerAccountNumberSubmit = () => {
    seekerDescriptionRef.current.focus()
  }








  const [createPost, { error, isLoading }] = useCreatePostMutation()
  const dispatch = useDispatch()
  const state = useSelector(state => state.createPost.post)
  function createPostFun() {
    createPost({
      "seeker": "Dada Jan",
      "phone_number": "+92 331 2384778",
      "address": "karachi",
      "bank_name": "meezan",
      "bank_title": "Kareem",
      "account_number": "3247897234",
      "needed_money": 0,
      "description": "there is no content to show",
      "kind": "zakat",
      "creator": "jana"
    }).then(data => {
      console.log(data)
    })
  }



  const [videoUri, setVideoUri] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const selectVideo = () => {
    launchImageLibrary({ mediaType: 'video' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedVideo = response.assets[0];
        setVideoUri(selectedVideo.uri);
      }
    });
  };

  const uploadVideo = async () => {
    if (videoUri) {
      const formData = new FormData();
      formData.append('video', {
        uri: videoUri,
        type: 'video/mp4', // Adjust the type based on the selected video format
        name: 'video.mp4',
      });

      try {
        const response = await fetch('http://addazakat.uk.to/post/upload-file/', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const result = await response.json();
        console.log(result);
        setUploadStatus('Video uploaded successfully!');
      } catch (error) {
        console.error(error);
        setUploadStatus('Video upload failed!');
      }
    }
  };




  return (
    <ScrollView style={{ flex: 1, marginTop: 20 }}>
      <KeyboardAvoidingView>
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'#03bafc'}
        />

        {/* <LoginModal navigation={navigation} errorServer={errorServer} isErrorServer={isErrorServer} setErrorServer={setErrorServer} setIsErrorServer={setIsErrorServer} /> */}


        <Modal transparent={true}
          visible={isLoading}
        >
          <View backgroundColor={'rgba(50,50,50,.3)'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator style={{}} size={'medium'} color={'black'} animating={true} />
          </View>
        </Modal>




        <LinearGradient
          colors={['#42a1f5', '#03bafc', '#42c5f5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderBottomLeftRadius: responsiveHeight(3),
            borderBottomRightRadius: responsiveHeight(3),
            height: responsiveHeight(30),
            width: responsiveWidth(100),
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Text style={{ color: 'white', fontSize: responsiveHeight(4), fontWeight: 'bold' }}>
            AdaZakat
          </Text>
        </LinearGradient>
        <View
          style={{
            elevation: 4,
            backgroundColor: 'white',
            borderRadius: responsiveWidth(5),
            margin: responsiveWidth(3),
            marginTop: responsiveHeight(-2),
            paddingVertical: responsiveHeight(2),
            // alignItems:'center',
            paddingHorizontal: responsiveWidth(5),
          }}>
          <Text
            style={{
              fontSize: responsiveHeight(2.5),
              fontWeight: 'bold',
              color: '#03bafc',
              textAlign: 'center'
            }}>
            Create Post
          </Text>
          <View style={{ marginVertical: responsiveHeight(2) }}>
            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerNameRef} onSubmitEditing={handleSeekerNameSubmit} onBlur={null} value={state.seeker} onChangeText={(text) => dispatch(setSeeker(text))} placeholder='Seeker Name' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorSeeker ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorSeeker ? (<Text style={{ color: 'red' }}>{state.errorSeeker}</Text>) : (<Text></Text>)}
              </View>
            </View>

            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerPhoneNumberRef} onSubmitEditing={handleSeekerPhoneNumberSubmit} onBlur={null} value={state.phoneNumber} onChangeText={(text) => dispatch(setPhoneNumber(text))} placeholder='Phone Number' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorPhoneNumber ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorPhoneNumber ? (<Text style={{ color: 'red' }}>{state.errorPhoneNumber}</Text>) : (<Text></Text>)}
              </View>
            </View>

            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerAddressRef} onSubmitEditing={handleSeekerAddressSubmit} onBlur={null} value={state.address} onChangeText={(text) => dispatch(setAddress(text))} placeholder='Address' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorAddress ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorAddress ? (<Text style={{ color: 'red' }}>{state.errorAddress}</Text>) : (<Text></Text>)}
              </View>
            </View>

            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerAmountNeededRef} onSubmitEditing={handleSeekerAmountNeededSubmit} onBlur={null} value={state.amountNeeded} onChangeText={(text) => dispatch(setAmountNeeded(text))} placeholder='Amount Needed' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorAmountNeeded ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorAmountNeeded ? (<Text style={{ color: 'red' }}>{state.errorAmountNeeded}</Text>) : (<Text></Text>)}
              </View>
            </View>

            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerDonationTypeRef} onSubmitEditing={handleSeekerDonationTypeSubmit} onBlur={null} value={state.typeOfDonation} onChangeText={(text) => dispatch(setTypeOfDonation(text))} placeholder='Donation Type' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorTypeOfDonation ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorTypeOfDonation ? (<Text style={{ color: 'red' }}>{state.errorTypeOfDonation}</Text>) : (<Text></Text>)}
              </View>
            </View>

            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerDescriptionRef} onSubmitEditing={handleSeekerDescriptionSubmit} onBlur={null} value={state.description} onChangeText={(text) => dispatch(setDescription(text))} placeholder='Description...' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorDescription ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorDescription ? (<Text style={{ color: 'red' }}>{state.errorDescription}</Text>) : (<Text></Text>)}
              </View>
            </View>


            <View>
      <Button title="Select Video" onPress={selectVideo} />
      {videoUri && (
        <View>
          <Text>Selected Video:</Text>
          {/* Use any video player component to display the video */}
          {/* For example, you can use 'react-native-video' library */}
          <Text>{videoUri}</Text>
          <Button title="Upload Video" onPress={uploadVideo} />
        </View>
      )}
      {uploadStatus ? <Text>{uploadStatus}</Text> : null}
    </View>

            {/* <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerVideoRef} onSubmitEditing={handleSeekerVideoSubmit} onBlur={null} value={state.description} onChangeText={(text) => dispatch(setDescription(text))} placeholder='Amount Needed' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorAmountNeeded ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorAmountNeeded ? (<Text style={{ color: 'red' }}>{state.errorAmountNeeded}</Text>) : (<Text></Text>)}
              </View>
            </View> */}


            {/* <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerResidenceVideoRef} onSubmitEditing={handleSeekerAmountNeededSubmit} onBlur={null} value={state.amountNeeded} onChangeText={(text) => dispatch(setAmountNeeded(text))} placeholder='Amount Needed' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorAmountNeeded ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorAmountNeeded ? (<Text style={{ color: 'red' }}>{state.errorAmountNeeded}</Text>) : (<Text></Text>)}
              </View>
            </View> */}


            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerBankNameRef} onSubmitEditing={handleSeekerBankNameSubmit} onBlur={null} value={state.bankName} onChangeText={(text) => dispatch(setBankName(text))} placeholder='Bank Name' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorBankName ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorBankName ? (<Text style={{ color: 'red' }}>{state.errorBankName}</Text>) : (<Text></Text>)}
              </View>
            </View>


            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerBankTitleRef} onSubmitEditing={handleSeekerBankTitleSubmit} onBlur={null} value={state.accountTitle} onChangeText={(text) => dispatch(setAccountTitle(text))} placeholder='Account Title' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorAccountTitle ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorAccountTitle ? (<Text style={{ color: 'red' }}>{state.errorAccountTitle}</Text>) : (<Text></Text>)}
              </View>
            </View>

            <View style={{ marginTop: responsiveHeight(1) }}>
              <TextInput ref={seekerAccountNumberRef} onSubmitEditing={handleSeekerAccountNumberSubmit} onBlur={null} value={state.accountNumber} onChangeText={(text) => dispatch(setAccountNumber(text))} placeholder='Account Number' style={{ fontSize: responsiveHeight(2.5), height: responsiveHeight(5), padding: responsiveHeight(.5), borderBottomColor: state.isErrorAccountNumber ? 'red' : '#03bafc', borderBottomWidth: 2 }} />
              <View style={{ marginVertical: responsiveHeight(1), alignItems: 'flex-start' }}>
                {state.isErrorAccountNumber ? (<Text style={{ color: 'red' }}>{state.errorAccountNumber}</Text>) : (<Text></Text>)}
              </View>
            </View>

            {/* <View style={{ marginTop: responsiveHeight(4) }}>
              <TouchableOpacity onPress={loginfunc} disabled={buttonDisabled} >
                <LinearGradient
                  onPress={() => { null }}
                  colors={['#42a1f5', '#03bafc', '#42c5f5']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 100,
                    width: responsiveWidth(60),
                    alignSelf: 'center',
                    alignItems: 'center',
                    paddingVertical: responsiveHeight(1),
                    opacity: buttonDisabled ? .5 : 1.0
                  }}>
                  <Text style={{ color: 'white', fontSize: 19 }}>LOGIN</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View> */}


          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>



  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBECF4"
  },
  upperPost: {
    height:400,
    backgroundColor: "#FFF",
    borderTopStartRadius: responsiveWidth(3),
    borderTopEndRadius: responsiveWidth(3),
    flexDirection: "column"
  },
 mainPost:{
  padding:10,
  marginVertical:responsiveHeight(1.5),
  elevation:responsiveHeight(1),
  shadowColor:'black',
  shadowOffset:responsiveHeight(1),
  shadowOpacity:responsiveHeight(1),
  shadowRadius:responsiveWidth(5)
 },
  avatar: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    backgroundColor: 'gray'
  },
  name: {
    flex:1,
    fontSize: responsiveWidth(5),
    fontWeight: "500",
    color: "#454D65"
  },
  description: {
    padding:responsiveWidth(2),
    fontSize: responsiveWidth(4),
    color: "#838899"
  },
  postImage: {
    backgroundColor:'black',
    flex:1,
    height: responsiveHeight(30),
    // borderRadius: responsiveWidth(3),
    marginVertical: 10
  }
})