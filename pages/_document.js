import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        async
      />
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <meta name="description" content="youngstorage the private cloud space" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#334afd" />
      <title>youngstorage</title>
    <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
