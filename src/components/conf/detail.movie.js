
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

   
 export const handleMovieTv = (e,id,title,typeMovie,history) => {
    e.preventDefault()
      switch(typeMovie){
        case'movie':
          detailMovie(id,title,typeMovie,history);  
          break; 
        case'tv':
         detailTv(id,title,typeMovie,history)
         break;
         default:
           console.error()
      }
    }
  

