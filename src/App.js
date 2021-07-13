import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context";
import { PATH } from "./constants/path";
import { PrivateRoute } from "./components";

const Login = React.lazy(() => import("./pages/login"));
const Staff = React.lazy(() => import("./pages/staff"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={false}>
        <Router>
          <Switch>
            {/* public route here */}

            <Route exact path={PATH.LOGIN}>
              <Login />
            </Route>

            {/* private router here */}
            <PrivateRoute exact path={PATH.HOME}>
              <Staff />
            </PrivateRoute>
          </Switch>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
