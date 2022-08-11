import React, { useState, useEffect } from 'react';
import { MdFavorite } from 'react-icons/md';

import useAuthStore from '../store/authStore';

interface IProps {
	handleLikeClick: () => void;
	handleDislikeClick: () => void;
	likes: any[];
}

const LikeButton = ({ likes, handleLikeClick, handleDislikeClick }: IProps) => {
	const [isLiked, setIsLiked] = useState(false);
	const { userProfile }: any = useAuthStore();
	const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

	useEffect(() => {
		filterLikes?.length > 0 ? setIsLiked(true) : setIsLiked(false);
	}, [filterLikes, likes]);

	return (
		<div className='flex gap-6'>
			<div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
				{isLiked ? (
					<div
						className='bg-primary rounded-full p-2 md:p-4 text-[#F51997]'
						onClick={handleDislikeClick}
					>
						<MdFavorite className='text-lg md:text-2xl' />
					</div>
				) : (
					<div
						className='bg-primary rounded-full p-2 md:p-4'
						onClick={handleLikeClick}
					>
						<MdFavorite className='text-lg md:text-2xl' />
					</div>
				)}
				<p className='text-md font-semibold'>{likes?.length || 0}</p>
			</div>
		</div>
	);
};

export default LikeButton;
