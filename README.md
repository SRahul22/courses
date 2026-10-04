# Courses

Free, interactive, self-paced courses by Rahul Dev Sharma, published at https://courses.rahuldevsharma.com.

| Path | Course | Source |
|---|---|---|
| `/optimization/` | Downhill: computational methods of optimization (IISc E0 230) | built from `~/Dev/course-sources/downhill/source` (private backup `SRahul22/downhill`) |
| `/head-start/` | HEAD Start: a field guide for new software engineers | built from `~/Dev/course-sources/head-start/source` (private backup `SRahul22/head-start`) |
| `/tour-guide/` | Tour Guide: logistics and freight modelling (IISc SL 225) | built from `~/Dev/course-sources/tour-guide/source` (private backup `SRahul22/tour-guide`) |
| `/gate-da/` | GATE DA: maths for the GATE Data Science & AI exam (multi-page: hub + one page per module) | built from `~/Dev/course-sources/gate-da/source` (private backup `SRahul22/gate-da`) |

Each course is one self-contained `index.html` plus a `preview.png` link-preview image. To add a course, build it into a new folder and add a card to `index.html`.

## Local preview

`python3 -m http.server 8765 --directory ~/Dev/courses`, then open http://localhost:8765/ (the `gate-da` entry in `~/Dev/.claude/launch.json` starts the same server).

Every course links "All courses" with the **root-relative** `href="/"` (changed on 2026-10-04 from the absolute live URL), so clicking it in a local preview stays on localhost and on the live site goes to the catalogue. Keep links between courses root-relative; only `og:`/canonical metadata should use the full `https://courses.rahuldevsharma.com/...` address.
