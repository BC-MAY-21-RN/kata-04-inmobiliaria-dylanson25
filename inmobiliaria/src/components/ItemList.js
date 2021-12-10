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
      <>
      <FlatList
        data={info}
        renderItem={renderPlace}
        keyExtractor={item => item.id}
        horizontal={false}
        />
      </>
  );

};

export default ItemList;