export const signIn = (credentials) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const { email, password } = credentials;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => dispatch({ type: 'SIGNIN_SUCCESS' }))
    .catch((error) => dispatch({ type: 'SIGNIN_ERROR', error }));
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
    .catch((error) => dispatch({ type: 'SIGNOUT_ERROR', error }));
};

export const signUp = (newUser) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const { email, password, firstName, lastName } = newUser;
  const firebase = getFirebase();
  const firestore = getFirestore();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const { user } = response;
      return firestore
        .collection('users')
        .doc(user.uid)
        .set({
          firstName,
          lastName,
          initials: firstName[0] + lastName[0],
        });
    })
    .then(() => dispatch({ type: 'SIGNUP_SUCCESS' }))
    .catch((error) => dispatch({ type: 'SIGNUP_ERROR', error }));
};

export const forgotPassword = (email) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => dispatch({ type: 'FORGOT_PASSWORD_SUCCESS' }))
    .catch((error) => dispatch({ type: 'FORGOT_PASSWORD_ERROR', error }));
};
