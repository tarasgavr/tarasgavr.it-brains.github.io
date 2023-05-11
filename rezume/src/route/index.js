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
    layout: 'person',
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

// Підключаємо роутер до бек-енду
module.exports = router