import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBS } from "../types/types";
import BBSCard from './BBSCard';

interface BBSCardListProps{
  allBBS: BBS[]
}

const BBSCardList: React.FC<BBSCardListProps> = ({allBBS})=> {
  
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">

        {allBBS.map((bbsData: BBS)=> (
          <BBSCard bbsData={bbsData} key={bbsData.id}/>
        ))}

    </div>
  )
}

export default BBSCardList