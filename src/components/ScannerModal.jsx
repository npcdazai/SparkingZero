import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image } from '@chakra-ui/react';
import scanner from "../../public/scanner.jpg";

const ScannerModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader fontSize="md">Donate Here</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Image src={scanner} h="100%" w="100%" />
            </ModalBody>
            <ModalFooter>
                {/* <Button colorScheme='blue' size="sm" onClick={onClose}>Close</Button> */}
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default ScannerModal;
