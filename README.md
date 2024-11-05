# Para ejecutarlo

```
pnpm install
```

```
pnpm dev
```

En `.env` poner:

```
VITE_BASE_URL='https://api.openweathermap.org/'
VITE_OPEN_WEATHER_API_KEY=<tu clave API de openweathermap>
```

# Notas

- Aprox 30h de trabajo
- Opté por una organización del proyecto más vertical
- Para agilizar el desarrollo, utilicé principalmente librerías de terceros en la parte opcional, mientras que la parte principal está construida principalmente con SASS
- Hace tiempo que no trabajo directamente con estilos basados en SASS, así que probablemente haya margen para optimizar el uso de mixin, variables, extend, etc. Lo considero un área de mejora para futuras iteraciones
- La validación del formulario es un ejemplo básico y para nada un ejemplo de algo listo para prod; podría ajustarse según los requisitos específicos de un proyecto para ser más o menos estricta
