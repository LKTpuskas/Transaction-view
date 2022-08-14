import * as React from "react";

import useFilterData from "../hooks/useFilterData";
import { Column, Wrapper } from "../styles/UtilityStyles";

import { Balance } from "./Balance";
import { Provider } from "./Provider";
import { Transaction } from "./Transaction";

function HomeAccount() {
  const { data, error } = useFilterData()

  if (!data || error) {
    return (
      <Wrapper>
        <h2>
          {!!error ? (error as string).toString() : "LOADING"}
        </h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Column>
        <Transaction transactions={data.transactions} />
      </Column>
      <Column>
        <Provider {...data.provider} />
        <Balance {...data.balance} />
      </Column>
    </Wrapper>
  );
}

export default HomeAccount;
