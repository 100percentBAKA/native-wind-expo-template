import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
                <Text>Touch me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen