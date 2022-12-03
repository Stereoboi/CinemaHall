import { fetchFilms } from "api/api";
import { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { MovieWrapper } from "./Home.styled";
import PaginationButtons from "components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";


const Home = () => {
  const [trendingFils, setTrendingFils] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page") || 1 ;
   
  useEffect(() => {

    const getFetch = async () => {
      try {
        const result = await fetchFilms(pageParam);
        setTrendingFils([...result.data.results])
        setTotalPages(result.data.total_pages)
        setPage(result.data.page)
      } catch (err) {
        console.log('error');
      }
    }
    getFetch();
  }, [pageParam, totalPages])

  const handleClickPagination = (page) => {
    setSearchParams({ page: page })
    setPage(page)
  }
  
  return (
    <MovieWrapper>
      <MovieList trendingFils={trendingFils} />
      <PaginationButtons
        page={page}
        handleClick={handleClickPagination}
        totalPages={totalPages}
      />
    </MovieWrapper>
  );
};

export default Home