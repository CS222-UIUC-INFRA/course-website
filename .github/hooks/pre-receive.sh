#!/bin/sh

BRANCH_PATTERN="(feat|bug|test)/"

if ! [[ $1 =~ $BRANCH_PATTERN ]]; then
  echo "Branch name must match the following pattern: $BRANCH_PATTERN"
  exit 1
fi