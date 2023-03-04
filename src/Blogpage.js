import react from 'react';
import { Modal,ModalHeader,ModalBody,Form,FormGroup ,Label,ModalFooter,Button,Col,Input} from 'reactstrap';

export default function Blogpage(props){
    return(
        <>
        <div>
          <div className='blogmodal'>
        <Modal isOpen = {props.isToggleBlog} toggle={props.toggleBlogDetail}>
        <ModalHeader toggle={props.toggleBlogDetail}
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
      for="exampletitle"
      sm={2}
    >
    Title
      
    </Label>
    <Col sm={10}>
      <Input
        id="exmpletitle"
        name="title"
        placeholder="enter a title"
        type="text"
        onChange={props.onValueChange} 
        
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleforTag"
      sm={2}
    >
      Tag
    </Label>
    <Col sm={10}>
      <Input
        id="exampletag"
        name="tag"
        placeholder=" Enter a tag"
        type="text"
        onChange={props.onValueChange}
       
      />
    </Col>
  </FormGroup>
         
  <FormGroup row>
    <Label
      for="exmpleforcontent"
      sm={2}
    >
      Content
    </Label>
    <Col sm={10}>
      <Input
        id="examplecontent"
        name="content"
        placeholder="Enter a content"
        type="text"
        onChange={props.onValueChange}
        
      />
    </Col>
  </FormGroup>
  
  </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.BlogsCreateSubmit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={props.toggleBlogDetail}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      </div>
      </div>
     
        </>
    )
}