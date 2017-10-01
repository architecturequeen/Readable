const recentPosts = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
 		  author: action.author
        }
      ]
    default:
      return state
  }
}

export default recentPosts