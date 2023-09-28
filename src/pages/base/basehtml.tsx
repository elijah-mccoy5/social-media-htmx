import { type PropsWithChildren } from "@kitajs/html";

export const BaseHtml = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CoDev</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://res.cloudinary.com/dtkwfyslj/image/upload/v1695253847/Untitled_design-removebg-preview_wpselx.png"
      />
      <meta
        name="description"
        content="Social Media platform for finding developers interested in the same technologies as you"
      />
      <script src="https://unpkg.com/htmx.org@1.9.5"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
      <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
    </head>
    <body
      class="min-h-screen bg-[#fcfcfc] text-black dark:bg-[#0e0e0e] dark:text-white flex flex-col"
      id="main"
      hx-ext="response-targets, preload"
      hx-target-404="#main"
    >
      {children}
    </body>
  </html>
);
