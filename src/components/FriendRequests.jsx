import React from 'react';

const FriendRequests = () => {
    // Sample data for friend requests
    const requests = [
        { id: 1, name: 'Alice', mutualFriends: 3 },
        { id: 2, name: 'Bob', mutualFriends: 5 },
        { id: 3, name: 'Charlie', mutualFriends: 1 }
    ];

    return (
        <div>
            <h2>Friend Requests</h2>
            <ul>
                {requests.map(req => (
                    <li key={req.id}>
                        {req.name} - {req.mutualFriends} mutual friends
                        <button>Accept</button>
                        <button>Decline</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendRequests;