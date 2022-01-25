import React from "react";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import SingleData from './pages/view/SingleData'
import Blogs from "./pages/view/Blogs";

function App() {
  const queryClient = new QueryClient()

  return (

    <div className="container justify-content-center">
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path="/:id">
              <Blogs />
            </Route>
            <Route path="/:id">
              <SingleData/>
            </Route>
          </Switch>
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
      </ChakraProvider>

    </div>
  );
}

export default App;
