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

---

### Setting up the Contact Form (EmailJS & reCAPTCHA)

The contact form uses EmailJS to send emails and Google reCAPTCHA v2 (invisible) to prevent spam. To make it work, you must provide your own API keys and register your domain.

**Step 1: Get Your API Keys**
You will need four keys:
- EmailJS Service ID
- EmailJS Template ID
- EmailJS Public Key
- Google reCAPTCHA v2 (Invisible) Site Key

If you don't have these, follow the setup guides on the [EmailJS](https://www.emailjs.com) and [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create) websites.

**Step 2: Add Keys to the Code**

1.  Open the file: `components/ContactSection.tsx`.
2.  At the top of the `ContactSection` component, you will see four constants.
3.  Replace the placeholder strings with your actual keys.

    ```javascript
    // Example:
    const EMAILJS_SERVICE_ID = 'service_p1u1qmh';
    const EMAILJS_TEMPLATE_ID = 'template_5jfnn2g';
    const EMAILJS_PUBLIC_KEY = '2UNX9T9vvZS1VnK9_';
    const RECAPTCHA_SITE_KEY = '6Ld0storAAAAAEruFiGb2M2Oaa61N5bPer5oAumN';
    ```

**Step 3: Register Your Website Domain (CRITICAL)**

Google reCAPTCHA keys are tied to specific website domains. **The contact form will fail with an error if your domain is not registered in your reCAPTCHA settings.**

1.  Go to your [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/).
2.  Click on the settings icon (cog wheel) for your site key.
3.  Find the **"Domains"** list.
4.  Add the exact domain of your live website (e.g., `your-portfolio.netlify.app`).
5.  **Important:** Also add `localhost` to the list if you want to test the form on your local computer.
6.  Save your changes.

**Step 4: Save and Deploy**

Save your code changes and deploy your site. Your contact form is now fully configured and ready to use!