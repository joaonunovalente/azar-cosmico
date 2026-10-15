import packageJson from '../../package.json';

const SHA_PATTERN = /^[0-9a-f]{7,40}$/i;

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

/**
 * Version baked into the static HTML at build time.
 * Always shows `package.json` version; appends the short commit SHA
 * when a known CI/host env var provides one.
 */
export function getAppVersion(): AppVersion {
  const version: string = packageJson.version;
  const commitSha = readCommitSha();
  const shortSha = commitSha ? commitSha.slice(0, 7) : null;
  return {
    version,
    commitSha,
    shortSha,
    label: shortSha ? `v${version} · ${shortSha}` : `v${version}`,
  };
}
