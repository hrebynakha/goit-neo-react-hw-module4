import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiOutlineSearch } from "react-icons/ai";

import css from "./SearchBar.module.css";
import { IconContext } from "react-icons";

const SearchBar = ({ onSubmit }) => {
  const searchForm = {
    initialValues: {
      query: "",
    },
    schema: Yup.object({
      query: Yup.string().required("This field is required"),
    }),
    submit: (values) => {
      onSubmit(values.query);
    },
  };

  return (
    <Formik
      initialValues={searchForm.initialValues}
      onSubmit={searchForm.submit}
      validationSchema={searchForm.schema}
    >
      <Form className={css.form}>
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          className={css.bar}
          id="query"
          name="query"
          placeholder="Search images and photos"
        />
        <ErrorMessage name="query">
          {(msg) => <div className={css.error}>{msg}</div>}
        </ErrorMessage>
        <button className={css.btn} type="submit" onSubmit={onSubmit}>
          <IconContext.Provider value={{ color: "#08090a", size: "25px" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
