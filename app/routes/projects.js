import Route from '@ember/routing/route';

export default class ProjectsRoute extends Route {
  model() {
    return [
      {
        title: 'PatchTeam',
        links: [
          'https://patch.team',
          'https://github.com/jaimiecarter/patch_team'
        ],
        array: [
          'I knew zero about writing code. So I built this app to teach myself how it works. Originally deployed on Elastic Beanstalk, it now sits on a Lightsail instance',
          'Vanilla JavaScript, vanilla PHP, PDO',
          'For personal use while working as an audio director',
          'Log in to try it out: user-> dude@email.com pass-> DudeRocks ',
          'Make sure you do it on a mobile phone and hit the SMS button onscreen.'
        ]
      },
      {
        title: 'BookMeNow',
        links: [
          'https://bitbucket.org/JamonJamon/bookmenow '
        ],
        array: [
          'To teach myself my first MVC framework',
          '95% complete Laravel WebApp, that was not deployed',
          'MVP idea for a broadcast crew booking platform'
        ]
      }
    ]
  }
}
