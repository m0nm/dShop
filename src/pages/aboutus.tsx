import Image from "next/image";
import React from "react";
import { Container, Breadcrumb } from "@/components/Shared";
import { styled } from "@/stitches.config";
import member1 from "@/../public/team/1.jpg";
import member2 from "@/../public/team/2.jpg";
import member3 from "@/../public/team/3.jpg";
import member4 from "@/../public/team/4.jpg";

const Grid = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 12,
  margin: "3rem 0",
});

const InfoBox = styled("div", {
  height: "220px",
  border: "1px solid #e6e6e6",
  padding: "25px 3px",
  margin: "1rem 0",

  "& h1": {
    fontSize: "40px",
    lineHeight: "30px",
    color: "#333",
    fontWeight: 700,
    textAlign: "center",
  },

  "& span": {
    display: "block",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 28,
  },

  "& p": {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#666666",
    textAlign: "center",
  },
});

const TeamBox = styled("div", {
  "& h1": { textAlign: "center", padding: "20px 0" },

  "& .team-members": {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: 16,
    textAlign: "center",

    "@lg": {
      gridTemplateColumns: "repeat(4, 1fr)",
      textAlign: "left",
    },

    "& .team-member": {
      height: "400px",

      "& figure": { position: "relative", width: "100%", height: "300px" },

      "& .name": { fontSize: 15, fontWeight: 700, lineHeight: "34px" },

      "& .title": { color: "#333", fontSize: 14, marginLeft: 10 },

      "& .desc": { fontSize: 14, color: "#666", marginTop: 12 },
    },
  },
});

const Aboutus = () => {
  return (
    <Container flexCol>
      <Breadcrumb content="About us" />

      <Grid>
        <InfoBox>
          <h1>10000</h1>
          <span>ITEMS IN STORE</span>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the dummy text ever since the 1500s..
          </p>
        </InfoBox>

        <InfoBox>
          <h1>90%</h1>
          <span>OUR CUSTOMERS COMEBACK</span>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the dummy text ever since the 1500s..
          </p>
        </InfoBox>

        <InfoBox>
          <h1>2 MILLION</h1>
          <span>USER OF THE SITE</span>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the dummy text ever since the 1500s..
          </p>
        </InfoBox>
      </Grid>

      <TeamBox>
        <h1>Our Team</h1>

        <div className="team-members">
          <div className="team-member">
            <figure>
              <Image src={member1} alt="team member" layout="fill" />
            </figure>

            <span className="name">Martin</span>
            <span className="title">Marketer</span>

            <p className="desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
          </div>
          <div className="team-member">
            <figure>
              <Image src={member2} alt="team member" layout="fill" />
            </figure>

            <span className="name">Luna</span>
            <span className="title">Marketer</span>

            <p className="desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
          </div>

          <div className="team-member">
            <figure>
              <Image src={member3} alt="team member" layout="fill" />
            </figure>

            <span className="name">John</span>
            <span className="title">Director</span>

            <p className="desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
          </div>

          <div className="team-member">
            <figure>
              <Image src={member4} alt="team member" layout="fill" />
            </figure>

            <span className="name">June</span>
            <span className="title">Member</span>

            <p className="desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
          </div>
        </div>
      </TeamBox>
    </Container>
  );
};

export default Aboutus;
