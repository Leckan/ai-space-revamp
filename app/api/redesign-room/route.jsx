import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(req) {
    console.log("inside - redesign-room POST")

    //const {user}=useUser();
    const { imageUrl, roomType, designType, additionalReq, userEmail } = await req.json();

    //Convert Image to AI Image
    try {
        const output = await replicate.run(
            "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
            {
              input: {
                image: imageUrl,
                prompt: "A" + roomType + " with a " + designType +  " style " + additionalReq,
                guidance_scale: 15,
                negative_prompt: "lowres, watermark, banner, logo, watermark, contactinfo, text, deformed, blurry, blur, out of focus, out of frame, surreal, extra, ugly, upholstered walls, fabric walls, plush walls, mirror, mirrored, functional, realistic",
                prompt_strength: 0.5,
                num_inference_steps: 50
              }
            }
          );

        // const output = "https://replicate.delivery/xezq/L5WtDy6sJ6bBHl3aOWVqcSyQltg2UoXJLIbMIULUQMTtFzDF/out.png"
        console.log(output);
        //Convert Output URL to BASE64 image
        const base64Image = await ConvertImageToBase64(output);

        console.log("About to call getDownloadURL ");
        //Save Base64 to firebase
        const fileName = Date.now() + '.png';
        const storageRef = ref(storage, 'room-redesign/' + fileName);
        await uploadString(storageRef, base64Image, 'data_url')
        const downloadUrl = await getDownloadURL(storageRef);
        console.log(downloadUrl);



        console.log("About to save to DB");

        //Save All to database
        const dbResult = await db.insert(AiGeneratedImage).values({
            roomType: roomType,
            designType: designType,
            originalImage: imageUrl,
            aiImage: downloadUrl,
            userEmail: userEmail,
            additionalRequirement: additionalReq
        }).returning({ id: AiGeneratedImage.id });
        //user?.primaryEmailAddress?.emailAddress
        console.log(dbResult);

        return NextResponse.json({ "result": downloadUrl })

    }
    catch (e) {
        return NextResponse.json({ error: e })
    }


}

async function ConvertImageToBase64(imageUrl) {
    console.log("inside - ConvertImageToBase64")
    const resp = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64ImageRaw = Buffer.from(resp.data).toString('base64');
    return "data:image/png;base64," + base64ImageRaw;
}