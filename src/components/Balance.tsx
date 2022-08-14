import * as React from "react";
import { StyledLi, StyledUl } from "../styles/UtilityStyles";

import { BalanceProps } from "../types/HomeAccount";


export function Balance({ amount, currency_iso }: BalanceProps) {
  return (
    <StyledUl>
      <StyledLi data-testid="balance">
        Balance: {currency_iso}
        {amount}
      </StyledLi>
    </StyledUl>
  );
}
