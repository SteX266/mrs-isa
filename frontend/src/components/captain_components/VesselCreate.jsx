
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
                                              cancelationFee: '',
                                              rentalPrice: '',
                                              from: '',
                                              to: '',
                                              capacity: '',
                                              vesselLength: '',
                                              type: "",
                                              maxSpeed: '',
                                              engineNumber: '',
                                              enginePower: '',
                                              navigationEquipment: [],
                                              fishingEquipment: [],
                                              photos: []});
    const [errors, setErrors] = useState({vesselName:'',
                                        description:'',
                                        address:'',
                                        rules:'', 
                                        amenities:'',
                                        cancelationFee: '',
                                        rentalPrice: '',
                                        from: '',
                                        to: '',
                                        capacity: '',
                                        vesselLength: '',
                                        type: '',
                                        maxSpeed: '',
                                        engineNumber: '',
                                        enginePower: '',
                                        navigationEquipment: '',
                                        fishingEquipment: '',
                                        photos: ''});

    const [valid, setValid] = useState(true);

    function onCreateButtonClicked(event) {
        event.preventDefault();
        validateForm();
        console.log(formData);
        if(valid) {
            createVessel();
        }
        
        
    }

    function onChange(event) {
        setFormData(prevFormData => {
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
            let checkSet = formData[event.target.parentNode.id];
            if(event.target.checked) {
                checkSet.push(event.target.name);
            } else {
                checkSet = checkSet.filter( e => e !== event.target.name);
            }
            return {
                ...prevFormData,
                [event.target.parentNode.id]: checkSet
            }
        })
    }


    function validateForm() {
        let valid = true;
        let currentErrors = errors;
        if (!formData.address) {
            currentErrors.address = "Address required!";
            valid = false;
        }
        if(!formData.cancelationFee) {
            currentErrors.cancelationFee = "Cancelation fee required!";
            valid = false;
        }
        if(!formData.capacity) {
            currentErrors.capacity = "Capacity required!";
            valid = false;
        }
        if(!formData.photos || formData.photos.length < 3) {
            currentErrors.photos = "Must contain at least 3 photos!";
            valid = false;
        }
        if(!formData.rentalPrice) {
            currentErrors.rentalPrice = "Rental fee required!";
            valid = false;
        }
        if(!formData.vesselLength) {
            currentErrors.vesselLength = "Length required!";
            valid = false;
        }
        if(!formData.vesselName) {
            currentErrors.vesselName = "Name required!";
            valid = false;
        }
        if(!formData.from) {
            currentErrors.from = "No date selected!";
            valid = false;
        }
        if(!formData.to) {
            currentErrors.to = "No date selected!";
            valid = false;
        }
        setValid(valid);
        setErrors(currentErrors);

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
            <GeneralInformationForm onChange={onChange} onCheck={onCheck} errors={errors} valid={valid}/>

            <VesselInformationForm onChange={onChange} onUpload={onUpload} errors={errors} valid={valid}/>

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
        {!props.valid && <Form.Text muted style={{color: 'red'}}>
                            <p style={{color: 'red'}}>{props.errors.vesselName}</p>
                        </Form.Text>
        }

        <LabeledTextAreaInput label='Description' name='description' placeholder='Enter description' onChange={props.onChange}/>

        <LabeledInput label='Address' name='address' placeholder='Enter address' onChange={props.onChange}/>
        {!props.valid && <Form.Text muted style={{color: 'red'}}>
                            <p style={{color: 'red'}}>{props.errors.address}</p>
                        </Form.Text>
        }

        <LabeledTextAreaInput label='Rules of conduct' name='rules' placeholder='Enter rules of conduct' onChange={props.onChange}/>

        <EquipmentCheckbox label='Amenities' name='amenities' list={['WIFI', 'TOILET']} onCheck={props.onCheck}/>

        <LabeledInput label='Cancelation fee' name='cancelationFee' placeholder='Enter cancelation fee' type='number' onChange={props.onChange}/>
        {!props.valid && <Form.Text muted style={{color: 'red'}}>
                            <p style={{color: 'red'}}>{props.errors.cancelationFee}</p>
                        </Form.Text>
        }

        <LabeledInput label='Rental price' name='rentalPrice' placeholder='Enter rental price' type='number' onChange={props.onChange}/>
        {!props.valid && <Form.Text muted>
                            <p style={{color: 'red'}}>{props.errors.rentalPrice}</p>
                        </Form.Text>
        }

        <AvailabilityPeriodForm onChange={props.onChange} errors={props.errors} valid={props.valid}/>

    </Container>
    </>);
}

function VesselInformationForm(props) {
    return (
    <Container>
        <LabeledInput label='Capacity' name='capacity' placeholder='Enter vessel capacity' type='number' onChange={props.onChange}/>
        {!props.valid && <Form.Text muted style={{color: 'red'}}>
                            <p style={{color: 'red'}}>{props.errors.capacity}</p>
                        </Form.Text>
        }
        <LabeledInput label='Vessel length' name='vesselLength' placeholder='Enter vessel length' type='number' onChange={props.onChange}/>
        {!props.valid && <Form.Text muted>
                            <p style={{color: 'red'}}>{props.errors.vesselLength}</p>
                        </Form.Text>
        }
        
        <VesselCheckbox onChange={props.onChange}/>

        <EngineForm onChange={props.onChange}/>

        <EquipmentCheckbox label='Fishing equipment' name='fishingEquipment' list={['Stap', 'Bolji stap']} onCheck={props.onCheck}/>
        <EquipmentCheckbox label='Navigation equipment' name='navigationEquipment' list={['Radar', 'Policijski radar']} onCheck={props.onCheck}/>
        
        <PhotoUploadForm onUpload={props.onUpload}/>
        {!props.valid && <Form.Text muted>
                            <p style={{color: 'red'}}>{props.errors.photos}</p>
                        </Form.Text>
        }

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
            {!props.valid && <Form.Text muted style={{color: 'red'}}>
                                <p style={{color: 'red'}}>{props.errors.from}</p>
                            </Form.Text>
            }
            <Form.Label>To</Form.Label>
            <Form.Control type='date' name='to' onChange={props.onChange}/>
            {!props.valid && <Form.Text muted style={{color: 'red'}}>
                                <p style={{color: 'red'}}>{props.errors.to}</p>
                            </Form.Text>
            }
        </Form.Group>
    );
}