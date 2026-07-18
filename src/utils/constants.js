export const GITHUB_PROFILE_URL = "https://github.com/Abhay-Kumar-Pandey03";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/abhay-kumar-pandey-/";

// Resume — points at a Google Drive file. Replace the file in Drive via
// "Manage versions" (keep the same file, don't create a new one) and this
// link will always serve the latest version — no code changes needed.
export const RESUME_DRIVE_FILE_ID = '1WAhccmTGhdtu4B4N4M90hOalHB1OeTZ8'
export const RESUME_VIEW_URL      = `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/view`
export const RESUME_DOWNLOAD_URL  = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`

// Project links, descriptions, and tech stacks now live in src/data/projects.json,
// which is kept up to date automatically by scripts/sync-projects.mjs (see .github/workflows/sync-projects.yml).