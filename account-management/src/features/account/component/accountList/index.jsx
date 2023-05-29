import { Button, Table } from "reactstrap";

AccountList.propTypes = {};

AccountList.defaultProps = {};

function AccountList() {
  return (
    <>
      <h2>Danh Sách Account</h2>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>UserName</th>
            <th>FullName</th>
            <th>Department</th>
            <th>Position</th>
            <th>Create Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Email@gmail.com</td>
            <td>UserName1</td>
            <td>FullName1</td>
            <td>Department1</td>
            <td>Position1</td>
            <td>2023-03-04</td>
            <td>
              <Button color="warning">Edit</Button>
            </td>
            <td>
              <Button color="warning">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default AccountList;
