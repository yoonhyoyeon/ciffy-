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
      <body>
        <Suspense>
          <Navigation />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
