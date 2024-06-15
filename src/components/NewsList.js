import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NewsColumn = styled.div`
  width: calc(50% - 1rem);
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;

const ErrorMessage = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: red;
  margin-top: 2rem;
`;

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=4bf7933424ab44ef905f6109f4cb823d'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('데이터를 불러오는 중 문제가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingMessage>데이터를 불러오는 중...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <NewsListBlock>
      <Title>오늘의 과학 뉴스</Title>
      <NewsContainer>
        {articles.map((article, index) => (
          <NewsColumn key={index}>
            <NewsItem article={article} />
          </NewsColumn>
        ))}
      </NewsContainer>
    </NewsListBlock>
  );
};

export default NewsList;
