
import React, {Component} from 'react';
import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import DropdownCheckbox from '../DropdownCheckbox';
import LabeledInput from './LabeledInput';
import LabeledTextAreaInput from './LabeledTextAreaInput';
class VesselCreate extends Component {
    
    render() {
        return (
        <Container>
            <Form>
                <GeneralInformationForm/>

                <VesselInformationForm/>

                <Button variant='secondary' type='submit'>Create</Button>
            </Form>

        </Container>
        );
    }
}

class GeneralInformationForm extends Component {
    render() { 
        return (
        <>
        <Container>
            <LabeledInput name='Name' placeholder='Enter name of vessel' controlId='nameInput'/>

            <LabeledTextAreaInput name='Description' placeholder='Enter description' controlId='descriptionInput'/>

            <LabeledInput name='Address' placeholder='Enter address' controlId='addressInput'/>

            <LabeledTextAreaInput name='Rules of conduct' placeholder='Enter rules of conduct' controlId='rulesInput'/>

            <Form.Group className='mb3'>
                <DropdownCheckbox name='Amenities' list={['WIFI', 'TOILET']}></DropdownCheckbox>
            </Form.Group>

            <LabeledInput name='Cancelation fee' placeholder='Enter cancelation fee' controlId='cancelationFeeInput' type='number'/>

            <LabeledInput name='Rental price' placeholder='Enter rental price' controlId='rentalPriceInput' type='number'/>

            <Form.Group className='mb3'>
                    <Form.Label>Availability period</Form.Label>
                    <Form.Label>From</Form.Label>
                    <Form.Control type='date'/>
                    <Form.Label>To</Form.Label>
                    <Form.Control type='date'/>
                </Form.Group>
        </Container>
        </>);
    }
}

class VesselInformationForm extends Component {
    state = {  } 
    render() { 
        return (
        <>
        <Container>
            <Row>
                <Col><LabeledInput name='Capacity' placeholder='Enter vessel capacity' controlId='capacityInput' type='number'/></Col>
                <Col><LabeledInput name='Vessel length' placeholder='Enter vessel length' controlId='lengthInput' type='number'/></Col>
                <Col>
                <Form.Group className='mb3'>
                    Vessel type
                    <DropdownCheckbox name='Types' list={['Katamaran', 'BrziBrod']}></DropdownCheckbox>
                </Form.Group>
                </Col>
            </Row>
            

            

            

            <EngineForm/>

            <Row>
                <Col>
                <Form.Group className='mb3'>
                    <DropdownCheckbox name='Navigation equipment' list={['Radar', 'Policijski radar']}></DropdownCheckbox>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb3'>
                    <DropdownCheckbox name='Fishing equipment' list={['Stap', 'Bolji stap']}></DropdownCheckbox>
                </Form.Group>
                </Col>
            </Row>
            
            <Form.Group className='mb3'>
                <Form.Label>Photos of vessel</Form.Label>
                <Form.Control type='file' multiple></Form.Control>
            </Form.Group>

        </Container>
        

        </>);
    }
}

class EngineForm extends Component {
    render() { 
        return (
        <Container>
            <Row>
                <Col><LabeledInput name='Max speed' placeholder='Enter max speed(km/h)' controlId='maxSpeedInput' type='number'/></Col>
                <Col> <LabeledInput name='Engine number' placeholder='Enter engine number' controlId='engineNumberInput' type='number'/></Col>
                <Col><LabeledInput name='Engine power' placeholder='Enter engine power' controlId='enginePowerInput' type='number'/></Col>
            </Row>
        </Container>);
    }
}
 
 
export default VesselCreate;