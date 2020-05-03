import { Injectable } from '@angular/core';
import { IPrecautions } from 'src/app/shared/interfaces/IPrecautions';

@Injectable({
    providedIn : 'root'
})
export class PrecautionService{

    getAllPrecautions(): IPrecautions[] {
        const precautions: IPrecautions[] = [{
            text: "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
            image: "https://professionals.site.apic.org/files/2013/09/IPYou_WashHandsOften.jpg"
        }, {
            text: "Maintain a safe distance from anyone who is coughing or sneezing.",
            image: "https://english.mathrubhumi.com/polopoly_fs/1.4648835.1585341298!/httpImage/image.jpg_gen/derivatives/landscape_894_577/image.jpg"
        }, {
            text: "Don’t touch your eyes, nose or mouth.",
            image: "https://image.shutterstock.com/z/stock-vector-woman-with-coronavirus-on-hand-touching-mouth-nose-and-eyes-and-the-text-don-t-touch-your-face-1686920950.jpg"
        }, {
            text: "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.",
            image: "https://d2pa5gi5n2e1an.cloudfront.net/ph/images/article/8744_PH1/2.jpg"
        }, {
            text: "Stay home if you feel unwell",
            image: "https://shcs.ucdavis.edu/sites/default/files/blog-banner-stayhome.jpg"
        }, {
            text: "If you have a fever, a cough, and difficulty breathing, seek medical attention. Call in advance.",
            image: "https://pbs.twimg.com/media/ESFzrUYXkAEEDq6.jpg"
        }];
        return precautions;
    }

}