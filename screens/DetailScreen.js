import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Pressable,
    ScrollView
} from 'react-native';
import theme from '../config/theme';

const w = Dimensions.get('screen').width;

const DetailScreen = () => {

    const navigation = useNavigation();
    const onBack = () => navigation.goBack();

    const renderListIngredients = () => {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.itemImg}
                    resizeMode='contain'
                    source={require('../assets/icon/ing1.png')}
                />
                <Text style={styles.itemTitle}>Avocado</Text>
                <Text style={styles.desc}>1/2 fruit</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../assets/icon/img1.png')}
            />
            <View style={styles.header}>
                <Pressable onPress={onBack}>
                    <Image source={require('../assets/icon/back.png')}/>
                </Pressable>
                <Pressable style={styles.buttonHeart}>
                    <Image
                        style={styles.iconHeart}
                        source={require('../assets/icon/heart.png')}
                        resizeMode='contain'
                    />
                </Pressable>
            </View>
            <ScrollView
                style={{
                    paddingTop: (w * 121) / 195 - 80,
                    flex: 1,
                    paddingHorizontal: 20,
                    paddingBottom: 56
                }}
            >
                <View style={styles.body}>
                    <Text style={styles.titleItem}>Fish width couscous</Text>
                    <View style={styles.starCon}>
                        {Array(5)
                            .fill(0)
                            .map((_) => (
                                <Image
                                    style={styles.star}
                                    source={require('../assets/icon/star.png')}
                                />
                            ))}
                    </View>
                    <View style={styles.footerCard}>
                        <View style={styles.footerItem}>
                            <Image source={require('../assets/icon/clock.png')}/>
                            <Text style={styles.footerItemText}>45 min</Text>
                        </View>
                        <Text style={styles.footerItemText}>6 ingredients</Text>
                    </View>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {[1, 2, 3, 4, 5].map((_) => renderListIngredients())}
                </ScrollView>
                <View>
                    <Text style={[styles.title, {color: theme.colors.main}]}>
                        Step1
                    </Text>
                    <Text style={styles.text}>
                        In a small bowl, combine avocado, lemon juice, salt, and pepper.
                        Gently mash with the back of a fork.
                    </Text>
                </View>
                <View>
                    <Text style={[styles.title, {color: theme.colors.main}]}>
                        Step2
                    </Text>
                    <Text style={styles.text}>
                        In a small bowl, combine avocado, lemon juice, salt, and pepper.
                        Gently mash with the back of a fork.
                    </Text>
                </View>
                <View>
                    <Text style={[styles.title, {color: theme.colors.main}]}>
                        Step3
                    </Text>
                    <Text style={styles.text}>
                        In a small bowl, combine avocado, lemon juice, salt, and pepper.
                        Gently mash with the back of a fork.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        width: w,
        height: (w * 121) / 195,
        position: 'absolute',
        top: 0
    },
    header: {
        position: 'absolute',
        top: 45,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        zIndex: 9999
    },
    buttonHeart: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100
    },
    iconHeart: {
        tintColor: theme.colors.main
    },
    body: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    titleItem: {
        fontSize: 16,
        fontWeight: '600',
    },
    starCon: {
        flexDirection: 'row',
        marginVertical: 9
    },
    star: {
        marginRight: 5
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%'
    },
    footerItemText: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 10,
        fontWeight: '500'
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginVertical: 10
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        marginVertical: 8
    },
    desc: {
        color: 'gray'
    },
    itemImg: {
        width: w/ 3,
        height: w/ 3,
        borderRadius: 20
    },
    item: {
        paddingRight: 15,
        paddingVertical: 10
    },
    text: {
        fontSize: 15,
        color: '#222',
        lineHeight: 25
    }
})
