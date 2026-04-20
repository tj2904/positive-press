#!/usr/bin/env bash
set -euo pipefail

if [[ -f "$HOME/.nvm/nvm.sh" ]]; then
  # Load nvm when available so the workspace can find the user's Node install.
  # shellcheck disable=SC1090
  . "$HOME/.nvm/nvm.sh"
fi

if ! command -v node >/dev/null 2>&1; then
  echo "node not found in PATH" >&2
  exit 1
fi

exec node node_modules/jest/bin/jest.js "$@"
