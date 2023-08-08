export function Movies(movies) {
    let movies_html = `<div class="row">`

    movies.forEach(movie => {
        const image = (movie.backdrop_path !== null) ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'http://127.0.0.1:5500/assets/images/noimage.png'
    
        movies_html += `
        <div class="col-md-3 col-sm-12 mb-3">
            <div class="card" style="height: 300px">
                <img src="${image}" class="card-img-top" alt="${movie.original_title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.original_title}</h5>
                    <div class="card-text d-flex align-items-center justify-content-between">
                        <div>
                            <span><i class="bi bi-calendar-check"></i> ${movie.release_date}</span>
                            <br />
                            <span><i class="bi bi-star"></i> ${movie.vote_average} / 10</span>
                        </div>
                        <a href="movie.html?id=${movie.id}" class="btn btn-sm btn-outline-secondary"><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    movies_html += `</div>`

    return movies_html
}