import "@/styles/globals.css";
import "@/styles/variable.css";
import Navigation from '@/component/Navigation';
import { Suspense } from "react";

export const metadata = {
  title: {
    template: "%s | Ciffy",
    default: "Loadnig..."
  },
  description: 'Timetable creater AI Ciffy',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/hangul-js"></script>
        <script src="https://unpkg.com/type-hangul@latest/dist/type-hangul.min.js"></script>
      </head>
      <body>
        <Suspense>
          <Navigation />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
