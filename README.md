# usage-statusline

Trying out [ccusage](https://github.com/ryoppippi/ccusage)'s built-in statusline instead of writing one.

Add to `~/.claude/settings.json`:

```json
"statusLine": { "type": "command", "command": "npx -y ccusage@latest statusline", "padding": 0 }
```

Shows model, session/today/block cost, burn rate, context usage.
