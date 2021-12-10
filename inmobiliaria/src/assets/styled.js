import styled from 'styled-components';
import {Text, Image, View} from 'react-native';
export const ContItemL = styled(View)`
    flex: 1;
    flex-direction: column;
    align-items: center;

`;

export const ContItem = styled(View)`
    margin: 2%;
    margin-bottom: 5px;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2%;
    background-color: 	#ADD8E6;
    border-radius: 5px;
    
`;

//contenedores de imagen y informacion de la etiqueta
export const ImageItem = styled(View)`
    height: 90px;
    width: 30%;
`;

export const InfoItem = styled(View)`
    height: 100px;
    width: 65%;
    margin-left: 3%;
`;

export const ReiItem = styled(Text)`
color: black;
font-size: 15px;
`;

export const ImageP = styled(Image)`
    height: 100%;
    width: 100%;
    border-radius: 5px;
`;

export const TitleItem = styled(Text)`
    color: black;
    font-size: 15px;
    text-align: center;
`;

export const LocItem = styled(Text)`
color: gray;
font-size: 15px;
`;

export const GroupAdss = styled(View)`
    flex-direction: row;
    justify-content: space-evenly;
`;

export const AdsItem = styled(Text)`
color: black;
font-size: 15px;
`;

export const PriceItem = styled(Text)`
color: black;
font-size: 15px;
`;

export const LoveItem = styled(Text)`
color: black;
`;

