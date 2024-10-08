import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((el) => (
            <ListItem key={el} paddingY="5px">
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8} />
                <SkeletonText
                  noOfLines={2}
                  spacing="2"
                  skeletonHeight="2"
                  width="100px"
                />
              </HStack>
            </ListItem>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === genreId ? " bold" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
