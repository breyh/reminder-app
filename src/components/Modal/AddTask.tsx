import {
    StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import CustomModal from './CustomModal';
import {
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField,
    Button,
    ButtonText,
    View,
    Text
} from '@gluestack-ui/themed';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/features/task/taskSlice';
import { ITask } from '../../store/features/task/types';
import colors from '../../utils/colors';
import { generateRandomId, hoursOfDay } from '../Calendar/utils';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import Select from '../Select/Select';

const AddTask = ({ isOpen, onClose }: any) => {
    const [task, setTask] = useState<ITask>({
        description: '',
        hour: '',
        date: "",
        id: ""
    });
    const [date, setDate] = useState<Date>(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onAddTask = () => {
        dispatch(addTask({ ...task, date: dayjs(date).format('YYYY-MM-DD'), id: generateRandomId() }));
        onClose()
    };

    const onDatechange = (event: DateTimePickerEvent, _date: Date | undefined) => {
        setDate((prev) => _date || prev);
        setShowPicker(false);
    }

    return (
        <CustomModal title="Agregar tarea" isOpen={isOpen} onClose={onClose}>
            <View style={{
                display: 'flex',
                rowGap: 15,
            }}>
                <FormControl size="md">
                    <FormControlLabel mb="$1">
                        <FormControlLabelText>Descripcion</FormControlLabelText>
                    </FormControlLabel>
                    <Input style={{
                        borderWidth: 1,
                        borderColor: colors.ligthGray,
                        backgroundColor: colors.white
                    }}>
                        <InputField type="text" value={task?.description} placeholder="Descripcion" onChangeText={(e) => setTask({ ...task, description: e })} />
                    </Input>
                    <FormControlLabel mb="$1">
                        <FormControlLabelText>Hour</FormControlLabelText>
                    </FormControlLabel>
                </FormControl>
                <Select items={hoursOfDay?.map((hour) => ({label: hour, value: hour}))} onValueChange={(e) => setTask({ ...task, hour: e })} placeHolder='Selecciona la hora' value={task?.hour} />
                <FormControl>
                    <FormControlLabel mb="$1">
                        <FormControlLabelText>Fecha</FormControlLabelText>
                    </FormControlLabel>
                    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        {showPicker ? (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={(e, sd) => onDatechange(e, sd)}
                                minimumDate={new Date()}
                            />
                        ) : (
                            <Text> {date.toLocaleDateString("es-ES", { month: 'long', day: 'numeric' })} </Text>
                        )}
                        <Button onPress={() => setShowPicker(true)} style={{ backgroundColor: colors.purple }}>
                            <ButtonText>
                                Cambiar fecha
                            </ButtonText>
                        </Button>
                    </View>
                </FormControl>
                <Button onPress={onAddTask} style={{ backgroundColor: colors.tiffanyBlue }}>
                    <ButtonText>
                        Agregar
                    </ButtonText>
                </Button>
            </View>
        </CustomModal>
    )
}

export default AddTask

const styles = StyleSheet.create({})