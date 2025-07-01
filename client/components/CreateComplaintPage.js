import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { createComplaints } from '../redux/complaintsActions';
//import useDispatch to connect to redux store.
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import apiKey from '../../config';

const CreateComplaintPage = props => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [category, setCategory] = useState('Roads');
  const [description, setDescription] = useState('');

  const getTimeStamp = () => {
    let date = new Date();
    return date.toDateString();
  };

  const history = useHistory();

  const handleClick = async () => {
    //get lat and long from zipcode entry
    let latitude;
    let longitude;
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address) + '&key=' + apiKey);
    const data = await response.json();
    console.log("this is your data from geocode api", data);
    latitude = data.results[0].geometry.location.lat;
    longitude = data.results[0].geometry.location.lng;

    //get city from zipcode entry -> look into googleapi
    let city = data.results[0].address_components[2].long_name;

    //send dispatch once we have all the complaints to action createComplaints
    dispatch(createComplaints(
      {
        email: email,
        address: address,
        city: city,
        zipcode: zipcode,
        latitude: latitude,
        longitude: longitude,
        category: category,
        description: description,
        status: "Not checked",
        created_on: getTimeStamp()
      }
    ));
      //redirect to root after submitting new complaint
    history.push("/")
  };

  return (
    <Container>
      <h3>Explique los motivos de la Queja</h3>
      <Form className="needs-validation">
        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Address, City, and State" value={address} onChange={(event) => setAddress(event.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="formZipcode">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="text" placeholder="Zipcode" value={zipcode} onChange={(event) => setZipcode(event.target.value)} required/>
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Escoger Queja</Form.Label>
            <Form.Control as="select" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="Robo de agua">Robo de agua</option>
            <option value="Banqueta obstruida">Banqueta obstruida</option>
            <option value="Conflicto vecinal">Conflicto vecinal</option>
            <option value="Alcantarilla destapada">Alcantarilla destapada</option>
            <option value="Desperdicio de Agua">Desperdicio de Agua</option>
            <option value="Playa cerrada">Playa cerrada</option>
            <option value="Corrupcion de servidores publicos">Corrupcion de servidores publicos</option>
            <option value="Comercio sin licencia">Comercio sin licencia</option>
            <option value="Arbol obstruyendo señalizacion">Arbol obstruyendo señalizacion</option>
            <option value="Maltrato animal">Maltrato animal</option>
            <option value="Casa abandonada insegura">Casa abandonada insegura</option>
            <option value="Vehiculo abandonado">Vehiculo abandonado</option>
            <option value="Construccion sin licencia">Construccion sin licencia</option>
            <option value="Fuga de agua">Fuga de agua</option>
            <option value="Bache en pavimento">Bache en pavimento</option>
            <option value="Falta de agua">Falta de agua</option>
            <option value="Abuso policial">Abuso policial</option>
            <option value="Lampara sin funcionar">Lampara sin funcionar</option>
            <option value="Camion de basura no paso">Camion de basura no paso</option>
            <option value="Violencia en casa">Violencia en casa</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" placeholder="A Short Description" value={description} onChange={(event) => setDescription(event.target.value)} required/>
        </Form.Group>
        <Button onClick={() => {
          handleClick();
        }}>Hacer Queja</Button>
      </Form>
    </Container>
  )
};

export default CreateComplaintPage;

