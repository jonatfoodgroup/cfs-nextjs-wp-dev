import { useState } from "react";
import { DndContext, useDroppable, useDraggable } from '@dnd-kit/core';

const Brands = () => {
  return 
  (
    <DndContext>
      <Masthead />
    </DndContext>
  )
};

const Masthead = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (e) => {
    const files = e.target.files;
    const allPhotos = [...photos];
    for (let i = 0; i < files.length; i++) {
      allPhotos.push(files[i]);
    }
    setPhotos(allPhotos);
  };

  const handleDelete = (index) => {
    const allPhotos = [...photos];
    allPhotos.splice(index, 1);
    setPhotos(allPhotos);
  };

  return (
    <div>
      <PhotoUploader handleUpload={handleUpload} />
      <Photos photos={photos} handleDelete={handleDelete} />
    </div>
  );
};

function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}


function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

// A local photo uploader to drag and drop onto the interface
const PhotoUploader = ({handleUpload}) => {
  
  return (
    <div>
      <h1>Photo Uploader</h1>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

const Photos = ({
  photos,
  handleDelete
}) => {
  return (
    <div>
      <h1>Photos</h1>
      {photos.map((photo, index) => (
        <Photo key={index} photo={photo} handleDelete={handleDelete} index={index} />
      ))}
    </div>
  );
};

const Photo = ({
  photo
}) => {
  return (
    <div>
      <img src={URL.createObjectURL(photo)} />
    </div>
  );
};
export default Brands;
