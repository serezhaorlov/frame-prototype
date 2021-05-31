import { IFrame } from '@/types';

const frames: IFrame[] = [
  {
    id: 1,
    scenario: `
      // const reactorCircle = document.querySelector(
      //   '#g-rct_1_ind'
      // );
      // reactorCircle.parentElement.setAttribute('href', '/frames/2');
      // if (value < 50) {
      //   reactorCircle.style.fill = 'rgb(115, 255, 25)';
      // } else {
      //   reactorCircle.style.fill = 'red';
      // }
      `,
  },
  {
    id: 2,
    scenario: `
    // const thermometerCircle = document.querySelector(
    //   '#g-thrm_2_ind'
    // );
    // thermometerCircle.parentElement.setAttribute('href', '/frames/1');
    // if (value < 50) {
    //   thermometerCircle.style.fill = 'blue';
    // } else {
    //   thermometerCircle.style.fill = 'green';
    // }
    `,
  },
  {
    id: 3,
    scenario: `
    
    `,
  },
  {
    id: 4,
    scenario: `
    
    `,
  },
];

export default frames;
