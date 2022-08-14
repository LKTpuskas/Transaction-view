import * as React from "react";
import { StyledLi, StyledUl } from "../styles/UtilityStyles";

import { ProviderProps } from "../types/HomeAccount";


export function Provider({
  title,
  description,
  sort_code,
  account_number,
}: ProviderProps) {
  return (
    <StyledUl>
      <h2>{title}</h2>
      <StyledLi>{description}</StyledLi>
      <StyledLi>Sort code: {sort_code}</StyledLi>
      <StyledLi>Account number: {account_number}</StyledLi>
    </StyledUl>
  );
}
