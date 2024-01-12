import React from "react";
import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills.tsx";
import { categories, videos } from "./data/home.ts";
import { PageHeader } from "./layouts/PageHeader.tsx";
import { VideoGridItem } from "./components/VideoGridItem.tsx";
import { Sidebar } from "./layouts/Sidebar.tsx";
import { SidebarProvider } from "./contexts/SidebarContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage.tsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const MainLayout = ({ children }) => (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <SidebarProvider> {/* komponen konteks/state sidebar  */}
       <BrowserRouter> {/* untuk mengatur routing keseluruhan, menentukan area di mana routing akan terjadi  */}
        <Routes> {/* berisi daftar rute2 */}
          <Route path="/" element={
              <MainLayout>
                <div className="sticky top-0 bg-white z-10 pb-4">
                  <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
                </div>
                <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                  {videos.map((video) => (
                    <VideoGridItem key={video.id} {...video} />
                  ))}
                </div>
              </MainLayout>
            }/>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;