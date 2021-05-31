<script lang="ts">
  import { apiKey } from './store';
  import Login from './components/Login.svelte';
  import Home from './components/Home.svelte';
  import Snackbar from './components/Snackbar.svelte';
  import { showSnackbar } from './snackbarService';
</script>

<main>
  <Snackbar />
  {#if !$apiKey}
    <Login />
  {:else}
    <Home />
  {/if}
</main>

<style lang="scss">
</style>
