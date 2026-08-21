const MovieCard = ({ movie:
    { title, vote_average, poster_path, release_date, original_language, overview } }) => {
    return (
        <div className="movie-card">
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'src/assets/no-movie.png'} alt={title} />
            <div className="mt-4">
                <div className="flex flex-row items-center text-justify-between">
                    <h3>{title}</h3>
                    <p className="text-white pointer-events-none cursor-pointer" title={overview ? overview : ''}>&#9432;</p>
                </div>

                <div className="content">
                    <div className="rating">
                        <img src="src/assets/star.svg" alt="Star Icon" />
                        <span>{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
                    </div>

                    <span>•</span>
                    <p className="lang">{original_language.toUpperCase()}</p>

                    <span>•</span>
                    <p className="year">{release_date ? new Date(release_date).getUTCFullYear() : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;