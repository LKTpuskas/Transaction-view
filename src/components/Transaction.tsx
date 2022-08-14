import * as React from "react";
import styled from "styled-components";
import { StyledLi } from "../styles/UtilityStyles";

import { TransactionProps } from "../types/HomeAccount";
import { CURRENCY_SYMBOLS } from "../utils/constants";

const TransactionWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px;
`

const StyledTable = styled.table`
  border-radius: 12px;
  background: white;
  padding: 24px;
  border-collapse: collapse;
`;

const StyledTd = styled.td`
  padding: 12px;
`;

const StyledTh = styled.th`
  text-align: left;
  padding: 12px;
`;

const StyledSpan = styled.span`
padding-right: 8px;
&:last-child {
  padding-right: 0;
}
`;
const StyledTr = styled.tr<{ isTrItem?: boolean }>`
  &:nth-child(odd) {
    background: ${({ isTrItem }) => isTrItem ? '#f7f7ff' : 'white'};
  }
`;

const StyledH2 = styled.h2`
  color: #4f4f4f;
`

export function Transaction({
  transactions,
}: {
  transactions: TransactionProps[];
}) {
  return (
    <TransactionWrapper>
      <StyledH2>Transactions</StyledH2>
      <StyledTable>
        <tbody>
          <StyledTr>
            <StyledTh>
              <StyledLi>Category</StyledLi>
            </StyledTh>
            <StyledTh>
              <StyledLi>Description</StyledLi>
            </StyledTh>
          </StyledTr>
          {transactions.map(
            ({ description, category_title, amount, date, id }, index) => (
              <StyledTr key={`${id}-${index}`} isTrItem>
                <StyledTd>{category_title}</StyledTd>
                <StyledTd>{description}</StyledTd>
                <StyledTd>
                  <StyledSpan>
                    {CURRENCY_SYMBOLS?.[amount.currency_iso] || amount.currency_iso}
                  </StyledSpan>
                  <StyledSpan>
                    {amount.value}
                  </StyledSpan>
                </StyledTd>
                <StyledTd>{date}</StyledTd>
              </StyledTr>
            )
          )}
        </tbody>
      </StyledTable >
    </TransactionWrapper>

  );
}
