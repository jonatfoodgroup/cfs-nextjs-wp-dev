import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../app/globals.css";
import PageMeta from "@/components/PageMeta";
import Slider from "react-slick";
import Link from "next/link";
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';

import ProductNutrition from '@/components/ProductNutrition';
import TriggerExample from '@/components/ToolTip';




const Product = () => {


  return (
    <>
      <div className="product-page">
        <Container>
          <Row>
            <Col sm={{ span: 7 }} className={"mt-5"}>
              <div class="product-toolbar mb-4">

                <div>
                  {/* to-do- add a hover/active state to the print and share icons */}
                  <a><Image
                    src="/cfs-print-icon.png"
                    height={53}
                    width={53}
                    alt="print"
                    className="print-icon"
                  /></a>
                </div>
                <div>
                  <a><Image
                    src="/cfs-share-icon.png"
                    height={53}
                    width={53}
                    alt="share this product"
                    className="print-icon"
                  /></a>
                </div>

              </div>
              {/*// refernce print and share functions from live site */}
              <div class="prod-toolbar">
                <a class="icon-btn print-btn" href="?product-pdf=_" data-toggle="tooltip" title="" data-original-title="Print"><i class="fa fa-print print-options"></i></a>
                <a class="icon-btn share-btn clk-menu" data-toggle="tooltip" title="" data-id="prodShare" data-original-title="Share"><i class="fa fa-share-alt"></i></a>
              </div>





              <h1>Campbell’s® Classic Condensed Tomato Soup</h1>
              <p>
                add  paragraph of a product description here:
                Swanson® broth is the perfect choice for creating mouthwatering soups and meals that are not only easy to prepare but can also be lower in fat. Cooking tips included on label.
              </p>

              <Table responsive="sm" className="mt-4 mb-4 product-table">
                <thead>
                  <tr>
                    <th>PACK & SIZE</th>
                    <th>CASE CODE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>300 /0.75 OZ. POUCH(ES)</td>
                    <td>04788</td>
                  </tr>
                </tbody>
              </Table>


              <div><h4>(where to buy goes here)</h4></div>

            </Col>

            <Col sm={{ span: 5 }} className={"mt-5"}>


              <img src="https://images.salsify.com/image/upload/w_400,h_400,c_scale/s9mdvx1yj0v4mdvakwx7.jpg" alt="producttitle" className="img-fluid product-image" />



              {/* <!-- Claims icons -->*/}
              <div className="product-icons-container">
                all tooltips:<br />

                <ul className="product-icons">

                  {/* 
             
            

             Vegan - Does not contain any ingredients of animal origin including meat, poultry, fish, seafood, milk, eggs, and/or other dairy products.
              
             Servings of Fruit or Vegetables - Contains at least one-half serving (1/4 cup equivalent) of fruit, vegetables, or a combination of both.

             Good Fiber Source - Provides at least 3 grams (at least 10% of the daily value) of fiber per serving.

             Whole Grain - At least 50% of grains in the product are whole. Contains at least 8 grams of whole grains per serving.

             Sensible Sodium - Contains 480 mg or less of sodium per serving.


             Heart Healthy - Contains no more than 3 g of fat,1 gram saturated fat (and ≤ 15% of calories from saturated fat

             Gluten Free - Meets strict FDA standards for gluten free labeling.  Contains ≤ 20 parts per million gluten per serving.

             Low Sodium 0-140 mgs Per Serving - Contains 140 mg or less of sodium per serving.

             Low Fat - Contains 3 grams or less of fat per serving.
            
             USDA Organic - Meets USDA’s strict standards for a product to be labeled “organic.” Qualifies to use the USDA organic seal or another organic certifying agency’s seal on the label.
             */}

                  <TriggerExample />
                  <TriggerExample />
                  <li>
                    <a data-toggle="tooltip" data-tooltip="Calorie Wise - 100 calories or less per serving"><Image
                      src="/icon-calwise.png"
                      height={60}
                      width={60}
                      alt="Calorie Wise"
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip="Servings of Fruit or Vegetables - Contains at least one-half serving (1/4 cup equivalent) of fruit, vegetables, or a combination of both."><Image
                      src="/icon-fruitveg.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip="Gluten Free - Meets strict FDA standards for gluten free labeling.  Contains ≤ 20 parts per million gluten per serving."><Image
                      src="/icon-glutenfree.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-goodfiber.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-hearthealthy.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-lowfat.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>


                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-lowsodium.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>



                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-lowsodium.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-usdaorganic.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-vegan.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>
                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip="Vegetarian - Contains no meat, poultry, fish, or seafood. May contain milk, eggs, and/or other dairy products."><Image
                      src="/icon-vegetarian.png"
                      height={60}
                      width={60}
                      alt="Vegetarian"
                      className="product-icon"
                    /></a>
                  </li>

                  <li>
                    <a title="" data-toggle="tooltip" data-tooltip=""><Image
                      src="/icon-wholegrains.png"
                      height={60}
                      width={60}
                      alt=""
                      className="product-icon"
                    /></a>
                  </li>

                </ul>
              </div>

            </Col>


          </Row>


          <Row>
            <Col sm={{ span: 7 }} className={"mt-5"}>
              <Tabs
                defaultActiveKey="features"
                id="fill-tab-example"
                className="product-tabs"
                fill
              >

                <Tab eventKey="features" title="Features & Benefits">
                  Tab content for Features & Benefits<br />
                  fpo
                  QUALITY INGREDIENTS: A rich and savory blend of beef stock with a mirepoix of carrots, onions, and celery for a complex and delicious flavor.

                  LABOR SAVER: Cooking broths from scratch is a time-consuming process. Our broths offer homemade flavor in an instant without the hassle of doing it yourself
                  simply heat and use in your favorite dishes.

                  VERSATILE BASE: One of the most widely used ingredients
                  broths add depth in flavor when used in place of water for making soup, stew, sauce, rice, potatoes, or gravy.

                  MENU INSPIRATION: Baste your slow cooked roast beef for a hearty Sunday special, or use as a base for French onion soup to add to your seasonal lunch menu – the options are limitless.
                </Tab>
                <Tab eventKey="nutrition" title="Ingredients & Allergens">

                  <div>
                    <h4>INGREDIENTS</h4>
                    (data from API)
                  </div>
                  <div>
                    <h4>ALLERGENS</h4>
                    (data from API)
                  </div>


                </Tab>
                <Tab eventKey="dietary" title="Dietary Needs">
                  Tab content for Dietary Needs
                </Tab>
              </Tabs>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Preparation</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Storage</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Serving Ideas</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>More</Accordion.Header>
                  <Accordion.Body>

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Supporting Materials</Accordion.Header>
                  <Accordion.Body>
                    content from api
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>





         
      
            </Col>

            <Col sm={{ span: 5 }} className={"mt-5"}>



              <ProductNutrition />

            </Col>
          </Row>
        </Container>


       make into section
        <h2>Similar Products</h2>
      <Container>
      <Row>
          <Col className="related-product-container">
          <div className="product-related">
          <img src="http://via.placeholder.com/250x220" className="product-related-image" />
          <h5 className="">Swanson® Beef Broth, 100% Fat Free, Recipe Starter</h5>
          </div>

          <div className="product-related">
          <img src="http://via.placeholder.com/250x220" className="" />
          <h5 className="">Swanson® Beef Broth, 100% Fat Free, Recipe Starter</h5>
          </div>

          <div className="product-related">
          <img src="http://via.placeholder.com/250x220" className="" />
          <h5 className="">Swanson® Beef Broth, 100% Fat Free, Recipe Starter</h5>
          </div>

          <div className="product-related">
          <img src="http://via.placeholder.com/250x220" className="" />
          <h5 className="">Swanson® Beef Broth, 100% Fat Free, Recipe Starter</h5>
          </div>
        
           </Col>
      </Row>
      </Container>

      <Container>
          <Row>
            <Col>
          <h2>Trending Inspiration</h2>
          recipe cards:
          </Col>
          </Row>
      <Row>
          <Col>
          <img src="http://via.placeholder.com/250x220" />
          
          <img src="http://via.placeholder.com/250x220" />
         
          <img src="http://via.placeholder.com/250x220" />
         
          <img src="http://via.placeholder.com/250x220" />
         </Col>     
      </Row>
      </Container>

      </div>
    </>
  );
};


export default Product;