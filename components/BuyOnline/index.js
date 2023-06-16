import { Button } from 'react-bootstrap'

const BuyOnline = ({
  networks = []
}) => {
  return (
    <>
      <Button variant="primary" id="buy-online">
        Buy Online
      </Button>
      <div className="btn-group">
        { networks &&
          networks.map((network, index) => {
            return (
              <Button key={index} href={network.url} target="_blank" rel="noopener noreferrer">
                <img src={network.logoUrl} alt={network.name} />
              </Button>
            );
          }
        )}
      </div>
    </>
  );
}

export default BuyOnline;