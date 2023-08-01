import ScrollToTop from "components/actions/ScrollTop";
import RootUIProvider from "components/providers/RootUIProvider";
import { TabProvider } from "hooks/useTabLayout";
import ContractPage from "pages/contract/ContractPage";
import MainPage from "pages/main/MainPage";
import SearchListPage from "pages/search/SearchListPage";
import SearchMapPage from "pages/search/SearchMapPage";
import SearchPage from "pages/search/SearchPage";
import TransactionPage from "pages/transaction/TransactionPage";
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
                        <Route path={ROUTES.main} element={<MainPage />} />
                        <Route path={ROUTES.search} element={<SearchPage />} />
                        <Route path={`${ROUTES.search}/list`} element={<SearchListPage />} />
                        <Route path={`${ROUTES.search}/map`} element={<SearchMapPage />} />
                        <Route
                            path={ROUTES.contract}
                            element={<ContractPage />}
                        />
                        <Route
                            path={ROUTES.transaction}
                            element={<TransactionPage />}
                        />
                        <Route path="*" element={<div>404 Not Found</div>} />
                    </Routes>
                </TabProvider>
            </RootUIProvider>
        </BrowserRouter>
    );
}

export default App;
