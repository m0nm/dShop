import "normalize.css";
import "../styles/globals.css";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Layout } from "@/components/Layout/Layout";
import { AuthModal } from "@/features/auth";
import { ViewProductModal } from "@/features/products";
import { ToastContainer, Slide } from "react-toastify";

const defaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>dShop | Happy Customer&apos;s Site</title>
        </Head>

        {/* notifications */}
        <ToastContainer
          position="top-right"
          transition={Slide}
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          icon={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {/* modals */}
        <AuthModal />
        <ViewProductModal />

        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
