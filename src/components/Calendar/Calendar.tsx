import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import CalendarCard from './CalendarCard';
import { hoursOfDay } from './utils';


const Table = () => {
    const [daysOfWeek, setDaysOfTheWeek] = useState<{ day: string, date: string }[]>([]);
    const calendarColors = ['#ec8f88', '#fdb23f', '#f5e657', '#b0b3dc', '#8ad7d1', '#b1d25f', '#fdd8ae']

    useEffect(() => {
        getSevenDaysOfWeek();
    }, []);

    const getSevenDaysOfWeek = () => {
        const today = dayjs();
        const _daysOfWeek = [];

        for (let i = 0; i < 7; i++) {
            _daysOfWeek.push({
                day: today.add(i, 'day').format('dddd'),
                date: today.add(i, 'day').format('YYYY-MM-DD'),
            });
        }
        setDaysOfTheWeek(_daysOfWeek);
    };

    return (
        <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false} contentInset={{ bottom: 400 }}>
            <View>
                <View style={styles.table}>
                    <View style={[styles.headerColumn, {
                        maxWidth: 120,
                        width: 80
                    }]}>
                        <View style={[styles.headerCell, {
                            backgroundColor: 'white',
                            height: 70
                        }]}>
                            <Text style={{ textAlign: 'center' }}>Hora de hacer las cosas</Text>
                        </View>
                        {hoursOfDay?.map((hour) => (
                            <View key={hour} style={[styles.headerCell, {
                                backgroundColor: colors.white
                            }]}>
                                <Text>{hour}</Text>
                            </View>
                        ))}
                    </View>
                    <ScrollView horizontal={true}>
                        {daysOfWeek?.map((day, index) => (
                            <View key={day.day} style={[styles.dataRow, {
                                maxWidth: 150,
                                width: 140
                            }]}>
                                <View style={[styles.headerCell, {
                                    backgroundColor: 'white',
                                    height: 70
                                }]}>
                                    <Text style={{ color: calendarColors[index] }}>{day.day.slice(0, 3).toUpperCase()} {dayjs(day.date).format('DD')}</Text>
                                </View>
                                {hoursOfDay.map((hour) => {
                                    return <CalendarCard key={`${day.date} ${hour}`} backgroundColor={calendarColors[index]} hour={hour} date={day.date} />
                                })}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    table: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: '100%'
    },
    headerColumn: {
        flexDirection: 'column',
    },
    headerCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c9b2ba',
        padding: 5,
        minHeight: 50,
        height: 50,
        margin: 3
    },
    dataRow: {
        flexDirection: 'column',
    },
    dataCell: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
    },
});

export default Table;
