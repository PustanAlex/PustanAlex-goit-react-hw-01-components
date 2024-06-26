import user from './JSONData/user.json';
import Profile from './components/Profile/Profile';
import data from './JSONData/data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './JSONData/friends.json'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './JSONData/transactions.json'

export const App = () => {
  return (
    <>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />  

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  )
}

  