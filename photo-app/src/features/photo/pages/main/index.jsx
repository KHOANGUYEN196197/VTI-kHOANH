import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Spinner } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/banner";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/photo/component/photoList";
import { deletePhoto, getListPhoto } from "features/photo/photoThunks";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListPhoto());
  }, []);

  const photos = useSelector((state) => state.photoReducer.photos);
  const isLoading = useSelector((state) => state.photoReducer.isLoading);

  const handleRemove = (photo) => {
    const action = deletePhoto(photo.id);
    dispatch(action);
  };

  const handleEdit = (photo) => {
    navigate(`/photo/${photo.id}`);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.BLUE_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <br />
        {isLoading ? (
          <Spinner />
        ) : (
          <PhotoList
            photoList={photos}
            onPhotoEditClick={handleEdit}
            onPhotoRemoveClick={handleRemove}
          />
        )}
      </Container>
    </div>
  );
}

export default MainPage;
