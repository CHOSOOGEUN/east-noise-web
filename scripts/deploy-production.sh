#!/bin/sh

set -eu

root="$(git rev-parse --show-toplevel)"
cd "$root"

branch="$(git branch --show-current)"
if [ "$branch" != "master" ]; then
  echo "Production deployment blocked: current branch is '$branch', not 'master'." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Production deployment blocked: the working tree is not clean." >&2
  git status --short >&2
  exit 1
fi

git fetch origin master

local_sha="$(git rev-parse HEAD)"
remote_sha="$(git rev-parse origin/master)"
if [ "$local_sha" != "$remote_sha" ]; then
  echo "Production deployment blocked: local master does not match origin/master." >&2
  echo "local:  $local_sha" >&2
  echo "remote: $remote_sha" >&2
  exit 1
fi

npm run check
npm run build
exec vercel --prod --yes
