import react from 'react';
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,Form,FormGroup,Label,Input,Col} from 'reactstrap';

export default function RegisterModal (props){
    return(
        <>
           <Modal isOpen = {props.isRegisterModal} toggle={props.toggleRegisterModal}>
        <ModalHeader toggle={props.toggleRegisterModal}
        style ={{
          textAlign:"center",
          justifyContent:"center",
          paddingLeft:"175px"
        }}>
          Registation
        </ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup row>
    <Label
      for="examplename"
      sm={2}
    >
      Name
    </Label>
    <Col sm={10}>
      <Input
        id="exampleName"
        name="Name"
        placeholder="enter a name"
        type="text"
        onChange={props.onValueChange}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="Email"
        placeholder=" Enter a Email"
        type="mail"
        onChange={props.onValueChange}
      />
    </Col>
  </FormGroup>
         
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="Password"
        placeholder="Enter a password"
        type="password"
        onChange={props.onValueChange}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleGender"
      sm={2}
    >
      Gender
    </Label>
    <Col sm={10}>
      <Input
        id="Gender"
        name="Gender"
        placeholder="Gender"
        type="text"
        onChange={props.onValueChange}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleInterest"
      sm={2}
    >
      Interest
    </Label>
    <Col sm={10}>
      <Input
        id="interest"
        name="interest"
        placeholder="Interset ex.. movies , reading books"
        type="text"
        onChange={props.onValueChange}
      />
    </Col>
  </FormGroup>
  </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onRegisterSubmit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={props.toggleRegisterModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}