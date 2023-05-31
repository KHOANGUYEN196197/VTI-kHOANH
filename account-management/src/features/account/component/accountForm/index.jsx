import { FastField, Form, Formik } from "formik";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import InputField from "../../../../customFields/InputField";
import SelectField from "../../../../customFields/selectField";
import { DEPARTMENT } from "../../../../constants/Department";
import { POSITION } from "../../../../constants/Position";

AccountForm.propTypes = {
  onSubmit: PropTypes.func,
};

AccountForm.defaultProps = {
  onSubmit: null,
};

function AccountForm(props) {
  return (
    <Formik
      initialValues={{
        email: "",
        userName: "",
        fullName: "",
        department: "",
        position: "",
      }}
      onSubmit={(values) => {
        console.log("submit", values);
      }}
    >
      {(formikProps) => {
        return (
          <Form>
            <FastField
              name="email"
              component={InputField}
              label="Email"
              placeholder="Email input"
              type="email"
              disabled={false}
            />
            <FastField
              name="userName"
              component={InputField}
              label="UserName"
              placeholder="UserName input"
              type="text"
              disabled={false}
            />
            <FastField
              name="fullName"
              component={InputField}
              label="FullName"
              placeholder="FullName input"
              type="text"
              disabled={false}
            />
            <FastField
              name="department"
              component={SelectField}
              label="Department"
              placeholder="Department input"
              options={DEPARTMENT}
              disabled={false}
            />
            <FastField
              name="position"
              component={SelectField}
              label="Position"
              placeholder="Position input"
              options={POSITION}
              disabled={false}
            />
            <div style={{ textAlign: "end" }}>
              <Button type="submit" color="primary">
                Create
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button color="danger" onClick={props.toggle}>
                Close
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
export default AccountForm;
