import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { AddIcon, Button, ButtonIcon, ButtonText, Icon, Image, Text, View } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../store/types';
import { rainbow } from '../../../assets';
import colors from '../../utils/colors';
import Calendar from '../Calendar/Calendar';
import dayjs from 'dayjs';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTask from '../Modal/AddTask';
import { Gender } from '../../store/features/user/types';

const welcome = {
    [Gender.Masculino] : 'Bienvenido',
    [Gender.Femenino]: 'Bienvenida',
    [Gender.Otro] : 'Bienvenid@'
}

const Home = () => {
    const profile = useSelector((state: IAppState) => state.user.profile);
    const [openAddTask, setOpenAddTask] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <View style={styles.root}>
            <SafeAreaView>
                <View style={styles.header}>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.text} fontSize="$4xl">Remind me</Text>
                        <Text style={styles.helloText} fontSize="$xl">{welcome[profile?.gender || Gender.Otro]} {profile?.name}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={rainbow} alt="rainbow" />
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        paddingHorizontal: 10,
                    }}>
                        <Text>Hoy es {dayjs().format('dddd DD')}</Text>
                        <Button
                            style={{
                                backgroundColor: colors.purple,
                                width: '40%'
                            }}
                            onPress={() => setOpenAddTask(true)}
                        >
                            <ButtonText>Agregar tarea</ButtonText>
                            <ButtonIcon style={{ marginLeft: 1 }}>
                                <Icon as={AddIcon} style={{ color: 'white' }} />
                            </ButtonIcon>
                        </Button>
                        {openAddTask ? <AddTask isOpen={openAddTask} onClose={() => setOpenAddTask(false)} /> : null}
                    </View>
                    <Calendar />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.mainColor
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset (x, y)
        textShadowRadius: 4, // Shadow blur radius
    },
    helloText: {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset (x, y)
        textShadowRadius: 4, // Shadow blur radius
    },
    button: {
        marginTop: 10,
        backgroundColor: colors.tiffanyBlue,
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    header: {
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: .5,
        borderRadius: 10,
    }
});