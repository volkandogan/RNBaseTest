import { StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../redux/actions';
import styled from 'styled-components/native';
import { BriefCard } from '../components';

const BriefContainer = styled.View`
flex-direction: column;
justify-content: center,
align-items: center,
margin-left:16px;
margin-right:16px;
`
const Container = styled.View`
display:flex;
flex:1;
background-color:#FFF;
justify-content:center; 
`

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(value => value.brief)

    useEffect(() => {
        dispatch(Actions.briefActions.briefBegin())
    }, [])


    return (
        <Container>
            <BriefContainer>
                {loading && <Text>loading</Text>}
                {error && <Text>{error}</Text>}
                {data && data.data && data.data.map((item, index) => {
                    return (<BriefCard data={item} />)
                })}
            </BriefContainer>
        </Container>
    )
}

export default Home