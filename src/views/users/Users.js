import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CContainer
} from '@coreui/react'
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/getUsers';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = ({usersData, loading, error, getUsers}) => {
  useEffect(() => {
    getUsers();
  }, []);

  const [pages, setPages] = useState(5);
  useEffect(() => {
    setPages(Math.ceil(usersData.length / 5));
  }, [usersData]);

  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page]);

  return (
    <CContainer xl>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Users
            </CCardHeader>
            <CCardBody>
              {
                error ? <div>error</div> :
                loading ? <div>loading...</div> :
                <CDataTable
                  onFilteredItemsChange={ (tableFiltered) => {
                    setPages(Math.ceil(tableFiltered.length / 5));
                    history.push('/users');
                  } }
                  columnFilter
                  tableFilter
                  sorter
                  items={usersData}
                  fields={[
                    'firstName', 'lastName', 'email', 'username'
                  ]}
                  hover
                  striped
                  itemsPerPage={5}
                  activePage={page}
                  clickableRows
                  onRowClick={(item) => history.push(`/users/${item.id}`)}
                  scopedSlots = {{
                    'status':
                      (item)=>(
                        <td>
                          <CBadge color={getBadge(item.status)}>
                            {item.status}
                          </CBadge>
                        </td>
                      )
                  }}
                />
              }
              <CPagination
                activePage={currentPage}
                onActivePageChange={pageChange}
                pages={Math.max(pages, 1)}
                doubleArrows={true} 
                align="center"
              />
              <div>currentPage: {currentPage}</div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    usersData: state.users.usersData,
    loading: state.users.loading,
    error: state.users.hasError,
  };
}



export default connect(mapStateToProps, {
  getUsers
})(Users);
