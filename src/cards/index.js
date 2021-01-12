import React from "react";
import Canyons from "../images/Canyons.jpg";
import Desert from "../images/Desert.jpg";
import Mountains from "../images/Mountains.jpg";
import {
  Container,
  Content,
  Image,
  Title,
  Subtitle,
  Button,
  ContentBox
} from "./styles";

const Cards = props => {
  const items = [
    {
      image: Canyons,
      title: "A starry night",
      subtitle:
        "Look up at the night sky, and find yourself immersed in the amazing mountain range of Aspen.",
      button: "Explore"
    },
    {
      image: Desert,
      title: "Misty mornings",
      subtitle:
        "Capture the stunning essence of the early morning sunrise in the Californian wilderness.",
      button: "Explore"
    },
    {
      image: Mountains,
      title: "Utah sunsets",
      subtitle:
        "Sunsets over the stunning Utah Canyonlands, is truly something much more than incredible.",
      button: "Explore"
    }
  ];
  return (
    <Container>
      {items.map(item => {
        return <Item {...item} key={item.title} />;
      })}
    </Container>
  );
};

const Item = props => {
  const { image, title, subtitle, button } = props;
  return (
    <Content>
      <Image image={image} />
      <ContentBox>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button>{button}</Button>
      </ContentBox>
    </Content>
  );
};

export default Cards;
