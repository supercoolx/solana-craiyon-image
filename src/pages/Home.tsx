import React, { useState } from 'react';
import axios from 'axios';
import { AiFillCamera, AiOutlineLoading } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';

const Home = () => {
    const [imgs, setImgs] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (isLoading) return;
        setLoading(true);
        const keyword = e.target.keyword.value;
        await axios.get('/generate', { params: { keyword }})
        .then(res => {
            setImgs(res.data);
            setLoading(false);
        })
        .catch(err => {
            window.alert(err.message);
            setLoading(false);
        });
    }

    return (
        <div className='my-20 w-[600px] mx-auto'>
            <div className='text-7xl text-center'>S9</div>
            <div className='text-center mt-5'>Mint an AI generated NFT using any text string</div>
            <form onSubmit={handleSubmit} className='flex items-center gap-3 mt-10'>
                <input type='text' name='keyword' className='w-full p-2 border border-gray-500 rounded-md bg-black outline-none focus:border-green-400' placeholder='e.g) Small Dog Walking In The Rain "Portrait"' />
                <button type='submit' className='p-3 bg-black rounded-md'>
                    {
                        isLoading ?
                        <AiOutlineLoading className='animate-spin' size={20} /> :
                        <FaPencilAlt size={20} />
                    }
                </button>
            </form>
            <div className='w-full border border-gray-500 rounded-md p-2 h-[600px] mt-5 grid grid-cols-3 gap-2'>
                { isLoading ? null : imgs.map(img => <img src={img} alt='' />) }
            </div>
            <div className='mt-5 flex items-start'>
                <button className='bg-gray-500 rounded-md px-3 py-2 flex items-center text-sm gap-2'>
                    <AiFillCamera size={20} color='black' />
                    <span className='font-bold'>SCREENSHOT</span>
                </button>
                <button className='rounded-md bg-indigo-700 px-5 py-2 text-lg font-bold ml-20'>Mint 0.1 SOL</button>
            </div>
        </div>
    )
}

export default Home;