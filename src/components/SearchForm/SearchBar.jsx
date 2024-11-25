import css from "./SearchForm.module.css";
import { Form, Formik, Field } from "formik";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (!values.search) {
      return toast.error("Please fill in the field");
    } else {
      onSearch(values.search);
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
          <Toaster />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
