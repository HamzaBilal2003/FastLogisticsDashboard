import React from 'react'
import { dummyImage,  formatCreatedAt } from '../../../constants/help';
import Button from '../../../components/buttons/Button';
import { useNavigate, useNavigation } from 'react-router-dom';
import images from '../../../constants/images';

interface props {
    displayData: {
        id: number;
        BannerImage:string;
        location:string;
        created_at:string;
    };
    onDelete?: (del :any )=>void;
    onEdit?: (edit :any )=>void;
    index: number;
}


const BannerRow: React.FC<props> = ({ displayData, index,onDelete,onEdit }) => {
    const navigate =  useNavigate();
    return (
        <tr className="hover:bg-gray-100 transition cursor-pointer relative"> {/* Removed border-b */}
            <td className="p-2 px-4 w-10">
                <input type="checkbox" />
            </td>
            <td className="p-2">
                <div className='flex items-center gap-2'>
                    {displayData.BannerImage ? <img src={displayData.BannerImage ? displayData.BannerImage : dummyImage()} alt="" className='w-10 h-10 rounded-md' /> : 'No Atachment'}
                </div>
            </td>
            <td className="p-2 ">{displayData.location}</td>
            <td className="p-2 ">{formatCreatedAt(displayData.created_at)}</td>
            <td className='p-2'>
                <div className='flex items-center justify-center gap-2'>
                    {/* <Button handleFunction={() => console.log('hllo wrold send!!')} >
                        Send Now
                    </Button> */}
                    <button onClick={()=> onEdit?.(displayData)} className='cursor-pointer p-2 border border-gray-200 rounded-md'>
                        <img src={images.editBlack} alt="edit admin" className='size-[20px]' />
                    </button>
                    <button onClick={()=> onDelete?.(displayData)} className='cursor-pointer p-2 border border-gray-200 rounded-md'>
                        <img src={images.delBlack} alt="edit admin" className='size-[20px]' />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default BannerRow