<template>
  <div>
    <ul>
      <li>Change PW</li>
      <li>Delete Acc</li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: 'must-be-logged-in',
}
</script>