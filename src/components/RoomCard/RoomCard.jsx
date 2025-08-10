import React from 'react';
import { Link } from 'react-router';

const RoomCard = ({ room }) => {
    return (
        <Link to={`/rooms/${room._id}`}>
            <div className="card bg-base-100 image-full w-96 shadow-sm">
                <figure>
                    <img
                        src={room.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{room.title}</h2>
                    <p>{room.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;