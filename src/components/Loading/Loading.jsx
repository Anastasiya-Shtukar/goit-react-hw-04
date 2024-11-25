import css from "./Loading.module.css";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className={css.loading}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="blau"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
