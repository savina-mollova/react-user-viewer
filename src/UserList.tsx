import React from 'react';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default UserList;

