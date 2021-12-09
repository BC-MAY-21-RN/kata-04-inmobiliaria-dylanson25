import React, {useEffect, useState} from 'react';
import  {places}  from '../assets/Places.json';
import {Text, Image, View, ScrollView} from 'react-native';
//Prueba de carga del item para iniciar su css
import ItemList from '../components/ItemList';



const HomeS = () => {
  return (
    <>
      <ItemList
        info = {places}
        >
      </ItemList>
    </>
  );
};

export default HomeS;
