import { Blogdata } from "@/assets/Assets";

const { createContext, useEffect } = require("react");

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    setData(Blogdata);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const value = { data };

  return <BlogContext.Provider value={value}>
    {children}
    </BlogContext.Provider>;
};
