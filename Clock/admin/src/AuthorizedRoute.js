import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedUser } from './utils/xhr'

class AuthorizedRoute extends React.Component {

  componentWillMount() {
    getLoggedUser()
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    
    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return logged
          ? <Component {...props} />
          : <Navigate to="/" />
      }} />
    )
  }
}

const stateToProps = ({ loggedUserState }) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)
