import ScrollToTop from "components/actions/ScrollTop";
import RootUIProvider from "components/providers/RootUIProvider";
import { TabProvider } from "hooks/useTabLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "routes";
import GlobalStyle from "styles/global/globalStyle";

function App() {
  return (
      <BrowserRouter>
          <GlobalStyle />
          <ScrollToTop />
          <RootUIProvider>
              <TabProvider>
                  <Routes>
                      <Route path={ROUTES.main} element={<div></div>} />
                      <Route path={ROUTES.search} element={<div></div>} />
                      <Route path={ROUTES.contract} element={<div></div>} />
                      <Route path={ROUTES.transaction} element={<div></div>} />
                  </Routes>
              </TabProvider>
          </RootUIProvider>
      </BrowserRouter>
  );
}

export default App;
