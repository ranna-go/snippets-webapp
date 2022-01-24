<script lang="ts">
  import { client } from '../client';
  import Snippet from '../components/Snippet.svelte';
  import colors from '../colors';
  import { APIError, Snippet as SnippetModel } from '@ranna-go/ranna-ts';

  import ApiKey from './ApiKey.svelte';
  import MasterKey from './MasterKey.svelte';
  import { apiKey } from '../store';
  import { showSnackbar } from '../snackbarService';

  let snippets: SnippetModel[] = null;

  async function fetchSnippets() {
    await colors.init();
    try {
      client.clientOptions.auth = `bearer ${$apiKey}`;
      snippets = await client.list();
    } catch (e) {
      if (e instanceof APIError) {
        if (e.code ?? e.status === 401) client.logout();
      }
    }
  }

  async function onDelete(s: SnippetModel) {
    await client.delete(s.ident);
    snippets = snippets.filter((_s) => _s !== s);
    showSnackbar(`Snippet '${s.ident}' was deleted.`, 'success', 3500);
  }

  function onSnippetClick(s: SnippetModel) {
    window.open(`${process.env.rannaAppLocation}?s=${s.ident}`);
  }
</script>

<main>
  <div class="content-wrapper">
    <MasterKey />
    <ApiKey />
    {#await fetchSnippets()}
      <i>Loading ...</i>
    {:then}
      <div class="snippets-container">
        {#each snippets as snippet}
          <Snippet
            {snippet}
            on:delete={() => onDelete(snippet)}
            on:click={() => onSnippetClick(snippet)}
          />
        {/each}
      </div>
    {/await}
  </div>
</main>

<style lang="scss">
  .snippets-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
</style>
