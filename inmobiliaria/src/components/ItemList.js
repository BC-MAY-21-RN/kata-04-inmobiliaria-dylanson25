import React from 'react';
import Tarjeta from './Tarjeta.js';
import { View, Text, FlatList, ScrollView } from 'react-native';

const ItemList = ({info}) => {
  const renderPlace =({item}) => {
    return(
      <Tarjeta
      info={item}
    />
    )
    
    
  }
    return (
      <View>
      <FlatList
        data={info}
        renderItem={renderPlace}
        keyExtractor={item => item.id}
        horizontal={false}
      />
    </View>
  );

};

export default ItemList;