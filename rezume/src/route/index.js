// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
var socials = {
        email: {
          href: "mailto:tarasgavrilov1985@gmail.com",
          text: "tarasgavrilov1985@gmail.com",
        },
        phone: {
          href: "tel:+38504430456",
          text: "+38504430456",
        },
        linkedin: {
          href: "https://www.linkedin.com/in/%D1%82%D0%B0%D1%80%D0%B0%D1%81-%D0%B3%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D0%BE%D0%B2-36b960274/",
          text: "Linkedin",
        },
      }
var firstname = "Taras"
var lastname = "Havrylov"
var address = "03150 Kyiv, Ukraine, 140 Antonovich str., app. 43"
// ================================================================
var header = {
      person: {
        firstname,
        lastname, 
      },
      position: "Junior Fullstack JS Developer",
      salary: "600$ in month",
      address, 
}
var footer = {
  socials
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    page: {
      title: "Resume | Main",
    },
    header,
    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: "Resume | Summary",
    },
    header,
    main: {      
      summary: {
        title: "Summary",
        text: "Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.Good team player, every colleague is a friend to me.",
      },
      experience: {
        title: "Other experience",
        text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc."
      },
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: "Resume | Education",
    },
    header,
    main: {      
      educations: [
        {
          id: 1,
          title: "School 130",
          duration_term: 10,
          duration_unit: "years",
          isEnd: true,
        },
        {
          id: 2,
          title: "University 'Ukraine'(bachelor's degree)",
          duration_term: 4,
          duration_unit: "years",
          isEnd: true,
        },
        {
          id: 3,
          title: "University 'Ukraine'(magistracy)",
          duration_term: 2,
          duration_unit: "years",
          isEnd: true,
        },
        {
          id: 4,
          title: "University 'Ukraine'(post-graduate courses)",
          duration_term: 13,
          duration_unit: "years",
          isEnd: true,
        },
        {
          id: 5,
          title: "GOIT",
          type: "online courses",
          duration_term: 6,
          duration_unit: "months",
          isEnd: true,
        },
        {
          id: 6,
          title: "IT-BRAINS",
          type: "online courses",
          duration_term: 10,
          duration_unit: "months",
          isEnd: false,
        },
      ],
      certificates: [
        {
          title: "Bachelor's diploma",
          id: 1,
        },
        {
          title: "Master's diploma",
          id: 2,
        },
        {
          title: "PhD diploma",
          id: 3,
        },
        {
          title: "GOIT Certificate HTML & CSS Pre-course",
          id: 4,
        },
      ],
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: "Resume | Skills",
    },
    header,
    main: {      
      skills: [
        {
          title: "Pascal",
          id: 1,
        },
        {
          title: "Delphi/Lazarus",
          id: 2,
        },
        {
          title: "HTML",
          id: 3,
        },
        {
          title: "Handlebars",
          id: 4,
        },
        {
          title: "VS Code",
          id: 5,
        },
        {
          title: "Git",
          id: 6,
        },
      ],
      hobbies: [
        {
          title: "Music",
          isMain: true,
        },
        {
          title: "Films",
          isMain: true,
        },
        {
          title: "History",
          isMain: false,
        },
        {
          title: "Mythology",
          isMain: false,
        },
        {
          title: "Astrology",
          isMain: false,
        },
        {
          title: "Chess",
          isMain: true,
        },
      ],
    },
    footer,
  })
})
// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/works', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('works', {
    layout: 'big', 
    page: {
      title: "Resume | Works",
    },
    header,
    main: {            
      works: [
        {
          position: "Junior Fullstack JS Developer",
          duration: {
            from: '06.03.2023',
            to: null,
          },
          company: {
            title: "IT-BRAINS",
            url: null,
            description: "IT-BRAINS  is a Ukrainian educational company that helps Ukrainians move to a new level in career and financial development.",
          },
          projectAmount: 3,
          projects: [
            {
              title: 'Resume',
              url: 'https://resume.com.ua',
              about: 'Studying abroad in high school also looks great on your résumé.',

              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  title: 'Handlebars',
                },
                {
                  title: 'HTML',
                },
                {
                  title: 'Nodejs',
                },
              ],
              awards: [
                {
                  title: 'The most fortunate received even royal awards, including titles.',
                },
                {
                  title: 'Since 2007, 40 residents have received lifetime awards.',
                },
              ],
            },
            {
              title: 'DOM structure',
              url: 'https://domstructure.com.ua',
              about: 'A Document Object Model (DOM) tree is a hierarchical representation of an HTML or XML document.',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  title: 'XML',
                },
                {
                  title: 'HTML',
                },
                {
                  title: 'Nodejs',
                },
              ],
              awards: [
                {
                  title: 'The most fortunate received even royal awards, including titles.',
                },
                {
                  title: 'Since 2007, 40 residents have received lifetime awards.',
                },
              ],
            },
            {
              title: 'HTML Quest',
              url: 'https://htmlquest.com.ua',
              about: 'HTML (from the English HyperText Markup Language — "hypertext markup language" ) is a standardized language for document markup on the World Wide Web.',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                  title: 'XHTML',
                },
                {
                  title: 'HTML',
                },
                {
                  title: 'Nodejs',
                },
              ],
              awards: [
                {
                  title: 'The most fortunate received even royal awards, including titles.',
                },
                {
                  title: 'Since 2007, 40 residents have received lifetime awards.',
                },
              ],
            },
          ],          
        },    
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'basic',
    title: 'Abstract summary',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    title: 'Famous biography',
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
    'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
        'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
        "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
        'Awarded for his explanation of the photoelectric effect',
        },
      ],
      influence: [
        'Isaac Newton',
        'James Clerk Maxwell',
        'Hermann Minkowski',
      ],
      influenced: [
        'Niels Bohr',
        'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
        'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
      'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

// ================================================================

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: 'basic',
    title: 'Web technologies',
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
          'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
              'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                  'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                  },
                ],
              },
              {
              name: 'p',
              description:
              'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                  'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                  'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
          'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                  },
                  {
                  value: 'blue',
                  description:
                  'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
              'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                  },
                  {
                    value: 'black',
                    description:
                    'Sets the background color to black.',
                  },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
          'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                  'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
              'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                  'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================
router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'basic',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router