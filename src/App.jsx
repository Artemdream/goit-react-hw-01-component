import { Profile } from 'components/profile/Profile';
import user from 'components/profile/user.json';
import { FriendList } from 'components/friendList/FriendList';
import friends from 'components/friendList/friends.json';
import { Statistics } from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';

const { username, tag, location, avatar, stats } = user;

export function App() {
  return (
    <div>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
