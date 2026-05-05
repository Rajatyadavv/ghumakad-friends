import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gradient-ember">404</h1>
        <h2 className="mt-4 text-xl font-display">You've wandered off the map</h2>
        <p className="mt-2 text-sm text-muted-foreground">Even the best explorers take wrong turns.</p>
        <Link to="/" className="mt-6 inline-flex h-11 items-center rounded-full bg-gradient-ember px-6 text-sm font-semibold text-primary-foreground shadow-ember">
          Back to basecamp
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ghumakad.friends — Adventure Travel for Restless Souls" },
      { name: "description", content: "Curated adventure travel experiences across the Himalayas, deserts, oceans and beyond. Travel with friends, not strangers." },
      { property: "og:title", content: "Ghumakad.friends — Adventure Travel for Restless Souls" },
      { property: "og:description", content: "Curated adventure travel experiences across the Himalayas, deserts, oceans and beyond. Travel with friends, not strangers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ghumakad.friends — Adventure Travel for Restless Souls" },
      { name: "twitter:description", content: "Curated adventure travel experiences across the Himalayas, deserts, oceans and beyond. Travel with friends, not strangers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/452f1c19-af70-40a0-95e1-4d2237b10ef9/id-preview-7ce2b6de--1e0702dd-9301-48a1-93e6-b1196d72fada.lovable.app-1777973801053.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/452f1c19-af70-40a0-95e1-4d2237b10ef9/id-preview-7ce2b6de--1e0702dd-9301-48a1-93e6-b1196d72fada.lovable.app-1777973801053.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
