#!/data/data/com.termux/files/usr/bin/bash
# JALEP 4.0 Liquid Glass — servidor local de teste
# Uso: bash serve-local.sh  (abre http://localhost:3000 no navegador)
PORT="${1:-3000}"
cd "$(dirname "$0")/out"
echo "════════════════════════════════════════════"
echo "  JALEP 4.0 — Liquid Glass"
echo "  Abra: http://localhost:$PORT"
echo "  (Ctrl+C para parar)"
echo "════════════════════════════════════════════"
exec python -m http.server "$PORT"
