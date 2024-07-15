import AsyncStorage from "@react-native-async-storage/async-storage"


const setUserData=async(data)=>{
    // console.log("setting async user data",data)
    await AsyncStorage.setItem("userData",data)
}
const getUserData=async()=>{
   const result= await AsyncStorage.getItem("userData")
   return result
}
const removeUserData=async()=>{
    await AsyncStorage.removeItem("userData")
}
const getAccessToken=async()=>{
    const result= await AsyncStorage.getItem("userData")
    return result.accessToken
}
const getRefreshToken=async ()=>{
    const result= await AsyncStorage.getItem("userData")
    return result.refreshToken
}
 
export {setUserData,getUserData,removeUserData,getAccessToken,getRefreshToken}