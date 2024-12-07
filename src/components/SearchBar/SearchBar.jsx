import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const searchForm = (e) => {
    e.preventDefault();
    onSubmit(e.target[0].value);
  };

  return (
    <form name="searchForm" onSubmit={searchForm} className={css.form}>
      <input
        type="text"
        autoComplete="off"
        id="query"
        name="query"
        className={css.bar}
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit" className={css.btn}>
        <IconContext.Provider value={{ color: "#08090a", size: "25px" }}>
          <AiOutlineSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default SearchBar;
