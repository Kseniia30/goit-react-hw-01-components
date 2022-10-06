import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./Friends/FriendList"
import { TransactionHistory } from "./Transaction/TransactionHistory";
import user from "./Profile/user.json"
import data from "./Statistics/data.json"
import friends from "./Friends/friends.json"
import transactions from "./Transaction/transactions.json"



export const App = () => {
  return (
    <div
      style={{
        width: 1200,
        padding: 15,
        marginLeft: "auto",
        marginRight: "auto"
    }}>
      <h1
      style={{
        textAlign: 'center',
        fontSize: 40,
        color: 'red'
      }}>TASK 1</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      

      <h1
      style={{
        textAlign: 'center',
        fontSize: 40,
        color: 'red',
        marginTop: 20,
        }}>TASK 2</h1>
      <h2
      style={{
        textAlign: 'center',
        fontSize: 20,
        color: 'green',
        marginBottom: 10,
      }}>part 1</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2
      style={{
        textAlign: 'center',
        fontSize: 20,
        color: 'green',
        marginBottom: 10,
      }}>part2</h2>
      <Statistics stats={data} />


      <h1
      style={{
        textAlign: 'center',
        fontSize: 40,
        color: 'red',
        marginTop: 20,
      }}>TASK 3</h1>
      <FriendList friends={friends} />;


      <h1
      style={{
        textAlign: 'center',
        fontSize: 40,
        color: 'red',
        marginTop: 20,
      }}>TASK 4</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};
