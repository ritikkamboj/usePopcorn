import { useEffect,useState } from "react";


const KEY = "4b4b0e0d";

export function useMovies(query)
{
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    useEffect(
        function () {
          const controller = new AbortController();
          const signal = controller.signal;
    
          async function fetchMovies() {
            try {
              setError(""); // that's inetersting its a good practice to update it from zero , before fetching the data
              setIsLoading(true);
              const res = await fetch(
                `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal }
              );
              console.log(res.ok, "apna data ");
              if (!res.ok) {
                console.log("enter in the if condition");
                throw new Error("data is not fetched");
              }
              const data = await res.json();
              console.log(data);
              if (data.Response === "False") throw new Error("Movie not Found");
    
              setMovies(data.Search);
              setError("");
              // setIsLoading(false);
            } catch (err) {
              console.log(err);
              console.error(err.message);
              console.log(err.name);
              if (err.name !== "AbortError") setError(err.message);
            } finally {
              setIsLoading(false);
            }
          }
    
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
        //   handleCloseMovie();
          fetchMovies();
    
          return function () {
            controller.abort();
          };
        },
        [query]
      );

      return {movies, isLoading, error};
}