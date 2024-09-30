import { SimpsonsCardProps } from "./types";
import { CardWrapper, Image, CardItem } from "./styles";

function SimponsCard({
  firstName,
  lastName,
  avatar,
  job,
  hobby = "No Hobby",
}: SimpsonsCardProps) {
  const getSimpsonName = ():string => {
    return `${firstName} ${lastName}`;
  };

  return (
    <CardWrapper>
      <Image src={avatar} alt="Avatar" />
      <CardItem>Full name: {getSimpsonName()} </CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </CardWrapper>
  );
}

export default SimponsCard;
