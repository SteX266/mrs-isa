
import React, {Component} from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import DropdownCheckbox from './DropdownCheckbox';
class VesselCreate extends Component {
    render() {
        return (
        <Container>
            <Form>
                <Form.Group className='mb3' controlId='formVesselCreate'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder='Enter name of vessel'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Desctription</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Enter description'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Enter address'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Rules of conduct</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Enter rules of conduct'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <DropdownCheckbox name='Amenities' list={['WIFI', 'TOILET']}></DropdownCheckbox>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Cancelation fee</Form.Label>
                    <Form.Control type='number'placeholder='Enter cancelation fee'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='number'placeholder='Enter price'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Availability period</Form.Label>
                    <Form.Label>From</Form.Label>
                    <Form.Control type='date'/>
                    <Form.Label>To</Form.Label>
                    <Form.Control type='date'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Control type='file'></Form.Control>
                </Form.Group>

                <Form.Group className='mb3'>
                    <DropdownCheckbox name='Vessel type' list={['Katamaran', 'BrziBrod']}></DropdownCheckbox>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control type='number'placeholder='Enter vessel capacity'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Vessel length</Form.Label>
                    <Form.Control type='number'placeholder='Enter length'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Engine number</Form.Label>
                    <Form.Control type='number'placeholder='Enter engine number'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Engine power</Form.Label>
                    <Form.Control type='number'placeholder='Enter engine power'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <Form.Label>Max speed</Form.Label>
                    <Form.Control type='number'placeholder='Enter max speed(km/h)'/>
                </Form.Group>

                <Form.Group className='mb3'>
                    <DropdownCheckbox name='Navigation equipment' list={['Radar', 'Policijski radar']}></DropdownCheckbox>
                </Form.Group>

                <Form.Group className='mb3'>
                    <DropdownCheckbox name='Fishing equipment' list={['Stap', 'Bolji stap']}></DropdownCheckbox>
                </Form.Group>

                <Button variant='secondary' type='submit'>Create</Button>

            </Form>

        </Container>
        );
    }
}
 
export default VesselCreate;