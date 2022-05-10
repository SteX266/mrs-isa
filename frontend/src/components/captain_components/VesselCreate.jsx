
import axios from 'axios';
import React, {useState} from 'react';
import { Button, Container, Form, FormSelect} from 'react-bootstrap';
import DropdownCheckbox from '../DropdownCheckbox';
import LabeledInput from './LabeledInput';
import LabeledTextAreaInput from './LabeledTextAreaInput';
export default function VesselCreate() {
    const [formData, setFormData] = useState({vesselName:'',
                                              description:'',
                                              address:'',
                                              rules:'', 
                                              amenities:[],
                                              cancelationFee: -1000,
                                              rentalPrice: -1000,
                                              from: {},
                                              to: {},
                                              capacity: -1000,
                                              vesselLength: -1000,
                                              type: "",
                                              maxSpeed: 0,
                                              engineNumber: 0,
                                              enginePower: 0,
                                              navigationEquipment: [],
                                              fishingEquipment: [],
                                              photos: []});
    function onCreateButtonClicked(event) {
        event.preventDefault();
        console.log(formData);
        if(isFormDataValid()) {
            console.log(formData);
        }
        console.log(formData);
        
        
    }

    function onChange(event) {
        setFormData(prevFormData => {
            console.log(event.target.name, event.target.value);
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function onUpload(event) {
        setFormData(prevFormData => {
            console.log(event.target.name, event.target.files);
            return {
                ...prevFormData,
                [event.target.name]: event.target.files
            }
        })
    }
    
    function onCheck(event) {
        setFormData(prevFormData => {
            console.log(event.target.name);
            console.log(event.target.parentNode);
            let checkList = formData[event.target.parentNode.name];
            if(!checkList) {
                checkList = [];
            }
            if(event.target.checked) {
                checkList.push(event.target.name);
            } else {
                checkList = checkList.filter(e => e !== event.target.name);
            }
            return {
                ...prevFormData,
                [event.target.parentNode.name]: checkList
            }
        })
    }


    function isFormDataValid() {
        for(const item in formData ) {
            if (item < 0 || item === '' || item === [] || item === {})
                return false;
        }
        return true;
    }

    function createVessel() {
        const requestOptions = {
            headers: {
               Accept: 'application/json',
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
               
               },
            data:{
                "vesselDto": formData
            }
        };
        axios.post("http://localhost:8080/api/vessel/create", requestOptions).then(function (response) {
            console.log(response.data);
        }).catch(function (response) {
            console.log(response.status);
        });
    }
    return (
    <Container>
        <Form>
            <GeneralInformationForm onChange={onChange} onCheck={onCheck}/>

            <VesselInformationForm onChange={onChange} onUpload={onUpload}/>

        </Form>
        <Button variant='outline-dark' onClick={onCreateButtonClicked}>Create</Button>
    </Container>
    );
}

function GeneralInformationForm(props) {
    return (
    <>
    <Container>
        <LabeledInput label='Name' name='vesselName' placeholder='Enter name of vessel' onChange={props.onChange}/>

        <LabeledTextAreaInput label='Description' name='description' placeholder='Enter description' onChange={props.onChange}/>

        <LabeledInput label='Address' name='address' placeholder='Enter address' onChange={props.onChange}/>

        <LabeledTextAreaInput label='Rules of conduct' name='rules' placeholder='Enter rules of conduct' onChange={props.onChange}/>

        <EquipmentCheckbox label='Amenities' name='amenities' list={['WIFI', 'TOILET']} onCheck={props.onCheck}/>

        <LabeledInput label='Cancelation fee' name='cancelationFee' placeholder='Enter cancelation fee' type='number' onChange={props.onChange}/>

        <LabeledInput label='Rental price' name='rentalPrice' placeholder='Enter rental price' type='number' onChange={props.onChange}/>

        <AvailabilityPeriodForm onChange={props.onChange}/>

    </Container>
    </>);
}

function VesselInformationForm(props) {
    return (
    <Container>
        <LabeledInput label='Capacity' name='capacity' placeholder='Enter vessel capacity' type='number' onChange={props.onChange}/>
        <LabeledInput label='Vessel length' name='vesselLength' placeholder='Enter vessel length' type='number' onChange={props.onChange}/>
        
        <VesselCheckbox onChange={props.onChange}/>

        <EngineForm onChange={props.onChange}/>

        <EquipmentCheckbox label='Fishing equipment' name='fishingEquipment' list={['Stap', 'Bolji stap']} onCheck={props.onCheck}/>
        <EquipmentCheckbox label='Navigation equipment' name='navigationEquipment' list={['Radar', 'Policijski radar']} onCheck={props.onCheck}/>
        
        <PhotoUploadForm onUpload={props.onUpload}/>

    </Container>);
}

function EngineForm(props) {
    return (
    <Container>
            <LabeledInput label='Max speed' name='maxSpeed' placeholder='Enter max speed(km/h)' type='number' onChange={props.onChange}/>
            <LabeledInput label='Engine number' name='engineNumber' placeholder='Enter engine number' type='number' onChange={props.onChange}/>
            <LabeledInput label='Engine power' name='enginePower' placeholder='Enter engine power' type='number' onChange={props.onChange}/>
    </Container>
    );
}

function VesselCheckbox(props) {
    return (
    <Form.Group className='mb3'>
        <FormSelect onChange={props.onChange} name='type'>
            <option value='Short boat'>Short boat</option>
            <option value='Long boat'>Long boat</option>
            <option value='Fast ship'>Fast ship</option>
            <option value='Even faster ship'>Even faster ship</option>
        </FormSelect>
    </Form.Group>
    );
}

function EquipmentCheckbox(props) {
    return (
    <Form.Group className='mb3'>
        <DropdownCheckbox label={props.label} name={props.name} list={props.list} onCheck={props.onCheck}></DropdownCheckbox>
    </Form.Group>
    );
}

function PhotoUploadForm(props) {
    return (
        <Form.Group className='mb3'>
            <Form.Label>Photos of vessel</Form.Label>
            <Form.Control type='file' multiple onChange={props.onUpload} name='photos'></Form.Control>
        </Form.Group>
    );
}

function AvailabilityPeriodForm(props) {
    return (
        <Form.Group className='mb3'>
            <Form.Label>From</Form.Label>
            <Form.Control type='date' name='from' onChange={props.onChange}/>
            <Form.Label>To</Form.Label>
            <Form.Control type='date' name='to' onChange={props.onChange}/>
        </Form.Group>
    );
}