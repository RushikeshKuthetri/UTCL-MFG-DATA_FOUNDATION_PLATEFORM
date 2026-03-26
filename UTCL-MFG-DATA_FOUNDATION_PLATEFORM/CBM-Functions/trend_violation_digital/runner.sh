#!/bin/bash

# Go to the script's directory
cd "$(dirname "$0")"

LOG_FILE="trend_violation_digital.log"

while true; do
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Invoking Lambda: trend_violation_digital" >> "$LOG_FILE"
    
    aws lambda invoke \
      --function-name trend_violation_digital \
      --invocation-type Event \
      --payload '{}' \
      output.json >> "$LOG_FILE" 2>&1

    EXIT_CODE=$?
    if [ $EXIT_CODE -ne 0 ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Invocation failed with exit code $EXIT_CODE!" >> "$LOG_FILE"
    fi

    sleep 10
done

