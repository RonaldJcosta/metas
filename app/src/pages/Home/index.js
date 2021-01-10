import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Btn, BtnText } from './styles'

export default function Home() {

    const navigation = useNavigation()

    const Meta = () => {
        navigation.navigate('Meta')
    }

    const AddMeta = () => {
        navigation.navigate('AddMeta')
    }

    return (
        <Container>
            <Btn onPress={Meta}>
                <BtnText>Listar</BtnText>
            </Btn>

            <Btn onPress={AddMeta}>
                <BtnText>Cadastrar</BtnText>
            </Btn>

        </Container>

    )
}