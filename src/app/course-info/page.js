import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
export default function GradingPage() {
    return (
        <Tabs orientation='vertical'>
            <TabList>
                <Tab>Course Description</Tab>
                <Tab>Office Hours</Tab>
                <Tab>Calendar</Tab>
                <Tab>Expectations</Tab>
                <Tab>Grading Policy</Tab>
                <Tab>Plagiarism policy</Tab>
                <Tab>Mental Health</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <div>
                        <h3><b>Course Description</b></h3> <br />
                        The main focus of this course is a semester-long software engineering project that students design and build in teams of four.
                        Every team is paired with a CA mentor for guidance. The course ends with a reflection and presentation of the project.
                        Throughout the semester, students will:
                        <div style={{ marginLeft: '20px' }}>
                            <ul>
                                <li>Design and implementation of novel software solutions</li>
                                <li>Problem identification and definition</li>
                                <li>Idea generation and evaluation</li>
                                <li>Software implementation, testing, and deployment</li>
                            </ul>
                        </div>


                        Course grading will emphasize software development best practices, including but not limited to framework selection, code review, documentation, appropriate library usage, project management, continuous integration and testing, and teamwork.

                        Beyond the project, lectures and homework assignments will introduce students to a broad range of software development fields and technologies, such as web and mobile development, databases, artificial intelligence, and accessible design. These lectures will expose students to the variety of computer science subfields, and shed light on industry practices within these areas.
                    </div>
                </TabPanel>
                <TabPanel>
                    <p>Office Hours</p>
                </TabPanel>
                <TabPanel>
                    <p>Calendar</p>
                </TabPanel>
                <TabPanel>
                    <p>Expectations</p>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h1>Grade Breakdown for the Semester</h1>

                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Category</Th>
                                        <Th>Value</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Group Assignment</Td>
                                        <Td>2.5%</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Project Proposal</Td>
                                        <Td>12.5%</Td>

                                    </Tr>
                                    <Tr>
                                        <Td>Weekly Mentor Check-Ins </Td>
                                        <Td>60%</Td>

                                    </Tr>
                                    <Tr><Td>Checkpoint Quizzes</Td><Td>10%</Td></Tr>
                                    <Tr><Td>Final Presentation</Td><Td>15%</Td></Tr>
                                    <Tr><Td>Total</Td><Td>100%</Td></Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                        <p>
                            Lecture attendance is not mandatory, but it may aid in performing better in Checkpoint Quizzes.
                            Content will be available post-lecture for quiz preparation.
                        </p>

                        <p>
                            Group Assignments will commence around week 2, fostering interaction among classmates for potential group formation.
                        </p>

                        <p>
                            The Project Proposal involves creating and refining a project idea, comprising a draft and a final submission.
                            Mentors will provide feedback on the draft, influencing the final grade.
                        </p>

                        <p>
                            Regular Weekly Check-ins with mentors, focused on various project aspects, will collectively contribute 60% to the grade.
                        </p>

                        <p>
                            The Final Presentation, emphasizing project progression and challenges faced, holds a weightage of 15%.
                        </p>

                        <p>
                            Additional assignment details will be available on Canvas closer to the due dates. Occasional extra credit might be offered.
                        </p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p>Your group members are the only ones permitted to develop and debug all work submitted unless otherwise directed in the course.</p>

                        <p>You may have high-level discussions or discuss rules of language syntax with students outside of your group. However, the source code for your project may only be shown to people outside of your group or course staff until after the current semester has concluded.</p>

                        <p>Your group may consult resources that help you attain a better conceptual understanding of a given problem and the techniques to solve it. However, you must clearly cite whatever outside material you introduce or adapt into your submission. For each coding check-in, any source code in your repository may contain up to 25% code from external sources. This code must be cited appropriately. This policy applies to any code copied from sites like StackOverflow and GeeksForGeeks and placed directly into your source code. It does not include the usage of open source libraries as project dependencies (e.g. web frameworks, JSON parsing libraries, etc.).</p>

                        <p>You may use Large LanguageAI Models (e.g. Github Copilot, ChatGPT, and other models) in this class, with the following conditions:</p>
                        <ul>
                            <li>You must document their use in your code. Clearly describe which parts of your submitted code were generated automatically.</li>
                            <li>Document when you used an AI model as part of your development process and how well it worked. Specifically, in your weekly PRs, describe if you used an AI model to assist in your initial design, initial implementation, developing test code, debugging code, or other software development process.</li>
                        </ul>

                        <p>The CS department expects you to be familiar with the CS department's Honor Code and the University expects you all to be familiar with Rule 33 in the Code of Policies and Regulations Applying to All Students. All parties involved in a violation of this policy will receive a 0 on that check-in and their final course grade reduced by one letter (e.g., A-B, B-C, etc.). A second offense will result in a failing grade for the class.</p>

                        <p>In the event of an academic integrity violation, we will attempt to separately establish each person's involvement and appropriate sanctions separately. However, by default, all group members will receive the same penalty.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h1>Mental Health and Inclusivity Statements</h1>

                        <h2>Statement on anti-racism and inclusivity</h2>
                        <p>
                            The intent of this section is to raise student and instructor awareness of the ongoing threat of bias and racism and of the need to take personal responsibility in creating an inclusive learning environment.
                        </p>
                        <p>
                            The Grainger College of Engineering is committed to the creation of an anti-racist, inclusive community that welcomes diversity along a number of dimensions, including, but not limited to, race, ethnicity and national origins, gender and gender identity, sexuality, disability status, class, age, or religious beliefs. The College recognizes that we are learning together in the midst of the Black Lives Matter movement, that Black, Hispanic, and Indigenous voices and contributions have largely either been excluded from, or not recognized in, science and engineering, and that both overt racism and microaggressions threaten the well-being of our students and our university community.
                        </p>
                        <p>
                            The effectiveness of this course is dependent upon each of us to create a safe and encouraging learning environment that allows for the open exchange of ideas while also ensuring equitable opportunities and respect for all of us. Everyone is expected to help establish and maintain an environment where students, staff, and faculty can contribute without fear of personal ridicule, or intolerant or offensive language. If you witness or experience racism, discrimination, microaggressions, or other offensive behavior, you are encouraged to bring this to the attention of the course director if you feel comfortable. You can also report these behaviors to the Bias Assessment and Response Team (BART) (<a href="https://bart.illinois.edu">https://bart.illinois.edu</a>). Based on your report, BART members will follow up and reach out to students to make sure they have the support they need to be healthy and safe. If the reported behavior also violates university policy, staff in the Office for Student Conflict Resolution may respond as well and will take appropriate action.
                        </p>

                        <h2>Statement on CS CARES and CS Values and Code of Conduct</h2>
                        <p>
                            All members of the Illinois Computer Science department - faculty, staff, and students - are expected to adhere to the CS Values and Code of Conduct. The CS CARES Committee is available to serve as a resource to help people who are concerned about or experience a potential violation of the Code. If you experience such issues, please contact the CS CARES Committee. The Instructors of this course are also available for issues related to this class.
                        </p>

                        <h2>Statement on mental health</h2>
                        <p>
                            Diminished mental health, including significant stress, mood changes, excessive worry, substance/alcohol abuse, or problems with eating and/or sleeping can interfere with optimal academic performance, social development, and emotional well-being. The University of Illinois offers a variety of confidential services including individual and group counseling, crisis intervention, psychiatric services, and specialized screenings at no additional cost. If you or someone you know experiences any of the above mental health concerns, it is strongly encouraged to contact or visit any of the University's resources provided below. Getting help is a smart and courageous thing to do -- for yourself and for those who care about you.
                        </p>
                        <ul>
                            <li>Counseling Center: <a href="tel:217-333-3704">217-333-3704</a>, 610 East John Street Champaign, IL 61820</li>
                            <li>McKinley Health Center: <a href="tel:217-333-2700">217-333-2700</a>, 1109 South Lincoln Avenue, Urbana, Illinois 61801</li>
                            <li>University wellness center: <a href="https://wellness.illinois.edu/">https://wellness.illinois.edu/</a></li>
                        </ul>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}