# Courses

Free, interactive, self-paced courses by Rahul Dev Sharma, published at https://courses.rahuldevsharma.com.

| Path | Course | Source |
|---|---|---|
| `/optimization/` | Downhill: computational methods of optimization (IISc E0 230) | built from `~/Dev/course-sources/downhill/source` (private backup `SRahul22/downhill`) |
| `/head-start/` | HEAD Start: a field guide for new software engineers | built from `~/Dev/course-sources/head-start/source` (private backup `SRahul22/head-start`) |
| `/tour-guide/` | Tour Guide: logistics and freight modelling (IISc SL 225) | built from `~/Dev/course-sources/tour-guide/source` (private backup `SRahul22/tour-guide`) |
| `/inventory/` | Restock: inventory optimization (IISc SL 225, Lecture 15) | built from `~/Dev/course-sources/inventory/source` (private backup `SRahul22/inventory`) |
| `/achuthan-cvrp/` | Tight Cuts: Achuthan, Caccetta & Hill (2003) branch-and-cut for the CVRP, explained (SL 225 course project) | built from `~/Dev/course-sources/achuthan-cvrp/source` (private backup `SRahul22/achuthan-cvrp`) |
| `/ashish/` | Ashish: a one-page hello for Ashish (not a course, no catalogue card) | hand-written `ashish/index.html` (no source repo) |
| `/allais/` | Which would you choose? A live seminar quiz on the Allais paradox (not a course, no catalogue card). Presenter view: `/allais/?view=results` | hand-written `allais/index.html`; answers go to a Google Sheet via `~/Dev/pages/allais-quiz/Code.gs` |
| `/gate-da/` | GATE DA: maths for the GATE Data Science & AI exam (multi-page: hub + one page per module) | built from `~/Dev/course-sources/gate-da/source` (private backup `SRahul22/gate-da`) |
| `/lno-quiz/` | LNO quiz day: study guide for IISc E1 251 Quiz IV (Ch 7, convexity and duality) and Quiz V (Ch 8, linear programming), with click-to-answer mock quizzes and a printable PDF (has a catalogue card since 2026-11-13; preview image rendered from an HTML mock-up with headless Edge) | hand-written; master copy in OneDrive `E1 251 .../Notes/Quiz 4-5 Preparation/Quiz_Day_Study_Guide.html` (+ `.pdf`, printed from it with headless Edge) |
| `/lno-final/` | LNO Final Exam Pack: end-term pack for IISc E1 251 (six topic modules ordered by marks per hour, past exam questions with hidden answers, a mock end-term paper and a formula sheet; card since 2026-11-26; preview image rendered from an HTML mock-up with headless Edge) | hand-written; master copy in OneDrive `E1 251 .../Final Exam/` (`START HERE.html` becomes `index.html` here, home links rewritten to `./`, local file paths removed) |

Each course is one self-contained `index.html` plus a `preview.png` link-preview image. To add a course, build it into a new folder and add a card to `index.html`.

## Local preview

`python3 -m http.server 8765 --directory ~/Dev/courses`, then open http://localhost:8765/ (the `gate-da` entry in `~/Dev/.claude/launch.json` starts the same server).

Every course links "All courses" with the **root-relative** `href="/"` (changed on 2026-10-04 from the absolute live URL), so clicking it in a local preview stays on localhost and on the live site goes to the catalogue. Keep links between courses root-relative; only `og:`/canonical metadata should use the full `https://courses.rahuldevsharma.com/...` address.
