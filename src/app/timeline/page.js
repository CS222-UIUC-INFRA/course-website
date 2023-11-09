// `app/page.js` is the UI for the `/` URL
import CalendarComponent from "@/components/Calendar/CalendarComponent"
export default function TimelinePage() {

  const calendarJson = {
    "Title": "Calendarr",
    "Content": [
      {
        "Date": "8/25",
        "LectureContent": "Introduction to the course",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_mzdaxk8u",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_1.pdf"
        },
      },
      {
        "Date": "9/1",
        "LectureContent": "Git Basics",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_na1fb776",
        "Appendix": {
          "Excalidraw": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_2.png",
        },
      },
      {
        "Date": "9/8",
        "LectureContent": "Git Advanced",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_4bvy845z/227545313",
        "Appendix": {
       
          "GitHub Resources": "https://canvas.illinois.edu/courses/41105/quizzes/290835",
        },
      },
      {
        "Date": "9/15",
        "LectureContent": "Software Engineering Overview",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_owl1ds07/227545313",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_4.pdf",
        },
      },
      {
        "Date": "9/22",
        "LectureContent": "Successful Projects",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_6imqxsmo/227545313",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_5.pdf",
     
        },
      },
      {
        "Date": "9/29",
        "LectureContent": "Frontend Development",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_qvt9duqg/318022012",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_6.pdf",
   
        },
      },
      {
        "Date": "10/6",
        "LectureContent": "Backend Development",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_wpaahzrw/318022012",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_07.pdf",
      
        },
      },
      {
        "Date": "10/13",
        "LectureContent": "Code Commenting",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_w467o6dq/318022012",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_08.pdf",
     
        },
      },
      {
        "Date": "10/20",
        "LectureContent": "Cloud Computing",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_jf8d6q8c/318022012",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_09.pdf",
 
        },
      },
      {
        "Date": "10/27",
        "LectureContent": "Databases",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_tqtonv2u/318022012",
        "Appendix": {
          "Slides": "https://courses.grainger.illinois.edu/CS222/fa2023/secure/Slides/lecture_10.pdf",
       
        },
      },
      {
        "Date": "11/3",
        "LectureContent": "Security",
        "Recording": "https://mediaspace.illinois.edu/media/t/1_m2oon9t3/318022012",
        "Appendix": {
        },
      },
    ]

  }


  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <CalendarComponent calendarJson={calendarJson} />

    </section>
  )
}