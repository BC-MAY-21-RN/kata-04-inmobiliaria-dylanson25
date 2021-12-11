import styled from 'styled-components';
import {Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

export const ConteinerC = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const ContItemL = styled(ConteinerC)`
  flex: 1;
  flex-direction: column;
`;

export const ContItem = styled(ConteinerC)`
  margin: 2%;
  margin-bottom: 5px;
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2%;
  background-color: #ffe5df;
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
  flex-direction: column;
  `;

export const ReiItem = styled(Text)`
  color: #ecb302;
  font-weight: bold;
  font-size: 15px;
  background-color: #fffed3;
  border-radius: 9px;
  padding: 2px;
  margin-right: 25%;
  margin-left: 25%;
  margin-top: -30%;
`;

export const ImageP = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

export const TitleItem = styled(Text)`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;

export const LocItem = styled(Text)`
  color: #656565;
  font-size: 15px;
`;

export const GroupAdss = styled(View)`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
  `;

export const AdsItem = styled(Text)`
  font-weight: bold;
  color: black;
  font-size: 15px;
`;

export const IconI = styled(Icon)`
  color: #656565;
  font-size: 15px;
  margin-right: 5px;
`;

export const IconB = styled(Icon2)`
  color: #656565;
  font-size: 15px;
  margin-right: 5px;
  `;

export const BoxIcon = styled(ConteinerC)`
  flex-direction: row;
  margin-right: 10%;
  `;

export const PriceItem = styled(Text)`
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin-right: 60%;
  `;

export const LoveItem = styled(Icon)`
    color: red;
`;

export const ConteinerPL = styled(View)`
    margin-top: 7px;
    flex-direction: row;
    
    `;

export const StartItem = styled(Icon)`
  color: yellow;
  padding-left: 2px;
  `;
