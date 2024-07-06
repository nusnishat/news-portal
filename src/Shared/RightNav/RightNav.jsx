import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle  } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bgImage from '../../assets/bg1.png'
const RightNav = () => {
    return (
        <div>
            <div>
                <h5 className='fw-bolder'>Login with</h5>
                <Button className='w-100 my-2' variant="outline-secondary"><FaGoogle className='me-2'/>Google</Button>
                <Button className='w-100' variant="outline-primary"><FaFacebookF className='me-2'/>Facebook</Button>
            </div>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF className='me-2 text-primary'/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2 text-info'/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2 text-danger'/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bgImage} alt="" />
            </div>
        </div>
        
    );
};

export default RightNav;