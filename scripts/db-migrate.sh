#!/bin/bash

# Database migration with wp-cli
# Usage: ./db-migrate.sh [export|import|replace]

BACKUP_DIR="backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

mkdir -p "$BACKUP_DIR"

case "$1" in
    export)
        FILE="${BACKUP_DIR}/db_${TIMESTAMP}.sql"
        echo "Exporting database to: $FILE"
        wp db export "$FILE"
        echo "Done!"
        ;;

    import)
        if [ -z "$2" ]; then
            echo "Usage: $0 import <file.sql>"
            exit 1
        fi
        echo "Importing: $2"
        wp db import "$2"
        echo "Done!"
        ;;

    replace)
        if [ -z "$2" ] || [ -z "$3" ]; then
            echo "Usage: $0 replace <old-url> <new-url>"
            exit 1
        fi
        echo "Replacing: $2 -> $3"
        wp search-replace "$2" "$3" --all-tables
        echo "Done!"
        ;;

    *)
        echo "Usage: $0 {export|import|replace}"
        echo ""
        echo "Examples:"
        echo "  $0 export"
        echo "  $0 import backups/db_20240122.sql"
        echo "  $0 replace http://oldsite.com http://newsite.com"
        exit 1
        ;;
esac
