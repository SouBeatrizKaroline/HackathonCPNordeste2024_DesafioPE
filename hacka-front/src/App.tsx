import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./app/home/home";
import { AboutPage } from "./app/sobre/sobre";
import { SaudePage } from "./app/saude/saude";
import { EducacaoPage } from "./app/educacao/educacao";
import { EmpregoPage } from "./app/emprego/emprego";
import { EmpreendedorismoPage } from "./app/empreendedorismo/empreendedorismo";
import { SegurancaPage } from "./app/seguranca/seguranca";

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/saude" element={<SaudePage />} />
          <Route path="/seguranca" element={<SegurancaPage />} />
          <Route path="/educacao" element={<EducacaoPage />} />
          <Route path="/emprego" element={<EmpregoPage />} />
          <Route path="/empreendedorismo" element={<EmpreendedorismoPage />} />
      </Routes>
    </BrowserRouter >
  );
}
