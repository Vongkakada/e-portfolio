### How to Update Your Portfolio Content

This guide explains how to update the text and images on your portfolio website. All content is stored directly in the component files within the `components` directory.

---

#### 1. Profile Image and Information (`components/HeroSection.tsx`)

-   **Profile Picture:** Find the `<img />` tag and replace the `src` URL with a new image link.
-   **Name & Title:** Edit the text within the `<h1>` and `<p>` tags.
-   **CV Download Link:** Find the `<a>` tag with the text "Download CV" and update the `href` attribute to point to your new CV file.
-   **Social Media:** Find the `socialLinks` array at the top of the file. You can add, remove, or edit the `name`, `icon`, and `url` for each link.

---

#### 2. Work Experience (`components/ExperienceSection.tsx`)

-   The content is stored in the `experiences` array.
-   Each object in the array represents a job. You can edit the `role`, `company`, `period`, and `description`.
-   **Images:** Use the `imageUrls` property. This is an array of strings.
    -   For a single static image, provide one URL: `imageUrls: ['http://...']`
    -   For an animated slideshow, provide multiple URLs: `imageUrls: ['http://...', 'http://...']`

---

#### 3. Education & Training (`components/EducationSection.tsx`)

-   **Formal Education:** Edit the `educations` array. Each object represents a degree.
-   **Extra Training:** Edit the `trainings` array. Each object represents a course or certification.
-   For both, you can update the `degree`/`title`, `institution`, and `period`.
-   **Images:** Use the `imageUrls` property. This is an array of strings.
    -   For a single static image, provide one URL: `imageUrls: ['http://...']`
    -   For an animated slideshow, provide multiple URLs: `imageUrls: ['http://...', 'http://...']`

---

#### 4. Skills (`components/SkillsSection.tsx`)

-   All skills are listed in the `skills` array.
-   Each skill has a `name` and a `category`.
-   To add a new skill, add a new object to the array with the correct `name` and `category`.
-   To change the display order of categories, reorder the items in the `categoryOrder` array.

---

#### 5. Projects (`components/ProjectsSection.tsx`)

-   Your projects are in the `projects` array.
-   Each project object has properties like `title`, `description`, `detailedDescription`, `liveUrl`, and `tags`.
-   **Images:** Use the `imageUrls` property. This is an array of strings.
    -   For a single static image, provide one URL: `imageUrls: ['http://...']`
    -   For an animated slideshow, provide multiple URLs: `imageUrls: ['http://...', 'http://...']`
    -   The first image in the array is used as the thumbnail on the main page.

---

#### 6. Contact Information (`components/ContactSection.tsx`)

-   Scroll to the bottom of the file to find the contact details.
-   You can edit the `mailto:` link for your email and the `tel:` link for your phone number.
-   The address is plain text and can be updated directly.