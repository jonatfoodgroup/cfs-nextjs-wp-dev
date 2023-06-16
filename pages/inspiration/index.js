import Masonry from 'react-masonry-component';

const Inspiration = () => {
  const onClick = (event) => {
    event.preventDefault();
    console.log('clicked');
  }
  return (
    <div>
      <h1>Inspiration</h1>
      <Masonry
          className={'my-gallery-class'}
          onClick={onClick}
      >
        <div className="item">
          <img src="https://source.unsplash.com/2ShvY8Lf6l0/800x599" />
        </div>
        <div className="item">
          <img src="https://source.unsplash.com/Dm-qxdynoEc/800x799" />
        </div>
        <div className="item">
          <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" />
        </div>
        <div className="item">
          <img src="https://source.unsplash.com/iecJiKe_RNg/600x799" />
        </div>
      </Masonry>
    </div>
  );
}

export default Inspiration;