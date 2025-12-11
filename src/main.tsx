import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@/lib/storyblok"; // Initialize Storyblok

createRoot(document.getElementById("root")!).render(<App />);
