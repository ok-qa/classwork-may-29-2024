import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setIsLoading(true);
        const data = await getArticlesApi();
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getArticles();
  }, []);

  return <></>;
}

export default App;
