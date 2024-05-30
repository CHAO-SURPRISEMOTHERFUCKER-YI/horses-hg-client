import { Grid } from "@mui/material";

export default function About() {
  return (
    <div className="min-h-screen">
      <Grid container spacing={3}>
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
      </Grid>
    </div>
  );
}
