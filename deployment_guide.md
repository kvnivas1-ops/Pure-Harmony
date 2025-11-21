# Complete Deployment Guide for Pure Harmony

This guide will walk you through deploying your website to **Netlify** and connecting it to your **GoDaddy** domain (`pureharmony.in`).

---

## Phase 1: Create the Website Build

Since you are likely working in a local development environment or an online editor:

1.  **Build the project**:
    Open your terminal and run:
    ```bash
    npm run build
    ```
    This creates a folder (usually named `dist` or `build`) containing your final website files (HTML, CSS, JS).

---

## Phase 2: Upload to Netlify

1.  **Log in to Netlify**: Go to [netlify.com](https://www.netlify.com) and sign in.
2.  **Deploy Manually**:
    *   Go to the **"Sites"** tab.
    *   You will see a box that says "Drag and drop your site folder here".
    *   Drag your `dist` (or `build`) folder from Phase 1 into that box.
3.  **Wait for Upload**: Netlify will process the files. Once done, you will get a random URL (e.g., `jolly-beaver-12345.netlify.app`).
4.  **Verify**: Click the link to ensure your site is working visually.

---

## Phase 3: Connect GoDaddy Domain

You purchased your domain on GoDaddy. Now you need to tell the internet that `pureharmony.in` lives on Netlify.

### Step A: Configure Netlify
1.  In your Netlify dashboard, select your site.
2.  Go to **Site configuration** > **Domain management**.
3.  Click **"Add a domain"**.
4.  Type your domain name: `pureharmony.in`.
5.  Click **Verify**, then **Add domain**.

Netlify will now show you two warnings because the DNS isn't pointing there yet. This is normal.
Netlify will provide you with DNS records to add. Usually, they are:
*   **A Record**: pointing to `75.2.60.5` (or similar IP provided by Netlify).
*   **CNAME Record** for `www`: pointing to your Netlify site name (e.g., `jolly-beaver...netlify.app`).

### Step B: Configure GoDaddy
1.  Log in to your [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio).
2.  Select your domain (`pureharmony.in`).
3.  Click on **DNS**.
4.  You need to add/edit the following records:

    **Record 1: The Root Domain (@)**
    *   **Type**: `A`
    *   **Name**: `@`
    *   **Value**: `75.2.60.5` (Copy the exact IP Netlify gave you in Step A).
    *   **TTL**: `1 Hour`

    **Record 2: The Subdomain (www)**
    *   **Type**: `CNAME`
    *   **Name**: `www`
    *   **Value**: `[your-site-name].netlify.app` (e.g., `jolly-beaver-12345.netlify.app`).
    *   **TTL**: `1 Hour`

5.  **Save** your changes.

### Step C: Wait for Propagation
DNS changes can take anywhere from **5 minutes to 48 hours** to propagate worldwide. Netlify will automatically provision an SSL certificate (HTTPS) once the connection is verified.

---

## Phase 4: Add the AI API Key

Your "Wellness Chat" feature uses Google Gemini AI. For this to work on the live site, you must provide the API Key to Netlify.

1.  In Netlify, go to **Site configuration** > **Environment variables**.
2.  Click **Add a variable**.
3.  **Key**: `API_KEY`
4.  **Value**: `[Paste your actual Google Gemini API Key here]`
5.  **Scopes**: Select "All scopes" or "Runtime".
6.  Click **Create variable**.
7.  **Important**: You must **Redeploy** your site for this to take effect.
    *   Go to the **Deploys** tab.
    *   Click "Trigger deploy" > "Deploy site".

---

## Summary Checklist
- [ ] Code built (`npm run build`).
- [ ] Dragged `dist` folder to Netlify.
- [ ] Added `pureharmony.in` in Netlify Domain Settings.
- [ ] Updated A Record and CNAME in GoDaddy DNS.
- [ ] Added `API_KEY` in Netlify Environment Variables.
- [ ] Verified site loads at `pureharmony.in`.
