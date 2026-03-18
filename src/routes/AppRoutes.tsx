import { Modal, Sidebar, Topnavbar } from "@components";
import { Config, Content, Home, Upload, Users } from "@pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import styles from "@styles/App.module.scss";

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layoutBody}>
        <aside className={styles.sidebarContainer}>
          <Sidebar />
        </aside>
        <main className={styles.pageContent}>
          <Topnavbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Modal />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="content" element={<Content />} />
          <Route path="users" element={<Users />} />
          <Route path="config" element={<Config />} />
          <Route path="upload/" element={<Upload />} />
          <Route path="upload/:type" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
