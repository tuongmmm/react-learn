import { useState } from 'react';
import './index.css';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend(newFriend) {
    setFriends([...friends, newFriend]);
  }

  function hanldeShowForm() {
    setShowAddFriend(!showAddFriend);
  }

  function handleSelection(friend) {
    setSelectedFriend(friend);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList friends={friends} onSelection={handleSelection} />

          {showAddFriend && <FormAddFriend onAddFriend={handleShowAddFriend} />}

          <Button onClick={hanldeShowForm}>
            {showAddFriend ? 'Close' : 'Add friend'}
          </Button>
        </div>

        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </>
  );
}

function FriendsList({ friends, onSelection }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} onSelection={onSelection} />
        ))}
      </ul>
    </>
  );
}

function Friend({ friend, onSelection }) {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <div>
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
              You owe {friend.name} {Math.abs(friend.balance)}€
            </p>
          )}
          {friend.balance > 0 && (
            <p className="green">
              {friend.name} owe you {friend.balance}
            </p>
          )}
          {friend.balance === 0 && (
            <p className="zero">
              You and {friend.name} {friend.balance}
            </p>
          )}
        </div>
        <Button onClick={() => onSelection(friend)}>Select</Button>
      </li>
    </>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function hanldeSubmitForm(e) {
    e.preventDefault();

    if (!name || !image) {
      alert('Please fill all fields');
      return;
    }

    const id = Math.random();
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={hanldeSubmitForm}>
        <label>👫 Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🌄 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill({ selectedFriend }) {
  console.log(
    '🚀 ~ file: App.js:148 ~ FormSplitBill ~ selectedFriend:',
    selectedFriend
  );

  return (
    <>
      <form className="form-split-bill">
        <h2>Split a bill with {selectedFriend.name}</h2>
        <label>💰 Total bill</label>
        <input type="text" />

        <label>🧍‍♀️ Your expense</label>
        <input type="text" />

        <label>👫 Who's expense</label>
        <input type="text" />

        <label>🤑 Who is paying the bill</label>
        <select name="" id="">
          <option selected>Select one</option>
          <option value="">New Delhi</option>
          <option value="">Istanbul</option>
          <option value="">Jakarta</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
