import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { CircleIcon, Icon, TrashIcon, Text } from '@gluestack-ui/themed'
import { ITask } from '../../store/features/task/types';
import CustomModal from '../Modal/CustomModal';
import colors from '../../utils/colors';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { removeTaskById } from '../../store/features/task/taskSlice';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface ICalendadTasksProp {
    tasks: ITask[];
    isOpen: boolean;
    onClose: () => void;
    date: string;
}

const CalendarTasks: FC<ICalendadTasksProp> = ({ tasks, isOpen, onClose, date }) => {
    const dispatch = useDispatch();

    const removeTaskHandler = (id: string) => {
        dispatch(removeTaskById(id))
    }

    return (
        <CustomModal title={`Tareas para el dia ${dayjs(date).format('DD')} a las ${tasks[0]?.hour}`} isOpen={isOpen} onClose={onClose}>
            {tasks?.map((task: ITask, idx: number) => (
                <View
                    key={idx}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: idx !== tasks?.length - 1 ? .5 : 0
                    }}>
                    <View style={[styles.taskLine, { width: '80%' }]}>
                        <Icon as={CircleIcon} m="$1" w="$1" h="$1" />
                        <Text fontSize="$xl">{task?.description}</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableHighlight onPress={() => removeTaskHandler(task?.id)}>
                            <Icon as={TrashIcon} style={{ color: colors.ligthRed }} />
                        </TouchableHighlight>
                    </View>
                </View>
            ))}
        </CustomModal >
    )
}

export default CalendarTasks

const styles = StyleSheet.create({
    taskLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})