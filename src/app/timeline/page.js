// `app/page.js` is the UI for the `/` URL
import CalendarComponent from "@/components/Calendar/CalendarComponent"
import {calendarJson} from "@/data/timeline/timeline.js"
export default function TimelinePage() {



  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <CalendarComponent calendarJson={calendarJson} />

    </section>
  )
}