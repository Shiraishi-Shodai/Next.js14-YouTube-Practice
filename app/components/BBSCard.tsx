import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBS } from "../types/types";

interface BBSCardProps {
  bbsData: BBS
}

const BBSCard: React.FC<BBSCardProps> = ({bbsData})=> {
  return (
    <div>
          <Card>
          <CardHeader>
            <CardTitle>{bbsData.title}</CardTitle>
            <CardDescription>{bbsData.username}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{bbsData.content}</p>
          </CardContent>
          <CardFooter className="text-blue-500">
            <Link href={`/bbs-post/${bbsData.id}`}>詳しく</Link>
          </CardFooter>
        </Card>
    </div>
  )
}

export default BBSCard