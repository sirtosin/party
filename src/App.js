import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Extra, Home, Login, Signup } from "./pages";
import {ErrorBoundary} from '../src/error/errorBoundary'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/membership"
            element={
              <ErrorBoundary>
                <Suspense fallback={'<Loading />'}>
                  <Login />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Suspense fallback={'<Loading />'}>
                  <Home />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/memb"
            element={
              <ErrorBoundary>
                <Suspense fallback={'<Loading />'}>
                  <Extra />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/about"
            element={
              <ErrorBoundary>
                <Suspense fallback={'<Loading />'}>
                  <About />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/member/login"
            element={
              <ErrorBoundary>
                <Suspense fallback={'<Loading />'}>
                  <Signup />
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
