export default function UserCard({ user }) {
  return (
    <section className="user-card">
      <h2>{user.username}</h2>
      <img src={user.avatar_url} />
    </section>
  );
}
