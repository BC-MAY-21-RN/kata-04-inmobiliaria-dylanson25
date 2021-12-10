import React from 'react';
import  {places}  from '../assets/Places.json';
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
