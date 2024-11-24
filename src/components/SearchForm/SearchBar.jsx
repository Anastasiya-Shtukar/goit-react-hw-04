import css from "./SearchForm.module.css";
import { Form, Formik, Field } from "formik";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (!values.search) {
      return alert("Please fill in the field");
    } else {
      onSearch(values.search);
      console.log(onSearch);
    }
    actions.resetForm();
  };

  return (
    <div className={css.divSearch}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <button type="submit" className={css.button}>
            <CiSearch />
          </button>
          <Field type="text" name="search" className={css.input} />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
