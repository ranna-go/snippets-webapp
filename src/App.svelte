<script lang="ts">
  import { apiKey } from './store';
  import Login from './components/Login.svelte';
  import Home from './components/Home.svelte';
</script>

<main>
  {#if !$apiKey}
    <Login />
  {:else}
    <Home />
  {/if}
</main>

<style lang="scss">
</style>
