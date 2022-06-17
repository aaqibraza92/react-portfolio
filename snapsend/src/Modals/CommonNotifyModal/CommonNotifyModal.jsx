import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CommonNotifyModal = (props) => {
    return (
        <Modal backdrop="static" keyboard={false} isOpen={props.open} toggle={props.toggle} className={`cmn_class  ${props.className}`}>
            {/* <ModalHeader toggle={props.toggle}>eModal titl</ModalHeader> */}
            <ModalBody>
                {props.children}
            </ModalBody>
        </Modal>
    );

}

CommonNotifyModal.defaultProps = {
    open: false,
    toggle: () => { },
    className: ''
}

export default CommonNotifyModal;