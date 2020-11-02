import React, {useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native';
import theme from '../config/theme'
import TabContents from "./TabContents";

const w = Dimensions.get('screen').width;
const tabs = ['All recipes', 'Meat', 'Salads', 'Soups']

const TapRecipe = ({onPress}) => {

    const [selected, setSelected] = useState(0);
    const onScroll = ({nativeEvent}) => {
        const index = Math.round(nativeEvent.contentOffset.x / (w - 20));

        setSelected(index)
    }

    return (
        <View>
            <View style={styles.header}>
                {tabs.map((e, i) => (
                    <Pressable onPress={() => setSelected(i)}>
                        <Text
                            style={[
                                styles.title,
                                selected == i && {color: 'black'}
                            ]}
                        >
                            {e}
                        </Text>
                        {selected == i && <View style={styles.line}/>}
                    </Pressable>
                ))}
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                snapToAlignment='center'
                decelerationRate='fast'
            >
                <TabContents onPress={onPress}/>
            </ScrollView>
        </View>
    );
};

export default TapRecipe;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        color: 'gray'
    },
    line: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 3
    }
})
