function UserTable({ users }) {
  return (
    <div className="mt-6">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Place</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3">{user.place}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="text-center p-4"
              >
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;