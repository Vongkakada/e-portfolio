### How to Update Your Portfolio Content

This guide explains how to update the text and images on your portfolio website. All content is stored directly in the component files within the `components` directory.

---

#### 1. Profile Image and Information (`components/HeroSection.tsx`)

-   **Profile Picture:** Find the `<img />` tag and replace the `src` URL with a new image link.
-   **Name & Title:** Edit the text within the `<h1>` and `<p>` tags.
-   **Social Media:** Find the `socialLinks` array at the top of the file. You can add, remove, or edit the `name`, `icon`, and `url` for each link.

---

#### 2. Work Experience (`components/ExperienceSection.tsx`)

-   The content is stored in the `experiences` array.
-   Each object in the array represents a job. You can edit the `role`, `company`, `period`, and `description` for each job.
-   To add a new job, copy an existing object, paste it at the beginning of the array, and update its content.

---

#### 3. Education (`components/EducationSection.tsx`)

-   Similar to experience, education history is in the `educations` array.
-   Edit the `degree`, `institution`, and `period` for each entry.

---

#### 4. Skills (`components/SkillsSection.tsx`)

-   All skills are listed in the `skills` array.
-   Each skill has a `name` and a `category`.
-   To add a new skill, add a new object to the array with the correct `name` and `category`. The categories are defined in the `categories` array in the same file.

---

#### 5. Projects (`components/ProjectsSection.tsx`)

-   Your projects are in the `projects` array.
-   Each project object has properties like `title`, `description`, `detailedDescription`, `imageUrl`, `liveUrl`, and `tags`.
-   **To add a new project:** Copy an existing project object, paste it into the array, and update all the details.
-   **To change a project image:** Replace the `imageUrl` with a new link.
