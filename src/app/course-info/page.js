import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
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
                    <p>Grading policy</p>
                </TabPanel>
                <TabPanel>
                    <p>Plagiarism Policy</p>
                </TabPanel>
                <TabPanel>
                    <p>Mental Health</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}