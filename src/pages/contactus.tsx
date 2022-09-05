import React from "react";
import { styled } from "@/stitches.config";
import { Breadcrumb, Container } from "@/components/Shared";
import { Icon } from "ts-react-feather-icons";

const ContactusContainer = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 22,
  marginTop: "3rem",
  flexDirection: "column",
  "@lg": { flexDirection: "row" },
});

const Form = styled("div", {
  width: "100%",
  "@lg": { width: "50%" },

  "& label": {
    display: "block",
    margin: "1rem 0 10px 0",
    fontSize: 14,

    "&::after": {
      content: "*",
      color: "red",
    },
  },

  "& input": {
    width: "100%",
    height: "40px",
    padding: "0.5rem",
    fontSize: 14,
    border: "1px solid #e6e6e6",
    transition: "border 300ms",

    "&:focus": { borderColor: "$primary" },
  },

  "& textarea": {
    minHeight: "160px",
    width: "100%",
    fontSize: 14,
    padding: "1rem",
    border: "1px solid #e6e6e6",
    transition: "border 300ms",
    resize: "none",

    "&:focus": { borderColor: "$primary" },
  },

  "& button": {
    background: "$primary",
    width: 100,
    fontWeight: 500,
    fontSize: 18,
    padding: "10px 1rem",
    color: "white",
    marginTop: "2rem",
    cursor: "pointer",
    border: "none",

    "&:hover": {
      background: "#3a3a3a",
    },
  },
});

const ContactInfo = styled("div", {
  height: "100%",
  width: "100%",
  "@lg": { width: "50%" },

  "& .title": {
    textAlign: "center",
    "@lg": { textAlign: "left" },
  },

  "& .map": {
    width: "100%",
    height: 270,
    marginBottom: "2rem",
  },

  "& .detail-box": {
    display: "flex",
    alignItems: "center",
    gap: 14,
    margin: "2rem 0",

    "& .detail-title": {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: "24px",
    },

    "& .detail-info": { fontSize: 13, color: "#666" },
  },
});

const Contactus = () => {
  return (
    <>
      <Container flexCol>
        <Breadcrumb content="contact us" />

        <ContactusContainer>
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" />
            </div>

            <button>Send</button>
          </Form>

          <ContactInfo>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1755.8025896670804!2d-0.12671225440344083!3d51.511751311270686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x343c268c1ba619bd!2zNTHCsDMwJzQ0LjciTiAwwrAwNyczOC4yIlc!5e0!3m2!1sen!2sus!4v1662326158022!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <h4 className="title">Contact Details</h4>

            <div className="detail-box">
              <Icon name="mail" />
              <div>
                <span className="detail-title">Email</span>
                <p className="detail-info">dshop@support.com</p>
              </div>
            </div>

            <div className="detail-box">
              <Icon name="phone" />
              <div>
                <span className="detail-title">Phone</span>
                <p className="detail-info">0123-465-789-111</p>
              </div>
            </div>

            <div className="detail-box">
              <Icon name="map-pin" />
              <div>
                <span className="detail-title">Mail Office</span>
                <p className="detail-info">
                  Sed ut perspiciatis unde omnis Street Name, Los Angeles
                </p>
              </div>
            </div>
          </ContactInfo>
        </ContactusContainer>
      </Container>
    </>
  );
};

export default Contactus;
