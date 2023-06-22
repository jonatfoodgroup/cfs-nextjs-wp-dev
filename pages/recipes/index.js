// Structure
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Modules
import Section from "@/components/Section";
import BreadCrumb from "@/components/Breadcrumb";
import ActionGroup from "@/components/ActionGroup";
import Follow from "@/components/Follow";
import Print from "@/components/Print";
import Share from "@/components/Share";


const RecipeArchive = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BreadCrumb
              items={[
                { label: "Home", path: "/" },
                { label: "Recipes", path: "/recipes" },
              ]}
              currentPath="Recipe Archive"
            />
          </Col>
          <Col className="text-right">
            <ActionGroup>
              <Follow />
              <Print />
              <Share />
            </ActionGroup>
          </Col>
        </Row>
      </Container>

      <Section title="Recipe Archive" />

    </>
  );
};

export default RecipeArchive;
