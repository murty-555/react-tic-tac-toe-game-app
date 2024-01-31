import {useState} from 'react';
export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);
    function handleClick(){
        setIsEditing(!isEditing)
    }
    return (
        <li>
            <span className="player">
              {!isEditing && <span className="player-name">{name}</span>}
              {isEditing && <input type='text' placeholder='Enter' value={name}/>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!isEditing ? 'Edit' : 'Save'}</button>
          </li>
    )
}