import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { searchImage } from "./utils/api-search";

import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);
  const infoImg = useRef();

  const search = async (userQuery) => {
    if (userQuery.trim() == "") {
      toast.error("You cannot search empty string!");
      return;
    }
    if (userQuery === query) {
      toast.success("You alredy search this!");
      return;
    }
    setIsError(false);
    setPage(1);
    setImages([]);
    setTotalResults(0);
    setQuery(userQuery);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await searchImage(query, page);
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
    if (query) fetchImages();
  }, [query, page]);

  const openModal = (currnetImage) => {
    setModalIsOpen(true);
    setCurrentImage(images[currnetImage]);
  };
  const afterOpenModal = () => {
    infoImg.current.style.opacity = 1;
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
          query &&
          !isError && <ErrorMessage msg="Not found any images" />
        )}
        {isError && <ErrorMessage />}
        {images.length < totalResults && (
          <LoadMoreBtn onClick={() => setPage(page + 1)} />
        )}

        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          afterOpenModal={afterOpenModal}
          infoImg={infoImg}
          img={currentImage}
        />
        <ToTopBtn />
      </Container>
    </>
  );
}

export default App;
