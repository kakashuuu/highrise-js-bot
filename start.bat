:: Added Title
@echo OFF
title Highrise Bot
color 0a
node --max-old-space-size=1024 --gc-interval=100 app.js
:: Adding Pause on end for errors to be Readable when it occurs.
PAUSE
