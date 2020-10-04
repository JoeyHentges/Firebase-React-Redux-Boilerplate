import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
  const { auth, redirectPath, children, ...restProps } = props;
  const user = !!auth.uid;
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: redirectPath,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(ProtectedRoute);
