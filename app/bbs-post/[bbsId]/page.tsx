import React from 'react'
import { BBS } from '@/app/types/types';
import Link from 'next/link';

const getBBSDetail = async (bbsId: string)=> {

    const response = await fetch(`http://localhost:3000/api/post/${bbsId}`, {
      cache: 'no-store',
    });
    const bbsDetail: BBS = await response.json();
    return bbsDetail;
}

async function BBSDetail({params}: {params: {bbsId: string}}) {

  const bbsId: string = params.bbsId;

    const bbsDetail: BBS = await getBBSDetail(bbsId);
    const {title, username, content} = bbsDetail;
    
  return (
    <div className='mx-auto max-w-4xl p-4'>
        <div className="mb-8">
            <h1 className='text-2xl font-bold'>
                {title}
            </h1>
            <p className='text-gray-700'>{username}</p>
        </div>

        <div className="mb-8">
            <p className="text-gray-900">{content}</p>
        </div>

        <Link href={'/'} className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md'>戻る</Link>
    </div>
  )
}

export default BBSDetail