<template>
  <nav>
    <div class="date">
      <span class="btn">Previous day</span>
      <span class="btn">Next day</span>
    </div>
    <div class="pages">
      <n-link to="/diary">Diary</n-link>
      <n-link to="/send">Send</n-link>
      <n-link to="/settings">Settings</n-link>
      <span>Logout</span>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: white;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.25);
}
.date,
.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date {
  padding: 1em 1em 0 1em;
}
.date .btn {
  margin-top: 0;
}
.pages {
  padding: 2em 1em 1em;
}
.pages span {
  color: var(--theme);
  text-decoration: underline;
  cursor: pointer;
}
</style>
