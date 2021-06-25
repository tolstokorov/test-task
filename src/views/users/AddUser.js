import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol, CForm,
  CFormGroup,
  CFormText, CInput, CLabel
} from '@coreui/react'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/actions/addUser';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../../store/actions/getUsers';

const AddUser = ({onAdd, refreshUsers}) => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const history = useHistory();

  return (
    <>
      <CCard>
        <CCardHeader>
          Edit user
        </CCardHeader>
        <CCardBody>
          <CForm className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor='hf-text-first-name'>First name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput onChange={ e => setFirstNameValue(e.target.value) }
                value={ firstNameValue } type="text"
                id='hf-text-first-name' name='hf-text-first-name'
                placeholder="Enter first name..." autoComplete="text" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor='hf-text-last-name'>Last name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput onChange={ e => setLastNameValue(e.target.value) }
                value={ lastNameValue } type="text"
                id='hf-text-last-name' name='hf-text-last-name'
                placeholder="Enter last name..." autoComplete="text" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">e-mail</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput onChange={ e => setEmailValue(e.target.value) }
                value={ emailValue } type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." autoComplete="email" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor='hf-text-username'>Username</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput onChange={ e => setUsernameValue(e.target.value) }
                value={ usernameValue } type="text"
                id='hf-text-username' name='hf-text-username'
                placeholder="Enter username..." autoComplete="text" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor='hf-text-password'>Password</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput onChange={ e => setPasswordValue(e.target.value) }
                value={ passwordValue } type="password"
                id='hf-text-password' name='hf-text-password'
                placeholder="Enter password..." autoComplete="text" />
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton onClick={ () => {
            onAdd({
              firstName: firstNameValue,
              lastName: lastNameValue,
              email: emailValue,
              username: usernameValue,
              password: '1234'
            });
            refreshUsers();
            history.push('/users');
          }} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Add</CButton>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default connect(null, {
  onAdd: addUser,
  refreshUsers: getUsers
})(AddUser);
