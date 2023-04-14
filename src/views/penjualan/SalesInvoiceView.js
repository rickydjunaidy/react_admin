import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import useFetch from '../../components/useFetch.js';
import { DocsExample } from 'src/components'
import { useNavigate } from "react-router-dom";
import { cibWindows } from '@coreui/icons';

const SalesInvoiceView = () => {
  const { data, loading, error } = useFetch('/api/test')
  const navigate = useNavigate()
  return ( 
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <Navbar>
              <Container>
                <strong>List Sales Invoice</strong>
                <CButton onClick={()=>{
                 navigate('/penjualan/sales_invoice_view/sales_invoice_create')
                }}>Tambah Data</CButton>
              </Container>
            </Navbar>
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
                {
                 data?.data?.result?.map(item => (
                    <CTableRow key={item.id}>
                      <CTableDataCell scope="row">{item.id}</CTableDataCell>
                      <CTableDataCell>{item.tanggal}</CTableDataCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.total_penjualan}</CTableDataCell>
                    </CTableRow>
                  ))
                }
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
