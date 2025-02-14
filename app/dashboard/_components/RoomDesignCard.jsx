import React, { useState } from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import AiOutputDialog from './AiOutputDialog';
function RoomDesignCard({ room }) {

  const [openDialog, setOpenDialog] = useState(false);
  const onClickHandler = () => {
    setOpenDialog(true)

  }

  return (
    <div className='shadow-md rounded-md ' >
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl: room?.aiImage
        }}
        secondImage={{
          imageUrl: room?.originalImage
        }}
      />
      <div className='p-4 cursor-pointer 'onClick={() => onClickHandler()}>
        <h2>🏡Room Type : {room.roomType}</h2>
        <h2>🎨Design Type : {room.designType}</h2>
      </div>
      <AiOutputDialog openDialog={openDialog} 
            closeDialog={()=>setOpenDialog(false)}
                orgImage={room.originalImage}
                aiImage={room.aiImage}
                />
    </div>
  )
}

export default RoomDesignCard