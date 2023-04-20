import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";
import users from "./fake.api";

function MainPage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/users">Users List Page</Link>
    </>
  );
}

function UsersListPage() {
  return (
    <div>
      <h3>Users List Page</h3>

      <ul>
        {users.map((user) => {
          return (
            <li key={user._id}>
              <Link to={`/users/${user._id}/profile`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function UserPage() {
  const { userId } = useParams();

  return (
    <div>
      <h3>User Page</h3>

      <ul>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit User Page</Link>
        </li>
      </ul>

      <p>{`UserId: ${userId}`}</p>
    </div>
  );
}

function EditUserPage() {
  const { userId } = useParams();
  const nextUserId = Number(userId) + 1;

  return (
    <div>
      <h2>Edit User Page</h2>

      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Profile</Link>
        </li>
        <li>
          <Link to={`/users/${nextUserId}/profile`}>Another User Page</Link>
        </li>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
      </ul>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h3>Users Layout</h3>

      <Link to="/">Home page</Link>

      <Switch>
        <Route path="/users" exact component={UsersListPage} />
        <Route path="/users/:userId/profile" exact component={UserPage} />
        <Route path="/users/:userId/edit" exact component={EditUserPage} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App Layout</h1>

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/users/:userId?" component={Users} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
