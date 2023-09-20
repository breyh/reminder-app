import { StyleSheet, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import {
    AlertCircleIcon,
    Button,
    ButtonText,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    Input,
    InputField,
    Text,
    View
} from '@gluestack-ui/themed'
import { rainbowBackground } from '../../../assets'
import colors from '../../utils/colors'

const WelcomeScreen = () => {
    const [name, setName] = useState<string>("");

    const onContinue = () => {
        console.log('continue');
    }

    return (
        <View style={styles.root}>
            <ImageBackground source={rainbowBackground} style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.text} fontSize="$5xl">Bienvenid@</Text>
                    <Text style={styles.text} fontSize="$2xl">Antes de empezar</Text>
                    <View style={{ width: '60%' }}>
                        <FormControl
                            size="lg"
                            isRequired
                        >
                            <Input
                                style={{
                                    borderWidth: .5,
                                    borderColor: 'ligthGray'
                                }}
                            >
                                <InputField type="text" value={name} placeholder="Escribe tu nombre" onChangeText={setName} onSubmitEditing={onContinue} />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    Debes ingresar un nombre para reconocerte.
                                </FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl>
                            <Button style={styles.button}>
                                <ButtonText fontSize="$sm" fontWeight="$medium" onPress={onContinue}>
                                    Next
                                </ButtonText>
                            </Button>
                        </FormControl>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 50
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
    },
    button: {
        marginTop: 10,
        backgroundColor: colors.tiffanyBlue,
    }
});