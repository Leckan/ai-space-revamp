import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {user} = await req.json();

    try{
        //if user exist
        const userInfo= await db.select().from(usersTable)
        .where(eq(usersTable.email, user?.primaryEmailAddress.emailAddress))
        console.log("User",userInfo)

        //if not add user to db
        if(userInfo?.length == 0)
        {
            const SaveResult= await db.insert(usersTable)
            .values({
                name:user?.fullName,
                email:user?.primaryEmailAddress.emailAddress,
                imageUrl:user?.imageUrl,
            }).returning({usersTable})

            return NextResponse.json({'result':SaveResult[0].usersTable})
        }


        return NextResponse.json({'result':userInfo[0]})

    }
    catch(e)
    {
        return NextResponse.json({error:e})
    }





    
    
}