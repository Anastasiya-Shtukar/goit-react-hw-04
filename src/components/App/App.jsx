import "./App.css";
import SearchBar from "../SearchForm/SearchBar";
import { useState } from "react";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMore from "../LoadMore/LoadMore";
import Loading from "../Loading/Loading";
import ImageModal from "../Modal/Modal";

const API_KEY = "Qz-hZnFsoS3cXUwX1ShglZWG854bArG6V8NJkBVFo-A";

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  async function serchImage(useWord, currentPage) {
    try {
      setLoading(true);

      const serchParams = new URLSearchParams({
        query: `"${useWord}"`,
        client_id: `${API_KEY}`,
        page: `${currentPage}`,
        per_page: 12,
      });

      const url = `https://api.unsplash.com/search/photos?${serchParams}`;

      const response = await axios.get(url);
      if (currentPage === 1) {
        return setImages(response.data.results);
      }
      if (currentPage > 1) {
        setImages((prev) => {
          return [...prev, ...response.data.results];
        });
      }
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const wordSearch = (words) => {
    setWord(words);
    console.log(word);
    serchImage(words, 1);
  };

  const moreBtn = () => {
    let nextPage = page + 1;
    setPage(nextPage);
    serchImage(word, nextPage);
  };

  const openModal = (image) => {
    setImageModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setImageModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={wordSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {error && (
        <p className="error">
          Oops, something seems to have gone wrong, plaese try again later...
        </p>
      )}
      {loading && <Loading />}
      {images.length > 0 && <LoadMore moreBtn={moreBtn} />}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onRequestClose={closeModal}
          isOpen={imageModal}
        />
      )}
    </>
  );
}

export default App;
