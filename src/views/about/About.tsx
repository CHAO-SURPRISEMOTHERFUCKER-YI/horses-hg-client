import { Grid, Paper } from "@mui/material";

export default function About() {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl font-black text-center">Acerca de Nosotros</h1>
      <p className="text-2xl font-light text-slate-500 mt-5 text-center mb-10">
        Bienvenido al Club Ecuestre Camelot zs, donde nos cuidar a los viejos
        campeones del mundo ecuestre.
      </p>
      <Grid container component={Paper} className="p-10" spacing={3}>
        <Grid item xs={12}>
          <div className="px-60 text-justify pb-10">
            <div className="text-2xl font-black mt-4 mb-2">
              Nuestra Historia:
            </div>
            <div>
              Desde 2015, nuestro club campestre se ha dedicado a proporcionar
              un hogar y cuidado especial para antiguos campeones de carreras y
              otras competencias de caballos. Con pasión y compromiso, hemos
              creado un refugio donde estos majestuosos animales pueden
              disfrutar de una vida tranquila y digna después de sus días de
              competencia.
            </div>
            <div>
              Nuestro club ha crecido lentamente, siempre manteniendo el
              bienestar de cada de los caballos como nuestra prioridad. Hemos
              acogido a numerosos caballos retirados o futuros campeones,
              ofreciendo un espacio donde pueden prosperar y vivir con
              comodidad.
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="text-2xl font-black mt-4 mb-2">
            Apadrinamiento de Caballos
          </div>
          <div>
            Ofrecemos programas de apadrinamiento de caballos donde puedes
            ayudar al bienestart de nuestro amigos y disfrutar de la compañía de
            uno de nuestros magníficos equinos con sus visitas.
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="text-2xl font-black mt-4 mb-2">
            Actividades Ecuestres
          </div>
          <div>
            Organizamos una variedad de actividades para todas las edades y
            niveles de experiencia, desde clases de equitación hasta paseos por
            el campo.
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="text-2xl font-black mt-4 mb-2">Venta de Caballos</div>
          <div>
            Si estás buscando adquirir un nuevo compañero equino, ¡has venido al
            lugar correcto! Tenemos una selección de caballos de calidad listos
            para ser parte de tu familia.
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="text-2xl font-black mt-4 mb-2">
            Programa de Voluntariado
          </div>
          <div>
            ¿Amas a los caballos? ¿Quieres aprender sobre su cuidado y
            contribuir a su bienestar? ¡Únete a nuestro equipo de voluntarios!
            Ofrecemos experiencia práctica con el cuidado diario, aprendizaje,
            capacitación de expertos y contéctate con la comunidad. ?Contáctanos
            mediante el formulario de contacto!
          </div>
        </Grid>
        <Grid item xs={12} className="pt-20">
          <iframe
            className="min-w-full min-h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8526.70545166691!2d13.286496726733793!3d49.3918694829753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470acfdcf1e3c685%3A0x60cf401fa8f6421e!2sNa%20Chmelnici%20285%2C%20339%2001%20Klatovy%20IV%2C%20Chequia!5e1!3m2!1ses!2ses!4v1717113029946!5m2!1ses!2ses"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
