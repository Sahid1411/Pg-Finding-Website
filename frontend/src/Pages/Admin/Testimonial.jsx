import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import avatar from "../../assets/svg folder/boy avatar.svg"

const testimonials = [
  {
    name: "Michael Stuart",
    role: "SEO Founder",
    image: {avatar},
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
  {
    name: "Jessica Smith",
    role: "Marketing Head",
    image: {avatar},
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  },
  {
    name: "David Johnson",
    role: "Tech Lead",
    image: {avatar},
    feedback:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <Card className="shadow-lg p-4 text-center" style={{ backgroundColor: "#1E2A38", color: "#F0F0F0", borderRadius: "10px", width: "500px" }}>
        <Card.Title className="mb-3" style={{ color: "#FFD700", fontSize: "1.5rem" }}>Testimonial</Card.Title>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-light rounded-circle me-3" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <img
            src={avatar}
            alt="User"
            className="rounded-circle border border-3"
            style={{ width: "100px", height: "100px", borderColor: "#FFD700" }}
          />
          <button className="btn btn-light rounded-circle ms-3" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        <Card.Body>
          <Card.Text className="mt-3">
            "{testimonials[index].feedback}"
          </Card.Text>
          <h5 className="fw-bold">{testimonials[index].name}</h5>
          <p style={{ color: "lightgreen", marginBottom: "0" }}>{testimonials[index].role}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Testimonial;
