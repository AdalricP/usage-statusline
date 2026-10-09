# usage-statusline

Claude Code status line that shows how much of the subscription limits (5-hour and weekly) is used, as bars.

```
Opus  5h ████░░░░░░ 37% 1h51m  week █░░░░░░░░░ 12% 3d11h
```

Add to `~/.claude/settings.json`:

```json
"statusLine": { "type": "command", "command": "node /path/to/statusline.js", "padding": 0 }
```

Tried ccusage's statusline first; it shows dollar cost, not plan usage.
