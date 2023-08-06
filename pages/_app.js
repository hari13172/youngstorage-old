import "@/styles/globals.scss";
import Navhovar from "@/component/nav";
import muiskeleton from "@/component/muiskeleton";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

// Create a client
export const queryClient = new QueryClient()

export default function App({ Component, pageProps, router }) {
  const path = router.pathname.split("/").splice(1)
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {path.length > 0 && path[0] == "dashboard" && <Navhovar path={path} />}
        <Component {...pageProps} />
      </QueryClientProvider>

    </>
  );
}
