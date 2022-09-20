import React, { useState ,useEffect} from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import {useParams } from 'react-router-dom'

import { ProfileService } from '../services/ProfileService'

export default function ProfilePage() {

  const { xpColaborador } = useParams()

  const [emailContractor,setEmailContractor] = useState('brayan.neyra.contractor@bbva.com')
  const [codEmpleado,setCodEmpleado] = useState('50261242')
  const [emailNeoris,setEmailNeoris] = useState('brayan.neyra@neoris.com')
  const [nombresApellidos,setNombresApellidos] = useState('Brayan Michel Neyra Uriarte')
  const [pais,setPais] = useState('Perú')
  const [numDocumento,setNumDocumento] = useState('75153630')
  const [fechaNacimiento,setFechaNacimiento] = useState('04/06/1997')
  const [telefono,setTelefono] = useState('(51) 995 224 240')
  const [fechaIngreso,setFechaIngreso] = useState('03/01/2022')
  const [trackPosition,setTrackPosition] = useState('Experienced Developer')
  const[nivelNeoris,setNivelNeoris] =useState('Experienced')
  const[plataforma,setPlataforma] =useState('NextGen')
  const[especialidad,setEspecialidad] =useState('Backend - ASO/APX')
  const[staff,setStaff] =useState('Proyectos')
  const[gerencia,setGerencia] =useState('Banking Systems')
  const[staffer,setStaffer] =useState('DELSY RIOS DIAZ')
  const[techLead,setTechLead] =useState('CAROL ÑAUPAS CARAZA')
  const[scrumMaster,setScrumMaster] =useState('frank.llanos@bbva.com')
  
  const [project,setProject] = useState('SDATOOL-39330 -> Modelo de contactabilidad en Datio')

  const profileService = new ProfileService();

  
  useEffect(() => {
    const getProfileByXp = async () => {
      const profileResponse =  await profileService.getProfileByXp(xpColaborador);
      const profileData  = profileResponse.data;
      //Setear datos que devuelve la api

      // setEmailContractor(profileData.emailContractor)
      // setCodEmpleado(profileData.codEmpleado)
      // setEmailNeoris(profileData.emailNeoris)
      // setNombresApellidos(profileData.nombre + ' '+ profileData.apellido)
      // setPais(profileData.pais)
      // setNumDocumento(profileData.numDocumento)
      // setFechaNacimiento(profileData.fechaNacimiento)
      // setTelefono(profileData.telefono)
      // setFechaIngreso(profileData.fechaIngreso)
      // setTrackPosition(profileData.trackPosition)
      // setNivelNeoris(profileData.nivelNeoris)
      // setPlataforma(profileData.plataforma)
      // setEspecialidad(profileData.especialidad)
      // setStaff(profileData.staff)
      // setGerencia(profileData.gerencia)
      // setStaffer(profileData.staffer)
      // setTechLead(profileData.techLead)
      // setScrumMaster(profileData.scrumMaster)
      // setProject(profileData.project)
    }

    Promise.all([
      getProfileByXp()
    ])
  }, []);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="/img/profile_photo.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <hr />
                <p className="text-muted">{xpColaborador}</p>
                <hr />
                <p className="text-muted ">{emailContractor}</p>
                <hr />
                <p className="text-muted">{codEmpleado}</p>
                <hr />
                <p className="text-muted">{emailNeoris}</p>
               
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="user-alt" />
                    <MDBCardText>{nombresApellidos}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe" />
                    <MDBCardText>{pais}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="address-card" style={{ color: '#333333' }}  />
                    <MDBCardText>{numDocumento}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="calendar-alt" />
                    <MDBCardText>{fechaNacimiento}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="phone-alt" />
                    <MDBCardText>{telefono}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fecha Ingreso</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{fechaIngreso}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Track-Position</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{trackPosition}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nivel Neoris</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{nivelNeoris}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Plataforma</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{plataforma}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Especialidad</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{especialidad}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Staff</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{staff}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gerencia</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{gerencia}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Staffer</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{staffer}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Tech Lead</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{techLead}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Scrum Master</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{scrumMaster}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Proyecto</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{project}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}