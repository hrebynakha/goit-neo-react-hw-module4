import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { searchImage } from "./utils/api-search";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query) => {
    try {
      setIsLoading(true);
      const res = await searchImage(query);
      setImages(res);
    } catch {
      toast.error("Coud not connect to API");
    } finally {
      // remove loader
      setIsLoading(false);
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <Header search={search} />
      {images.length > 0 ? <ImageGallery images={images} /> : <p>Not found</p>}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
