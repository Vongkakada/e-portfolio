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

The contact form uses EmailJS to send emails and Google reCAPTCHA v2 (invisible) to prevent spam. To make it work, you must provide your own API keys using environment variables.

**Step 1: Create the `.env` file**

1.  In the main directory of your project (the same place you see `index.html`), create a new file named `.env`.
2.  Copy the entire content from the `.env.example` file and paste it into your new `.env` file.

**Step 2: Get EmailJS Keys**

1.  Go to [emailjs.com](https://www.emailjs.com) and create a free account.
2.  **Add Email Service:** Go to "Email Services" -> "Add New Service". Choose your email provider (e.g., Gmail) and connect your account. Copy the **Service ID**.
3.  **Create Email Template:** Go to "Email Templates" -> "Create New Template". Design your template and save it. Copy the **Template ID**.
4.  **Find Public Key:** Go to "Account" -> "API Keys". Copy your **Public Key**.

**Step 3: Get Google reCAPTCHA Keys**

1.  Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2.  Fill out the form:
    *   **Label:** A name for your site (e.g., "My Portfolio").
    *   **reCAPTCHA type:** Select **"reCAPTCHA v2"** and then **"Invisible reCAPTCHA badge"**.
    *   **Domains:** Add your website's domain (e.g., `your-site.netlify.app`). For local testing, add `localhost`.
3.  Accept the terms and submit.
4.  Copy the **Site Key**. You will also get a Secret Key, which you'll need for the next step.

**Step 4: Connect reCAPTCHA to EmailJS**

1.  In your EmailJS dashboard, go to "Email Services".
2.  Click on your email service.
3.  Scroll down to the "reCAPTCHA v2" section.
4.  Paste the **Secret Key** from Google reCAPTCHA here and save.

**Step 5: Update your `.env` file**

1.  Open the `.env` file you created.
2.  Replace the placeholder values with the actual keys you copied:

    ```
    PUBLIC_EMAILJS_SERVICE_ID="PASTE_YOUR_SERVICE_ID_HERE"
    PUBLIC_EMAILJS_TEMPLATE_ID="PASTE_YOUR_TEMPLATE_ID_HERE"
    PUBLIC_EMAILJS_PUBLIC_KEY="PASTE_YOUR_PUBLIC_KEY_HERE"
    PUBLIC_RECAPTCHA_SITE_KEY="PASTE_YOUR_RECAPTCHA_SITE_KEY_HERE"
    ```

**Important:** After updating your `.env` file, you must **restart your development server** for the changes to take effect. Your contact form should now be fully functional and secure!