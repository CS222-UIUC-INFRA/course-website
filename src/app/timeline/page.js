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
      }
    ]

  }


  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <CalendarComponent calendarJson={calendarJson} />

    </section>
  )
}