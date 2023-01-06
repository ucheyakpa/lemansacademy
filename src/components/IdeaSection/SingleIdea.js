import {
  IdeaContent,
  IdeaImage,
  Image,
  IdeaText,
  Heading,
  Para,
} from "./IdeaElements";

const SingleIdea = ({item}) => {
  return (
    <IdeaContent>
      <IdeaImage>
        <Image height="100" width="100" src={item.image} />
      </IdeaImage>
      <IdeaText>
        <Heading>{item.heading}</Heading>
        <Para>{item.text}</Para>
      </IdeaText>
    </IdeaContent>
  );
};

export default SingleIdea;
