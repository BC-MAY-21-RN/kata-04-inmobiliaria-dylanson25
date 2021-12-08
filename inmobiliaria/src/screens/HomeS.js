import React, {useEffect, useState} from 'react';
import { places } from '../assets/Places.json';
//Prueba de carga del item para iniciar su css
import Tarjeta from '../components/Tarjeta';

const HomeS = () => {
  const infoPlace = places.filter(places => places.id === 1);
  return (
    <>
      <Tarjeta
        info = {infoPlace}>
      </Tarjeta>
    </>
  );
};

export default HomeS;
