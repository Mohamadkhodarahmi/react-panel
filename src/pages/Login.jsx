import { useForm } from 'react-hook-form';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
from 'mdb-react-ui-kit';

import * as Yup from 'yup';
const schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required()
});

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
    };
    const errors = schema.validate(formData);
    if (errors.length > 0) {
        // There are errors in the form data
        alert(errors.join("\n"));
    } else {
        // The form data is valid, do something with it
    }
}
function Login() {

    return (

        <form onSubmit=''>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg'
                                          type='email' size="lg"/>
                                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password'
                                          size="lg"/>

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4'
                                             label='Remember password'/>

                                <MDBBtn size='lg' type='submit'>
                                    login
                                </MDBBtn>

                                <hr className="my-4"/>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </form>
    );
}

export default Login;