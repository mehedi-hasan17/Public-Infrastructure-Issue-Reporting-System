const StaffProfile = ({ user }) => {
  return (
    <div>
      <img src={user.photo} alt="" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default StaffProfile;
