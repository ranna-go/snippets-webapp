<script lang="ts">
  import { apiKey } from './store';
  import Login from './components/Login.svelte';
</script>

<main>
  {#if !$apiKey}
    <Login />
  {:else}
    <div>Logged in</div>
  {/if}
</main>

<style lang="scss">
</style>
