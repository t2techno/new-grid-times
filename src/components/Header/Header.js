import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <HWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <LaptopUpLogo>
            <Logo />
          </LaptopUpLogo>
          <ActionGroup>
            <TabletDownButton>
              <User size={24} />
            </TabletDownButton>
            <LaptopUpSubscribe>
              <SubscribeButton>SUBSCRIBE</SubscribeButton>
              <p>
                <i>Already a subscriber?</i>
              </p>
            </LaptopUpSubscribe>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <TabletDownLogo>
        <Logo />
      </TabletDownLogo>
    </HWrapper>
  );
};

const HWrapper = styled.header`
  position: relative;
  max-width: calc(1200 / 16) rem;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    background: revert;
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  
@media(${QUERIES.laptopAndUp}){
  align-items: baseline;
}
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const TabletDownLogo = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const LaptopUpLogo = styled(MaxWidthWrapper)`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const TabletDownButton = styled.button`
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const LaptopUpSubscribe = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const SubscribeButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border-radius: 4px;
  padding: 11px 24px;
  height: min-content;
`;

export default Header;
