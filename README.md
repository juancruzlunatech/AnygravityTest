# AnygravityTest TODO Scanner

Este proyecto contiene un script en bash diseñado para buscar archivos JavaScript y extraer los comentarios tipo `TODO`.

## Archivos

- `find_todos.sh`: Script en bash que busca archivos `.js` con comentarios "todo" (sin distinguir mayúsculas de minúsculas) y añade su ubicación y número de línea en un archivo llamado `todos.txt` en el escritorio.

## Usos - test commit

1. Otorga permisos de ejecución al script:
   ```bash
   chmod +x find_todos.sh
   ```

2. Ejecuta el script:
   ```bash
   ./find_todos.sh
   ```
