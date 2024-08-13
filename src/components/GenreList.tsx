import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
