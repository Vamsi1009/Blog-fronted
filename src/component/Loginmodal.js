import react from 'react';
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,Form,FormGroup,Label,Input,Col} from 'reactstrap';

export default function Loginmodal(props){
    return(
        <>
           <Modal isOpen={props.isLoginModal} toggle={props.toggleLoginModal}>
        <ModalHeader toggle={props.toggleLoginModal}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form>
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
        name="EmailforLogin"
        placeholder="with a placeholder"
        type="Email"
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
        name="PasswordforLogin"
        placeholder="password"
        type="Password"
        onChange={props.onValueChange}
      />
    </Col>
  </FormGroup>
  
  </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onLoginSubmit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={props.toggleLoginModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}