import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ContItem,
  ImageItem,
  InfoItem,
  ReiItem,
  TitleItem,
  LocItem,
  AdsItem,
  PriceItem,
  LoveItem,
  ImageP,
  GroupAdss
} from '../assets/styled';

const Tarjeta = ({info}) => {
  return (
    <ContItem>
      <ImageItem>
        <ImageP source={{uri: info.imageURL}} />
        <ReiItem></ReiItem>
      </ImageItem>

      <InfoItem>
        <TitleItem>{info.name}</TitleItem>
        <LocItem>{info.adress}</LocItem>
        <GroupAdss>
          <AdsItem>{info.rooms}</AdsItem>
          <AdsItem>{info.bathrooms}</AdsItem>
          <AdsItem>{info.surface}</AdsItem>
        </GroupAdss>
        <PriceItem>$ {info.cost}</PriceItem>
        <LoveItem>{info.love}</LoveItem>
      </InfoItem>
    </ContItem>
  );
};

export default Tarjeta;
