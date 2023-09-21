import { StyleSheet, ImageBackground } from 'react-native'
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
import { rainbowBackground } from '../../../assets';
import colors from '../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile } from '../../store/features/user/userSlice';
import { IAppState } from '../../store/types';
import { Gender, IProfile } from '../../store/features/user/types';
import Select from '../Select/Select';

const WelcomeScreen = () => {
    const [newProfile, setNewProfile] = useState<IProfile>({
        name: '',
        gender: undefined,
    });
    const profile = useSelector((state: IAppState) => state.user.profile)
    const dispatch = useDispatch();

    const onContinue = () => {
        dispatch(addProfile(newProfile));
    };

    return (
        <View style={styles.root}>
            <ImageBackground source={rainbowBackground} style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.text} fontSize="$5xl">Bienvenid@ {profile?.name}</Text>
                    <Text style={styles.text} fontSize="$2xl">Antes de empezar</Text>
                    <View style={{ width: '60%', display: 'flex', rowGap: 10 }}>
                        <Select
                            items={[{ label: "Masculino", value: Gender.Masculino }, { label: "Femenino", value: Gender.Femenino }, { label: "Otr@", value: Gender.Otro }]}
                            onValueChange={(e: any) => setNewProfile({ ...newProfile, gender: e })}
                            value={newProfile.gender as string}
                            placeHolder="Hombre, Femenina u otro?"
                        />
                        <FormControl
                            size="lg"
                            isRequired
                        >
                            <Input
                                style={{
                                    borderWidth: 1,
                                    borderColor: colors.ligthGray,
                                    backgroundColor: colors.white
                                }}
                            >
                                <InputField type="text" value={newProfile?.name} placeholder="Escribe tu nombre" onChangeText={(e) => setNewProfile({ ...newProfile, name: e })} onSubmitEditing={onContinue} />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                    Debes ingresar un nombre para reconocerte.
                                </FormControlErrorText>
                            </FormControlError>
                        </FormControl>

                        <FormControl>
                            <Button style={styles.button} onPress={onContinue}>
                                <ButtonText fontSize="$sm" fontWeight="$medium">
                                    Empezar
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