import Route from '@ember/routing/route';

export default class TechnologyRoute extends Route {
  model() {
    return [
      {
        title: 'Working knowledge:',
        array: [
          'Angular, RxJs, Angular Material, JavaScript, TypeScript, jQuery, Bootstrap',
          'PHP, Laravel ',
          'Python',
          'PostgreSQL, MySQL, SQL Server',
        ],
      },
      {
        title: 'An understanding of:',
        array: ['C#, C, Node.js, Express, Django, Docker'],
      },
      {
        title: 'Tools:',
        array: ['npm, bash, Git, composer, pip, gcc, Let’s Encrypt'],
      },
      {
        title: 'Environments:',
        array: [
          'Azure DevOps',
          'AWS Elastic Beanstalk, RDS, EC2, Lightsail, Route53, S3, Bitnami',
          'BitBucket, GitHub',
        ],
      },
      {
        title: 'Communication:',
        array: ['Jira, Confluence, Slack, Google Meet, Microsoft Teams'],
      },
      {
        title: 'Cross-industry transferable skills',
        array: [
          'Manage teams',
          'High stakes, high pressure every time',
          'Design and implement complex systems',
          'International experience with global identities',
        ],
      },
    ];
  }
}
