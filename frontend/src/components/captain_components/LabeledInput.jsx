import React, {  } from 'react';
import { Form } from 'react-bootstrap';

export default function LabeledInput(props){
    return (
    <>
    <Form.Group className='mb3' controlId={props.controlId}>
        <Form.Label>{props.text}</Form.Label>
        <Form.Control placeholder={props.placeholder} type={props.type} value={props.value} disabled={props.disabled} onChange={props.onChange} name={props.name}/>
    </Form.Group>
    </>);
}
