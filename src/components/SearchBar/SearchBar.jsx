import { ErrorMessage, Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

const SearchBar = ({ onSubmit }) => {
  const searchForm = {
    initialValues: {
      query: "",
    },
    schema: Yup.object({
      query: Yup.string().min(1, "too short").required("Required"),
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
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
