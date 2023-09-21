import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { ITask } from '../../store/features/task/types';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/types';
import dayjs from 'dayjs';
import { CircleIcon, Icon } from '@gluestack-ui/themed';
import CalendarTasks from './CalendarTasks';

export interface ICalendarCardProp {
    backgroundColor: string;
    hour: string;
    date: string;
}

const CalendarCard: FC<ICalendarCardProp> = ({ backgroundColor, hour, date }) => {
    const taskState = useSelector((state: IAppState) => state.tasks.tasks);
    const [calendarTask, setCalendarTask] = useState<ITask[]>([]);
    const [isOpen, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const _tasks = taskState?.filter((_task: ITask) => dayjs(_task.date).format('YYYY-MM-DD') == dayjs(date).format('YYYY-MM-DD') && _task.hour === hour);
        setCalendarTask(_tasks)
    }, [taskState]);

    const onHandleModal = () => {
        if (!calendarTask?.length) return
        setOpen(true);
    };

    return (
        <TouchableOpacity
            style={{
                backgroundColor, flex: 1,
                borderWidth: 1,
                borderColor: '#c9b2ba',
                padding: 3,
                minHeight: 50,
                height: 50,
                margin: 3,
                overflow: 'hidden',
            }}
            onPress={onHandleModal}
        >
            {isOpen && calendarTask?.length ? <CalendarTasks isOpen={isOpen} onClose={() => setOpen(false)} tasks={calendarTask} date={date} /> : null}
            {calendarTask?.map((task, idx) => (
                <View key={idx} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon as={CircleIcon} m="$1" w="$1" h="$1" />
                    <Text numberOfLines={1} ellipsizeMode="tail">{task?.description}</Text>
                </View>
            ))}
        </TouchableOpacity>
    )
}

export default CalendarCard

const styles = StyleSheet.create({})