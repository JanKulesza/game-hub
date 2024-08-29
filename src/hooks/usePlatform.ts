import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((e) => e.id === id);
};

export default usePlatform;
