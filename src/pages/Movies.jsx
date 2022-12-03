import { useState, useEffect } from 'react';
import { fetchFilmsByQuery } from 'api/api';
import { useSearchParams} from 'react-router-dom';
import { Search } from 'components/SearchBar/Search';
import { MovieList } from 'components/MovieList/MovieList';
import { Wrapper } from './Movies.styled';
import { MovieWrapper } from "./Home.styled";
import { Notification,Toast } from 'components/Notification/Notification';
import PaginationButtons from 'components/Pagination/Pagination';

const Movies = () => {
  const [status, setStatus] = useState('idle')
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  const search = searchParams.get("name") ?? '';
  const pageURL = searchParams.get("page") || 1;
  

  const handleSubmit = e => {
  e.preventDefault();
  setSearchParams({ name: e.target.elements.query.value, page: pageURL})
    
  };

  const handleClickPagination = (page) => {
    setPage(page);
    setSearchParams( { name: search,  page: page})
  }
  useEffect(() => {
   
   if (!search) return
   const getFetch = async () => {
      try {
        const result = await fetchFilmsByQuery(search, pageURL);
        setSearchResults([...result.data.results])
        setPage(result.data.page)
        setTotalPages(result.data.total_pages)

        if (searchResults.length === 0) {
          throw new Error();
        }
        setStatus("resolved")
        
      } catch (err) {
        setStatus("rejected")
        Notification();
      }
    }
    getFetch();
  }, [page, pageURL, search, searchParams, searchResults.length])

  if (status === "idle") {
    return (
    <Wrapper>
      <Search
        onSubmit={handleSubmit}
        value={search}
        />
    </Wrapper>
    )
  }
  if (status === "pending") {
    return (
      <Wrapper>
      <Search
        onSubmit={handleSubmit}
        value={search}
        />
      </Wrapper>
    )
  }

  if (status === "resolved") {
    return (
    <Wrapper>
      
      <Search
        onSubmit={handleSubmit}
        value={search}
        />
      {searchResults && (
        <MovieWrapper>
          <MovieList trendingFils={searchResults } />
          <PaginationButtons
            page={page}
            handleClick={handleClickPagination}
            totalPages={totalPages}
          />
        </MovieWrapper>
      )}
    </Wrapper>
  );
  }
  if (status === "rejected") {
    return (
      <Wrapper>
      
      <Search
        onSubmit={handleSubmit}
        value={search}
        />
      <Toast/>
    </Wrapper>
    )
  }
};

export default Movies