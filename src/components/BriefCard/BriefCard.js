import React from 'react'
import { images } from '../../constants/image';
import { RowContainer, BaseRowContainer, Image, ColumnContainer, LightText, BoldText } from './BriefCard.styles';

const BriefCard = ({ data }) => {
    return (
        <RowContainer>
            <BaseRowContainer>
                <Image source={images.downtrend} />
                <ColumnContainer>
                    <LightText>{data.name}</LightText>
                    <BoldText>İşlem Adedi: {data.numberoftransactions}</BoldText>
                </ColumnContainer>
            </BaseRowContainer>
            <ColumnContainer>
                <LightText>{''}</LightText>
                <BoldText>{data.amount}</BoldText>
            </ColumnContainer>
        </RowContainer>
    )
}

export default BriefCard
