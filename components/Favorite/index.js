import { Button } from 'react-bootstrap'

const Favorite = ({
  isFavorite = false,
  onClick = () => {}
}) => {
  return (
    <Button
      variant={isFavorite ? "danger" : "outline-danger"}
      onClick={onClick}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </Button>
  )
}

export default Favorite;
