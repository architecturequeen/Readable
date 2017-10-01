let nextPostId = 0;

 const createPost = text => {
 	console.log("createPost called")
  return {
    type: 'CREATE_POST',
    id: nextPostId++ ,
    text,
    author: '[author placeholder]'
  }
}

export default createPost;