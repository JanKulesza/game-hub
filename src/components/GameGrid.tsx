import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const createSkeletons = () =>
    skeletons.map((skeleton) => (
      <GameCardContainer key={skeleton}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <SimpleGrid
            padding="10px"
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
          >
            {createSkeletons()}
          </SimpleGrid>
        }
      >
        <SimpleGrid
          padding="10px"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {isLoading && createSkeletons()}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
