import { useState } from "react";
import { Button } from "reactstrap";
import AccountList from "../../component/accountList";
import AccountModal from "../../component/accountModal";
import "./styles.scss";
function MainPage(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="account">
      <Button onClick={toggle} color="primary">
        Create New Account
      </Button>
      <br />
      <br />
      <br />
      <AccountList />
      <AccountModal modal={modal} toggle={toggle} />
    </div>
  );
}
export default MainPage;
