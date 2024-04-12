import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movie}>
          <div
            id={styles.background_image}
            style={{
              backgroundImage: `url(${movie.background_image})`,
            }}
          >
            <div className={styles.contents_box}>
              <div id={styles.poster_box}>
                <img
                  id={styles.cover_image}
                  src={movie.medium_cover_image}
                  alt={movie.title}
                />
              </div>
              <div id={styles.info_box}>
                <h1>{movie.title}</h1>
                <h2>{movie.year}</h2>
                <h2>{movie.genres.map((g) => g).join(" / ")}</h2>
                <div className={styles.rating_row}>
                  <span className={styles.emoji}>♥</span>
                  <span>{movie.like_count}</span>
                </div>
                <div className={styles.rating_row}>
                  <span className={styles.icon}>
                    <img
                      width="50px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                      alt="IMDb logo"
                    />
                  </span>
                  <span>{movie.rating}/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
