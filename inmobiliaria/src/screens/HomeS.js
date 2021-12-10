import React, {useEffect, useState} from 'react';
import  {places}  from '../assets/Places.json';
import {Text, Image, View, ScrollView} from 'react-native';
//Prueba de carga del item para iniciar su css
import ItemList from '../components/ItemList';
import {ContItemL} from '../assets/styled';


const HomeS = () => {
  return (
    <ContItemL>
      <ItemList
        info = {places}
        >
      </ItemList>
    </ContItemL>
  );
};

export default HomeS;
