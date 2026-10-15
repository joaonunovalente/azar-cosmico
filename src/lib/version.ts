import { execSync } from 'node:child_process';
import packageJson from '../../package.json';

const SHA_PATTERN = /^[0-9a-f]{7,40}$/i;

function readGitSha(): string | null {
  try {
    const out = execSync('git rev-parse --short HEAD', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .trim()
      .toLowerCase();
    return SHA_PATTERN.test(out) ? out : null;
  } catch {
    return null;
  }
}

function readCommitSha(): string | null {
  const raw =
    process.env.CF_PAGES_COMMIT_SHA ??
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.GITHUB_SHA ??
    process.env.COMMIT_SHA ??
    '';
  const sha = raw.trim().toLowerCase();
  return SHA_PATTERN.test(sha) ? sha : null;
}

export interface AppVersion {
  version: string;
  commitSha: string | null;
  shortSha: string | null;
  label: string;
}
export function getAppVersion(): AppVersion {
  const version: string = packageJson.version;
  const commitSha = readCommitSha() ?? readGitSha();
  const shortSha = commitSha ? commitSha.slice(0, 7) : null;
  return {
    version,
    commitSha,
    shortSha,
    label: shortSha ? `v${version} · ${shortSha}` : `v${version}`,
  };
}
