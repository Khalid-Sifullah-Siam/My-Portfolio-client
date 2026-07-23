import Header from "../components/Header/Header";
import AdminNavList from "../components/sharedComponents/AdminNavList/AdminNavList";
import Footer from "../components/sharedComponents/Footer/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="mx-auto w-full max-w-[1600px]">
        <Header />
      </header>

      <div className="mx-auto w-full max-w-[1600px]">
        <div className="h-px bg-gray-700 w-full"></div>

        <main className="flex min-h-screen min-w-0 gap-0 lg:gap-6">
          <aside className="relative hidden w-56 shrink-0 px-4 lg:block xl:w-64">
            <div className="absolute left-0 top-0 h-full w-px bg-gray-700"></div>
            <div className="absolute right-0 top-0 h-full w-px bg-gray-700"></div>

            <div className="top-20">
              <AdminNavList />
            </div>
          </aside>

          <section className="min-w-0 flex-1 px-4 sm:px-6 lg:pl-0 lg:pr-6">
            {children}
          </section>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
