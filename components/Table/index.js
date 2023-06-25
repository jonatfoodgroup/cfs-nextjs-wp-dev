import React from "react";
import { Container, Table, Row, Col, Stack, Button, ButtonGroup, Form, OverlayTrigger, Popover } from "react-bootstrap";

const items = [
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
    caseNo: "123456789",
    sku: "123456789",
    dimensions: "123456789",
    weight: "123456789",
    whereToBuy: [
      {
        title: "Amazon",
        link: "https://www.amazon.com"
      },
      {
        title: "Walmart",
        link: "https://www.walmart.com"
      },
      {
        title: "Target",
        link: "https://www.target.com"
      }
    ]
  },
  {
    title: "BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS BAKED WITH WHOLE GRAIN CHEDDAR CRACKERS",
    featuredImage: "https://images.salsify.com/image/upload/w_400,h_400,c_scale/ayvbxxyuaqul3xdnit8w.jpg",
    link: "/",
    caseNo: "123456789",
    sku: "123456789",
    dimensions: "123456789",
    weight: "123456789",
    whereToBuy: [
      {
        title: "Amazon",
        link: "https://www.amazon.com"
      },
      {
        title: "Walmart",
        link: "https://www.walmart.com"
      },
      {
        title: "Target",
        link: "https://www.target.com"
      }
    ]
  }
]

const FilterBar = ({
  columns,
  setSelectedColumns,
  selectedColumns
}) => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
            <Stack direction="horizontal" gap={3}>
              <input type="text" placeholder="Search" />
              <span>Showing 1-2 of 2 items</span>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <ButtonGroup aria-label="Basic example">
                <OverlayTrigger
                  placement="top"
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
                                  setSelectedColumns([...selectedColumns, column]);
                                } else {
                                  setSelectedColumns(selectedColumns.filter((selectedColumn) => selectedColumn !== column));
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
  )
}

const ProductTable = () => {
  const [columns, setColumns] = React.useState(['Product', 'Case No.', 'SKU', 'Dimensions', 'Weight', 'Where to Buy']);
  const [selectedColumns, setSelectedColumns] = React.useState(['Product', 'Case No.', 'SKU', 'Dimensions', 'Weight', 'Where to Buy']);
  return (
    <div>
      <FilterBar columns={columns} setSelectedColumns={setSelectedColumns} selectedColumns={selectedColumns} />
      <Table striped bordered hover>
        <thead>
          <tr>
            {selectedColumns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>      
    </div>
  );
};


export default ProductTable;