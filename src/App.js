import { Suspense, useEffect,lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Excos, Extra, Home, Login, Signup } from "./pages";
import { ErrorBoundary } from "../src/error/errorBoundary";
import { Loading } from "./components/Loading";


function App() {
  useEffect(() => window.scrollTo(0, 0)
, [window]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/membership"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Login />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/welcome"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Extra />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/about"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/excos"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Excos />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
