import { Button } from 'react-bootstrap'
const Print = () => {
  const print = () => {
    window.print()
  }
  return (
    <Button variant="primary" onClick={print}>Print</Button>
  )
}

export default Print
