import React, { FC } from 'react';
import { StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../utils/colors';
import { ArrowDownIcon, Icon, View } from '@gluestack-ui/themed';

export interface ISelectProps {
    items: ISelectItem[];
    value: string;
    onValueChange: (e: string) => void;
    placeHolder: string;
}

interface ISelectItem {
    label: string;
    value: string;
}

const Select: FC<ISelectProps> = ({ items, value, onValueChange, placeHolder }) => {
    const placeholderOptions = {
        label: placeHolder,
        value: null,
        color: '#9EA0A4',
    };
    return (
        <RNPickerSelect
            style={{
                inputIOS: {
                    fontSize: 16,
                    height: 40,
                    borderWidth: .5,
                    borderColor: colors.ligthGray,
                    borderRadius: 4,
                    color: 'black',
                    paddingRight: 30, // to ensure the text is never behind the icon
                    backgroundColor: colors.white,
                    paddingLeft: 10,
                },
                iconContainer: {
                    top: 10,
                    right: 12,
                },
                inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    color: 'black',
                    paddingRight: 30, // to ensure the text is never behind the icon
                },
            }}
            placeholder={placeholderOptions}
            value={value}
            onValueChange={onValueChange}
            items={items}
            Icon={() => (
                <Icon as={ArrowDownIcon} />
            )}
        />

    )
}

export default Select

export const defaultStyles = StyleSheet.create({
    viewContainer: {
        alignSelf: 'stretch',
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
    },
    modalViewTop: {
        flex: 1,
    },
    modalViewMiddle: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#EFF1F2',
        borderTopWidth: 0.5,
        borderTopColor: '#919498',
        zIndex: 2,
    },
    chevronContainer: {
        flexDirection: 'row',
    },
    chevron: {
        width: 15,
        height: 15,
        backgroundColor: 'transparent',
        borderColor: '#D0D4DB',
        borderTopWidth: 1.5,
        borderRightWidth: 1.5,
    },
    chevronUp: {
        marginLeft: 11,
        transform: [{ translateY: 4 }, { rotate: '-45deg' }],
    },
    chevronDown: {
        marginLeft: 22,
        transform: [{ translateY: -5 }, { rotate: '135deg' }],
    },
    chevronActive: {
        borderColor: '#007AFE',
    },
    done: {
        color: '#007AFE',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 1,
        paddingRight: 2,
    },
    modalViewBottom: {
        justifyContent: 'center',
        backgroundColor: '#D0D4DB',
    },
    placeholder: {
        color: '#C7C7CD',
    },
    headlessAndroidPicker: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        color: 'transparent',
        opacity: 0,
    },
});