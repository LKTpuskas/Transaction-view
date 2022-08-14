import * as React from "react";
import styled from "styled-components";
import { ContentSection } from "../styles/UtilityStyles";

import HomeAccount from "./HomeAccount";

const MainWrapper = styled.main`
  margin: 8px;
  height: 100vh;
`;



const Header = styled.header`
  color: #4f4f4f;
  font-size: 32px;
  margin-bottom: 28px;
  margin-left: 24px;
`;

const Content = () => {
  return (
    <MainWrapper>
      <ContentSection>
        <Header>
          <h1>
            Bud
          </h1>
        </Header>
      </ContentSection>
      <ContentSection isAccountView>
        <HomeAccount />
      </ContentSection>
    </MainWrapper>
  );
};

export default Content;
