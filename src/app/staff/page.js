// `app/page.js` is the UI for the `/` URL

import styles from './staff.module.css'
import { Accordion, AccordionButton, AccordionItem, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'

export default function StaffPage() {

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold">Staff Directory</h1>
      <p className="mt-2">
        Welcome to our <select className="bg-gray-200 p-1 rounded"><option>Fall 2023</option></select> offering!
      </p>
      <p className="mt-1">Here you can find all staff members who make this course great.</p>
      <div className="bg-blue-100 border-l-4 border-green-500 text-blue-700 p-4 mt-5" role="alert">
        <p>Our course personnel are happy to assist students. Please refer to the <a href="/syllabus" className="font-bold">syllabus</a> for our communication procedure.</p>
      </div>
      <InstructorSection />
      <LeadCASection/>

    </div>

  )
  return (
    <div className="flex flex-col px-36 mx-12 py-8 gap-4">

      <h1 className="text-4xl font-bold text-left my-4">Staff Directory</h1>

      <p className="text-base leading-relaxed my-4">
        Welcome to our CS222 staff directory.
        Here you can find all of our staff members and their contact information.
      </p>

      <InstructorSection />

      <LeadCASection />

    </div>
  )
}

function InstructorCard() {
  return (
    <div className={`${styles.instructordiv} w-full sm:w-1/2 lg:w-1/4 px-4 mb-4`}>
      <div className="bg-white rounded shadow overflow-hidden">
        <img className="w-full h-48 object-contain" src="https://ws.engr.illinois.edu/directory/viewphoto.aspx?photo=1343&s=300" alt="Michael Nowak" />
        <div className="p-4">
          <h3 className="text-lg font-bold">Michael Joseph Woodley</h3>
          <h3 className="text-md text-blue-800">Clinical Assistant Professor</h3>
          <p className="text-sm">He / Him</p>
          <a href="#" className="text-sm">Personal Website</a>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Recent Courses Taught
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className="list-disc ml-5 text-blue-800">
                  <li>CS 126 - Software Design Studio</li>
                  <li>CS 222 - Software Design Lab</li>
                  <li>CS 242 - Programming Studio</li>
                  <li>CS 492 - Senior Project I</li>
                  <li>CS 493 - Senior Project II, ACP</li>
                  <li>CS 494 - Senior Project II</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>

  )
}


function InstructorSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mt-6">Instructor</h2>
      <div className="flex flex-wrap -mx-4 mt-4">
        <InstructorCard />

      </div>
      {/* 
      <h1 className="text-2xl font-bold text-left my-4">Professor</h1>


      <div className={`${styles.instructordiv} bg-blue-200 p-8 flex flex-row justify-between`}>
        <div>
          <div className="text-3xl font-bold text-blue-900">Michael Joseph Woodley</div>
          <div className="text-lg text-blue-800 mt-2">Clinical Assistant Professor</div>
          <div className="text-blue-800 mt-4">
            <div>(217) 244-1971</div>
            <div>mwoodley@illinois.edu</div>
            <div>2101 Siebel Center for Comp Sci</div>
          </div>
       

      </div> */}
    </section>
  )
}

function LeadCACard({ name, hobby, major, pronouns, email }) {
  return (
    <div className={`${styles.instructordiv} w-full sm:w-1/2 lg:w-1/4 px-4 mb-4`}>
      <div className="bg-white rounded shadow overflow-hidden">
        <img className="w-full h-48 object-contain" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Michael Nowak" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm mt-1">{pronouns}</p>
          <a href="#" className="text-sm">{email}</a>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    More Info
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className="list-disc ml-5 text-blue-800">
                  <li>Major: {major}</li>
                  <li>Hobby: {hobby}</li>
                  <li>Pronouns: {pronouns}</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>

  )
  return (
    <div className={`${styles.instructordiv} p-8 flex flex-row justify-between`}>
      <div>
        <div className="text-3xl font-bold text-blue-900">{name}</div>
        <div className="text-lg text-blue-800 mt-2">{email}</div>
        <div className="text-blue-800 mt-4">
          <div>Major: {major}</div>
          <div>Hobby: {hobby}</div>
          <div>Pronouns: {pronouns}</div>
        </div>

      </div>

    </div>
  )
}

function LeadCASection() {

  const leadCA = [{
    name: "Ryan Ziegler",
    hobby: "placeholder",
    major: "placeholder",
    pronouns: "placeholder",
    email: "emailplaceholder"
  },
  {
    name: "Alexander Kwandou",
    hobby: "placeholder",
    major: "placeholder",
    pronouns: "placeholder",
    email: "emailplaceholder"
  },
  {
    name: "Aydan Pirani",
    hobby: "placeholder",
    major: "placeholder",
    pronouns: "placeholder",
    email: "placeholder"
  },
  {
    name: "Liza George",
    hobby: "placeholder",
    major: "placeholder",
    pronouns: "placeholder",
    email: "emailplaceholder"
  },

  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mt-6">Instructor</h2>
      <div className="flex flex-wrap -mx-4 mt-4">
      {leadCA.map((ca, idx) => (
          <LeadCACard key={idx} name={ca.name} hobby={ca.hobby} major={ca.major} pronouns={ca.pronouns} email={ca.email} />
        ))}
      </div>
      {/* 
      <h1 className="text-2xl font-bold text-left my-4">Professor</h1>


      <div className={`${styles.instructordiv} bg-blue-200 p-8 flex flex-row justify-between`}>
        <div>
          <div className="text-3xl font-bold text-blue-900">Michael Joseph Woodley</div>
          <div className="text-lg text-blue-800 mt-2">Clinical Assistant Professor</div>
          <div className="text-blue-800 mt-4">
            <div>(217) 244-1971</div>
            <div>mwoodley@illinois.edu</div>
            <div>2101 Siebel Center for Comp Sci</div>
          </div>
       

      </div> */}
    </section>
  )
  return (
    <section>

      <h1 className="text-2xl font-bold text-left my-4">Lead CA</h1>

      <div className='grid grid-cols-2 gap-4'>
        {leadCA.map((ca, idx) => (
          <LeadCACard key={idx} name={ca.name} hobby={ca.hobby} major={ca.major} pronouns={ca.pronouns} email={ca.email} />
        ))}


      </div>
    </section>
  )
}