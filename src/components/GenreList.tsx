import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
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
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
