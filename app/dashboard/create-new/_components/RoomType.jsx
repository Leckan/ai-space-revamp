import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



function RoomType({selectedRoomType}) {
    return (
        <div>
            <label className='text-slate-500'>Select Room Type *</label>
            <Select onValueChange={(value)=>selectedRoomType(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Living Room">Living Room</SelectItem>
                    <SelectItem value="Bedroom">Bedroom</SelectItem>
                    <SelectItem value="Kitchen">Kitchen</SelectItem>
                    <SelectItem value="Office">Office</SelectItem>
                    <SelectItem value="Bathroom">Bathroom</SelectItem>
                    <SelectItem value="Dining Room">Dining Room</SelectItem>
                    <SelectItem value="Hall">Hall</SelectItem>  
                    <SelectItem value="Garage">Garage</SelectItem>
                    <SelectItem value="Laundry Room">Laundry Room</SelectItem>
                    <SelectItem value="Basement">Basement</SelectItem>
                    <SelectItem value="Attic">Attic</SelectItem>
                    <SelectItem value="Storage Room">Storage Room</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Outdoor">Outdoor</SelectItem>
                    <SelectItem value="Balcony">Balcony</SelectItem>
                    <SelectItem value="Patio">Patio</SelectItem>
                    <SelectItem value="Garden">Garden</SelectItem>
                    <SelectItem value="Porch">Porch</SelectItem>
                    <SelectItem value="Veranda">Veranda</SelectItem>
                    <SelectItem value="Sunroom">Sunroom</SelectItem>
                    <SelectItem value="Mudroom">Mudroom</SelectItem>
                    <SelectItem value="Foyer">Foyer</SelectItem>
                    <SelectItem value="Entryway">Entryway</SelectItem>
                    <SelectItem value="Hallway">Hallway</SelectItem>
                    <SelectItem value="Corridor">Corridor</SelectItem>
                    <SelectItem value="Staircase">Staircase</SelectItem>
                    <SelectItem value="Landing">Landing</SelectItem>
                    <SelectItem value="Nook">Nook</SelectItem>
                    <SelectItem value="Den">Den</SelectItem>
                    <SelectItem value="Study">Study</SelectItem>
                    <SelectItem value="Library">Library</SelectItem>
                    <SelectItem value="Game Room">Game Room</SelectItem>
                    <SelectItem value="Media Room">Media Room</SelectItem>
                    <SelectItem value="Home Theater">Home Theater</SelectItem>
                    <SelectItem value="Gym">Gym</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Craft Room">Craft Room</SelectItem>
                    <SelectItem value="Hobby Room">Hobby Room</SelectItem>
                    <SelectItem value="Music Room">Music Room</SelectItem>
                    <SelectItem value="Art Studio">Art Studio</SelectItem>
                    <SelectItem value="Photography Studio">Photography Studio</SelectItem>
                    <SelectItem value="Dance Studio">Dance Studio</SelectItem>
                    <SelectItem value="Yoga Studio">Yoga Studio</SelectItem>
                    <SelectItem value="Meditation Room">Meditation Room</SelectItem>
                    <SelectItem value="Spa">Spa</SelectItem>
                    <SelectItem value="Sauna">Sauna</SelectItem>
                    <SelectItem value="Steam Room">Steam Room</SelectItem>
                    <SelectItem value="Hot Tub">Hot Tub</SelectItem>
                    <SelectItem value="Pool">Pool</SelectItem>
                    <SelectItem value="Jacuzzi">Jacuzzi</SelectItem>
                    <SelectItem value="Outdoor Kitchen">Outdoor Kitchen</SelectItem>
                    <SelectItem value="Outdoor Living Room">Outdoor Living Room</SelectItem>
                    <SelectItem value="Outdoor Dining Room">Outdoor Dining Room</SelectItem>
                    <SelectItem value="Outdoor Bathroom">Outdoor Bathroom</SelectItem>
                    <SelectItem value="Outdoor Shower">Outdoor Shower</SelectItem>
                    <SelectItem value="Outdoor Fire Pit">Outdoor Fire Pit</SelectItem>
                    <SelectItem value="Outdoor Fireplace">Outdoor Fireplace</SelectItem>
                    <SelectItem value="Outdoor Lounge">Outdoor Lounge</SelectItem>
                    <SelectItem value="Outdoor Bar">Outdoor Bar</SelectItem>
                    <SelectItem value="Outdoor Grill">Outdoor Grill</SelectItem>
                    <SelectItem value="Outdoor Dining Area">Outdoor Dining Area</SelectItem>
                    <SelectItem value="Outdoor Terrace">Outdoor Terrace</SelectItem>
                    <SelectItem value="Outdoor Garden">Outdoor Garden</SelectItem>
                    <SelectItem value="Outdoor Pool">Outdoor Pool</SelectItem>
                    <SelectItem value="Outdoor Spa">Outdoor Spa</SelectItem>
                    <SelectItem value="Outdoor Gym">Outdoor Gym</SelectItem>
                    <SelectItem value="Outdoor Fitness Room">Outdoor Fitness Room</SelectItem>
                    <SelectItem value="Outdoor Exercise Room">Outdoor Exercise Room</SelectItem>
                    <SelectItem value="Outdoor Yoga Room">Outdoor Yoga Room</SelectItem>
                    <SelectItem value="Outdoor Meditation Room">Outdoor Meditation Room</SelectItem>
                </SelectContent>
            </Select>

        </div>
    )
}

export default RoomType