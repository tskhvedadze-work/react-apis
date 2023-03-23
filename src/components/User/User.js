export function User({ user }) {
  return (
    <li>
      <label>firstName:</label> <span>{user.firstName}</span>
      <br />
      <label>LastName:</label> <span>{user.lastName}</span>
    </li>
  );
}
