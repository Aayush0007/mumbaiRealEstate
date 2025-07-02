import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === "development";

  const csp = isDevelopment
    ? `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com 'sha384-PEBoeZv4VAuAT5osi7EU9mav3PhC61/9SeVb37fhlyCq3RIgGjJA0Yea8L+kLPsK' 'sha384-IDyr+T2cZ4Yz0axAOESaDFWiBqrLNuJREpXrowAUIz/nYrM5oXtmw2eeDUSqNdZl' 'sha384-z6RQT4SXIJmRkpH41qJ+b+MLCOWo6Y4VpYvOes5DDBi3yjn0BMr7ZMjgrptacwSe' 'sha384-X04EkAAYHSFKf9OwjgNMCKHvaZQYvhgUZ962QNOIXn03fyEqdfKDuKmAxc0selMq';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' blob: data: http://localhost:5173 https://livingluxura.com https://ik.imagekit.io https://cdn-icons-png.flaticon.com https://www.lodhagroup.com https://www.google-analytics.com https://www.googletagmanager.com;
        frame-src 'self' https://www.google.com https://www.youtube.com https://www.googletagmanager.com;
        connect-src 'self' ws://localhost:5173 http://localhost:5173 https://script.google.com https://script.googleusercontent.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com;
      `
    : `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com 'sha384-PEBoeZv4VAuAT5osi7EU9mav3PhC61/9SeVb37fhlyCq3RIgGjJA0Yea8L+kLPsK' 'sha384-IDyr+T2cZ4Yz0axAOESaDFWiBqrLNuJREpXrowAUIz/nYrM5oXtmw2eeDUSqNdZl' 'sha384-z6RQT4SXIJmRkpH41qJ+b+MLCOWo6Y4VpYvOes5DDBi3yjn0BMr7ZMjgrptacwSe' 'sha384-X04EkAAYHSFKf9OwjgNMCKHvaZQYvhgUZ962QNOIXn03fyEqdfKDuKmAxc0selMq';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' blob: data: https://livingluxura.com https://ik.imagekit.io https://cdn-icons-png.flaticon.com https://www.lodhagroup.com https://www.google-analytics.com https://www.googletagmanager.com;
        frame-src 'self' https://www.google.com https://www.youtube.com https://www.googletagmanager.com;
        connect-src 'self' https://livingluxura.com https://script.google.com https://script.googleusercontent.com https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com;
      `;

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "https://script.google.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      headers: {
        "Content-Security-Policy": csp.replace(/\s{2,}/g, " ").trim(),
      },
    },
  };
});