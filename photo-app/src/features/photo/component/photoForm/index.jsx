import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/inputField";
import RandomPhotoField from "custom-fields/randomPhotoField";
import SelectField from "custom-fields/selectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  const isAddMode = props.isAddMode;
  const initialValues = props.initialValues;
  if (!initialValues) return null;
  const validate = {
    title: Yup.string().required("This field is required."),

    categoryId: Yup.string().required("This field is required."),

    photo: Yup.string().required("This field is required."),
  };
  const validationSchema = Yup.object(validate);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        // do something ...
        const { isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting ? <Spinner size="sm" /> : ""}{" "}
                {isAddMode ? "Add to album" : "update to album"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
