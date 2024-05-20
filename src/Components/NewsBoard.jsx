import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

const [articles,setArticles] = useState([]);

useEffect(()  =>   {
  let url  = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  fetch(url).then(response=>  response.json()).then(data=> setArticles(data.articles));

},[category])


  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return  <NewsItem key = {index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}  />
      })}

    </div>
  )
}

export default NewsBoard



// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         const response = await fetch(url);
//         const data = await response.json();

//         // Check if articles exist and are an array
//         if (data.articles && Array.isArray(data.articles)) {
//           setArticles(data.articles);
//         } else {
//           setArticles([]);
//         }
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchArticles();
//   }, [category]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2>
//       {articles.length > 0 ? (
//         articles.map((news, index) => (
//           <NewsItem
//             key={index}
//             title={news.title}
//             description={news.description}
//             src={news.urlToImage}
//             url={news.url}
//           />
//         ))
//       ) : (
//         <p className="text-center">No news available</p>
//       )}
//     </div>
//   );
// };

// export default NewsBoard;




