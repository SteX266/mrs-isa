import React, { } from 'react';
import { Form } from 'react-bootstrap';

export default function LabeledTextAreaInput(props) {
    return (
    <>
    <Form.Group className='mb3' controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder={props.placeholder} name={props.name} onChange={props.onChange}/>
    </Form.Group>
    
    
    </>);
}