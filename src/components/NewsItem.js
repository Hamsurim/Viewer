import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  padding: 1.5rem 0;

  .thumbnail {
    margin-right: 1.5rem;
    flex: 0 0 120px; 
    
    img {
      display: block;
      width: 100%;
      height: 100px; 
      object-fit: cover;
      border-radius: 8px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    }
  }

  .contents {
    flex: 1;
    padding-left: 1rem;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
    transition: color 0.3s;

    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #007bff;
      }
    }
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.6; 
    color: #666;
    font-size: 1rem; 
  }

  & + & {
    margin-top: 2rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
