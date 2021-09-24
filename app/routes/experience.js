import Route from '@ember/routing/route';

export default class ExperienceRoute extends Route {
  model() {
    return [
      {
        period: 'April 2021 - current',
        position: 'Rollercoaster Digital - Entry level Junior Developer',
        items: [
          {
            title: 'Monthly',
            array: [
              'Create new form/s in Angular ',
              'Evaluate requirements - Assess API and Database',
              'Create components',
              'If necessary create Classes and Models',
              'If necessary, and under direction, make modifications to backend API and/or recommend changes to database schema',
              'Ensure form is functioning as specified',
              'Push to origin, create pull request and merge to develop',
            ],
          },
          {
            title: 'Daily',
            array: [
              'Perform fixes - ',
              'RxJs / Standard Observables - reshape json',
              'HTML changes and fixes',
              'CSS / Angular Material changes and fixes',
              'Ensure fix is operating as specified',
              'Push to origin, create pull request and merge to develop',
            ],
          },
        ],
      },
      {
        period: 'Early 2000s - current',
        position: 'Broadcast Audio / Production company owner',
        items: [
          {
            title: 'Production Company',
            array: [
              'Project manage, technical and creative design, lead, manage',
            ],
          },
          {
            title: 'Broadcast Audio',
            array: ['Design and implemented complex systems', 'Manage crew'],
          },
        ],
      },
      {
        period: 'Late 1980s - early 2000s',
        position: 'Music Producer, A&R Manager',
        items: [
          {
            title: 'Overview',
            array: [
              'Time of my life. Flew at the pointy end of the plane',
              'Worked for Rondor Music (Dire Straits, Cold Chisel, The Angels, Garbage, Peter Alllen.. The list goes on)',
              'Worked for Albert Productions (AC/DC, Vanda & Young, Beach Boys... the list goes on)',
            ],
          },
        ],
      },
    ];
  }
}
