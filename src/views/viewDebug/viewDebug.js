import { CCard, CRow, CCardBody, CCardHeader, CForm, CFormInput, CFormLabel } from "@coreui/react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from "react"


const ViewDebug = () => {
    const [inputMe, setInputMe] = useState("Hello useState ReactJS")

    const handleInputChange = (event) => {
        setInputMe(event.target.value);
      };
    
    return (
        <CRow>
            <CCard className="mb-4">
                <CCardHeader>
                    <Navbar>
                        <Container>
                            <strong>DEBUG MODE</strong>
                        </Container>
                    </Navbar>
                </CCardHeader>
                <CCardBody>
                    <CForm>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Input Me:</CFormLabel>
                        <CFormInput
                            type="text"
                            id="name"
                            placeholder='Input some text to change below label!'
                            onChange={ handleInputChange }
                            value={ inputMe }
                        />
                        </div>
                    </CForm>
                    <strong>
                        <h1>{ inputMe }</h1>
                    </strong>
                </CCardBody>
            </CCard>
        </CRow>

    )
}

export default ViewDebug