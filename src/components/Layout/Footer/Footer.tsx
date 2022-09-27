import Link from "next/link";
import React from "react";
import { Container, Flex } from "@/components/Shared";
import { Icon } from "ts-react-feather-icons";
import {
  FooterBottom,
  FooterContent,
  FooterContentItem,
  FooterTop,
  FooterTopItem,
} from "./footer.styles";

export const Footer = () => {
  return (
    <footer>
      <FooterTop>
        <Container
          css={{ flexDirection: "column", "@lg": { flexDirection: "row" } }}
          justify={"between"}
        >
          <FooterTopItem>
            <Icon name="truck" />

            <div className="info">
              <h4 className="name">FREE SHIPPING</h4>
              <p className="desc">Free On Oder Over $99</p>
            </div>
          </FooterTopItem>

          <FooterTopItem>
            <Icon name="repeat" fill="white" />

            <div className="info">
              <h4 className="name">GUARANTEE</h4>
              <p className="desc">30 Days Money Back</p>
            </div>
          </FooterTopItem>

          <FooterTopItem>
            <Icon name="credit-card" />

            <div className="info">
              <h4 className="name">SAFE PAYMENT</h4>
              <p className="desc">Safe your online payment</p>
            </div>
          </FooterTopItem>

          <FooterTopItem>
            <Icon name="headphones" />

            <div className="info">
              <h4 className="name">ONLINE SUPORT</h4>
              <p className="desc">We Have Support 24/7</p>
            </div>
          </FooterTopItem>
        </Container>
      </FooterTop>

      {/* footer content */}
      <Container>
        <FooterContent>
          <FooterContentItem>
            <h4 className="item-header">Contact Details</h4>

            <ul>
              <li>
                <Icon name="map-pin" size="16" />
                <span>
                  45 Grand Central Terminal New York,NY 1017 United State USA
                </span>
              </li>

              <li>
                <Icon name="phone" size="16" />
                <span>(+123) 456 789 - (+123) 666 888</span>
              </li>

              <li>
                <Icon name="mail" size="16" />
                <span>dshop@mail.com</span>
              </li>
            </ul>
          </FooterContentItem>

          <FooterContentItem>
            <h4 className="item-header">HOT LINE</h4>

            <ul>
              <li>
                <span>Call Us</span>
                <b>(+123) 456 789 - (+123) 666 888</b>
              </li>

              <li className="form">
                <span>SIGN UP FOR NEWSLETTER</span>
                <Flex>
                  <input type="email" placeholder="type your email" />
                  <button>Subscribe</button>
                </Flex>
              </li>
            </ul>
          </FooterContentItem>

          <Flex css={{ width: "100%", height: "100%" }}>
            <FooterContentItem css={{ width: "50%" }}>
              <h4 className="item-header">Account</h4>

              <ul>
                <li>
                  <a href="#">Settings</a>
                </li>

                <li>
                  <a href="#">Profile</a>
                </li>

                <li>
                  <a href="#">Cart</a>
                </li>

                <li>
                  <a href="#">Wishlist</a>
                </li>
              </ul>
            </FooterContentItem>

            <FooterContentItem css={{ width: "50%" }}>
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus">
                    <a>About us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </FooterContentItem>
          </Flex>
        </FooterContent>
      </Container>

      <FooterBottom>
        <Container justify="center">
          Copyright © 2022 dShop company. All rights reserved
        </Container>
      </FooterBottom>
    </footer>
  );
};
