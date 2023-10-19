import { defineStore } from "pinia";

interface userMovie{
    Poster:string,
    Title:string,
    Year:string,
};
interface Movie extends userMovie{
    Type?:string,
    imdbID?:string
};
interface movieState{
    movies:Movie[],
    details:any
}


export const useMovieStore = defineStore('test', {
    state:():movieState => ({
        movies:[],
        details:{}
    }),
    actions:{
        async getMovies(movie:string){
            const movies = await fetch(`http://www.omdbapi.com/?s=${movie}&page=1&type=movie&apikey=780b3783`);
            const data = await movies.json();
            
            if(data.Response === 'False'){
                throw new Error(data.Error)
            }
            this.$state.movies = data.Search;
            
        },
        async getDatails(title:string){
            const movie = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=780b3783`)
            const data = await movie.json();
            this.$state.details = data;
            
        },
        addUserMovie(mov:userMovie){
            this.$state.movies.push(mov);                        
        },
    },
    getters:{
        allMovies:(state:movieState) => state.movies,
        movieDetails:(state:movieState) => state.details
    }
})