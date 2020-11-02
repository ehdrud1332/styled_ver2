import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import theme from '../config/theme';

const w = Dimensions.get('screen').width;

const TabContents = ({onPress}) => {

    const renderItem = ({item}) => {
        return (
            <Pressable style={styles.item} onPress={onPress}>
                <Image
                    style={styles.image}
                    source={require('../assets/icon/all1.png')}
                />
                <View style={styles.body}>
                    <Text style={styles.titleItem}>Fish width couscous</Text>
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
                    <View style={styles.footerCard}>
                        <View style={styles.footerItem}>
                            <Image source={require('../assets/icon/clock.png')}/>
                            <Text style={styles.footerItemText}>45 min</Text>
                        </View>
                        <Text style={styles.footerItemText}>6 ingredients</Text>
                    </View>

                    <Pressable style={styles.buttonHeart}>
                        <Image
                            style={styles.iconHeart}
                            source={require('../assets/icon/heart.png')}
                            resizeMode='contain'
                        />
                    </Pressable>
                </View>
            </Pressable>
        )
    }

    return (
        <View>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </View>
    );
};

export default TabContents;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: w / 3.8,
        height: w/ 3.8,
        borderRadius: 10
    },
    body: {
        paddingHorizontal: 20,
        flex: 1
    },
    titleItem: {
        fontSize: 16,
        fontWeight: '600'
    },
    startCon: {
        flexDirection: 'row',
        marginVertical: 9
    },
    star: {
        marginRight: 8
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footerItemText: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 10,
        fontWeight: '500'
    },
    buttonHeart: {
        position: 'absolute',
        right: 5,
        top: 1
    },
    iconHeart: {
        tintColor: 'black',

    }
})
