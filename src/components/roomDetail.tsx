import roomDashboardStyles from '@/mocks/hotel-rooms.json'



function RoomDetail() {
  return (
    <div>
        {
           roomDashboardStyles.map((room)=>(
                <div className='text-white'>
                    <h2>{room.id}</h2>
                </div>
           ))
        }
    </div>
  )
}

export default RoomDetail