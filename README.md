# CareerNest Job Portal

CareerNest is a large responsive job listing website built with HTML, CSS, and JavaScript. It works as a complete front-end job portal with job search, filters, saved jobs, company cards, career resources, recruiter form, FAQ, and a full footer.

## Main Features

- Large homepage with navigation, hero search, popular search chips, hiring highlights, and platform statistics.
- Popular category cards that filter the job list instantly.
- Complete job board with sidebar filters.
- Filter jobs by keyword, location, category, experience level, work mode, and minimum salary.
- Sort jobs by latest first, highest salary, or company name.
- Responsive job cards with company, salary, work mode, openings, posted date, and tags.
- View More modal with job responsibilities, role details, benefits, and skills.
- Save Job feature using browser local storage.
- Saved jobs preview inside the filter sidebar.
- Featured companies section.
- Career resources section.
- Recruiter-facing Post a Job draft form.
- FAQ section.
- Light and dark theme toggle.
- Fully responsive layout for mobile, tablet, and desktop.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage

## How to Run

Open `index.html` in any modern browser.

No installation, build step, or server is required.

## Project Structure

```text
.
+-- index.html
+-- styles.css
+-- script.js
+-- README.md
```

## How the Website Works

The job listings are stored as sample data in `script.js`. JavaScript reads that data and dynamically renders:

- Job cards
- Category cards
- Company cards
- Pagination
- Saved jobs preview
- Job detail modal

When a user changes a filter, the job list updates instantly without reloading the page.

## Deployment

You can deploy this project using GitHub Pages, Netlify, or Vercel.

For GitHub Pages:

1. Create a GitHub repository.
2. Upload or push all project files.
3. Go to repository Settings.
4. Open Pages.
5. Select the main branch and root folder.
6. Save the settings and copy the generated live link.

## Presentation Points

For a 5-10 minute demo, explain:

- The full website structure and sections.
- How job cards are rendered dynamically from JavaScript data.
- How filters, sorting, and pagination work.
- How the View More modal displays extra job details.
- How saved jobs and theme preference use localStorage.
- How the layout adapts for mobile, tablet, and desktop screens.
