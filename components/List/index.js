
// Format can be basic, carousel, or grid
const List = ({
  items = [],
  count = 0,
  format = 'basic',
  loadMore = () => {},
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List;