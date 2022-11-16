import { StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../redux/actions';
import styled from 'styled-components/native';
import { BriefCard } from '../../components';
import { Container, BriefContainer } from './Home.styles';

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