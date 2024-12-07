import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { searchImage } from "./utils/api-search";

import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

function App() {
  const [query, setQuery] = useState({ value: "" });
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);

  const search = async (query) => {
    setIsLoading(true);
    setIsError(false);
    setPage(1);
    setImages([]);
    setTotalResults(0);
    setQuery({ value: query });
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await searchImage(query.value, page);
        setImages((prevImages) => [...prevImages, ...res.results]);
        if (page === 1) setTotalResults(res.total);
      } catch {
        toast.error("Coud not connect to API");
        setIsError(true);
      } finally {
        // remove loader
        setIsLoading(false);
      }
    };
    if (query.value) fetchImages();
  }, [query, page]);

  const openModal = (currnetImage) => {
    setModalIsOpen(true);
    setCurrentImage(images[currnetImage]);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Toaster position="top-right" />
      <Header search={search} />
      <Container>
        {images.length > 0 ? (
          <ImageGallery images={images} openModal={openModal} />
        ) : (
          !isLoading &&
          query.value &&
          !isError && <ErrorMessage msg="Not found any images" />
        )}
        {isError && <ErrorMessage />}
        {images.length < totalResults && (
          <LoadMoreBtn onClick={() => setPage(page + 1)} />
        )}

        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          img={currentImage}
        />
      </Container>
    </>
  );
}

export default App;
