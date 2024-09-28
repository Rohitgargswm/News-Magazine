import React, { useEffect, useState } from 'react';
import Newsitems from './newsitems';



const Newsboard = ({category}) => {
    const [data, setArticles] = useState([]);
    const [error, setError] = useState(null); // Define the error state here
  

useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://api.mediastack.com/v1/news?access_key=817871c4e9260bb684443af00906d7e6&countries=in&category=${category}`;
        console.log('Fetching news from:', url);
        let response = await fetch(url);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to fetch news articles');
        }
        let dataStore = await response.json();
        console.log('Fetched data:', dataStore);
  
        if (Array.isArray(dataStore.data)) {
          console.log("Hi");
          console.log(dataStore.data);
          setArticles(dataStore.data);
          
        } else {
          setError('No articles found');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      }
    };
  
    fetchNews();
  }, [category]);

  return (
    <div>
    <h2 className="text-center">
      Latest <span className="badge bg-danger">NEWS</span>
    </h2>

    {error ? (
      <p className="text-center text-danger">{error}</p>
    ) : data.length === 0 ? (
      <p className="text-center">Loading news...</p>
    ) : (
      data.map((news, index) => (
        <Newsitems
          key={index}
          title={news.title}
          description={news.description}
          src={news.image} // Assuming 'image' field in the response
          url={news.url}
  
        />
      ))
    )}
  </div>
      
      );
}
export default Newsboard