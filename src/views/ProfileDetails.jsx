import React, { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function EditButton() {
    const[nombres, setNombres] =  useState('Brayan Michel Neyra Uriarte');
  
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#0C7B76' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="12">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#1B2A4C', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src="/img/profile_photo.jpg"
                    alt="Profile photo" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '110px'  }}>
                  <MDBTypography tag="h5">{nombres}</MDBTypography>
                  <MDBCardText>Perú</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">XP66659</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">XP</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">50261242</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Cod. Empleado</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Información personal</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">DNI: 75153630</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Fecha de nacimiento: 06/04/1997</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Celular: (51) 995 224 240</MDBCardText>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Información Neoris</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Fecha Ingreso: 03/01/2022</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Fecha de Salida: - </MDBCardText>
                    <MDBCardText className="font-italic mb-0">Track-Positiion: Experienced Developer</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Nivel Neoris: Experienced</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Correo Neoris: brayan.neyra@neoris.com</MDBCardText>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Información BBVA</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Plataforma: NextGen</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Especialidad: Backend - ASO/APX</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}