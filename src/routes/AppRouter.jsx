import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import BalanceHistory from "../pages/dashboard/BalanceHistory";
import BalanceTopup from "../pages/dashboard/BalanceTopup";
import Settlement from "../pages/dashboard/settlement/Settlement";
import Disbursement from "../pages/dashboard/settlement/Disbursement";
import Transaction from "../pages/dashboard/payment/Transaction";
import TransactionSettlement from "../pages/dashboard/payment/TransactionSettlement";
import WidgetJob from "../pages/dashboard/payment/WidgetJob";
import ActionLog from "../pages/dashboard/ActionLog";
import WidgetConfig from "../pages/dashboard/setting/WidgetConfig";
import Webhook from "../pages/dashboard/setting/Webhook";
import Role from "../pages/dashboard/UserManagement/Role";
import Permission from "../pages/dashboard/userManagement/Permission";
import User from "../pages/dashboard/userManagement/User";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* PUBLIC / MAIN */}
          <Route path="/" element={<Dashboard />} />

          {/* ADMIN GROUP */}
          <Route path="/admin">
            <Route path="balance-logs" element={<BalanceHistory />} />
            <Route path="balance-topups" element={<BalanceTopup />} />
            <Route path="settlements" element={<Settlement />} />
            <Route path="inquiries" element={<Disbursement />} />
            <Route path="transactions" element={<Transaction />} />
            <Route path="transaction-settlements" element={<TransactionSettlement />} />
            <Route path="widget-jobs" element={<WidgetJob />} />
            <Route path="action-logs" element={<ActionLog />} />
            <Route path="widget-configs" element={<WidgetConfig />} />
            <Route path="webhooks" element={<Webhook />} />
            <Route path="roles" element={<Role />} />
            <Route path="permissions" element={<Permission />} />
            <Route path="users" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}