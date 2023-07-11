import React, {useState} from 'react'
import Item from './Item'

const Card = () => {
    const [selectedButton, setSelectedButton] = useState();

    const handleButtonClick = (name) => {
        setSelectedButton(name);
    };
  
    return (
      <div>
        {selectedButton && <Item selectedButton={selectedButton} />}
        <button onClick={() => handleButtonClick('Facebook')}>Facebook</button>
        <button onClick={() => handleButtonClick('Twiter')}>Twiter</button>
        <button onClick={() => handleButtonClick('Youtube')}>Youtube</button>
        
      </div>
    )
  }

  export default Card