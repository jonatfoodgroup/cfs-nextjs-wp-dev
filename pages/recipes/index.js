// Structure
import { Container, Row, Col, Table } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Modules
import Section from "@/components/Section";
import BreadCrumb from "@/components/Breadcrumb";
import ActionGroup from "@/components/ActionGroup";
import Follow from "@/components/Follow";
import Print from "@/components/Print";
import Share from "@/components/Share";

const RecipeArchive = () => {
  const [recipes, setRecipes] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  fetch("https://services.campbells.com/recipes/recipe").then((response) => {
    response.text().then((text) => {
      const data = JSON.parse(text);
      setRecipes(data.Result);
      setTotalCount(data.TotalResults);
    });
  });

  return (
    <>
      {/* <Container>
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
      </Container> */}

      <Section title="Recipe Archive" />
      <Container>
        <Row>
          <Col>
            <p>
              Displaying: {recipes.length} of {totalCount} recipes
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Brand</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Prep Time</th>
                  <th>Cost</th>
                  <th>Ingredients</th>
                  <th>Steps</th>
                </tr>
              </thead>
              {recipes.map((recipe) => {
                return (
                  <RecipeRow
                    key={recipe.Id}
                    recipe={recipe}
                    />
                );
              })}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const RecipeRow = ({ recipe }) => {
  const { Id, Name, Description, PrepTime, Ingredients, RecipeSteps } = recipe;

  // Filter RecipeMetaRecords for cost per recipe
  const costPerRecipe = recipe.RecipeMetaRecords.filter((meta) => {
    return meta.Key === "cost-per-recipe";
  });

  const brandName = recipe.RecipeMetaRecords.filter((meta) => {
    return meta.Key === "brand-name";
  });

  return (
    <tr key={Id}>
      <td>{Id}</td>
      <td><div dangerouslySetInnerHTML={{ __html: brandName[0].Value}}></div></td>
      <td>{Name}</td>
      <td><div dangerouslySetInnerHTML={{ __html: Description }} /></td>
      <td>{PrepTime}</td>
      <td>${costPerRecipe[0].Value}</td>
      <td>{Ingredients.length}</td>
      <td>{RecipeSteps.length}</td>
    </tr>
  );
};

export default RecipeArchive;
