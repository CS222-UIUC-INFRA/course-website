// `app/page.js` is the UI for the `/` URL

import styles from './staff.module.css'

export default function StaffPage() {
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


function InstructorSection() {
  return (
    <section>

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
          <div className="text-xl text-blue-900 mt-6 mb-2">Recent Courses Taught</div>
          <ul className="list-disc ml-5 text-blue-800">
            <li>CS 126 - Software Design Studio</li>
            <li>CS 222 - Software Design Lab</li>
            <li>CS 242 - Programming Studio</li>
            <li>CS 492 - Senior Project I</li>
            <li>CS 493 - Senior Project II, ACP</li>
            <li>CS 494 - Senior Project II</li>
          </ul>
        </div>
        <img className='rounded' src="https://ws.engr.illinois.edu/directory/viewphoto.aspx?photo=1343&s=300" />
      </div>
    </section>
  )
}

function LeadCACard({ name, hobby, major, pronouns, email }) {
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

      <h1 className="text-2xl font-bold text-left my-4">Lead CA</h1>

      <div className='grid grid-cols-2 gap-4'>
        {leadCA.map((ca, idx) => (
          <LeadCACard key={idx} name={ca.name} hobby={ca.hobby} major={ca.major} pronouns={ca.pronouns} email={ca.email} />
        ))}

        
      </div>
    </section>
  )
}