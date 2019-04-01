@echo .sass-cache

if EXIST %~dp0.sass-cache rd /s/q %~dp0.sass-cache

@echo dist

if EXIST %~dp0dist rd /s/q %~dp0dist

@echo build

if EXIST %~dp0build rd /s/q %~dp0build

if /I "%1"=="all" (
@echo packages

if EXIST %~dp0packages rd /q /s %~dp0packages

@echo node_modules

if EXIST %~dp0node_modules rd /s/q %~dp0node_modules
)