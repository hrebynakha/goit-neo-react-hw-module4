import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { searchImage } from "./utils/api-search";

import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import "./App.css";
import { ImageModal } from "./components/ImageModal/ImageModal";

function App() {
  const imageRef = useRef();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const search = async (query) => {
    setIsLoading(true);
    setIsError(false);
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotalResults(0);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await searchImage(query, page);
        setImages((prevImages) => [...prevImages, ...res.results]);
        setTotalResults(res.total);
      } catch {
        toast.error("Coud not connect to API");
        setQuery("");
        setIsError(true);
      } finally {
        // remove loader
        setIsLoading(false);
      }
    };
    if (query) fetchImages();
  }, [query, page]);

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
    console.log("Insert target image");
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => imageRef.current.focus(), []);

  return (
    <>
      {isLoading && <Loader />}
      <Toaster position="top-right" />
      <Header search={search} />
      <Container>
        {images.length > 0 ? (
          <ImageGallery images={images} openModal={openModal} />
        ) : (
          !isLoading && query && <ErrorMessage msg="Not found any images" />
        )}
        {isError && <ErrorMessage />}
        {images.length < totalResults && (
          <LoadMoreBtn onClick={() => setPage(page + 1)} />
        )}
        <ImageModal
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </Container>
    </>
  );
}

export default App;
