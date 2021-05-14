const resume = {
  firstName: 'Juan David',
  lastName: 'Nicholls',
  jobTitle: 'Full Stack Developer, Open Source Contributor',
  photo: 'https://s3.eu-west-1.amazonaws.com/resumedone-eu-west-1/AxajI58Ph-photo.png',
  address: 'Cra 84b #4g-75 Apto 1523',
  city: 'Medellin',
  postalCode: '050023',
  country: 'Colombia',
  phone: '+573113101122',
  email: 'jdnichollsc@hotmail.com',
  education: [
    {
      school: 'Universidad de Medellín',
      degree: 'Bachelor',
      graduationDate: '2016',
      description: 'Software Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/jdnichollsc'
    },
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/jdnichollsc'
    },
    {
      label: 'Open Source',
      link: 'https://github.com/proyecto26'
    }
  ],
  skills: [
    'C#',
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'ReactJS',
    'React Native',
    'Ionic',
    'Angular',
    'Firebase',
    'NativeScript',
    'Unity',
    'ASP.NET',
    'Azure'
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `Developer with a background in web and mobile development, having 8+ years of practice and leadership building interactive experiences.
    Disciplined, organized, humble and righteous person. Committed to good morals, continuous learning, innovation and development of optimal solutions.
    Great enthusiastic teamwork, considered helpful, creative, assertive and cautious.`,
  employmentHistory: [
    {
      jobTitle: 'Front-End Developer / Tech Leader',
      startDate: 'Feb 2018',
      endDate: 'Present',
      employer: 'S4N',
      city: 'Remote',
      achievements: [
        'I defined a modular architecture with React Native that allows multiple teams to work on the same project.',
        `I created native integrations (plugins) to improve the UX of mobile apps, I've reached more than 1 million downloads with one of these side projects.`
      ]
    },
    {
      jobTitle: 'Software Development Engineer',
      startDate: 'Mar 2017',
      endDate: 'Feb 2018',
      employer: 'BevyUp (Acquired by Nordstrom)',
      city: 'Remote',
      achievements: [
        `I led the research of new mobile Frameworks according to the needs of the company's partners to improve the performance and UX of the apps.`
      ]
    },
    {
      jobTitle: 'Consultant and Software Architect',
      startDate: 'Nov 2016',
      endDate: 'Mar 2017',
      employer: 'MVM Ingeniería de software',
      city: 'Medellín',
      achievements: [
        'I created the baseline for the development of reactive apps using new technologies such as MeteorJS, GraphQL for rapid prototyping.',
        'I configured continuous integration pipelines for new projects through cloud services with Azure and Visual Studio Team Services.'
      ]
    },
    {
      jobTitle: 'Senior Developer / Tech Leader',
      startDate: 'Oct 2014',
      endDate: 'Nov 2016',
      employer: 'Yuxi Global',
      city: 'Medellín',
      achievements: [
        'I created a course about JS patterns for the company.',
        'I designed the baseline for cross-platform mobile applications using new technologies, with these results the company became an Ionic Trusted Partner.',
        'I had the opportunity to mentor a developer helping her build confidence and improve her soft skills.'
      ]
    },
    {
      jobTitle: 'Tech Leader',
      startDate: 'Jul 2014',
      endDate: 'Oct 2014',
      employer: '1Cero1 Software',
      city: 'Medellín',
      achievements: [
        'I designed baselines for mobile application development using PhoneGap/Cordova with Ionic Framework.',
        'I trained the team for the implementation of new methodologies such as ALM for the management of applications.'
      ]
    },
    {
      jobTitle: 'Senior Dev Analyst',
      startDate: 'Feb 2014',
      endDate: 'Jun 2014',
      employer: 'Aerolínea de Antioquia',
      city: 'Medellín',
      achievements: [
        'I researched about CMS based on ASP.NET that allowed to migrate existing web apps, helping the decision-making of the executive area of the company.'
      ]
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'Jul 2012',
      endDate: 'Jan 2014',
      employer: 'Pacifica Diseño',
      city: 'Medellín',
      achievements: [
        'I designed templates with ASP.NET MVC instead of using WebForms, to avoid using server controls in order to have a better separation of responsibilities between BackEnd and FrontEnd.',
        'I implemented ORMs such as Entity Framework to define strategies to manipulate the database from code.'
      ]
    }
  ]
}

new Vue({
  el: "#app",
  data: resume
});
