
import "./ServicesList.css";
import PromoCard from "./PromoCard";
const services = [
  { title: "Nail Care Services", count: 6, image: "/static/images/2.png" },
  { title: "Pedicure", count: 6, image: "/static/images/3.jfif" },
  { title: "Brows & Lashes", count: 6, image: "/static/images/img4.png" },
  { title: "Facial", count: 6, image: "/static/images/img5.png" },
  { title: "Body Laser & Waxing", count: 6, image: "/static/images/img6.png" },
  { title: "Relaxation exercises", count: 6, image: "/static/images/img7.png" },
];

const ServicesList = () => {
  return (
    <div className="services-list">
      <PromoCard />
      <h2>Explore Our Salon Services</h2>
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <div className="service-info">
            <h4>{service.title}</h4>
            <p>({service.count} Services)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
