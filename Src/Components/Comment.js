import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'


const Comment = ({ comment, name }) => {

    return (    
            <View style={{ backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'black' }}></View>
                    <Text style={{ marginLeft: 10, fontSize: 20, color: 'black', fontWeight: 'bold' }}>{name}</Text>
                </View>
                <Text style={{ marginLeft: 30, padding: 10, fontSize: 15, color: 'black' }}>{comment}</Text>
            </View>
    )
}

export default Comment