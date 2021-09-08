import { useUsers } from "hooks/query";

const Home = () => {
  // fetching users from api
  const { data, isLoading, invalidate, isFetching } = useUsers();
  return (
    <div>
      {isLoading || (isFetching && <p>isLoading</p>)}
      <ul>
        {data?.data.data.map((user) => (
          <li>{user.first_name}</li>
        ))}
      </ul>

      <button onClick={() => invalidate()}>Refetch</button>
    </div>
  );
};

export default Home;
