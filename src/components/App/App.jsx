import "./App.css";
import SearchBar from "../SearchForm/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";

const API_KEY = "Qz-hZnFsoS3cXUwX1ShglZWG854bArG6V8NJkBVFo-A";

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const serchParams = new URLSearchParams({
    query: `"${word}"`,
    client_id: `${API_KEY}`,
    page: `${page}`,
    per_page: 10,
  });

  useEffect(() => {
    async function serchImage() {
      setImages([]);
      const url = `https://api.unsplash.com/search/photos?${serchParams}`;

      try {
        const response = await axios.get(url);

        return setImages(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(word);
    serchImage();
  }, [word]);

  const wordSearch = (useWord) => {
    setWord(useWord);
    console.log(word);
    setPage(+1);
  };

  return (
    <>
      <SearchBar onSearch={wordSearch} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
