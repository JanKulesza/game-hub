import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const createSkeletons = () =>
    skeletons.map((skeleton) => (
      <GameCardContainer key={skeleton}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
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
      {hasNextPage &&
        (isFetchingNextPage ? (
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {createSkeletons()}
          </SimpleGrid>
        ) : (
          <Button marginY={5} onClick={() => fetchNextPage()}>
            Load More
          </Button>
        ))}
    </Box>
  );
};

export default GameGrid;
