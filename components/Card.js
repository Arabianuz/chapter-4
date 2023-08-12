import styled from "styled-components";
import Link from "next/link";

const CardWrapper = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
`;
const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
  color: black;
`;
const Count = styled.span`
  color: darkGray;
`;

function Card({ title, views, answers, question_id }) {
  return (
    <CardWrapper>
      <Link key={question_id} href={`/questions/${question_id}`} passHref>
        <Title>{title}</Title>
      </Link>
      <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
    </CardWrapper>
  );
}
export default Card;
