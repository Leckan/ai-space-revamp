import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


function AiOutputDialog({ openDialog, closeDialog, orgImage, aiImage }) {
    return (
        <div>
            <AlertDialog open = {openDialog}>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Result</AlertDialogTitle>

                    </AlertDialogHeader>
                    <ReactBeforeSliderComponent
                        firstImage={{imageUrl:aiImage}}
                        secondImage={{imageUrl:orgImage}}
                    />
                    <Button onClick={closeDialog}>Close</Button>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default AiOutputDialog