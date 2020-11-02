import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Pressable
} from 'react-native';
import theme from '../config/theme'

const w = Dimensions.get('screen').width;

const IntroScreen = () => {

    const navigation = useNavigation();
    const onPressMain = () => {
        navigation.navigate("MainScreen")
    }

    return (
        <View style={styles.container}>
            <Image
                style={{width: '100%'}}
                resizeMode= 'contain'
                source={require('../assets/icon/banner.png')}
            />
            <View style={{marginVertical: '15%'}}>
                <Text style={styles.title}>The art of Cooking</Text>
                <Text style={styles.title}>Make your life easier</Text>
            </View>
            <View style={styles.groupIndicator}>
                <View style={styles.indicator}/>
                <View style={styles.indicator}/>
                <View style={styles.indicator}/>
                <View style={[styles.indicator, styles.moved]}/>
            </View>
            <Pressable style={styles.nextGroup} onPress={onPressMain}>
                <View style={styles.buttonNext}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={require('../assets/icon/next.png')}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: theme.colors.text
    },
    groupIndicator: {
        flexDirection: 'row'
    },
    indicator: {
        width: 8,
        height: 8,
        backgroundColor: '#C8D399',
        borderRadius: 8,
        marginHorizontal: 3
    },
    moved: {
        width: 12,
        backgroundColor: '#A1Af69'
    },
    nextGroup: {
        position: 'absolute',
        bottom: 55,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: theme.colors.main,
        borderRadius: 100
    },
    buttonNext: {
        width: 60,
        height: 60,
        backgroundColor: theme.colors.main,
        borderRadius: 80,
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#FFF'
    },
    icon: {
        width: 20,
        height: 20
    }
})
