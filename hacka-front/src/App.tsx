import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import { HomePage } from "./app/home/home";
import { AboutPage } from "./app/sobre/sobre";
import { SaudePage } from "./app/saude/saude";
import { EducacaoPage } from "./app/educacao/educacao";
import { EmpregoPage } from "./app/emprego/emprego";
import { EmpreendedorismoPage } from "./app/empreendedorismo/empreendedorismo";
import { SegurancaPage } from "./app/seguranca/seguranca";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/sobre",
    Component: AboutPage,
  },
  {
    path: "/saude",
    Component: SaudePage,
  },
  {
    path: "/seguranca",
    Component: SegurancaPage,
  },
  {
    path: "/educacao",
    Component: EducacaoPage,
  },
  {
    path: "/emprego",
    Component: EmpregoPage,
  },
  {
    path: "/empreendedorismo",
    Component: EmpreendedorismoPage,
  },
])

export const App = () => {
  return (
    <BrowserRouter basename="https://soubeatrizkaroline.github.io/HackathonCPNordeste2024_DesafioPE">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/saude" element={<SaudePage />} />
          <Route path="/seguranca" element={<SegurancaPage />} />
          <Route path="/educacao" element={<EducacaoPage />} />
          <Route path="/emprego" element={<EmpregoPage />} />
          <Route path="/empreendedorismo" element={<EmpreendedorismoPage />} />
      </Routes>
    </BrowserRouter >
  );
}
