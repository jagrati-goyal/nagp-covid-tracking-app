import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';

@Injectable({
  providedIn: 'root'
})
export class NewsInMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const newDetail: INewsDetails[] = [{
      "id": 1,
      "title": "India took Covid-19 very seriously from start, says WHO",
      "description": "World health Organiztaion (WHO) says about India",
      "summary": "India is among the countries that took Covid-19 very seriously from the beginning, WHO chief scientist Soumya Swaminathan has said",
      "fullNews": "India is among the countries that took Covid-19 very seriously from the beginning, WHO chief scientist Soumya Swaminathan has said. In converstaion with Editor-in-Chief Shekhar Gupta at the digital version of ThePrint's Off the Cuff Saturday, the scientist lauded the Narendra Modi government's efforts in containing the spread of infection unitl now."
    }, {
      "id": 2,
      "title": "Work from home in MNCs, IT, BPO offices in Gurgaon",
      "description": "MNCs, IT, BPO offices in Gurgaon may have to work from home till July end, says authorities",
      "summary": "MNCs, IT and BPOs enabled services (ITES) in Gurgaon may have to allow their employees to work from home till the end of July, says Gurgaon Metropolitian Development Authority CEO V S Kundu.",
      "fullNews": "MNCs, IT and BPOs enabled services (ITES) in Gurgaon may have to allow their employees to work from home till the end of July, says Gurgaon Metropolitian Development Authority CEO V S Kundu. Kundu, who is also additional chief secretary of Haryana, added that several real estate projects, including those of DLF, have got the green signal to resume construction but within the norms of social distancing."
    }, {
      "id": 3,
      "title": "India sees highest spike in coronavirus COVID-19 cases",
      "description": "With 2,644 infections reported in last 24 hours, India sees highest spike in coronavirus COVID-19 cases",
      "summary": "The coronavirus cases in India crossed 39,000 mark on Sunday (May 3, 2020) with 2644 cases and 83 deaths reported in last 24 hours. This is the highest spike in the number of cases reported in a day in India.",
      "fullNews": "The coronavirus cases in India crossed 39,000 mark on Sunday (May 3, 2020) with 2644 cases and 83 deaths reported in last 24 hours. This is the highest spike in the number of cases reported in a day in India. As per the Ministry of Health data the total number of COVID-19 positive cases in India stood at 39,980 including 28,046 active cases, 10,633 cured/discharged/migrated and 1301 deaths as per the Ministry of Health and Family Welfare. In India, the state of Maharashtra has emerged as the epicenter of coronavirus spread where cases have crossed the 12,000-mark with more than 500 deaths. As per the Ministry data, the cases in Maharashtra on Sunday morning was at 12296 including 2000 recovered cases and 521 deaths."
    }, {
      "id": 4,
      "title": "CRPF headquarters in Delhi sealed as staff tests positive for Coronavirus",
      "description": "The headquarters of the Central Reserve Police Force (CRPF) the country’s largest paramilitary force has been sealed in Delhi on Sunday",
      "summary": "The headquarters of the Central Reserve Police Force (CRPF) the country’s largest paramilitary force has been sealed in Delhi on Sunday for sanitisation after a driver, who is employed at the headquarters tested positive for the novel Coronavirus.",
      "fullNews": "The headquarters of the Central Reserve Police Force (CRPF) the country’s largest paramilitary force has been sealed in Delhi on Sunday for sanitisation after a driver, who is employed at the headquarters tested positive for the novel Coronavirus. “Soon after a bus driver was found positive, the CRPF headquarters was closed for sanitisation. The headquarters’ building will be opened after the sanitisation drive is over. The drive will be done in the premises on Monday,” CRPF DIG M Dhinakaran was quoted by IANS as saying. Officials working in the building will not be allowed inside the premises from today. The CRPF building is located in the CGO complex on Lodhi Road."
    }];

    return { newDetail };
  }

  /** Method that generates the ids of user when not passed. */
  genId(newDetail: INewsDetails[]): number {
    return newDetail.length > 0 ? Math.max(...newDetail.map(news => news.id)) + 1 : 1;
  }
}
