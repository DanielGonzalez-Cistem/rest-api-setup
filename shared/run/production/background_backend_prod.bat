REM Inicio del script
@Echo off & 

REM Limpieza de consola
:home
cls & 

REM Apuntamos hacia la ruta de la unidad
D: & 
REM Apuntamos hacia la ruta raíz
cd\ & 
REM Apuntamos hacia la ruta donde se aloja el proyecto
cd ...\... & 
REM Ejecución de servidor
@npm start &

REM Finalización del script 
goto End & 