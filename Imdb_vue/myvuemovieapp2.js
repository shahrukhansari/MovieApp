// Vue.component('movie-detail',{
//     props:['movie'],
//     template:`
   
//     <div class="card" style="width: 18rem;">
//   <img class="card-img-top" v-bind:src="movie.poster" alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">{{movie.Title}}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>`

// });
new Vue({
    el:"#mymovieapp2",
    data:{
        searhKey:'',
        movieList:[]
    },
    methods:{
        searchMovie(){
            //https://api.themoviedb.org/3/movie/top_rated?api_key=1010ed9446c215ef0a9b648d94554174&language=en-US&page=1
        
            var url='https://api.themoviedb.org/3/movie/upcomming?'+this.searchKey+'api_key=1010ed9446c215ef0a9b648d94554174&language=en-US&page=1';
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesList=data;
            })
        }
    }
});
