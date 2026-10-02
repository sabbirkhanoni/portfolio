import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Md Sabbir Khan Oni | Software Engineer & ML Specialist",
  description: "Portfolio of Md Sabbir Khan Oni — Software Engineer Intern at Techdojo Limited, Full-Stack Engineer, Competitive Programmer, and ML Researcher.",
  keywords: ["Md Sabbir Khan Oni", "Software Engineer", "Full Stack Developer", "Techdojo", "Machine Learning", "Three.js", "React", "Next.js"],
  authors: [{ name: "Md Sabbir Khan Oni" }],
  openGraph: {
    title: "Md Sabbir Khan Oni | Software Engineer & ML Specialist",
    description: "Explore projects, research, competitive programming, and engineering experience of Md Sabbir Khan Oni.",
    url: "https://sabbirkhanoni.dev",
    siteName: "Md Sabbir Khan Oni Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sabbir Khan Oni | Software Engineer & ML Specialist",
    description: "Software Engineer Intern at Techdojo Limited, Full-Stack Engineer, and ML Researcher.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#05080e] text-slate-100 antialiased selection:bg-[rgb(8,165,202)]/30 selection:text-white">
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#0c131a",
              color: "#fff",
              border: "1px solid rgba(8, 165, 202, 0.3)",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
            },
          }}
        />
      </body>
    </html>
  );
}
