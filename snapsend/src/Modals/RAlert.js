import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


const RAlert = (props) => {
    return (
        <Modal
            isOpen={props.open}
            toggle={props.toggle}
            className={`modal-dialog ${props.className}`}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}>
            <ModalHeader style={{ color: "white", padding: "5px 15px", margin: 0, backgroundColor: '#232B54' }}>{props.title}</ModalHeader>
            <ModalBody>
                {props.message}
            </ModalBody>
            {(props.okbutton == true || props.closebutton == true) ? (
                <ModalFooter toggle={props.toggle}>
                    {props.closebutton ? <Button size="sm" variant="secondary" style={{ backgroundColor: "gery", fontFamily: "Arial" }} onClick={props.toggle}>Close</Button> : ''}
                    {props.okbutton ? <Button variant="info" size="sm" style={{ backgroundColor: "green", fontFamily: "Arial" }} onClick={props.onOK} >{props.oktext}</Button> : ''}
                </ModalFooter>) : ''}
        </Modal>

    );

}

RAlert.defaultProps = {
    open: false,
    toggle: () => { },
    className: ''
}

export default RAlert;