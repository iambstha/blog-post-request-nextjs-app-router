import { NextResponse } from "next/server";

export async function GET(){
    const data = {
        name: 'Bishal Shrestha',
        age: '27'
    }

    return NextResponse.json({data})
}

export async function POST(req,res){
    const data  = await req.json()
    console.log(data)

    return NextResponse.json(data)
}