import  Axios from 'axios'

const apiMovie = Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = `${process.env.REACT_APP_API_KEY}`
    req.headers['Content-Type'] = 'application/json;charset=utf-8'     
    return req;
})


export default apiMovie;

export const apiMovieMap = m => ({
    id:m.id,
    img:`https://image.tmdb.org/t/p/w500${m.poster_path}`,
    poster_path :m.poster_path,
    title: m.title,
    details:`${m.release_date === undefined? '':`${m.release_date} | `} ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview
  })


export const apiTvMap = m => ({
    id:m.id,
    img:`https://image.tmdb.org/t/p/w500${m.poster_path}`,
    title: m.original_name,
    details:`${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview
  })

  

