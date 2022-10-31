import styled from 'styled-components/native';

export const BoldText = styled.Text`
font-size: 18px;
color: #101010;
font-weight: bold;
`;
export const LightText = styled.Text`
  font-size: 14px;
  color: #6F6F6F;
`;
export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center,
  align-items: center,
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
  margin-top: 24px
`;
export const ColumnContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center,
    align-items: center,
    margin-left:12px;
`
export const BaseRowContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center,
    align-items: center,
`