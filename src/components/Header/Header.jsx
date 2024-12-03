import SearchBar from "../SearchBar/SearchBar";
import css from "./Header.module.css";

const Header = ({ search }) => {
  return (
    <header className={css.header}>
      <SearchBar onSubmit={search} />
    </header>
  );
};

export default Header;
