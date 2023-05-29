import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Select from "react-select";
import { FastField, Formik } from "formik";
import AccountForm from "../accountForm";

AccountModal.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
};

AccountModal.defaultProps = {
  modal: false,
  toggle: null,
};
function AccountModal(props) {
  const { modal, toggle } = props;
  return (
    <Modal isOpen={modal} toggle={toggle} {...props}>
      <ModalHeader toggle={toggle}>Create New Account</ModalHeader>
      <ModalBody>
        <AccountForm toggle={toggle} />
      </ModalBody>
    </Modal>
  );
}
export default AccountModal;
