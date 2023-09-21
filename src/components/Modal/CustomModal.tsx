import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { CloseIcon, Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@gluestack-ui/themed'
import colors from '../../utils/colors';


export interface ICustomModalProp {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const CustomModal: FC<ICustomModalProp> = ({ isOpen, onClose, children, title }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} avoidKeyboard>
            <ModalBackdrop />
            <ModalContent style={{
                backgroundColor: colors.mainColor,
                paddingBottom: 20
            }}>
                <ModalHeader>
                    <Heading size="md" style={{
                        color: colors.black
                    }}>{title}</Heading>
                    <ModalCloseButton onPress={onClose}>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({})