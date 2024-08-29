import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data?.results.find((e) => e.id === id);
};

export default useGenre;
