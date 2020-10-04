export const createArticle = (article) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const { profile } = getState().firebase;
  const { uid } = getState().firebase.auth;
  firestore
    .collection('articles')
    .add({
      ...article,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: uid,
      createdAt: new Date(),
    })
    .then(() => dispatch({ type: 'CREATE_ARTICLE', article }))
    .catch((error) => dispatch({ type: 'CREATE_ARTICLE_ERROR', error }));
};
