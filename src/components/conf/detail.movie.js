
 export const detailMovie = (id,title,typeMovie,history) => {
    history.push({
      pathname:'/detail',
      search:`${title}`,
      state: {id,typeMovie}
    })
  }


  export const detailTv = (id,title,typeMovie,history) => {
    history.push({
      pathname:'/detail',
      search:`${title}`,
      state: {id ,typeMovie}
    })
  }


  

