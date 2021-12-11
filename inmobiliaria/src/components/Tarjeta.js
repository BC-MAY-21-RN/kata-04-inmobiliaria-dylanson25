import React from 'react';
//import { TouchableOpacity } from 'react-native';
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
  GroupAdss,
  BoxIcon,
  IconI,
  IconB,
  StartItem,
  ConteinerPL
} from '../assets/styled';

const Tarjeta = ({info}) => {
  //const nameIcon = (info.love) ? 'heart' : 'heart-outlined';
  return (
    <ContItem>

      <ImageItem>
        <ImageP source={{uri: info.imageURL}} /> 
        
        <ReiItem>
         <StartItem name='star'/>
          {info.rating}
        </ReiItem>
        
      </ImageItem>

      <InfoItem>
        <TitleItem>{info.name}</TitleItem>
        <BoxIcon>
          <IconI name="location-pin" />
          <LocItem>{info.adress}</LocItem>
        </BoxIcon>
        
        <GroupAdss>
          <BoxIcon>
            <IconI name="home" />
            <AdsItem>{info.rooms}</AdsItem>
          </BoxIcon>
          
          <BoxIcon>
            <IconB name="restroom" />
            <AdsItem>{info.bathrooms}</AdsItem>
          </BoxIcon>
          
          <BoxIcon>
            <IconI name="resize-full-screen" />
            <AdsItem>{info.surface}</AdsItem>
          </BoxIcon>
        </GroupAdss>
        
        <ConteinerPL>
          <PriceItem>${info.cost}/m</PriceItem>
          <LoveItem name='heart'/>        
        </ConteinerPL>

      </InfoItem>

    </ContItem>
  );
};

export default Tarjeta;
