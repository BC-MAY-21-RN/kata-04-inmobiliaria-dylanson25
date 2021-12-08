import React, {useEffect, useState} from 'react';
import {Text, Image, View} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import {ContItem, ImageItem, InfoItem, ReiItem, 
        TitleItem, LocItem, AdsItem, PriceItem, 
        LoveItem, ImageP } from '../assets/styled';

const Tarjeta = (info) => {
  return (
    <ContItem>

        <ImageItem>
            <ImageP
                source={{ uri: info.imageURL }}
            /> 
            <ReiItem>
                {info.rating}
            </ReiItem>
        </ImageItem>

        <InfoItem>
            <TitleItem>
                {info.name}
            </TitleItem>
            <LocItem>

                {info.adress}
            </LocItem>
            <View>
                <AdsItem>
             
                    {info.rooms}
                </AdsItem>
                <AdsItem>
                
                    {info.bathrooms}
                </AdsItem>
                <AdsItem>
                   
                    {info.surface}
                </AdsItem>
            </View>
            <PriceItem>
                {info.cost}
            </PriceItem>
            <LoveItem> 
                {info.love}
            </LoveItem>
        </InfoItem>

    </ContItem>
  );
};

export default Tarjeta;
