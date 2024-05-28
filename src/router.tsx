import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import HorsesView from "./views/horses/HorsesView";
import CreateHorseView from "./views/horses/CreateHorseView";
import EditHorseView from "./views/horses/EditHorseView";
import HorseDetailsView from "./views/horses/HorseDetailsView";
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

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/horses/" element={<HorsesView />} />
          <Route path="/horses/:horseId/" element={<HorseDetailsView />} />
          <Route path="/horses/create" element={<CreateHorseView />} />
          <Route path="/horses/:horseId/edit" element={<EditHorseView />} />
          <Route path="/horses/list" element={<HorsesList />} />
          <Route path="/activities" element={<ActivitiesView />} />
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
