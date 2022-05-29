import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { LoadMoreContainer } from "./loadmore.styles";

const LoadMore = ({ content, loadMore, setLoadMore }) => {
  const handleLoadMore = () => {
    if (loadMore === 6) {
      setLoadMore(content.length);
    } else {
      setLoadMore(content.length - 14);
    }
  };

  return (
    <LoadMoreContainer>
      <hr />
      <motion.button
        onClick={handleLoadMore}
        className="load-more-btn"
        whileHover={{ scale: 1.2, rotate: 360 }}
      >
        {loadMore !== content.length ? (
          <FaArrowDown style={{ color: "white" }} size={"2rem"} />
        ) : (
          <FaArrowUp style={{ color: "white" }} size={"2rem"} />
        )}
      </motion.button>
    </LoadMoreContainer>
  );
};

export default LoadMore;
