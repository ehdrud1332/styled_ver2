import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import theme from '../config/theme';
const w = Dimensions.get('screen').width;

const RecipePopular = ({onPress}) => {

    const renderItem = () => {
        return (
            <Pressable style={styles.itemContainer} onPress={onPress}>
                <Image
                    style={styles.image}
                    source={require('../assets/icon/img1.png')}
                />
                <View style={styles.cardItem}>
                    <Text style={styles.titleItem}>Avocado Toast</Text>
                    <View style={styles.startCon}>
                        {Array(5)
                            .fill(0)
                            .map((_) => (
                                <Image
                                    style={styles.star}
                                    source={require('../assets/icon/star.png')}
                                />
                            ))}
                    </View>

                    <View style={styles.footerItem}>
                        <Image source={require('../assets/icon/clock.png')}/>
                        <Text style={styles.footerItemText}>5 min</Text>
                    </View>
                </View>
                <Pressable style={styles.buttonHeart}>
                    <Image
                        style={styles.iconHeart}
                        source={require('../assets/icon/heart.png')}
                        resizeMode="contain"
                    />
                </Pressable>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Most Popular</Text>
                <Pressable>
                    <Text style={styles.viewAll}>View All</Text>
                </Pressable>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.scrollView}
            >
                {[1, 2, 3, 4, 5].map((_) => renderItem())}
            </ScrollView>
        </View>
    );
};

export default RecipePopular;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: theme.colors.text,
        fontSize: 20,
        fontWeight: '600'
    },
    viewAll: {
        color: theme.colors.gray
    },
    scrollView: {
        paddingVertical: 10
    },
    itemContainer: {
        backgroundColor: '#fff',
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius:3,
        borderRadius: 10,
        marginRight: 20
    },
    titleItem: {
        color: theme.colors.text,
        fontSize: 17,
        fontWeight: '600'
    },
    cardItem: {
        padding: 10
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    startCon: {
        flexDirection: 'row',
        marginVertical: 9
    },
    start: {
        marginRight: 10
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerItemText: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 10,
        fontWeight: '500'
    },
    buttonHeart: {
        padding: 10,
        position: 'absolute',
        backgroundColor: '#fff',
        right: 10,
        top: 10,
        borderRadius: 100
    },
    iconHeart: {
        tintColor: theme.colors.main
    }
})