import React, { useEffect } from "react";
import "./styles.scss";
import PhotoForm from "../../component/photoForm";
import Banner from "../../../../components/banner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPhoto, getListPhoto, postPhoto } from "features/photo/photoThunks";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const photos = useSelector((state) => state.photoReducer.photos);

  const photoEdit = photos.find((photo) => photo.id === photoId);

  const isAddMode = !photoId;

  const initialValues = isAddMode
    ? { title: "", categoryId: null, photo: "" }
    : photoEdit;

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getListPhoto());
    }
  }, [dispatch, photos.length]);

  const handleSubmit = (values) => {
    if (isAddMode) {
      const action = postPhoto(values);
      dispatch(action);
    } else {
      const action = editPhoto(values);
      dispatch(action);
    }
    navigate("/");
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
