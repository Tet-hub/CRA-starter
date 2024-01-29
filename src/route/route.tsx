import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TeamPage from "../pages/TeamPage";
import ProjectsPage from "../pages/ProjectsPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<DashboardPage />}></Route>
        </Route>

        <Route path="/team">
          <Route index element={<TeamPage />}></Route>
        </Route>

        <Route path="/projects">
          <Route index element={<ProjectsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
