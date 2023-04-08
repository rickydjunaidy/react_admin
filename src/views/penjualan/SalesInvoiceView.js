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
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const SalesInvoiceView = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>List Sales Invoice</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
            <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Kode Sales Invoice</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Total Penjualan</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell scope="row">1</CTableDataCell>
                    <CTableDataCell>2023-01-01</CTableDataCell>
                    <CTableDataCell>ASIA-SI-001</CTableDataCell>
                    <CTableDataCell>Rp 3.000.000,00 </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SalesInvoiceView	
