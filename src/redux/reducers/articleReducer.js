const initialState = {
  //
};

export const articleReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'CREATE_ARTICLE':
      console.log('created article', action.article);
      break;

    case 'CREATE_ARTICLE_ERROR':
      console.log('created article error', action.error);
      break;

    default:
      return newState;
  }
  return newState;
};
