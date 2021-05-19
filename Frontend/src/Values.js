import Cleaning from '../src/components/Card/cleaning.png';
import Delivery from '../src/components/Card/delivery.png';
import Repairs from '../src/components/Card/repairs.png';
import Plumbing from '../src/components/Card/plumbing.png';
import Painting from '../src/components/Card/painting.png';
import Handyman from '../src/components/Card/handyman.png';

export const options_categorie = [
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'repairs', label: 'Repairs' },
    { value: 'delivery', label: 'Delivery' },
    { value: 'painting', label: 'Painting' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'Handyman', label: 'Handyman' }
  ]

  export const images_by_categorie = {
    Cleaning: Cleaning,
    Delivery: Delivery,
    Repairs: Repairs,
    Plumbing: Plumbing,
    Painting: Painting,
    Handyman: Handyman
  }

  export const options_cities = [
    { value: 'Tel-Aviv-Yaffo', label: 'Tel-Aviv-Yaffo' },
    { value: 'Jerusalem', label: 'Jerusalem' },
    { value: 'Haifa', label: 'Haifa' },
    { value: 'Ramat Gan', label: 'Ramat Gan' },
    { value: 'Rehovot', label: 'Rehovot' },
    { value: 'Holon', label: 'Holon' },
    { value: 'Nes Ziona', label: 'Nes Ziona' },
    { value: 'Bat Yam', label: 'Bat Yam'},
    { value: 'Rishon leZion', label: 'Rishon leZion'}
  ]

  export const options_frequency = [
    { value: 'OneTimeOnly', label: 'One time only' },
    { value: 'OnceAWeek', label: 'Once a week' },
    { value: 'EveryOtherWeek', label: 'Every other week' },
    { value: 'OnceAMonth', label: 'Once a month' }
  ]

  export const options_language = [
    { value: 'english', label: 'English' },
    { value: 'russian', label: 'Russian' },
    { value: 'hebrew', label: 'Hebrew' },
    { value: 'french', label: 'French' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'amharic', label: 'Amharic' },
  ]