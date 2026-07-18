#!/usr/bin/env node
/**
 * Syncs src/data/projects.json with live GitHub repo metadata.
 *
 * For every repo listed under each project's `repos` array, this fetches the
 * repo's description and topics from the GitHub REST API and:
 *   - overwrites `desc` with the primary repo's description (only if GitHub has one set)
 *   - merges topics from all repos into `stack` (deduped, existing entries kept)
 *   - stamps `lastSynced` with the current UTC timestamp
 *
 * Fields that are never touched: id, name, emoji, badge, type, bg, demo, repos.
 * Those are yours to edit by hand in projects.json whenever you want.
 *
 * Run locally:   GITHUB_TOKEN=ghp_xxx node scripts/sync-projects.mjs
 * Run in CI:     the GitHub Actions workflow provides GITHUB_TOKEN automatically.
 */

import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.join(__dirname, '..', 'src', 'data', 'projects.json')

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-sync-script',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
}

async function fetchRepo(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers })
  if (!res.ok) {
    console.warn(`  ! ${owner}/${repo} — GitHub API returned ${res.status}, skipping`)
    return null
  }
  return res.json()
}

function titleCaseTopic(topic) {
  // GitHub topics are lowercase-hyphenated (e.g. "rest-api") — make them display-friendly
  const knownAcronyms = { api: 'API', jwt: 'JWT', rest: 'REST', aws: 'AWS', ui: 'UI', sql: 'SQL' }
  return topic
    .split('-')
    .map(word => knownAcronyms[word] || word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function main() {
  const raw = await readFile(DATA_PATH, 'utf-8')
  const projects = JSON.parse(raw)

  for (const project of projects) {
    console.log(`Syncing ${project.name}...`)
    const primaryRepoRef = project.repos.find(r => r.role === 'primary') || project.repos[0]

    const repoResults = await Promise.all(
      project.repos.map(r => fetchRepo(r.owner, r.repo))
    )

    const primaryData = repoResults[project.repos.indexOf(primaryRepoRef)]

    // Only overwrite description if GitHub actually has one set (repos often don't)
    if (primaryData?.description) {
      project.desc = primaryData.description
    }

    // Track the most recent push across all linked repos, for a "last updated" badge
    const pushDates = repoResults.filter(Boolean).map(r => r.pushed_at).filter(Boolean)
    if (pushDates.length) {
      project.lastRepoUpdate = pushDates.sort().at(-1)
    }

    // Merge topics from all repos into the stack, deduped, keeping existing entries
    const topicSet = new Set(project.stack)
    for (const repoData of repoResults) {
      if (repoData?.topics?.length) {
        repoData.topics.forEach(t => topicSet.add(titleCaseTopic(t)))
      }
    }
    project.stack = Array.from(topicSet)

    project.lastSynced = new Date().toISOString()
  }

  await writeFile(DATA_PATH, JSON.stringify(projects, null, 2) + '\n', 'utf-8')
  console.log(`\nDone. Wrote ${DATA_PATH}`)
}

main().catch(err => {
  console.error('Sync failed:', err)
  process.exit(1)
})
