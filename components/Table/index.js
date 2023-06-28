import React from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Stack,
  Button,
  ButtonGroup,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import Image from "next/image";

const FilterBar = ({ columns, setSelectedColumns, selectedColumns }) => {
  return (
    <div data-aos="fade-in">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Stack direction="horizontal" gap={3}>
            <input type="text" placeholder="Search" />
            <span>Showing 1-2 of 2 items</span>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <ButtonGroup aria-label="Basic example">
              <OverlayTrigger
                placement="bottom"
                trigger="click"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      <Stack direction="vertical" gap={3}>
                        {columns.map((column, index) => (
                          <Form.Check
                            key={index}
                            type="checkbox"
                            label={column}
                            checked={selectedColumns.includes(column)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedColumns([
                                  ...selectedColumns,
                                  column,
                                ]);
                              } else {
                                setSelectedColumns(
                                  selectedColumns.filter(
                                    (selectedColumn) =>
                                      selectedColumn !== column
                                  )
                                );
                              }
                            }}
                          />
                        ))}
                      </Stack>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary">Columns</Button>
              </OverlayTrigger>
            </ButtonGroup>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

const ProductTable = ({ items }) => {
  const [columns, setColumns] = React.useState([
    "Image",
    "Product",
    "Description",
    "UPC",
    "Dimensions",
    "Weight",
    "Where to Buy",
  ]);
  const [selectedColumns, setSelectedColumns] = React.useState([
    "Image",
    "Product",
    "Description",
    "UPC",
    "Dimensions",
    "Weight",
    "Where to Buy",
  ]);
  let imageUrl = "https://images.salsify.com/image/upload/w_100,h_100,c_scale/";

  return (
    <div>
      <FilterBar
        columns={columns}
        setSelectedColumns={setSelectedColumns}
        selectedColumns={selectedColumns}
      />
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  {selectedColumns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={{ width: "64px" }}>
                      <Stack direction="horizontal" gap={3}>
                        <Image
                          src={imageUrl + item.featuredImage}
                          alt={item.title}
                          width={64}
                          height={64}
                        />
                      </Stack>
                    </td>
                    <td>
                      <p>{item.title}</p>
                    </td>
                    <td>
                      <p>{item.description}</p>
                    </td>
                    <td>
                      <p>{item.upc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductTable;
