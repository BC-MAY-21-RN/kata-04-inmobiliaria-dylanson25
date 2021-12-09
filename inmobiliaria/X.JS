import {ContItem, ImageItem, InfoItem, ReiItem, 
    TitleItem, LocItem, AdsItem, PriceItem, 
    LoveItem, ImageP } from '../assets/styled';
<ContItem>
        <ImageItem>
            <Image
                 source={{ uri: info.imageURL }}
            /> 
            <ReiItem>
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