import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import HorsesView from "./views/horses/HorsesView";
import CreateHorseView from "./views/horses/CreateHorseView";
import EditHorseView from "./views/horses/EditHorseView";
import HorseDetails from "./views/horses/HorseDetails";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeView from "./views/auth/RequestNewCodeView";
import ForgotPasswordView from "./views/auth/ForgotPasswordView";
import NewPasswordView from "./views/auth/NewPasswordView";
import NotFound from "./views/404/NotFound";
import HorsesList from "./views/horses/HorsesList";
import Home from "./views/Home";
import ActivitiesView from "./views/activities/ActivitiesView";
import CreateActivity from "./views/activities/CreateActivity";
import ActivitiesList from "./views/activities/ActivitiesList";
import EditActivity from "./views/activities/EditActivity";
import About from "./views/about/About";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/horses/" element={<HorsesView />} />
          <Route path="/horses/:horseId/" element={<HorseDetails />} />
          <Route path="/horses/create" element={<CreateHorseView />} />
          <Route path="/horses/:horseId/edit" element={<EditHorseView />} />
          <Route path="/horses/list" element={<HorsesList />} />
          <Route path="/activities" element={<ActivitiesView />} />
          <Route path="/activities/create" element={<CreateActivity />} />
          <Route path="/activities/list" element={<ActivitiesList />} />
          <Route path="/activities/:activityId/edit" element={<EditActivity />} />
          <Route path="/about_us" element={<About />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/auth/confirm-account" element={<ConfirmAccountView />} />
          <Route path="/auth/request-code" element={<RequestNewCodeView />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
          <Route path="/auth/new-password" element={<NewPasswordView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
