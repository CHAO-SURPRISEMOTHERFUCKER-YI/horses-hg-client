import { useRef } from "react";
import { getHorses } from "@/services/HorsesService";
import { useQuery } from "@tanstack/react-query";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material/";
import { Link } from "react-router-dom";

export default function SponsorCarousel() {
  const { data } = useQuery({
    queryKey: ["horses"],
    queryFn: getHorses,
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollIzq = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -1300, behavior: "smooth" });
    }
  };

  const scrollDer = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 1300, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel">
      <ArrowBackIos className="cursor-pointer z-1" onClick={scrollIzq} />
      <div
        className="carouselContainer"
        ref={carouselRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {data?.map((horse) => (
          <Link key={horse._id} to={`/horses/${horse._id}`}>
            <div className="carouselCard" key={horse._id}>
              <p className="textHorseName">{horse.horseName}</p>
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}${horse.image}`}
                alt={horse.horseName}
                style={{
                  maxHeight: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          </Link>
        ))}
      </div>
      <ArrowForwardIos className="cursor-pointer z-10" onClick={scrollDer} />
    </div>
  );
}
