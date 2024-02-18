import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar, className }) => {
  return (
    <Anchor className={className} href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  border-bottom: ${COLORS.gray[300]} 2px solid;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  &:last-of-type {
    border: none;
    padding-bottom: 0;
  }
  max-width: calc(172 / 16) rem;

  @media (${QUERIES.tabletOnly}) {
    border: none;
    padding-bottom: 0;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (${QUERIES.tabletOnly}) {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
