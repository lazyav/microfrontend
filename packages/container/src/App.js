import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles/";

const gClassName = createGenerateClassName({
  productionPrefix: "ca",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={gClassName}>
        <div>
          <Header></Header>
          <MarketingApp></MarketingApp>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
