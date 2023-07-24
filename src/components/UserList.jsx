import { UserSkeleton } from "../utils/loadingSkeletons";
import UserCard from "./UserCard";

export default function UserList({ allUsers, userLoading }) {
  let count = 0;

  if (userLoading) {
    return (
      <section className="user-list">
        <UserSkeleton />
        <UserSkeleton />
        <UserSkeleton />
      </section>
    );
  }
  return (
    <section className="user-list">
      {allUsers.map((user) => {
        return <UserCard key={count++} user={user} />;
      })}
    </section>
  );
}
