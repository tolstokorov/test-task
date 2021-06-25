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
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../../store/actions/editUser';
import { deleteUser } from '../../store/actions/deleteUser';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../../store/actions/getUsers';

const User = ({usersData, match, onEdit, onDelete, refreshUsers}) => {
  const id =  match.params.id;
  const user = usersData.find( user => user.id.toString() === id)
  const [firstNameValue, setFirstNameValue] = useState(user.firstName);
  const [lastNameValue, setLastNameValue] = useState(user.lastName);
  const [emailValue, setEmailValue] = useState(user.email);
  const [usernameValue, setUsernameValue] = useState(user.username);
  const [passwordValue, setPasswordValue] = useState(user.password);

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
            onEdit(id, {
              firstName: firstNameValue,
              lastName: lastNameValue,
              email: emailValue,
              username: usernameValue,
              password: '1234'
            });
            refreshUsers();
            history.push('/users');
          }} type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Edit</CButton>&nbsp;
          <CButton onClick={ () => {
            onDelete(id);
            refreshUsers();
            history.push('/users');
          } }
          type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Delete</CButton>
        </CCardFooter>
      </CCard>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData
  };
};

export default connect(mapStateToProps, {
  onEdit: editUser,
  onDelete: deleteUser,
  refreshUsers: getUsers
})(User);
