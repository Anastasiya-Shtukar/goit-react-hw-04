import css from "./LoadMore.module.css";

const LoadMore = ({ moreBtn }) => {
  return (
    <div className={css.loadDiv}>
      <button type="submit" onClick={moreBtn} className={css.LoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMore;
