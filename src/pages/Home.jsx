import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// Header is provided by Layout
import LeftSidebar from "../components/LeftSidebar";
import HeroSection from "../components/HeroSection";
import RightSidebar from "../components/RightSidebar";
import HomeCarousel from "../components/HomeCarousel";
import BenefitsOverview from "../components/BenefitsOverview";
import WhyApplyDDJAY from "../components/WhyApplyDDJAY";
import RegistrationDate from "../components/RegistrationDate";
import PaymentPlan from "../components/PaymentPlan";
import Amenities from '../components/Amenities';

function Home() {
  return (
    <>
      {/* Header rendered by Layout */}
      <Container fluid className="mt-4">
        <Row>
          <Col md={3}>
            <LeftSidebar />
          </Col>

          <Col md={6}>
            <HeroSection />
          </Col>

          <Col md={3}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
      <RegistrationDate />
      <PaymentPlan />
      {/* <HomeCarousel/> */}
      <Amenities />
      <BenefitsOverview/>
      <WhyApplyDDJAY/>

    

      {/* Footer rendered by Layout */}

    </>
  )
}

export default Home
