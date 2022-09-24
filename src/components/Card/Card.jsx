import { ListCard, Img, Title, Span } from './Card.styled';
import Box from '../Box';

const Card = ({ item }) => {
  //   const { profile_path } = item;
  //   const viewPoster = profile_path => {
  //     //     if (profile_path === null) {
  //     //       return `${defaultImg}`;
  //     // }
  //     return `https://image.tmdb.org/t/p/w300${profile_path}`;
  //   };
  console.log(item);
  return (
    <ListCard>
      <li class="event__img">
        {/* <Img class="img-src" loading="lazy" src={ } alt="Sports event" /> */}

        <Img
          alt="A lazy image"
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
        />
      </li>
      <Box as="li" mt="8px">
        <Title>Тут будут заголовок</Title>
      </Box>
      <Box as="li" mt="4px">
        <Span class="span">Тут какойто Спан</Span>
      </Box>
      <Box as="li" mt="4px" class="event__place">
        <span>Тут Спан лакация без стиля</span>
      </Box>
    </ListCard>
  );
};

export default Card;
