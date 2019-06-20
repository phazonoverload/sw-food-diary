<template>
  <div class="wrapper">
    <nuxt/>
  </div>
</template>

<style>
:root {
  --theme: #da0000;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
}

.cta {
  font-weight: bold;
  text-transform: uppercase;
  color: var(--theme);
  font-size: 1.5em;
  border-bottom: 2px solid var(--theme);
  text-decoration: none;
  display: inline-block;
}

a {
  color: var(--theme);
}

#title {
  margin-bottom: 2rem;
}

.input-group {
  margin-bottom: 2em;
}

.input-group label {
  text-transform: uppercase;
  font-weight: bold;
  display: block;
}

.input-group input {
  width: 100%;
  display: block;
  border: 2px solid lightgrey;
}

.input-group input:focus {
  border-color: var(--theme);
}

input[type="submit"] {
  background: var(--theme);
  color: white;
  padding: 0.5em 1.5em;
  -webkit-appearance: none;
}
</style>
