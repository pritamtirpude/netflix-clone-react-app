import { useState } from "react";

const ReadMoreLess = ({ children }) => {
  const [readMoreLess, setReadMoreLess] = useState(false);

  const toggleButton = () => setReadMoreLess(!readMoreLess);
  return (
    <div>
      <p>{readMoreLess ? children : children.slice(0, 100)}</p>
      <strong onClick={toggleButton} style={{ cursor: "pointer" }}>
        {readMoreLess ? " read less..." : " read more..."}
      </strong>
    </div>
  );
};

export default ReadMoreLess;
