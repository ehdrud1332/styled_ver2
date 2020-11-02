import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../config/theme';
import RecipePopular from "../components/RecipePopular";

const MainScreen = () => {

    const navigation = useNavigation();
    const onPressDetail = () => {
        navigation.navigate('DetailScreen')
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>What would you like to cook?</Text>
                <View style={styles.searchContainer}>
                    <View style={styles.iconSearch}>
                        <Image source={require('../assets/icon/search.png')}/>
                    </View>
                    <TextInput style={styles.inputSearch} placeholder="Find a recipe"/>
                    <View style={styles.filterButton}>
                        <Image source={require('../assets/icon/filter.png')}/>
                    </View>
                </View>

                <RecipePopular onPress={onPressDetail}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#41423F'
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f2f4ec',
        borderRadius: 10,
        marginTop: 20
    },
    iconSearch: {
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSearch: {
        flex: 1,
        padding: 10
    },
    filterButton: {
        backgroundColor: 'black',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})
