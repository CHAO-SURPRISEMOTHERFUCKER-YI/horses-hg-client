import { Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function About() {
  const {t} = useTranslation()
  return (
    <div className="min-h-screen">
        <h1 className="text-5xl font-black text-center">
          {t("SPONSOR_HORSE")}
        </h1>
        <p className="text-2xl font-light text-slate-500 mt-5 text-center mb-10">
          {t("DESCRIPTION_HORSE")}
        </p>
      <Grid container component={Paper} className="p-10">
        <Grid item xs={12}>
          <div>Acerca de Nosotros</div>
          <div>
            Bienvenido al establo XYZ, donde nos dedicamos a ofrecer una
            experiencia única en el mundo ecuestre.
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>Apadrinamiento de Caballos</div>
          <div>
            Ofrecemos programas de apadrinamiento de caballos donde puedes
            disfrutar de la compañía de uno de nuestros magníficos equinos.
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>Actividades Ecuestres</div>
          <div>
            Organizamos una variedad de actividades para todas las edades y
            niveles de experiencia, desde clases de equitación hasta paseos por
            el campo.
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>Venta de Caballos</div>
          <div>
            Si estás buscando adquirir un nuevo compañero equino, ¡has venido al
            lugar correcto! Tenemos una selección de caballos de calidad listos
            para ser parte de tu familia.
          </div>
        </Grid>
        <Grid item xs={12}>
          <iframe className="min-w-full min-h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8526.70545166691!2d13.286496726733793!3d49.3918694829753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470acfdcf1e3c685%3A0x60cf401fa8f6421e!2sNa%20Chmelnici%20285%2C%20339%2001%20Klatovy%20IV%2C%20Chequia!5e1!3m2!1ses!2ses!4v1717113029946!5m2!1ses!2ses"></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
