import { Button } from 'react-bootstrap'

const Follow = ({
  isFollowing = false,
  entity = {},
  onClick = () => {}
}) => {
  return (
    <Button
      variant={isFollowing ? "danger" : "outline-danger"}
      onClick={onClick}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  )
}

export default Follow;