import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'

import { DocsExample } from 'src/components'

const SalesInvoiceView = () => {
  function currentDate() {
    const today = new Date();
    const curdate = new Date(today).toISOString().split('T')[0] // yyyy-mm-dd
    return curdate
  }

  function getNomerNota() {
    // const { data, loading, error } = useFetch('http://localhost/react/api/sales_invoice/sales_invoice.php')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Buat Sales Invoice Baru</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Nomer Nota</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    placeholder='AS23040001....'
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Tanggal Nota</CFormLabel>
                  <CFormInput
                    type="Date"
                    id="tanggal"
                    defaultValue={currentDate()}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Pelanggan</CFormLabel>
                  <CFormInput 
                    type="customer"
                    id="customer"
                    defaultValue="PT. ANTANG GUNUNG MERATUS"
                  ></CFormInput>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Alamat</CFormLabel>
                  <CFormInput 
                    type="customer"
                    id="customer"
                    placeholder=''
                    defaultValue="Jl. A. Yani Km. 125, Desa Idamanggala, Kab. HSS, Kalimantan Selatan"
                  ></CFormInput>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SalesInvoiceView	
