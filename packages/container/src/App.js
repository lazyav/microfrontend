import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassname = createGenerateClassName({
  productionPrefix: "ca",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider createGenerateClassName={generateClassname}>
        <div>
          <Header></Header>
          <MarketingApp></MarketingApp>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
