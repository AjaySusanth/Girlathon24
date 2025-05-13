import './Roadmap.css'
import useRoadmapScrollAnimation from "./RoadmapScrollAnimation"
const Roadmap = () => {
  return (
        <section class="pinned">
        <div class="sticky-header">
            <h1>Timeline</h1>
        </div>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <div class="indices">
            <div class="index" id="index-1">
                <p>May 15th</p>
                <p>Release</p>
            </div>
            <div class="index" id="index-2">
                <p>May 16th</p>
                <p>Selection</p>
            </div>
            <div class="index" id="index-3">
                <p>May 17th</p>
                <p>Start</p>
            </div>
            <div class="index" id="index-4">
                <p>May 18th</p>
                <p>Ends</p>
            </div>
            <div class="index" id="index-5">
                <p>May 18th</p>
                <p>Ends</p>
            </div>
            <div class="index" id="index-6">
                <p>May 18th</p>
                <p>Ends</p>
            </div>

        </div>

        <div class="card" id="card-1">
            <div class="card-phase">
                <p>Phase 01</p>
            </div>
            <div class="card-title">
                <h1>Registration Starts</h1>
            </div>
                        <div class="card-footer">
                <img src='images/cal-icon.png' class='cal-icon' alt='calender-icon'/>
                <p class='card-date'>18<span class='superscript'>th</span> May 2025</p>
            </div>
        </div>

        <div class="card" id="card-2">
            <div class="card-phase">
                <p>Phase 02</p>
            </div>
            <div class="card-title">
                <h1>Registration Closes</h1>
            </div>
                        <div class="card-footer">
                <img src='images/cal-icon.png' class='cal-icon' alt='calender-icon'/>
                <p class='card-date'>31<span class='superscript'>st</span> May 2025</p>
            </div>
        </div>

        <div class="card" id="card-3">
            <div class="card-phase">
                <p>Phase 03</p>
            </div>
            <div class="card-title">
                <h1>Announcement of Shortlisted Participants</h1>
            </div>
                        <div class="card-footer">
                <img src='images/cal-icon.png' class='cal-icon' alt='calender-icon'/>
                <p class='card-date'>1<span class='superscript'>st</span> June 2025</p>
            </div>
        </div>

        <div class="card" id="card-4">
            <div class="card-phase">
                <p>Phase 04</p>
            </div>
            <div class="card-title">
                <h1>Shortlisting Stage 1</h1>
            </div>
            <div class="card-footer">
                <img src='images/cal-icon.png' class='cal-icon' alt='calender-icon'/>
                <p class='card-date'>31<span class='superscript'>st</span> May 2025</p>
            </div>
        </div>
        <div class="card" id="card-5">
            <div class="card-phase">
                <p>Phase 05</p>
            </div>
            <div class="card-title">
                <h1>Final Shortlisting</h1>
            </div>
            <div class="card-footer">
                <img src='images/cal-icon.png' class='cal-icon' alt='calender-icon'/>
                <p class='card-date'>21<span class='superscript'>st</span> June 2025</p>
            </div>
        </div>

        <div class="card" id="card-6">
            <div class="card-phase">
                <p>Phase 06</p>
            </div>
            <div class="card-title">
                <h1>Final Day with Project Presentation</h1>
            </div>
            <div class="card-footer">
                <img src='images/cal-icon.png' class='cal-icon' alt='calender-icon'/>
                <p class='card-date'>31<span class='superscript'>st</span> May 2025</p>
            </div>
        </div>
    </section>
  )
}
export default Roadmap